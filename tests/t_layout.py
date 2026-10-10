from harness import *
srv=serve(port=8792); base="http://127.0.0.1:8792"
NEW="attendance rpg navigator exam skills eco copilot pulse simulator lostfound innovation dashboard".split()
with sync_playwright() as p:
    for lang in ("fr","ar"):
      for w in (320,375,414,768,1024,1366,1920):
        b,ctx,pg,errs=new_page(p, viewport={"width":w,"height":800}); login(pg,base,lang)
        over=[]
        for r in NEW:
            goto(pg,r); pg.wait_for_timeout(120)
            sw=pg.evaluate("[document.documentElement.scrollWidth, window.innerWidth]")
            if sw[0]>sw[1]+1:
                culprit=pg.evaluate("""()=>{const W=window.innerWidth;return [...document.querySelectorAll('#content-area *')].filter(e=>e.getBoundingClientRect().right>W+1).slice(0,3).map(e=>e.tagName+'.'+e.className)}""")
                over.append((r,sw,culprit))
        menu=None
        if w<=768:
            pg.click("#btn-hamburger"); pg.wait_for_timeout(300)
            menu=pg.evaluate("(()=>{const r=document.querySelector('#sidebar').getBoundingClientRect();return [Math.round(r.left),Math.round(r.right)]})()")
            pg.evaluate("App.closeSidebarMobile()")
        print(lang,w,"overflow:",over,"menu:",menu,"errs:",errs[:2])
        b.close()
    # dark + screenshots
    b,ctx,pg,errs=new_page(p, viewport={"width":1366,"height":900}); login(pg,base)
    pg.click("#btn-theme-toggle"); 
    for r in ("attendance","eco","simulator"):
        goto(pg,r); pg.wait_for_timeout(400); pg.screenshot(path=f"/home/claude/work/tests/shot_dark_{r}.png")
    print("theme:", pg.evaluate("document.documentElement.dataset.theme")); b.close()
    b,ctx,pg,errs=new_page(p, viewport={"width":390,"height":844}); login(pg,base,"ar"); goto(pg,"exam"); pg.wait_for_timeout(300); pg.screenshot(path="/home/claude/work/tests/shot_ar_exam.png"); b.close()
