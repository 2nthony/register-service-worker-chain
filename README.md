> This project fork from [register-service-worker](https://github.com/yyx990803/register-service-worker)

# register-service-worker-chain

![NPM version](https://badgen.net/npm/v/register-service-worker-chain)
![NPM downloads](https://badgen.net/npm/dm/register-service-worker-chain)
![License](https://badgen.net/npm/license/register-service-worker-chain)

A script to simplify service worker registration with hooks for common events.

## Usage

**Note:** this script uses ES modules export and is expected to be used with a client side bundler that can handle ES modules syntax.

``` js
import { register } from 'register-service-worker-chain'

register('/service-worker.js', {
  scope: './'
})
  .ready(registration => {
    console.log('Service worker is active.')
  })
  .registered(registration => {
    console.log('Service worker has been registered.')
  })
  .cached(registration => {
    console.log('Content has been cached for offline use.')
  })
  .updatefound(registration => {
    console.log('New content is downloading.')
  })
  .updated(registration => {
    console.log('New content is available; please refresh.')
  })
  .offline(() => {
    console.log('No internet connection found. App is running in offline mode.')
  })
  .error(error => {
    console.error('Error during service worker registration:', error)
  )
```

The `ready`, `registered`, `cached`, `updatefound` and `updated` events passes a [ServiceWorkerRegistration](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration) instance in their arguments.
