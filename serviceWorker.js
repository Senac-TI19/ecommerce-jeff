const cacheName = "cache-app-v1";

const recursosCacheados = [
  "/ecommerce-jeff/",
  "/ecommerce-jeff/index.html",
  "/ecommerce-jeff/index.js",
];

self.addEventListener("install", function (event) {
  console.log("Service Worker instalado!");
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(recursosCacheados);
    })
  );
});
