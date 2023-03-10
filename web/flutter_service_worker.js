'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f9928e75c1ebd496d824cf5168b4301e",
"index.html": "54daeaac66f633e3f19d9abe30645440",
"/": "54daeaac66f633e3f19d9abe30645440",
"main.dart.js": "349767de21a22b97a8a5728e33c8d061",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "c62d2ef48d95119b2dc31ab70b70c546",
"icons/favicon.ico": "60e2cf2d6a4afe96d3293395d4251244",
"icons/apple-icon.png": "a974fffc2ee686c18629451f02fc17eb",
"icons/apple-icon-144x144.png": "80dbe43837fdf12d75b657b721277957",
"icons/android-icon-192x192.png": "28f2f44521549d684561d45681a84b74",
"icons/apple-icon-precomposed.png": "a974fffc2ee686c18629451f02fc17eb",
"icons/apple-icon-114x114.png": "9d048f7f5ccf5391d298150f20ece619",
"icons/ms-icon-310x310.png": "a5f9e6497e9fdb63c21bf6244b82641f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ms-icon-144x144.png": "80dbe43837fdf12d75b657b721277957",
"icons/apple-icon-57x57.png": "0458cf1df38d5b24ed9ac816d23052bf",
"icons/apple-icon-152x152.png": "d291c857628ce5535d35b47230aab8ed",
"icons/ms-icon-150x150.png": "dabfeca402a5b849f958cfd6ae21ae80",
"icons/android-icon-72x72.png": "eaa80318ce53f6df4885705bcabca039",
"icons/android-icon-96x96.png": "38009c949ed4e2c98850d60110588fe6",
"icons/android-icon-36x36.png": "d83852398ba0aaa46fdc5372315e7951",
"icons/apple-icon-180x180.png": "20acf3c9bf9381e024eb76390a91812a",
"icons/favicon-96x96.png": "38009c949ed4e2c98850d60110588fe6",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "34be353e82773dfbfd03bcf41679d048",
"icons/apple-icon-76x76.png": "a3a259498c714a9f647c5bd5a4b530bf",
"icons/apple-icon-60x60.png": "dc41115222d1e6effcf42171a5911de8",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "80dbe43837fdf12d75b657b721277957",
"icons/apple-icon-72x72.png": "eaa80318ce53f6df4885705bcabca039",
"icons/apple-icon-120x120.png": "98f36697755dfbc6587baa05206dd00e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "28069527445297e5d5185b616c9d406b",
"icons/ms-icon-70x70.png": "8c486043fd2d4156bfcdf0ddc438f9a3",
"manifest.json": "4520e8c5359e78c7631172a99fff207e",
"assets/AssetManifest.json": "0f914d6c75c93b93434fe7a0ecb66f93",
"assets/NOTICES": "f9e0f577cd4043924e9ba2cc1830807b",
"assets/FontManifest.json": "db5120a8ef5cee0659e4126c260ccfea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2bf889d805290098f21fe53495a6a247",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/auth.png": "7009fa709ab8d063423ded976f76c1cc",
"assets/assets/images/user2.png": "9a2b65f2be06e5651109e88cc90dfee3",
"assets/assets/images/logo2.png": "bbd43e30f8b5d4e7d3773204cbc41f7b",
"assets/assets/images/diamond.png": "3135ecf814bfb2b0f35e95b94e6c0052",
"assets/assets/images/btc.png": "76399625d5ed8db9a1632941270efb95",
"assets/assets/images/blockchain.jpg": "cfdbcd5940deb8aa969c311f8257d008",
"assets/assets/images/no_internet.png": "0e2f848f0ca1029f55ed003875d03fb5",
"assets/assets/images/money_bag.png": "6a35a0f6249bb4a35e9b06ed307b5060",
"assets/assets/images/crown.png": "6f9eb9cc9b1ad29fe58f27ab14b9a73f",
"assets/assets/fonts/Pelak-Regular.ttf": "ca0d0d5eb57fed15d59cb60433d7a5bc",
"assets/assets/fonts/Polly-light.otf": "781ae68b0d18659d1451a3b58849aef8",
"assets/assets/fonts/Polly-Regular.otf": "206e092448f46dfda216b6c070c7e00e",
"assets/assets/fonts/Pelak-Bold.ttf": "bce14e3f2097e10f757996e68b846675",
"assets/assets/fonts/PelakFA-Regular.ttf": "2f77a2408334071c7a3c5cfcea060298",
"assets/assets/fonts/Polly-Bold.otf": "363aef3f98e1b34c0fb2657211c77ed3",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
