importScripts("/web-font-test/precache-manifest.209c612476a1d34eab5b72735323469c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'css-cache'
  })
)

workbox.routing.registerRoute(
  /.*\.js/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'js-cache'
  })
)

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
)

workbox.routing.registerRoute(
  /^https:\/\/cdn\.my\.com\/.*\.(jpe?g|png|gif|svg)/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'cdn-images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 5 * 24 * 60 * 60
      })
    ],
    fetchOptions: {
      credentials: 'include'
    }
  })
)

