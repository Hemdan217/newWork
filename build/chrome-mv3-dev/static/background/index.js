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
let refresh_token;
// This event runs when the extension receives a message from the popup
chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if (request.action == "start") {
        console.log(request.payload);
        token = request.payload;
    } else if (request.action == "checkThisUrl") {
        fetch("http://178.170.48.29:5000/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        }).then(function(res) {
            console.log(request.payload);
            return res.json();
        }).then(function(data) {
            fetch("http://178.170.48.29:5000/prediction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.access_token
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
        fetch("http://178.170.48.29:5000/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        }).then(function(res) {
            console.log(request.payload);
            return res.json();
        }).then(function(data) {
            fetch("http://178.170.48.29:5000/prediction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.access_token
                },
                body: JSON.stringify({
                    url: request.payload
                })
            }).then(function(res) {
                console.log(request.payload);
                return res.json();
            }).then(function(data) {
                sendResponse(data);
            }).catch(function(err) {
                console.log(err);
                sendResponse({
                    error: "An error occurred"
                });
            });
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
// chrome.webRequest.onBeforeRequest.addListener(
//   function () {
//     return { cancel: false };
//   },
//   { urls: ["<all_urls>"], tabId: -1 },
//   ["blocking"]
// );
// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function () {
//     return { cancel: false };
//   },
//   { urls: ["<all_urls>"], tabId: -1 },
//   ["blocking"]
// );
chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    predicted = false;
    if (details.frameId == 0 && !(details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url.includes("about:blank?checking"))) {
        originalUrl = details.url;
        tabId = details.tabId;
        fetch("http://178.170.48.29:5000/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        }).then(function(res) {
            return res.json();
        }).then(function(data) {
            fetch("http://178.170.48.29:5000/prediction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.access_token
                },
                body: JSON.stringify({
                    url: originalUrl
                })
            }).then((response)=>{
                // Check if the response was successful
                if (response.ok) response.json().then((data)=>{
                    changeIcon(data?.predict, details.tabId);
                    if (data?.predict == "NORMAL") {
                        chrome.tabs.sendMessage(details.tabId, {
                            prediction: data?.predict,
                            id: details.tabId
                        });
                        // chrome.tabs.update(details.tabId, {
                        //   url: `${originalUrl}?checked`,
                        // });
                        changeIcon(data?.predict, details.tabId);
                    } else if (data?.predict == "MALICIOUS") {
                        chrome.tabs.update(details.tabId, {
                            url: `index.html`
                        });
                        // chrome.tabs.sendMessage(details.tabId, {
                        //   prediction: data?.predict,
                        //   id: details.tabId,
                        // });
                        changeIcon(data?.predict, details.tabId);
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
        }).catch(function(err) {
            console.log(err);
        });
    } else details.frameId == 0 && details.url.includes(`about:blank?checking`);
});
function handleBeforeRequest(details) {
    console.log(details.url);
    if (details.url.includes("?checked")) {
        const redirectUrl = details.url.replace(/\?checked\b/, "");
        return {
            redirectUrl
        };
    } else if (details.url.includes(`${chrome.runtime.id}/index.html`)) setTimeout(()=>{
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            changeIcon("MALICIOUS", tabs[0].id);
        });
    }, 300);
    else if (details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url == "http://178.170.48.29:5000/prediction" || details.url == "http://178.170.48.29:5000/refresh" || details.url == "http://178.170.48.29:5000/token" || details.url == "ws://localhost:1815/") return {
        cancel: false
    };
    else if (details.tabId === chrome.runtime.id) return {
        cancel: false
    }; // Continue with the request
    else {
        // Delay the request by 3 seconds
        var delayInMilliseconds = 250; // 3 seconds
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
    if (details.url.includes("chrome-extension:") || details.url.includes("chrome:") || details.url == "http://178.170.48.29:5000/prediction" || details.url == "http://178.170.48.29:5000/refresh" || details.url == "http://178.170.48.29:5000/token" || details.url == "ws://localhost:1815/") return {
        cancel: false
    };
    else if (details.tabId === chrome.runtime.id) return {
        cancel: false
    }; // Continue with the request
    else {
        // Delay the request by 3 seconds
        var delayInMilliseconds = 250; // 3 seconds
        var startTime = new Date().getTime();
        var endTime = startTime + delayInMilliseconds;
        // Wait until the specified delay has passed
        while(new Date().getTime() < endTime);
    }
}
function changeIcon(prediction, currentTab) {
    if (prediction == "NORMAL" || prediction == "TRUSTED") chrome.browserAction.setIcon({
        tabId: currentTab,
        path: {
            16: "./../../assets/normal/icon16.plasmo.6c567d50.png",
            32: "./../../assets/normal/icon32.plasmo.76b92899.png",
            48: "./../../assets/normal/icon48.plasmo.aced7582.png",
            64: "./../../assets/normal/icon64.plasmo.8bb5e6e0.png",
            128: "./../../assets/normal/icon128.plasmo.3c1ed2d2.png"
        }
    });
    else if (prediction == "NORMAL" || prediction == "UNTRUSTED") {
        const code = `
                            var div = document.createElement("div");
                            div.style.backgroundColor = "red";
                            div.style.padding = "20px";
                            div.style.position = "fixed";
                            div.style.top = "0";
                            div.style.margin = "auto";
                            div.style.direction = "ltr";
                            div.style.zIndex = "1000";
                            div.style.width = "100%";
                            div.style.color = "white";
                            div.style.textAlign = "center";
                            div.style.fontWeight = "bold";
                            div.innerHTML = "WARNING - Potential Malicious page!";

                            document.body.appendChild(div);
                          `;
        // Execute the code in the specific tab
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
    }
}

},{}]},["23fh7","8oeFb"], "8oeFb", "parcelRequire91c9")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osS0FBSztZQUNQO1FBQ0Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS04NzIzMDczOWNmZjEyZDIwLmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgXz0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciB3PW5ldyBTZXQoZykseT1lPT53LmhhcyhlKSxqPWcuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgRz15KFwiLS1kcnktcnVuXCIpLG09KCk9PnkoXCItLXZlcmJvc2VcIil8fF8oKS5WRVJCT1NFPT09XCJ0cnVlXCIsVT1tKCk7dmFyIGY9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGI9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+ZihcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGg9KC4uLmUpPT5mKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksQj0wLGk9KC4uLmUpPT5tKCkmJmYoYFxcdXsxRjdFMX0gJHtCKyt9YCwuLi5lKTt2YXIgUj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkQ6XFxcXE5ldyBXb3JrXFxcXC5wbGFzbW9cXFxcc3RhdGljXFxcXGJhY2tncm91bmRcXFxcaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJjMzM4OTA4ZTcwNGM5MWYxXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgTT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBEKGUpe00uY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9RDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiB1KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciB4PVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFA9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHt1KCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIFMoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIGsoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBFKGU9ZCgpKXtsZXQgdD11KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gQyhlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZiKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gVChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoRShOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQyksdH1mdW5jdGlvbiBMKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChFKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztoKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixDKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2goYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBBPW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCFBfHwhQS5pc1BhcmNlbFJlcXVpcmUpe1IoKTtsZXQgZT1MKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5rKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBTKCkscCghMCl9KX1UKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aCh4KSxvPWUubmFtZS5zdGFydHNXaXRoKFApO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kXCIiLCJ2YXIgdG9rZW47XHJcbmxldCBibG9ja0FsbCA9IGZhbHNlO1xyXG5sZXQgcmVmcmVzaF90b2tlbjtcclxuLy8gVGhpcyBldmVudCBydW5zIHdoZW4gdGhlIGV4dGVuc2lvbiByZWNlaXZlcyBhIG1lc3NhZ2UgZnJvbSB0aGUgcG9wdXBcclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIGZ1bmN0aW9uIChcclxuICByZXF1ZXN0LFxyXG4gIHNlbmRlcixcclxuICBzZW5kUmVzcG9uc2VcclxuKSB7XHJcbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09IFwic3RhcnRcIikge1xyXG4gICAgY29uc29sZS5sb2cocmVxdWVzdC5wYXlsb2FkKTtcclxuXHJcbiAgICB0b2tlbiA9IHJlcXVlc3QucGF5bG9hZDtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09IFwiY2hlY2tUaGlzVXJsXCIpIHtcclxuICAgIGZldGNoKFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9yZWZyZXNoXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5wYXlsb2FkKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBkYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHVybDogcmVxdWVzdC5wYXlsb2FkLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5wYXlsb2FkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KFxyXG4gICAgICAgICAgICAgIHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhYnMpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUljb24oZGF0YS5wcmVkaWN0LCB0YWJzWzBdLmlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IFwiQW4gZXJyb3Igb2NjdXJyZWRcIiB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50IGFzeW5jaHJvbm91c2x5XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09IFwiY2hhbmdlSWNvblwiKSB7XHJcbiAgICBjaGFuZ2VJY29uKHJlcXVlc3QucHJlZGljdGlvbiwgcmVxdWVzdC5pZCk7XHJcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PSBcImNoYW5nZUljb25DdXJyZW50XCIpIHtcclxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgIGNoYW5nZUljb24ocmVxdWVzdC5wcmVkaWN0aW9uLCB0YWJzWzBdLmlkKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT0gXCJjaGVja1RoaXNVcmwyXCIpIHtcclxuICAgIGZldGNoKFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9yZWZyZXNoXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5wYXlsb2FkKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcHJlZGljdGlvblwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBkYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHVybDogcmVxdWVzdC5wYXlsb2FkLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5wYXlsb2FkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBcIkFuIGVycm9yIG9jY3VycmVkXCIgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBcIkFuIGVycm9yIG9jY3VycmVkXCIgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIFJldHVybiB0cnVlIHRvIGluZGljYXRlIHRoYXQgdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudCBhc3luY2hyb25vdXNseVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59KTtcclxuXHJcbmxldCBibG9ja0FsbFJlcXVlc3RzID0gdHJ1ZTtcclxubGV0IHByZWRpY3RlZCA9IGZhbHNlO1xyXG5sZXQgdGFiSWQ7XHJcbmxldCBvcmlnaW5hbFVybDtcclxubGV0IHBlbmRpbmdSZXF1ZXN0cyA9IFtdO1xyXG5sZXQgYmxvY2tlZFVybHMgPSBbXTtcclxuLy8gY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxyXG4vLyAgIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcclxuLy8gICB9LFxyXG4vLyAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSwgdGFiSWQ6IC0xIH0sXHJcbi8vICAgW1wiYmxvY2tpbmdcIl1cclxuLy8gKTtcclxuLy8gY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVTZW5kSGVhZGVycy5hZGRMaXN0ZW5lcihcclxuLy8gICBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07XHJcbi8vICAgfSxcclxuLy8gICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0sIHRhYklkOiAtMSB9LFxyXG4vLyAgIFtcImJsb2NraW5nXCJdXHJcbi8vICk7XHJcblxyXG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkJlZm9yZU5hdmlnYXRlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChkZXRhaWxzKSB7XHJcbiAgcHJlZGljdGVkID0gZmFsc2U7XHJcbiAgaWYgKFxyXG4gICAgZGV0YWlscy5mcmFtZUlkID09IDAgJiZcclxuICAgICEoXHJcbiAgICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lLWV4dGVuc2lvbjpcIikgfHxcclxuICAgICAgZGV0YWlscy51cmwuaW5jbHVkZXMoXCJjaHJvbWU6XCIpIHx8XHJcbiAgICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKFwiYWJvdXQ6Ymxhbms/Y2hlY2tpbmdcIilcclxuICAgIClcclxuICApIHtcclxuICAgIG9yaWdpbmFsVXJsID0gZGV0YWlscy51cmw7XHJcbiAgICB0YWJJZCA9IGRldGFpbHMudGFiSWQ7XHJcbiAgICBmZXRjaChcImh0dHA6Ly8xNzguMTcwLjQ4LjI5OjUwMDAvcmVmcmVzaFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGRhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdXJsOiBvcmlnaW5hbFVybCxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VJY29uKGRhdGE/LnByZWRpY3QsIGRldGFpbHMudGFiSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhPy5wcmVkaWN0ID09IFwiTk9STUFMXCIpIHtcclxuICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb246IGRhdGE/LnByZWRpY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRldGFpbHMudGFiSWQsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAvLyBjaHJvbWUudGFicy51cGRhdGUoZGV0YWlscy50YWJJZCwge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIHVybDogYCR7b3JpZ2luYWxVcmx9P2NoZWNrZWRgLFxyXG4gICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlSWNvbihkYXRhPy5wcmVkaWN0LCBkZXRhaWxzLnRhYklkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJlZGljdCA9PSBcIk1BTElDSU9VU1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShkZXRhaWxzLnRhYklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgaW5kZXguaHRtbGAsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAvLyBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShkZXRhaWxzLnRhYklkLCB7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgcHJlZGljdGlvbjogZGF0YT8ucHJlZGljdCxcclxuICAgICAgICAgICAgICAgICAgLy8gICBpZDogZGV0YWlscy50YWJJZCxcclxuICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZUljb24oZGF0YT8ucHJlZGljdCwgZGV0YWlscy50YWJJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKGRldGFpbHMudGFiSWQsIHsgdXJsOiBcImVycm9yLmh0bWxcIiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkdXJpbmcgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShkZXRhaWxzLnRhYklkLCB7IHVybDogXCJlcnJvci5odG1sXCIgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgZGV0YWlscy5mcmFtZUlkID09IDAgJiZcclxuICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKGBhYm91dDpibGFuaz9jaGVja2luZ2ApXHJcbiAgKSB7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUJlZm9yZVJlcXVlc3QoZGV0YWlscykge1xyXG4gIGNvbnNvbGUubG9nKGRldGFpbHMudXJsKTtcclxuICBpZiAoZGV0YWlscy51cmwuaW5jbHVkZXMoXCI/Y2hlY2tlZFwiKSkge1xyXG4gICAgY29uc3QgcmVkaXJlY3RVcmwgPSBkZXRhaWxzLnVybC5yZXBsYWNlKC9cXD9jaGVja2VkXFxiLywgXCJcIik7XHJcbiAgICByZXR1cm4geyByZWRpcmVjdFVybCB9O1xyXG4gIH0gZWxzZSBpZiAoZGV0YWlscy51cmwuaW5jbHVkZXMoYCR7Y2hyb21lLnJ1bnRpbWUuaWR9L2luZGV4Lmh0bWxgKSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgY2hhbmdlSWNvbihcIk1BTElDSU9VU1wiLCB0YWJzWzBdLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAzMDApO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpIHx8XHJcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZTpcIikgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9yZWZyZXNoXCIgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC90b2tlblwiIHx8XHJcbiAgICBkZXRhaWxzLnVybCA9PSBcIndzOi8vbG9jYWxob3N0OjE4MTUvXCJcclxuICApIHtcclxuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcclxuICB9IGVsc2UgaWYgKGRldGFpbHMudGFiSWQgPT09IGNocm9tZS5ydW50aW1lLmlkKSB7XHJcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07IC8vIENvbnRpbnVlIHdpdGggdGhlIHJlcXVlc3RcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gRGVsYXkgdGhlIHJlcXVlc3QgYnkgMyBzZWNvbmRzXHJcbiAgICB2YXIgZGVsYXlJbk1pbGxpc2Vjb25kcyA9IDI1MDsgLy8gMyBzZWNvbmRzXHJcbiAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgZW5kVGltZSA9IHN0YXJ0VGltZSArIGRlbGF5SW5NaWxsaXNlY29uZHM7XHJcblxyXG4gICAgLy8gV2FpdCB1bnRpbCB0aGUgc3BlY2lmaWVkIGRlbGF5IGhhcyBwYXNzZWRcclxuICAgIHdoaWxlIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGVuZFRpbWUpIHtcclxuICAgICAgLy8gRG8gbm90aGluZ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxyXG4gIGhhbmRsZUJlZm9yZVJlcXVlc3QsXHJcbiAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdLCB0eXBlczogW1wibWFpbl9mcmFtZVwiXSB9LFxyXG4gIFtcImJsb2NraW5nXCJdXHJcbik7XHJcblxyXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKFxyXG4gIGJsb2NrUmVxdWVzdHMsXHJcbiAgeyB1cmxzOiBbXCI8YWxsX3VybHM+XCJdLCB0eXBlczogW1wibWFpbl9mcmFtZVwiXSB9LFxyXG4gIFtcImJsb2NraW5nXCJdXHJcbik7XHJcblxyXG5mdW5jdGlvbiBibG9ja1JlcXVlc3RzKGRldGFpbHMpIHtcclxuICBpZiAoXHJcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZS1leHRlbnNpb246XCIpIHx8XHJcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyhcImNocm9tZTpcIikgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9wcmVkaWN0aW9uXCIgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC9yZWZyZXNoXCIgfHxcclxuICAgIGRldGFpbHMudXJsID09IFwiaHR0cDovLzE3OC4xNzAuNDguMjk6NTAwMC90b2tlblwiIHx8XHJcbiAgICBkZXRhaWxzLnVybCA9PSBcIndzOi8vbG9jYWxob3N0OjE4MTUvXCJcclxuICApIHtcclxuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfTtcclxuICB9IGVsc2UgaWYgKGRldGFpbHMudGFiSWQgPT09IGNocm9tZS5ydW50aW1lLmlkKSB7XHJcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH07IC8vIENvbnRpbnVlIHdpdGggdGhlIHJlcXVlc3RcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gRGVsYXkgdGhlIHJlcXVlc3QgYnkgMyBzZWNvbmRzXHJcbiAgICB2YXIgZGVsYXlJbk1pbGxpc2Vjb25kcyA9IDI1MDsgLy8gMyBzZWNvbmRzXHJcbiAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgZW5kVGltZSA9IHN0YXJ0VGltZSArIGRlbGF5SW5NaWxsaXNlY29uZHM7XHJcblxyXG4gICAgLy8gV2FpdCB1bnRpbCB0aGUgc3BlY2lmaWVkIGRlbGF5IGhhcyBwYXNzZWRcclxuICAgIHdoaWxlIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGVuZFRpbWUpIHtcclxuICAgICAgLy8gRG8gbm90aGluZ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSWNvbihwcmVkaWN0aW9uLCBjdXJyZW50VGFiKSB7XHJcbiAgaWYgKHByZWRpY3Rpb24gPT0gXCJOT1JNQUxcIiB8fCBwcmVkaWN0aW9uID09IFwiVFJVU1RFRFwiKSB7XHJcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcclxuICAgICAgdGFiSWQ6IGN1cnJlbnRUYWIsXHJcbiAgICAgIHBhdGg6IHtcclxuICAgICAgICAxNjogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjE2LnBsYXNtby42YzU2N2Q1MC5wbmdcIixcclxuICAgICAgICAzMjogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjMyLnBsYXNtby43NmI5Mjg5OS5wbmdcIixcclxuICAgICAgICA0ODogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjQ4LnBsYXNtby5hY2VkNzU4Mi5wbmdcIixcclxuICAgICAgICA2NDogXCIuLy4uLy4uL2Fzc2V0cy9ub3JtYWwvaWNvbjY0LnBsYXNtby44YmI1ZTZlMC5wbmdcIixcclxuICAgICAgICAxMjg6IFwiLi8uLi8uLi9hc3NldHMvbm9ybWFsL2ljb24xMjgucGxhc21vLjNjMWVkMmQyLnBuZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChwcmVkaWN0aW9uID09IFwiTk9STUFMXCIgfHwgcHJlZGljdGlvbiA9PSBcIlVOVFJVU1RFRFwiKSB7XHJcbiAgICBjb25zdCBjb2RlID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUubWFyZ2luID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUuZGlyZWN0aW9uID0gXCJsdHJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IFwiV0FSTklORyAtIFBvdGVudGlhbCBNYWxpY2lvdXMgcGFnZSFcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBjb2RlIGluIHRoZSBzcGVjaWZpYyB0YWJcclxuXHJcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcclxuICAgICAgdGFiSWQ6IGN1cnJlbnRUYWIsXHJcbiAgICAgIHBhdGg6IHtcclxuICAgICAgICAxNjogXCIuLy4uLy4uL2Fzc2V0cy9pY29uMTYucGxhc21vLjZjNTY3ZDUwLnBuZ1wiLFxyXG4gICAgICAgIDMyOiBcIi4vLi4vLi4vYXNzZXRzL2ljb24zMi5wbGFzbW8uNzZiOTI4OTkucG5nXCIsXHJcbiAgICAgICAgNDg6IFwiLi8uLi8uLi9hc3NldHMvaWNvbjQ4LnBsYXNtby5hY2VkNzU4Mi5wbmdcIixcclxuICAgICAgICA2NDogXCIuLy4uLy4uL2Fzc2V0cy9pY29uNjQucGxhc21vLjhiYjVlNmUwLnBuZ1wiLFxyXG4gICAgICAgIDEyODogXCIuLy4uLy4uL2Fzc2V0cy9pY29uMTI4LnBsYXNtby4zYzFlZDJkMi5wbmdcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);