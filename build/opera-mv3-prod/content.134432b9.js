!(function (e) {
  var t;
  "function" == typeof e && ((t = e), (e = null)),
    (function (t, n, o, r, i) {
      var l =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : {},
        u = "function" == typeof l[r] && l[r],
        c = u.cache || {},
        d =
          "undefined" != typeof module &&
          "function" == typeof module.require &&
          module.require.bind(module);
      function f(e, n) {
        if (!c[e]) {
          if (!t[e]) {
            var o = "function" == typeof l[r] && l[r];
            if (!n && o) return o(e, !0);
            if (u) return u(e, !0);
            if (d && "string" == typeof e) return d(e);
            var i = Error("Cannot find module '" + e + "'");
            throw ((i.code = "MODULE_NOT_FOUND"), i);
          }
          (s.resolve = function (n) {
            var o = t[e][1][n];
            return null != o ? o : n;
          }),
            (s.cache = {});
          var a = (c[e] = new f.Module(e));
          t[e][0].call(a.exports, s, a, a.exports, this);
        }
        return c[e].exports;
        function s(e) {
          var t = s.resolve(e);
          return !1 === t ? {} : f(t);
        }
      }
      (f.isParcelRequire = !0),
        (f.Module = function (e) {
          (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = t),
        (f.cache = c),
        (f.parent = u),
        (f.register = function (e, n) {
          t[e] = [
            function (e, t) {
              t.exports = n;
            },
            {},
          ];
        }),
        Object.defineProperty(f, "root", {
          get: function () {
            return l[r];
          },
        }),
        (l[r] = f);
      for (var a = 0; a < n.length; a++) f(n[a]);
      if (o) {
        var s = f(o);
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = s)
          : "function" == typeof e && e.amd
          ? e(function () {
              return s;
            })
          : i && (this[i] = s);
      }
    })(
      {
        "4gaGD": [
          function (e, t, n) {
            var r = document.querySelectorAll("a");
            Array.prototype.forEach.call(r, function (e) {
              e.addEventListener("click", function (t) {
                console.log(e.href),
                  t.preventDefault(),
                  chrome.runtime
                    .sendMessage({ action: "checkThisUrl", payload: e.href })
                    .then(function (t) {
                      var n;
                      console.log(t),
                        t.predict == "NORMAL"
                          ? ((e.style.padding = "2px"),
                            (e.style.backgroundColor = "green"),
                            (location.href = e.href))
                          : t.predict == "MALICIOUS" &&
                            ((e.style.backgroundColor = "red"),
                            ((n =
                              document.createElement(
                                "div"
                              )).style.backgroundColor = "red"),
                            (n.style.padding = "20px"),
                            (n.style.position = "fixed"),
                            (n.style.top = "0"),
                            (n.style.marginLeft = "100px"),
                            (n.style.direction = "ltr"),
                            (n.style.zIndex = "1000"),
                            (n.style.width = "95%"),
                            (n.style.color = "white"),
                            (n.innerHTML =
                              "WARNING - Potential Malicious page!"),
                            document.body.appendChild(n));
                    });
              });
            }),
              console.log("HIDhidhdj");
          },
          {},
        ],
      },
      ["4gaGD"],
      "4gaGD",
      "parcelRequire91c9"
    ),
    (globalThis.define = t);
})(globalThis.define);
