const CACHE_NAME = 'v1';
const CACHE_WHITELIST = [CACHE_NAME];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            // Add any static assets you want to cache during installation
            return cache.addAll([
                '/',
                '/index.html',
                '/styles/global.css',
                // Add other assets as needed
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method === 'GET') {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    // Update the cache with the latest response
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, networkResponse.clone());
                        });
                    }
                    return networkResponse;
                });

                // Return the cached response if available, or fetch from the network
                return cachedResponse || fetchPromise;
            })
        );
    }
});

// Clear old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (CACHE_WHITELIST.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
