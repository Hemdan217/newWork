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
    if (details.frameId == 0 && !(details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url == "https://google.com/" || originalUrl == details.url)) {
        originalUrl = details.url;
        tabId = details.tabId;
        if (blockedUrls.includes(originalUrl)) chrome.tabs.update(details.tabId, {
            url: "https://google.com/"
        });
        fetch("http://178.170.48.29:5000/prediction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
            body: JSON.stringify({
                url: originalUrl
            })
        }).then((response)=>{
            // Check if the response was successful
            if (response.ok) response.json().then((data)=>{
                changeIcon(data?.predict, details.tabId);
                chrome.tabs.sendMessage(details.tabId, {
                    prediction: data?.predict,
                    id: details.tabId
                });
                if (data?.predict == "NORMAL") changeIcon(data?.predict, details.tabId);
                else if (data?.predict == "MALICIOUS") {
                    blockedUrls.push(originalUrl);
                    chrome.tabs.update(details.tabId, {
                        url: "https://google.com/"
                    });
                }
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
        var delayInMilliseconds = 1000; // 3 seconds
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
        var delayInMilliseconds = 1000; // 3 seconds
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLEtBQUs7UUFDUDtJQUNGO0FBRUoiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTg3MjMwNzM5Y2ZmMTJkMjAuanMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZz10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciBfPSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIHc9bmV3IFNldChnKSx5PWU9PncuaGFzKGUpLGo9Zy5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBHPXkoXCItLWRyeS1ydW5cIiksbT0oKT0+eShcIi0tdmVyYm9zZVwiKXx8XygpLlZFUkJPU0U9PT1cInRydWVcIixVPW0oKTt2YXIgZj0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgYj0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5mKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksaD0oLi4uZSk9PmYoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxCPTAsaT0oLi4uZSk9Pm0oKSYmZihgXFx1ezFGN0UxfSAke0IrK31gLC4uLmUpO3ZhciBSPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiRDpcXFxcTmV3IFdvcmtcXFxcLnBsYXNtb1xcXFxzdGF0aWNcXFxcYmFja2dyb3VuZFxcXFxpbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBNPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEQoZSl7TS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1EO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIHUoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gZCgpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIHg9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCIsUD1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO3ZhciBPPWAke24uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke3UoKX06JHtkKCl9L2A7YXN5bmMgZnVuY3Rpb24gUyhlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goTyk7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uobz0+c2V0VGltZW91dChvLGUpKX19aWYoYy5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWMucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBvPXQucmVxdWVzdC51cmw7aWYoby5zdGFydHNXaXRoKGUpKXtsZXQgcz1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChvLnNsaWNlKGUubGVuZ3RoKSkpO3MuaG9zdG5hbWU9PT1uLmhvc3QmJnMucG9ydD09PWAke24ucG9ydH1gPyhzLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKHMpLnRoZW4ocj0+bmV3IFJlc3BvbnNlKHIuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpyLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gayhlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIEUoZT1kKCkpe2xldCB0PXUoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBDKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmIoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBUKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChFKE51bWJlcihkKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTthd2FpdCBlKHMpfSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixDKSx0fWZ1bmN0aW9uIEwoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7aWYocy50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShzLmFzc2V0cykscy50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBzLmRpYWdub3N0aWNzLmFuc2kpe2xldCBsPXIuY29kZWZyYW1lfHxyLnN0YWNrO2goXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmArbCtgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEMpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57aChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIEE9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxiZ0NoYW5nZWQ6ITEsY3NDaGFuZ2VkOiExLHBhZ2VDaGFuZ2VkOiExLHNjcmlwdFBvcnRzOm5ldyBTZXQscGFnZVBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIHAoZT0hMSl7aWYoZXx8YS5idWlsZFJlYWR5JiZhLnBhZ2VDaGFuZ2VkKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIFBhZ2VcIik7Zm9yKGxldCB0IG9mIGEucGFnZVBvcnRzKXQucG9zdE1lc3NhZ2UobnVsbCl9aWYoZXx8YS5idWlsZFJlYWR5JiYoYS5iZ0NoYW5nZWR8fGEuY3NDaGFuZ2VkKSl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBDU1wiKTtsZXQgdD1hd2FpdCBjPy50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWMucnVudGltZS5yZWxvYWQoKX19aWYoIUF8fCFBLmlzUGFyY2VsUmVxdWlyZSl7UigpO2xldCBlPUwoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PmsobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGw9PmwuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChsPT5PYmplY3QudmFsdWVzKGwpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGw9PnMuaGFzKGwpKX1wKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IFMoKSxwKCEwKX0pfVQoYXN5bmMgZT0+e3N3aXRjaChpKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxlLnR5cGUpe2Nhc2VcImJ1aWxkX3JlYWR5XCI6e2EuYnVpbGRSZWFkeXx8PSEwLHAoKTticmVha31jYXNlXCJjc19jaGFuZ2VkXCI6e2EuY3NDaGFuZ2VkfHw9ITAscCgpO2JyZWFrfX19KTtjLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2xldCB0PWUubmFtZS5zdGFydHNXaXRoKHgpLG89ZS5uYW1lLnN0YXJ0c1dpdGgoUCk7aWYodHx8byl7bGV0IHM9dD9hLnBhZ2VQb3J0czphLnNjcmlwdFBvcnRzO3MuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyKXtpKFwiQkdTVyBSdW50aW1lIC0gT24gc291cmNlIGNoYW5nZWRcIixyKSxyLl9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGEuY3NDaGFuZ2VkfHw9ITApLHIuX19wbGFzbW9fcGFnZV9jaGFuZ2VkX18mJihhLnBhZ2VDaGFuZ2VkfHw9ITApLHAoKX0pfX0pO2MucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLHAoKSksITB9KTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2JhY2tncm91bmRcIiIsInZhciB0b2tlbjtcclxubGV0IGJsb2NrQWxsID0gZmFsc2U7XHJcblxyXG4vLyBUaGlzIGV2ZW50IHJ1bnMgd2hlbiB0aGUgZXh0ZW5zaW9uIHJlY2VpdmVzIGEgbWVzc2FnZSBmcm9tIHRoZSBwb3B1cFxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgZnVuY3Rpb24gKFxyXG4gIHJlcXVlc3QsXHJcbiAgc2VuZGVyLFxyXG4gIHNlbmRSZXNwb25zZVxyXG4pIHtcclxuICBpZiAocmVxdWVzdC5hY3Rpb24gPT0gXCJzdGFydFwiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnBheWxvYWQpO1xyXG5cclxuICAgIHRva2VuID0gcmVxdWVzdC5wYXlsb2FkO1xyXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0b2tlbiB9KTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09IFwiY2hlY2tUaGlzVXJsXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuYWN0aW9uKTtcclxuICAgIGZldGNoKFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1cmw6IHJlcXVlc3QucGF5bG9hZCxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5wYXlsb2FkKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBjaHJvbWUudGFicy5xdWVyeShcclxuICAgICAgICAgIHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgICAgICBjaGFuZ2VJY29uKGRhdGEucHJlZGljdCwgdGFic1swXS5pZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50IGFzeW5jaHJvbm91c2x5XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09IFwiY2hhbmdlSWNvblwiKSB7XHJcbiAgICBjaGFuZ2VJY29uKHJlcXVlc3QucHJlZGljdGlvbiwgcmVxdWVzdC5pZCk7XHJcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PSBcImNoYW5nZUljb25DdXJyZW50XCIpIHtcclxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgIGNoYW5nZUljb24ocmVxdWVzdC5wcmVkaWN0aW9uLCB0YWJzWzBdLmlkKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT0gXCJjaGVja1RoaXNVcmwyXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuYWN0aW9uKTtcclxuICAgIGZldGNoKFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1cmw6IHJlcXVlc3QucGF5bG9hZCxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5wYXlsb2FkKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAvLyBjaHJvbWUudGFicy5xdWVyeShcclxuICAgICAgICAvLyAgIHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sXHJcbiAgICAgICAgLy8gICBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgIC8vICAgICBjaGFuZ2VJY29uKGRhdGEucHJlZGljdCwgdGFic1swXS5pZCk7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50IGFzeW5jaHJvbm91c2x5XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0pO1xyXG5cclxubGV0IGJsb2NrQWxsUmVxdWVzdHMgPSB0cnVlO1xyXG5sZXQgcHJlZGljdGVkID0gZmFsc2U7XHJcbmxldCB0YWJJZDtcclxubGV0IG9yaWdpbmFsVXJsO1xyXG5sZXQgcGVuZGluZ1JlcXVlc3RzID0gW107XHJcbmxldCBibG9ja2VkVXJscyA9IFtdO1xyXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXHJcbiAgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9O1xyXG4gIH0sXHJcbiAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdLCB0YWJJZDogLTEgfSxcclxuICBbXCJibG9ja2luZ1wiXVxyXG4pO1xyXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKFxyXG4gIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcclxuICB9LFxyXG4gIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSwgdGFiSWQ6IC0xIH0sXHJcbiAgW1wiYmxvY2tpbmdcIl1cclxuKTtcclxuXHJcbmNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQmVmb3JlTmF2aWdhdGUuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGRldGFpbHMpIHtcclxuICBjb25zb2xlLmxvZyhkZXRhaWxzLnVybCk7XHJcblxyXG4gIHByZWRpY3RlZCA9IGZhbHNlO1xyXG4gIGlmIChcclxuICAgIGRldGFpbHMuZnJhbWVJZCA9PSAwICYmXHJcbiAgICAhKFxyXG4gICAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpIHx8XHJcbiAgICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lOlwiKSB8fFxyXG4gICAgICBkZXRhaWxzLnVybCA9PSBcImh0dHBzOi8vZ29vZ2xlLmNvbS9cIiB8fFxyXG4gICAgICBvcmlnaW5hbFVybCA9PSBkZXRhaWxzLnVybFxyXG4gICAgKVxyXG4gICkge1xyXG4gICAgb3JpZ2luYWxVcmwgPSBkZXRhaWxzLnVybDtcclxuICAgIHRhYklkID0gZGV0YWlscy50YWJJZDtcclxuICAgIGlmIChibG9ja2VkVXJscy5pbmNsdWRlcyhvcmlnaW5hbFVybCkpIHtcclxuICAgICAgY2hyb21lLnRhYnMudXBkYXRlKGRldGFpbHMudGFiSWQsIHsgdXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbS9cIiB9KTtcclxuICAgIH1cclxuICAgIGZldGNoKFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1cmw6IG9yaWdpbmFsVXJsLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSByZXNwb25zZSB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlSWNvbihkYXRhPy5wcmVkaWN0LCBkZXRhaWxzLnRhYklkKTtcclxuICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwge1xyXG4gICAgICAgICAgICAgIHByZWRpY3Rpb246IGRhdGE/LnByZWRpY3QsXHJcbiAgICAgICAgICAgICAgaWQ6IGRldGFpbHMudGFiSWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZGF0YT8ucHJlZGljdCA9PSBcIk5PUk1BTFwiKSB7XHJcbiAgICAgICAgICAgICAgY2hhbmdlSWNvbihkYXRhPy5wcmVkaWN0LCBkZXRhaWxzLnRhYklkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhPy5wcmVkaWN0ID09IFwiTUFMSUNJT1VTXCIpIHtcclxuICAgICAgICAgICAgICBibG9ja2VkVXJscy5wdXNoKG9yaWdpbmFsVXJsKTtcclxuICAgICAgICAgICAgICBjaHJvbWUudGFicy51cGRhdGUoZGV0YWlscy50YWJJZCwgeyB1cmw6IFwiaHR0cHM6Ly9nb29nbGUuY29tL1wiIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKGRldGFpbHMudGFiSWQsIHsgdXJsOiBcImVycm9yLmh0bWxcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9ycyB0aGF0IG9jY3VyIGR1cmluZyB0aGUgcmVxdWVzdFxyXG4gICAgICAgIC8vIENhbmNlbCB0aGUgbmF2aWdhdGlvblxyXG4gICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShkZXRhaWxzLnRhYklkLCB7IHVybDogXCJlcnJvci5odG1sXCIgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBkZXRhaWxzLmZyYW1lSWQgPT0gMCAmJlxyXG4gICAgKGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lLWV4dGVuc2lvbjpcIikgfHxcclxuICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpIHx8XHJcbiAgICAgIGRldGFpbHMudXJsID09IFwiaHR0cHM6Ly9nb29nbGUuY29tL1wiKVxyXG4gICkge1xyXG4gICAgb3JpZ2luYWxVcmwgPSBkZXRhaWxzLnVybDtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQmVmb3JlUmVxdWVzdChkZXRhaWxzKSB7XHJcbiAgaWYgKFxyXG4gICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWUtZXh0ZW5zaW9uOlwiKSB8fFxyXG4gICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpIHx8XHJcbiAgICBkZXRhaWxzLnVybCA9PSBcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiIHx8XHJcbiAgICBkZXRhaWxzLnVybCA9PSBcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvYXV0aGVudGljYXRlXCIgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwid3M6Ly9sb2NhbGhvc3Q6MTgxNS9cIlxyXG4gICkge1xyXG4gICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9O1xyXG4gIH0gZWxzZSBpZiAoZGV0YWlscy50YWJJZCA9PT0gY2hyb21lLnJ1bnRpbWUuaWQpIHtcclxuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTsgLy8gQ29udGludWUgd2l0aCB0aGUgcmVxdWVzdFxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBEZWxheSB0aGUgcmVxdWVzdCBieSAzIHNlY29uZHNcclxuICAgIHZhciBkZWxheUluTWlsbGlzZWNvbmRzID0gMTAwMDsgLy8gMyBzZWNvbmRzXHJcbiAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgZW5kVGltZSA9IHN0YXJ0VGltZSArIGRlbGF5SW5NaWxsaXNlY29uZHM7XHJcblxyXG4gICAgLy8gV2FpdCB1bnRpbCB0aGUgc3BlY2lmaWVkIGRlbGF5IGhhcyBwYXNzZWRcclxuICAgIHdoaWxlIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGVuZFRpbWUpIHtcclxuICAgICAgLy8gRG8gbm90aGluZ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxyXG4gIGhhbmRsZUJlZm9yZVJlcXVlc3QsXHJcbiAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdLCB0eXBlczogW1wibWFpbl9mcmFtZVwiXSB9LFxyXG4gIFtcImJsb2NraW5nXCJdXHJcbik7XHJcblxyXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKFxyXG4gIGJsb2NrUmVxdWVzdHMsXHJcbiAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdLCB0eXBlczogW1wibWFpbl9mcmFtZVwiXSB9LFxyXG4gIFtcImJsb2NraW5nXCJdXHJcbik7XHJcblxyXG5mdW5jdGlvbiBibG9ja1JlcXVlc3RzKGRldGFpbHMpIHtcclxuICBpZiAoXHJcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpIHx8XHJcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZTpcIikgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9hdXRoZW50aWNhdGVcIiB8fFxyXG4gICAgZGV0YWlscy51cmwgPT0gXCJ3czovL2xvY2FsaG9zdDoxODE1L1wiXHJcbiAgKSB7XHJcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07XHJcbiAgfSBlbHNlIGlmIChkZXRhaWxzLnRhYklkID09PSBjaHJvbWUucnVudGltZS5pZCkge1xyXG4gICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9OyAvLyBDb250aW51ZSB3aXRoIHRoZSByZXF1ZXN0XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIERlbGF5IHRoZSByZXF1ZXN0IGJ5IDMgc2Vjb25kc1xyXG4gICAgdmFyIGRlbGF5SW5NaWxsaXNlY29uZHMgPSAxMDAwOyAvLyAzIHNlY29uZHNcclxuICAgIHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHZhciBlbmRUaW1lID0gc3RhcnRUaW1lICsgZGVsYXlJbk1pbGxpc2Vjb25kcztcclxuXHJcbiAgICAvLyBXYWl0IHVudGlsIHRoZSBzcGVjaWZpZWQgZGVsYXkgaGFzIHBhc3NlZFxyXG4gICAgd2hpbGUgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZW5kVGltZSkge1xyXG4gICAgICAvLyBEbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJY29uKHByZWRpY3Rpb24sIGN1cnJlbnRUYWIpIHtcclxuICBpZiAocHJlZGljdGlvbiA9PSBcIk5PUk1BTFwiKSB7XHJcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcclxuICAgICAgdGFiSWQ6IGN1cnJlbnRUYWIsXHJcbiAgICAgIHBhdGg6IHtcclxuICAgICAgICAxNjogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjE2LnBsYXNtby42YzU2N2Q1MC5wbmdcIixcclxuICAgICAgICAzMjogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjMyLnBsYXNtby43NmI5Mjg5OS5wbmdcIixcclxuICAgICAgICA0ODogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjQ4LnBsYXNtby5hY2VkNzU4Mi5wbmdcIixcclxuICAgICAgICA2NDogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjY0LnBsYXNtby44YmI1ZTZlMC5wbmdcIixcclxuICAgICAgICAxMjg6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb24xMjgucGxhc21vLjNjMWVkMmQyLnBuZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChwcmVkaWN0aW9uID09IFwiTUFMSUNJT1VTXCIpIHtcclxuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe1xyXG4gICAgICB0YWJJZDogY3VycmVudFRhYixcclxuICAgICAgcGF0aDoge1xyXG4gICAgICAgIDE2OiBcIi4vLi4vLi4vYXNzZXRzL2ljb24xNi5wbGFzbW8uNmM1NjdkNTAucG5nXCIsXHJcbiAgICAgICAgMzI6IFwiLi8uLi8uLi9hc3NldHMvaWNvbjMyLnBsYXNtby43NmI5Mjg5OS5wbmdcIixcclxuICAgICAgICA0ODogXCIuLy4uLy4uL2Fzc2V0cy9pY29uNDgucGxhc21vLmFjZWQ3NTgyLnBuZ1wiLFxyXG4gICAgICAgIDY0OiBcIi4vLi4vLi4vYXNzZXRzL2ljb242NC5wbGFzbW8uOGJiNWU2ZTAucG5nXCIsXHJcbiAgICAgICAgMTI4OiBcIi4vLi4vLi4vYXNzZXRzL2ljb24xMjgucGxhc21vLjNjMWVkMmQyLnBuZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);