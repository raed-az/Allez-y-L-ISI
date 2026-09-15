const CACHE='ayi-v1';
const ASSETS=['./','./index.html','./css/style.css','./js/app.js','./data/users.json','./data/students.json','./data/teachers.json','./data/rooms.json','./data/timetable.json','./data/publications.json','./data/chatbot.json','./data/prepa/semester1.json','./data/prepa/semester2.json','./assets/building/building-general.jpeg','./assets/building/timetable-demo.jpeg','./manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))))});
