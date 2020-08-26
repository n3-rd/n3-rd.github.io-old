var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    'main.js',
    '../../index.html',
    '../css/bootstrap.min.css',
    'jquery.min.js'
]

self.addEventListener('install', function(event){
    //perform installation steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    )
})