from harness import *
srv = serve(port=8801); base="http://127.0.0.1:8801"
OLD = "dashboard timetable rooms explore teachers subjects search prepa resources assistant publications notifications calendar favorites notes tasks progress pomodoro profile settings about".split()
NEW = "attendance rpg navigator exam skills eco copilot pulse simulator lostfound innovation".split()
with sync_playwright() as p:
    for lang in ("fr","en","ar"):
        b, ctx, pg, errs = new_page(p, viewport={"width":1366,"height":900})
        login(pg, base, lang)
        dirv = pg.evaluate("document.documentElement.dir")
        bad=[]
        for r in OLD+NEW:
            goto(pg, r)
            h = pg.inner_text("#content-area")
            if len(h) < 40 or "[object" in h or "undefined" in h: bad.append((r, h[:80]))
        # untranslated keys: text that looks like a raw i18n key
        raw = pg.evaluate("""() => { const out=[]; for (const r of %s) {} return out; }""" % str(NEW))
        print(lang, "dir=",dirv, "bad pages:", bad, "errors:", errs[:6])
        b.close()
