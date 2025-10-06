const CACHE_NAME = 'tamil-dictionary-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'conjugator.html',
  'decliner.html',
  'alphabets.html',
  'alphabet-test.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
