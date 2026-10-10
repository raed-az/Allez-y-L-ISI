import re, sys, threading, http.server, socketserver, functools, os
from playwright.sync_api import sync_playwright

ROOT = os.environ.get("ISI_ROOT", "/home/claude/work/isi")
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
def serve(root=ROOT, port=8765):
    h = functools.partial(Q, directory=root)
    socketserver.TCPServer.allow_reuse_address=True; srv = socketserver.TCPServer(("127.0.0.1", port), h)
    threading.Thread(target=srv.serve_forever, daemon=True).start(); return srv

def login(page, base, lang=None):
    page.goto(base + "/index.html")
    if lang: page.evaluate(f"localStorage.setItem('allezy_isi_lang', JSON.stringify('{lang}'))"); page.reload()
    page.click("[data-role=student]")
    q = page.inner_text(".captcha-question"); a,b = map(int, re.findall(r"\d+", q))
    page.fill("#login-email", "mohamedraed.azouzi@etudiant-isi.utm.tn")
    page.fill("#login-captcha", str(a+b)); page.click("#login-form button[type=submit]")
    page.wait_for_selector("#content-area .page-header, #content-area h1", timeout=8000)

def goto(page, route):
    page.evaluate(f"location.hash='#/{route}'")
    page.wait_for_timeout(350)

def new_page(p, **kw):
    b = p.chromium.launch()
    ctx = b.new_context(**kw); pg = ctx.new_page()
    errs = []
    pg.on("pageerror", lambda e: errs.append("PAGEERROR " + str(e)))
    pg.on("console", lambda m: errs.append("CONSOLE " + m.text) if m.type == "error" else None)
    return b, ctx, pg, errs
