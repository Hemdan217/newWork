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
// chrome.webNavigation.onBeforeNavigate.addListener(async function (details) {
//   console.log(details.url);
//   originalUrl = details.url;
//   predicted = false;
//   if (
//     details.frameId == 0 &&
//     !(
//       details.url.includes("chrome-extension:") ||
//       details.url.includes("chrome:")
//     )
//   ) {
//     originalUrl = details.url;
//     tabId = details.tabId;
//     const prediction = await predict(originalUrl, details.tabId);
//     // handlePendingRequests(pendingRequests);
//     pendingRequests = [];
//     console.log(originalUrl, "onBeforeNavigate");
//     console.log(prediction, "prediction");
//     changeIcon(prediction, details.tabId);
//     await chrome.tabs.sendMessage(details.tabId, {
//       prediction: prediction,
//       id: details.tabId,
//     });
//   }
// });
async function handleBeforeRequest(details) {
    console.log(details.tabId, details.url);
    if (details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url == "http://178.170.48.29:5000/prediction" || details.url == "http://178.170.48.29:5000/authenticate" || details.url == "ws://localhost:1815/") return {
        cancel: false
    };
    else {
        let i = 1;
        // Wait until the specified delay has passed
        const timer = setInterval(()=>{
            i += 1;
            if (i == 3000) clearInterval(timer);
        });
        const res = await fetch("http://178.170.48.29:5000/prediction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
            body: JSON.stringify({
                url: details.url
            })
        });
        const data = await res.json();
        const prediction = data?.predict;
        if (prediction == "NORMAL") blockAllRequests = false;
        else if (prediction == "MALICIOUS") blockAllRequests = true;
        changeIcon(prediction, details.tabId);
        // Delay the request by 3 seconds
        var delayInMilliseconds = 3000; // 3 seconds
        var startTime = new Date().getTime();
        var endTime = startTime + delayInMilliseconds;
    }
}
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
// async function checkURL(details) {
//   if (!predicted) {
//     const prediction = await predict(originalUrl);
//   } else {
//     return { cancel: blockAllRequests };
//   }
// }
// function checkURL(details) {
//   console.log(details.url);
//   if (
//     details.url.includes("chrome-extension:") ||
//     details.url.includes("chrome:") ||
//     details.url == "http://178.170.48.29:5000/prediction" ||
//     details.url == "http://178.170.48.29:5000/authenticate" ||
//     details.url == "ws://localhost:1815/"
//   ) {
//     return { cancel: false };
//   }
//   return { cancel: true };
// }
// function blocking(details) {
//   while (!predicted) {}
//   if (
//     details.url.includes("chrome-extension:") ||
//     details.url.includes("chrome:") ||
//     details.url == "http://178.170.48.29:5000/prediction" ||
//     details.url == "http://178.170.48.29:5000/authenticate" ||
//     details.url == "ws://localhost:1815/"
//   ) {
//     return { cancel: false };
//   }
//   {
//     return { cancel: blockAllRequests };
//   }
// }
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
// Function to handle the onBeforeRequest event
// Register the onBeforeRequest event listener
// function allowRequests(details) {
//   return { cancel: false };
// }
async function blockRequests(details) {
    console.log("after prediction blocked", blockAllRequests, details.url);
    if (details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url == "http://178.170.48.29:5000/prediction" || details.url == "http://178.170.48.29:5000/authenticate" || details.url == "ws://localhost:1815/") return {
        cancel: false
    };
    else if (details.tabId === chrome.runtime.id) return {
        cancel: false
    }; // Continue with the request
    return {
        cancel: blockAllRequests
    };
}
// }
// async function predict(url, currentTab) {
//   try {
//     const res = await fetch("http://178.170.48.29:5000/prediction", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//       },
//       body: JSON.stringify({
//         url: url,
//       }),
//     });
//     const data = await res.json();
//     const prediction = data?.predict;
//     if (prediction == "NORMAL") {
//       blockAllRequests = false;
//     } else if (prediction == "MALICIOUS") {
//       blockAllRequests = true;
//     }
//     console.log(pendingRequests);
//     predicted = true;
//     return prediction;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
// function handlePendingRequests(){
//  for (const request of pendingRequests) {
//         chrome.webRequest.handlerBehaviorChanged(); // Reset the blocking state
//         request.cancel();
//       }
// }
async function changeIcon(prediction, currentTab) {
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
//  else {
//   chrome.browserAction.setIcon({
//     tabId: currentTab,
//     path: {
//       16: "./../../assets/no/icon16.plasmo.2577fc03.png",
//       32: "./../../assets/no/icon32.plasmo.d583dc1e.png",
//       48: "./../../assets/no/icon48.plasmo.e0fcfb1d.png",
//       64: "./../../assets/no/icon64.plasmo.e6259081.png",
//       128: "./../../assets/no/icon128.plasmo.96a1ede9.png",
//     },
//   });
// }
} // Background script
 // Event listener for completed requests
 // chrome.webRequest.onCompleted.addListener(
 //   function (details) {
 //     if (details.type == "main_frame" && details.frameId == 0) {
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
 // chrome.webNavigation.onCompleted.addListener(async function (details) {
 //   if (
 //     details.frameId == 0 &&
 //     !(
 //       details.url.includes("chrome-extension:") ||
 //       details.url.includes("chrome:")
 //     )
 //   ) {
 //     const url = details.url;
 //     const prediction = await predict(url, details.tabId, true);
 //     console.log(url, "onBeforeNavigate");
 //     console.log(prediction, "prediction");
 //     changeIcon(prediction, details.tabId);
 //   }
 // }, {});
 // function checkIt(details) {
 //   // Step 4: Implement your logic to allow or block requests
 //   // For example, block all requests:
 //   if (
 //     details.url == "http://178.170.48.29:5000/prediction" ||
 //     details.url.includes("chrome-extension:") ||
 //     details.url.includes("chrome:")
 //   ) {
 //     return { cancel: false };
 //   } else {
 //     return { cancel: true };
 //   }
 // }
 // chrome.webRequest.onBeforeRequest.addListener(
 //   async function (details) {
 //     if (details.type == "main_frame" && details.frameId == 0) {
 //       let url = details.url;
 //       const prediction = await predict(url);
 //       console.log(url, "onBeforeRequest");
 //       console.log(prediction, "onBeforeRequest");
 //       chrome.runtime.sendMessage({ url, prediction });
 //       if (prediction == "MALICIOUS") {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDOUIsK0RBQStEO0NBQy9ELHdDQUF3QztDQUN4QyxTQUFTO0NBQ1QsK0RBQStEO0NBQy9ELG1EQUFtRDtDQUNuRCxzQ0FBc0M7Q0FDdEMsUUFBUTtDQUNSLGdDQUFnQztDQUNoQyxhQUFhO0NBQ2IsK0JBQStCO0NBQy9CLE1BQU07Q0FDTixJQUFJO0NBRUosaURBQWlEO0NBQ2pELCtCQUErQjtDQUMvQixrRUFBa0U7Q0FDbEUsK0JBQStCO0NBQy9CLCtDQUErQztDQUMvQyw2Q0FBNkM7Q0FDN0Msb0RBQW9EO0NBRXBELHlEQUF5RDtDQUN6RCx5Q0FBeUM7Q0FDekMsMEVBQTBFO0NBQzFFLHlEQUF5RDtDQUN6RCwwQkFBMEI7Q0FDMUIsc0NBQXNDO0NBQ3RDLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLGlCQUFpQjtDQUNqQiwwRUFBMEU7Q0FDMUUseURBQXlEO0NBQ3pELDBCQUEwQjtDQUMxQixzQ0FBc0M7Q0FDdEMseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixVQUFVO0NBQ1YsUUFBUTtDQUNSLDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUIsaUNBQWlDO0NBQ2pDLFFBQVE7Q0FDUixnQ0FBZ0M7Q0FDaEMsT0FBTztDQUNQLDhCQUE4QjtDQUM5QixpQkFBaUI7Q0FDakIsS0FBSyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtODcyMzA3MzljZmYxMmQyMC5qcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCJiYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnPXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIF89KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgdz1uZXcgU2V0KGcpLHk9ZT0+dy5oYXMoZSksaj1nLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIEc9eShcIi0tZHJ5LXJ1blwiKSxtPSgpPT55KFwiLS12ZXJib3NlXCIpfHxfKCkuVkVSQk9TRT09PVwidHJ1ZVwiLFU9bSgpO3ZhciBmPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBiPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PmYoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxoPSguLi5lKT0+ZihcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLEI9MCxpPSguLi5lKT0+bSgpJiZmKGBcXHV7MUY3RTF9ICR7QisrfWAsLi4uZSk7dmFyIFI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJEOlxcXFxOZXcgV29ya1xcXFwucGxhc21vXFxcXHN0YXRpY1xcXFxiYWNrZ3JvdW5kXFxcXGluZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiYzMzODkwOGU3MDRjOTFmMVwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIE09bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gRChlKXtNLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUQ7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBjPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gdSgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgeD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixQPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7dSgpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBTKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBrKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gRShlPWQoKSl7bGV0IHQ9dSgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEMoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmYihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEUoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEMpLHR9ZnVuY3Rpb24gTChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoRSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7aChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQyksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntoKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgQT1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighQXx8IUEuaXNQYXJjZWxSZXF1aXJlKXtSKCk7bGV0IGU9TChhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+ayhtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgUygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoeCksbz1lLm5hbWUuc3RhcnRzV2l0aChQKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZFwiIiwidmFyIHRva2VuO1xubGV0IGJsb2NrQWxsID0gZmFsc2U7XG5cbi8vIFRoaXMgZXZlbnQgcnVucyB3aGVuIHRoZSBleHRlbnNpb24gcmVjZWl2ZXMgYSBtZXNzYWdlIGZyb20gdGhlIHBvcHVwXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgZnVuY3Rpb24gKFxuICByZXF1ZXN0LFxuICBzZW5kZXIsXG4gIHNlbmRSZXNwb25zZVxuKSB7XG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PSBcInN0YXJ0XCIpIHtcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnBheWxvYWQpO1xuXG4gICAgdG9rZW4gPSByZXF1ZXN0LnBheWxvYWQ7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0b2tlbiB9KTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PSBcImNoZWNrVGhpc1VybFwiKSB7XG4gICAgY29uc29sZS5sb2cocmVxdWVzdC5hY3Rpb24pO1xuICAgIGZldGNoKFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXJsOiByZXF1ZXN0LnBheWxvYWQsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnBheWxvYWQpO1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoXG4gICAgICAgICAgeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSxcbiAgICAgICAgICBmdW5jdGlvbiAodGFicykge1xuICAgICAgICAgICAgY2hhbmdlSWNvbihkYXRhLnByZWRpY3QsIHRhYnNbMF0uaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBzZW5kUmVzcG9uc2UoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50IGFzeW5jaHJvbm91c2x5XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT0gXCJjaGFuZ2VJY29uXCIpIHtcbiAgICBjaGFuZ2VJY29uKHJlcXVlc3QucHJlZGljdGlvbiwgcmVxdWVzdC5pZCk7XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT0gXCJjaGFuZ2VJY29uQ3VycmVudFwiKSB7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgIGNoYW5nZUljb24ocmVxdWVzdC5wcmVkaWN0aW9uLCB0YWJzWzBdLmlkKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PSBcImNoZWNrVGhpc1VybDJcIikge1xuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuYWN0aW9uKTtcbiAgICBmZXRjaChcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVybDogcmVxdWVzdC5wYXlsb2FkLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5wYXlsb2FkKTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KFxuICAgICAgICAvLyAgIHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sXG4gICAgICAgIC8vICAgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgLy8gICAgIGNoYW5nZUljb24oZGF0YS5wcmVkaWN0LCB0YWJzWzBdLmlkKTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vICk7XG5cbiAgICAgICAgc2VuZFJlc3BvbnNlKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBcIkFuIGVycm9yIG9jY3VycmVkXCIgfSk7XG4gICAgICB9KTtcblxuICAgIC8vIFJldHVybiB0cnVlIHRvIGluZGljYXRlIHRoYXQgdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudCBhc3luY2hyb25vdXNseVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxubGV0IGJsb2NrQWxsUmVxdWVzdHMgPSB0cnVlO1xubGV0IHByZWRpY3RlZCA9IGZhbHNlO1xubGV0IHRhYklkO1xubGV0IG9yaWdpbmFsVXJsO1xubGV0IHBlbmRpbmdSZXF1ZXN0cyA9IFtdO1xuLy8gY2hyb21lLndlYk5hdmlnYXRpb24ub25CZWZvcmVOYXZpZ2F0ZS5hZGRMaXN0ZW5lcihhc3luYyBmdW5jdGlvbiAoZGV0YWlscykge1xuLy8gICBjb25zb2xlLmxvZyhkZXRhaWxzLnVybCk7XG4vLyAgIG9yaWdpbmFsVXJsID0gZGV0YWlscy51cmw7XG5cbi8vICAgcHJlZGljdGVkID0gZmFsc2U7XG4vLyAgIGlmIChcbi8vICAgICBkZXRhaWxzLmZyYW1lSWQgPT0gMCAmJlxuLy8gICAgICEoXG4vLyAgICAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpIHx8XG4vLyAgICAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZTpcIilcbi8vICAgICApXG4vLyAgICkge1xuLy8gICAgIG9yaWdpbmFsVXJsID0gZGV0YWlscy51cmw7XG4vLyAgICAgdGFiSWQgPSBkZXRhaWxzLnRhYklkO1xuLy8gICAgIGNvbnN0IHByZWRpY3Rpb24gPSBhd2FpdCBwcmVkaWN0KG9yaWdpbmFsVXJsLCBkZXRhaWxzLnRhYklkKTtcblxuLy8gICAgIC8vIGhhbmRsZVBlbmRpbmdSZXF1ZXN0cyhwZW5kaW5nUmVxdWVzdHMpO1xuLy8gICAgIHBlbmRpbmdSZXF1ZXN0cyA9IFtdO1xuLy8gICAgIGNvbnNvbGUubG9nKG9yaWdpbmFsVXJsLCBcIm9uQmVmb3JlTmF2aWdhdGVcIik7XG4vLyAgICAgY29uc29sZS5sb2cocHJlZGljdGlvbiwgXCJwcmVkaWN0aW9uXCIpO1xuLy8gICAgIGNoYW5nZUljb24ocHJlZGljdGlvbiwgZGV0YWlscy50YWJJZCk7XG4vLyAgICAgYXdhaXQgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwge1xuLy8gICAgICAgcHJlZGljdGlvbjogcHJlZGljdGlvbixcbi8vICAgICAgIGlkOiBkZXRhaWxzLnRhYklkLFxuLy8gICAgIH0pO1xuLy8gICB9XG4vLyB9KTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQmVmb3JlUmVxdWVzdChkZXRhaWxzKSB7XG4gIGNvbnNvbGUubG9nKGRldGFpbHMudGFiSWQsIGRldGFpbHMudXJsKTtcbiAgaWYgKFxuICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lLWV4dGVuc2lvbjpcIikgfHxcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZTpcIikgfHxcbiAgICBkZXRhaWxzLnVybCA9PSBcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiIHx8XG4gICAgZGV0YWlscy51cmwgPT0gXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL2F1dGhlbnRpY2F0ZVwiIHx8XG4gICAgZGV0YWlscy51cmwgPT0gXCJ3czovL2xvY2FsaG9zdDoxODE1L1wiXG4gICkge1xuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgaSA9IDE7XG4gICAgLy8gV2FpdCB1bnRpbCB0aGUgc3BlY2lmaWVkIGRlbGF5IGhhcyBwYXNzZWRcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGlmIChpID09IDMwMDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1cmw6IGRldGFpbHMudXJsLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgcHJlZGljdGlvbiA9IGRhdGE/LnByZWRpY3Q7XG4gICAgaWYgKHByZWRpY3Rpb24gPT0gXCJOT1JNQUxcIikge1xuICAgICAgYmxvY2tBbGxSZXF1ZXN0cyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAocHJlZGljdGlvbiA9PSBcIk1BTElDSU9VU1wiKSB7XG4gICAgICBibG9ja0FsbFJlcXVlc3RzID0gdHJ1ZTtcbiAgICB9XG4gICAgY2hhbmdlSWNvbihwcmVkaWN0aW9uLCBkZXRhaWxzLnRhYklkKTtcblxuICAgIC8vIERlbGF5IHRoZSByZXF1ZXN0IGJ5IDMgc2Vjb25kc1xuICAgIHZhciBkZWxheUluTWlsbGlzZWNvbmRzID0gMzAwMDsgLy8gMyBzZWNvbmRzXG4gICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHZhciBlbmRUaW1lID0gc3RhcnRUaW1lICsgZGVsYXlJbk1pbGxpc2Vjb25kcztcbiAgfVxufVxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuICBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9O1xuICB9LFxuICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0sIHRhYklkOiAtMSB9LFxuICBbXCJibG9ja2luZ1wiXVxuKTtcbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbiAgaGFuZGxlQmVmb3JlUmVxdWVzdCxcbiAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdLCB0eXBlczogW1wibWFpbl9mcmFtZVwiXSB9LFxuICBbXCJibG9ja2luZ1wiXVxuKTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gY2hlY2tVUkwoZGV0YWlscykge1xuLy8gICBpZiAoIXByZWRpY3RlZCkge1xuLy8gICAgIGNvbnN0IHByZWRpY3Rpb24gPSBhd2FpdCBwcmVkaWN0KG9yaWdpbmFsVXJsKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4geyBjYW5jZWw6IGJsb2NrQWxsUmVxdWVzdHMgfTtcbi8vICAgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBjaGVja1VSTChkZXRhaWxzKSB7XG4vLyAgIGNvbnNvbGUubG9nKGRldGFpbHMudXJsKTtcbi8vICAgaWYgKFxuLy8gICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lLWV4dGVuc2lvbjpcIikgfHxcbi8vICAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZTpcIikgfHxcbi8vICAgICBkZXRhaWxzLnVybCA9PSBcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiIHx8XG4vLyAgICAgZGV0YWlscy51cmwgPT0gXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL2F1dGhlbnRpY2F0ZVwiIHx8XG4vLyAgICAgZGV0YWlscy51cmwgPT0gXCJ3czovL2xvY2FsaG9zdDoxODE1L1wiXG4vLyAgICkge1xuLy8gICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcbi8vICAgfVxuLy8gICByZXR1cm4geyBjYW5jZWw6IHRydWUgfTtcbi8vIH1cbi8vIGZ1bmN0aW9uIGJsb2NraW5nKGRldGFpbHMpIHtcbi8vICAgd2hpbGUgKCFwcmVkaWN0ZWQpIHt9XG4vLyAgIGlmIChcbi8vICAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpIHx8XG4vLyAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpIHx8XG4vLyAgICAgZGV0YWlscy51cmwgPT0gXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiB8fFxuLy8gICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9hdXRoZW50aWNhdGVcIiB8fFxuLy8gICAgIGRldGFpbHMudXJsID09IFwid3M6Ly9sb2NhbGhvc3Q6MTgxNS9cIlxuLy8gICApIHtcbi8vICAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07XG4vLyAgIH1cbi8vICAge1xuLy8gICAgIHJldHVybiB7IGNhbmNlbDogYmxvY2tBbGxSZXF1ZXN0cyB9O1xuLy8gICB9XG4vLyB9XG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKFxuICBibG9ja1JlcXVlc3RzLFxuICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0sIHR5cGVzOiBbXCJtYWluX2ZyYW1lXCJdIH0sXG4gIFtcImJsb2NraW5nXCJdXG4pO1xuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBvbkJlZm9yZVJlcXVlc3QgZXZlbnRcblxuLy8gUmVnaXN0ZXIgdGhlIG9uQmVmb3JlUmVxdWVzdCBldmVudCBsaXN0ZW5lclxuXG4vLyBmdW5jdGlvbiBhbGxvd1JlcXVlc3RzKGRldGFpbHMpIHtcbi8vICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9O1xuLy8gfVxuXG5hc3luYyBmdW5jdGlvbiBibG9ja1JlcXVlc3RzKGRldGFpbHMpIHtcbiAgY29uc29sZS5sb2coXCJhZnRlciBwcmVkaWN0aW9uIGJsb2NrZWRcIiwgYmxvY2tBbGxSZXF1ZXN0cywgZGV0YWlscy51cmwpO1xuXG4gIGlmIChcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpIHx8XG4gICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpIHx8XG4gICAgZGV0YWlscy51cmwgPT0gXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiB8fFxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9hdXRoZW50aWNhdGVcIiB8fFxuICAgIGRldGFpbHMudXJsID09IFwid3M6Ly9sb2NhbGhvc3Q6MTgxNS9cIlxuICApIHtcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07XG4gIH0gZWxzZSBpZiAoZGV0YWlscy50YWJJZCA9PT0gY2hyb21lLnJ1bnRpbWUuaWQpIHtcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07IC8vIENvbnRpbnVlIHdpdGggdGhlIHJlcXVlc3RcbiAgfVxuICByZXR1cm4geyBjYW5jZWw6IGJsb2NrQWxsUmVxdWVzdHMgfTtcbn1cblxuLy8gfVxuXG4vLyBhc3luYyBmdW5jdGlvbiBwcmVkaWN0KHVybCwgY3VycmVudFRhYikge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIsIHtcbi8vICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4vLyAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxuLy8gICAgICAgfSxcbi8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgdXJsOiB1cmwsXG4vLyAgICAgICB9KSxcbi8vICAgICB9KTtcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgICBjb25zdCBwcmVkaWN0aW9uID0gZGF0YT8ucHJlZGljdDtcbi8vICAgICBpZiAocHJlZGljdGlvbiA9PSBcIk5PUk1BTFwiKSB7XG4vLyAgICAgICBibG9ja0FsbFJlcXVlc3RzID0gZmFsc2U7XG4vLyAgICAgfSBlbHNlIGlmIChwcmVkaWN0aW9uID09IFwiTUFMSUNJT1VTXCIpIHtcbi8vICAgICAgIGJsb2NrQWxsUmVxdWVzdHMgPSB0cnVlO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhwZW5kaW5nUmVxdWVzdHMpO1xuLy8gICAgIHByZWRpY3RlZCA9IHRydWU7XG4vLyAgICAgcmV0dXJuIHByZWRpY3Rpb247XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4vLyAgICAgcmV0dXJuIG51bGw7XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGhhbmRsZVBlbmRpbmdSZXF1ZXN0cygpe1xuLy8gIGZvciAoY29uc3QgcmVxdWVzdCBvZiBwZW5kaW5nUmVxdWVzdHMpIHtcbi8vICAgICAgICAgY2hyb21lLndlYlJlcXVlc3QuaGFuZGxlckJlaGF2aW9yQ2hhbmdlZCgpOyAvLyBSZXNldCB0aGUgYmxvY2tpbmcgc3RhdGVcbi8vICAgICAgICAgcmVxdWVzdC5jYW5jZWwoKTtcbi8vICAgICAgIH1cblxuLy8gfVxuYXN5bmMgZnVuY3Rpb24gY2hhbmdlSWNvbihwcmVkaWN0aW9uLCBjdXJyZW50VGFiKSB7XG4gIGlmIChwcmVkaWN0aW9uID09IFwiTk9STUFMXCIpIHtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHRhYklkOiBjdXJyZW50VGFiLFxuICAgICAgcGF0aDoge1xuICAgICAgICAxNjogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjE2LnBsYXNtby42YzU2N2Q1MC5wbmdcIixcbiAgICAgICAgMzI6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb24zMi5wbGFzbW8uNzZiOTI4OTkucG5nXCIsXG4gICAgICAgIDQ4OiBcIi4vLi4vLi4vYXNzZXRzL25vcm1hbC9pY29uNDgucGxhc21vLmFjZWQ3NTgyLnBuZ1wiLFxuICAgICAgICA2NDogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjY0LnBsYXNtby44YmI1ZTZlMC5wbmdcIixcbiAgICAgICAgMTI4OiBcIi4vLi4vLi4vYXNzZXRzL25vcm1hbC9pY29uMTI4LnBsYXNtby4zYzFlZDJkMi5wbmdcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAocHJlZGljdGlvbiA9PSBcIk1BTElDSU9VU1wiKSB7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgICB0YWJJZDogY3VycmVudFRhYixcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgMTY6IFwiLi8uLi8uLi9hc3NldHMvaWNvbjE2LnBsYXNtby42YzU2N2Q1MC5wbmdcIixcbiAgICAgICAgMzI6IFwiLi8uLi8uLi9hc3NldHMvaWNvbjMyLnBsYXNtby43NmI5Mjg5OS5wbmdcIixcbiAgICAgICAgNDg6IFwiLi8uLi8uLi9hc3NldHMvaWNvbjQ4LnBsYXNtby5hY2VkNzU4Mi5wbmdcIixcbiAgICAgICAgNjQ6IFwiLi8uLi8uLi9hc3NldHMvaWNvbjY0LnBsYXNtby44YmI1ZTZlMC5wbmdcIixcbiAgICAgICAgMTI4OiBcIi4vLi4vLi4vYXNzZXRzL2ljb24xMjgucGxhc21vLjNjMWVkMmQyLnBuZ1wiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICAvLyAgZWxzZSB7XG4gIC8vICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gIC8vICAgICB0YWJJZDogY3VycmVudFRhYixcbiAgLy8gICAgIHBhdGg6IHtcbiAgLy8gICAgICAgMTY6IFwiLi8uLi8uLi9hc3NldHMvbm8vaWNvbjE2LnBsYXNtby4yNTc3ZmMwMy5wbmdcIixcbiAgLy8gICAgICAgMzI6IFwiLi8uLi8uLi9hc3NldHMvbm8vaWNvbjMyLnBsYXNtby5kNTgzZGMxZS5wbmdcIixcbiAgLy8gICAgICAgNDg6IFwiLi8uLi8uLi9hc3NldHMvbm8vaWNvbjQ4LnBsYXNtby5lMGZjZmIxZC5wbmdcIixcbiAgLy8gICAgICAgNjQ6IFwiLi8uLi8uLi9hc3NldHMvbm8vaWNvbjY0LnBsYXNtby5lNjI1OTA4MS5wbmdcIixcbiAgLy8gICAgICAgMTI4OiBcIi4vLi4vLi4vYXNzZXRzL25vL2ljb24xMjgucGxhc21vLjk2YTFlZGU5LnBuZ1wiLFxuICAvLyAgICAgfSxcbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHNjcmlwdFxuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgY29tcGxldGVkIHJlcXVlc3RzXG4vLyBjaHJvbWUud2ViUmVxdWVzdC5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcihcbi8vICAgZnVuY3Rpb24gKGRldGFpbHMpIHtcbi8vICAgICBpZiAoZGV0YWlscy50eXBlID09IFwibWFpbl9mcmFtZVwiICYmIGRldGFpbHMuZnJhbWVJZCA9PSAwKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nXCIpO1xuLy8gICAgICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuLy8gICAgICAgICBjaGVja1VSTCxcbi8vICAgICAgICAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdIH0sXG4vLyAgICAgICAgIFtcImJsb2NraW5nXCJdXG4vLyAgICAgICApO1xuLy8gICAgICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKGJsb2NrUmVxdWVzdHMpO1xuLy8gICAgICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKGFsbG93UmVxdWVzdHMpO1xuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdIH1cbi8vICk7XG4vLyBJbiB5b3VyIGJhY2tncm91bmQgc2NyaXB0XG5cbi8vIEFkZCB0aGUgbGlzdGVuZXIgZm9yIGFsbCBVUkxzXG4vLyBjaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcihhc3luYyBmdW5jdGlvbiAoZGV0YWlscykge1xuLy8gICBpZiAoXG4vLyAgICAgZGV0YWlscy5mcmFtZUlkID09IDAgJiZcbi8vICAgICAhKFxuLy8gICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWUtZXh0ZW5zaW9uOlwiKSB8fFxuLy8gICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpXG4vLyAgICAgKVxuLy8gICApIHtcbi8vICAgICBjb25zdCB1cmwgPSBkZXRhaWxzLnVybDtcbi8vICAgICBjb25zdCBwcmVkaWN0aW9uID0gYXdhaXQgcHJlZGljdCh1cmwsIGRldGFpbHMudGFiSWQsIHRydWUpO1xuXG4vLyAgICAgY29uc29sZS5sb2codXJsLCBcIm9uQmVmb3JlTmF2aWdhdGVcIik7XG4vLyAgICAgY29uc29sZS5sb2cocHJlZGljdGlvbiwgXCJwcmVkaWN0aW9uXCIpO1xuLy8gICAgIGNoYW5nZUljb24ocHJlZGljdGlvbiwgZGV0YWlscy50YWJJZCk7XG4vLyAgIH1cbi8vIH0sIHt9KTtcbi8vIGZ1bmN0aW9uIGNoZWNrSXQoZGV0YWlscykge1xuLy8gICAvLyBTdGVwIDQ6IEltcGxlbWVudCB5b3VyIGxvZ2ljIHRvIGFsbG93IG9yIGJsb2NrIHJlcXVlc3RzXG4vLyAgIC8vIEZvciBleGFtcGxlLCBibG9jayBhbGwgcmVxdWVzdHM6XG4vLyAgIGlmIChcbi8vICAgICBkZXRhaWxzLnVybCA9PSBcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiIHx8XG4vLyAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWUtZXh0ZW5zaW9uOlwiKSB8fFxuLy8gICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lOlwiKVxuLy8gICApIHtcbi8vICAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuIHsgY2FuY2VsOiB0cnVlIH07XG4vLyAgIH1cbi8vIH1cblxuLy8gY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuLy8gICBhc3luYyBmdW5jdGlvbiAoZGV0YWlscykge1xuLy8gICAgIGlmIChkZXRhaWxzLnR5cGUgPT0gXCJtYWluX2ZyYW1lXCIgJiYgZGV0YWlscy5mcmFtZUlkID09IDApIHtcbi8vICAgICAgIGxldCB1cmwgPSBkZXRhaWxzLnVybDtcbi8vICAgICAgIGNvbnN0IHByZWRpY3Rpb24gPSBhd2FpdCBwcmVkaWN0KHVybCk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh1cmwsIFwib25CZWZvcmVSZXF1ZXN0XCIpO1xuLy8gICAgICAgY29uc29sZS5sb2cocHJlZGljdGlvbiwgXCJvbkJlZm9yZVJlcXVlc3RcIik7XG5cbi8vICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdXJsLCBwcmVkaWN0aW9uIH0pO1xuLy8gICAgICAgaWYgKHByZWRpY3Rpb24gPT0gXCJNQUxJQ0lPVVNcIikge1xuLy8gICAgICAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QucmVtb3ZlTGlzdGVuZXIoYWxsb3dSZXF1ZXN0KTtcbi8vICAgICAgICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuLy8gICAgICAgICAgIGJsb2NrUmVxdWVzdCxcbi8vICAgICAgICAgICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0gfSxcbi8vICAgICAgICAgICBbXCJibG9ja2luZ1wiXVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICByZXR1cm4geyBjYW5jZWw6IHRydWUgfTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihibG9ja1JlcXVlc3QpO1xuLy8gICAgICAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4vLyAgICAgICAgICAgYWxsb3dSZXF1ZXN0LFxuLy8gICAgICAgICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSB9LFxuLy8gICAgICAgICAgIFtcImJsb2NraW5nXCJdXG4vLyAgICAgICAgICk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKGJsb2NrQWxsKTtcbi8vICAgICBpZiAoYmxvY2tBbGwgPT0gdHJ1ZSkge1xuLy8gICAgICAgcmV0dXJuIHsgY2FuY2VsOiB0cnVlIH07XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcbi8vICAgfSxcbi8vICAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdIH0sXG4vLyAgIFtcImJsb2NraW5nXCJdXG4vLyApO1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);