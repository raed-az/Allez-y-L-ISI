from harness import *
import os, shutil, struct, json
from PIL import Image
# 1) Sous-chemin GitHub Pages : /allez-y-a-l-isi/
site="/home/claude/work/gh"; shutil.rmtree(site, ignore_errors=True); os.makedirs(site)
shutil.copytree("/home/claude/work/isi", site+"/allez-y-a-l-isi")
srv=serve(site, port=8795); base="http://127.0.0.1:8795/allez-y-a-l-isi"
with sync_playwright() as p:
    b,ctx,pg,errs=new_page(p); fails=[]
    pg.on("requestfailed", lambda r: fails.append(r.url)); pg.on("response", lambda r: fails.append(f"{r.status} {r.url}") if r.status>=400 else None)
    login(pg, base)
    for r in "attendance rpg navigator exam skills eco copilot pulse simulator lostfound innovation".split(): goto(pg,r)
    print("subpath: 404/failed:", fails, "errors:", errs); b.close()
    # 2) Caméra : permission refusée (aucun périphérique / refus)
    b,ctx,pg,errs=new_page(p, permissions=[]); login(pg,"http://127.0.0.1:8795/allez-y-a-l-isi"); goto(pg,"attendance")
    pg.click("[data-act=scanstart]"); pg.wait_for_timeout(600)
    print("camera error msg:", pg.inner_text("[role=alert].x-status")); b.close()
    # 3) Vrai scan via flux vidéo simulé : session ouverte, jeton longue durée, QR -> y4m
    b,ctx,pg,errs=new_page(p); login(pg,"http://127.0.0.1:8795/allez-y-a-l-isi"); goto(pg,"attendance")
    pg.click("[data-act=tab][data-id=teacher]"); pg.click("form[data-submit=create] button[type=submit]"); pg.click("[data-act=start]"); pg.wait_for_selector("#att-qr svg")
    sid=pg.evaluate("AttendanceBackend.sessions()[0].id"); slot=pg.evaluate("AttendanceBackend.sessions()[0].slotRef")
    tok=pg.evaluate("(sid)=>AttendanceBackend.issueToken(sid, Date.now()+600000).token", sid)
    svg=pg.evaluate("(t)=>{const q=qrcode(0,'M');q.addData(t);q.make();const n=q.getModuleCount();return {n, m:Array.from({length:n},(_, r)=>Array.from({length:n},(_, c)=>q.isDark(r,c)?1:0))}}", tok)
    n=svg["n"]; W,H=640,480; scale=8; img=Image.new("L",(W,H),255); px=img.load(); off=((W-n*scale)//2,(H-n*scale)//2)
    for r in range(n):
        for c in range(n):
            if svg["m"][r][c]:
                for dy in range(scale):
                    for dx in range(scale): px[off[0]+c*scale+dx, off[1]+r*scale+dy]=0
    y=img.tobytes(); u=bytes([128])*(W*H//4)
    with open("/home/claude/work/tests/qr.y4m","wb") as f:
        f.write(f"YUV4MPEG2 W{W} H{H} F5:1 Ip A1:1 C420jpeg\n".encode())
        for _ in range(10): f.write(b"FRAME\n"+y+u+u)
    state=ctx.storage_state(); b.close()
    b=p.chromium.launch(args=["--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream","--use-file-for-fake-video-capture=/home/claude/work/tests/qr.y4m"])
    ctx=b.new_context(storage_state=state, permissions=["camera"]); pg=ctx.new_page(); errs=[]; pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto("http://127.0.0.1:8795/allez-y-a-l-isi/index.html"); pg.wait_for_selector("#content-area"); goto(pg,"attendance")
    pg.click("[data-act=tab][data-id=student]"); pg.select_option("[data-on=myslot]", slot)
    pg.click("[data-act=scanstart]"); pg.wait_for_selector(".x-status", timeout=15000)
    print("REAL CAMERA SCAN RESULT:", pg.inner_text(".x-status").split("\n")[0], "| errors:", errs)
    print("recorded:", pg.evaluate("AttendanceBackend.sessions()[0].records.map(r=>r.status+':'+r.source)"))
    b.close()
