/* Som Livre — service worker
   Guarda a "casca" do app para abrir mesmo sem internet.
   Ao publicar uma nova versão do index.html, aumente VERSAO. */
const VERSAO = 'somlivre-v1.3';
const CASCA = [
  './',
  './index.html',
  './app.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './maskable-512.png',
  './apple-touch-icon.png',
];
// Leitor de tags das músicas locais: guardado se possível, sem travar a instalação
const EXTRA = 'https://cdn.jsdelivr.net/npm/jsmediatags@3.9.7/dist/jsmediatags.min.js';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(CASCA).then(() => c.add(EXTRA).catch(() => {}))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Página: busca a versão nova na rede; sem internet, usa a guardada
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => { const copia = r.clone(); caches.open(VERSAO).then(c => c.put('./index.html', copia)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Arquivos do próprio app e a biblioteca de tags: primeiro o cache
  if (url.origin === location.origin || url.hostname === 'cdn.jsdelivr.net') {
    e.respondWith(caches.match(req).then(r => r || fetch(req)));
  }
  // Músicas, capas e buscas (Audius / Internet Archive) vão direto à rede
});
