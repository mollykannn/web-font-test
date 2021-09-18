import { precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'

clientsClaim()
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
precacheAndRoute(self.__WB_MANIFEST)
