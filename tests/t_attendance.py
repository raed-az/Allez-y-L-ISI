from harness import *
srv = serve()
base = "http://127.0.0.1:8765"
with sync_playwright() as p:
    b, ctx, pg, errs = new_page(p, viewport={"width":1366,"height":900})
    login(pg, base)
    goto(pg, "attendance")
    print("title:", pg.inner_text("h1"))
    pg.click("[data-act=tab][data-id=teacher]")
    pg.click("form[data-submit=create] button[type=submit]")
    pg.wait_for_timeout(200)
    pg.click("[data-act=start]")
    pg.wait_for_selector("#att-qr svg", timeout=3000)
    print("qr svg ok; count:", pg.inner_text("#att-count"))
    tok1 = pg.input_value("#att-token") if pg.query_selector("#att-token") else pg.evaluate("document.getElementById('att-token').value")
    print("token:", tok1[:40])
    # student scans (same device demo) -> must succeed
    pg.click("[data-act=tab][data-id=student]")
    pg.select_option("[data-on=myslot]", "demo")
    pg.click("[data-act=samedev]")
    print("result1:", pg.inner_text(".x-status"))
    pg.click("[data-act=samedev]")
    print("result2 (dup):", pg.inner_text(".x-status").split("\n")[0])
    # other-session check
    pg.select_option("[data-on=myslot]", "1")
    print("slot changed")
    pg.click("[data-act=samedev]")
    print("result3 (other):", pg.inner_text(".x-status").split("\n")[0])
    # expiry: validate old token at +31s using backend with fake clock
    r = pg.evaluate("""() => { const live = ISI.store.get('att_live'); 
       const me = {id:'zz', name:'ZZ'};
       const s = AttendanceBackend.get(live.sessionId);
       const a = AttendanceBackend.verifyAndRecord(live.token, me, 'demo', live.exp - 1000);
       AttendanceBackend.update(s.id, x=>{x.records=x.records.filter(r=>r.studentId!=='zz')});
       const b = AttendanceBackend.verifyAndRecord(live.token, me, 'demo', live.exp + 1);
       return [a.code, b.code]; }""")
    print("valid-before-exp / expired-after:", r)
    # teacher view rotates after 30s? wait 31s
    pg.click("[data-act=tab][data-id=teacher]")
    t0 = pg.evaluate("document.getElementById('att-token').value")
    print("waiting 31s for rotation..."); pg.wait_for_timeout(31500)
    t1 = pg.evaluate("document.getElementById('att-token').value")
    print("rotated:", t0 != t1)
    print("ERRORS:", errs)
    b.close()
