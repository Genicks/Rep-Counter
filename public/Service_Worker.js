self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./","./sytles.css"])
    })
  )
})

self.addEventListener("fetch", event => {
  console.log(`Intercepting fetch request for: ${event.request.url}`)
})