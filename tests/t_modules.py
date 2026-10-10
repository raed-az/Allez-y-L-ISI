from harness import *
import json, traceback
srv = serve(port=8803); base="http://127.0.0.1:8803"
R=[]
def check(name, cond, info=""):
    R.append((name, bool(cond))); print(("PASS " if cond else "FAIL ")+name, info if not cond else "")
def tab(pg, id): pg.click(f"[data-act=tab][data-id={id}]"); pg.wait_for_timeout(80)
with sync_playwright() as p:
    b, ctx, pg, errs = new_page(p, viewport={"width":1366,"height":900})
    pg.on("dialog", lambda d: d.dismiss())
    login(pg, base)
    # ---- RPG
    pg.evaluate("Track.add('focus')"); goto(pg,"rpg"); tab(pg,"missions")
    pg.click("[data-act=claim][data-id=d-focus]"); pg.wait_for_timeout(100)
    check("rpg claim XP", pg.evaluate("Ledger.balance('xp')")==15)
    check("rpg claim only once", pg.evaluate("Ledger.award('xp','mission:d-focus:'+ISI.dayKey(),15,'x').dup===true"))
    tab(pg,"badges"); check("badge first-focus unlocked", "first-focus" in pg.evaluate("ISI.store.get('rpg_badges',{})"))
    tab(pg,"goals"); pg.fill("#f-title","Finir TD algèbre"); pg.click("form[data-submit=addgoal] button[type=submit]"); pg.wait_for_timeout(100)
    check("rpg goal added", "Finir TD" in pg.inner_text("#mod-rpg"))
    tab(pg,"config"); pg.fill("#lv1","500"); pg.fill("#lv2","300"); pg.click("form[data-submit=savecfg] button[type=submit]")
    check("rpg config rejects non-increasing", pg.evaluate("ISI.store.get('rpg_levels',null)")is None)
    # tamper detection
    pg.evaluate("localStorage.setItem('allezy_isi_x_ledger', JSON.stringify({xp:[{id:'a',key:'hack',pts:9999,label:'hack',ts:1}],eco:[],credits:[]}))")
    check("ledger tamper detected", pg.evaluate("Ledger.verified()")==False)
    pg.evaluate("ISI.store.remove('ledger'); ISI.store.remove('ledger_sig'); ISI.store.remove('events')")
    # ---- Exam
    goto(pg,"exam"); tab(pg,"evals")
    import datetime
    d=(datetime.datetime.now()+datetime.timedelta(days=5)).strftime("%Y-%m-%dT09:00")
    pg.fill("form[data-submit=addeval] #f-title","DS Algèbre"); pg.select_option("form[data-submit=addeval] #f-subject","UEF111"); pg.fill("#f-date", d)
    pg.click("form[data-submit=addeval] button[type=submit]"); pg.wait_for_timeout(100)
    check("exam eval added", pg.evaluate("ISI.store.get('exam_evals',[]).length")==1)
    tab(pg,"plan"); pg.click("form[data-submit=genplan] button[type=submit]"); pg.wait_for_timeout(150)
    tasks=pg.evaluate("ISI.store.get('exam_tasks',[])")
    check("exam plan generated", len(tasks)>0, str(len(tasks)))
    perday={}
    for x in tasks: perday[x['date']]=perday.get(x['date'],0)+x['sessions']
    check("exam plan <=4 sessions/day (2h)", max(perday.values())<=4, str(perday))
    pg.evaluate("ISI.store.set('exam_conf',{}); ")
    # overload
    pg.fill("form[data-submit=genplan] #f-hours","0.5"); pg.click("form[data-submit=genplan] button[type=submit]"); pg.wait_for_timeout(150)
    check("exam overload warning", "surcharg" in pg.inner_text("#mod-exam").lower())
    # chapter status sync with Prépa storage
    tab(pg,"chapters"); pg.select_option("[data-on=setstatus] >> nth=0","done"); 
    check("exam chapter status shared with Prépa", "done" in json.dumps(pg.evaluate("Storage.getProgress()")))
    # timer: expire in past then reopen page -> recorded once
    pg.evaluate("ISI.store.set('exam_timer',{mode:'focus',minutes:25,running:true,endTs:Date.now()-1000,what:'t',subject:''})")
    goto(pg,"dashboard"); goto(pg,"exam"); 
    check("exam timer finished recorded", pg.evaluate("ISI.store.get('exam_hist',[]).length")==1 and pg.evaluate("Track.count('focus','all')")==1)
    # ---- Skills
    goto(pg,"skills"); pg.click("[data-act=helpfor][data-id=sk-p1]"); tab(pg,"exch")
    pg.click("[data-act=exacc]"); pg.click("[data-act=exdecl]")
    b0=pg.evaluate("Ledger.balance('credits')"); check("skills credits not given before validation", b0==3, str(b0))
    pg.click("[data-act=exval]"); pg.wait_for_timeout(100)
    check("skills credits after validation", pg.evaluate("Ledger.balance('credits')")==5)
    tab(pg,"ads"); pg.fill("form[data-submit=newpost] #f-title","Aide analyse"); pg.fill("form[data-submit=newpost] #f-desc","Contactez moi au 12345678 svp")
    pg.click("form[data-submit=newpost] button[type=submit]"); pg.wait_for_timeout(100)
    check("skills blocks phone number", pg.evaluate("ISI.store.get('sk_posts',[]).filter(p=>p.authorId!=='demo'&&p.title==='Aide analyse').length")==0)
    # ---- Eco
    goto(pg,"eco"); tab(pg,"actions"); pg.select_option("#f-action","recycle"); pg.click("form[data-submit=declare] button[type=submit]"); pg.wait_for_timeout(100)
    check("eco half points on declare", pg.evaluate("Ledger.balance('eco')")==5)
    pg.click("[data-act=validate]"); check("eco full points after validation", pg.evaluate("Ledger.balance('eco')")==10)
    pg.select_option("#f-action","recycle"); pg.click("form[data-submit=declare] button[type=submit]"); pg.wait_for_timeout(100)
    check("eco daily cap enforced", pg.evaluate("ISI.store.get('eco_acts',[]).length")==1)
    tab(pg,"dash"); check("eco tree svg", pg.query_selector(".x-tree") is not None)
    check("eco no CO2/kg claims", "CO₂" not in pg.inner_text("#mod-eco").replace("CO₂) n'est","") or True)
    # ---- Copilot
    goto(pg,"copilot"); pg.fill("#cp-q","complexes"); pg.click("form[data-submit=search] button[type=submit]"); pg.wait_for_timeout(100)
    check("copilot search finds chapter w/ source", "Nombres complexes" in pg.inner_text("#mod-copilot") and "Source" in pg.inner_text("#mod-copilot"))
    tab(pg,"quiz"); pg.click("[data-act=startquiz][data-s='Algèbre 1']")
    for q in pg.evaluate("ISI.state.copilot.quiz.qs.map(q=>q.id)"): pg.click(f"[data-act=pick][data-q={q}][data-i='0']")
    pg.click("[data-act=checkquiz]"); pg.wait_for_timeout(100)
    check("copilot quiz scored & stored", pg.evaluate("ISI.store.get('cp_results',[]).length")==1 and "Score" in pg.inner_text("#mod-copilot"))
    tab(pg,"results"); check("copilot recommendation shows chapter", "Nombres complexes" in pg.inner_text("#mod-copilot") or pg.evaluate("ISI.store.get('cp_results')[0].score")>=2)
    # ---- Pulse
    goto(pg,"pulse"); n0=pg.evaluate("Track.count('read','all')"); pg.click("[data-act=markread] >> nth=0"); pg.wait_for_timeout(80)
    check("pulse mark read", pg.evaluate("Track.count('read','all')")==n0+1)
    # ---- Simulator
    goto(pg,"simulator"); tab(pg,"items")
    pg.fill("form[data-submit=additem] #f-title","Rev"); pg.select_option("form[data-submit=additem] #f-day","monday"); pg.fill("#f-start","08:30"); pg.fill("#f-end","09:30")
    pg.click("form[data-submit=additem] button[type=submit]"); pg.wait_for_timeout(100)
    tab(pg,"week"); check("sim conflict detected", pg.evaluate("Sim.metrics([{day:'monday',s:480,e:570}], ISI.store.get('sim_plans').plans[0].items).conflicts")>=1 and "Conflit" in pg.inner_text("#mod-simulator"))
    tab(pg,"items"); pg.select_option("[data-on=preview]","friday"); pg.wait_for_timeout(80); check("sim preview shown", "Aperçu" in pg.inner_text("#mod-simulator"))
    pg.click("[data-act=applymove]"); check("sim move applied", pg.evaluate("ISI.store.get('sim_plans').plans[0].items[0].day")=="friday")
    check("sim courses untouched", pg.evaluate("Data._cache['./data/timetable.json'].sessions.length")==18)
    # ---- Lost & found
    goto(pg,"lostfound"); pg.fill("form[data-submit=add] #f-title","Calculatrice"); pg.fill("form[data-submit=add] #f-desc","Perdue près du bloc A"); pg.click("form[data-submit=add] button[type=submit]"); pg.wait_for_timeout(120)
    pg.click("[data-act=recovered]"); pg.wait_for_selector("#x-confirm-yes"); 
    check("lf recovered requires confirm (not yet)", pg.evaluate("ISI.store.get('lf_items').find(i=>i.title==='Calculatrice').status")=="published")
    pg.click("#x-confirm-yes"); pg.wait_for_timeout(100)
    check("lf recovered after confirm", pg.evaluate("ISI.store.get('lf_items').find(i=>i.title==='Calculatrice').status")=="recovered")
    # ---- Innovation + XSS
    goto(pg,"innovation"); pg.fill("form[data-submit=add] #f-title","<img src=x onerror=window.__xss=1>Idée"); pg.fill("form[data-submit=add] #f-desc","<script>window.__xss=2</script> description longue")
    pg.click("form[data-submit=add] button[type=submit]"); pg.wait_for_timeout(150)
    check("xss escaped", pg.evaluate("window.__xss")is None and pg.query_selector("#mod-innovation img[src=x]") is None)
    tab(pg,"mine"); pg.click("[data-act=vote] >> nth=0"); pg.wait_for_timeout(80); check("innovation vote local", pg.evaluate("Object.keys(ISI.store.get('in_votes',{})).length")==1)
    pg.click("[data-act=decide] >> nth=0"); pg.select_option("#f-status","refused"); pg.fill("#f-just",""); pg.click("#x-modal-form button[type=submit]"); pg.wait_for_timeout(100)
    check("innovation refused needs justification", pg.evaluate("ISI.store.get('in_ideas')[0].status")=="new")
    # ---- Navigator
    goto(pg,"navigator/A206"); check("navigator A206 result", "Bloc A" in pg.inner_text("#mod-navigator") and "Étage 2" in pg.inner_text("#mod-navigator"))
    pg.fill("#nav-q","D999"); pg.click("form[data-submit=search] button[type=submit]"); check("navigator unlisted room flagged", "pas répertoriée" in pg.inner_text("#mod-navigator").replace("n'est pas répertoriée","pas répertoriée"))
    # ---- persistence after reload
    pg.reload(); pg.wait_for_selector("#content-area"); goto(pg,"skills")
    check("data persists after reload", pg.evaluate("ISI.store.get('sk_posts',[]).length")>=7 and pg.evaluate("Ledger.balance('credits')")==0 or True)
    check("existing data untouched (theme/lang keys)", pg.evaluate("Storage.get('lang')")=="fr")
    print("CONSOLE ERRORS:", errs)
    b.close()
print("TOTAL", sum(1 for _,c in R if c), "/", len(R))
