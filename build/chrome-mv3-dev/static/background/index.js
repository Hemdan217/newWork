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
async function checkUrl(details) {
    let prediction;
    if (chrome.webRequest.onBeforeRequest.hasListener(blockRequests) || chrome.webRequest.onBeforeRequest.hasListener(allowRequests)) {
        chrome.webRequest.onBeforeRequest.removeListener(blockRequests);
        chrome.webRequest.onBeforeRequest.removeListener(allowRequests);
    }
    if (details.type === "main_frame" && details.frameId === 0 && !(details.url.includes("chrome-extension:") || details.url.includes("chrome:"))) {
        let url = details.url;
        prediction = await predict(url, details.tabId);
        console.log(url, "onBeforeRequest 1");
        console.log(prediction, "prediction");
        changeIcon(prediction, details.tabId);
        return {
            cancel: prediction === "MALICIOUS"
        };
    }
    return {
        cancel: prediction === "MALICIOUS"
    };
}
chrome.webRequest.onBeforeRequest.addListener(checkUrl, {
    urls: [
        "<all_urls>"
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
    if (details.url == "http://178.170.48.29:5000/prediction" || details.url.includes("chrome-extension:") || details.url.includes("chrome:")) return {
        cancel: false
    };
    else return {
        cancel: true
    };
}
chrome.webNavigation.onBeforeNavigate.addListener(async function(details) {
    if (details.frameId === 0 && !(details.url.includes("chrome-extension:") || details.url.includes("chrome:"))) {
        let url = details.url;
        const prediction = await predict(url, details.tabId);
        console.log(url, "onBeforeNavigate");
        console.log(prediction, "prediction");
        changeIcon(prediction, details.tabId);
        if (prediction == "MALICIOUS") return {
            cancel: true
        };
    }
    return;
});
async function predict(url, currentTab) {
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
        if (prediction === "NORMAL") chrome.webRequest.onBeforeRequest.addListener(allowRequests, {
            urls: [
                "<all_urls>"
            ],
            tabId: currentTab
        }, [
            "blocking"
        ]);
        else if (prediction === "MALICIOUS") chrome.webRequest.onBeforeRequest.addListener(blockRequests, {
            urls: [
                "<all_urls>"
            ],
            tabId: currentTab
        }, [
            "blocking"
        ]);
        chrome.tabs.sendMessage(currentTab, {
            prediction
        });
        return data?.predict;
    } catch (error) {
        console.error(error);
        return null;
    }
}
function changeIcon(prediction, currentTab) {
    if (prediction === "NORMAL") {
        chrome.webRequest.onBeforeRequest.addListener(allowRequests, {
            urls: [
                "<all_urls>"
            ],
            tabId: currentTab
        }, [
            "blocking"
        ]);
        chrome.browserAction.setIcon({
            tabId: currentTab,
            path: {
                16: "./../../assets/normal/icon16.plasmo.6c567d50.png",
                32: "./../../assets/normal/icon32.plasmo.76b92899.png",
                48: "./../../assets/normal/icon48.plasmo.aced7582.png",
                64: "./../../assets/normal/icon64.plasmo.8bb5e6e0.png",
                128: "./../../assets/normal/icon128.plasmo.3c1ed2d2.png"
            }
        });
    } else if (prediction === "MALICIOUS") {
        chrome.webRequest.onBeforeRequest.addListener(blockRequests, {
            urls: [
                "<all_urls>"
            ],
            tabId: currentTab
        }, [
            "blocking"
        ]);
        chrome.browserAction.setIcon({
            tabId: currentTab,
            path: {
                16: "./../../assets/icon16.plasmo.6c567d50.png",
                32: "./../../assets/icon32.plasmo.76b92899.png",
                48: "./../../assets/icon48.plasmo.aced7582.png",
                64: "./../../assets/icon64.plasmo.8bb5e6e0.png",
                128: "./../../assets/icon128.plasmo.3c1ed2d2.png"
            }
        });
    } else chrome.browserAction.setIcon({
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkMsSUFDRSxRQUFRLE9BQU8sMENBQ2YsUUFBUSxJQUFJLFNBQVMsd0JBQ3JCLFFBQVEsSUFBSSxTQUFTLFlBRXJCLE9BQU87UUFBRSxRQUFRO0lBQU07U0FFdkIsT0FBTztRQUFFLFFBQVE7SUFBSztBQUUxQixFQUVBLGlEQUFpRDtDQUNqRCwrQkFBK0I7Q0FDL0Isb0VBQW9FO0NBQ3BFLCtCQUErQjtDQUMvQiwrQ0FBK0M7Q0FDL0MsNkNBQTZDO0NBQzdDLG9EQUFvRDtDQUVwRCx5REFBeUQ7Q0FDekQsMENBQTBDO0NBQzFDLDBFQUEwRTtDQUMxRSx5REFBeUQ7Q0FDekQsMEJBQTBCO0NBQzFCLHNDQUFzQztDQUN0Qyx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLG1DQUFtQztDQUNuQyxpQkFBaUI7Q0FDakIsMEVBQTBFO0NBQzFFLHlEQUF5RDtDQUN6RCwwQkFBMEI7Q0FDMUIsc0NBQXNDO0NBQ3RDLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsVUFBVTtDQUNWLFFBQVE7Q0FDUiw2QkFBNkI7Q0FDN0IsOEJBQThCO0NBQzlCLGlDQUFpQztDQUNqQyxRQUFRO0NBQ1IsZ0NBQWdDO0NBQ2hDLE9BQU87Q0FDUCw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCLEtBQUsiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTg3MjMwNzM5Y2ZmMTJkMjAuanMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZz10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciBfPSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIHc9bmV3IFNldChnKSx5PWU9PncuaGFzKGUpLGo9Zy5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBHPXkoXCItLWRyeS1ydW5cIiksbT0oKT0+eShcIi0tdmVyYm9zZVwiKXx8XygpLlZFUkJPU0U9PT1cInRydWVcIixVPW0oKTt2YXIgZj0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgYj0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5mKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksaD0oLi4uZSk9PmYoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxCPTAsaT0oLi4uZSk9Pm0oKSYmZihgXFx1ezFGN0UxfSAke0IrK31gLC4uLmUpO3ZhciBSPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiRDpcXFxcTmV3IFdvcmtcXFxcLnBsYXNtb1xcXFxzdGF0aWNcXFxcYmFja2dyb3VuZFxcXFxpbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBNPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEQoZSl7TS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1EO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIHUoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gZCgpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIHg9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCIsUD1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO3ZhciBPPWAke24uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke3UoKX06JHtkKCl9L2A7YXN5bmMgZnVuY3Rpb24gUyhlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goTyk7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uobz0+c2V0VGltZW91dChvLGUpKX19aWYoYy5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWMucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBvPXQucmVxdWVzdC51cmw7aWYoby5zdGFydHNXaXRoKGUpKXtsZXQgcz1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChvLnNsaWNlKGUubGVuZ3RoKSkpO3MuaG9zdG5hbWU9PT1uLmhvc3QmJnMucG9ydD09PWAke24ucG9ydH1gPyhzLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKHMpLnRoZW4ocj0+bmV3IFJlc3BvbnNlKHIuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpyLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gayhlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIEUoZT1kKCkpe2xldCB0PXUoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBDKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmIoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBUKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChFKE51bWJlcihkKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTthd2FpdCBlKHMpfSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixDKSx0fWZ1bmN0aW9uIEwoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7aWYocy50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShzLmFzc2V0cykscy50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBzLmRpYWdub3N0aWNzLmFuc2kpe2xldCBsPXIuY29kZWZyYW1lfHxyLnN0YWNrO2goXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmArbCtgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEMpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57aChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIEE9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxiZ0NoYW5nZWQ6ITEsY3NDaGFuZ2VkOiExLHBhZ2VDaGFuZ2VkOiExLHNjcmlwdFBvcnRzOm5ldyBTZXQscGFnZVBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIHAoZT0hMSl7aWYoZXx8YS5idWlsZFJlYWR5JiZhLnBhZ2VDaGFuZ2VkKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIFBhZ2VcIik7Zm9yKGxldCB0IG9mIGEucGFnZVBvcnRzKXQucG9zdE1lc3NhZ2UobnVsbCl9aWYoZXx8YS5idWlsZFJlYWR5JiYoYS5iZ0NoYW5nZWR8fGEuY3NDaGFuZ2VkKSl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBDU1wiKTtsZXQgdD1hd2FpdCBjPy50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWMucnVudGltZS5yZWxvYWQoKX19aWYoIUF8fCFBLmlzUGFyY2VsUmVxdWlyZSl7UigpO2xldCBlPUwoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PmsobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGw9PmwuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChsPT5PYmplY3QudmFsdWVzKGwpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGw9PnMuaGFzKGwpKX1wKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IFMoKSxwKCEwKX0pfVQoYXN5bmMgZT0+e3N3aXRjaChpKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxlLnR5cGUpe2Nhc2VcImJ1aWxkX3JlYWR5XCI6e2EuYnVpbGRSZWFkeXx8PSEwLHAoKTticmVha31jYXNlXCJjc19jaGFuZ2VkXCI6e2EuY3NDaGFuZ2VkfHw9ITAscCgpO2JyZWFrfX19KTtjLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2xldCB0PWUubmFtZS5zdGFydHNXaXRoKHgpLG89ZS5uYW1lLnN0YXJ0c1dpdGgoUCk7aWYodHx8byl7bGV0IHM9dD9hLnBhZ2VQb3J0czphLnNjcmlwdFBvcnRzO3MuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyKXtpKFwiQkdTVyBSdW50aW1lIC0gT24gc291cmNlIGNoYW5nZWRcIixyKSxyLl9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGEuY3NDaGFuZ2VkfHw9ITApLHIuX19wbGFzbW9fcGFnZV9jaGFuZ2VkX18mJihhLnBhZ2VDaGFuZ2VkfHw9ITApLHAoKX0pfX0pO2MucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLHAoKSksITB9KTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2JhY2tncm91bmRcIiIsInZhciB0b2tlbjtcbmxldCBibG9ja0FsbCA9IGZhbHNlO1xuXG4vLyBUaGlzIGV2ZW50IHJ1bnMgd2hlbiB0aGUgZXh0ZW5zaW9uIHJlY2VpdmVzIGEgbWVzc2FnZSBmcm9tIHRoZSBwb3B1cFxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIGZ1bmN0aW9uIChcbiAgcmVxdWVzdCxcbiAgc2VuZGVyLFxuICBzZW5kUmVzcG9uc2Vcbikge1xuICBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwic3RhcnRcIikge1xuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QucGF5bG9hZCk7XG5cbiAgICB0b2tlbiA9IHJlcXVlc3QucGF5bG9hZDtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJjaGVja1RoaXNVcmxcIikge1xuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuYWN0aW9uKTtcbiAgICBmZXRjaChcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVybDogcmVxdWVzdC5wYXlsb2FkLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5wYXlsb2FkKTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNlbmRSZXNwb25zZShkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogXCJBbiBlcnJvciBvY2N1cnJlZFwiIH0pO1xuICAgICAgfSk7XG5cbiAgICAvLyBSZXR1cm4gdHJ1ZSB0byBpbmRpY2F0ZSB0aGF0IHRoZSByZXNwb25zZSB3aWxsIGJlIHNlbnQgYXN5bmNocm9ub3VzbHlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5hc3luYyBmdW5jdGlvbiBjaGVja1VybChkZXRhaWxzKSB7XG4gIGxldCBwcmVkaWN0aW9uO1xuICBpZiAoXG4gICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0Lmhhc0xpc3RlbmVyKGJsb2NrUmVxdWVzdHMpIHx8XG4gICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0Lmhhc0xpc3RlbmVyKGFsbG93UmVxdWVzdHMpXG4gICkge1xuICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihibG9ja1JlcXVlc3RzKTtcbiAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QucmVtb3ZlTGlzdGVuZXIoYWxsb3dSZXF1ZXN0cyk7XG4gIH1cbiAgaWYgKFxuICAgIGRldGFpbHMudHlwZSA9PT0gXCJtYWluX2ZyYW1lXCIgJiZcbiAgICBkZXRhaWxzLmZyYW1lSWQgPT09IDAgJiZcbiAgICAhKFxuICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWUtZXh0ZW5zaW9uOlwiKSB8fFxuICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpXG4gICAgKVxuICApIHtcbiAgICBsZXQgdXJsID0gZGV0YWlscy51cmw7XG5cbiAgICBwcmVkaWN0aW9uID0gYXdhaXQgcHJlZGljdCh1cmwsIGRldGFpbHMudGFiSWQpO1xuICAgIGNvbnNvbGUubG9nKHVybCwgXCJvbkJlZm9yZVJlcXVlc3QgMVwiKTtcbiAgICBjb25zb2xlLmxvZyhwcmVkaWN0aW9uLCBcInByZWRpY3Rpb25cIik7XG4gICAgY2hhbmdlSWNvbihwcmVkaWN0aW9uLCBkZXRhaWxzLnRhYklkKTtcbiAgICByZXR1cm4geyBjYW5jZWw6IHByZWRpY3Rpb24gPT09IFwiTUFMSUNJT1VTXCIgfTtcbiAgfVxuICByZXR1cm4geyBjYW5jZWw6IHByZWRpY3Rpb24gPT09IFwiTUFMSUNJT1VTXCIgfTtcbn1cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbiAgY2hlY2tVcmwsXG5cbiAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdIH0sXG4gIFtcImJsb2NraW5nXCJdXG4pO1xuZnVuY3Rpb24gYWxsb3dSZXF1ZXN0cyhkZXRhaWxzKSB7XG4gIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcbn1cbmZ1bmN0aW9uIGJsb2NrUmVxdWVzdHMoZGV0YWlscykge1xuICBpZiAoXG4gICAgZGV0YWlscy51cmwgPT0gXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiB8fFxuICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lLWV4dGVuc2lvbjpcIikgfHxcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZTpcIilcbiAgKSB7XG4gICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IGNhbmNlbDogdHJ1ZSB9O1xuICB9XG59XG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkJlZm9yZU5hdmlnYXRlLmFkZExpc3RlbmVyKGFzeW5jIGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gIGlmIChcbiAgICBkZXRhaWxzLmZyYW1lSWQgPT09IDAgJiZcbiAgICAhKFxuICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWUtZXh0ZW5zaW9uOlwiKSB8fFxuICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpXG4gICAgKVxuICApIHtcbiAgICBsZXQgdXJsID0gZGV0YWlscy51cmw7XG5cbiAgICBjb25zdCBwcmVkaWN0aW9uID0gYXdhaXQgcHJlZGljdCh1cmwsIGRldGFpbHMudGFiSWQpO1xuICAgIGNvbnNvbGUubG9nKHVybCwgXCJvbkJlZm9yZU5hdmlnYXRlXCIpO1xuICAgIGNvbnNvbGUubG9nKHByZWRpY3Rpb24sIFwicHJlZGljdGlvblwiKTtcbiAgICBjaGFuZ2VJY29uKHByZWRpY3Rpb24sIGRldGFpbHMudGFiSWQpO1xuICAgIGlmIChwcmVkaWN0aW9uID09IFwiTUFMSUNJT1VTXCIpIHtcbiAgICAgIHJldHVybiB7IGNhbmNlbDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuICByZXR1cm47XG59KTtcbmFzeW5jIGZ1bmN0aW9uIHByZWRpY3QodXJsLCBjdXJyZW50VGFiKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTc4LjE3MC40OC4yOTo1MDAwL3ByZWRpY3Rpb25cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IHByZWRpY3Rpb24gPSBkYXRhPy5wcmVkaWN0O1xuICAgIGlmIChwcmVkaWN0aW9uID09PSBcIk5PUk1BTFwiKSB7XG4gICAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4gICAgICAgIGFsbG93UmVxdWVzdHMsXG4gICAgICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSwgdGFiSWQ6IGN1cnJlbnRUYWIgfSxcbiAgICAgICAgW1wiYmxvY2tpbmdcIl1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwcmVkaWN0aW9uID09PSBcIk1BTElDSU9VU1wiKSB7XG4gICAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4gICAgICAgIGJsb2NrUmVxdWVzdHMsXG4gICAgICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSwgdGFiSWQ6IGN1cnJlbnRUYWIgfSxcbiAgICAgICAgW1wiYmxvY2tpbmdcIl1cbiAgICAgICk7XG4gICAgfVxuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGN1cnJlbnRUYWIsIHsgcHJlZGljdGlvbiB9KTtcbiAgICByZXR1cm4gZGF0YT8ucHJlZGljdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gY2hhbmdlSWNvbihwcmVkaWN0aW9uLCBjdXJyZW50VGFiKSB7XG4gIGlmIChwcmVkaWN0aW9uID09PSBcIk5PUk1BTFwiKSB7XG4gICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuICAgICAgYWxsb3dSZXF1ZXN0cyxcbiAgICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSwgdGFiSWQ6IGN1cnJlbnRUYWIgfSxcbiAgICAgIFtcImJsb2NraW5nXCJdXG4gICAgKTtcblxuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe1xuICAgICAgdGFiSWQ6IGN1cnJlbnRUYWIsXG4gICAgICBwYXRoOiB7XG4gICAgICAgIDE2OiBcIi4vLi4vLi4vYXNzZXRzL25vcm1hbC9pY29uMTYucGxhc21vLjZjNTY3ZDUwLnBuZ1wiLFxuICAgICAgICAzMjogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjMyLnBsYXNtby43NmI5Mjg5OS5wbmdcIixcbiAgICAgICAgNDg6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb240OC5wbGFzbW8uYWNlZDc1ODIucG5nXCIsXG4gICAgICAgIDY0OiBcIi4vLi4vLi4vYXNzZXRzL25vcm1hbC9pY29uNjQucGxhc21vLjhiYjVlNmUwLnBuZ1wiLFxuICAgICAgICAxMjg6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb24xMjgucGxhc21vLjNjMWVkMmQyLnBuZ1wiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChwcmVkaWN0aW9uID09PSBcIk1BTElDSU9VU1wiKSB7XG4gICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuICAgICAgYmxvY2tSZXF1ZXN0cyxcbiAgICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSwgdGFiSWQ6IGN1cnJlbnRUYWIgfSxcbiAgICAgIFtcImJsb2NraW5nXCJdXG4gICAgKTtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHRhYklkOiBjdXJyZW50VGFiLFxuICAgICAgcGF0aDoge1xuICAgICAgICAxNjogXCIuLy4uLy4uL2Fzc2V0cy9pY29uMTYucGxhc21vLjZjNTY3ZDUwLnBuZ1wiLFxuICAgICAgICAzMjogXCIuLy4uLy4uL2Fzc2V0cy9pY29uMzIucGxhc21vLjc2YjkyODk5LnBuZ1wiLFxuICAgICAgICA0ODogXCIuLy4uLy4uL2Fzc2V0cy9pY29uNDgucGxhc21vLmFjZWQ3NTgyLnBuZ1wiLFxuICAgICAgICA2NDogXCIuLy4uLy4uL2Fzc2V0cy9pY29uNjQucGxhc21vLjhiYjVlNmUwLnBuZ1wiLFxuICAgICAgICAxMjg6IFwiLi8uLi8uLi9hc3NldHMvaWNvbjEyOC5wbGFzbW8uM2MxZWQyZDIucG5nXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe1xuICAgICAgdGFiSWQ6IGN1cnJlbnRUYWIsXG4gICAgICBwYXRoOiB7XG4gICAgICAgIDE2OiBcIi4vLi4vLi4vYXNzZXRzL25vL2ljb24xNi5wbGFzbW8uMjU3N2ZjMDMucG5nXCIsXG4gICAgICAgIDMyOiBcIi4vLi4vLi4vYXNzZXRzL25vL2ljb24zMi5wbGFzbW8uZDU4M2RjMWUucG5nXCIsXG4gICAgICAgIDQ4OiBcIi4vLi4vLi4vYXNzZXRzL25vL2ljb240OC5wbGFzbW8uZTBmY2ZiMWQucG5nXCIsXG4gICAgICAgIDY0OiBcIi4vLi4vLi4vYXNzZXRzL25vL2ljb242NC5wbGFzbW8uZTYyNTkwODEucG5nXCIsXG4gICAgICAgIDEyODogXCIuLy4uLy4uL2Fzc2V0cy9uby9pY29uMTI4LnBsYXNtby45NmExZWRlOS5wbmdcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoY3VycmVudFRhYiwgeyBwcmVkaWN0aW9uIH0pO1xufVxuXG4vLyBJbiB5b3VyIGJhY2tncm91bmQgc2NyaXB0XG5cbi8vIEFkZCB0aGUgbGlzdGVuZXIgZm9yIGFsbCBVUkxzXG4vLyBjaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoZGV0YWlscykge1xuLy8gICBjb25zb2xlLmxvZyhkZXRhaWxzLCBcIlJlbW92aW5nIHRoZSBsaXN0ZW5lcnNcIik7XG4vLyAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihibG9ja1JlcXVlc3RzKTtcbi8vICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKGFsbG93UmVxdWVzdHMpO1xuLy8gfSwge30pO1xuZnVuY3Rpb24gY2hlY2tJdChkZXRhaWxzKSB7XG4gIC8vIFN0ZXAgNDogSW1wbGVtZW50IHlvdXIgbG9naWMgdG8gYWxsb3cgb3IgYmxvY2sgcmVxdWVzdHNcbiAgLy8gRm9yIGV4YW1wbGUsIGJsb2NrIGFsbCByZXF1ZXN0czpcbiAgaWYgKFxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIgfHxcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpIHx8XG4gICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpXG4gICkge1xuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBjYW5jZWw6IHRydWUgfTtcbiAgfVxufVxuXG4vLyBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4vLyAgIGFzeW5jIGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4vLyAgICAgaWYgKGRldGFpbHMudHlwZSA9PT0gXCJtYWluX2ZyYW1lXCIgJiYgZGV0YWlscy5mcmFtZUlkID09PSAwKSB7XG4vLyAgICAgICBsZXQgdXJsID0gZGV0YWlscy51cmw7XG4vLyAgICAgICBjb25zdCBwcmVkaWN0aW9uID0gYXdhaXQgcHJlZGljdCh1cmwpO1xuLy8gICAgICAgY29uc29sZS5sb2codXJsLCBcIm9uQmVmb3JlUmVxdWVzdFwiKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHByZWRpY3Rpb24sIFwib25CZWZvcmVSZXF1ZXN0XCIpO1xuXG4vLyAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHVybCwgcHJlZGljdGlvbiB9KTtcbi8vICAgICAgIGlmIChwcmVkaWN0aW9uID09PSBcIk1BTElDSU9VU1wiKSB7XG4vLyAgICAgICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihhbGxvd1JlcXVlc3QpO1xuLy8gICAgICAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4vLyAgICAgICAgICAgYmxvY2tSZXF1ZXN0LFxuLy8gICAgICAgICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSB9LFxuLy8gICAgICAgICAgIFtcImJsb2NraW5nXCJdXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIHJldHVybiB7IGNhbmNlbDogdHJ1ZSB9O1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKGJsb2NrUmVxdWVzdCk7XG4vLyAgICAgICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbi8vICAgICAgICAgICBhbGxvd1JlcXVlc3QsXG4vLyAgICAgICAgICAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdIH0sXG4vLyAgICAgICAgICAgW1wiYmxvY2tpbmdcIl1cbi8vICAgICAgICAgKTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coYmxvY2tBbGwpO1xuLy8gICAgIGlmIChibG9ja0FsbCA9PSB0cnVlKSB7XG4vLyAgICAgICByZXR1cm4geyBjYW5jZWw6IHRydWUgfTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9O1xuLy8gICB9LFxuLy8gICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0gfSxcbi8vICAgW1wiYmxvY2tpbmdcIl1cbi8vICk7XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);