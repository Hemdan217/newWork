(function (o) {
  var e;
  "function" == typeof o && ((e = o), (o = null)),
    (function (e, n, t, s, r) {
      var i =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : {},
        a = "function" == typeof i[s] && i[s],
        c = a.cache || {},
        l =
          "undefined" != typeof module &&
          "function" == typeof module.require &&
          module.require.bind(module);
      function p(o, n) {
        if (!c[o]) {
          if (!e[o]) {
            var t = "function" == typeof i[s] && i[s];
            if (!n && t) return t(o, !0);
            if (a) return a(o, !0);
            if (l && "string" == typeof o) return l(o);
            var r = Error("Cannot find module '" + o + "'");
            throw ((r.code = "MODULE_NOT_FOUND"), r);
          }
          (f.resolve = function (n) {
            var t = e[o][1][n];
            return null != t ? t : n;
          }),
            (f.cache = {});
          var d = (c[o] = new p.Module(o));
          e[o][0].call(d.exports, f, d, d.exports, this);
        }
        return c[o].exports;
        function f(o) {
          var e = f.resolve(o);
          return !1 === e ? {} : p(e);
        }
      }
      (p.isParcelRequire = !0),
        (p.Module = function (o) {
          (this.id = o), (this.bundle = p), (this.exports = {});
        }),
        (p.modules = e),
        (p.cache = c),
        (p.parent = a),
        (p.register = function (o, n) {
          e[o] = [
            function (o, e) {
              e.exports = n;
            },
            {},
          ];
        }),
        Object.defineProperty(p, "root", {
          get: function () {
            return i[s];
          },
        }),
        (i[s] = p);
      for (var d = 0; d < n.length; d++) p(n[d]);
      if (t) {
        var f = p(t);
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = f)
          : "function" == typeof o && o.amd
          ? o(function () {
              return f;
            })
          : r && (this[r] = f);
      }
    })(
      {
        kgW6q: [
          function (o, e, n) {
            o("../../../background");
          },
          { "../../../background": "8VaxY" },
        ],
        "8VaxY": [
          function (o, e, n) {
            let t;
            chrome.runtime.onMessage.addListener(function (o, e, n) {
              if ("start" === o.action) console.log(o.payload), (t = o.payload);
              else if ("checkThisUrl" === o.action)
                return (
                  console.log(o.action),
                  fetch("http://178.170.48.29:5000/prediction", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + t,
                    },
                    body: JSON.stringify({ url: o.payload }),
                  })
                    .then(function (e) {
                      return console.log(o.payload), e.json();
                    })
                    .then(function (o) {
                      o.predict === "NORMAL"
                        ? chrome.browserAction.setIcon({
                            path: {
                              16: "./../../assets/normal/icon16.plasmo.6c567d50.png",
                              32: "./../../assets/normal/icon32.plasmo.76b92899.png",
                              48: "./../../assets/normal/icon48.plasmo.aced7582.png",
                              64: "./../../assets/normal/icon64.plasmo.8bb5e6e0.png",
                              128: "./../../assets/normal/icon128.plasmo.3c1ed2d2.png",
                            },
                          })
                        : o.predict === "MALICIOUS"
                        ? chrome.browserAction.setIcon({
                            path: {
                              16: "./../../assets/icon16.plasmo.6c567d50.png",
                              32: "./../../assets/icon32.plasmo.76b92899.png",
                              48: "./../../assets/icon48.plasmo.aced7582.png",
                              64: "./../../assets/icon64.plasmo.8bb5e6e0.png",
                              128: "./../../assets/icon128.plasmo.3c1ed2d2.png",
                            },
                          })
                        : chrome.browserAction.setIcon({
                            path: {
                              16: "./../../assets/no/icon16.plasmo.2577fc03.png",
                              32: "./../../assets/no/icon32.plasmo.d583dc1e.png",
                              48: "./../../assets/no/icon48.plasmo.e0fcfb1d.png",
                              64: "./../../assets/no/icon64.plasmo.e6259081.png",
                              128: "./../../assets/no/icon128.plasmo.96a1ede9.png",
                            },
                          }),
                        console.log(o),
                        n(o);
                    })
                    .catch(function (o) {
                      console.log(o), n({ error: "An error occurred" });
                    }),
                  !0
                );
            });
          },
          {},
        ],
      },
      ["kgW6q"],
      "kgW6q",
      "parcelRequire91c9"
    ),
    (globalThis.define = e);
})(globalThis.define);
