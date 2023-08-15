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
})({"1izlt":[function(require,module,exports) {
var p = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var y = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var M = new Set(p), _ = (e)=>M.has(e), z = p.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var X = _("--dry-run"), d = ()=>_("--verbose") || y().VERBOSE === "true", G = d();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var v = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), x = (...e)=>u("\uD83D\uDD35 INFO", ...e), g = (...e)=>u("\uD83D\uDFE0 WARN", ...e), D = 0, c = (...e)=>d() && u(`\u{1F7E1} ${D++}`, ...e);
var s = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "D:\\New Work\\content.ts",
    "bundleId": "3716c965672cac6b",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = s.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: s.verbose
    }
};
var H = module.bundle.Module;
function I(e) {
    H.call(this, e), this.hot = {
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
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !s.host || s.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : s.host;
}
function C() {
    return s.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function S(e = C()) {
    let t = b();
    return `${s.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function O(e) {
    typeof e.message == "string" && v("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(S());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let i of r.diagnostics.ansi){
            let w = i.codeframe || i.stack;
            g("[plasmo/parcel-runtime]: " + i.message + `
` + w + `

` + i.hints.join(`
`));
        }
    }), t.addEventListener("error", O), t.addEventListener("open", ()=>{
        x(`[plasmo/parcel-runtime]: Connected to HMR server for ${s.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        g(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${s.entryFilePath}`);
    }), t;
}
var n = "__plasmo-loading__";
function m() {
    return document.getElementById(n);
}
function f() {
    return !m();
}
function B() {
    let e = document.createElement("div");
    return e.id = n, e.innerHTML = `
  <style>
    #${n} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${n}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${n} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${n} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${n} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${n} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function $(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var R = ()=>{
    let e;
    if (f()) {
        let t = B();
        e = $(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = m();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = m();
            t.style.opacity = "0";
        }
    };
};
var F = `${E}${module.id}__`, a, T = !1, A = R();
async function h() {
    c("Script Runtime - reloading"), T ? globalThis.location?.reload?.() : A.show({
        reloadButton: !0
    });
}
function k() {
    a?.disconnect(), a = l?.runtime.connect({
        name: F
    }), a.onDisconnect.addListener(()=>{
        h();
    }), a.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (T = !0);
    });
}
function N() {
    if (l?.runtime) try {
        k(), setInterval(k, 24e3);
    } catch  {
        return;
    }
}
N();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === s.envHash).some((o)=>L(module.bundle, o.id)) && (A.show(), l?.runtime ? a.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"71ecL":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll("a").forEach((link)=>{
        link.addEventListener("click", (event)=>{
            event.preventDefault();
            chrome.runtime.sendMessage({
                action: "checkThisUrl",
                payload: link.href
            }, async (res)=>{
                console.log(res);
                if (res?.predict == "NORMAL") {
                    link.style.padding = "2px";
                    // link.style.backgroundColor = "green";
                    location.href = link.href;
                } else if (res?.predict == "MALICIOUS") // link.style.backgroundColor = "red";
                createNewDiv();
                await chrome.runtime.sendMessage({
                    action: "changeIconCurrent",
                    prediction: res?.predict
                });
            });
        });
    });
});
// Create the spinner element
const spinner = document.createElement("div");
// Apply CSS styles to the spinner
spinner.style.position = "fixed";
spinner.style.top = "50%";
spinner.style.left = "50%";
spinner.style.transform = "translate(-50%, -50%)";
spinner.style.width = "40px";
spinner.style.height = "40px";
spinner.style.borderRadius = "50%";
spinner.style.border = "4px solid #f3f3f3";
spinner.style.borderTop = "4px solid #3498db";
spinner.style.animation = "spin 2s linear infinite";
// Add the spinner to the document body
document.body.appendChild(spinner);
chrome.runtime.sendMessage({
    action: "checkThisUrl2",
    payload: document.baseURI
}, async (res)=>{
    console.log(res);
    if (res?.predict == "NORMAL") spinner.remove();
    else if (res?.predict == "MALICIOUS") {
        window.stop();
        // link.style.backgroundColor = "red";
        createNewDiv();
    }
    await chrome.runtime.sendMessage({
        action: "changeIconCurrent",
        prediction: res?.predict
    });
});
// Listen for messages from the background script
chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if (request.prediction == "NORMAL") window.location.reload();
    else if (request.prediction == "MALICIOUS") setTimeout(()=>{
        createNewDiv();
    }, 350);
    await chrome.runtime.sendMessage({
        action: "changeIcon",
        id: request.id,
        prediction: request.prediction
    });
});
function createNewDiv() {
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
}

},{}]},["1izlt","71ecL"], "71ecL", "parcelRequire91c9")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1gsSUFBSSxRQUFRLGNBQWMsYUFDL0IsV0FBVztRQUNUO0lBQ0YsR0FBRztJQUVMLE1BQU0sT0FBTyxRQUFRLFlBQVk7UUFDL0IsUUFBUTtRQUNSLElBQUksUUFBUTtRQUNaLFlBQVksUUFBUTtJQUN0QjtBQUNGO0FBRUEsU0FBUztJQUNQLElBQUksTUFBTSxTQUFTLGNBQWM7SUFDakMsSUFBSSxNQUFNLGtCQUFrQjtJQUM1QixJQUFJLE1BQU0sVUFBVTtJQUNwQixJQUFJLE1BQU0sV0FBVztJQUNyQixJQUFJLE1BQU0sTUFBTTtJQUNoQixJQUFJLE1BQU0sU0FBUztJQUNuQixJQUFJLE1BQU0sWUFBWTtJQUN0QixJQUFJLE1BQU0sU0FBUztJQUNuQixJQUFJLE1BQU0sUUFBUTtJQUNsQixJQUFJLE1BQU0sUUFBUTtJQUNsQixJQUFJLE1BQU0sWUFBWTtJQUN0QixJQUFJLE1BQU0sYUFBYTtJQUN2QixJQUFJLFlBQVk7SUFFaEIsU0FBUyxLQUFLLFlBQVk7QUFDNUIiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWUxNGQwZmY0NWY4ZWI5ZjguanMiLCJjb250ZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwPXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIHk9KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgTT1uZXcgU2V0KHApLF89ZT0+TS5oYXMoZSksej1wLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFg9XyhcIi0tZHJ5LXJ1blwiKSxkPSgpPT5fKFwiLS12ZXJib3NlXCIpfHx5KCkuVkVSQk9TRT09PVwidHJ1ZVwiLEc9ZCgpO3ZhciB1PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB2PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSkseD0oLi4uZSk9PnUoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxnPSguLi5lKT0+dShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLEQ9MCxjPSguLi5lKT0+ZCgpJiZ1KGBcXHV7MUY3RTF9ICR7RCsrfWAsLi4uZSk7dmFyIHM9e1wiaXNDb250ZW50U2NyaXB0XCI6dHJ1ZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJzY3JpcHQtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJEOlxcXFxOZXcgV29ya1xcXFxjb250ZW50LnRzXCIsXCJidW5kbGVJZFwiOlwiMzcxNmM5NjU2NzJjYWM2YlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1zLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6cy52ZXJib3NlfX07dmFyIEg9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSShlKXtILmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUk7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gYigpe3JldHVybiFzLmhvc3R8fHMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOnMuaG9zdH1mdW5jdGlvbiBDKCl7cmV0dXJuIHMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgRT1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO2Z1bmN0aW9uIEwoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBTKGU9QygpKXtsZXQgdD1iKCk7cmV0dXJuYCR7cy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gTyhlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ2KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gUChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoUygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBpIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHc9aS5jb2RlZnJhbWV8fGkuc3RhY2s7ZyhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitpLm1lc3NhZ2UrYFxuYCt3K2BcblxuYCtpLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTyksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57eChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke3MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntnKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7cy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgbj1cIl9fcGxhc21vLWxvYWRpbmdfX1wiO2Z1bmN0aW9uIG0oKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobil9ZnVuY3Rpb24gZigpe3JldHVybiFtKCl9ZnVuY3Rpb24gQigpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuaWQ9bixlLmlubmVySFRNTD1gXG4gIDxzdHlsZT5cbiAgICAjJHtufSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgICAgYm94LXNoYWRvdzogIzMzMyA0LjdweCA0LjdweDtcbiAgICB9XG5cbiAgICAjJHtufTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIHtcbiAgICAgIDAlIHtcbiAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgZmlsbDogIzMzMztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAjJHtufSAuc3ZnLWVsZW0tMSB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC44cyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke259IC5zdmctZWxlbS0yIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjlzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuICAgIFxuICAgICMke259IC5zdmctZWxlbS0zIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAxcyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke259IC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgPC9zdHlsZT5cbiAgXG4gIDxzdmcgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNjQgMzU0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xMzkuMjIxIDI4Mi4yNDNDMTU0LjI1MiAyODIuMjQzIDE2Ni45MDMgMjk0Ljg0OSAxNjEuMzM4IDMwOC44MTJDMTU5LjQ4OSAzMTMuNDU0IDE1Ny4xNSAzMTcuOTEzIDE1NC4zNDcgMzIyLjEwOUMxNDYuNDY0IDMzMy45MDkgMTM1LjI2IDM0My4xMDcgMTIyLjE1MSAzNDguNTM4QzEwOS4wNDMgMzUzLjk2OSA5NC42MTgyIDM1NS4zOSA4MC43MDIyIDM1Mi42MjFDNjYuNzg2MSAzNDkuODUyIDU0LjAwMzQgMzQzLjAxOCA0My45NzA1IDMzMi45ODNDMzMuOTM3NSAzMjIuOTQ3IDI3LjEwNSAzMTAuMTYyIDI0LjMzNjkgMjk2LjI0MkMyMS41Njg5IDI4Mi4zMjMgMjIuOTg5NSAyNjcuODk1IDI4LjQxOTMgMjU0Ljc4M0MzMy44NDkxIDI0MS42NzEgNDMuMDQ0MSAyMzAuNDY0IDU0Ljg0MTYgMjIyLjU3OUM1OS4wMzUzIDIxOS43NzcgNjMuNDkwOCAyMTcuNDM4IDY4LjEyOTUgMjE1LjU4OEM4Mi4wOTE1IDIxMC4wMjEgOTQuNjk3OCAyMjIuNjcxIDk0LjY5NzggMjM3LjcwM0w5NC42OTc4IDI1NS4wMjdDOTQuNjk3OCAyNzAuMDU4IDEwNi44ODMgMjgyLjI0MyAxMjEuOTE0IDI4Mi4yNDNIMTM5LjIyMVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMVwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk0xOTIuMjYxIDE0Mi4wMjhDMTkyLjI2MSAxMjYuOTk2IDIwNC44NjcgMTE0LjM0NiAyMTguODI5IDExOS45MTNDMjIzLjQ2OCAxMjEuNzYzIDIyNy45MjMgMTI0LjEwMiAyMzIuMTE3IDEyNi45MDRDMjQzLjkxNSAxMzQuNzg5IDI1My4xMSAxNDUuOTk2IDI1OC41MzkgMTU5LjEwOEMyNjMuOTY5IDE3Mi4yMiAyNjUuMzkgMTg2LjY0OCAyNjIuNjIyIDIwMC41NjdDMjU5Ljg1NCAyMTQuNDg3IDI1My4wMjEgMjI3LjI3MiAyNDIuOTg4IDIzNy4zMDhDMjMyLjk1NSAyNDcuMzQzIDIyMC4xNzMgMjU0LjE3NyAyMDYuMjU2IDI1Ni45NDZDMTkyLjM0IDI1OS43MTUgMTc3LjkxNiAyNTguMjk0IDE2NC44MDcgMjUyLjg2M0MxNTEuNjk5IDI0Ny40MzIgMTQwLjQ5NSAyMzguMjM0IDEzMi42MTIgMjI2LjQzNEMxMjkuODA4IDIyMi4yMzggMTI3LjQ3IDIxNy43NzkgMTI1LjYyIDIxMy4xMzdDMTIwLjA1NiAxOTkuMTc0IDEzMi43MDcgMTg2LjU2OCAxNDcuNzM4IDE4Ni41NjhMMTY1LjA0NCAxODYuNTY4QzE4MC4wNzYgMTg2LjU2OCAxOTIuMjYxIDE3NC4zODMgMTkyLjI2MSAxNTkuMzUyTDE5Mi4yNjEgMTQyLjAyOFpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMlwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk05NS42NTIyIDE2NC4xMzVDOTUuNjUyMiAxNzkuMTY3IDgzLjIyNzkgMTkxLjcyNSA2OC44MDEzIDE4Ny41MDVDNTkuNTE0NSAxODQuNzg4IDUwLjY0MzIgMTgwLjY2MyA0Mi41MTA2IDE3NS4yMjdDMjYuNzgwNiAxNjQuNzE0IDE0LjUyMDYgMTQ5Ljc3MiA3LjI4MDg5IDEzMi4yODlDMC4wNDExODMgMTE0LjgwNyAtMS44NTMwNSA5NS41Njk3IDEuODM3NzIgNzcuMDEwNEM1LjUyODQ5IDU4LjQ1MTEgMTQuNjM4NSA0MS40MDMzIDI4LjAxNTcgMjguMDIyOEM0MS4zOTMgMTQuNjQyMyA1OC40MzY2IDUuNTMwMDYgNzYuOTkxNCAxLjgzODM5Qzk1LjU0NjEgLTEuODUzMjkgMTE0Ljc3OSAwLjA0MTQxNjIgMTMyLjI1NyA3LjI4MjlDMTQ5LjczNSAxNC41MjQ0IDE2NC42NzQgMjYuNzg3NCAxNzUuMTg0IDQyLjUyMTJDMTgwLjYyIDUwLjY1NzYgMTg0Ljc0NCA1OS41MzMyIDE4Ny40NiA2OC44MjQ1QzE5MS42NzggODMuMjUxOSAxNzkuMTE5IDk1LjY3NTkgMTY0LjA4OCA5NS42NzU5TDEyMi44NjkgOTUuNjc1OUMxMDcuODM3IDk1LjY3NTkgOTUuNjUyMiAxMDcuODYxIDk1LjY1MjIgMTIyLjg5Mkw5NS42NTIyIDE2NC4xMzVaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTNcIj48L3BhdGg+XG4gIDwvc3ZnPlxuICA8c3BhbiBjbGFzcz1cImhpZGRlblwiPkNvbnRleHQgSW52YWxpZGF0ZWQsIFByZXNzIHRvIFJlbG9hZDwvc3Bhbj5cbiAgYCxlLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsZS5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCIsZS5zdHlsZS5ib3R0b209XCIxNC43cHhcIixlLnN0eWxlLnJpZ2h0PVwiMTQuN3B4XCIsZS5zdHlsZS5mb250RmFtaWx5PVwic2Fucy1zZXJpZlwiLGUuc3R5bGUuZGlzcGxheT1cImZsZXhcIixlLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIsZS5zdHlsZS5hbGlnbkl0ZW1zPVwiY2VudGVyXCIsZS5zdHlsZS5wYWRkaW5nPVwiMTQuN3B4XCIsZS5zdHlsZS5nYXA9XCIxNC43cHhcIixlLnN0eWxlLmJvcmRlclJhZGl1cz1cIjQuN3B4XCIsZS5zdHlsZS56SW5kZXg9XCIyMTQ3NDgzNjQ3XCIsZS5zdHlsZS5vcGFjaXR5PVwiMFwiLGUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwLjQ3cyBlYXNlLWluLW91dFwiLGV9ZnVuY3Rpb24gJChlKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e2RvY3VtZW50LmRvY3VtZW50RWxlbWVudD8oZigpJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKSksdCgpKTpnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PntmKCkmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCl9KX0pfXZhciBSPSgpPT57bGV0IGU7aWYoZigpKXtsZXQgdD1CKCk7ZT0kKHQpfXJldHVybntzaG93OmFzeW5jKHtyZWxvYWRCdXR0b246dD0hMX09e30pPT57YXdhaXQgZTtsZXQgbz1tKCk7by5zdHlsZS5vcGFjaXR5PVwiMVwiLHQmJihvLm9uY2xpY2s9cj0+e3Iuc3RvcFByb3BhZ2F0aW9uKCksZ2xvYmFsVGhpcy5sb2NhdGlvbi5yZWxvYWQoKX0sby5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpLG8uc3R5bGUuY3Vyc29yPVwicG9pbnRlclwiLG8uc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiKX0saGlkZTphc3luYygpPT57YXdhaXQgZTtsZXQgdD1tKCk7dC5zdHlsZS5vcGFjaXR5PVwiMFwifX19O3ZhciBGPWAke0V9JHttb2R1bGUuaWR9X19gLGEsVD0hMSxBPVIoKTthc3luYyBmdW5jdGlvbiBoKCl7YyhcIlNjcmlwdCBSdW50aW1lIC0gcmVsb2FkaW5nXCIpLFQ/Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKTpBLnNob3coe3JlbG9hZEJ1dHRvbjohMH0pfWZ1bmN0aW9uIGsoKXthPy5kaXNjb25uZWN0KCksYT1sPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6Rn0pLGEub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57aCgpfSksYS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZT0+e2UuX19wbGFzbW9fY3NfcmVsb2FkX18mJmgoKSxlLl9fcGxhc21vX2NzX2FjdGl2ZV90YWJfXyYmKFQ9ITApfSl9ZnVuY3Rpb24gTigpe2lmKGw/LnJ1bnRpbWUpdHJ5e2soKSxzZXRJbnRlcnZhbChrLDI0ZTMpfWNhdGNoe3JldHVybn19TigpO1AoYXN5bmMgZT0+e2MoXCJTY3JpcHQgcnVudGltZSAtIG9uIHVwZGF0ZWQgYXNzZXRzXCIpLGUuZmlsdGVyKG89Pm8uZW52SGFzaD09PXMuZW52SGFzaCkuc29tZShvPT5MKG1vZHVsZS5idW5kbGUsby5pZCkpJiYoQS5zaG93KCksbD8ucnVudGltZT9hLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19jaGFuZ2VkX186ITB9KTpzZXRUaW1lb3V0KCgpPT57aCgpfSw0NzAwKSl9KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIikuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgYWN0aW9uOiBcImNoZWNrVGhpc1VybFwiLFxuICAgICAgICAgIHBheWxvYWQ6IGxpbmsuaHJlZixcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgaWYgKHJlcz8ucHJlZGljdCA9PSBcIk5PUk1BTFwiKSB7XG4gICAgICAgICAgICBsaW5rLnN0eWxlLnBhZGRpbmcgPSBcIjJweFwiO1xuICAgICAgICAgICAgLy8gbGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gbGluay5ocmVmO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzPy5wcmVkaWN0ID09IFwiTUFMSUNJT1VTXCIpIHtcbiAgICAgICAgICAgIC8vIGxpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGNyZWF0ZU5ld0RpdigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICBhY3Rpb246IFwiY2hhbmdlSWNvbkN1cnJlbnRcIixcblxuICAgICAgICAgICAgcHJlZGljdGlvbjogcmVzPy5wcmVkaWN0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBDcmVhdGUgdGhlIHNwaW5uZXIgZWxlbWVudFxuY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vIEFwcGx5IENTUyBzdHlsZXMgdG8gdGhlIHNwaW5uZXJcbnNwaW5uZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG5zcGlubmVyLnN0eWxlLnRvcCA9IFwiNTAlXCI7XG5zcGlubmVyLnN0eWxlLmxlZnQgPSBcIjUwJVwiO1xuc3Bpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiO1xuc3Bpbm5lci5zdHlsZS53aWR0aCA9IFwiNDBweFwiO1xuc3Bpbm5lci5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcbnNwaW5uZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcbnNwaW5uZXIuc3R5bGUuYm9yZGVyID0gXCI0cHggc29saWQgI2YzZjNmM1wiO1xuc3Bpbm5lci5zdHlsZS5ib3JkZXJUb3AgPSBcIjRweCBzb2xpZCAjMzQ5OGRiXCI7XG5zcGlubmVyLnN0eWxlLmFuaW1hdGlvbiA9IFwic3BpbiAycyBsaW5lYXIgaW5maW5pdGVcIjtcblxuLy8gQWRkIHRoZSBzcGlubmVyIHRvIHRoZSBkb2N1bWVudCBib2R5XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwaW5uZXIpO1xuY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gIHtcbiAgICBhY3Rpb246IFwiY2hlY2tUaGlzVXJsMlwiLFxuICAgIHBheWxvYWQ6IGRvY3VtZW50LmJhc2VVUkksXG4gIH0sXG4gIGFzeW5jIChyZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIGlmIChyZXM/LnByZWRpY3QgPT0gXCJOT1JNQUxcIikge1xuICAgICAgc3Bpbm5lci5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKHJlcz8ucHJlZGljdCA9PSBcIk1BTElDSU9VU1wiKSB7XG4gICAgICB3aW5kb3cuc3RvcCgpO1xuXG4gICAgICAvLyBsaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICBjcmVhdGVOZXdEaXYoKTtcbiAgICB9XG4gICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgYWN0aW9uOiBcImNoYW5nZUljb25DdXJyZW50XCIsXG5cbiAgICAgIHByZWRpY3Rpb246IHJlcz8ucHJlZGljdCxcbiAgICB9KTtcbiAgfVxuKTtcblxuLy8gTGlzdGVuIGZvciBtZXNzYWdlcyBmcm9tIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdFxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIGZ1bmN0aW9uIChcbiAgcmVxdWVzdCxcbiAgc2VuZGVyLFxuICBzZW5kUmVzcG9uc2Vcbikge1xuICBpZiAocmVxdWVzdC5wcmVkaWN0aW9uID09IFwiTk9STUFMXCIpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5wcmVkaWN0aW9uID09IFwiTUFMSUNJT1VTXCIpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNyZWF0ZU5ld0RpdigpO1xuICAgIH0sIDM1MCk7XG4gIH1cbiAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIGFjdGlvbjogXCJjaGFuZ2VJY29uXCIsXG4gICAgaWQ6IHJlcXVlc3QuaWQsXG4gICAgcHJlZGljdGlvbjogcmVxdWVzdC5wcmVkaWN0aW9uLFxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdEaXYoKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgZGl2LnN0eWxlLnBhZGRpbmcgPSBcIjIwcHhcIjtcbiAgZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICBkaXYuc3R5bGUudG9wID0gXCIwXCI7XG4gIGRpdi5zdHlsZS5tYXJnaW4gPSBcImF1dG9cIjtcbiAgZGl2LnN0eWxlLmRpcmVjdGlvbiA9IFwibHRyXCI7XG4gIGRpdi5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcbiAgZGl2LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gIGRpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgZGl2LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGRpdi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gIGRpdi5pbm5lckhUTUwgPSBcIldBUk5JTkcgLSBQb3RlbnRpYWwgTWFsaWNpb3VzIHBhZ2UhXCI7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xufVxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImNvbnRlbnQuNjcyY2FjNmIuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);