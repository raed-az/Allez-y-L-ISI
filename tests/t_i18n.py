from harness import *
import re
srv = serve(port=8802); base="http://127.0.0.1:8802"
with sync_playwright() as p:
    b, ctx, pg, errs = new_page(p)
    login(pg, base)
    r = pg.evaluate("""() => { const pre=/^(att_|rpg_|nav2_|ex_|sk_|eco_|cp_|pu_|sim_|lf_|in_|x_|nav_(g_|navigator|pulse|lostfound|exam|copilot|simulator|skills|innovation|attendance|eco|rpg))/;
      const miss={en:[],ar:[]}; for (const k of Object.keys(I18N.fr)) { if(!pre.test(k)) continue; for (const l of ['en','ar']) if(!(k in I18N[l])) miss[l].push(k); }
      const extra=[]; for (const l of ['en','ar']) for (const k of Object.keys(I18N[l])) if(pre.test(k) && !(k in I18N.fr)) extra.push(l+':'+k);
      return {miss, extra, n:Object.keys(I18N.fr).filter(k=>pre.test(k)).length}; }""")
    print("keys:", r["n"], "missing en:", r["miss"]["en"][:10], "missing ar:", r["miss"]["ar"][:10], "extra:", r["extra"][:10])
    # raw keys visible in rendered pages / used but undefined
    for lang in ("fr","ar"):
        pg.evaluate(f"localStorage.setItem('allezy_isi_lang', JSON.stringify('{lang}'))"); pg.reload(); pg.wait_for_selector("#content-area")
        for route in "attendance rpg navigator exam skills eco copilot pulse simulator lostfound innovation".split():
            goto(pg, route)
            txt = pg.inner_text("#content-area")
            raws = set(re.findall(r"\b(?:att|rpg|nav2|ex|sk|eco|cp|pu|sim|lf|in|x)_[a-z_0-9]+\b", txt))
            if raws: print(lang, route, "RAW KEYS:", sorted(raws)[:8])
    print("errors:", errs)
    b.close()
