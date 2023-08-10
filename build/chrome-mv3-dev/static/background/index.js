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
    if (request.action === "start") {
        console.log(request.payload);
        token = request.payload;
    } else if (request.action === "checkThisUrl") {
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
let blockAllRequests = false;
let tabId;
async function checkURL(details) {
    if (details.type === "main_frame" && details.frameId === 0 && !(details.url.includes("chrome-extension:") || details.url.includes("chrome:"))) {
        const url = details.url;
        const prediction = await predict(url, details.tabId);
        console.log(url, "onBeforeRequest");
        console.log(prediction, "prediction");
        changeIcon(prediction, details.tabId);
        return {
            cancel: blockAllRequests
        };
    }
    return {
        cancel: blockAllRequests
    };
}
chrome.webRequest.onBeforeRequest.addListener(checkURL, {
    urls: [
        "<all_urls>"
    ],
    types: [
        "main_frame"
    ]
}, [
    "blocking"
]);
function allowRequests(details) {
    return {
        cancel: false
    };
}
function blockRequests(details) {
    console.log(blockAllRequests);
    if (details.url === "http://178.170.48.29:5000/prediction" || details.url.includes("chrome-extension:")) return {
        cancel: false
    };
    else return {
        cancel: blockAllRequests
    };
}
// chrome.webNavigation.onBeforeNavigate.addListener(async function (details) {
//   if (
//     details.frameId === 0 &&
//     !(
//       details.url.includes("chrome-extension:") ||
//       details.url.includes("chrome:")
//     )
//   ) {
//     if (!predicted) {
//       predicted = true;
//       const url = details.url;
//       const prediction = await predict(url, details.tabId);
//       console.log(url, "onBeforeNavigate");
//       console.log(prediction, "prediction");
//       changeIcon(prediction, details.tabId);
//       if (prediction === "MALICIOUS") {
//         return { cancel: true };
//       }
//     }
//   }
// });
async function predict(url, currentTab) {
    tabId = currentTab;
    chrome.webRequest.onBeforeRequest.removeListener(blockRequests, {
        tabId
    });
    try {
        const res = await fetch("http://178.170.48.29:5000/prediction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
            body: JSON.stringify({
                url: url
            })
        });
        const data = await res.json();
        const prediction = data?.predict;
        if (prediction === "NORMAL") blockAllRequests = false;
        else if (prediction === "MALICIOUS") blockAllRequests = true;
        chrome.webRequest.onBeforeRequest.addListener(blockRequests, {
            urls: [
                "<all_urls>"
            ],
            tabId
        }, [
            "blocking"
        ]);
        return prediction;
    } catch (error) {
        console.error(error);
        return null;
    }
}
function changeIcon(prediction, currentTab) {
    if (prediction === "NORMAL") chrome.browserAction.setIcon({
        tabId: currentTab,
        path: {
            16: "./../../assets/normal/icon16.plasmo.6c567d50.png",
            32: "./../../assets/normal/icon32.plasmo.76b92899.png",
            48: "./../../assets/normal/icon48.plasmo.aced7582.png",
            64: "./../../assets/normal/icon64.plasmo.8bb5e6e0.png",
            128: "./../../assets/normal/icon128.plasmo.3c1ed2d2.png"
        }
    });
    else if (prediction === "MALICIOUS") chrome.browserAction.setIcon({
        tabId: currentTab,
        path: {
            16: "./../../assets/icon16.plasmo.6c567d50.png",
            32: "./../../assets/icon32.plasmo.76b92899.png",
            48: "./../../assets/icon48.plasmo.aced7582.png",
            64: "./../../assets/icon64.plasmo.8bb5e6e0.png",
            128: "./../../assets/icon128.plasmo.3c1ed2d2.png"
        }
    });
    else chrome.browserAction.setIcon({
        tabId: currentTab,
        path: {
            16: "./../../assets/no/icon16.plasmo.2577fc03.png",
            32: "./../../assets/no/icon32.plasmo.d583dc1e.png",
            48: "./../../assets/no/icon48.plasmo.e0fcfb1d.png",
            64: "./../../assets/no/icon64.plasmo.e6259081.png",
            128: "./../../assets/no/icon128.plasmo.96a1ede9.png"
        }
    });
    chrome.tabs.sendMessage(currentTab, {
        prediction
    });
}
// Background script
// Event listener for completed requests
// chrome.webRequest.onCompleted.addListener(
//   function (details) {
//     if (details.type === "main_frame" && details.frameId === 0) {
//       console.log("removing");
//       chrome.webRequest.onBeforeRequest.addListener(
//         checkURL,
//         { urls: ["<all_urls>"] },
//         ["blocking"]
//       );
//       chrome.webRequest.onBeforeRequest.removeListener(blockRequests);
//       chrome.webRequest.onBeforeRequest.removeListener(allowRequests);
//     }
//   },
//   { urls: ["<all_urls>"] }
// );
// In your background script
// Add the listener for all URLs
// chrome.webNavigation.onCompleted.addListener(function (details) {
//   console.log(details, "Removing the listeners");
//   chrome.webRequest.onBeforeRequest.removeListener(blockRequests);
//   chrome.webRequest.onBeforeRequest.removeListener(allowRequests);
// }, {});
function checkIt(details) {
    // Step 4: Implement your logic to allow or block requests
    // For example, block all requests:
    if (details.url == "http://178.170.48.29:5000/prediction" || details.url.includes("chrome-extension:") || details.url.includes("chrome:")) return {
        cancel: false
    };
    else return {
        cancel: true
    };
} // chrome.webRequest.onBeforeRequest.addListener(
 //   async function (details) {
 //     if (details.type === "main_frame" && details.frameId === 0) {
 //       let url = details.url;
 //       const prediction = await predict(url);
 //       console.log(url, "onBeforeRequest");
 //       console.log(prediction, "onBeforeRequest");
 //       chrome.runtime.sendMessage({ url, prediction });
 //       if (prediction === "MALICIOUS") {
 //         chrome.webRequest.onBeforeRequest.removeListener(allowRequest);
 //         chrome.webRequest.onBeforeRequest.addListener(
 //           blockRequest,
 //           { urls: ["<all_urls>"] },
 //           ["blocking"]
 //         );
 //         return { cancel: true };
 //       } else {
 //         chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
 //         chrome.webRequest.onBeforeRequest.addListener(
 //           allowRequest,
 //           { urls: ["<all_urls>"] },
 //           ["blocking"]
 //         );
 //       }
 //     }
 //     console.log(blockAll);
 //     if (blockAll == true) {
 //       return { cancel: true };
 //     }
 //     return { cancel: false };
 //   },
 //   { urls: ["<all_urls>"] },
 //   ["blocking"]
 // );

},{}]},["23fh7","8oeFb"], "8oeFb", "parcelRequire91c9")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztDQUM3QyxvREFBb0Q7Q0FFcEQseURBQXlEO0NBQ3pELDBDQUEwQztDQUMxQywwRUFBMEU7Q0FDMUUseURBQXlEO0NBQ3pELDBCQUEwQjtDQUMxQixzQ0FBc0M7Q0FDdEMseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixtQ0FBbUM7Q0FDbkMsaUJBQWlCO0NBQ2pCLDBFQUEwRTtDQUMxRSx5REFBeUQ7Q0FDekQsMEJBQTBCO0NBQzFCLHNDQUFzQztDQUN0Qyx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLFVBQVU7Q0FDVixRQUFRO0NBQ1IsNkJBQTZCO0NBQzdCLDhCQUE4QjtDQUM5QixpQ0FBaUM7Q0FDakMsUUFBUTtDQUNSLGdDQUFnQztDQUNoQyxPQUFPO0NBQ1AsOEJBQThCO0NBQzlCLGlCQUFpQjtDQUNqQixLQUFLIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS04NzIzMDczOWNmZjEyZDIwLmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgXz0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciB3PW5ldyBTZXQoZykseT1lPT53LmhhcyhlKSxqPWcuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgRz15KFwiLS1kcnktcnVuXCIpLG09KCk9PnkoXCItLXZlcmJvc2VcIil8fF8oKS5WRVJCT1NFPT09XCJ0cnVlXCIsVT1tKCk7dmFyIGY9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGI9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+ZihcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGg9KC4uLmUpPT5mKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksQj0wLGk9KC4uLmUpPT5tKCkmJmYoYFxcdXsxRjdFMX0gJHtCKyt9YCwuLi5lKTt2YXIgUj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkQ6XFxcXE5ldyBXb3JrXFxcXC5wbGFzbW9cXFxcc3RhdGljXFxcXGJhY2tncm91bmRcXFxcaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJjMzM4OTA4ZTcwNGM5MWYxXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgTT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBEKGUpe00uY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9RDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiB1KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciB4PVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFA9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHt1KCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIFMoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIGsoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBFKGU9ZCgpKXtsZXQgdD11KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gQyhlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZiKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gVChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoRShOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQyksdH1mdW5jdGlvbiBMKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChFKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztoKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixDKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2goYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBBPW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCFBfHwhQS5pc1BhcmNlbFJlcXVpcmUpe1IoKTtsZXQgZT1MKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5rKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBTKCkscCghMCl9KX1UKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aCh4KSxvPWUubmFtZS5zdGFydHNXaXRoKFApO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kXCIiLCJ2YXIgdG9rZW47XG5sZXQgYmxvY2tBbGwgPSBmYWxzZTtcblxuLy8gVGhpcyBldmVudCBydW5zIHdoZW4gdGhlIGV4dGVuc2lvbiByZWNlaXZlcyBhIG1lc3NhZ2UgZnJvbSB0aGUgcG9wdXBcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyBmdW5jdGlvbiAoXG4gIHJlcXVlc3QsXG4gIHNlbmRlcixcbiAgc2VuZFJlc3BvbnNlXG4pIHtcbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcInN0YXJ0XCIpIHtcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnBheWxvYWQpO1xuXG4gICAgdG9rZW4gPSByZXF1ZXN0LnBheWxvYWQ7XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwiY2hlY2tUaGlzVXJsXCIpIHtcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmFjdGlvbik7XG4gICAgZmV0Y2goXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1cmw6IHJlcXVlc3QucGF5bG9hZCxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QucGF5bG9hZCk7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50IGFzeW5jaHJvbm91c2x5XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5sZXQgYmxvY2tBbGxSZXF1ZXN0cyA9IGZhbHNlO1xubGV0IHRhYklkO1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tVUkwoZGV0YWlscykge1xuICBpZiAoXG4gICAgZGV0YWlscy50eXBlID09PSBcIm1haW5fZnJhbWVcIiAmJlxuICAgIGRldGFpbHMuZnJhbWVJZCA9PT0gMCAmJlxuICAgICEoXG4gICAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpIHx8XG4gICAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZTpcIilcbiAgICApXG4gICkge1xuICAgIGNvbnN0IHVybCA9IGRldGFpbHMudXJsO1xuICAgIGNvbnN0IHByZWRpY3Rpb24gPSBhd2FpdCBwcmVkaWN0KHVybCwgZGV0YWlscy50YWJJZCk7XG4gICAgY29uc29sZS5sb2codXJsLCBcIm9uQmVmb3JlUmVxdWVzdFwiKTtcbiAgICBjb25zb2xlLmxvZyhwcmVkaWN0aW9uLCBcInByZWRpY3Rpb25cIik7XG4gICAgY2hhbmdlSWNvbihwcmVkaWN0aW9uLCBkZXRhaWxzLnRhYklkKTtcbiAgICByZXR1cm4geyBjYW5jZWw6IGJsb2NrQWxsUmVxdWVzdHMgfTtcbiAgfVxuICByZXR1cm4geyBjYW5jZWw6IGJsb2NrQWxsUmVxdWVzdHMgfTtcbn1cblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuICBjaGVja1VSTCxcbiAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdLCB0eXBlczogW1wibWFpbl9mcmFtZVwiXSB9LFxuICBbXCJibG9ja2luZ1wiXVxuKTtcblxuZnVuY3Rpb24gYWxsb3dSZXF1ZXN0cyhkZXRhaWxzKSB7XG4gIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcbn1cblxuZnVuY3Rpb24gYmxvY2tSZXF1ZXN0cyhkZXRhaWxzKSB7XG4gIGNvbnNvbGUubG9nKGJsb2NrQWxsUmVxdWVzdHMpO1xuICBpZiAoXG4gICAgZGV0YWlscy51cmwgPT09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIgfHxcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpXG4gICkge1xuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBjYW5jZWw6IGJsb2NrQWxsUmVxdWVzdHMgfTtcbiAgfVxufVxuXG4vLyBjaHJvbWUud2ViTmF2aWdhdGlvbi5vbkJlZm9yZU5hdmlnYXRlLmFkZExpc3RlbmVyKGFzeW5jIGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4vLyAgIGlmIChcbi8vICAgICBkZXRhaWxzLmZyYW1lSWQgPT09IDAgJiZcbi8vICAgICAhKFxuLy8gICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWUtZXh0ZW5zaW9uOlwiKSB8fFxuLy8gICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpXG4vLyAgICAgKVxuLy8gICApIHtcbi8vICAgICBpZiAoIXByZWRpY3RlZCkge1xuLy8gICAgICAgcHJlZGljdGVkID0gdHJ1ZTtcbi8vICAgICAgIGNvbnN0IHVybCA9IGRldGFpbHMudXJsO1xuLy8gICAgICAgY29uc3QgcHJlZGljdGlvbiA9IGF3YWl0IHByZWRpY3QodXJsLCBkZXRhaWxzLnRhYklkKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHVybCwgXCJvbkJlZm9yZU5hdmlnYXRlXCIpO1xuLy8gICAgICAgY29uc29sZS5sb2cocHJlZGljdGlvbiwgXCJwcmVkaWN0aW9uXCIpO1xuLy8gICAgICAgY2hhbmdlSWNvbihwcmVkaWN0aW9uLCBkZXRhaWxzLnRhYklkKTtcbi8vICAgICAgIGlmIChwcmVkaWN0aW9uID09PSBcIk1BTElDSU9VU1wiKSB7XG4vLyAgICAgICAgIHJldHVybiB7IGNhbmNlbDogdHJ1ZSB9O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHByZWRpY3QodXJsLCBjdXJyZW50VGFiKSB7XG4gIHRhYklkID0gY3VycmVudFRhYjtcbiAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKGJsb2NrUmVxdWVzdHMsIHsgdGFiSWQgfSk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IHByZWRpY3Rpb24gPSBkYXRhPy5wcmVkaWN0O1xuICAgIGlmIChwcmVkaWN0aW9uID09PSBcIk5PUk1BTFwiKSB7XG4gICAgICBibG9ja0FsbFJlcXVlc3RzID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChwcmVkaWN0aW9uID09PSBcIk1BTElDSU9VU1wiKSB7XG4gICAgICBibG9ja0FsbFJlcXVlc3RzID0gdHJ1ZTtcbiAgICB9XG4gICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuICAgICAgYmxvY2tSZXF1ZXN0cyxcbiAgICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSwgdGFiSWQgfSxcbiAgICAgIFtcImJsb2NraW5nXCJdXG4gICAgKTtcbiAgICByZXR1cm4gcHJlZGljdGlvbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gY2hhbmdlSWNvbihwcmVkaWN0aW9uLCBjdXJyZW50VGFiKSB7XG4gIGlmIChwcmVkaWN0aW9uID09PSBcIk5PUk1BTFwiKSB7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgICB0YWJJZDogY3VycmVudFRhYixcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgMTY6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb24xNi5wbGFzbW8uNmM1NjdkNTAucG5nXCIsXG4gICAgICAgIDMyOiBcIi4vLi4vLi4vYXNzZXRzL25vcm1hbC9pY29uMzIucGxhc21vLjc2YjkyODk5LnBuZ1wiLFxuICAgICAgICA0ODogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjQ4LnBsYXNtby5hY2VkNzU4Mi5wbmdcIixcbiAgICAgICAgNjQ6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb242NC5wbGFzbW8uOGJiNWU2ZTAucG5nXCIsXG4gICAgICAgIDEyODogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjEyOC5wbGFzbW8uM2MxZWQyZDIucG5nXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHByZWRpY3Rpb24gPT09IFwiTUFMSUNJT1VTXCIpIHtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHRhYklkOiBjdXJyZW50VGFiLFxuICAgICAgcGF0aDoge1xuICAgICAgICAxNjogXCIuLy4uLy4uL2Fzc2V0cy9pY29uMTYucGxhc21vLjZjNTY3ZDUwLnBuZ1wiLFxuICAgICAgICAzMjogXCIuLy4uLy4uL2Fzc2V0cy9pY29uMzIucGxhc21vLjc2YjkyODk5LnBuZ1wiLFxuICAgICAgICA0ODogXCIuLy4uLy4uL2Fzc2V0cy9pY29uNDgucGxhc21vLmFjZWQ3NTgyLnBuZ1wiLFxuICAgICAgICA2NDogXCIuLy4uLy4uL2Fzc2V0cy9pY29uNjQucGxhc21vLjhiYjVlNmUwLnBuZ1wiLFxuICAgICAgICAxMjg6IFwiLi8uLi8uLi9hc3NldHMvaWNvbjEyOC5wbGFzbW8uM2MxZWQyZDIucG5nXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe1xuICAgICAgdGFiSWQ6IGN1cnJlbnRUYWIsXG4gICAgICBwYXRoOiB7XG4gICAgICAgIDE2OiBcIi4vLi4vLi4vYXNzZXRzL25vL2ljb24xNi5wbGFzbW8uMjU3N2ZjMDMucG5nXCIsXG4gICAgICAgIDMyOiBcIi4vLi4vLi4vYXNzZXRzL25vL2ljb24zMi5wbGFzbW8uZDU4M2RjMWUucG5nXCIsXG4gICAgICAgIDQ4OiBcIi4vLi4vLi4vYXNzZXRzL25vL2ljb240OC5wbGFzbW8uZTBmY2ZiMWQucG5nXCIsXG4gICAgICAgIDY0OiBcIi4vLi4vLi4vYXNzZXRzL25vL2ljb242NC5wbGFzbW8uZTYyNTkwODEucG5nXCIsXG4gICAgICAgIDEyODogXCIuLy4uLy4uL2Fzc2V0cy9uby9pY29uMTI4LnBsYXNtby45NmExZWRlOS5wbmdcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShjdXJyZW50VGFiLCB7IHByZWRpY3Rpb24gfSk7XG59XG5cbi8vIEJhY2tncm91bmQgc2NyaXB0XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBjb21wbGV0ZWQgcmVxdWVzdHNcbi8vIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQ29tcGxldGVkLmFkZExpc3RlbmVyKFxuLy8gICBmdW5jdGlvbiAoZGV0YWlscykge1xuLy8gICAgIGlmIChkZXRhaWxzLnR5cGUgPT09IFwibWFpbl9mcmFtZVwiICYmIGRldGFpbHMuZnJhbWVJZCA9PT0gMCkge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJyZW1vdmluZ1wiKTtcbi8vICAgICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbi8vICAgICAgICAgY2hlY2tVUkwsXG4vLyAgICAgICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSB9LFxuLy8gICAgICAgICBbXCJibG9ja2luZ1wiXVxuLy8gICAgICAgKTtcbi8vICAgICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihibG9ja1JlcXVlc3RzKTtcbi8vICAgICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihhbGxvd1JlcXVlc3RzKTtcbi8vICAgICB9XG4vLyAgIH0sXG4vLyAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSB9XG4vLyApO1xuLy8gSW4geW91ciBiYWNrZ3JvdW5kIHNjcmlwdFxuXG4vLyBBZGQgdGhlIGxpc3RlbmVyIGZvciBhbGwgVVJMc1xuLy8gY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21wbGV0ZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGRldGFpbHMpIHtcbi8vICAgY29uc29sZS5sb2coZGV0YWlscywgXCJSZW1vdmluZyB0aGUgbGlzdGVuZXJzXCIpO1xuLy8gICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QucmVtb3ZlTGlzdGVuZXIoYmxvY2tSZXF1ZXN0cyk7XG4vLyAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihhbGxvd1JlcXVlc3RzKTtcbi8vIH0sIHt9KTtcbmZ1bmN0aW9uIGNoZWNrSXQoZGV0YWlscykge1xuICAvLyBTdGVwIDQ6IEltcGxlbWVudCB5b3VyIGxvZ2ljIHRvIGFsbG93IG9yIGJsb2NrIHJlcXVlc3RzXG4gIC8vIEZvciBleGFtcGxlLCBibG9jayBhbGwgcmVxdWVzdHM6XG4gIGlmIChcbiAgICBkZXRhaWxzLnVybCA9PSBcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiIHx8XG4gICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWUtZXh0ZW5zaW9uOlwiKSB8fFxuICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lOlwiKVxuICApIHtcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgY2FuY2VsOiB0cnVlIH07XG4gIH1cbn1cblxuLy8gY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuLy8gICBhc3luYyBmdW5jdGlvbiAoZGV0YWlscykge1xuLy8gICAgIGlmIChkZXRhaWxzLnR5cGUgPT09IFwibWFpbl9mcmFtZVwiICYmIGRldGFpbHMuZnJhbWVJZCA9PT0gMCkge1xuLy8gICAgICAgbGV0IHVybCA9IGRldGFpbHMudXJsO1xuLy8gICAgICAgY29uc3QgcHJlZGljdGlvbiA9IGF3YWl0IHByZWRpY3QodXJsKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHVybCwgXCJvbkJlZm9yZVJlcXVlc3RcIik7XG4vLyAgICAgICBjb25zb2xlLmxvZyhwcmVkaWN0aW9uLCBcIm9uQmVmb3JlUmVxdWVzdFwiKTtcblxuLy8gICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB1cmwsIHByZWRpY3Rpb24gfSk7XG4vLyAgICAgICBpZiAocHJlZGljdGlvbiA9PT0gXCJNQUxJQ0lPVVNcIikge1xuLy8gICAgICAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QucmVtb3ZlTGlzdGVuZXIoYWxsb3dSZXF1ZXN0KTtcbi8vICAgICAgICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuLy8gICAgICAgICAgIGJsb2NrUmVxdWVzdCxcbi8vICAgICAgICAgICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0gfSxcbi8vICAgICAgICAgICBbXCJibG9ja2luZ1wiXVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICByZXR1cm4geyBjYW5jZWw6IHRydWUgfTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihibG9ja1JlcXVlc3QpO1xuLy8gICAgICAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4vLyAgICAgICAgICAgYWxsb3dSZXF1ZXN0LFxuLy8gICAgICAgICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSB9LFxuLy8gICAgICAgICAgIFtcImJsb2NraW5nXCJdXG4vLyAgICAgICAgICk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKGJsb2NrQWxsKTtcbi8vICAgICBpZiAoYmxvY2tBbGwgPT0gdHJ1ZSkge1xuLy8gICAgICAgcmV0dXJuIHsgY2FuY2VsOiB0cnVlIH07XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcbi8vICAgfSxcbi8vICAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdIH0sXG4vLyAgIFtcImJsb2NraW5nXCJdXG4vLyApO1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);