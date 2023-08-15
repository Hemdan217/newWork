(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"23fh7":[function(require,module,exports) {
var g = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var _ = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var w = new Set(g), y = (e)=>w.has(e), j = g.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var G = y("--dry-run"), m = ()=>y("--verbose") || _().VERBOSE === "true", U = m();
var f = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var b = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>f("\uD83D\uDD35 INFO", ...e), h = (...e)=>f("\uD83D\uDFE0 WARN", ...e), B = 0, i = (...e)=>m() && f(`\u{1F7E1} ${B++}`, ...e);
var R = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "D:\\New Work\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var M = module.bundle.Module;
function D(e) {
    M.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = D;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function u() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var x = "__plasmo_runtime_page_", P = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${u()}:${d()}/`;
async function S(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function k(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function E(e = d()) {
    let t = u();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function C(e) {
    typeof e.message == "string" && b("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(E(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", C), t;
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(E());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            h("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", C), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        h(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var A = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!A || !A.isParcelRequire) {
    R();
    let e = L(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>k(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await S(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(x), o = e.name.startsWith(P);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _background = require("../../../background");

},{"../../../background":"k375p"}],"k375p":[function(require,module,exports) {
var token;
let blockAll = false;
// This event runs when the extension receives a message from the popup
chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if (request.action == "start") {
        console.log(request.payload);
        token = request.payload;
        chrome.runtime.sendMessage({
            token
        });
    } else if (request.action == "checkThisUrl") {
        console.log(request.action);
        fetch("http://178.170.48.29:5000/prediction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
            body: JSON.stringify({
                url: request.payload
            })
        }).then(function(res) {
            console.log(request.payload);
            return res.json();
        }).then(function(data) {
            console.log(data);
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs) {
                changeIcon(data.predict, tabs[0].id);
            });
            sendResponse(data);
        }).catch(function(err) {
            console.log(err);
            sendResponse({
                error: "An error occurred"
            });
        });
        // Return true to indicate that the response will be sent asynchronously
        return true;
    } else if (request.action == "changeIcon") changeIcon(request.prediction, request.id);
    else if (request.action == "changeIconCurrent") chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        changeIcon(request.prediction, tabs[0].id);
    });
    else if (request.action == "checkThisUrl2") {
        console.log(request.action);
        fetch("http://178.170.48.29:5000/prediction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
            body: JSON.stringify({
                url: request.payload
            })
        }).then(function(res) {
            console.log(request.payload);
            return res.json();
        }).then(function(data) {
            console.log(data);
            // chrome.tabs.query(
            //   { active: true, currentWindow: true },
            //   function (tabs) {
            //     changeIcon(data.predict, tabs[0].id);
            //   }
            // );
            sendResponse(data);
        }).catch(function(err) {
            console.log(err);
            sendResponse({
                error: "An error occurred"
            });
        });
        // Return true to indicate that the response will be sent asynchronously
        return true;
    }
});
let blockAllRequests = true;
let predicted = false;
let tabId;
let originalUrl;
let pendingRequests = [];
let blockedUrls = [];
chrome.webRequest.onBeforeRequest.addListener(function() {
    return {
        cancel: false
    };
}, {
    urls: [
        "<all_urls>"
    ],
    tabId: -1
}, [
    "blocking"
]);
chrome.webRequest.onBeforeSendHeaders.addListener(function() {
    return {
        cancel: false
    };
}, {
    urls: [
        "<all_urls>"
    ],
    tabId: -1
}, [
    "blocking"
]);
chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    console.log(details.url);
    predicted = false;
    if (details.frameId == 0 && !(details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url.includes("index.html?checkUrl="))) {
        if (originalUrl !== details.url && !details.url.includes("index.html?checkUrl=")) {
            originalUrl = details.url;
            tabId = details.tabId;
            chrome.tabs.update(details.tabId, {
                url: `https:chrome-extension/${chrome.runtime.id}/index.htm?checkUrl=${originalUrl}`
            });
        }
    } else if (details.frameId == 0 && details.url.includes("index.html?checkUrl=")) {
        let checkingURl = details.url.split("=")[1];
        fetch("http://178.170.48.29:5000/prediction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
            body: JSON.stringify({
                url: checkingURl
            })
        }).then((response)=>{
            // Check if the response was successful
            if (response.ok) response.json().then((data)=>{
                changeIcon(data?.predict, details.tabId);
                chrome.tabs.sendMessage(details.tabId, {
                    prediction: data?.predict,
                    id: details.tabId
                });
                if (data?.predict == "NORMAL") {
                    chrome.tabs.update(details.tabId, {
                        url: `${checkingURl}`
                    });
                    changeIcon(data?.predict, details.tabId);
                } else if (data?.predict == "MALICIOUS") chrome.tabs.sendMessage(details.tabId, {
                    prediction: data?.predict,
                    id: details.tabId
                });
            });
            else chrome.tabs.update(details.tabId, {
                url: "error.html"
            });
        }).catch((error)=>{
            // Handle any errors that occur during the request
            // Cancel the navigation
            chrome.tabs.update(details.tabId, {
                url: "error.html"
            });
        });
    } else if (details.frameId == 0 && (details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url == "https://google.com/")) originalUrl = details.url;
});
function handleBeforeRequest(details) {
    if (details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url == "http://178.170.48.29:5000/prediction" || details.url == "http://178.170.48.29:5000/authenticate" || details.url == "ws://localhost:1815/") return {
        cancel: false
    };
    else if (details.tabId === chrome.runtime.id) return {
        cancel: false
    }; // Continue with the request
    else {
        // Delay the request by 3 seconds
        var delayInMilliseconds = 500; // 3 seconds
        var startTime = new Date().getTime();
        var endTime = startTime + delayInMilliseconds;
        // Wait until the specified delay has passed
        while(new Date().getTime() < endTime);
    }
}
chrome.webRequest.onBeforeRequest.addListener(handleBeforeRequest, {
    urls: [
        "<all_urls>"
    ],
    types: [
        "main_frame"
    ]
}, [
    "blocking"
]);
chrome.webRequest.onBeforeSendHeaders.addListener(blockRequests, {
    urls: [
        "<all_urls>"
    ],
    types: [
        "main_frame"
    ]
}, [
    "blocking"
]);
function blockRequests(details) {
    if (details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url == "http://178.170.48.29:5000/prediction" || details.url == "http://178.170.48.29:5000/authenticate" || details.url == "ws://localhost:1815/") return {
        cancel: false
    };
    else if (details.tabId === chrome.runtime.id) return {
        cancel: false
    }; // Continue with the request
    else {
        // Delay the request by 3 seconds
        var delayInMilliseconds = 500; // 3 seconds
        var startTime = new Date().getTime();
        var endTime = startTime + delayInMilliseconds;
        // Wait until the specified delay has passed
        while(new Date().getTime() < endTime);
    }
}
function changeIcon(prediction, currentTab) {
    if (prediction == "NORMAL") chrome.browserAction.setIcon({
        tabId: currentTab,
        path: {
            16: "./../../assets/normal/icon16.plasmo.6c567d50.png",
            32: "./../../assets/normal/icon32.plasmo.76b92899.png",
            48: "./../../assets/normal/icon48.plasmo.aced7582.png",
            64: "./../../assets/normal/icon64.plasmo.8bb5e6e0.png",
            128: "./../../assets/normal/icon128.plasmo.3c1ed2d2.png"
        }
    });
    else if (prediction == "MALICIOUS") chrome.browserAction.setIcon({
        tabId: currentTab,
        path: {
            16: "./../../assets/icon16.plasmo.6c567d50.png",
            32: "./../../assets/icon32.plasmo.76b92899.png",
            48: "./../../assets/icon48.plasmo.aced7582.png",
            64: "./../../assets/icon64.plasmo.8bb5e6e0.png",
            128: "./../../assets/icon128.plasmo.3c1ed2d2.png"
        }
    });
}

},{}]},["23fh7","8oeFb"], "8oeFb", "parcelRequire91c9")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFFMUIsNENBQTRDO1FBQzVDLE1BQU8sSUFBSSxPQUFPLFlBQVk7SUFHaEM7QUFDRjtBQUVBLFNBQVMsV0FBVyxVQUFVLEVBQUUsVUFBVTtJQUN4QyxJQUFJLGNBQWMsVUFDaEIsT0FBTyxjQUFjLFFBQVE7UUFDM0IsT0FBTztRQUNQLE1BQU07WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osS0FBSztRQUNQO0lBQ0Y7U0FDSyxJQUFJLGNBQWMsYUFDdkIsT0FBTyxjQUFjLFFBQVE7UUFDM0IsT0FBTztRQUNQLE1BQU07WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osS0FBSztRQUNQO0lBQ0Y7QUFFSiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtODcyMzA3MzljZmYxMmQyMC5qcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCJiYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnPXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIF89KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgdz1uZXcgU2V0KGcpLHk9ZT0+dy5oYXMoZSksaj1nLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIEc9eShcIi0tZHJ5LXJ1blwiKSxtPSgpPT55KFwiLS12ZXJib3NlXCIpfHxfKCkuVkVSQk9TRT09PVwidHJ1ZVwiLFU9bSgpO3ZhciBmPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBiPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PmYoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxoPSguLi5lKT0+ZihcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLEI9MCxpPSguLi5lKT0+bSgpJiZmKGBcXHV7MUY3RTF9ICR7QisrfWAsLi4uZSk7dmFyIFI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJEOlxcXFxOZXcgV29ya1xcXFwucGxhc21vXFxcXHN0YXRpY1xcXFxiYWNrZ3JvdW5kXFxcXGluZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiYzMzODkwOGU3MDRjOTFmMVwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIE09bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gRChlKXtNLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUQ7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBjPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gdSgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgeD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixQPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7dSgpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBTKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBrKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gRShlPWQoKSl7bGV0IHQ9dSgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEMoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmYihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEUoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEMpLHR9ZnVuY3Rpb24gTChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoRSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7aChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQyksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntoKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgQT1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighQXx8IUEuaXNQYXJjZWxSZXF1aXJlKXtSKCk7bGV0IGU9TChhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+ayhtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgUygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoeCksbz1lLm5hbWUuc3RhcnRzV2l0aChQKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZFwiIiwidmFyIHRva2VuO1xyXG5sZXQgYmxvY2tBbGwgPSBmYWxzZTtcclxuXHJcbi8vIFRoaXMgZXZlbnQgcnVucyB3aGVuIHRoZSBleHRlbnNpb24gcmVjZWl2ZXMgYSBtZXNzYWdlIGZyb20gdGhlIHBvcHVwXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyBmdW5jdGlvbiAoXHJcbiAgcmVxdWVzdCxcclxuICBzZW5kZXIsXHJcbiAgc2VuZFJlc3BvbnNlXHJcbikge1xyXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PSBcInN0YXJ0XCIpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QucGF5bG9hZCk7XHJcblxyXG4gICAgdG9rZW4gPSByZXF1ZXN0LnBheWxvYWQ7XHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHRva2VuIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT0gXCJjaGVja1RoaXNVcmxcIikge1xyXG4gICAgY29uc29sZS5sb2cocmVxdWVzdC5hY3Rpb24pO1xyXG4gICAgZmV0Y2goXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHVybDogcmVxdWVzdC5wYXlsb2FkLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnBheWxvYWQpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KFxyXG4gICAgICAgICAgeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZUljb24oZGF0YS5wcmVkaWN0LCB0YWJzWzBdLmlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZW5kUmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogXCJBbiBlcnJvciBvY2N1cnJlZFwiIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBSZXR1cm4gdHJ1ZSB0byBpbmRpY2F0ZSB0aGF0IHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQgYXN5bmNocm9ub3VzbHlcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT0gXCJjaGFuZ2VJY29uXCIpIHtcclxuICAgIGNoYW5nZUljb24ocmVxdWVzdC5wcmVkaWN0aW9uLCByZXF1ZXN0LmlkKTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09IFwiY2hhbmdlSWNvbkN1cnJlbnRcIikge1xyXG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuICAgICAgY2hhbmdlSWNvbihyZXF1ZXN0LnByZWRpY3Rpb24sIHRhYnNbMF0uaWQpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PSBcImNoZWNrVGhpc1VybDJcIikge1xyXG4gICAgY29uc29sZS5sb2cocmVxdWVzdC5hY3Rpb24pO1xyXG4gICAgZmV0Y2goXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHVybDogcmVxdWVzdC5wYXlsb2FkLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnBheWxvYWQpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KFxyXG4gICAgICAgIC8vICAgeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSxcclxuICAgICAgICAvLyAgIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgLy8gICAgIGNoYW5nZUljb24oZGF0YS5wcmVkaWN0LCB0YWJzWzBdLmlkKTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyApO1xyXG5cclxuICAgICAgICBzZW5kUmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogXCJBbiBlcnJvciBvY2N1cnJlZFwiIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBSZXR1cm4gdHJ1ZSB0byBpbmRpY2F0ZSB0aGF0IHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQgYXN5bmNocm9ub3VzbHlcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufSk7XHJcblxyXG5sZXQgYmxvY2tBbGxSZXF1ZXN0cyA9IHRydWU7XHJcbmxldCBwcmVkaWN0ZWQgPSBmYWxzZTtcclxubGV0IHRhYklkO1xyXG5sZXQgb3JpZ2luYWxVcmw7XHJcbmxldCBwZW5kaW5nUmVxdWVzdHMgPSBbXTtcclxubGV0IGJsb2NrZWRVcmxzID0gW107XHJcbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcclxuICBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07XHJcbiAgfSxcclxuICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0sIHRhYklkOiAtMSB9LFxyXG4gIFtcImJsb2NraW5nXCJdXHJcbik7XHJcbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlU2VuZEhlYWRlcnMuYWRkTGlzdGVuZXIoXHJcbiAgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9O1xyXG4gIH0sXHJcbiAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdLCB0YWJJZDogLTEgfSxcclxuICBbXCJibG9ja2luZ1wiXVxyXG4pO1xyXG5cclxuY2hyb21lLndlYk5hdmlnYXRpb24ub25CZWZvcmVOYXZpZ2F0ZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoZGV0YWlscykge1xyXG4gIGNvbnNvbGUubG9nKGRldGFpbHMudXJsKTtcclxuXHJcbiAgcHJlZGljdGVkID0gZmFsc2U7XHJcbiAgaWYgKFxyXG4gICAgZGV0YWlscy5mcmFtZUlkID09IDAgJiZcclxuICAgICEoXHJcbiAgICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lLWV4dGVuc2lvbjpcIikgfHxcclxuICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpIHx8XHJcbiAgICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiaW5kZXguaHRtbD9jaGVja1VybD1cIilcclxuICAgIClcclxuICApIHtcclxuICAgIGlmIChcclxuICAgICAgb3JpZ2luYWxVcmwgIT09IGRldGFpbHMudXJsICYmXHJcbiAgICAgICFkZXRhaWxzLnVybC5pbmNsdWRlcyhcImluZGV4Lmh0bWw/Y2hlY2tVcmw9XCIpXHJcbiAgICApIHtcclxuICAgICAgb3JpZ2luYWxVcmwgPSBkZXRhaWxzLnVybDtcclxuICAgICAgdGFiSWQgPSBkZXRhaWxzLnRhYklkO1xyXG5cclxuICAgICAgY2hyb21lLnRhYnMudXBkYXRlKGRldGFpbHMudGFiSWQsIHtcclxuICAgICAgICB1cmw6IGBodHRwczpjaHJvbWUtZXh0ZW5zaW9uLyR7Y2hyb21lLnJ1bnRpbWUuaWR9L2luZGV4Lmh0bT9jaGVja1VybD0ke29yaWdpbmFsVXJsfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBkZXRhaWxzLmZyYW1lSWQgPT0gMCAmJlxyXG4gICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJpbmRleC5odG1sP2NoZWNrVXJsPVwiKVxyXG4gICkge1xyXG4gICAgbGV0IGNoZWNraW5nVVJsID0gZGV0YWlscy51cmwuc3BsaXQoXCI9XCIpWzFdO1xyXG4gICAgZmV0Y2goXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHVybDogY2hlY2tpbmdVUmwsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VJY29uKGRhdGE/LnByZWRpY3QsIGRldGFpbHMudGFiSWQpO1xyXG4gICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShkZXRhaWxzLnRhYklkLCB7XHJcbiAgICAgICAgICAgICAgcHJlZGljdGlvbjogZGF0YT8ucHJlZGljdCxcclxuICAgICAgICAgICAgICBpZDogZGV0YWlscy50YWJJZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmVkaWN0ID09IFwiTk9STUFMXCIpIHtcclxuICAgICAgICAgICAgICBjaHJvbWUudGFicy51cGRhdGUoZGV0YWlscy50YWJJZCwge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtjaGVja2luZ1VSbH1gLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNoYW5nZUljb24oZGF0YT8ucHJlZGljdCwgZGV0YWlscy50YWJJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJlZGljdCA9PSBcIk1BTElDSU9VU1wiKSB7XHJcbiAgICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwge1xyXG4gICAgICAgICAgICAgICAgcHJlZGljdGlvbjogZGF0YT8ucHJlZGljdCxcclxuICAgICAgICAgICAgICAgIGlkOiBkZXRhaWxzLnRhYklkLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKGRldGFpbHMudGFiSWQsIHsgdXJsOiBcImVycm9yLmh0bWxcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9ycyB0aGF0IG9jY3VyIGR1cmluZyB0aGUgcmVxdWVzdFxyXG4gICAgICAgIC8vIENhbmNlbCB0aGUgbmF2aWdhdGlvblxyXG4gICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShkZXRhaWxzLnRhYklkLCB7IHVybDogXCJlcnJvci5odG1sXCIgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBkZXRhaWxzLmZyYW1lSWQgPT0gMCAmJlxyXG4gICAgKGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lLWV4dGVuc2lvbjpcIikgfHxcclxuICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpIHx8XHJcbiAgICAgIGRldGFpbHMudXJsID09IFwiaHR0cHM6Ly9nb29nbGUuY29tL1wiKVxyXG4gICkge1xyXG4gICAgb3JpZ2luYWxVcmwgPSBkZXRhaWxzLnVybDtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQmVmb3JlUmVxdWVzdChkZXRhaWxzKSB7XHJcbiAgaWYgKFxyXG4gICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWUtZXh0ZW5zaW9uOlwiKSB8fFxyXG4gICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpIHx8XHJcbiAgICBkZXRhaWxzLnVybCA9PSBcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiIHx8XHJcbiAgICBkZXRhaWxzLnVybCA9PSBcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvYXV0aGVudGljYXRlXCIgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwid3M6Ly9sb2NhbGhvc3Q6MTgxNS9cIlxyXG4gICkge1xyXG4gICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9O1xyXG4gIH0gZWxzZSBpZiAoZGV0YWlscy50YWJJZCA9PT0gY2hyb21lLnJ1bnRpbWUuaWQpIHtcclxuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTsgLy8gQ29udGludWUgd2l0aCB0aGUgcmVxdWVzdFxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBEZWxheSB0aGUgcmVxdWVzdCBieSAzIHNlY29uZHNcclxuICAgIHZhciBkZWxheUluTWlsbGlzZWNvbmRzID0gNTAwOyAvLyAzIHNlY29uZHNcclxuICAgIHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHZhciBlbmRUaW1lID0gc3RhcnRUaW1lICsgZGVsYXlJbk1pbGxpc2Vjb25kcztcclxuXHJcbiAgICAvLyBXYWl0IHVudGlsIHRoZSBzcGVjaWZpZWQgZGVsYXkgaGFzIHBhc3NlZFxyXG4gICAgd2hpbGUgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZW5kVGltZSkge1xyXG4gICAgICAvLyBEbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXHJcbiAgaGFuZGxlQmVmb3JlUmVxdWVzdCxcclxuICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0sIHR5cGVzOiBbXCJtYWluX2ZyYW1lXCJdIH0sXHJcbiAgW1wiYmxvY2tpbmdcIl1cclxuKTtcclxuXHJcbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlU2VuZEhlYWRlcnMuYWRkTGlzdGVuZXIoXHJcbiAgYmxvY2tSZXF1ZXN0cyxcclxuICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0sIHR5cGVzOiBbXCJtYWluX2ZyYW1lXCJdIH0sXHJcbiAgW1wiYmxvY2tpbmdcIl1cclxuKTtcclxuXHJcbmZ1bmN0aW9uIGJsb2NrUmVxdWVzdHMoZGV0YWlscykge1xyXG4gIGlmIChcclxuICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lLWV4dGVuc2lvbjpcIikgfHxcclxuICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lOlwiKSB8fFxyXG4gICAgZGV0YWlscy51cmwgPT0gXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiB8fFxyXG4gICAgZGV0YWlscy51cmwgPT0gXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL2F1dGhlbnRpY2F0ZVwiIHx8XHJcbiAgICBkZXRhaWxzLnVybCA9PSBcIndzOi8vbG9jYWxob3N0OjE4MTUvXCJcclxuICApIHtcclxuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcclxuICB9IGVsc2UgaWYgKGRldGFpbHMudGFiSWQgPT09IGNocm9tZS5ydW50aW1lLmlkKSB7XHJcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07IC8vIENvbnRpbnVlIHdpdGggdGhlIHJlcXVlc3RcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gRGVsYXkgdGhlIHJlcXVlc3QgYnkgMyBzZWNvbmRzXHJcbiAgICB2YXIgZGVsYXlJbk1pbGxpc2Vjb25kcyA9IDUwMDsgLy8gMyBzZWNvbmRzXHJcbiAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgZW5kVGltZSA9IHN0YXJ0VGltZSArIGRlbGF5SW5NaWxsaXNlY29uZHM7XHJcblxyXG4gICAgLy8gV2FpdCB1bnRpbCB0aGUgc3BlY2lmaWVkIGRlbGF5IGhhcyBwYXNzZWRcclxuICAgIHdoaWxlIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGVuZFRpbWUpIHtcclxuICAgICAgLy8gRG8gbm90aGluZ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSWNvbihwcmVkaWN0aW9uLCBjdXJyZW50VGFiKSB7XHJcbiAgaWYgKHByZWRpY3Rpb24gPT0gXCJOT1JNQUxcIikge1xyXG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XHJcbiAgICAgIHRhYklkOiBjdXJyZW50VGFiLFxyXG4gICAgICBwYXRoOiB7XHJcbiAgICAgICAgMTY6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb24xNi5wbGFzbW8uNmM1NjdkNTAucG5nXCIsXHJcbiAgICAgICAgMzI6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb24zMi5wbGFzbW8uNzZiOTI4OTkucG5nXCIsXHJcbiAgICAgICAgNDg6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb240OC5wbGFzbW8uYWNlZDc1ODIucG5nXCIsXHJcbiAgICAgICAgNjQ6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb242NC5wbGFzbW8uOGJiNWU2ZTAucG5nXCIsXHJcbiAgICAgICAgMTI4OiBcIi4vLi4vLi4vYXNzZXRzL25vcm1hbC9pY29uMTI4LnBsYXNtby4zYzFlZDJkMi5wbmdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocHJlZGljdGlvbiA9PSBcIk1BTElDSU9VU1wiKSB7XHJcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcclxuICAgICAgdGFiSWQ6IGN1cnJlbnRUYWIsXHJcbiAgICAgIHBhdGg6IHtcclxuICAgICAgICAxNjogXCIuLy4uLy4uL2Fzc2V0cy9pY29uMTYucGxhc21vLjZjNTY3ZDUwLnBuZ1wiLFxyXG4gICAgICAgIDMyOiBcIi4vLi4vLi4vYXNzZXRzL2ljb24zMi5wbGFzbW8uNzZiOTI4OTkucG5nXCIsXHJcbiAgICAgICAgNDg6IFwiLi8uLi8uLi9hc3NldHMvaWNvbjQ4LnBsYXNtby5hY2VkNzU4Mi5wbmdcIixcclxuICAgICAgICA2NDogXCIuLy4uLy4uL2Fzc2V0cy9pY29uNjQucGxhc21vLjhiYjVlNmUwLnBuZ1wiLFxyXG4gICAgICAgIDEyODogXCIuLy4uLy4uL2Fzc2V0cy9pY29uMTI4LnBsYXNtby4zYzFlZDJkMi5wbmdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);