from harness import *
srv = serve(port=8804); base="http://127.0.0.1:8804"
with sync_playwright() as p:
    b, ctx, pg, errs = new_page(p, viewport={"width":1366,"height":900})
    login(pg, base); goto(pg, "attendance")
    pg.click("[data-act=tab][data-id=teacher]")
    pg.click("form[data-submit=create] button[type=submit]"); pg.wait_for_timeout(200)
    pg.click("[data-act=start]"); pg.wait_for_selector("#att-qr svg")
    slot = pg.evaluate("AttendanceBackend.sessions()[0].slotRef"); print("slot", slot)
    pg.click("[data-act=tab][data-id=student]")
    pg.select_option("[data-on=myslot]", slot)
    pg.click("[data-act=samedev]"); print("1st:", pg.inner_text(".x-status").split("\n")[0])
    pg.click("[data-act=samedev]"); print("2nd:", pg.inner_text(".x-status").split("\n")[0])
    r = pg.evaluate("""(slot) => { const live = ISI.store.get('att_live'); const me={id:'zz',name:'ZZ'};
       const a = AttendanceBackend.verifyAndRecord(live.token, me, slot, live.exp - 1000);
       AttendanceBackend.update(live.sessionId, x=>{x.records=x.records.filter(r=>r.studentId!=='zz')});
       const e = AttendanceBackend.verifyAndRecord(live.token, me, slot, live.exp + 1);
       const forged = AttendanceBackend.verifyAndRecord(live.token.replace(/.$/,'x'), me, slot, live.exp-1000);
       const fmt = AttendanceBackend.verifyAndRecord('hello', me, slot);
       return [a.code, e.code, forged.code, fmt.code]; }""", slot)
    print("valid / expired / forged / format:", r)
    # pause + close states
    pg.click("[data-act=tab][data-id=teacher]")
    pg.click("[data-act=simscan]"); print("present count:", pg.inner_text("#att-n-p"))
    pg.click("[data-act=pause]"); print("paused chip:", pg.inner_text("#att-state"))
    pg.click("[data-act=tab][data-id=student]"); pg.click("[data-act=samedev]")
    print("student when paused:", pg.inner_text(".x-status").split("\n")[0])
    # CSV
    pg.click("[data-act=tab][data-id=teacher]")
    with pg.expect_download() as d: pg.click("[data-act=csv]")
    path = d.value.path(); print("csv head:", open(path,encoding='utf-8-sig').read().split("\r\n")[:3])
    print("REAL ERRORS:", [e for e in errs if "404" not in e])
    b.close()
