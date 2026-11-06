const CACHE_NAME = 'hr-life-calc-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'sw.js'
];

// Pasang Service Worker dan simpan fail dalam cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Ambil fail daripada cache jika offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
