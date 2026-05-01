const CACHE_NAME = 'tajkomp-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // добавьте сюда пути к вашим CSS или картинкам, если нужно
];

// Установка
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Работа с запросами
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});