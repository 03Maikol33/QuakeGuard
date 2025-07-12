// service-worker.js

const CACHE_NAME = 'my-site-cache-v1';
const OFFLINE_URL = '../offline.html';

const urlsToCache = [
    '/',
    OFFLINE_URL,
    // Aggiungi qui altre risorse da mettere in cache
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(function() {
                return caches.match(OFFLINE_URL).then(function(response) {
                    // Se troviamo una risposta nella cache, la restituiamo
                    if (response) {
                        return response;
                    } else {
                        // Fallback per i browser che non supportano correttamente la cache
                        return new Response('<h1>Sei offline</h1><p>Per favore riprova quando sarai connesso a internet.</p>', {
                            headers: { 'Content-Type': 'text/html' }
                        });
                    }
                });
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            })
        );
    }
});
