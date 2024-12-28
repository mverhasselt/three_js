const CACHE_NAME = 'your-app-cache-v1';
const urlsToCache = [
  '/three_js/',
  '/three_js/index.html',
  '/three_js/script.js',
  '/three_js/manifest.json',
  '/three_js/icons/icon192.png',
  '/three_js/icons/icon512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
}); 