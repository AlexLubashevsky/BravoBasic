
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../../app/packages/shared/render/plugins/BaseSiteModules/tram-min.js
  var require_tram_min = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
      "use strict";
      window.tram = function(a) {
        function b(a2, b2) {
          var c2 = new M.Bare();
          return c2.init(a2, b2);
        }
        function c(a2) {
          return a2.replace(/[A-Z]/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function d(a2) {
          var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
          return [
            c2,
            d2,
            e2
          ];
        }
        function e(a2, b2, c2) {
          return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
        }
        function f() {
        }
        function g(a2, b2) {
          j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
        }
        function h(a2, b2, c2) {
          j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
        }
        function i(a2, b2, c2) {
          if (void 0 !== b2 && (c2 = b2), void 0 === a2)
            return c2;
          var d2 = c2;
          return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
        }
        function j(a2) {
          U.debug && window && window.console.warn(a2);
        }
        function k(a2) {
          for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
            var e2 = a2[b2];
            e2 && d2.push(e2);
          }
          return d2;
        }
        var l = function(a2, b2, c2) {
          function d2(a3) {
            return "object" == typeof a3;
          }
          function e2(a3) {
            return "function" == typeof a3;
          }
          function f2() {
          }
          function g2(h2, i2) {
            function j2() {
              var a3 = new k2();
              return e2(a3.init) && a3.init.apply(a3, arguments), a3;
            }
            function k2() {
            }
            i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
            var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
            return n2.constructor = j2, j2.mixin = function(b3) {
              return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
            }, j2.open = function(a3) {
              if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                for (var c3 in l2)
                  b2.call(l2, c3) && (n2[c3] = l2[c3]);
              return e2(n2.init) || (n2.init = h2), j2;
            }, j2.open(i2);
          }
          return g2;
        }("prototype", {}.hasOwnProperty), m = {
          ease: [
            "ease",
            function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
            }
          ],
          "ease-in": [
            "ease-in",
            function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
            }
          ],
          "ease-out": [
            "ease-out",
            function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
            }
          ],
          "ease-in-out": [
            "ease-in-out",
            function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
            }
          ],
          linear: [
            "linear",
            function(a2, b2, c2, d2) {
              return c2 * a2 / d2 + b2;
            }
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 + b2;
            }
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function(a2, b2, c2, d2) {
              return -c2 * (a2 /= d2) * (a2 - 2) + b2;
            }
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
            }
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 + b2;
            }
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
            }
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
            }
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
            }
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function(a2, b2, c2, d2) {
              return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
            }
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
            }
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
            }
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
            }
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
            }
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function(a2, b2, c2, d2) {
              return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
            }
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function(a2, b2, c2, d2) {
              return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
            }
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function(a2, b2, c2, d2) {
              return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
            }
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
            }
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function(a2, b2, c2, d2) {
              return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
            }
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
            }
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function(a2, b2, c2, d2) {
              return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
            }
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function(a2, b2, c2, d2) {
              return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
            }
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
            }
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
            }
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
            }
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
            }
          ]
        }, n = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = [
          "Webkit",
          "Moz",
          "O",
          "ms"
        ], E = [
          "-webkit-",
          "-moz-",
          "-o-",
          "-ms-"
        ], F = function(a2) {
          if (a2 in C.style)
            return {
              dom: a2,
              css: a2
            };
          var b2, c2, d2 = "", e2 = a2.split("-");
          for (b2 = 0; b2 < e2.length; b2++)
            d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
          for (b2 = 0; b2 < D.length; b2++)
            if (c2 = D[b2] + d2, c2 in C.style)
              return {
                dom: c2,
                css: E[b2] + a2
              };
        }, G = b.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function")
        };
        if (G.transition) {
          var H = G.timing.dom;
          if (C.style[H] = m["ease-in-back"][0], !C.style[H])
            for (var I in n)
              m[I][0] = n[I];
        }
        var J = b.frame = function() {
          var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
          return a2 && G.bind ? a2.bind(p) : function(a3) {
            p.setTimeout(a3, 16);
          };
        }(), K = b.now = function() {
          var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
          return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }(), L = l(function(b2) {
          function d2(a2, b3) {
            var c2 = k(("" + a2).split(B)), d3 = c2[0];
            b3 = b3 || {};
            var e3 = Y[d3];
            if (!e3)
              return j("Unsupported property: " + d3);
            if (!b3.weak || !this.props[d3]) {
              var f3 = e3[0], g3 = this.props[d3];
              return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
            }
          }
          function e2(a2, b3, c2) {
            if (a2) {
              var e3 = typeof a2;
              if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                return this.timer = new S({
                  duration: a2,
                  context: this,
                  complete: h2
                }), void (this.active = true);
              if ("string" == e3 && b3) {
                switch (a2) {
                  case "hide":
                    o2.call(this);
                    break;
                  case "stop":
                    l2.call(this);
                    break;
                  case "redraw":
                    p2.call(this);
                    break;
                  default:
                    d2.call(this, a2, c2 && c2[1]);
                }
                return h2.call(this);
              }
              if ("function" == e3)
                return void a2.call(this, this);
              if ("object" == e3) {
                var f3 = 0;
                u2.call(this, a2, function(a3, b4) {
                  a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                }, function(a3) {
                  "wait" in a3 && (f3 = i(a3.wait, 0));
                }), t2.call(this), f3 > 0 && (this.timer = new S({
                  duration: f3,
                  context: this
                }), this.active = true, b3 && (this.timer.complete = h2));
                var g3 = this, j2 = false, k2 = {};
                J(function() {
                  u2.call(g3, a2, function(a3) {
                    a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                  }), j2 && g3.$el.css(k2);
                });
              }
            }
          }
          function f2(a2) {
            a2 = i(a2, 0), this.active ? this.queue.push({
              options: a2
            }) : (this.timer = new S({
              duration: a2,
              context: this,
              complete: h2
            }), this.active = true);
          }
          function g2(a2) {
            return this.active ? (this.queue.push({
              options: a2,
              args: arguments
            }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
          }
          function h2() {
            if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
              var a2 = this.queue.shift();
              e2.call(this, a2.options, true, a2.args);
            }
          }
          function l2(a2) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = false;
            var b3;
            "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
          }
          function m2(a2) {
            l2.call(this, a2), u2.call(this, a2, w2, x2);
          }
          function n2(a2) {
            "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
          }
          function o2() {
            l2.call(this), this.el.style.display = "none";
          }
          function p2() {
            this.el.offsetHeight;
          }
          function r2() {
            l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
          }
          function t2() {
            var a2, b3, c2 = [];
            this.upstream && c2.push(this.upstream);
            for (a2 in this.props)
              b3 = this.props[a2], b3.active && c2.push(b3.string);
            c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
          }
          function u2(a2, b3, e3) {
            var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
            for (f3 in a2)
              h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
            for (f3 in k2) {
              if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                if (!j2)
                  continue;
                g3 = d2.call(this, f3);
              }
              b3.call(this, g3, h3);
            }
            e3 && i2 && e3.call(this, i2);
          }
          function v2(a2) {
            a2.stop();
          }
          function w2(a2, b3) {
            a2.set(b3);
          }
          function x2(a2) {
            this.$el.css(a2);
          }
          function y2(a2, c2) {
            b2[a2] = function() {
              return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
            };
          }
          function A2(a2, b3) {
            var c2, d3 = this.children.length;
            for (c2 = 0; d3 > c2; c2++)
              a2.apply(this.children[c2], b3);
            return this;
          }
          b2.init = function(b3) {
            if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
              var c2 = W(this.el, "transition");
              c2 && !z.test(c2) && (this.upstream = c2);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
          }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
        }), M = l(L, function(b2) {
          function c2(b3, c3) {
            var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
            return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
          }
          b2.init = function(b3, d2) {
            var e2 = a(b3);
            if (!e2.length)
              return this;
            if (1 === e2.length)
              return c2(e2[0], d2);
            var f2 = [];
            return e2.each(function(a2, b4) {
              f2.push(c2(b4, d2));
            }), this.children = f2, this;
          };
        }), N = l(function(a2) {
          function b2() {
            var a3 = this.get();
            this.update("auto");
            var b3 = this.get();
            return this.update(a3), b3;
          }
          function c2(a3, b3, c3) {
            return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
          }
          function d2(a3) {
            var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
            return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var f2 = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          a2.init = function(a3, b3, d3, e2) {
            this.$el = a3, this.el = a3[0];
            var g2 = b3[0];
            d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
          }, a2.set = function(a3) {
            a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
          }, a2.transition = function(a3) {
            this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
          }, a2.fallback = function(a3) {
            var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
            a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
              from: c3,
              to: a3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.get = function() {
            return W(this.el, this.name);
          }, a2.update = function(a3) {
            V(this.el, this.name, a3);
          }, a2.stop = function() {
            (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a3 = this.tween;
            a3 && a3.context && a3.destroy();
          }, a2.convert = function(a3, b3) {
            if ("auto" == a3 && this.auto)
              return a3;
            var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
            switch (b3) {
              case t:
                if (e2)
                  return a3;
                if (f3 && "" === a3.replace(r, ""))
                  return +a3;
                c3 = "number(unitless)";
                break;
              case u:
                if (f3) {
                  if ("" === a3 && this.original)
                    return this.original;
                  if (b3.test(a3))
                    return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                }
                c3 = "hex or rgb string";
                break;
              case v:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit)";
                break;
              case w:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit or %)";
                break;
              case x:
                if (e2)
                  return a3 + this.angle;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(deg) or string(angle)";
                break;
              case y:
                if (e2)
                  return a3;
                if (f3 && w.test(a3))
                  return a3;
                c3 = "number(unitless) or string(unit or %)";
            }
            return g(c3, a3), a3;
          }, a2.redraw = function() {
            this.el.offsetHeight;
          };
        }), O = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
          };
        }), P = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.animate = this.fallback;
          }, a2.get = function() {
            return this.$el[this.name]();
          }, a2.update = function(a3) {
            this.$el[this.name](a3);
          };
        }), Q = l(N, function(a2, b2) {
          function c2(a3, b3) {
            var c3, d2, e2, f2, g2;
            for (c3 in a3)
              f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
          }
          a2.init = function() {
            b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
          }, a2.set = function(a3) {
            c2.call(this, a3, function(a4, b3) {
              this.current[a4] = b3;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
          }, a2.transition = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var c3, d2 = {};
            for (c3 in this.current)
              d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
            this.active = true, this.nextStyle = this.style(d2);
          }, a2.fallback = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.update = function() {
            V(this.el, this.name, this.style(this.current));
          }, a2.style = function(a3) {
            var b3, c3 = "";
            for (b3 in a3)
              c3 += b3 + "(" + a3[b3] + ") ";
            return c3;
          }, a2.values = function(a3) {
            var b3, d2 = {};
            return c2.call(this, a3, function(a4, c3, e2) {
              d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
            }), d2;
          };
        }), R = l(function(b2) {
          function c2(a2) {
            1 === n2.push(a2) && J(g2);
          }
          function g2() {
            var a2, b3, c3, d2 = n2.length;
            if (d2)
              for (J(g2), b3 = K(), a2 = d2; a2--; )
                c3 = n2[a2], c3 && c3.render(b3);
          }
          function i2(b3) {
            var c3, d2 = a.inArray(b3, n2);
            d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
          }
          function j2(a2) {
            return Math.round(a2 * o2) / o2;
          }
          function k2(a2, b3, c3) {
            return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
          }
          var l2 = {
            ease: m.ease[1],
            from: 0,
            to: 1
          };
          b2.init = function(a2) {
            this.duration = a2.duration || 0, this.delay = a2.delay || 0;
            var b3 = a2.ease || l2.ease;
            m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
            var c3 = a2.from, d2 = a2.to;
            void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
          }, b2.play = function() {
            this.active || (this.start || (this.start = K()), this.active = true, c2(this));
          }, b2.stop = function() {
            this.active && (this.active = false, i2(this));
          }, b2.render = function(a2) {
            var b3, c3 = a2 - this.start;
            if (this.delay) {
              if (c3 <= this.delay)
                return;
              c3 -= this.delay;
            }
            if (c3 < this.duration) {
              var d2 = this.ease(c3, 0, 1, this.duration);
              return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
            }
            b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, b2.format = function(a2, b3) {
            if (b3 += "", a2 += "", "#" == a2.charAt(0))
              return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
              c3 !== e2 && h("tween", b3, a2), this.unit = c3;
            }
            b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
          }, b2.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
          };
          var n2 = [], o2 = 1e3;
        }), S = l(R, function(a2) {
          a2.init = function(a3) {
            this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
          }, a2.render = function(a3) {
            var b2 = a3 - this.start;
            b2 < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }), T = l(R, function(a2, b2) {
          a2.init = function(a3) {
            this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
            var b3, c2;
            for (b3 in a3.values)
              c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                name: b3,
                from: this.current[b3],
                to: c2,
                duration: a3.duration,
                delay: a3.delay,
                ease: a3.ease,
                autoplay: false
              }));
            this.play();
          }, a2.render = function(a3) {
            var b3, c2, d2 = this.tweens.length, e2 = false;
            for (b3 = d2; b3--; )
              c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
            return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, a2.destroy = function() {
            if (b2.destroy.call(this), this.tweens) {
              var a3, c2 = this.tweens.length;
              for (a3 = c2; a3--; )
                this.tweens[a3].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }), U = b.config = {
          debug: false,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: false,
          hideBackface: false,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
        b.fallback = function(a2) {
          if (!G.transition)
            return U.fallback = true;
          U.agentTests.push("(" + a2 + ")");
          var b2 = new RegExp(U.agentTests.join("|"), "i");
          U.fallback = b2.test(navigator.userAgent);
        }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
          return new R(a2);
        }, b.delay = function(a2, b2, c2) {
          return new S({
            complete: b2,
            duration: a2,
            context: c2
          });
        }, a.fn.tram = function(a2) {
          return b.call(null, this, a2);
        };
        var V = a.style, W = a.css, X = {
          transform: G.transform && G.transform.css
        }, Y = {
          color: [
            O,
            u
          ],
          background: [
            O,
            u,
            "background-color"
          ],
          "outline-color": [
            O,
            u
          ],
          "border-color": [
            O,
            u
          ],
          "border-top-color": [
            O,
            u
          ],
          "border-right-color": [
            O,
            u
          ],
          "border-bottom-color": [
            O,
            u
          ],
          "border-left-color": [
            O,
            u
          ],
          "border-width": [
            N,
            v
          ],
          "border-top-width": [
            N,
            v
          ],
          "border-right-width": [
            N,
            v
          ],
          "border-bottom-width": [
            N,
            v
          ],
          "border-left-width": [
            N,
            v
          ],
          "border-spacing": [
            N,
            v
          ],
          "letter-spacing": [
            N,
            v
          ],
          margin: [
            N,
            v
          ],
          "margin-top": [
            N,
            v
          ],
          "margin-right": [
            N,
            v
          ],
          "margin-bottom": [
            N,
            v
          ],
          "margin-left": [
            N,
            v
          ],
          padding: [
            N,
            v
          ],
          "padding-top": [
            N,
            v
          ],
          "padding-right": [
            N,
            v
          ],
          "padding-bottom": [
            N,
            v
          ],
          "padding-left": [
            N,
            v
          ],
          "outline-width": [
            N,
            v
          ],
          opacity: [
            N,
            t
          ],
          top: [
            N,
            w
          ],
          right: [
            N,
            w
          ],
          bottom: [
            N,
            w
          ],
          left: [
            N,
            w
          ],
          "font-size": [
            N,
            w
          ],
          "text-indent": [
            N,
            w
          ],
          "word-spacing": [
            N,
            w
          ],
          width: [
            N,
            w
          ],
          "min-width": [
            N,
            w
          ],
          "max-width": [
            N,
            w
          ],
          height: [
            N,
            w
          ],
          "min-height": [
            N,
            w
          ],
          "max-height": [
            N,
            w
          ],
          "line-height": [
            N,
            y
          ],
          "scroll-top": [
            P,
            t,
            "scrollTop"
          ],
          "scroll-left": [
            P,
            t,
            "scrollLeft"
          ]
        }, Z = {};
        G.transform && (Y.transform = [
          Q
        ], Z = {
          x: [
            w,
            "translateX"
          ],
          y: [
            w,
            "translateY"
          ],
          rotate: [
            x
          ],
          rotateX: [
            x
          ],
          rotateY: [
            x
          ],
          scale: [
            t
          ],
          scaleX: [
            t
          ],
          scaleY: [
            t
          ],
          skew: [
            x
          ],
          skewX: [
            x
          ],
          skewY: [
            x
          ]
        }), G.transform && G.backface && (Z.z = [
          w,
          "translateZ"
        ], Z.rotateZ = [
          x
        ], Z.scaleZ = [
          t
        ], Z.perspective = [
          v
        ]);
        var $ = /ms/, _ = /s|\./;
        return a.tram = b;
      }(window.jQuery);
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
  var require_underscore_custom = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
      "use strict";
      var $ = window.$;
      var tram = require_tram_min() && $.tram;
      module.exports = function() {
        var _ = {};
        _.VERSION = "1.6.0-Webflow";
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var each = _.each = _.forEach = function(obj, iterator, context) {
          if (obj == null)
            return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
            }
          }
          return obj;
        };
        _.map = _.collect = function(obj, iterator, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeMap && obj.map === nativeMap)
            return obj.map(iterator, context);
          each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
          });
          return results;
        };
        _.find = _.detect = function(obj, predicate, context) {
          var result;
          any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
              result = value;
              return true;
            }
          });
          return result;
        };
        _.filter = _.select = function(obj, predicate, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeFilter && obj.filter === nativeFilter)
            return obj.filter(predicate, context);
          each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list))
              results.push(value);
          });
          return results;
        };
        var any = _.some = _.any = function(obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null)
            return result;
          if (nativeSome && obj.some === nativeSome)
            return obj.some(predicate, context);
          each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list)))
              return breaker;
          });
          return !!result;
        };
        _.contains = _.include = function(obj, target) {
          if (obj == null)
            return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf)
            return obj.indexOf(target) != -1;
          return any(obj, function(value) {
            return value === target;
          });
        };
        _.delay = function(func, wait) {
          var args = slice.call(arguments, 2);
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        };
        _.defer = function(func) {
          return _.delay.apply(_, [
            func,
            1
          ].concat(slice.call(arguments, 1)));
        };
        _.throttle = function(func) {
          var wait, args, context;
          return function() {
            if (wait)
              return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
              wait = false;
              func.apply(context, args);
            });
          };
        };
        _.debounce = function(func, wait, immediate) {
          var timeout, args, context, timestamp, result;
          var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
              }
            }
          };
          return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }
            return result;
          };
        };
        _.defaults = function(obj) {
          if (!_.isObject(obj))
            return obj;
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
              if (obj[prop] === void 0)
                obj[prop] = source[prop];
            }
          }
          return obj;
        };
        _.keys = function(obj) {
          if (!_.isObject(obj))
            return [];
          if (nativeKeys)
            return nativeKeys(obj);
          var keys = [];
          for (var key in obj)
            if (_.has(obj, key))
              keys.push(key);
          return keys;
        };
        _.has = function(obj, key) {
          return hasOwnProperty.call(obj, key);
        };
        _.isObject = function(obj) {
          return obj === Object(obj);
        };
        _.now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        _.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        var escapeChar = function(match) {
          return "\\" + escapes[match];
        };
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        _.template = function(text, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = _.defaults({}, settings, _.templateSettings);
          var matcher = RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
          ].join("|") + "|$", "g");
          var index = 0;
          var source = "__p+='";
          text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
              source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error("variable is not a bare identifier: " + argument);
          } else {
            source = "with(obj||{}){\n" + source + "}\n";
            argument = "obj";
          }
          source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
          var render;
          try {
            render = new Function(settings.variable || "obj", "_", source);
          } catch (e) {
            e.source = source;
            throw e;
          }
          var template = function(data) {
            return render.call(this, data, _);
          };
          template.source = "function(" + argument + "){\n" + source + "}";
          return template;
        };
        return _;
      }();
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
  var require_webflow_lib = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
      "use strict";
      var Webflow = {};
      var modules = {};
      var primary = [];
      var secondary = window.Webflow || [];
      var $ = window.jQuery;
      var $win = $(window);
      var $doc = $(document);
      var isFunction = $.isFunction;
      var _ = Webflow._ = require_underscore_custom();
      var tram = Webflow.tram = require_tram_min() && $.tram;
      var domready = false;
      var destroyed = false;
      tram.config.hideBackface = false;
      tram.config.keepInherited = true;
      Webflow.define = function(name, factory, options) {
        if (modules[name]) {
          unbindModule(modules[name]);
        }
        var instance = modules[name] = factory($, _, options) || {};
        bindModule(instance);
        return instance;
      };
      Webflow.require = function(name) {
        return modules[name];
      };
      function bindModule(module1) {
        if (Webflow.env()) {
          isFunction(module1.design) && $win.on("__wf_design", module1.design);
          isFunction(module1.preview) && $win.on("__wf_preview", module1.preview);
        }
        isFunction(module1.destroy) && $win.on("__wf_destroy", module1.destroy);
        if (module1.ready && isFunction(module1.ready)) {
          addReady(module1);
        }
      }
      function addReady(module1) {
        if (domready) {
          module1.ready();
          return;
        }
        if (_.contains(primary, module1.ready)) {
          return;
        }
        primary.push(module1.ready);
      }
      function unbindModule(module1) {
        isFunction(module1.design) && $win.off("__wf_design", module1.design);
        isFunction(module1.preview) && $win.off("__wf_preview", module1.preview);
        isFunction(module1.destroy) && $win.off("__wf_destroy", module1.destroy);
        if (module1.ready && isFunction(module1.ready)) {
          removeReady(module1);
        }
      }
      function removeReady(module1) {
        primary = _.filter(primary, function(readyFn) {
          return readyFn !== module1.ready;
        });
      }
      Webflow.push = function(ready) {
        if (domready) {
          isFunction(ready) && ready();
          return;
        }
        secondary.push(ready);
      };
      Webflow.env = function(mode) {
        var designFlag = window.__wf_design;
        var inApp = typeof designFlag !== "undefined";
        if (!mode) {
          return inApp;
        }
        if (mode === "design") {
          return inApp && designFlag;
        }
        if (mode === "preview") {
          return inApp && !designFlag;
        }
        if (mode === "slug") {
          return inApp && window.__wf_slug;
        }
        if (mode === "editor") {
          return window.WebflowEditor;
        }
        if (mode === "test") {
          return window.__wf_test;
        }
        if (mode === "frame") {
          return window !== window.top;
        }
      };
      var userAgent = navigator.userAgent.toLowerCase();
      var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
      var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
      Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
      var touchTarget;
      touch && $doc.on("touchstart mousedown", function(evt) {
        touchTarget = evt.target;
      });
      Webflow.validClick = touch ? function(clickTarget) {
        return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
      } : function() {
        return true;
      };
      var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
      var scrollEvents = "scroll.webflow " + resizeEvents;
      Webflow.resize = eventProxy($win, resizeEvents);
      Webflow.scroll = eventProxy($win, scrollEvents);
      Webflow.redraw = eventProxy();
      function eventProxy(target, types) {
        var handlers = [];
        var proxy = {};
        proxy.up = _.throttle(function(evt) {
          _.each(handlers, function(h) {
            h(evt);
          });
        });
        if (target && types) {
          target.on(types, proxy.up);
        }
        proxy.on = function(handler) {
          if (typeof handler !== "function") {
            return;
          }
          if (_.contains(handlers, handler)) {
            return;
          }
          handlers.push(handler);
        };
        proxy.off = function(handler) {
          if (!arguments.length) {
            handlers = [];
            return;
          }
          handlers = _.filter(handlers, function(h) {
            return h !== handler;
          });
        };
        return proxy;
      }
      Webflow.location = function(url) {
        window.location = url;
      };
      if (Webflow.env()) {
        Webflow.location = function() {
        };
      }
      Webflow.ready = function() {
        domready = true;
        if (destroyed) {
          restoreModules();
        } else {
          _.each(primary, callReady);
        }
        _.each(secondary, callReady);
        Webflow.resize.up();
      };
      function callReady(readyFn) {
        isFunction(readyFn) && readyFn();
      }
      function restoreModules() {
        destroyed = false;
        _.each(modules, bindModule);
      }
      var deferLoad;
      Webflow.load = function(handler) {
        deferLoad.then(handler);
      };
      function bindLoad() {
        if (deferLoad) {
          deferLoad.reject();
          $win.off("load", deferLoad.resolve);
        }
        deferLoad = new $.Deferred();
        $win.on("load", deferLoad.resolve);
      }
      Webflow.destroy = function(options) {
        options = options || {};
        destroyed = true;
        $win.triggerHandler("__wf_destroy");
        if (options.domready != null) {
          domready = options.domready;
        }
        _.each(modules, unbindModule);
        Webflow.resize.off();
        Webflow.scroll.off();
        Webflow.redraw.off();
        primary = [];
        secondary = [];
        if (deferLoad.state() === "pending") {
          bindLoad();
        }
      };
      $(Webflow.ready);
      bindLoad();
      module.exports = window.Webflow = Webflow;
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
  var require_webflow_brand = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("brand", module.exports = function($) {
        var api = {};
        var doc = document;
        var $html = $("html");
        var $body = $("body");
        var namespace = ".w-webflow-badge";
        var location = window.location;
        var isPhantom = /PhantomJS/i.test(navigator.userAgent);
        var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        var brandElement;
        api.ready = function() {
          var shouldBrand = $html.attr("data-wf-status");
          var publishedDomain = $html.attr("data-wf-domain") || "";
          if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
          }
          if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
          }
        };
        function onFullScreenChange() {
          var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
          $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
        }
        function createBadge() {
          var $brand = $('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs");
          var $logoArt = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          });
          var $logoText = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
          $brand.append($logoArt, $logoText);
          return $brand[0];
        }
        function ensureBrand() {
          var found = $body.children(namespace);
          var match = found.length && found.get(0) === brandElement;
          var inEditor = Webflow.env("editor");
          if (match) {
            if (inEditor) {
              found.remove();
            }
            return;
          }
          if (found.length) {
            found.remove();
          }
          if (!inEditor) {
            $body.append(brandElement);
          }
        }
        return api;
      });
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-links.js
  var require_webflow_links = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("links", module.exports = function($, _) {
        var api = {};
        var $win = $(window);
        var designer;
        var inApp = Webflow.env();
        var location = window.location;
        var tempLink = document.createElement("a");
        var linkCurrent = "w--current";
        var indexPage = /index\.(html|php)$/;
        var dirList = /\/$/;
        var anchors;
        var slug;
        api.ready = api.design = api.preview = init;
        function init() {
          designer = inApp && Webflow.env("design");
          slug = Webflow.env("slug") || location.pathname || "";
          Webflow.scroll.off(scroll);
          anchors = [];
          var links = document.links;
          for (var i = 0; i < links.length; ++i) {
            select(links[i]);
          }
          if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
          }
        }
        function select(link) {
          if (link.getAttribute("hreflang")) {
            return;
          }
          var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
          tempLink.href = href;
          if (href.indexOf(":") >= 0) {
            return;
          }
          var $link = $(link);
          if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
              return;
            }
            var $section = $(tempLink.hash);
            $section.length && anchors.push({
              link: $link,
              sec: $section,
              active: false
            });
            return;
          }
          if (href === "#" || href === "") {
            return;
          }
          var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
          setClass($link, linkCurrent, match);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          _.each(anchors, function(anchor) {
            if (anchor.link.attr("hreflang")) {
              return;
            }
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
              return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
          });
        }
        function setClass($elem, className, add) {
          var exists = $elem.hasClass(className);
          if (add && exists) {
            return;
          }
          if (!add && !exists) {
            return;
          }
          add ? $elem.addClass(className) : $elem.removeClass(className);
        }
        return api;
      });
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
  var require_webflow_scroll = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("scroll", module.exports = function($) {
        var NS_EVENTS = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        };
        var loc = window.location;
        var history = inIframe() ? null : window.history;
        var $win = $(window);
        var $doc = $(document);
        var $body = $(document.body);
        var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
          window.setTimeout(fn, 15);
        };
        var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
        var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
        var emptyHrefSelector = 'a[href="#"]';
        var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
        var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
        var focusStylesEl = document.createElement("style");
        focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
        function inIframe() {
          try {
            return Boolean(window.frameElement);
          } catch (e) {
            return true;
          }
        }
        var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
        function linksToCurrentPage(link) {
          return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
        }
        const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function reducedMotionEnabled() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
        }
        function setFocusable($el, action) {
          var initialTabindex;
          switch (action) {
            case "add":
              initialTabindex = $el.attr("tabindex");
              if (initialTabindex) {
                $el.attr("data-wf-tabindex-swap", initialTabindex);
              } else {
                $el.attr("tabindex", "-1");
              }
              break;
            case "remove":
              initialTabindex = $el.attr("data-wf-tabindex-swap");
              if (initialTabindex) {
                $el.attr("tabindex", initialTabindex);
                $el.removeAttr("data-wf-tabindex-swap");
              } else {
                $el.removeAttr("tabindex");
              }
              break;
          }
          $el.toggleClass("wf-force-outline-none", action === "add");
        }
        function validateScroll(evt) {
          var target = evt.currentTarget;
          if (
            // Bail if in Designer
            Webflow.env("design") || // Ignore links being used by jQuery mobile
            window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
          ) {
            return;
          }
          var hash = linksToCurrentPage(target) ? target.hash : "";
          if (hash === "")
            return;
          var $el = $(hash);
          if (!$el.length) {
            return;
          }
          if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          updateHistory(hash, evt);
          window.setTimeout(function() {
            scroll($el, function setFocus() {
              setFocusable($el, "add");
              $el.get(0).focus({
                preventScroll: true
              });
              setFocusable($el, "remove");
            });
          }, evt ? 0 : 300);
        }
        function updateHistory(hash) {
          if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
          !(Webflow.env.chrome && loc.protocol === "file:")) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
              history.pushState({
                hash
              }, "", hash);
            }
          }
        }
        function scroll($targetEl, cb) {
          var start = $win.scrollTop();
          var end = calculateScrollEndPosition($targetEl);
          if (start === end)
            return;
          var duration = calculateScrollDuration($targetEl, start, end);
          var clock = Date.now();
          var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
              animate(step);
            } else if (typeof cb === "function") {
              cb();
            }
          };
          animate(step);
        }
        function calculateScrollEndPosition($targetEl) {
          var $header = $(headerSelector);
          var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
          var end = $targetEl.offset().top - offsetY;
          if ($targetEl.data("scroll") === "mid") {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
              end -= Math.round((available - elHeight) / 2);
            }
          }
          return end;
        }
        function calculateScrollDuration($targetEl, start, end) {
          if (reducedMotionEnabled())
            return 0;
          var mult = 1;
          $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute("data-scroll-time"));
            if (!isNaN(time) && time >= 0) {
              mult = time;
            }
          });
          return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
        }
        function getY(start, end, elapsed, duration) {
          if (elapsed > duration) {
            return end;
          }
          return start + (end - start) * ease(elapsed / duration);
        }
        function ease(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        function ready() {
          var { WF_CLICK_EMPTY, WF_CLICK_SCROLL } = NS_EVENTS;
          $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
          $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
          });
          document.head.insertBefore(focusStylesEl, document.head.firstChild);
        }
        return {
          ready
        };
      });
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
  var require_webflow_focus = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus", module.exports = function() {
        var capturedEvents = [];
        var capturing = false;
        function captureEvent(e) {
          if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
          }
        }
        function isPolyfilledFocusEvent(e) {
          var el = e.target;
          var tag = el.tagName;
          return /^a$/i.test(tag) && el.href != null || // (A)
          /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
          /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
          !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
          /^audio$/i.test(tag) || // (F)
          /^video$/i.test(tag) && el.controls === true;
        }
        function handler(e) {
          if (isPolyfilledFocusEvent(e)) {
            capturing = true;
            setTimeout(() => {
              capturing = false;
              e.target.focus();
              while (capturedEvents.length > 0) {
                var event = capturedEvents.pop();
                event.target.dispatchEvent(new MouseEvent(event.type, event));
              }
            }, 0);
          }
        }
        function ready() {
          if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
            document.addEventListener("mousedown", handler, true);
            document.addEventListener("mouseup", captureEvent, true);
            document.addEventListener("click", captureEvent, true);
          }
        }
        return {
          ready
        };
      });
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
  var require_webflow_focus_visible = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus-visible", module.exports = function() {
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            "datetime-local": true
          };
          function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
              return true;
            }
            return false;
          }
          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }
            if (tagName === "TEXTAREA" && !el.readOnly) {
              return true;
            }
            if (el.isContentEditable) {
              return true;
            }
            return false;
          }
          function addFocusVisibleAttribute(el) {
            if (el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.setAttribute("data-wf-focus-visible", "true");
          }
          function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.removeAttribute("data-wf-focus-visible");
          }
          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
          }
          function onPointerDown() {
            hadKeyboardEvent = false;
          }
          function onFocus(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleAttribute(e.target);
            }
          }
          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (e.target.hasAttribute("data-wf-focus-visible")) {
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleAttribute(e.target);
            }
          }
          function onVisibilityChange() {
            if (document.visibilityState === "hidden") {
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              addInitialPointerMoveListeners();
            }
          }
          function addInitialPointerMoveListeners() {
            document.addEventListener("mousemove", onInitialPointerMove);
            document.addEventListener("mousedown", onInitialPointerMove);
            document.addEventListener("mouseup", onInitialPointerMove);
            document.addEventListener("pointermove", onInitialPointerMove);
            document.addEventListener("pointerdown", onInitialPointerMove);
            document.addEventListener("pointerup", onInitialPointerMove);
            document.addEventListener("touchmove", onInitialPointerMove);
            document.addEventListener("touchstart", onInitialPointerMove);
            document.addEventListener("touchend", onInitialPointerMove);
          }
          function removeInitialPointerMoveListeners() {
            document.removeEventListener("mousemove", onInitialPointerMove);
            document.removeEventListener("mousedown", onInitialPointerMove);
            document.removeEventListener("mouseup", onInitialPointerMove);
            document.removeEventListener("pointermove", onInitialPointerMove);
            document.removeEventListener("pointerdown", onInitialPointerMove);
            document.removeEventListener("pointerup", onInitialPointerMove);
            document.removeEventListener("touchmove", onInitialPointerMove);
            document.removeEventListener("touchstart", onInitialPointerMove);
            document.removeEventListener("touchend", onInitialPointerMove);
          }
          function onInitialPointerMove(e) {
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
              return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          }
          document.addEventListener("keydown", onKeyDown, true);
          document.addEventListener("mousedown", onPointerDown, true);
          document.addEventListener("pointerdown", onPointerDown, true);
          document.addEventListener("touchstart", onPointerDown, true);
          document.addEventListener("visibilitychange", onVisibilityChange, true);
          addInitialPointerMoveListeners();
          scope.addEventListener("focus", onFocus, true);
          scope.addEventListener("blur", onBlur, true);
        }
        function ready() {
          if (typeof document !== "undefined") {
            try {
              document.querySelector(":focus-visible");
            } catch (e) {
              applyFocusVisiblePolyfill(document);
            }
          }
        }
        return {
          ready
        };
      });
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
  var require_webflow_touch = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("touch", module.exports = function($) {
        var api = {};
        var getSelection = window.getSelection;
        $.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        };
        api.init = function(el) {
          el = typeof el === "string" ? $(el).get(0) : el;
          return el ? new Touch(el) : null;
        };
        function Touch(el) {
          var active = false;
          var useTouch = false;
          var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
          var startX;
          var lastX;
          el.addEventListener("touchstart", start, false);
          el.addEventListener("touchmove", move, false);
          el.addEventListener("touchend", end, false);
          el.addEventListener("touchcancel", cancel, false);
          el.addEventListener("mousedown", start, false);
          el.addEventListener("mousemove", move, false);
          el.addEventListener("mouseup", end, false);
          el.addEventListener("mouseout", cancel, false);
          function start(evt) {
            var touches = evt.touches;
            if (touches && touches.length > 1) {
              return;
            }
            active = true;
            if (touches) {
              useTouch = true;
              startX = touches[0].clientX;
            } else {
              startX = evt.clientX;
            }
            lastX = startX;
          }
          function move(evt) {
            if (!active) {
              return;
            }
            if (useTouch && evt.type === "mousemove") {
              evt.preventDefault();
              evt.stopPropagation();
              return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
              triggerEvent("swipe", evt, {
                direction: velocityX > 0 ? "right" : "left"
              });
              cancel();
            }
          }
          function end(evt) {
            if (!active) {
              return;
            }
            active = false;
            if (useTouch && evt.type === "mouseup") {
              evt.preventDefault();
              evt.stopPropagation();
              useTouch = false;
              return;
            }
          }
          function cancel() {
            active = false;
          }
          function destroy() {
            el.removeEventListener("touchstart", start, false);
            el.removeEventListener("touchmove", move, false);
            el.removeEventListener("touchend", end, false);
            el.removeEventListener("touchcancel", cancel, false);
            el.removeEventListener("mousedown", start, false);
            el.removeEventListener("mousemove", move, false);
            el.removeEventListener("mouseup", end, false);
            el.removeEventListener("mouseout", cancel, false);
            el = null;
          }
          this.destroy = destroy;
        }
        function triggerEvent(type, evt, data) {
          var newEvent = $.Event(type, {
            originalEvent: evt
          });
          $(evt.target).trigger(newEvent, data);
        }
        api.instance = api.init(document);
        return api;
      });
    }
  });

  // ../../app/node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "../../app/node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // ../../app/node_modules/lodash/_root.js
  var require_root = __commonJS({
    "../../app/node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // ../../app/node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "../../app/node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // ../../app/node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "../../app/node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // ../../app/node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "../../app/node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // ../../app/node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "../../app/node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // ../../app/node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "../../app/node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // ../../app/node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "../../app/node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // ../../app/node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "../../app/node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // ../../app/node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "../../app/node_modules/lodash/isPlainObject.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // ../../app/node_modules/redux/node_modules/symbol-observable/lib/ponyfill.js
  var require_ponyfill = __commonJS({
    "../../app/node_modules/redux/node_modules/symbol-observable/lib/ponyfill.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = symbolObservablePonyfill;
      function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;
        if (typeof _Symbol === "function") {
          if (_Symbol.observable) {
            result = _Symbol.observable;
          } else {
            result = _Symbol("observable");
            _Symbol.observable = result;
          }
        } else {
          result = "@@observable";
        }
        return result;
      }
    }
  });

  // ../../app/node_modules/redux/node_modules/symbol-observable/lib/index.js
  var require_lib = __commonJS({
    "../../app/node_modules/redux/node_modules/symbol-observable/lib/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _ponyfill = require_ponyfill();
      var _ponyfill2 = _interopRequireDefault(_ponyfill);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var root;
      if (typeof self !== "undefined") {
        root = self;
      } else if (typeof window !== "undefined") {
        root = window;
      } else if (typeof global !== "undefined") {
        root = global;
      } else if (typeof module !== "undefined") {
        root = module;
      } else {
        root = Function("return this")();
      }
      var result = (0, _ponyfill2["default"])(root);
      exports["default"] = result;
    }
  });

  // ../../app/node_modules/redux/lib/createStore.js
  var require_createStore = __commonJS({
    "../../app/node_modules/redux/lib/createStore.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.ActionTypes = void 0;
      exports["default"] = createStore;
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _symbolObservable = require_lib();
      var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var ActionTypes = exports.ActionTypes = {
        INIT: "@@redux/INIT"
      };
      function createStore(reducer, preloadedState, enhancer) {
        var _ref2;
        if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
          enhancer = preloadedState;
          preloadedState = void 0;
        }
        if (typeof enhancer !== "undefined") {
          if (typeof enhancer !== "function") {
            throw new Error("Expected the enhancer to be a function.");
          }
          return enhancer(createStore)(reducer, preloadedState);
        }
        if (typeof reducer !== "function") {
          throw new Error("Expected the reducer to be a function.");
        }
        var currentReducer = reducer;
        var currentState = preloadedState;
        var currentListeners = [];
        var nextListeners = currentListeners;
        var isDispatching = false;
        function ensureCanMutateNextListeners() {
          if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
          }
        }
        function getState() {
          return currentState;
        }
        function subscribe(listener) {
          if (typeof listener !== "function") {
            throw new Error("Expected listener to be a function.");
          }
          var isSubscribed = true;
          ensureCanMutateNextListeners();
          nextListeners.push(listener);
          return function unsubscribe() {
            if (!isSubscribed) {
              return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
          };
        }
        function dispatch(action) {
          if (!(0, _isPlainObject2["default"])(action)) {
            throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
          }
          if (typeof action.type === "undefined") {
            throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
          }
          if (isDispatching) {
            throw new Error("Reducers may not dispatch actions.");
          }
          try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
          } finally {
            isDispatching = false;
          }
          var listeners = currentListeners = nextListeners;
          for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
          }
          return action;
        }
        function replaceReducer(nextReducer) {
          if (typeof nextReducer !== "function") {
            throw new Error("Expected the nextReducer to be a function.");
          }
          currentReducer = nextReducer;
          dispatch({ type: ActionTypes.INIT });
        }
        function observable() {
          var _ref;
          var outerSubscribe = subscribe;
          return _ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe2(observer) {
              if (typeof observer !== "object") {
                throw new TypeError("Expected the observer to be an object.");
              }
              function observeState() {
                if (observer.next) {
                  observer.next(getState());
                }
              }
              observeState();
              var unsubscribe = outerSubscribe(observeState);
              return { unsubscribe };
            }
          }, _ref[_symbolObservable2["default"]] = function() {
            return this;
          }, _ref;
        }
        dispatch({ type: ActionTypes.INIT });
        return _ref2 = {
          dispatch,
          subscribe,
          getState,
          replaceReducer
        }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
      }
    }
  });

  // ../../app/node_modules/redux/lib/utils/warning.js
  var require_warning = __commonJS({
    "../../app/node_modules/redux/lib/utils/warning.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = warning;
      function warning(message) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
  });

  // ../../app/node_modules/redux/lib/combineReducers.js
  var require_combineReducers = __commonJS({
    "../../app/node_modules/redux/lib/combineReducers.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = combineReducers;
      var _createStore = require_createStore();
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function getUndefinedStateErrorMessage(key, action) {
        var actionType = action && action.type;
        var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
        return "Given action " + actionName + ', reducer "' + key + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
      }
      function assertReducerSanity(reducers) {
        Object.keys(reducers).forEach(function(key) {
          var reducer = reducers[key];
          var initialState = reducer(void 0, { type: _createStore.ActionTypes.INIT });
          if (typeof initialState === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          }
          var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if (typeof reducer(void 0, { type }) === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
          }
        });
      }
      function combineReducers(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};
        for (var i = 0; i < reducerKeys.length; i++) {
          var key = reducerKeys[i];
          if (false) {
            if (typeof reducers[key] === "undefined") {
              (0, _warning2["default"])('No reducer provided for key "' + key + '"');
            }
          }
          if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
          }
        }
        var finalReducerKeys = Object.keys(finalReducers);
        if (false) {
          var unexpectedKeyCache = {};
        }
        var sanityError;
        try {
          assertReducerSanity(finalReducers);
        } catch (e) {
          sanityError = e;
        }
        return function combination() {
          var state = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
          var action = arguments[1];
          if (sanityError) {
            throw sanityError;
          }
          if (false) {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
              (0, _warning2["default"])(warningMessage);
            }
          }
          var hasChanged = false;
          var nextState = {};
          for (var i2 = 0; i2 < finalReducerKeys.length; i2++) {
            var key2 = finalReducerKeys[i2];
            var reducer = finalReducers[key2];
            var previousStateForKey = state[key2];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
              var errorMessage = getUndefinedStateErrorMessage(key2, action);
              throw new Error(errorMessage);
            }
            nextState[key2] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
          }
          return hasChanged ? nextState : state;
        };
      }
    }
  });

  // ../../app/node_modules/redux/lib/bindActionCreators.js
  var require_bindActionCreators = __commonJS({
    "../../app/node_modules/redux/lib/bindActionCreators.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = bindActionCreators;
      function bindActionCreator(actionCreator, dispatch) {
        return function() {
          return dispatch(actionCreator.apply(void 0, arguments));
        };
      }
      function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === "function") {
          return bindActionCreator(actionCreators, dispatch);
        }
        if (typeof actionCreators !== "object" || actionCreators === null) {
          throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        }
        var keys = Object.keys(actionCreators);
        var boundActionCreators = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var actionCreator = actionCreators[key];
          if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
          }
        }
        return boundActionCreators;
      }
    }
  });

  // ../../app/node_modules/redux/lib/compose.js
  var require_compose = __commonJS({
    "../../app/node_modules/redux/lib/compose.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = compose;
      function compose() {
        for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
          funcs[_key] = arguments[_key];
        }
        if (funcs.length === 0) {
          return function(arg) {
            return arg;
          };
        }
        if (funcs.length === 1) {
          return funcs[0];
        }
        var last = funcs[funcs.length - 1];
        var rest = funcs.slice(0, -1);
        return function() {
          return rest.reduceRight(function(composed, f) {
            return f(composed);
          }, last.apply(void 0, arguments));
        };
      }
    }
  });

  // ../../app/node_modules/redux/lib/applyMiddleware.js
  var require_applyMiddleware = __commonJS({
    "../../app/node_modules/redux/lib/applyMiddleware.js"(exports) {
      "use strict";
      exports.__esModule = true;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      exports["default"] = applyMiddleware;
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function applyMiddleware() {
        for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
          middlewares[_key] = arguments[_key];
        }
        return function(createStore) {
          return function(reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var _dispatch = store.dispatch;
            var chain = [];
            var middlewareAPI = {
              getState: store.getState,
              dispatch: function dispatch(action) {
                return _dispatch(action);
              }
            };
            chain = middlewares.map(function(middleware) {
              return middleware(middlewareAPI);
            });
            _dispatch = _compose2["default"].apply(void 0, chain)(store.dispatch);
            return _extends({}, store, {
              dispatch: _dispatch
            });
          };
        };
      }
    }
  });

  // ../../app/node_modules/redux/lib/index.js
  var require_lib2 = __commonJS({
    "../../app/node_modules/redux/lib/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
      var _createStore = require_createStore();
      var _createStore2 = _interopRequireDefault(_createStore);
      var _combineReducers = require_combineReducers();
      var _combineReducers2 = _interopRequireDefault(_combineReducers);
      var _bindActionCreators = require_bindActionCreators();
      var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
      var _applyMiddleware = require_applyMiddleware();
      var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      if (false) {
        (0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");
      }
      exports.createStore = _createStore2["default"];
      exports.combineReducers = _combineReducers2["default"];
      exports.bindActionCreators = _bindActionCreators2["default"];
      exports.applyMiddleware = _applyMiddleware2["default"];
      exports.compose = _compose2["default"];
    }
  });

  // ../../app/packages/systems/ix2/shared-constants/trigger-events.js
  var require_trigger_events = __commonJS({
    "../../app/packages/systems/ix2/shared-constants/trigger-events.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        EventAppliesTo: function() {
          return EventAppliesTo;
        },
        EventBasedOn: function() {
          return EventBasedOn;
        },
        EventContinuousMouseAxes: function() {
          return EventContinuousMouseAxes;
        },
        EventLimitAffectedElements: function() {
          return EventLimitAffectedElements;
        },
        EventTypeConsts: function() {
          return EventTypeConsts;
        },
        QuickEffectDirectionConsts: function() {
          return QuickEffectDirectionConsts;
        },
        QuickEffectIds: function() {
          return QuickEffectIds;
        }
      });
      var EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
      };
      var EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
      };
      var EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
      };
      var EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
      };
      var EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      };
      var QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      };
      var QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      };
    }
  });

  // ../../app/packages/systems/ix2/shared-constants/animation-actions.js
  var require_animation_actions = __commonJS({
    "../../app/packages/systems/ix2/shared-constants/animation-actions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ActionAppliesTo: function() {
          return ActionAppliesTo;
        },
        ActionTypeConsts: function() {
          return ActionTypeConsts;
        }
      });
      var ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        // TODO: Clean these up below because they're not used at this time
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      };
      var ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      };
    }
  });

  // ../../app/packages/systems/ix2/shared-constants/trigger-interactions.js
  var require_trigger_interactions = __commonJS({
    "../../app/packages/systems/ix2/shared-constants/trigger-interactions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "InteractionTypeConsts", {
        enumerable: true,
        get: function() {
          return InteractionTypeConsts;
        }
      });
      var InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
      };
    }
  });

  // ../../app/packages/systems/ix2/shared-constants/reduced-motion.js
  var require_reduced_motion = __commonJS({
    "../../app/packages/systems/ix2/shared-constants/reduced-motion.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ReducedMotionTypes", {
        enumerable: true,
        get: function() {
          return ReducedMotionTypes;
        }
      });
      var _animationactions = require_animation_actions();
      var { TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_SIZE, STYLE_FILTER, STYLE_FONT_VARIATION } = _animationactions.ActionTypeConsts;
      var ReducedMotionTypes = {
        [TRANSFORM_MOVE]: true,
        [TRANSFORM_SCALE]: true,
        [TRANSFORM_ROTATE]: true,
        [TRANSFORM_SKEW]: true,
        [STYLE_SIZE]: true,
        [STYLE_FILTER]: true,
        [STYLE_FONT_VARIATION]: true
      };
    }
  });

  // ../../app/packages/systems/ix2/shared-constants/IX2EngineActionTypes.js
  var require_IX2EngineActionTypes = __commonJS({
    "../../app/packages/systems/ix2/shared-constants/IX2EngineActionTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
          return IX2_ACTION_LIST_PLAYBACK_CHANGED;
        },
        IX2_ANIMATION_FRAME_CHANGED: function() {
          return IX2_ANIMATION_FRAME_CHANGED;
        },
        IX2_CLEAR_REQUESTED: function() {
          return IX2_CLEAR_REQUESTED;
        },
        IX2_ELEMENT_STATE_CHANGED: function() {
          return IX2_ELEMENT_STATE_CHANGED;
        },
        IX2_EVENT_LISTENER_ADDED: function() {
          return IX2_EVENT_LISTENER_ADDED;
        },
        IX2_EVENT_STATE_CHANGED: function() {
          return IX2_EVENT_STATE_CHANGED;
        },
        IX2_INSTANCE_ADDED: function() {
          return IX2_INSTANCE_ADDED;
        },
        IX2_INSTANCE_REMOVED: function() {
          return IX2_INSTANCE_REMOVED;
        },
        IX2_INSTANCE_STARTED: function() {
          return IX2_INSTANCE_STARTED;
        },
        IX2_MEDIA_QUERIES_DEFINED: function() {
          return IX2_MEDIA_QUERIES_DEFINED;
        },
        IX2_PARAMETER_CHANGED: function() {
          return IX2_PARAMETER_CHANGED;
        },
        IX2_PLAYBACK_REQUESTED: function() {
          return IX2_PLAYBACK_REQUESTED;
        },
        IX2_PREVIEW_REQUESTED: function() {
          return IX2_PREVIEW_REQUESTED;
        },
        IX2_RAW_DATA_IMPORTED: function() {
          return IX2_RAW_DATA_IMPORTED;
        },
        IX2_SESSION_INITIALIZED: function() {
          return IX2_SESSION_INITIALIZED;
        },
        IX2_SESSION_STARTED: function() {
          return IX2_SESSION_STARTED;
        },
        IX2_SESSION_STOPPED: function() {
          return IX2_SESSION_STOPPED;
        },
        IX2_STOP_REQUESTED: function() {
          return IX2_STOP_REQUESTED;
        },
        IX2_TEST_FRAME_RENDERED: function() {
          return IX2_TEST_FRAME_RENDERED;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function() {
          return IX2_VIEWPORT_WIDTH_CHANGED;
        }
      });
      var IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
      var IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
      var IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
      var IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
      var IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
      var IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
      var IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
      var IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
      var IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
      var IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
      var IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
      var IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
      var IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
      var IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
      var IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
      var IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
      var IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
      var IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
      var IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
      var IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
    }
  });

  // ../../app/packages/systems/ix2/shared-constants/IX2EngineConstants.js
  var require_IX2EngineConstants = __commonJS({
    "../../app/packages/systems/ix2/shared-constants/IX2EngineConstants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ABSTRACT_NODE: function() {
          return ABSTRACT_NODE;
        },
        AUTO: function() {
          return AUTO;
        },
        BACKGROUND: function() {
          return BACKGROUND;
        },
        BACKGROUND_COLOR: function() {
          return BACKGROUND_COLOR;
        },
        BAR_DELIMITER: function() {
          return BAR_DELIMITER;
        },
        BORDER_COLOR: function() {
          return BORDER_COLOR;
        },
        BOUNDARY_SELECTOR: function() {
          return BOUNDARY_SELECTOR;
        },
        CHILDREN: function() {
          return CHILDREN;
        },
        COLON_DELIMITER: function() {
          return COLON_DELIMITER;
        },
        COLOR: function() {
          return COLOR;
        },
        COMMA_DELIMITER: function() {
          return COMMA_DELIMITER;
        },
        CONFIG_UNIT: function() {
          return CONFIG_UNIT;
        },
        CONFIG_VALUE: function() {
          return CONFIG_VALUE;
        },
        CONFIG_X_UNIT: function() {
          return CONFIG_X_UNIT;
        },
        CONFIG_X_VALUE: function() {
          return CONFIG_X_VALUE;
        },
        CONFIG_Y_UNIT: function() {
          return CONFIG_Y_UNIT;
        },
        CONFIG_Y_VALUE: function() {
          return CONFIG_Y_VALUE;
        },
        CONFIG_Z_UNIT: function() {
          return CONFIG_Z_UNIT;
        },
        CONFIG_Z_VALUE: function() {
          return CONFIG_Z_VALUE;
        },
        DISPLAY: function() {
          return DISPLAY;
        },
        FILTER: function() {
          return FILTER;
        },
        FLEX: function() {
          return FLEX;
        },
        FONT_VARIATION_SETTINGS: function() {
          return FONT_VARIATION_SETTINGS;
        },
        HEIGHT: function() {
          return HEIGHT;
        },
        HTML_ELEMENT: function() {
          return HTML_ELEMENT;
        },
        IMMEDIATE_CHILDREN: function() {
          return IMMEDIATE_CHILDREN;
        },
        IX2_ID_DELIMITER: function() {
          return IX2_ID_DELIMITER;
        },
        OPACITY: function() {
          return OPACITY;
        },
        PARENT: function() {
          return PARENT;
        },
        PLAIN_OBJECT: function() {
          return PLAIN_OBJECT;
        },
        PRESERVE_3D: function() {
          return PRESERVE_3D;
        },
        RENDER_GENERAL: function() {
          return RENDER_GENERAL;
        },
        RENDER_PLUGIN: function() {
          return RENDER_PLUGIN;
        },
        RENDER_STYLE: function() {
          return RENDER_STYLE;
        },
        RENDER_TRANSFORM: function() {
          return RENDER_TRANSFORM;
        },
        ROTATE_X: function() {
          return ROTATE_X;
        },
        ROTATE_Y: function() {
          return ROTATE_Y;
        },
        ROTATE_Z: function() {
          return ROTATE_Z;
        },
        SCALE_3D: function() {
          return SCALE_3D;
        },
        SCALE_X: function() {
          return SCALE_X;
        },
        SCALE_Y: function() {
          return SCALE_Y;
        },
        SCALE_Z: function() {
          return SCALE_Z;
        },
        SIBLINGS: function() {
          return SIBLINGS;
        },
        SKEW: function() {
          return SKEW;
        },
        SKEW_X: function() {
          return SKEW_X;
        },
        SKEW_Y: function() {
          return SKEW_Y;
        },
        TRANSFORM: function() {
          return TRANSFORM;
        },
        TRANSLATE_3D: function() {
          return TRANSLATE_3D;
        },
        TRANSLATE_X: function() {
          return TRANSLATE_X;
        },
        TRANSLATE_Y: function() {
          return TRANSLATE_Y;
        },
        TRANSLATE_Z: function() {
          return TRANSLATE_Z;
        },
        WF_PAGE: function() {
          return WF_PAGE;
        },
        WIDTH: function() {
          return WIDTH;
        },
        WILL_CHANGE: function() {
          return WILL_CHANGE;
        },
        W_MOD_IX: function() {
          return W_MOD_IX;
        },
        W_MOD_JS: function() {
          return W_MOD_JS;
        }
      });
      var IX2_ID_DELIMITER = "|";
      var WF_PAGE = "data-wf-page";
      var W_MOD_JS = "w-mod-js";
      var W_MOD_IX = "w-mod-ix";
      var BOUNDARY_SELECTOR = ".w-dyn-item";
      var CONFIG_X_VALUE = "xValue";
      var CONFIG_Y_VALUE = "yValue";
      var CONFIG_Z_VALUE = "zValue";
      var CONFIG_VALUE = "value";
      var CONFIG_X_UNIT = "xUnit";
      var CONFIG_Y_UNIT = "yUnit";
      var CONFIG_Z_UNIT = "zUnit";
      var CONFIG_UNIT = "unit";
      var TRANSFORM = "transform";
      var TRANSLATE_X = "translateX";
      var TRANSLATE_Y = "translateY";
      var TRANSLATE_Z = "translateZ";
      var TRANSLATE_3D = "translate3d";
      var SCALE_X = "scaleX";
      var SCALE_Y = "scaleY";
      var SCALE_Z = "scaleZ";
      var SCALE_3D = "scale3d";
      var ROTATE_X = "rotateX";
      var ROTATE_Y = "rotateY";
      var ROTATE_Z = "rotateZ";
      var SKEW = "skew";
      var SKEW_X = "skewX";
      var SKEW_Y = "skewY";
      var OPACITY = "opacity";
      var FILTER = "filter";
      var FONT_VARIATION_SETTINGS = "font-variation-settings";
      var WIDTH = "width";
      var HEIGHT = "height";
      var BACKGROUND_COLOR = "backgroundColor";
      var BACKGROUND = "background";
      var BORDER_COLOR = "borderColor";
      var COLOR = "color";
      var DISPLAY = "display";
      var FLEX = "flex";
      var WILL_CHANGE = "willChange";
      var AUTO = "AUTO";
      var COMMA_DELIMITER = ",";
      var COLON_DELIMITER = ":";
      var BAR_DELIMITER = "|";
      var CHILDREN = "CHILDREN";
      var IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
      var SIBLINGS = "SIBLINGS";
      var PARENT = "PARENT";
      var PRESERVE_3D = "preserve-3d";
      var HTML_ELEMENT = "HTML_ELEMENT";
      var PLAIN_OBJECT = "PLAIN_OBJECT";
      var ABSTRACT_NODE = "ABSTRACT_NODE";
      var RENDER_TRANSFORM = "RENDER_TRANSFORM";
      var RENDER_GENERAL = "RENDER_GENERAL";
      var RENDER_STYLE = "RENDER_STYLE";
      var RENDER_PLUGIN = "RENDER_PLUGIN";
    }
  });

  // ../../app/packages/systems/ix2/shared-constants/index.js
  var require_shared_constants = __commonJS({
    "../../app/packages/systems/ix2/shared-constants/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ActionTypeConsts: function() {
          return _animationactions.ActionTypeConsts;
        },
        IX2EngineActionTypes: function() {
          return _IX2EngineActionTypes;
        },
        IX2EngineConstants: function() {
          return _IX2EngineConstants;
        },
        QuickEffectIds: function() {
          return _triggerevents.QuickEffectIds;
        }
      });
      var _triggerevents = _export_star(require_trigger_events(), exports);
      var _animationactions = _export_star(require_animation_actions(), exports);
      _export_star(require_trigger_interactions(), exports);
      _export_star(require_reduced_motion(), exports);
      var _IX2EngineActionTypes = /* @__PURE__ */ _interop_require_wildcard(require_IX2EngineActionTypes());
      var _IX2EngineConstants = /* @__PURE__ */ _interop_require_wildcard(require_IX2EngineConstants());
      function _export_star(from, to) {
        Object.keys(from).forEach(function(k) {
          if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
              enumerable: true,
              get: function() {
                return from[k];
              }
            });
          }
        });
        return from;
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
    }
  });

  // ../../app/packages/systems/ix2/engine/reducers/IX2DataReducer.js
  var require_IX2DataReducer = __commonJS({
    "../../app/packages/systems/ix2/engine/reducers/IX2DataReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ixData", {
        enumerable: true,
        get: function() {
          return ixData;
        }
      });
      var _sharedconstants = require_shared_constants();
      var { IX2_RAW_DATA_IMPORTED } = _sharedconstants.IX2EngineActionTypes;
      var ixData = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED: {
            return action.payload.ixData || Object.freeze({});
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // ../../app/node_modules/timm/lib/timm.js
  var require_timm = __commonJS({
    "../../app/node_modules/timm/lib/timm.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      exports.clone = clone;
      exports.addLast = addLast;
      exports.addFirst = addFirst;
      exports.removeLast = removeLast;
      exports.removeFirst = removeFirst;
      exports.insert = insert;
      exports.removeAt = removeAt;
      exports.replaceAt = replaceAt;
      exports.getIn = getIn;
      exports.set = set;
      exports.setIn = setIn;
      exports.update = update;
      exports.updateIn = updateIn;
      exports.merge = merge;
      exports.mergeDeep = mergeDeep;
      exports.mergeIn = mergeIn;
      exports.omit = omit;
      exports.addDefaults = addDefaults;
      var INVALID_ARGS = "INVALID_ARGS";
      function throwStr(msg) {
        throw new Error(msg);
      }
      function getKeysAndSymbols(obj) {
        var keys = Object.keys(obj);
        if (Object.getOwnPropertySymbols) {
          return keys.concat(Object.getOwnPropertySymbols(obj));
        }
        return keys;
      }
      var hasOwnProperty = {}.hasOwnProperty;
      function clone(obj) {
        if (Array.isArray(obj))
          return obj.slice();
        var keys = getKeysAndSymbols(obj);
        var out = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          out[key] = obj[key];
        }
        return out;
      }
      function doMerge(fAddDefaults, fDeep, first) {
        var out = first;
        !(out != null) && throwStr(false ? "At least one object should be provided to merge()" : INVALID_ARGS);
        var fChanged = false;
        for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          rest[_key - 3] = arguments[_key];
        }
        for (var idx = 0; idx < rest.length; idx++) {
          var obj = rest[idx];
          if (obj == null)
            continue;
          var keys = getKeysAndSymbols(obj);
          if (!keys.length)
            continue;
          for (var j = 0; j <= keys.length; j++) {
            var key = keys[j];
            if (fAddDefaults && out[key] !== void 0)
              continue;
            var nextVal = obj[key];
            if (fDeep && isObject(out[key]) && isObject(nextVal)) {
              nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
            }
            if (nextVal === void 0 || nextVal === out[key])
              continue;
            if (!fChanged) {
              fChanged = true;
              out = clone(out);
            }
            out[key] = nextVal;
          }
        }
        return out;
      }
      function isObject(o) {
        var type = typeof o === "undefined" ? "undefined" : _typeof(o);
        return o != null && (type === "object" || type === "function");
      }
      function addLast(array, val) {
        if (Array.isArray(val))
          return array.concat(val);
        return array.concat([val]);
      }
      function addFirst(array, val) {
        if (Array.isArray(val))
          return val.concat(array);
        return [val].concat(array);
      }
      function removeLast(array) {
        if (!array.length)
          return array;
        return array.slice(0, array.length - 1);
      }
      function removeFirst(array) {
        if (!array.length)
          return array;
        return array.slice(1);
      }
      function insert(array, idx, val) {
        return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
      }
      function removeAt(array, idx) {
        if (idx >= array.length || idx < 0)
          return array;
        return array.slice(0, idx).concat(array.slice(idx + 1));
      }
      function replaceAt(array, idx, newItem) {
        if (array[idx] === newItem)
          return array;
        var len = array.length;
        var result = Array(len);
        for (var i = 0; i < len; i++) {
          result[i] = array[i];
        }
        result[idx] = newItem;
        return result;
      }
      function getIn(obj, path) {
        !Array.isArray(path) && throwStr(false ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
        if (obj == null)
          return void 0;
        var ptr = obj;
        for (var i = 0; i < path.length; i++) {
          var key = path[i];
          ptr = ptr != null ? ptr[key] : void 0;
          if (ptr === void 0)
            return ptr;
        }
        return ptr;
      }
      function set(obj, key, val) {
        var fallback = typeof key === "number" ? [] : {};
        var finalObj = obj == null ? fallback : obj;
        if (finalObj[key] === val)
          return finalObj;
        var obj2 = clone(finalObj);
        obj2[key] = val;
        return obj2;
      }
      function doSetIn(obj, path, val, idx) {
        var newValue = void 0;
        var key = path[idx];
        if (idx === path.length - 1) {
          newValue = val;
        } else {
          var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
          newValue = doSetIn(nestedObj, path, val, idx + 1);
        }
        return set(obj, key, newValue);
      }
      function setIn(obj, path, val) {
        if (!path.length)
          return val;
        return doSetIn(obj, path, val, 0);
      }
      function update(obj, key, fnUpdate) {
        var prevVal = obj == null ? void 0 : obj[key];
        var nextVal = fnUpdate(prevVal);
        return set(obj, key, nextVal);
      }
      function updateIn(obj, path, fnUpdate) {
        var prevVal = getIn(obj, path);
        var nextVal = fnUpdate(prevVal);
        return setIn(obj, path, nextVal);
      }
      function merge(a, b, c, d, e, f) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
          rest[_key2 - 6] = arguments[_key2];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
      }
      function mergeDeep(a, b, c, d, e, f) {
        for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
          rest[_key3 - 6] = arguments[_key3];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
      }
      function mergeIn(a, path, b, c, d, e, f) {
        var prevVal = getIn(a, path);
        if (prevVal == null)
          prevVal = {};
        var nextVal = void 0;
        for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
          rest[_key4 - 7] = arguments[_key4];
        }
        if (rest.length) {
          nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
        } else {
          nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
        }
        return setIn(a, path, nextVal);
      }
      function omit(obj, attrs) {
        var omitList = Array.isArray(attrs) ? attrs : [attrs];
        var fDoSomething = false;
        for (var i = 0; i < omitList.length; i++) {
          if (hasOwnProperty.call(obj, omitList[i])) {
            fDoSomething = true;
            break;
          }
        }
        if (!fDoSomething)
          return obj;
        var out = {};
        var keys = getKeysAndSymbols(obj);
        for (var _i = 0; _i < keys.length; _i++) {
          var key = keys[_i];
          if (omitList.indexOf(key) >= 0)
            continue;
          out[key] = obj[key];
        }
        return out;
      }
      function addDefaults(a, b, c, d, e, f) {
        for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
          rest[_key5 - 6] = arguments[_key5];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
      }
      var timm = {
        clone,
        addLast,
        addFirst,
        removeLast,
        removeFirst,
        insert,
        removeAt,
        replaceAt,
        getIn,
        // eslint-disable-next-line object-shorthand
        set,
        // so that flow doesn't complain
        setIn,
        update,
        updateIn,
        merge,
        mergeDeep,
        mergeIn,
        omit,
        addDefaults
      };
      exports.default = timm;
    }
  });

  // ../../app/packages/systems/ix2/engine/reducers/IX2RequestReducer.js
  var require_IX2RequestReducer = __commonJS({
    "../../app/packages/systems/ix2/engine/reducers/IX2RequestReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ixRequest", {
        enumerable: true,
        get: function() {
          return ixRequest;
        }
      });
      var _sharedconstants = require_shared_constants();
      var _timm = require_timm();
      var { IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED } = _sharedconstants.IX2EngineActionTypes;
      var initialState = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      };
      var stateKeys = Object.create(null, {
        [IX2_PREVIEW_REQUESTED]: {
          value: "preview"
        },
        [IX2_PLAYBACK_REQUESTED]: {
          value: "playback"
        },
        [IX2_STOP_REQUESTED]: {
          value: "stop"
        },
        [IX2_CLEAR_REQUESTED]: {
          value: "clear"
        }
      });
      var ixRequest = (state = initialState, action) => {
        if (action.type in stateKeys) {
          const key = [
            stateKeys[action.type]
          ];
          return (0, _timm.setIn)(state, [
            key
          ], {
            ...action.payload
          });
        }
        return state;
      };
    }
  });

  // ../../app/packages/systems/ix2/engine/reducers/IX2SessionReducer.js
  var require_IX2SessionReducer = __commonJS({
    "../../app/packages/systems/ix2/engine/reducers/IX2SessionReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ixSession", {
        enumerable: true,
        get: function() {
          return ixSession;
        }
      });
      var _sharedconstants = require_shared_constants();
      var _timm = require_timm();
      var { IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_TEST_FRAME_RENDERED, IX2_SESSION_STOPPED, IX2_EVENT_LISTENER_ADDED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED } = _sharedconstants.IX2EngineActionTypes;
      var initialState = {
        active: false,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: false,
        hasDefinedMediaQueries: false,
        reducedMotion: false
      };
      var TEST_FRAME_STEPS_SIZE = 20;
      var ixSession = (state = initialState, action) => {
        switch (action.type) {
          case IX2_SESSION_INITIALIZED: {
            const { hasBoundaryNodes, reducedMotion } = action.payload;
            return (0, _timm.merge)(state, {
              hasBoundaryNodes,
              reducedMotion
            });
          }
          case IX2_SESSION_STARTED: {
            return (0, _timm.set)(state, "active", true);
          }
          case IX2_TEST_FRAME_RENDERED: {
            const { payload: { step = TEST_FRAME_STEPS_SIZE } } = action;
            return (0, _timm.set)(state, "tick", state.tick + step);
          }
          case IX2_SESSION_STOPPED: {
            return initialState;
          }
          case IX2_ANIMATION_FRAME_CHANGED: {
            const { payload: { now } } = action;
            return (0, _timm.set)(state, "tick", now);
          }
          case IX2_EVENT_LISTENER_ADDED: {
            const eventListeners = (0, _timm.addLast)(state.eventListeners, action.payload);
            return (0, _timm.set)(state, "eventListeners", eventListeners);
          }
          case IX2_EVENT_STATE_CHANGED: {
            const { stateKey, newState } = action.payload;
            return (0, _timm.setIn)(state, [
              "eventState",
              stateKey
            ], newState);
          }
          case IX2_ACTION_LIST_PLAYBACK_CHANGED: {
            const { actionListId, isPlaying } = action.payload;
            return (0, _timm.setIn)(state, [
              "playbackState",
              actionListId
            ], isPlaying);
          }
          case IX2_VIEWPORT_WIDTH_CHANGED: {
            const { width, mediaQueries } = action.payload;
            const mediaQueryCount = mediaQueries.length;
            let mediaQueryKey = null;
            for (let i = 0; i < mediaQueryCount; i++) {
              const { key, min, max } = mediaQueries[i];
              if (width >= min && width <= max) {
                mediaQueryKey = key;
                break;
              }
            }
            return (0, _timm.merge)(state, {
              viewportWidth: width,
              mediaQueryKey
            });
          }
          case IX2_MEDIA_QUERIES_DEFINED: {
            return (0, _timm.set)(state, "hasDefinedMediaQueries", true);
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // ../../app/node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "../../app/node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // ../../app/node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "../../app/node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // ../../app/node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "../../app/node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // ../../app/node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "../../app/node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // ../../app/node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "../../app/node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // ../../app/node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "../../app/node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // ../../app/node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "../../app/node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // ../../app/node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "../../app/node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // ../../app/node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "../../app/node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // ../../app/node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "../../app/node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // ../../app/node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "../../app/node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // ../../app/node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "../../app/node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // ../../app/node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "../../app/node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // ../../app/node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "../../app/node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // ../../app/node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "../../app/node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // ../../app/node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "../../app/node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // ../../app/node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "../../app/node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // ../../app/node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "../../app/node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // ../../app/node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "../../app/node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // ../../app/node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "../../app/node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // ../../app/node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "../../app/node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // ../../app/node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "../../app/node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // ../../app/node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "../../app/node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // ../../app/node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "../../app/node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // ../../app/node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "../../app/node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // ../../app/node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "../../app/node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // ../../app/node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "../../app/node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // ../../app/node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "../../app/node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // ../../app/node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "../../app/node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // ../../app/node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "../../app/node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // ../../app/node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "../../app/node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // ../../app/node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "../../app/node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // ../../app/node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "../../app/node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // ../../app/node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "../../app/node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // ../../app/node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "../../app/node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // ../../app/node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "../../app/node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // ../../app/node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "../../app/node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // ../../app/node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "../../app/node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // ../../app/node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "../../app/node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // ../../app/node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "../../app/node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // ../../app/node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "../../app/node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // ../../app/node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "../../app/node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // ../../app/node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "../../app/node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // ../../app/node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "../../app/node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // ../../app/node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "../../app/node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // ../../app/node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "../../app/node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // ../../app/node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "../../app/node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // ../../app/node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "../../app/node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // ../../app/node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "../../app/node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }
  });

  // ../../app/node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "../../app/node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // ../../app/node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "../../app/node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // ../../app/node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "../../app/node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // ../../app/node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "../../app/node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // ../../app/node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "../../app/node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // ../../app/node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "../../app/node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // ../../app/node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "../../app/node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // ../../app/node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "../../app/node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // ../../app/node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "../../app/node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // ../../app/node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "../../app/node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // ../../app/node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "../../app/node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // ../../app/node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "../../app/node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // ../../app/node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "../../app/node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // ../../app/node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "../../app/node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // ../../app/node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "../../app/node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // ../../app/node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "../../app/node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // ../../app/node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "../../app/node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // ../../app/node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "../../app/node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // ../../app/node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "../../app/node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // ../../app/node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "../../app/node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // ../../app/node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "../../app/node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // ../../app/node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "../../app/node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // ../../app/node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "../../app/node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // ../../app/node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "../../app/node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // ../../app/node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "../../app/node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // ../../app/node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "../../app/node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // ../../app/node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "../../app/node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set = getNative(root, "Set");
      module.exports = Set;
    }
  });

  // ../../app/node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "../../app/node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap2 = getNative(root, "WeakMap");
      module.exports = WeakMap2;
    }
  });

  // ../../app/node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "../../app/node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set = require_Set();
      var WeakMap2 = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set);
      var weakMapCtorString = toSource(WeakMap2);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // ../../app/node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "../../app/node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // ../../app/node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "../../app/node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // ../../app/node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "../../app/node_modules/lodash/_baseIsMatch.js"(exports, module) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // ../../app/node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "../../app/node_modules/lodash/_isStrictComparable.js"(exports, module) {
      var isObject = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // ../../app/node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "../../app/node_modules/lodash/_getMatchData.js"(exports, module) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }
  });

  // ../../app/node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "../../app/node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // ../../app/node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "../../app/node_modules/lodash/_baseMatches.js"(exports, module) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // ../../app/node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "../../app/node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // ../../app/node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "../../app/node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // ../../app/node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "../../app/node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // ../../app/node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "../../app/node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // ../../app/node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "../../app/node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // ../../app/node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "../../app/node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // ../../app/node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "../../app/node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // ../../app/node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "../../app/node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // ../../app/node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "../../app/node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // ../../app/node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "../../app/node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // ../../app/node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "../../app/node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // ../../app/node_modules/lodash/get.js
  var require_get = __commonJS({
    "../../app/node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get;
    }
  });

  // ../../app/node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "../../app/node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }
  });

  // ../../app/node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "../../app/node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }
  });

  // ../../app/node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "../../app/node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // ../../app/node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "../../app/node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      var get = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // ../../app/node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "../../app/node_modules/lodash/identity.js"(exports, module) {
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }
  });

  // ../../app/node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "../../app/node_modules/lodash/_baseProperty.js"(exports, module) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // ../../app/node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "../../app/node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // ../../app/node_modules/lodash/property.js
  var require_property = __commonJS({
    "../../app/node_modules/lodash/property.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }
  });

  // ../../app/node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "../../app/node_modules/lodash/_baseIteratee.js"(exports, module) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }
  });

  // ../../app/node_modules/lodash/_createFind.js
  var require_createFind = __commonJS({
    "../../app/node_modules/lodash/_createFind.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var isArrayLike = require_isArrayLike();
      var keys = require_keys();
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object(collection);
          if (!isArrayLike(collection)) {
            var iteratee = baseIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
        };
      }
      module.exports = createFind;
    }
  });

  // ../../app/node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS({
    "../../app/node_modules/lodash/_baseFindIndex.js"(exports, module) {
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      module.exports = baseFindIndex;
    }
  });

  // ../../app/node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "../../app/node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // ../../app/node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "../../app/node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // ../../app/node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "../../app/node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // ../../app/node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "../../app/node_modules/lodash/toFinite.js"(exports, module) {
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      module.exports = toFinite;
    }
  });

  // ../../app/node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS({
    "../../app/node_modules/lodash/toInteger.js"(exports, module) {
      var toFinite = require_toFinite();
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      module.exports = toInteger;
    }
  });

  // ../../app/node_modules/lodash/findIndex.js
  var require_findIndex = __commonJS({
    "../../app/node_modules/lodash/findIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index);
      }
      module.exports = findIndex;
    }
  });

  // ../../app/node_modules/lodash/find.js
  var require_find = __commonJS({
    "../../app/node_modules/lodash/find.js"(exports, module) {
      var createFind = require_createFind();
      var findIndex = require_findIndex();
      var find = createFind(findIndex);
      module.exports = find;
    }
  });

  // ../../app/packages/systems/ix2/shared/logic/IX2BrowserSupport.js
  var require_IX2BrowserSupport = __commonJS({
    "../../app/packages/systems/ix2/shared/logic/IX2BrowserSupport.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ELEMENT_MATCHES: function() {
          return ELEMENT_MATCHES;
        },
        FLEX_PREFIXED: function() {
          return FLEX_PREFIXED;
        },
        IS_BROWSER_ENV: function() {
          return IS_BROWSER_ENV;
        },
        TRANSFORM_PREFIXED: function() {
          return TRANSFORM_PREFIXED;
        },
        TRANSFORM_STYLE_PREFIXED: function() {
          return TRANSFORM_STYLE_PREFIXED;
        },
        withBrowser: function() {
          return withBrowser;
        }
      });
      var _find = /* @__PURE__ */ _interop_require_default(require_find());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var IS_BROWSER_ENV = typeof window !== "undefined";
      var withBrowser = (fn, fallback) => {
        if (IS_BROWSER_ENV) {
          return fn();
        }
        return fallback;
      };
      var ELEMENT_MATCHES = withBrowser(() => {
        return (0, _find.default)([
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector"
        ], (key) => key in Element.prototype);
      });
      var FLEX_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        const values = [
          "flex",
          "-webkit-flex",
          "-ms-flexbox",
          "-moz-box",
          "-webkit-box"
        ];
        const none = "";
        try {
          const { length } = values;
          for (let i = 0; i < length; i++) {
            const value = values[i];
            el.style.display = value;
            if (el.style.display === value) {
              return value;
            }
          }
          return none;
        } catch (err) {
          return none;
        }
      }, "flex");
      var TRANSFORM_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        if (el.style.transform == null) {
          const prefixes = [
            "Webkit",
            "Moz",
            "ms"
          ];
          const suffix = "Transform";
          const { length } = prefixes;
          for (let i = 0; i < length; i++) {
            const prop = prefixes[i] + suffix;
            if (el.style[prop] !== void 0) {
              return prop;
            }
          }
        }
        return "transform";
      }, "transform");
      var TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split("transform")[0];
      var TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + "TransformStyle" : "transformStyle";
    }
  });

  // ../../app/node_modules/bezier-easing/src/index.js
  var require_src = __commonJS({
    "../../app/node_modules/bezier-easing/src/index.js"(exports, module) {
      var NEWTON_ITERATIONS = 4;
      var NEWTON_MIN_SLOPE = 1e-3;
      var SUBDIVISION_PRECISION = 1e-7;
      var SUBDIVISION_MAX_ITERATIONS = 10;
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      var float32ArraySupported = typeof Float32Array === "function";
      function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      function C(aA1) {
        return 3 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
      }
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      module.exports = function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          throw new Error("bezier x values must be in [0, 1] range");
        }
        var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) {
          for (var i = 0; i < kSplineTableSize; ++i) {
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
          }
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return function BezierEasing(x) {
          if (mX1 === mY1 && mX2 === mY2) {
            return x;
          }
          if (x === 0) {
            return 0;
          }
          if (x === 1) {
            return 1;
          }
          return calcBezier(getTForX(x), mY1, mY2);
        };
      };
    }
  });

  // ../../app/packages/systems/ix2/shared/logic/IX2Easings.js
  var require_IX2Easings = __commonJS({
    "../../app/packages/systems/ix2/shared/logic/IX2Easings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        bounce: function() {
          return bounce;
        },
        bouncePast: function() {
          return bouncePast;
        },
        ease: function() {
          return ease;
        },
        easeIn: function() {
          return easeIn;
        },
        easeInOut: function() {
          return easeInOut;
        },
        easeOut: function() {
          return easeOut;
        },
        inBack: function() {
          return inBack;
        },
        inCirc: function() {
          return inCirc;
        },
        inCubic: function() {
          return inCubic;
        },
        inElastic: function() {
          return inElastic;
        },
        inExpo: function() {
          return inExpo;
        },
        inOutBack: function() {
          return inOutBack;
        },
        inOutCirc: function() {
          return inOutCirc;
        },
        inOutCubic: function() {
          return inOutCubic;
        },
        inOutElastic: function() {
          return inOutElastic;
        },
        inOutExpo: function() {
          return inOutExpo;
        },
        inOutQuad: function() {
          return inOutQuad;
        },
        inOutQuart: function() {
          return inOutQuart;
        },
        inOutQuint: function() {
          return inOutQuint;
        },
        inOutSine: function() {
          return inOutSine;
        },
        inQuad: function() {
          return inQuad;
        },
        inQuart: function() {
          return inQuart;
        },
        inQuint: function() {
          return inQuint;
        },
        inSine: function() {
          return inSine;
        },
        outBack: function() {
          return outBack;
        },
        outBounce: function() {
          return outBounce;
        },
        outCirc: function() {
          return outCirc;
        },
        outCubic: function() {
          return outCubic;
        },
        outElastic: function() {
          return outElastic;
        },
        outExpo: function() {
          return outExpo;
        },
        outQuad: function() {
          return outQuad;
        },
        outQuart: function() {
          return outQuart;
        },
        outQuint: function() {
          return outQuint;
        },
        outSine: function() {
          return outSine;
        },
        swingFrom: function() {
          return swingFrom;
        },
        swingFromTo: function() {
          return swingFromTo;
        },
        swingTo: function() {
          return swingTo;
        }
      });
      var _beziereasing = /* @__PURE__ */ _interop_require_default(require_src());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var magicSwing = 1.70158;
      var ease = (0, _beziereasing.default)(0.25, 0.1, 0.25, 1);
      var easeIn = (0, _beziereasing.default)(0.42, 0, 1, 1);
      var easeOut = (0, _beziereasing.default)(0, 0, 0.58, 1);
      var easeInOut = (0, _beziereasing.default)(0.42, 0, 0.58, 1);
      function inQuad(pos) {
        return Math.pow(pos, 2);
      }
      function outQuad(pos) {
        return -(Math.pow(pos - 1, 2) - 1);
      }
      function inOutQuad(pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 2);
        }
        return -0.5 * ((pos -= 2) * pos - 2);
      }
      function inCubic(pos) {
        return Math.pow(pos, 3);
      }
      function outCubic(pos) {
        return Math.pow(pos - 1, 3) + 1;
      }
      function inOutCubic(pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 3);
        }
        return 0.5 * (Math.pow(pos - 2, 3) + 2);
      }
      function inQuart(pos) {
        return Math.pow(pos, 4);
      }
      function outQuart(pos) {
        return -(Math.pow(pos - 1, 4) - 1);
      }
      function inOutQuart(pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 4);
        }
        return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
      }
      function inQuint(pos) {
        return Math.pow(pos, 5);
      }
      function outQuint(pos) {
        return Math.pow(pos - 1, 5) + 1;
      }
      function inOutQuint(pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 5);
        }
        return 0.5 * (Math.pow(pos - 2, 5) + 2);
      }
      function inSine(pos) {
        return -Math.cos(pos * (Math.PI / 2)) + 1;
      }
      function outSine(pos) {
        return Math.sin(pos * (Math.PI / 2));
      }
      function inOutSine(pos) {
        return -0.5 * (Math.cos(Math.PI * pos) - 1);
      }
      function inExpo(pos) {
        return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
      }
      function outExpo(pos) {
        return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
      }
      function inOutExpo(pos) {
        if (pos === 0) {
          return 0;
        }
        if (pos === 1) {
          return 1;
        }
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(2, 10 * (pos - 1));
        }
        return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
      }
      function inCirc(pos) {
        return -(Math.sqrt(1 - pos * pos) - 1);
      }
      function outCirc(pos) {
        return Math.sqrt(1 - Math.pow(pos - 1, 2));
      }
      function inOutCirc(pos) {
        if ((pos /= 0.5) < 1) {
          return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
      }
      function outBounce(pos) {
        if (pos < 1 / 2.75) {
          return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
          return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
        } else if (pos < 2.5 / 2.75) {
          return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
        } else {
          return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
        }
      }
      function inBack(pos) {
        const s = magicSwing;
        return pos * pos * ((s + 1) * pos - s);
      }
      function outBack(pos) {
        const s = magicSwing;
        return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
      }
      function inOutBack(pos) {
        let s = magicSwing;
        if ((pos /= 0.5) < 1) {
          return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
        }
        return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
      }
      function inElastic(pos) {
        let s = magicSwing;
        let p = 0;
        let a = 1;
        if (pos === 0) {
          return 0;
        }
        if (pos === 1) {
          return 1;
        }
        if (!p) {
          p = 0.3;
        }
        if (a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(1 / a);
        }
        return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
      }
      function outElastic(pos) {
        let s = magicSwing;
        let p = 0;
        let a = 1;
        if (pos === 0) {
          return 0;
        }
        if (pos === 1) {
          return 1;
        }
        if (!p) {
          p = 0.3;
        }
        if (a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(1 / a);
        }
        return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
      }
      function inOutElastic(pos) {
        let s = magicSwing;
        let p = 0;
        let a = 1;
        if (pos === 0) {
          return 0;
        }
        if ((pos /= 1 / 2) === 2) {
          return 1;
        }
        if (!p) {
          p = 0.3 * 1.5;
        }
        if (a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(1 / a);
        }
        if (pos < 1) {
          return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
        }
        return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
      }
      function swingFromTo(pos) {
        let s = magicSwing;
        return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
      }
      function swingFrom(pos) {
        const s = magicSwing;
        return pos * pos * ((s + 1) * pos - s);
      }
      function swingTo(pos) {
        const s = magicSwing;
        return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
      }
      function bounce(pos) {
        if (pos < 1 / 2.75) {
          return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
          return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
        } else if (pos < 2.5 / 2.75) {
          return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
        } else {
          return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
        }
      }
      function bouncePast(pos) {
        if (pos < 1 / 2.75) {
          return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
          return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
        } else if (pos < 2.5 / 2.75) {
          return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
        } else {
          return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
        }
      }
    }
  });

  // ../../app/packages/systems/ix2/shared/logic/IX2EasingUtils.js
  var require_IX2EasingUtils = __commonJS({
    "../../app/packages/systems/ix2/shared/logic/IX2EasingUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        applyEasing: function() {
          return applyEasing;
        },
        createBezierEasing: function() {
          return createBezierEasing;
        },
        optimizeFloat: function() {
          return optimizeFloat;
        }
      });
      var _IX2Easings = /* @__PURE__ */ _interop_require_wildcard(require_IX2Easings());
      var _beziereasing = /* @__PURE__ */ _interop_require_default(require_src());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function optimizeFloat(value, digits = 5, base = 10) {
        const pow = Math.pow(base, digits);
        const float = Number(Math.round(value * pow) / pow);
        return Math.abs(float) > 1e-4 ? float : 0;
      }
      function createBezierEasing(easing) {
        return (0, _beziereasing.default)(...easing);
      }
      function applyEasing(easing, position, customEasingFn) {
        if (position === 0) {
          return 0;
        }
        if (position === 1) {
          return 1;
        }
        if (customEasingFn) {
          return optimizeFloat(position > 0 ? customEasingFn(position) : position);
        }
        return optimizeFloat(position > 0 && easing && _IX2Easings[easing] ? _IX2Easings[easing](position) : position);
      }
    }
  });

  // ../../app/packages/systems/ix2/shared/reducers/IX2ElementsReducer.js
  var require_IX2ElementsReducer = __commonJS({
    "../../app/packages/systems/ix2/shared/reducers/IX2ElementsReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        createElementState: function() {
          return createElementState;
        },
        ixElements: function() {
          return ixElements;
        },
        mergeActionState: function() {
          return mergeActionState;
        }
      });
      var _timm = require_timm();
      var _sharedconstants = require_shared_constants();
      var { HTML_ELEMENT, PLAIN_OBJECT, ABSTRACT_NODE, CONFIG_X_VALUE, CONFIG_Y_VALUE, CONFIG_Z_VALUE, CONFIG_VALUE, CONFIG_X_UNIT, CONFIG_Y_UNIT, CONFIG_Z_UNIT, CONFIG_UNIT } = _sharedconstants.IX2EngineConstants;
      var { IX2_SESSION_STOPPED, IX2_INSTANCE_ADDED, IX2_ELEMENT_STATE_CHANGED } = _sharedconstants.IX2EngineActionTypes;
      var initialState = {};
      var refState = "refState";
      var ixElements = (state = initialState, action = {}) => {
        switch (action.type) {
          case IX2_SESSION_STOPPED: {
            return initialState;
          }
          case IX2_INSTANCE_ADDED: {
            const { elementId, element: ref, origin, actionItem, refType } = action.payload;
            const { actionTypeId } = actionItem;
            let newState = state;
            if ((0, _timm.getIn)(newState, [
              elementId,
              ref
            ]) !== ref) {
              newState = createElementState(newState, ref, refType, elementId, actionItem);
            }
            return mergeActionState(newState, elementId, actionTypeId, origin, actionItem);
          }
          case IX2_ELEMENT_STATE_CHANGED: {
            const { elementId, actionTypeId, current, actionItem } = action.payload;
            return mergeActionState(state, elementId, actionTypeId, current, actionItem);
          }
          default: {
            return state;
          }
        }
      };
      function createElementState(state, ref, refType, elementId, actionItem) {
        const refId = refType === PLAIN_OBJECT ? (0, _timm.getIn)(actionItem, [
          "config",
          "target",
          "objectId"
        ]) : null;
        return (0, _timm.mergeIn)(state, [
          elementId
        ], {
          id: elementId,
          ref,
          refId,
          refType
        });
      }
      function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
        const units = pickUnits(actionItem);
        const mergePath = [
          elementId,
          refState,
          actionTypeId
        ];
        return (0, _timm.mergeIn)(state, mergePath, actionState, units);
      }
      var valueUnitPairs = [
        [
          CONFIG_X_VALUE,
          CONFIG_X_UNIT
        ],
        [
          CONFIG_Y_VALUE,
          CONFIG_Y_UNIT
        ],
        [
          CONFIG_Z_VALUE,
          CONFIG_Z_UNIT
        ],
        [
          CONFIG_VALUE,
          CONFIG_UNIT
        ]
      ];
      function pickUnits(actionItem) {
        const { config } = actionItem;
        return valueUnitPairs.reduce((result, pair) => {
          const valueKey = pair[0];
          const unitKey = pair[1];
          const configValue = config[valueKey];
          const configUnit = config[unitKey];
          if (configValue != null && configUnit != null) {
            result[unitKey] = configUnit;
          }
          return result;
        }, {});
      }
    }
  });

  // ../../app/packages/systems/ix2/plugins/IX2Lottie.js
  var require_IX2Lottie = __commonJS({
    "../../app/packages/systems/ix2/plugins/IX2Lottie.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        clearPlugin: function() {
          return clearPlugin;
        },
        createPluginInstance: function() {
          return createPluginInstance;
        },
        getPluginConfig: function() {
          return getPluginConfig;
        },
        getPluginDestination: function() {
          return getPluginDestination;
        },
        getPluginDuration: function() {
          return getPluginDuration;
        },
        getPluginOrigin: function() {
          return getPluginOrigin;
        },
        renderPlugin: function() {
          return renderPlugin;
        }
      });
      var getPluginConfig = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      var getPluginDuration = (element, actionItem) => {
        if (actionItem.config.duration !== "auto") {
          return null;
        }
        const duration = parseFloat(element.getAttribute("data-duration"));
        if (duration > 0) {
          return duration * 1e3;
        }
        return parseFloat(element.getAttribute("data-default-duration")) * 1e3;
      };
      var getPluginOrigin = (refState) => {
        return refState || {
          value: 0
        };
      };
      var getPluginDestination = (actionItemConfig) => {
        return {
          value: actionItemConfig.value
        };
      };
      var createPluginInstance = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
        instance.setSubframe(true);
        return instance;
      };
      var renderPlugin = (pluginInstance, refState, actionItem) => {
        if (!pluginInstance) {
          return;
        }
        const percent = refState[actionItem.actionTypeId].value / 100;
        pluginInstance.goToFrame(pluginInstance.frames * percent);
      };
      var clearPlugin = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
      };
    }
  });

  // ../../app/packages/systems/ix2/plugins/IX2Spline.js
  var require_IX2Spline = __commonJS({
    "../../app/packages/systems/ix2/plugins/IX2Spline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        clearPlugin: function() {
          return clearPlugin;
        },
        createPluginInstance: function() {
          return createPluginInstance;
        },
        getPluginConfig: function() {
          return getPluginConfig;
        },
        getPluginDestination: function() {
          return getPluginDestination;
        },
        getPluginDuration: function() {
          return getPluginDuration;
        },
        getPluginOrigin: function() {
          return getPluginOrigin;
        },
        renderPlugin: function() {
          return renderPlugin;
        }
      });
      var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
      var getFrontendModule = () => window.Webflow.require("spline");
      var difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));
      var getPluginConfig = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      var getPluginDuration = () => {
        return null;
      };
      var DEFAULT_VALUES = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      });
      var getPluginOrigin = (refState, actionItem) => {
        const destination = actionItem.config.value;
        const destinationKeys = Object.keys(destination);
        if (refState) {
          const stateKeys = Object.keys(refState);
          const diffKeys = difference(destinationKeys, stateKeys);
          if (diffKeys.length) {
            const origin2 = diffKeys.reduce((result, key) => {
              result[key] = DEFAULT_VALUES[key];
              return result;
            }, refState);
            return origin2;
          }
          return refState;
        }
        const origin = destinationKeys.reduce((result, key) => {
          result[key] = DEFAULT_VALUES[key];
          return result;
        }, {});
        return origin;
      };
      var getPluginDestination = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      var createPluginInstance = (element, actionItem) => {
        const pluginElementId = actionItem?.config?.target?.pluginElement;
        return pluginElementId ? queryContainerElement(pluginElementId) : null;
      };
      var renderPlugin = (containerElement, refState, actionItem) => {
        const frontendModule = getFrontendModule();
        const instance = frontendModule.getInstance(containerElement);
        const objectId = actionItem.config.target.objectId;
        const renderSpline = (spline) => {
          if (!spline) {
            throw new Error("Invalid spline app passed to renderSpline");
          }
          const obj = objectId && spline.findObjectById(objectId);
          if (!obj) {
            return;
          }
          const { PLUGIN_SPLINE: props } = refState;
          if (props.positionX != null) {
            obj.position.x = props.positionX;
          }
          if (props.positionY != null) {
            obj.position.y = props.positionY;
          }
          if (props.positionZ != null) {
            obj.position.z = props.positionZ;
          }
          if (props.rotationX != null) {
            obj.rotation.x = props.rotationX;
          }
          if (props.rotationY != null) {
            obj.rotation.y = props.rotationY;
          }
          if (props.rotationZ != null) {
            obj.rotation.z = props.rotationZ;
          }
          if (props.scaleX != null) {
            obj.scale.x = props.scaleX;
          }
          if (props.scaleY != null) {
            obj.scale.y = props.scaleY;
          }
          if (props.scaleZ != null) {
            obj.scale.z = props.scaleZ;
          }
        };
        if (instance) {
          renderSpline(instance.spline);
        } else {
          frontendModule.setLoadHandler(containerElement, renderSpline);
        }
      };
      var clearPlugin = () => {
        return null;
      };
    }
  });

  // ../../app/packages/systems/ix2/plugins/IX2Rive.js
  var require_IX2Rive = __commonJS({
    "../../app/packages/systems/ix2/plugins/IX2Rive.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        clearPlugin: function() {
          return clearPlugin;
        },
        createPluginInstance: function() {
          return createPluginInstance;
        },
        getPluginConfig: function() {
          return getPluginConfig;
        },
        getPluginDestination: function() {
          return getPluginDestination;
        },
        getPluginDuration: function() {
          return getPluginDuration;
        },
        getPluginOrigin: function() {
          return getPluginOrigin;
        },
        renderPlugin: function() {
          return renderPlugin;
        }
      });
      var FIT_KEY = "--wf-rive-fit";
      var ALIGNMENT_KEY = "--wf-rive-alignment";
      var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
      var getFrontendModule = () => window.Webflow.require("rive");
      var getPluginConfig = (actionItemConfig, key) => actionItemConfig.value.inputs[key];
      var getPluginDuration = () => null;
      var getPluginOrigin = (refState, actionItem) => {
        if (refState)
          return refState;
        const result = {};
        const { inputs = {} } = actionItem.config.value;
        for (const input in inputs)
          if (inputs[input] == null)
            result[input] = 0;
        return result;
      };
      var getPluginDestination = (actionItemConfig) => actionItemConfig.value.inputs ?? {};
      var createPluginInstance = (element, actionItem) => {
        const selectorGuids = actionItem.config?.target?.selectorGuids || [];
        if (selectorGuids.length > 0)
          return element;
        const pluginElementId = actionItem?.config?.target?.pluginElement;
        return pluginElementId ? queryContainerElement(pluginElementId) : null;
      };
      var renderPlugin = (containerElement, { PLUGIN_RIVE: props }, actionItem) => {
        const frontendModule = getFrontendModule();
        const instance = frontendModule.getInstance(containerElement);
        const StateMachineInputType = frontendModule.rive.StateMachineInputType;
        const { name, inputs = {} } = actionItem.config.value || {};
        function renderRive(riveInstance) {
          if (riveInstance.loaded) {
            render();
          } else {
            const onLoad = () => {
              render();
              riveInstance?.off("load", onLoad);
            };
            riveInstance?.on("load", onLoad);
          }
          function render() {
            const stateMachineInputs = riveInstance.stateMachineInputs(name);
            if (stateMachineInputs == null)
              return;
            if (!riveInstance.isPlaying)
              riveInstance.play(name, false);
            if (FIT_KEY in inputs || ALIGNMENT_KEY in inputs) {
              const currentLayout = riveInstance.layout;
              const nextFit = inputs[FIT_KEY] ?? currentLayout.fit;
              const nextAlignment = inputs[ALIGNMENT_KEY] ?? currentLayout.alignment;
              if (nextFit !== currentLayout.fit || nextAlignment !== currentLayout.alignment) {
                riveInstance.layout = currentLayout.copyWith({
                  fit: nextFit,
                  alignment: nextAlignment
                });
              }
            }
            for (const inputName in inputs) {
              if (inputName === FIT_KEY || inputName === ALIGNMENT_KEY)
                continue;
              const machineInput = stateMachineInputs.find((m) => m.name === inputName);
              if (machineInput == null)
                continue;
              switch (machineInput.type) {
                case StateMachineInputType.Boolean: {
                  if (inputs[inputName] != null) {
                    const booleanValue = Boolean(inputs[inputName]);
                    machineInput.value = booleanValue;
                  }
                  break;
                }
                case StateMachineInputType.Number: {
                  const numberValue = props[inputName];
                  if (numberValue != null)
                    machineInput.value = numberValue;
                  break;
                }
                case StateMachineInputType.Trigger: {
                  if (inputs[inputName])
                    machineInput.fire();
                  break;
                }
              }
            }
          }
        }
        if (instance?.rive)
          renderRive(instance.rive);
        else
          frontendModule.setLoadHandler(containerElement, renderRive);
      };
      var clearPlugin = (_containerElement, _actionItem) => null;
    }
  });

  // ../../app/packages/systems/ix2/shared-utils/normalizeColor.js
  var require_normalizeColor = __commonJS({
    "../../app/packages/systems/ix2/shared-utils/normalizeColor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "normalizeColor", {
        enumerable: true,
        get: function() {
          return normalizeColor;
        }
      });
      var colorNamesObj = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32"
      };
      function normalizeColor(inputColor) {
        let red;
        let green;
        let blue;
        let alpha = 1;
        const rawColor = inputColor.replace(/\s/g, "").toLowerCase();
        const namedColor = typeof colorNamesObj[rawColor] === "string" ? colorNamesObj[rawColor].toLowerCase() : null;
        const cleanColor = namedColor || rawColor;
        if (cleanColor.startsWith("#")) {
          const hex = cleanColor.substring(1);
          if (hex.length === 3 || hex.length === 4) {
            red = parseInt(hex[0] + hex[0], 16);
            green = parseInt(hex[1] + hex[1], 16);
            blue = parseInt(hex[2] + hex[2], 16);
            if (hex.length === 4) {
              alpha = parseInt(hex[3] + hex[3], 16) / 255;
            }
          } else if (hex.length === 6 || hex.length === 8) {
            red = parseInt(hex.substring(0, 2), 16);
            green = parseInt(hex.substring(2, 4), 16);
            blue = parseInt(hex.substring(4, 6), 16);
            if (hex.length === 8) {
              alpha = parseInt(hex.substring(6, 8), 16) / 255;
            }
          }
        } else if (cleanColor.startsWith("rgba")) {
          const rgbaValues = cleanColor.match(/rgba\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbaValues[0], 10);
          green = parseInt(rgbaValues[1], 10);
          blue = parseInt(rgbaValues[2], 10);
          alpha = parseFloat(rgbaValues[3]);
        } else if (cleanColor.startsWith("rgb")) {
          const rgbValues = cleanColor.match(/rgb\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbValues[0], 10);
          green = parseInt(rgbValues[1], 10);
          blue = parseInt(rgbValues[2], 10);
        } else if (cleanColor.startsWith("hsla")) {
          const hslaValues = cleanColor.match(/hsla\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslaValues[0]);
          const s = parseFloat(hslaValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslaValues[2].replace("%", "")) / 100;
          alpha = parseFloat(hslaValues[3]);
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        } else if (cleanColor.startsWith("hsl")) {
          const hslValues = cleanColor.match(/hsl\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslValues[0]);
          const s = parseFloat(hslValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslValues[2].replace("%", "")) / 100;
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        }
        if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
          throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${inputColor}'`);
        }
        return {
          red,
          green,
          blue,
          alpha
        };
      }
    }
  });

  // ../../app/packages/systems/ix2/plugins/IX2Variable.js
  var require_IX2Variable = __commonJS({
    "../../app/packages/systems/ix2/plugins/IX2Variable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        clearPlugin: function() {
          return clearPlugin;
        },
        createPluginInstance: function() {
          return createPluginInstance;
        },
        getPluginConfig: function() {
          return getPluginConfig;
        },
        getPluginDestination: function() {
          return getPluginDestination;
        },
        getPluginDuration: function() {
          return getPluginDuration;
        },
        getPluginOrigin: function() {
          return getPluginOrigin;
        },
        renderPlugin: function() {
          return renderPlugin;
        }
      });
      var _normalizeColor = require_normalizeColor();
      var getPluginConfig = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      var getPluginDuration = () => {
        return null;
      };
      var getPluginOrigin = (refState, actionItem) => {
        if (refState) {
          return refState;
        }
        const destination = actionItem.config.value;
        const objectId = actionItem.config.target.objectId;
        const computedValue = getComputedStyle(document.documentElement).getPropertyValue(objectId);
        if (destination.size != null) {
          return {
            size: parseInt(computedValue, 10)
          };
        }
        if (destination.unit === "%" || destination.unit === "-") {
          return {
            size: parseFloat(computedValue)
          };
        }
        if (destination.red != null && destination.green != null && destination.blue != null) {
          return (0, _normalizeColor.normalizeColor)(computedValue);
        }
      };
      var getPluginDestination = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      var createPluginInstance = () => {
        return null;
      };
      var variableHandlers = {
        color: {
          match: ({ red, green, blue, alpha }) => [
            red,
            green,
            blue,
            alpha
          ].every((x) => x != null),
          getValue: ({ red, green, blue, alpha }) => `rgba(${red}, ${green}, ${blue}, ${alpha})`
        },
        // Size, Percentage, and Unitless variables.
        size: {
          match: ({ size }) => size != null,
          getValue: ({ size }, unit) => {
            switch (unit) {
              case "-":
                return size;
              default:
                return `${size}${unit}`;
            }
          }
        }
      };
      var renderPlugin = (_, refState, actionItem) => {
        const { target: { objectId }, value: { unit } } = actionItem.config;
        const props = refState.PLUGIN_VARIABLE;
        const handler = Object.values(variableHandlers).find((h) => h.match(props, unit));
        if (handler) {
          document.documentElement.style.setProperty(objectId, handler.getValue(props, unit));
        }
      };
      var clearPlugin = (ref, actionItem) => {
        const objectId = actionItem.config.target.objectId;
        document.documentElement.style.removeProperty(objectId);
      };
    }
  });

  // ../../app/packages/systems/ix2/plugins/index.js
  var require_plugins = __commonJS({
    "../../app/packages/systems/ix2/plugins/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "pluginMethodMap", {
        enumerable: true,
        get: function() {
          return pluginMethodMap;
        }
      });
      var _sharedconstants = require_shared_constants();
      var _IX2Lottie = /* @__PURE__ */ _interop_require_wildcard(require_IX2Lottie());
      var _IX2Spline = /* @__PURE__ */ _interop_require_wildcard(require_IX2Spline());
      var _IX2Rive = /* @__PURE__ */ _interop_require_wildcard(require_IX2Rive());
      var _IX2Variable = /* @__PURE__ */ _interop_require_wildcard(require_IX2Variable());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      var pluginMethodMap = /* @__PURE__ */ new Map([
        [
          _sharedconstants.ActionTypeConsts.PLUGIN_LOTTIE,
          {
            ..._IX2Lottie
          }
        ],
        [
          _sharedconstants.ActionTypeConsts.PLUGIN_SPLINE,
          {
            ..._IX2Spline
          }
        ],
        [
          _sharedconstants.ActionTypeConsts.PLUGIN_RIVE,
          {
            ..._IX2Rive
          }
        ],
        [
          _sharedconstants.ActionTypeConsts.PLUGIN_VARIABLE,
          {
            ..._IX2Variable
          }
        ]
      ]);
    }
  });

  // ../../app/packages/systems/ix2/shared/logic/IX2VanillaPlugins.js
  var require_IX2VanillaPlugins = __commonJS({
    "../../app/packages/systems/ix2/shared/logic/IX2VanillaPlugins.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        clearPlugin: function() {
          return clearPlugin;
        },
        createPluginInstance: function() {
          return createPluginInstance;
        },
        getPluginConfig: function() {
          return getPluginConfig;
        },
        getPluginDestination: function() {
          return getPluginDestination;
        },
        getPluginDuration: function() {
          return getPluginDuration;
        },
        getPluginOrigin: function() {
          return getPluginOrigin;
        },
        isPluginType: function() {
          return isPluginType;
        },
        renderPlugin: function() {
          return renderPlugin;
        }
      });
      var _IX2BrowserSupport = require_IX2BrowserSupport();
      var _plugins = require_plugins();
      function isPluginType(actionTypeId) {
        return _plugins.pluginMethodMap.has(actionTypeId);
      }
      var pluginMethod = (methodName) => (actionTypeId) => {
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return () => null;
        }
        const plugin = _plugins.pluginMethodMap.get(actionTypeId);
        if (!plugin) {
          throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
        }
        const method = plugin[methodName];
        if (!method) {
          throw new Error(`IX2 invalid plugin method: ${methodName}`);
        }
        return method;
      };
      var getPluginConfig = pluginMethod("getPluginConfig");
      var getPluginOrigin = pluginMethod("getPluginOrigin");
      var getPluginDuration = pluginMethod("getPluginDuration");
      var getPluginDestination = pluginMethod("getPluginDestination");
      var createPluginInstance = pluginMethod("createPluginInstance");
      var renderPlugin = pluginMethod("renderPlugin");
      var clearPlugin = pluginMethod("clearPlugin");
    }
  });

  // ../../app/node_modules/lodash/defaultTo.js
  var require_defaultTo = __commonJS({
    "../../app/node_modules/lodash/defaultTo.js"(exports, module) {
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      module.exports = defaultTo;
    }
  });

  // ../../app/node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS({
    "../../app/node_modules/lodash/_arrayReduce.js"(exports, module) {
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      module.exports = arrayReduce;
    }
  });

  // ../../app/node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "../../app/node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // ../../app/node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "../../app/node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // ../../app/node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "../../app/node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // ../../app/node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "../../app/node_modules/lodash/_createBaseEach.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }
  });

  // ../../app/node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "../../app/node_modules/lodash/_baseEach.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }
  });

  // ../../app/node_modules/lodash/_baseReduce.js
  var require_baseReduce = __commonJS({
    "../../app/node_modules/lodash/_baseReduce.js"(exports, module) {
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      module.exports = baseReduce;
    }
  });

  // ../../app/node_modules/lodash/reduce.js
  var require_reduce = __commonJS({
    "../../app/node_modules/lodash/reduce.js"(exports, module) {
      var arrayReduce = require_arrayReduce();
      var baseEach = require_baseEach();
      var baseIteratee = require_baseIteratee();
      var baseReduce = require_baseReduce();
      var isArray = require_isArray();
      function reduce(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
      }
      module.exports = reduce;
    }
  });

  // ../../app/node_modules/lodash/findLastIndex.js
  var require_findLastIndex = __commonJS({
    "../../app/node_modules/lodash/findLastIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== void 0) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
      }
      module.exports = findLastIndex;
    }
  });

  // ../../app/node_modules/lodash/findLast.js
  var require_findLast = __commonJS({
    "../../app/node_modules/lodash/findLast.js"(exports, module) {
      var createFind = require_createFind();
      var findLastIndex = require_findLastIndex();
      var findLast = createFind(findLastIndex);
      module.exports = findLast;
    }
  });

  // ../../app/packages/systems/ix2/shared/logic/shallowEqual.js
  var require_shallowEqual = __commonJS({
    "../../app/packages/systems/ix2/shared/logic/shallowEqual.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function is(x, y) {
        if (x === y) {
          return x !== 0 || y !== 0 || 1 / x === 1 / y;
        }
        return x !== x && y !== y;
      }
      function shallowEqual(objA, objB) {
        if (is(objA, objB)) {
          return true;
        }
        if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
          return false;
        }
        const keysA = Object.keys(objA);
        const keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
          return false;
        }
        for (let i = 0; i < keysA.length; i++) {
          if (!Object.hasOwn(
            objB,
            // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'PropertyKey'.
            keysA[i]
          ) || // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
          !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
          }
        }
        return true;
      }
      var _default = shallowEqual;
    }
  });

  // ../../app/packages/systems/ix2/shared/logic/IX2VanillaUtils.js
  var require_IX2VanillaUtils = __commonJS({
    "../../app/packages/systems/ix2/shared/logic/IX2VanillaUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        cleanupHTMLElement: function() {
          return cleanupHTMLElement;
        },
        clearAllStyles: function() {
          return clearAllStyles;
        },
        clearObjectCache: function() {
          return clearObjectCache;
        },
        getActionListProgress: function() {
          return getActionListProgress;
        },
        getAffectedElements: function() {
          return getAffectedElements;
        },
        getComputedStyle: function() {
          return getComputedStyle2;
        },
        getDestinationValues: function() {
          return getDestinationValues;
        },
        getElementId: function() {
          return getElementId;
        },
        getInstanceId: function() {
          return getInstanceId;
        },
        getInstanceOrigin: function() {
          return getInstanceOrigin;
        },
        getItemConfigByKey: function() {
          return getItemConfigByKey;
        },
        getMaxDurationItemIndex: function() {
          return getMaxDurationItemIndex;
        },
        getNamespacedParameterId: function() {
          return getNamespacedParameterId;
        },
        getRenderType: function() {
          return getRenderType;
        },
        getStyleProp: function() {
          return getStyleProp;
        },
        mediaQueriesEqual: function() {
          return mediaQueriesEqual;
        },
        observeStore: function() {
          return observeStore;
        },
        reduceListToGroup: function() {
          return reduceListToGroup;
        },
        reifyState: function() {
          return reifyState;
        },
        renderHTMLElement: function() {
          return renderHTMLElement;
        },
        shallowEqual: function() {
          return _shallowEqual.default;
        },
        shouldAllowMediaQuery: function() {
          return shouldAllowMediaQuery;
        },
        shouldNamespaceEventParameter: function() {
          return shouldNamespaceEventParameter;
        },
        stringifyTarget: function() {
          return stringifyTarget;
        }
      });
      var _defaultTo = /* @__PURE__ */ _interop_require_default(require_defaultTo());
      var _reduce = /* @__PURE__ */ _interop_require_default(require_reduce());
      var _findLast = /* @__PURE__ */ _interop_require_default(require_findLast());
      var _timm = require_timm();
      var _sharedconstants = require_shared_constants();
      var _shallowEqual = /* @__PURE__ */ _interop_require_default(require_shallowEqual());
      var _IX2EasingUtils = require_IX2EasingUtils();
      var _normalizeColor = require_normalizeColor();
      var _IX2VanillaPlugins = require_IX2VanillaPlugins();
      var _IX2BrowserSupport = require_IX2BrowserSupport();
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var { BACKGROUND, TRANSFORM, TRANSLATE_3D, SCALE_3D, ROTATE_X, ROTATE_Y, ROTATE_Z, SKEW, PRESERVE_3D, FLEX, OPACITY, FILTER, FONT_VARIATION_SETTINGS, WIDTH, HEIGHT, BACKGROUND_COLOR, BORDER_COLOR, COLOR, CHILDREN, IMMEDIATE_CHILDREN, SIBLINGS, PARENT, DISPLAY, WILL_CHANGE, AUTO, COMMA_DELIMITER, COLON_DELIMITER, BAR_DELIMITER, RENDER_TRANSFORM, RENDER_GENERAL, RENDER_STYLE, RENDER_PLUGIN } = _sharedconstants.IX2EngineConstants;
      var { TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_OPACITY, STYLE_FILTER, STYLE_FONT_VARIATION, STYLE_SIZE, STYLE_BACKGROUND_COLOR, STYLE_BORDER, STYLE_TEXT_COLOR, GENERAL_DISPLAY, OBJECT_VALUE } = _sharedconstants.ActionTypeConsts;
      var trim = (v) => v.trim();
      var colorStyleProps = Object.freeze({
        [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR,
        [STYLE_BORDER]: BORDER_COLOR,
        [STYLE_TEXT_COLOR]: COLOR
      });
      var willChangeProps = Object.freeze({
        [_IX2BrowserSupport.TRANSFORM_PREFIXED]: TRANSFORM,
        [BACKGROUND_COLOR]: BACKGROUND,
        [OPACITY]: OPACITY,
        [FILTER]: FILTER,
        [WIDTH]: WIDTH,
        [HEIGHT]: HEIGHT,
        [FONT_VARIATION_SETTINGS]: FONT_VARIATION_SETTINGS
      });
      var objectCache = /* @__PURE__ */ new Map();
      function clearObjectCache() {
        objectCache.clear();
      }
      var instanceCount = 1;
      function getInstanceId() {
        return "i" + instanceCount++;
      }
      var elementCount = 1;
      function getElementId(ixElements, ref) {
        for (const key in ixElements) {
          const ixEl = ixElements[key];
          if (ixEl && ixEl.ref === ref) {
            return ixEl.id;
          }
        }
        return "e" + elementCount++;
      }
      function reifyState({ events, actionLists, site } = {}) {
        const eventTypeMap = (0, _reduce.default)(events, (result, event) => {
          const { eventTypeId } = event;
          if (!result[eventTypeId]) {
            result[eventTypeId] = {};
          }
          result[eventTypeId][event.id] = event;
          return result;
        }, {});
        let mediaQueries = site && site.mediaQueries;
        let mediaQueryKeys = [];
        if (mediaQueries) {
          mediaQueryKeys = mediaQueries.map((mq) => mq.key);
        } else {
          mediaQueries = [];
          console.warn(`IX2 missing mediaQueries in site data`);
        }
        return {
          ixData: {
            events,
            actionLists,
            eventTypeMap,
            mediaQueries,
            mediaQueryKeys
          }
        };
      }
      var strictEqual = (a, b) => a === b;
      function observeStore({
        // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
        store,
        // @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
        select,
        // @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
        onChange,
        comparator = strictEqual
      }) {
        const { getState, subscribe } = store;
        const unsubscribe = subscribe(handleChange);
        let currentState = select(getState());
        function handleChange() {
          const nextState = select(getState());
          if (nextState == null) {
            unsubscribe();
            return;
          }
          if (!comparator(nextState, currentState)) {
            currentState = nextState;
            onChange(currentState, store);
          }
        }
        return unsubscribe;
      }
      function normalizeTarget(target) {
        const type = typeof target;
        if (type === "string") {
          return {
            id: target
          };
        } else if (target != null && type === "object") {
          const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = target;
          return {
            id,
            objectId,
            selector,
            selectorGuids,
            appliesTo,
            useEventTarget
          };
        }
        return {};
      }
      function getAffectedElements({ config, event, eventTarget, elementRoot, elementApi }) {
        if (!elementApi) {
          throw new Error("IX2 missing elementApi");
        }
        const { targets } = config;
        if (Array.isArray(targets) && targets.length > 0) {
          return targets.reduce((accumulator, target2) => accumulator.concat(getAffectedElements({
            config: {
              target: target2
            },
            event,
            eventTarget,
            elementRoot,
            elementApi
          })), []);
        }
        const { getValidDocument, getQuerySelector, queryDocument, getChildElements, getSiblingElements, matchSelector, elementContains, isSiblingNode } = elementApi;
        const { target } = config;
        if (!target) {
          return [];
        }
        const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = normalizeTarget(target);
        if (objectId) {
          const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
          return [
            ref
          ];
        }
        if (appliesTo === _sharedconstants.EventAppliesTo.PAGE) {
          const doc = getValidDocument(id);
          return doc ? [
            doc
          ] : [];
        }
        const overrides = event?.action?.config?.affectedElements ?? {};
        const override = overrides[id || selector] || {};
        const validOverride = Boolean(override.id || override.selector);
        let limitAffectedElements;
        let baseSelector;
        let finalSelector;
        const eventTargetSelector = event && getQuerySelector(normalizeTarget(event.target));
        if (validOverride) {
          limitAffectedElements = override.limitAffectedElements;
          baseSelector = eventTargetSelector;
          finalSelector = getQuerySelector(override);
        } else {
          baseSelector = finalSelector = getQuerySelector({
            id,
            selector,
            selectorGuids
          });
        }
        if (event && useEventTarget) {
          const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [
            eventTarget
          ] : queryDocument(eventTargetSelector);
          if (finalSelector) {
            if (useEventTarget === PARENT) {
              return queryDocument(finalSelector).filter((parentElement) => eventTargets.some((targetElement) => elementContains(parentElement, targetElement)));
            }
            if (useEventTarget === CHILDREN) {
              return queryDocument(finalSelector).filter((childElement) => eventTargets.some((targetElement) => elementContains(targetElement, childElement)));
            }
            if (useEventTarget === SIBLINGS) {
              return queryDocument(finalSelector).filter((siblingElement) => eventTargets.some((targetElement) => isSiblingNode(targetElement, siblingElement)));
            }
          }
          return eventTargets;
        }
        if (baseSelector == null || finalSelector == null) {
          return [];
        }
        if (_IX2BrowserSupport.IS_BROWSER_ENV && elementRoot) {
          return queryDocument(finalSelector).filter((element) => elementRoot.contains(element));
        }
        if (limitAffectedElements === CHILDREN) {
          return queryDocument(baseSelector, finalSelector);
        } else if (limitAffectedElements === IMMEDIATE_CHILDREN) {
          return getChildElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
        } else if (limitAffectedElements === SIBLINGS) {
          return getSiblingElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
        } else {
          return queryDocument(finalSelector);
        }
      }
      function getComputedStyle2({ element, actionItem }) {
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return {};
        }
        const { actionTypeId } = actionItem;
        switch (actionTypeId) {
          case STYLE_SIZE:
          case STYLE_BACKGROUND_COLOR:
          case STYLE_BORDER:
          case STYLE_TEXT_COLOR:
          case GENERAL_DISPLAY:
            return window.getComputedStyle(element);
          default:
            return {};
        }
      }
      var pxValueRegex = /px/;
      var getFilterDefaults = (actionState, filters) => (
        // @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
        filters.reduce((result, filter) => {
          if (result[filter.type] == null) {
            result[filter.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
            filterDefaults[filter.type];
          }
          return result;
        }, actionState || {})
      );
      var getFontVariationDefaults = (actionState, fontVariations) => fontVariations.reduce((result, fontVariation) => {
        if (result[fontVariation.type] == null) {
          result[fontVariation.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
          fontVariationDefaults[fontVariation.type] || // @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
          fontVariation.defaultValue || 0;
        }
        return result;
      }, actionState || {});
      function getInstanceOrigin(element, refState = {}, computedStyle = {}, actionItem, elementApi) {
        const { getStyle } = elementApi;
        const { actionTypeId } = actionItem;
        if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
          return (0, _IX2VanillaPlugins.getPluginOrigin)(actionTypeId)(refState[actionTypeId], actionItem);
        }
        switch (actionItem.actionTypeId) {
          case TRANSFORM_MOVE:
          case TRANSFORM_SCALE:
          case TRANSFORM_ROTATE:
          case TRANSFORM_SKEW: {
            return (
              // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
              refState[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId]
            );
          }
          case STYLE_FILTER:
            return getFilterDefaults(
              // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
              refState[actionItem.actionTypeId],
              actionItem.config.filters
            );
          case STYLE_FONT_VARIATION:
            return getFontVariationDefaults(
              // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
              refState[actionItem.actionTypeId],
              actionItem.config.fontVariations
            );
          case STYLE_OPACITY:
            return {
              value: (0, _defaultTo.default)(parseFloat(getStyle(element, OPACITY)), 1)
            };
          case STYLE_SIZE: {
            const inlineWidth = getStyle(element, WIDTH);
            const inlineHeight = getStyle(element, HEIGHT);
            let widthValue;
            let heightValue;
            if (actionItem.config.widthUnit === AUTO) {
              widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : parseFloat(computedStyle.width);
            } else {
              widthValue = (0, _defaultTo.default)(
                parseFloat(inlineWidth),
                // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
                parseFloat(computedStyle.width)
              );
            }
            if (actionItem.config.heightUnit === AUTO) {
              heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : parseFloat(computedStyle.height);
            } else {
              heightValue = (0, _defaultTo.default)(
                parseFloat(inlineHeight),
                // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
                parseFloat(computedStyle.height)
              );
            }
            return {
              widthValue,
              heightValue
            };
          }
          case STYLE_BACKGROUND_COLOR:
          case STYLE_BORDER:
          case STYLE_TEXT_COLOR:
            return parseColor({
              element,
              actionTypeId: actionItem.actionTypeId,
              computedStyle,
              getStyle
            });
          case GENERAL_DISPLAY:
            return {
              // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
              value: (0, _defaultTo.default)(getStyle(element, DISPLAY), computedStyle.display)
            };
          case OBJECT_VALUE:
            return refState[actionItem.actionTypeId] || {
              value: 0
            };
          default: {
            return;
          }
        }
      }
      var reduceFilters = (result, filter) => {
        if (filter) {
          result[filter.type] = filter.value || 0;
        }
        return result;
      };
      var reduceFontVariations = (result, fontVariation) => {
        if (fontVariation) {
          result[fontVariation.type] = fontVariation.value || 0;
        }
        return result;
      };
      var getItemConfigByKey = (actionTypeId, key, config) => {
        if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
          return (0, _IX2VanillaPlugins.getPluginConfig)(actionTypeId)(config, key);
        }
        switch (actionTypeId) {
          case STYLE_FILTER: {
            const filter = (0, _findLast.default)(config.filters, ({ type }) => type === key);
            return filter ? filter.value : 0;
          }
          case STYLE_FONT_VARIATION: {
            const fontVariation = (0, _findLast.default)(config.fontVariations, ({ type }) => type === key);
            return fontVariation ? fontVariation.value : 0;
          }
          default:
            return config[key];
        }
      };
      function getDestinationValues({ element, actionItem, elementApi }) {
        if ((0, _IX2VanillaPlugins.isPluginType)(actionItem.actionTypeId)) {
          return (0, _IX2VanillaPlugins.getPluginDestination)(actionItem.actionTypeId)(actionItem.config);
        }
        switch (actionItem.actionTypeId) {
          case TRANSFORM_MOVE:
          case TRANSFORM_SCALE:
          case TRANSFORM_ROTATE:
          case TRANSFORM_SKEW: {
            const { xValue, yValue, zValue } = actionItem.config;
            return {
              xValue,
              yValue,
              zValue
            };
          }
          case STYLE_SIZE: {
            const { getStyle, setStyle, getProperty } = elementApi;
            const { widthUnit, heightUnit } = actionItem.config;
            let { widthValue, heightValue } = actionItem.config;
            if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
              return {
                widthValue,
                heightValue
              };
            }
            if (widthUnit === AUTO) {
              const temp = getStyle(element, WIDTH);
              setStyle(element, WIDTH, "");
              widthValue = getProperty(element, "offsetWidth");
              setStyle(element, WIDTH, temp);
            }
            if (heightUnit === AUTO) {
              const temp = getStyle(element, HEIGHT);
              setStyle(element, HEIGHT, "");
              heightValue = getProperty(element, "offsetHeight");
              setStyle(element, HEIGHT, temp);
            }
            return {
              widthValue,
              heightValue
            };
          }
          case STYLE_BACKGROUND_COLOR:
          case STYLE_BORDER:
          case STYLE_TEXT_COLOR: {
            const { rValue, gValue, bValue, aValue, globalSwatchId } = actionItem.config;
            if (globalSwatchId && globalSwatchId.startsWith("--")) {
              const { getStyle } = elementApi;
              const value = getStyle(element, globalSwatchId);
              const normalizedValue = (0, _normalizeColor.normalizeColor)(value);
              return {
                rValue: normalizedValue.red,
                gValue: normalizedValue.green,
                bValue: normalizedValue.blue,
                aValue: normalizedValue.alpha
              };
            }
            return {
              rValue,
              gValue,
              bValue,
              aValue
            };
          }
          case STYLE_FILTER: {
            return actionItem.config.filters.reduce(reduceFilters, {});
          }
          case STYLE_FONT_VARIATION: {
            return actionItem.config.fontVariations.reduce(reduceFontVariations, {});
          }
          default: {
            const { value } = actionItem.config;
            return {
              value
            };
          }
        }
      }
      function getRenderType(actionTypeId) {
        if (/^TRANSFORM_/.test(actionTypeId)) {
          return RENDER_TRANSFORM;
        }
        if (/^STYLE_/.test(actionTypeId)) {
          return RENDER_STYLE;
        }
        if (/^GENERAL_/.test(actionTypeId)) {
          return RENDER_GENERAL;
        }
        if (/^PLUGIN_/.test(actionTypeId)) {
          return RENDER_PLUGIN;
        }
      }
      function getStyleProp(renderType, actionTypeId) {
        return renderType === RENDER_STYLE ? actionTypeId.replace("STYLE_", "").toLowerCase() : null;
      }
      function renderHTMLElement(element, refState, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
        switch (renderType) {
          case RENDER_TRANSFORM: {
            return renderTransform(element, refState, actionState, actionItem, elementApi);
          }
          case RENDER_STYLE: {
            return renderStyle(element, refState, actionState, actionItem, styleProp, elementApi);
          }
          case RENDER_GENERAL: {
            return renderGeneral(element, actionItem, elementApi);
          }
          case RENDER_PLUGIN: {
            const { actionTypeId } = actionItem;
            if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
              return (0, _IX2VanillaPlugins.renderPlugin)(actionTypeId)(pluginInstance, refState, actionItem);
            }
          }
        }
      }
      var transformDefaults = {
        [TRANSFORM_MOVE]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SCALE]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [TRANSFORM_ROTATE]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SKEW]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      };
      var filterDefaults = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      });
      var fontVariationDefaults = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      });
      var getFilterUnit = (filterType, actionItemConfig) => {
        const filter = (0, _findLast.default)(actionItemConfig.filters, ({ type }) => type === filterType);
        if (filter && filter.unit) {
          return filter.unit;
        }
        switch (filterType) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      };
      var transformKeys = Object.keys(transformDefaults);
      function renderTransform(element, refState, actionState, actionItem, elementApi) {
        const newTransform = transformKeys.map((actionTypeId) => {
          const defaults = transformDefaults[actionTypeId];
          const { xValue = defaults.xValue, yValue = defaults.yValue, zValue = defaults.zValue, xUnit = "", yUnit = "", zUnit = "" } = refState[actionTypeId] || {};
          switch (actionTypeId) {
            case TRANSFORM_MOVE:
              return `${TRANSLATE_3D}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
            case TRANSFORM_SCALE:
              return `${SCALE_3D}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
            case TRANSFORM_ROTATE:
              return `${ROTATE_X}(${xValue}${xUnit}) ${ROTATE_Y}(${yValue}${yUnit}) ${ROTATE_Z}(${zValue}${zUnit})`;
            case TRANSFORM_SKEW:
              return `${SKEW}(${xValue}${xUnit}, ${yValue}${yUnit})`;
            default:
              return "";
          }
        }).join(" ");
        const { setStyle } = elementApi;
        addWillChange(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
        setStyle(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, newTransform);
        if (hasDefined3dTransform(actionItem, actionState)) {
          setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, PRESERVE_3D);
        }
      }
      function renderFilter(element, actionState, actionItemConfig, elementApi) {
        const filterValue = (0, _reduce.default)(actionState, (result, value, type) => `${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`, "");
        const { setStyle } = elementApi;
        addWillChange(element, FILTER, elementApi);
        setStyle(element, FILTER, filterValue);
      }
      function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
        const fontVariationValue = (0, _reduce.default)(actionState, (result, value, type) => {
          result.push(`"${type}" ${value}`);
          return result;
        }, []).join(", ");
        const { setStyle } = elementApi;
        addWillChange(element, FONT_VARIATION_SETTINGS, elementApi);
        setStyle(element, FONT_VARIATION_SETTINGS, fontVariationValue);
      }
      function hasDefined3dTransform({ actionTypeId }, { xValue, yValue, zValue }) {
        return actionTypeId === TRANSFORM_MOVE && zValue !== void 0 || // SCALE_Z
        actionTypeId === TRANSFORM_SCALE && zValue !== void 0 || // ROTATE_X or ROTATE_Y
        actionTypeId === TRANSFORM_ROTATE && (xValue !== void 0 || yValue !== void 0);
      }
      var paramCapture = "\\(([^)]+)\\)";
      var rgbValidRegex = /^rgb/;
      var rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
      function getFirstMatch(regex, value) {
        const match = regex.exec(value);
        return match ? match[1] : "";
      }
      function parseColor({ element, actionTypeId, computedStyle, getStyle }) {
        const prop = colorStyleProps[actionTypeId];
        const inlineValue = getStyle(element, prop);
        const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
        const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER);
        return {
          // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
          rValue: (0, _defaultTo.default)(parseInt(matches[0], 10), 255),
          // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
          gValue: (0, _defaultTo.default)(parseInt(matches[1], 10), 255),
          // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
          bValue: (0, _defaultTo.default)(parseInt(matches[2], 10), 255),
          // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
          aValue: (0, _defaultTo.default)(parseFloat(matches[3]), 1)
        };
      }
      function renderStyle(element, refState, actionState, actionItem, styleProp, elementApi) {
        const { setStyle } = elementApi;
        switch (actionItem.actionTypeId) {
          case STYLE_SIZE: {
            let { widthUnit = "", heightUnit = "" } = actionItem.config;
            const { widthValue, heightValue } = actionState;
            if (widthValue !== void 0) {
              if (widthUnit === AUTO) {
                widthUnit = "px";
              }
              addWillChange(element, WIDTH, elementApi);
              setStyle(element, WIDTH, widthValue + widthUnit);
            }
            if (heightValue !== void 0) {
              if (heightUnit === AUTO) {
                heightUnit = "px";
              }
              addWillChange(element, HEIGHT, elementApi);
              setStyle(element, HEIGHT, heightValue + heightUnit);
            }
            break;
          }
          case STYLE_FILTER: {
            renderFilter(element, actionState, actionItem.config, elementApi);
            break;
          }
          case STYLE_FONT_VARIATION: {
            renderFontVariation(element, actionState, actionItem.config, elementApi);
            break;
          }
          case STYLE_BACKGROUND_COLOR:
          case STYLE_BORDER:
          case STYLE_TEXT_COLOR: {
            const prop = colorStyleProps[actionItem.actionTypeId];
            const rValue = Math.round(actionState.rValue);
            const gValue = Math.round(actionState.gValue);
            const bValue = Math.round(actionState.bValue);
            const aValue = actionState.aValue;
            addWillChange(element, prop, elementApi);
            setStyle(element, prop, aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`);
            break;
          }
          default: {
            const { unit = "" } = actionItem.config;
            addWillChange(element, styleProp, elementApi);
            setStyle(element, styleProp, actionState.value + unit);
            break;
          }
        }
      }
      function renderGeneral(element, actionItem, elementApi) {
        const { setStyle } = elementApi;
        switch (actionItem.actionTypeId) {
          case GENERAL_DISPLAY: {
            const { value } = actionItem.config;
            if (value === FLEX && _IX2BrowserSupport.IS_BROWSER_ENV) {
              setStyle(element, DISPLAY, _IX2BrowserSupport.FLEX_PREFIXED);
            } else {
              setStyle(element, DISPLAY, value);
            }
            return;
          }
        }
      }
      function addWillChange(element, prop, elementApi) {
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return;
        }
        const validProp = willChangeProps[prop];
        if (!validProp) {
          return;
        }
        const { getStyle, setStyle } = elementApi;
        const value = getStyle(element, WILL_CHANGE);
        if (!value) {
          setStyle(element, WILL_CHANGE, validProp);
          return;
        }
        const values = value.split(COMMA_DELIMITER).map(trim);
        if (values.indexOf(validProp) === -1) {
          setStyle(element, WILL_CHANGE, values.concat(validProp).join(COMMA_DELIMITER));
        }
      }
      function removeWillChange(element, prop, elementApi) {
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return;
        }
        const validProp = willChangeProps[prop];
        if (!validProp) {
          return;
        }
        const { getStyle, setStyle } = elementApi;
        const value = getStyle(element, WILL_CHANGE);
        if (!value || value.indexOf(validProp) === -1) {
          return;
        }
        setStyle(element, WILL_CHANGE, value.split(COMMA_DELIMITER).map(trim).filter((v) => v !== validProp).join(COMMA_DELIMITER));
      }
      function clearAllStyles({ store, elementApi }) {
        const { ixData } = store.getState();
        const { events = {}, actionLists = {} } = ixData;
        Object.keys(events).forEach((eventId) => {
          const event = events[eventId];
          const { config } = event.action;
          const { actionListId } = config;
          const actionList = actionLists[actionListId];
          if (actionList) {
            clearActionListStyles({
              actionList,
              event,
              elementApi
            });
          }
        });
        Object.keys(actionLists).forEach((actionListId) => {
          clearActionListStyles({
            actionList: actionLists[actionListId],
            elementApi
          });
        });
      }
      function clearActionListStyles({ actionList = {}, event, elementApi }) {
        const { actionItemGroups, continuousParameterGroups } = actionList;
        actionItemGroups && // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
        actionItemGroups.forEach((actionGroup) => {
          clearActionGroupStyles({
            actionGroup,
            event,
            elementApi
          });
        });
        continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
        continuousParameterGroups.forEach((paramGroup) => {
          const { continuousActionGroups } = paramGroup;
          continuousActionGroups.forEach((actionGroup) => {
            clearActionGroupStyles({
              actionGroup,
              event,
              elementApi
            });
          });
        });
      }
      function clearActionGroupStyles({ actionGroup, event, elementApi }) {
        const { actionItems } = actionGroup;
        actionItems.forEach((actionItem) => {
          const { actionTypeId, config } = actionItem;
          let clearElement;
          if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
            clearElement = (ref) => (0, _IX2VanillaPlugins.clearPlugin)(actionTypeId)(ref, actionItem);
          } else {
            clearElement = processElementByType({
              effect: clearStyleProp,
              actionTypeId,
              elementApi
            });
          }
          getAffectedElements({
            config,
            event,
            elementApi
          }).forEach(clearElement);
        });
      }
      function cleanupHTMLElement(element, actionItem, elementApi) {
        const { setStyle, getStyle } = elementApi;
        const { actionTypeId } = actionItem;
        if (actionTypeId === STYLE_SIZE) {
          const { config } = actionItem;
          if (config.widthUnit === AUTO) {
            setStyle(element, WIDTH, "");
          }
          if (config.heightUnit === AUTO) {
            setStyle(element, HEIGHT, "");
          }
        }
        if (getStyle(element, WILL_CHANGE)) {
          processElementByType({
            effect: removeWillChange,
            actionTypeId,
            elementApi
          })(element);
        }
      }
      var processElementByType = ({ effect, actionTypeId, elementApi }) => (
        // @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
        (element) => {
          switch (actionTypeId) {
            case TRANSFORM_MOVE:
            case TRANSFORM_SCALE:
            case TRANSFORM_ROTATE:
            case TRANSFORM_SKEW:
              effect(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
              break;
            case STYLE_FILTER:
              effect(element, FILTER, elementApi);
              break;
            case STYLE_FONT_VARIATION:
              effect(element, FONT_VARIATION_SETTINGS, elementApi);
              break;
            case STYLE_OPACITY:
              effect(element, OPACITY, elementApi);
              break;
            case STYLE_SIZE:
              effect(element, WIDTH, elementApi);
              effect(element, HEIGHT, elementApi);
              break;
            case STYLE_BACKGROUND_COLOR:
            case STYLE_BORDER:
            case STYLE_TEXT_COLOR:
              effect(element, colorStyleProps[actionTypeId], elementApi);
              break;
            case GENERAL_DISPLAY:
              effect(element, DISPLAY, elementApi);
              break;
          }
        }
      );
      function clearStyleProp(element, prop, elementApi) {
        const { setStyle } = elementApi;
        removeWillChange(element, prop, elementApi);
        setStyle(element, prop, "");
        if (prop === _IX2BrowserSupport.TRANSFORM_PREFIXED) {
          setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, "");
        }
      }
      function getMaxDurationItemIndex(actionItems) {
        let maxDuration = 0;
        let resultIndex = 0;
        actionItems.forEach((actionItem, index) => {
          const { config } = actionItem;
          const total = config.delay + config.duration;
          if (total >= maxDuration) {
            maxDuration = total;
            resultIndex = index;
          }
        });
        return resultIndex;
      }
      function getActionListProgress(actionList, instance) {
        const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
        const { actionItem: instanceItem, verboseTimeElapsed = 0 } = instance;
        let totalDuration = 0;
        let elapsedDuration = 0;
        actionItemGroups.forEach((group, index) => {
          if (useFirstGroupAsInitialState && index === 0) {
            return;
          }
          const { actionItems } = group;
          const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
          const { config, actionTypeId } = carrierItem;
          if (instanceItem.id === carrierItem.id) {
            elapsedDuration = totalDuration + verboseTimeElapsed;
          }
          const duration = getRenderType(actionTypeId) === RENDER_GENERAL ? 0 : config.duration;
          totalDuration += config.delay + duration;
        });
        return totalDuration > 0 ? (0, _IX2EasingUtils.optimizeFloat)(elapsedDuration / totalDuration) : 0;
      }
      function reduceListToGroup({ actionList, actionItemId, rawData }) {
        const { actionItemGroups, continuousParameterGroups } = actionList;
        const newActionItems = [];
        const takeItemUntilMatch = (actionItem) => {
          newActionItems.push((0, _timm.mergeIn)(actionItem, [
            "config"
          ], {
            delay: 0,
            duration: 0
          }));
          return actionItem.id === actionItemId;
        };
        actionItemGroups && actionItemGroups.some(({ actionItems }) => {
          return actionItems.some(takeItemUntilMatch);
        });
        continuousParameterGroups && continuousParameterGroups.some((paramGroup) => {
          const { continuousActionGroups } = paramGroup;
          return continuousActionGroups.some(({ actionItems }) => {
            return actionItems.some(takeItemUntilMatch);
          });
        });
        return (0, _timm.setIn)(rawData, [
          "actionLists"
        ], {
          [actionList.id]: {
            id: actionList.id,
            actionItemGroups: [
              {
                actionItems: newActionItems
              }
            ]
          }
        });
      }
      function shouldNamespaceEventParameter(eventTypeId, { basedOn }) {
        return eventTypeId === _sharedconstants.EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === _sharedconstants.EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === _sharedconstants.EventTypeConsts.MOUSE_MOVE && basedOn === _sharedconstants.EventBasedOn.ELEMENT;
      }
      function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
        const namespacedParameterId = eventStateKey + COLON_DELIMITER + continuousParameterGroupId;
        return namespacedParameterId;
      }
      function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
        if (mediaQueryKey == null) {
          return true;
        }
        return mediaQueries.indexOf(mediaQueryKey) !== -1;
      }
      function mediaQueriesEqual(listA, listB) {
        return (0, _shallowEqual.default)(listA && listA.sort(), listB && listB.sort());
      }
      function stringifyTarget(target) {
        if (typeof target === "string") {
          return target;
        }
        if (target.pluginElement && target.objectId) {
          return target.pluginElement + BAR_DELIMITER + target.objectId;
        }
        if (target.objectId) {
          return target.objectId;
        }
        const { id = "", selector = "", useEventTarget = "" } = target;
        return id + BAR_DELIMITER + selector + BAR_DELIMITER + useEventTarget;
      }
    }
  });

  // ../../app/packages/systems/ix2/shared/index.js
  var require_shared = __commonJS({
    "../../app/packages/systems/ix2/shared/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        // IX2Actions,
        IX2BrowserSupport: function() {
          return _IX2BrowserSupport;
        },
        IX2EasingUtils: function() {
          return _IX2EasingUtils;
        },
        IX2Easings: function() {
          return _IX2Easings;
        },
        IX2ElementsReducer: function() {
          return _IX2ElementsReducer;
        },
        IX2VanillaPlugins: function() {
          return _IX2VanillaPlugins;
        },
        IX2VanillaUtils: function() {
          return _IX2VanillaUtils;
        }
      });
      var _IX2BrowserSupport = /* @__PURE__ */ _interop_require_wildcard(require_IX2BrowserSupport());
      var _IX2Easings = /* @__PURE__ */ _interop_require_wildcard(require_IX2Easings());
      var _IX2EasingUtils = /* @__PURE__ */ _interop_require_wildcard(require_IX2EasingUtils());
      var _IX2ElementsReducer = /* @__PURE__ */ _interop_require_wildcard(require_IX2ElementsReducer());
      var _IX2VanillaPlugins = /* @__PURE__ */ _interop_require_wildcard(require_IX2VanillaPlugins());
      var _IX2VanillaUtils = /* @__PURE__ */ _interop_require_wildcard(require_IX2VanillaUtils());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
    }
  });

  // ../../app/packages/systems/ix2/engine/reducers/IX2InstancesReducer.js
  var require_IX2InstancesReducer = __commonJS({
    "../../app/packages/systems/ix2/engine/reducers/IX2InstancesReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ixInstances", {
        enumerable: true,
        get: function() {
          return ixInstances;
        }
      });
      var _sharedconstants = require_shared_constants();
      var _shared = require_shared();
      var _timm = require_timm();
      var { IX2_RAW_DATA_IMPORTED, IX2_SESSION_STOPPED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ANIMATION_FRAME_CHANGED } = _sharedconstants.IX2EngineActionTypes;
      var { optimizeFloat, applyEasing, createBezierEasing } = _shared.IX2EasingUtils;
      var { RENDER_GENERAL } = _sharedconstants.IX2EngineConstants;
      var { getItemConfigByKey, getRenderType, getStyleProp } = _shared.IX2VanillaUtils;
      var continuousInstance = (state, action) => {
        const { position: lastPosition, parameterId, actionGroups, destinationKeys, smoothing, restingValue, actionTypeId, customEasingFn, skipMotion, skipToValue } = state;
        const { parameters } = action.payload;
        let velocity = Math.max(1 - smoothing, 0.01);
        let paramValue = parameters[parameterId];
        if (paramValue == null) {
          velocity = 1;
          paramValue = restingValue;
        }
        const nextPosition = Math.max(paramValue, 0) || 0;
        const positionDiff = optimizeFloat(nextPosition - lastPosition);
        const position = skipMotion ? skipToValue : optimizeFloat(lastPosition + positionDiff * velocity);
        const keyframePosition = position * 100;
        if (position === lastPosition && state.current) {
          return state;
        }
        let fromActionItem;
        let toActionItem;
        let positionOffset;
        let positionRange;
        for (let i = 0, { length } = actionGroups; i < length; i++) {
          const { keyframe, actionItems } = actionGroups[i];
          if (i === 0) {
            fromActionItem = actionItems[0];
          }
          if (keyframePosition >= keyframe) {
            fromActionItem = actionItems[0];
            const nextGroup = actionGroups[i + 1];
            const hasNextItem = nextGroup && keyframePosition !== keyframe;
            toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
            if (hasNextItem) {
              positionOffset = keyframe / 100;
              positionRange = (nextGroup.keyframe - keyframe) / 100;
            }
          }
        }
        const current = {};
        if (fromActionItem && !toActionItem) {
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            current[key] = getItemConfigByKey(actionTypeId, key, fromActionItem.config);
          }
        } else if (fromActionItem && toActionItem && positionOffset !== void 0 && positionRange !== void 0) {
          const localPosition = (position - positionOffset) / positionRange;
          const easing = fromActionItem.config.easing;
          const eased = applyEasing(easing, localPosition, customEasingFn);
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            const fromVal = getItemConfigByKey(actionTypeId, key, fromActionItem.config);
            const toVal = getItemConfigByKey(actionTypeId, key, toActionItem.config);
            const diff = toVal - fromVal;
            const value = diff * eased + fromVal;
            current[key] = value;
          }
        }
        return (0, _timm.merge)(state, {
          position,
          current
        });
      };
      var timedInstance = (state, action) => {
        const { active, origin, start, immediate, renderType, verbose, actionItem, destination, destinationKeys, pluginDuration, instanceDelay, customEasingFn, skipMotion } = state;
        const easing = actionItem.config.easing;
        let { duration, delay } = actionItem.config;
        if (pluginDuration != null) {
          duration = pluginDuration;
        }
        delay = instanceDelay != null ? instanceDelay : delay;
        if (renderType === RENDER_GENERAL) {
          duration = 0;
        } else if (immediate || skipMotion) {
          duration = delay = 0;
        }
        const { now } = action.payload;
        if (active && origin) {
          const delta = now - (start + delay);
          if (verbose) {
            const verboseDelta = now - start;
            const verboseDuration = duration + delay;
            const verbosePosition = optimizeFloat(Math.min(Math.max(0, verboseDelta / verboseDuration), 1));
            state = (0, _timm.set)(state, "verboseTimeElapsed", verboseDuration * verbosePosition);
          }
          if (delta < 0) {
            return state;
          }
          const position = optimizeFloat(Math.min(Math.max(0, delta / duration), 1));
          const eased = applyEasing(easing, position, customEasingFn);
          const newProps = {};
          let current = null;
          if (destinationKeys.length) {
            current = destinationKeys.reduce((result, key) => {
              const destValue = destination[key];
              const originVal = parseFloat(origin[key]) || 0;
              const diff = parseFloat(destValue) - originVal;
              const value = diff * eased + originVal;
              result[key] = value;
              return result;
            }, {});
          }
          newProps.current = current;
          newProps.position = position;
          if (position === 1) {
            newProps.active = false;
            newProps.complete = true;
          }
          return (0, _timm.merge)(state, newProps);
        }
        return state;
      };
      var ixInstances = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED: {
            return action.payload.ixInstances || Object.freeze({});
          }
          case IX2_SESSION_STOPPED: {
            return Object.freeze({});
          }
          case IX2_INSTANCE_ADDED: {
            const { instanceId, elementId, actionItem, eventId, eventTarget, eventStateKey, actionListId, groupIndex, isCarrier, origin, destination, immediate, verbose, continuous, parameterId, actionGroups, smoothing, restingValue, pluginInstance, pluginDuration, instanceDelay, skipMotion, skipToValue } = action.payload;
            const { actionTypeId } = actionItem;
            const renderType = getRenderType(actionTypeId);
            const styleProp = getStyleProp(renderType, actionTypeId);
            const destinationKeys = Object.keys(destination).filter((key) => (
              // Skip null destination values
              destination[key] != null && // Skip string destination values
              typeof destination[key] !== "string"
            ));
            const { easing } = actionItem.config;
            return (0, _timm.set)(state, instanceId, {
              id: instanceId,
              elementId,
              active: false,
              position: 0,
              start: 0,
              origin,
              destination,
              destinationKeys,
              immediate,
              verbose,
              current: null,
              actionItem,
              actionTypeId,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              renderType,
              isCarrier,
              styleProp,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue,
              customEasingFn: Array.isArray(easing) && easing.length === 4 ? createBezierEasing(easing) : void 0
            });
          }
          case IX2_INSTANCE_STARTED: {
            const { instanceId, time } = action.payload;
            return (0, _timm.mergeIn)(state, [
              instanceId
            ], {
              active: true,
              complete: false,
              start: time
            });
          }
          case IX2_INSTANCE_REMOVED: {
            const { instanceId } = action.payload;
            if (!state[instanceId]) {
              return state;
            }
            const newState = {};
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              if (key !== instanceId) {
                newState[key] = state[key];
              }
            }
            return newState;
          }
          case IX2_ANIMATION_FRAME_CHANGED: {
            let newState = state;
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              const instance = state[key];
              const reducer = instance.continuous ? continuousInstance : timedInstance;
              newState = (0, _timm.set)(newState, key, reducer(instance, action));
            }
            return newState;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // ../../app/packages/systems/ix2/engine/reducers/IX2ParametersReducer.js
  var require_IX2ParametersReducer = __commonJS({
    "../../app/packages/systems/ix2/engine/reducers/IX2ParametersReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ixParameters", {
        enumerable: true,
        get: function() {
          return ixParameters;
        }
      });
      var _sharedconstants = require_shared_constants();
      var { IX2_RAW_DATA_IMPORTED, IX2_SESSION_STOPPED, IX2_PARAMETER_CHANGED } = _sharedconstants.IX2EngineActionTypes;
      var ixParameters = (state = {}, action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED: {
            return (
              // @ts-expect-error - Further investigation is needed as looks like IX2_RAW_DATA_IMPORTED is never triggered with ixParameters
              action.payload.ixParameters || {}
            );
          }
          case IX2_SESSION_STOPPED: {
            return {};
          }
          case IX2_PARAMETER_CHANGED: {
            const { key, value } = action.payload;
            state[key] = value;
            return state;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // ../../app/packages/systems/ix2/engine/reducers/IX2Reducer.js
  var require_IX2Reducer = __commonJS({
    "../../app/packages/systems/ix2/engine/reducers/IX2Reducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _redux = require_lib2();
      var _IX2DataReducer = require_IX2DataReducer();
      var _IX2RequestReducer = require_IX2RequestReducer();
      var _IX2SessionReducer = require_IX2SessionReducer();
      var _shared = require_shared();
      var _IX2InstancesReducer = require_IX2InstancesReducer();
      var _IX2ParametersReducer = require_IX2ParametersReducer();
      var { ixElements } = _shared.IX2ElementsReducer;
      var _default = (0, _redux.combineReducers)({
        ixData: _IX2DataReducer.ixData,
        ixRequest: _IX2RequestReducer.ixRequest,
        ixSession: _IX2SessionReducer.ixSession,
        ixElements,
        ixInstances: _IX2InstancesReducer.ixInstances,
        ixParameters: _IX2ParametersReducer.ixParameters
      });
    }
  });

  // ../../app/node_modules/lodash/isString.js
  var require_isString = __commonJS({
    "../../app/node_modules/lodash/isString.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var stringTag = "[object String]";
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      module.exports = isString;
    }
  });

  // ../../app/node_modules/lodash/_asciiSize.js
  var require_asciiSize = __commonJS({
    "../../app/node_modules/lodash/_asciiSize.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var asciiSize = baseProperty("length");
      module.exports = asciiSize;
    }
  });

  // ../../app/node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS({
    "../../app/node_modules/lodash/_hasUnicode.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsZWJ = "\\u200d";
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      module.exports = hasUnicode;
    }
  });

  // ../../app/node_modules/lodash/_unicodeSize.js
  var require_unicodeSize = __commonJS({
    "../../app/node_modules/lodash/_unicodeSize.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsZWJ = "\\u200d";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      module.exports = unicodeSize;
    }
  });

  // ../../app/node_modules/lodash/_stringSize.js
  var require_stringSize = __commonJS({
    "../../app/node_modules/lodash/_stringSize.js"(exports, module) {
      var asciiSize = require_asciiSize();
      var hasUnicode = require_hasUnicode();
      var unicodeSize = require_unicodeSize();
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      module.exports = stringSize;
    }
  });

  // ../../app/node_modules/lodash/size.js
  var require_size = __commonJS({
    "../../app/node_modules/lodash/size.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArrayLike = require_isArrayLike();
      var isString = require_isString();
      var stringSize = require_stringSize();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      module.exports = size;
    }
  });

  // ../../app/node_modules/lodash/negate.js
  var require_negate = __commonJS({
    "../../app/node_modules/lodash/negate.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      module.exports = negate;
    }
  });

  // ../../app/node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "../../app/node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // ../../app/node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "../../app/node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // ../../app/node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "../../app/node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // ../../app/node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "../../app/node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module.exports = baseSet;
    }
  });

  // ../../app/node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "../../app/node_modules/lodash/_basePickBy.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      module.exports = basePickBy;
    }
  });

  // ../../app/node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "../../app/node_modules/lodash/_getSymbolsIn.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      module.exports = getSymbolsIn;
    }
  });

  // ../../app/node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "../../app/node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // ../../app/node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "../../app/node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // ../../app/node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "../../app/node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // ../../app/node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "../../app/node_modules/lodash/_getAllKeysIn.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module.exports = getAllKeysIn;
    }
  });

  // ../../app/node_modules/lodash/pickBy.js
  var require_pickBy = __commonJS({
    "../../app/node_modules/lodash/pickBy.js"(exports, module) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var basePickBy = require_basePickBy();
      var getAllKeysIn = require_getAllKeysIn();
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = baseIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      module.exports = pickBy;
    }
  });

  // ../../app/node_modules/lodash/omitBy.js
  var require_omitBy = __commonJS({
    "../../app/node_modules/lodash/omitBy.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var negate = require_negate();
      var pickBy = require_pickBy();
      function omitBy(object, predicate) {
        return pickBy(object, negate(baseIteratee(predicate)));
      }
      module.exports = omitBy;
    }
  });

  // ../../app/node_modules/lodash/isEmpty.js
  var require_isEmpty = __commonJS({
    "../../app/node_modules/lodash/isEmpty.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isArrayLike = require_isArrayLike();
      var isBuffer = require_isBuffer();
      var isPrototype = require_isPrototype();
      var isTypedArray = require_isTypedArray();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      module.exports = isEmpty;
    }
  });

  // ../../app/node_modules/lodash/mapValues.js
  var require_mapValues = __commonJS({
    "../../app/node_modules/lodash/mapValues.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var baseForOwn = require_baseForOwn();
      var baseIteratee = require_baseIteratee();
      function mapValues(object, iteratee) {
        var result = {};
        iteratee = baseIteratee(iteratee, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result, key, iteratee(value, key, object2));
        });
        return result;
      }
      module.exports = mapValues;
    }
  });

  // ../../app/node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "../../app/node_modules/lodash/_arrayEach.js"(exports, module) {
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module.exports = arrayEach;
    }
  });

  // ../../app/node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "../../app/node_modules/lodash/_castFunction.js"(exports, module) {
      var identity = require_identity();
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      module.exports = castFunction;
    }
  });

  // ../../app/node_modules/lodash/forEach.js
  var require_forEach = __commonJS({
    "../../app/node_modules/lodash/forEach.js"(exports, module) {
      var arrayEach = require_arrayEach();
      var baseEach = require_baseEach();
      var castFunction = require_castFunction();
      var isArray = require_isArray();
      function forEach(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
      }
      module.exports = forEach;
    }
  });

  // ../../app/node_modules/lodash/now.js
  var require_now = __commonJS({
    "../../app/node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // ../../app/node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "../../app/node_modules/lodash/debounce.js"(exports, module) {
      var isObject = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce;
    }
  });

  // ../../app/node_modules/lodash/throttle.js
  var require_throttle = __commonJS({
    "../../app/node_modules/lodash/throttle.js"(exports, module) {
      var debounce = require_debounce();
      var isObject = require_isObject();
      var FUNC_ERROR_TEXT = "Expected a function";
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      module.exports = throttle;
    }
  });

  // ../../app/packages/systems/ix2/engine/actions/IX2EngineActions.js
  var require_IX2EngineActions = __commonJS({
    "../../app/packages/systems/ix2/engine/actions/IX2EngineActions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        actionListPlaybackChanged: function() {
          return actionListPlaybackChanged;
        },
        animationFrameChanged: function() {
          return animationFrameChanged;
        },
        clearRequested: function() {
          return clearRequested;
        },
        elementStateChanged: function() {
          return elementStateChanged;
        },
        eventListenerAdded: function() {
          return eventListenerAdded;
        },
        eventStateChanged: function() {
          return eventStateChanged;
        },
        instanceAdded: function() {
          return instanceAdded;
        },
        instanceRemoved: function() {
          return instanceRemoved;
        },
        instanceStarted: function() {
          return instanceStarted;
        },
        mediaQueriesDefined: function() {
          return mediaQueriesDefined;
        },
        parameterChanged: function() {
          return parameterChanged;
        },
        playbackRequested: function() {
          return playbackRequested;
        },
        previewRequested: function() {
          return previewRequested;
        },
        rawDataImported: function() {
          return rawDataImported;
        },
        sessionInitialized: function() {
          return sessionInitialized;
        },
        sessionStarted: function() {
          return sessionStarted;
        },
        sessionStopped: function() {
          return sessionStopped;
        },
        stopRequested: function() {
          return stopRequested;
        },
        testFrameRendered: function() {
          return testFrameRendered;
        },
        viewportWidthChanged: function() {
          return viewportWidthChanged;
        }
      });
      var _sharedconstants = require_shared_constants();
      var _shared = require_shared();
      var { IX2_RAW_DATA_IMPORTED, IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_SESSION_STOPPED, IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED, IX2_EVENT_LISTENER_ADDED, IX2_TEST_FRAME_RENDERED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_PARAMETER_CHANGED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ELEMENT_STATE_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED } = _sharedconstants.IX2EngineActionTypes;
      var { reifyState } = _shared.IX2VanillaUtils;
      var rawDataImported = (rawData) => ({
        type: IX2_RAW_DATA_IMPORTED,
        payload: {
          ...reifyState(rawData)
        }
      });
      var sessionInitialized = ({ hasBoundaryNodes, reducedMotion }) => ({
        type: IX2_SESSION_INITIALIZED,
        payload: {
          hasBoundaryNodes,
          reducedMotion
        }
      });
      var sessionStarted = () => ({
        type: IX2_SESSION_STARTED
      });
      var sessionStopped = () => ({
        type: IX2_SESSION_STOPPED
      });
      var previewRequested = ({ rawData, defer }) => ({
        type: IX2_PREVIEW_REQUESTED,
        payload: {
          defer,
          rawData
        }
      });
      var playbackRequested = ({ actionTypeId = _sharedconstants.ActionTypeConsts.GENERAL_START_ACTION, actionListId, actionItemId, eventId, allowEvents, immediate, testManual, verbose, rawData }) => ({
        type: IX2_PLAYBACK_REQUESTED,
        payload: {
          actionTypeId,
          actionListId,
          actionItemId,
          testManual,
          eventId,
          allowEvents,
          immediate,
          verbose,
          rawData
        }
      });
      var stopRequested = (actionListId) => ({
        type: IX2_STOP_REQUESTED,
        payload: {
          actionListId
        }
      });
      var clearRequested = () => ({
        type: IX2_CLEAR_REQUESTED
      });
      var eventListenerAdded = (target, listenerParams) => ({
        type: IX2_EVENT_LISTENER_ADDED,
        payload: {
          target,
          listenerParams
        }
      });
      var testFrameRendered = (step = 1) => ({
        type: IX2_TEST_FRAME_RENDERED,
        payload: {
          step
        }
      });
      var eventStateChanged = (stateKey, newState) => ({
        type: IX2_EVENT_STATE_CHANGED,
        payload: {
          stateKey,
          newState
        }
      });
      var animationFrameChanged = (now, parameters) => ({
        type: IX2_ANIMATION_FRAME_CHANGED,
        payload: {
          now,
          parameters
        }
      });
      var parameterChanged = (key, value) => ({
        type: IX2_PARAMETER_CHANGED,
        payload: {
          key,
          value
        }
      });
      var instanceAdded = (options) => ({
        type: IX2_INSTANCE_ADDED,
        payload: {
          ...options
        }
      });
      var instanceStarted = (instanceId, time) => ({
        type: IX2_INSTANCE_STARTED,
        payload: {
          instanceId,
          time
        }
      });
      var instanceRemoved = (instanceId) => ({
        type: IX2_INSTANCE_REMOVED,
        payload: {
          instanceId
        }
      });
      var elementStateChanged = (elementId, actionTypeId, current, actionItem) => ({
        type: IX2_ELEMENT_STATE_CHANGED,
        payload: {
          elementId,
          actionTypeId,
          current,
          actionItem
        }
      });
      var actionListPlaybackChanged = ({ actionListId, isPlaying }) => ({
        type: IX2_ACTION_LIST_PLAYBACK_CHANGED,
        payload: {
          actionListId,
          isPlaying
        }
      });
      var viewportWidthChanged = ({ width, mediaQueries }) => ({
        type: IX2_VIEWPORT_WIDTH_CHANGED,
        payload: {
          width,
          mediaQueries
        }
      });
      var mediaQueriesDefined = () => ({
        type: IX2_MEDIA_QUERIES_DEFINED
      });
    }
  });

  // ../../app/packages/systems/ix2/engine/logic/IX2BrowserApi.js
  var require_IX2BrowserApi = __commonJS({
    "../../app/packages/systems/ix2/engine/logic/IX2BrowserApi.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        elementContains: function() {
          return elementContains;
        },
        getChildElements: function() {
          return getChildElements;
        },
        getClosestElement: function() {
          return getClosestElement;
        },
        getProperty: function() {
          return getProperty;
        },
        getQuerySelector: function() {
          return getQuerySelector;
        },
        getRefType: function() {
          return getRefType;
        },
        getSiblingElements: function() {
          return getSiblingElements;
        },
        getStyle: function() {
          return getStyle;
        },
        getValidDocument: function() {
          return getValidDocument;
        },
        isSiblingNode: function() {
          return isSiblingNode;
        },
        matchSelector: function() {
          return matchSelector;
        },
        queryDocument: function() {
          return queryDocument;
        },
        setStyle: function() {
          return setStyle;
        }
      });
      var _shared = require_shared();
      var _sharedconstants = require_shared_constants();
      var { ELEMENT_MATCHES } = _shared.IX2BrowserSupport;
      var { IX2_ID_DELIMITER, HTML_ELEMENT, PLAIN_OBJECT, WF_PAGE } = _sharedconstants.IX2EngineConstants;
      function setStyle(element, prop, value) {
        element.style[prop] = value;
      }
      function getStyle(element, prop) {
        if (prop.startsWith("--")) {
          return window.getComputedStyle(document.documentElement).getPropertyValue(prop);
        }
        if (element.style instanceof CSSStyleDeclaration) {
          return element.style[prop];
        }
      }
      function getProperty(element, prop) {
        return element[prop];
      }
      function matchSelector(selector) {
        return (element) => element[ELEMENT_MATCHES](selector);
      }
      function getQuerySelector({ id, selector }) {
        if (id) {
          let nodeId = id;
          if (id.indexOf(IX2_ID_DELIMITER) !== -1) {
            const pair = id.split(IX2_ID_DELIMITER);
            const pageId = pair[0];
            nodeId = pair[1];
            if (pageId !== document.documentElement.getAttribute(WF_PAGE)) {
              return null;
            }
          }
          return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
        }
        return selector;
      }
      function getValidDocument(pageId) {
        if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE)) {
          return document;
        }
        return null;
      }
      function queryDocument(baseSelector, descendantSelector) {
        return Array.prototype.slice.call(document.querySelectorAll(descendantSelector ? baseSelector + " " + descendantSelector : baseSelector));
      }
      function elementContains(parent, child) {
        return parent.contains(child);
      }
      function isSiblingNode(a, b) {
        return a !== b && a.parentNode === b.parentNode;
      }
      function getChildElements(sourceElements) {
        const childElements = [];
        for (let i = 0, { length } = sourceElements || []; i < length; i++) {
          const { children } = sourceElements[i];
          const { length: childCount } = children;
          if (!childCount) {
            continue;
          }
          for (let j = 0; j < childCount; j++) {
            childElements.push(children[j]);
          }
        }
        return childElements;
      }
      function getSiblingElements(sourceElements = []) {
        const elements = [];
        const parentCache = [];
        for (let i = 0, { length } = sourceElements; i < length; i++) {
          const { parentNode } = sourceElements[i];
          if (!parentNode || !parentNode.children || !parentNode.children.length) {
            continue;
          }
          if (parentCache.indexOf(parentNode) !== -1) {
            continue;
          }
          parentCache.push(parentNode);
          let el = parentNode.firstElementChild;
          while (el != null) {
            if (sourceElements.indexOf(el) === -1) {
              elements.push(el);
            }
            el = el.nextElementSibling;
          }
        }
        return elements;
      }
      var getClosestElement = Element.prototype.closest ? (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        return element.closest(selector);
      } : (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        let el = element;
        do {
          if (el[ELEMENT_MATCHES] && el[ELEMENT_MATCHES](selector)) {
            return el;
          }
          el = el.parentNode;
        } while (el != null);
        return null;
      };
      function getRefType(ref) {
        if (ref != null && typeof ref == "object") {
          return ref instanceof Element ? HTML_ELEMENT : PLAIN_OBJECT;
        }
        return null;
      }
    }
  });

  // ../../app/node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "../../app/node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // ../../app/node_modules/lodash/_baseLodash.js
  var require_baseLodash = __commonJS({
    "../../app/node_modules/lodash/_baseLodash.js"(exports, module) {
      function baseLodash() {
      }
      module.exports = baseLodash;
    }
  });

  // ../../app/node_modules/lodash/_LodashWrapper.js
  var require_LodashWrapper = __commonJS({
    "../../app/node_modules/lodash/_LodashWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = void 0;
      }
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      module.exports = LodashWrapper;
    }
  });

  // ../../app/node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "../../app/node_modules/lodash/_isFlattenable.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module.exports = isFlattenable;
    }
  });

  // ../../app/node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "../../app/node_modules/lodash/_baseFlatten.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module.exports = baseFlatten;
    }
  });

  // ../../app/node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "../../app/node_modules/lodash/flatten.js"(exports, module) {
      var baseFlatten = require_baseFlatten();
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      module.exports = flatten;
    }
  });

  // ../../app/node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "../../app/node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // ../../app/node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "../../app/node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // ../../app/node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "../../app/node_modules/lodash/constant.js"(exports, module) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }
  });

  // ../../app/node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "../../app/node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // ../../app/node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "../../app/node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // ../../app/node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "../../app/node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // ../../app/node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS({
    "../../app/node_modules/lodash/_flatRest.js"(exports, module) {
      var flatten = require_flatten();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten), func + "");
      }
      module.exports = flatRest;
    }
  });

  // ../../app/node_modules/lodash/_metaMap.js
  var require_metaMap = __commonJS({
    "../../app/node_modules/lodash/_metaMap.js"(exports, module) {
      var WeakMap2 = require_WeakMap();
      var metaMap = WeakMap2 && new WeakMap2();
      module.exports = metaMap;
    }
  });

  // ../../app/node_modules/lodash/noop.js
  var require_noop = __commonJS({
    "../../app/node_modules/lodash/noop.js"(exports, module) {
      function noop() {
      }
      module.exports = noop;
    }
  });

  // ../../app/node_modules/lodash/_getData.js
  var require_getData = __commonJS({
    "../../app/node_modules/lodash/_getData.js"(exports, module) {
      var metaMap = require_metaMap();
      var noop = require_noop();
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      module.exports = getData;
    }
  });

  // ../../app/node_modules/lodash/_realNames.js
  var require_realNames = __commonJS({
    "../../app/node_modules/lodash/_realNames.js"(exports, module) {
      var realNames = {};
      module.exports = realNames;
    }
  });

  // ../../app/node_modules/lodash/_getFuncName.js
  var require_getFuncName = __commonJS({
    "../../app/node_modules/lodash/_getFuncName.js"(exports, module) {
      var realNames = require_realNames();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function getFuncName(func) {
        var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
      module.exports = getFuncName;
    }
  });

  // ../../app/node_modules/lodash/_LazyWrapper.js
  var require_LazyWrapper = __commonJS({
    "../../app/node_modules/lodash/_LazyWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      var MAX_ARRAY_LENGTH = 4294967295;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      module.exports = LazyWrapper;
    }
  });

  // ../../app/node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "../../app/node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // ../../app/node_modules/lodash/_wrapperClone.js
  var require_wrapperClone = __commonJS({
    "../../app/node_modules/lodash/_wrapperClone.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var copyArray = require_copyArray();
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
      }
      module.exports = wrapperClone;
    }
  });

  // ../../app/node_modules/lodash/wrapperLodash.js
  var require_wrapperLodash = __commonJS({
    "../../app/node_modules/lodash/wrapperLodash.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var baseLodash = require_baseLodash();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var wrapperClone = require_wrapperClone();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      module.exports = lodash;
    }
  });

  // ../../app/node_modules/lodash/_isLaziable.js
  var require_isLaziable = __commonJS({
    "../../app/node_modules/lodash/_isLaziable.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var lodash = require_wrapperLodash();
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      module.exports = isLaziable;
    }
  });

  // ../../app/node_modules/lodash/_createFlow.js
  var require_createFlow = __commonJS({
    "../../app/node_modules/lodash/_createFlow.js"(exports, module) {
      var LodashWrapper = require_LodashWrapper();
      var flatRest = require_flatRest();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var isArray = require_isArray();
      var isLaziable = require_isLaziable();
      var FUNC_ERROR_TEXT = "Expected a function";
      var WRAP_CURRY_FLAG = 8;
      var WRAP_PARTIAL_FLAG = 32;
      var WRAP_ARY_FLAG = 128;
      var WRAP_REARG_FLAG = 256;
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result = funcs[index2].call(this, result);
            }
            return result;
          };
        });
      }
      module.exports = createFlow;
    }
  });

  // ../../app/node_modules/lodash/flow.js
  var require_flow = __commonJS({
    "../../app/node_modules/lodash/flow.js"(exports, module) {
      var createFlow = require_createFlow();
      var flow = createFlow();
      module.exports = flow;
    }
  });

  // ../../app/node_modules/lodash/_baseClamp.js
  var require_baseClamp = __commonJS({
    "../../app/node_modules/lodash/_baseClamp.js"(exports, module) {
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== void 0) {
            number = number <= upper ? number : upper;
          }
          if (lower !== void 0) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      module.exports = baseClamp;
    }
  });

  // ../../app/node_modules/lodash/clamp.js
  var require_clamp = __commonJS({
    "../../app/node_modules/lodash/clamp.js"(exports, module) {
      var baseClamp = require_baseClamp();
      var toNumber = require_toNumber();
      function clamp(number, lower, upper) {
        if (upper === void 0) {
          upper = lower;
          lower = void 0;
        }
        if (upper !== void 0) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== void 0) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      module.exports = clamp;
    }
  });

  // ../../app/packages/systems/ix2/engine/logic/IX2VanillaEvents.js
  var require_IX2VanillaEvents = __commonJS({
    "../../app/packages/systems/ix2/engine/logic/IX2VanillaEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _flow = /* @__PURE__ */ _interop_require_default(require_flow());
      var _get = /* @__PURE__ */ _interop_require_default(require_get());
      var _clamp = /* @__PURE__ */ _interop_require_default(require_clamp());
      var _sharedconstants = require_shared_constants();
      var _IX2VanillaEngine = require_IX2VanillaEngine();
      var _IX2EngineActions = require_IX2EngineActions();
      var _shared = require_shared();
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var { MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL } = _sharedconstants.EventTypeConsts;
      var COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
      var COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
      var { COLON_DELIMITER } = _sharedconstants.IX2EngineConstants;
      var { getNamespacedParameterId } = _shared.IX2VanillaUtils;
      var composableFilter = (predicate) => (options) => {
        if (typeof options === "object" && predicate(options)) {
          return true;
        }
        return options;
      };
      var isElement = composableFilter(({ element, nativeEvent }) => {
        return element === nativeEvent.target;
      });
      var containsElement = composableFilter(({ element, nativeEvent }) => {
        return element.contains(nativeEvent.target);
      });
      var isOrContainsElement = (0, _flow.default)([
        isElement,
        containsElement
      ]);
      var getAutoStopEvent = (store, autoStopEventId) => {
        if (autoStopEventId) {
          const { ixData } = store.getState();
          const { events } = ixData;
          const eventToStop = events[autoStopEventId];
          if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
            return eventToStop;
          }
        }
        return null;
      };
      var hasAutoStopEvent = ({ store, event }) => {
        const { action: eventAction } = event;
        const { autoStopEventId } = eventAction.config;
        return Boolean(getAutoStopEvent(store, autoStopEventId));
      };
      var actionGroupCreator = ({ store, event, element, eventStateKey }, state) => {
        const { action: eventAction, id: eventId } = event;
        const { actionListId, autoStopEventId } = eventAction.config;
        const eventToStop = getAutoStopEvent(store, autoStopEventId);
        if (eventToStop) {
          (0, _IX2VanillaEngine.stopActionGroup)({
            store,
            eventId: autoStopEventId,
            eventTarget: element,
            eventStateKey: autoStopEventId + COLON_DELIMITER + eventStateKey.split(COLON_DELIMITER)[1],
            actionListId: (0, _get.default)(eventToStop, "action.config.actionListId")
          });
        }
        (0, _IX2VanillaEngine.stopActionGroup)({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        (0, _IX2VanillaEngine.startActionGroup)({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        return state;
      };
      var withFilter = (filter, handler) => (options, state) => filter(options, state) === true ? handler(options, state) : state;
      var baseActionGroupOptions = {
        handler: withFilter(isOrContainsElement, actionGroupCreator)
      };
      var baseActivityActionGroupOptions = {
        ...baseActionGroupOptions,
        types: [
          COMPONENT_ACTIVE,
          COMPONENT_INACTIVE
        ].join(" ")
      };
      var SCROLL_EVENT_TYPES = [
        {
          target: window,
          types: "resize orientationchange",
          throttle: true
        },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: true
        }
      ];
      var MOUSE_OVER_OUT_TYPES = "mouseover mouseout";
      var baseScrollActionGroupOptions = {
        types: SCROLL_EVENT_TYPES
      };
      var AUTO_STOP_DISABLED_EVENTS = {
        PAGE_START,
        PAGE_FINISH
      };
      var getDocumentState = (() => {
        const supportOffset = window.pageXOffset !== void 0;
        const isCSS1Compat = document.compatMode === "CSS1Compat";
        const rootElement = isCSS1Compat ? document.documentElement : document.body;
        return () => ({
          scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
          scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
          // required to remove elasticity in Safari scrolling.
          stiffScrollTop: (0, _clamp.default)(supportOffset ? window.pageYOffset : rootElement.scrollTop, 0, rootElement.scrollHeight - window.innerHeight),
          scrollWidth: rootElement.scrollWidth,
          scrollHeight: rootElement.scrollHeight,
          clientWidth: rootElement.clientWidth,
          clientHeight: rootElement.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        });
      })();
      var areBoxesIntersecting = (a, b) => !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
      var isElementHovered = ({ element, nativeEvent }) => {
        const { type, target, relatedTarget } = nativeEvent;
        const containsTarget = element.contains(target);
        if (type === "mouseover" && containsTarget) {
          return true;
        }
        const containsRelated = element.contains(relatedTarget);
        if (type === "mouseout" && containsTarget && containsRelated) {
          return true;
        }
        return false;
      };
      var isElementVisible = (options) => {
        const { element, event: { config } } = options;
        const { clientWidth, clientHeight } = getDocumentState();
        const scrollOffsetValue = config.scrollOffsetValue;
        const scrollOffsetUnit = config.scrollOffsetUnit;
        const isPX = scrollOffsetUnit === "PX";
        const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
        return areBoxesIntersecting(element.getBoundingClientRect(), {
          left: 0,
          top: offsetPadding,
          right: clientWidth,
          bottom: clientHeight - offsetPadding
        });
      };
      var whenComponentActiveChange = (
        // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
        (handler) => (options, oldState) => {
          const { type } = options.nativeEvent;
          const isActive = [
            COMPONENT_ACTIVE,
            COMPONENT_INACTIVE
          ].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
          const newState = {
            ...oldState,
            isActive
          };
          if (!oldState || newState.isActive !== oldState.isActive) {
            return handler(options, newState) || newState;
          }
          return newState;
        }
      );
      var whenElementHoverChange = (handler) => (options, oldState) => {
        const newState = {
          elementHovered: isElementHovered(options)
        };
        if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      var whenElementVisibiltyChange = (handler) => (options, oldState) => {
        const newState = {
          ...oldState,
          elementVisible: isElementVisible(options)
        };
        if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      var whenScrollDirectionChange = (
        // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
        (handler) => (options, oldState = {}) => {
          const { stiffScrollTop: scrollTop, scrollHeight, innerHeight } = getDocumentState();
          const { event: { config, eventTypeId } } = options;
          const { scrollOffsetValue, scrollOffsetUnit } = config;
          const isPX = scrollOffsetUnit === "PX";
          const scrollHeightBounds = scrollHeight - innerHeight;
          const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
          if (oldState && oldState.percentTop === percentTop) {
            return oldState;
          }
          const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
          let scrollingDown;
          let scrollDirectionChanged;
          let anchorTop = 0;
          if (oldState) {
            scrollingDown = percentTop > oldState.percentTop;
            scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
            anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
          }
          const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
          const newState = {
            ...oldState,
            percentTop,
            inBounds,
            anchorTop,
            scrollingDown
          };
          if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
          (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
            return handler(options, newState) || newState;
          }
          return newState;
        }
      );
      var pointIntersects = (point, rect) => point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
      var whenPageLoadFinish = (handler) => (options, oldState) => {
        const newState = {
          finished: document.readyState === "complete"
        };
        if (newState.finished && !(oldState && oldState.finshed)) {
          handler(options);
        }
        return newState;
      };
      var whenPageLoadStart = (handler) => (options, oldState) => {
        const newState = {
          started: true
        };
        if (!oldState) {
          handler(options);
        }
        return newState;
      };
      var whenClickCountChange = (handler) => (options, oldState = {
        clickCount: 0
      }) => {
        const newState = {
          clickCount: oldState.clickCount % 2 + 1
        };
        if (newState.clickCount !== oldState.clickCount) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      var getComponentActiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      var getComponentInactiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      var scrollIntoOutOfViewOptions = {
        ...baseScrollActionGroupOptions,
        handler: whenElementVisibiltyChange((options, state) => {
          const { elementVisible } = state;
          const { event, store } = options;
          const { ixData } = store.getState();
          const { events } = ixData;
          if (!events[event.action.config.autoStopEventId] && state.triggered) {
            return state;
          }
          if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
            actionGroupCreator(options);
            return {
              ...state,
              triggered: true
            };
          } else {
            return state;
          }
        })
      };
      var MOUSE_OUT_ROUND_THRESHOLD = 0.05;
      var _default = {
        [SLIDER_ACTIVE]: getComponentActiveOptions(),
        [SLIDER_INACTIVE]: getComponentInactiveOptions(),
        [DROPDOWN_OPEN]: getComponentActiveOptions(),
        [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
        // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
        // events where the target is the navbar element, and ignore children that dispatch activitiy events.
        [NAVBAR_OPEN]: getComponentActiveOptions(false),
        [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
        [TAB_ACTIVE]: getComponentActiveOptions(),
        [TAB_INACTIVE]: getComponentInactiveOptions(),
        [ECOMMERCE_CART_OPEN]: {
          types: "ecommerce-cart-open",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [ECOMMERCE_CART_CLOSE]: {
          types: "ecommerce-cart-close",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [MOUSE_CLICK]: {
          types: "click",
          handler: withFilter(isOrContainsElement, whenClickCountChange((options, { clickCount }) => {
            if (hasAutoStopEvent(options)) {
              clickCount === 1 && actionGroupCreator(options);
            } else {
              actionGroupCreator(options);
            }
          }))
        },
        [MOUSE_SECOND_CLICK]: {
          types: "click",
          handler: withFilter(isOrContainsElement, whenClickCountChange((options, { clickCount }) => {
            if (clickCount === 2) {
              actionGroupCreator(options);
            }
          }))
        },
        [MOUSE_DOWN]: {
          ...baseActionGroupOptions,
          types: "mousedown"
        },
        [MOUSE_UP]: {
          ...baseActionGroupOptions,
          types: "mouseup"
        },
        [MOUSE_OVER]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(isOrContainsElement, whenElementHoverChange((options, state) => {
            if (state.elementHovered) {
              actionGroupCreator(options);
            }
          }))
        },
        [MOUSE_OUT]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(isOrContainsElement, whenElementHoverChange((options, state) => {
            if (!state.elementHovered) {
              actionGroupCreator(options);
            }
          }))
        },
        [MOUSE_MOVE]: {
          types: "mousemove mouseout scroll",
          handler: ({ store, element, eventConfig, nativeEvent, eventStateKey }, state = {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
          }) => {
            const { basedOn, selectedAxis, continuousParameterGroupId, reverse, restingState = 0 } = eventConfig;
            const { clientX = state.clientX, clientY = state.clientY, pageX = state.pageX, pageY = state.pageY } = nativeEvent;
            const isXAxis = selectedAxis === "X_AXIS";
            const isMouseOut = nativeEvent.type === "mouseout";
            let value = restingState / 100;
            let namespacedParameterId = continuousParameterGroupId;
            let elementHovered = false;
            switch (basedOn) {
              case _sharedconstants.EventBasedOn.VIEWPORT: {
                value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                break;
              }
              case _sharedconstants.EventBasedOn.PAGE: {
                const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                break;
              }
              case _sharedconstants.EventBasedOn.ELEMENT:
              default: {
                namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
                const isMouseEvent = nativeEvent.type.indexOf("mouse") === 0;
                if (isMouseEvent && isOrContainsElement({
                  element,
                  nativeEvent
                }) !== true) {
                  break;
                }
                const rect = element.getBoundingClientRect();
                const { left, top, width, height } = rect;
                if (!isMouseEvent && !pointIntersects({
                  left: clientX,
                  top: clientY
                }, rect)) {
                  break;
                }
                elementHovered = true;
                value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                break;
              }
            }
            if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
              value = Math.round(value);
            }
            if (basedOn !== _sharedconstants.EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            elementHovered !== state.elementHovered) {
              value = reverse ? 1 - value : value;
              store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, value));
            }
            return {
              elementHovered,
              clientX,
              clientY,
              pageX,
              pageY
            };
          }
        },
        [PAGE_SCROLL]: {
          types: SCROLL_EVENT_TYPES,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          handler: ({ store, eventConfig }) => {
            const { continuousParameterGroupId, reverse } = eventConfig;
            const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
            let value = scrollTop / (scrollHeight - clientHeight);
            value = reverse ? 1 - value : value;
            store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
          }
        },
        [SCROLLING_IN_VIEW]: {
          types: SCROLL_EVENT_TYPES,
          handler: ({ element, store, eventConfig, eventStateKey }, state = {
            scrollPercent: 0
          }) => {
            const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientHeight: visibleHeight } = getDocumentState();
            const { basedOn, selectedAxis, continuousParameterGroupId, startsEntering, startsExiting, addEndOffset, addStartOffset, addOffsetValue = 0, endOffsetValue = 0 } = eventConfig;
            const isXAxis = selectedAxis === "X_AXIS";
            if (basedOn === _sharedconstants.EventBasedOn.VIEWPORT) {
              const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
              if (value !== state.scrollPercent) {
                store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
              }
              return {
                scrollPercent: value
              };
            } else {
              const namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
              const elementRect = element.getBoundingClientRect();
              let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
              let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
              offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
              offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
              const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
              const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
              const offsetHeight = offsetElementBottom - offsetElementTop;
              const fixedScrollHeight = Math.min(visibleHeight + offsetHeight, scrollHeight);
              const fixedScrollTop = Math.min(Math.max(0, visibleHeight - offsetElementTop), fixedScrollHeight);
              const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
              if (fixedScrollPerc !== state.scrollPercent) {
                store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, fixedScrollPerc));
              }
              return {
                scrollPercent: fixedScrollPerc
              };
            }
          }
        },
        [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
        [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
        [PAGE_SCROLL_DOWN]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_SCROLL_UP]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (!state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_FINISH]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
        },
        [PAGE_START]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
        }
      };
    }
  });

  // ../../app/packages/systems/ix2/engine/logic/IX2VanillaEngine.js
  var require_IX2VanillaEngine = __commonJS({
    "../../app/packages/systems/ix2/engine/logic/IX2VanillaEngine.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        observeRequests: function() {
          return observeRequests;
        },
        startActionGroup: function() {
          return startActionGroup;
        },
        startEngine: function() {
          return startEngine;
        },
        stopActionGroup: function() {
          return stopActionGroup;
        },
        stopAllActionGroups: function() {
          return stopAllActionGroups;
        },
        stopEngine: function() {
          return stopEngine;
        }
      });
      var _find = /* @__PURE__ */ _interop_require_default(require_find());
      var _get = /* @__PURE__ */ _interop_require_default(require_get());
      var _size = /* @__PURE__ */ _interop_require_default(require_size());
      var _omitBy = /* @__PURE__ */ _interop_require_default(require_omitBy());
      var _isEmpty = /* @__PURE__ */ _interop_require_default(require_isEmpty());
      var _mapValues = /* @__PURE__ */ _interop_require_default(require_mapValues());
      var _forEach = /* @__PURE__ */ _interop_require_default(require_forEach());
      var _throttle = /* @__PURE__ */ _interop_require_default(require_throttle());
      var _sharedconstants = require_shared_constants();
      var _shared = require_shared();
      var _IX2EngineActions = require_IX2EngineActions();
      var _IX2BrowserApi = /* @__PURE__ */ _interop_require_wildcard(require_IX2BrowserApi());
      var _IX2VanillaEvents = /* @__PURE__ */ _interop_require_default(require_IX2VanillaEvents());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      var QuickEffectsIdList = Object.keys(_sharedconstants.QuickEffectIds);
      var isQuickEffect = (actionTypeId) => QuickEffectsIdList.includes(actionTypeId);
      var { COLON_DELIMITER, BOUNDARY_SELECTOR, HTML_ELEMENT, RENDER_GENERAL, W_MOD_IX } = _sharedconstants.IX2EngineConstants;
      var { getAffectedElements, getElementId, getDestinationValues, observeStore, getInstanceId, renderHTMLElement, clearAllStyles, getMaxDurationItemIndex, getComputedStyle: getComputedStyle2, getInstanceOrigin, reduceListToGroup, shouldNamespaceEventParameter, getNamespacedParameterId, shouldAllowMediaQuery, cleanupHTMLElement, clearObjectCache, stringifyTarget, mediaQueriesEqual, shallowEqual } = _shared.IX2VanillaUtils;
      var { isPluginType, createPluginInstance, getPluginDuration } = _shared.IX2VanillaPlugins;
      var ua = navigator.userAgent;
      var IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
      var THROTTLED_EVENT_WAIT = 12;
      function observeRequests(store) {
        observeStore({
          store,
          select: ({ ixRequest }) => ixRequest.preview,
          onChange: handlePreviewRequest
        });
        observeStore({
          store,
          select: ({ ixRequest }) => ixRequest.playback,
          onChange: handlePlaybackRequest
        });
        observeStore({
          store,
          select: ({ ixRequest }) => ixRequest.stop,
          onChange: handleStopRequest
        });
        observeStore({
          store,
          select: ({ ixRequest }) => ixRequest.clear,
          onChange: handleClearRequest
        });
      }
      function observeMediaQueryChange(store) {
        observeStore({
          store,
          select: ({ ixSession }) => ixSession.mediaQueryKey,
          onChange: () => {
            stopEngine(store);
            clearAllStyles({
              store,
              elementApi: _IX2BrowserApi
            });
            startEngine({
              store,
              allowEvents: true
            });
            dispatchPageUpdateEvent();
          }
        });
      }
      function observeOneRenderTick(store, onTick) {
        const unsubscribe = observeStore({
          store,
          select: ({ ixSession }) => ixSession.tick,
          // @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
          onChange: (tick) => {
            onTick(tick);
            unsubscribe();
          }
        });
      }
      function handlePreviewRequest({ rawData, defer }, store) {
        const start = () => {
          startEngine({
            store,
            rawData,
            allowEvents: true
          });
          dispatchPageUpdateEvent();
        };
        defer ? setTimeout(start, 0) : start();
      }
      function dispatchPageUpdateEvent() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function handlePlaybackRequest(playback, store) {
        const { actionTypeId, actionListId, actionItemId, eventId, allowEvents, immediate, testManual, verbose = true } = playback;
        let { rawData } = playback;
        if (actionListId && actionItemId && rawData && immediate) {
          const actionList = rawData.actionLists[actionListId];
          if (actionList) {
            rawData = reduceListToGroup({
              actionList,
              actionItemId,
              rawData
            });
          }
        }
        startEngine({
          store,
          rawData,
          allowEvents,
          testManual
        });
        if (actionListId && actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
          stopActionGroup({
            store,
            actionListId
          });
          renderInitialGroup({
            store,
            actionListId,
            eventId
          });
          const started = startActionGroup({
            store,
            eventId,
            actionListId,
            immediate,
            verbose
          });
          if (verbose && started) {
            store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
              actionListId,
              isPlaying: !immediate
            }));
          }
        }
      }
      function handleStopRequest({ actionListId }, store) {
        if (actionListId) {
          stopActionGroup({
            store,
            actionListId
          });
        } else {
          stopAllActionGroups({
            store
          });
        }
        stopEngine(store);
      }
      function handleClearRequest(state, store) {
        stopEngine(store);
        clearAllStyles({
          store,
          elementApi: _IX2BrowserApi
        });
      }
      function startEngine({ store, rawData, allowEvents, testManual }) {
        const { ixSession } = store.getState();
        if (rawData) {
          store.dispatch((0, _IX2EngineActions.rawDataImported)(rawData));
        }
        if (!ixSession.active) {
          store.dispatch((0, _IX2EngineActions.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR)),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
          }));
          if (allowEvents) {
            bindEvents(store);
            addDocumentClass();
            if (store.getState().ixSession.hasDefinedMediaQueries) {
              observeMediaQueryChange(store);
            }
          }
          store.dispatch((0, _IX2EngineActions.sessionStarted)());
          startRenderLoop(store, testManual);
        }
      }
      function addDocumentClass() {
        const { documentElement } = document;
        if (documentElement.className.indexOf(W_MOD_IX) === -1) {
          documentElement.className += ` ${W_MOD_IX}`;
        }
      }
      function startRenderLoop(store, testManual) {
        const handleFrame = (now) => {
          const { ixSession, ixParameters } = store.getState();
          if (ixSession.active) {
            store.dispatch((0, _IX2EngineActions.animationFrameChanged)(now, ixParameters));
            if (testManual) {
              observeOneRenderTick(store, handleFrame);
            } else {
              requestAnimationFrame(handleFrame);
            }
          }
        };
        handleFrame(window.performance.now());
      }
      function stopEngine(store) {
        const { ixSession } = store.getState();
        if (ixSession.active) {
          const { eventListeners } = ixSession;
          eventListeners.forEach(clearEventListener);
          clearObjectCache();
          store.dispatch((0, _IX2EngineActions.sessionStopped)());
        }
      }
      function clearEventListener({ target, listenerParams }) {
        target.removeEventListener.apply(target, listenerParams);
      }
      function createGroupInstances({
        // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
        store,
        // @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
        eventStateKey,
        // @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
        eventTarget,
        // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
        eventId,
        // @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
        eventConfig,
        // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
        actionListId,
        // @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
        parameterGroup,
        // @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
        smoothing,
        // @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
        restingValue
      }) {
        const { ixData, ixSession } = store.getState();
        const { events } = ixData;
        const event = events[eventId];
        const { eventTypeId } = event;
        const targetCache = {};
        const instanceActionGroups = {};
        const instanceConfigs = [];
        const { continuousActionGroups } = parameterGroup;
        let { id: parameterId } = parameterGroup;
        if (shouldNamespaceEventParameter(eventTypeId, eventConfig)) {
          parameterId = getNamespacedParameterId(eventStateKey, parameterId);
        }
        const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? _IX2BrowserApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
        continuousActionGroups.forEach((actionGroup) => {
          const { keyframe, actionItems } = actionGroup;
          actionItems.forEach((actionItem) => {
            const { actionTypeId } = actionItem;
            const { target } = actionItem.config;
            if (!target) {
              return;
            }
            const elementRoot = target.boundaryMode ? eventElementRoot : null;
            const key = stringifyTarget(target) + COLON_DELIMITER + actionTypeId;
            instanceActionGroups[key] = appendActionItem(instanceActionGroups[key], keyframe, actionItem);
            if (!targetCache[key]) {
              targetCache[key] = true;
              const { config } = actionItem;
              getAffectedElements({
                config,
                event,
                eventTarget,
                elementRoot,
                elementApi: _IX2BrowserApi
              }).forEach((element) => {
                instanceConfigs.push({
                  element,
                  key
                });
              });
            }
          });
        });
        instanceConfigs.forEach(({ element, key }) => {
          const actionGroups = instanceActionGroups[key];
          const actionItem = (0, _get.default)(actionGroups, `[0].actionItems[0]`, {});
          const { actionTypeId } = actionItem;
          const shouldUsePlugin = (
            // If it's targeted by class, don't query the element by pluginElementId
            actionTypeId === _sharedconstants.ActionTypeConsts.PLUGIN_RIVE ? (actionItem.config?.target?.selectorGuids || []).length === 0 : isPluginType(actionTypeId)
          );
          const pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)(element, actionItem) : null;
          const destination = getDestinationValues(
            {
              element,
              actionItem,
              elementApi: _IX2BrowserApi
            },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            pluginInstance
          );
          createInstance({
            store,
            element,
            eventId,
            actionListId,
            actionItem,
            destination,
            continuous: true,
            parameterId,
            actionGroups,
            smoothing,
            restingValue,
            pluginInstance
          });
        });
      }
      function appendActionItem(actionGroups = [], keyframe, actionItem) {
        const newActionGroups = [
          ...actionGroups
        ];
        let groupIndex;
        newActionGroups.some((group, index) => {
          if (group.keyframe === keyframe) {
            groupIndex = index;
            return true;
          }
          return false;
        });
        if (groupIndex == null) {
          groupIndex = newActionGroups.length;
          newActionGroups.push({
            keyframe,
            actionItems: []
          });
        }
        newActionGroups[groupIndex].actionItems.push(actionItem);
        return newActionGroups;
      }
      function bindEvents(store) {
        const { ixData } = store.getState();
        const { eventTypeMap } = ixData;
        updateViewportWidth(store);
        (0, _forEach.default)(eventTypeMap, (events, key) => {
          const logic = _IX2VanillaEvents.default[key];
          if (!logic) {
            console.warn(`IX2 event type not configured: ${key}`);
            return;
          }
          bindEventType({
            // @ts-expect-error - TS7031 - Binding element 'logic' implicitly has an 'any' type.
            logic,
            store,
            events
          });
        });
        const { ixSession } = store.getState();
        if (ixSession.eventListeners.length) {
          bindResizeEvents(store);
        }
      }
      var WINDOW_RESIZE_EVENTS = [
        "resize",
        "orientationchange"
      ];
      function bindResizeEvents(store) {
        const handleResize = () => {
          updateViewportWidth(store);
        };
        WINDOW_RESIZE_EVENTS.forEach((type) => {
          window.addEventListener(type, handleResize);
          store.dispatch((0, _IX2EngineActions.eventListenerAdded)(window, [
            type,
            handleResize
          ]));
        });
        handleResize();
      }
      function updateViewportWidth(store) {
        const { ixSession, ixData } = store.getState();
        const width = window.innerWidth;
        if (width !== ixSession.viewportWidth) {
          const { mediaQueries } = ixData;
          store.dispatch((0, _IX2EngineActions.viewportWidthChanged)({
            width,
            mediaQueries
          }));
        }
      }
      var mapFoundValues = (object, iteratee) => (0, _omitBy.default)((0, _mapValues.default)(object, iteratee), _isEmpty.default);
      var forEachEventTarget = (eventTargets, eventCallback) => {
        (0, _forEach.default)(eventTargets, (elements, eventId) => {
          elements.forEach((element, index) => {
            const eventStateKey = eventId + COLON_DELIMITER + index;
            eventCallback(element, eventId, eventStateKey);
          });
        });
      };
      var getAffectedForEvent = (event) => {
        const config = {
          target: event.target,
          targets: event.targets
        };
        return getAffectedElements({
          config,
          elementApi: _IX2BrowserApi
        });
      };
      function bindEventType({ logic, store, events }) {
        injectBehaviorCSSFixes(events);
        const { types: eventTypes, handler: eventHandler } = logic;
        const { ixData } = store.getState();
        const { actionLists } = ixData;
        const eventTargets = mapFoundValues(events, getAffectedForEvent);
        if (!(0, _size.default)(eventTargets)) {
          return;
        }
        (0, _forEach.default)(eventTargets, (elements, key) => {
          const event = events[key];
          const { action: eventAction, id: eventId, mediaQueries = ixData.mediaQueryKeys } = event;
          const { actionListId } = eventAction.config;
          if (!mediaQueriesEqual(mediaQueries, ixData.mediaQueryKeys)) {
            store.dispatch((0, _IX2EngineActions.mediaQueriesDefined)());
          }
          if (eventAction.actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
            const configs = Array.isArray(event.config) ? event.config : [
              event.config
            ];
            configs.forEach((eventConfig) => {
              const { continuousParameterGroupId } = eventConfig;
              const paramGroups = (0, _get.default)(actionLists, `${actionListId}.continuousParameterGroups`, []);
              const parameterGroup = (0, _find.default)(paramGroups, ({ id }) => id === continuousParameterGroupId);
              const smoothing = (eventConfig.smoothing || 0) / 100;
              const restingValue = (eventConfig.restingState || 0) / 100;
              if (!parameterGroup) {
                return;
              }
              elements.forEach((eventTarget, index) => {
                const eventStateKey = eventId + COLON_DELIMITER + index;
                createGroupInstances({
                  store,
                  eventStateKey,
                  eventTarget,
                  eventId,
                  eventConfig,
                  actionListId,
                  parameterGroup,
                  smoothing,
                  restingValue
                });
              });
            });
          }
          if (eventAction.actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
            renderInitialGroup({
              store,
              actionListId,
              eventId
            });
          }
        });
        const handleEvent = (nativeEvent) => {
          const { ixSession } = store.getState();
          forEachEventTarget(eventTargets, (element, eventId, eventStateKey) => {
            const event = events[eventId];
            const oldState = ixSession.eventState[eventStateKey];
            const { action: eventAction, mediaQueries = ixData.mediaQueryKeys } = event;
            if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
              return;
            }
            const handleEventWithConfig = (eventConfig = {}) => {
              const newState = eventHandler({
                store,
                element,
                event,
                eventConfig,
                nativeEvent,
                eventStateKey
              }, oldState);
              if (!shallowEqual(newState, oldState)) {
                store.dispatch((0, _IX2EngineActions.eventStateChanged)(eventStateKey, newState));
              }
            };
            if (eventAction.actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
              const configs = Array.isArray(event.config) ? event.config : [
                event.config
              ];
              configs.forEach(handleEventWithConfig);
            } else {
              handleEventWithConfig();
            }
          });
        };
        const handleEventThrottled = (0, _throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
        const addListeners = ({
          target = document,
          // @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
          types,
          // @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
          throttle: shouldThrottle
        }) => {
          types.split(" ").filter(Boolean).forEach((type) => {
            const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
            target.addEventListener(type, handlerFunc);
            store.dispatch((0, _IX2EngineActions.eventListenerAdded)(target, [
              type,
              handlerFunc
            ]));
          });
        };
        if (Array.isArray(eventTypes)) {
          eventTypes.forEach(addListeners);
        } else if (typeof eventTypes === "string") {
          addListeners(logic);
        }
      }
      function injectBehaviorCSSFixes(events) {
        if (!IS_MOBILE_SAFARI) {
          return;
        }
        const injectedSelectors = {};
        let cssText = "";
        for (const eventId in events) {
          const { eventTypeId, target } = events[eventId];
          const selector = _IX2BrowserApi.getQuerySelector(target);
          if (injectedSelectors[selector]) {
            continue;
          }
          if (eventTypeId === _sharedconstants.EventTypeConsts.MOUSE_CLICK || eventTypeId === _sharedconstants.EventTypeConsts.MOUSE_SECOND_CLICK) {
            injectedSelectors[selector] = true;
            cssText += selector + "{cursor: pointer;touch-action: manipulation;}";
          }
        }
        if (cssText) {
          const style = document.createElement("style");
          style.textContent = cssText;
          document.body.appendChild(style);
        }
      }
      function renderInitialGroup({ store, actionListId, eventId }) {
        const { ixData, ixSession } = store.getState();
        const { actionLists, events } = ixData;
        const event = events[eventId];
        const actionList = actionLists[actionListId];
        if (actionList && actionList.useFirstGroupAsInitialState) {
          const initialStateItems = (0, _get.default)(actionList, "actionItemGroups[0].actionItems", []);
          const mediaQueries = (0, _get.default)(event, "mediaQueries", ixData.mediaQueryKeys);
          if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
            return;
          }
          initialStateItems.forEach((actionItem) => {
            const { config: itemConfig, actionTypeId } = actionItem;
            const config = (
              // When useEventTarget is explicitly true, use event target/targets to query elements
              // However, skip this condition when objectId is defined
              // @ts-expect-error - Property 'target' does not exist on type 'never'.
              itemConfig?.target?.useEventTarget === true && // @ts-expect-error - Property 'target' does not exist on type 'never'.
              itemConfig?.target?.objectId == null ? {
                target: event.target,
                targets: event.targets
              } : itemConfig
            );
            const itemElements = getAffectedElements({
              config,
              event,
              elementApi: _IX2BrowserApi
            });
            const shouldUsePlugin = isPluginType(actionTypeId);
            itemElements.forEach((element) => {
              const pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)(element, actionItem) : null;
              createInstance({
                destination: getDestinationValues(
                  {
                    element,
                    actionItem,
                    elementApi: _IX2BrowserApi
                  },
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  pluginInstance
                ),
                immediate: true,
                store,
                element,
                eventId,
                actionItem,
                actionListId,
                pluginInstance
              });
            });
          });
        }
      }
      function stopAllActionGroups({ store }) {
        const { ixInstances } = store.getState();
        (0, _forEach.default)(ixInstances, (instance) => {
          if (!instance.continuous) {
            const { actionListId, verbose } = instance;
            removeInstance(instance, store);
            if (verbose) {
              store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                actionListId,
                isPlaying: false
              }));
            }
          }
        });
      }
      function stopActionGroup({
        // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
        store,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        eventId,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        eventTarget,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        eventStateKey,
        // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
        actionListId
      }) {
        const { ixInstances, ixSession } = store.getState();
        const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? _IX2BrowserApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
        (0, _forEach.default)(ixInstances, (instance) => {
          const boundaryMode = (0, _get.default)(instance, "actionItem.config.target.boundaryMode");
          const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
          if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
            if (eventElementRoot && boundaryMode && !_IX2BrowserApi.elementContains(eventElementRoot, instance.element)) {
              return;
            }
            removeInstance(instance, store);
            if (instance.verbose) {
              store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                actionListId,
                isPlaying: false
              }));
            }
          }
        });
      }
      function startActionGroup({
        // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
        store,
        // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
        eventId,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        eventTarget,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        eventStateKey,
        // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
        actionListId,
        groupIndex = 0,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        immediate,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        verbose
      }) {
        const { ixData, ixSession } = store.getState();
        const { events } = ixData;
        const event = events[eventId] || {};
        const { mediaQueries = ixData.mediaQueryKeys } = event;
        const actionList = (0, _get.default)(ixData, `actionLists.${actionListId}`, {});
        const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
        if (!actionItemGroups || !actionItemGroups.length) {
          return false;
        }
        if (groupIndex >= actionItemGroups.length && (0, _get.default)(event, "config.loop")) {
          groupIndex = 0;
        }
        if (groupIndex === 0 && useFirstGroupAsInitialState) {
          groupIndex++;
        }
        const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
        const instanceDelay = isFirstGroup && isQuickEffect(event.action?.actionTypeId) ? event.config.delay : void 0;
        const actionItems = (0, _get.default)(actionItemGroups, [
          groupIndex,
          "actionItems"
        ], []);
        if (!actionItems.length) {
          return false;
        }
        if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
          return false;
        }
        const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? _IX2BrowserApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
        const carrierIndex = getMaxDurationItemIndex(actionItems);
        let groupStartResult = false;
        actionItems.forEach((actionItem, actionIndex) => {
          const { config, actionTypeId } = actionItem;
          const shouldUsePlugin = isPluginType(actionTypeId);
          const { target } = config;
          if (!target) {
            return;
          }
          const elementRoot = target.boundaryMode ? eventElementRoot : null;
          const elements = getAffectedElements({
            config,
            event,
            eventTarget,
            elementRoot,
            elementApi: _IX2BrowserApi
          });
          elements.forEach((element, elementIndex) => {
            const pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)(element, actionItem) : null;
            const pluginDuration = shouldUsePlugin ? getPluginDuration(actionTypeId)(element, actionItem) : null;
            groupStartResult = true;
            const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
            const computedStyle = getComputedStyle2({
              element,
              actionItem
            });
            const destination = getDestinationValues(
              {
                element,
                actionItem,
                elementApi: _IX2BrowserApi
              },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              pluginInstance
            );
            createInstance({
              store,
              element,
              actionItem,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              isCarrier,
              computedStyle,
              destination,
              immediate,
              verbose,
              pluginInstance,
              pluginDuration,
              instanceDelay
            });
          });
        });
        return groupStartResult;
      }
      function createInstance(options) {
        const { store, computedStyle, ...rest } = options;
        const { element, actionItem, immediate, pluginInstance, continuous, restingValue, eventId } = rest;
        const autoStart = !continuous;
        const instanceId = getInstanceId();
        const { ixElements, ixSession, ixData } = store.getState();
        const elementId = getElementId(ixElements, element);
        const { refState } = ixElements[elementId] || {};
        const refType = _IX2BrowserApi.getRefType(element);
        const skipMotion = (
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
          ixSession.reducedMotion && _sharedconstants.ReducedMotionTypes[actionItem.actionTypeId]
        );
        let skipToValue;
        if (skipMotion && continuous) {
          switch (ixData.events[eventId]?.eventTypeId) {
            case _sharedconstants.EventTypeConsts.MOUSE_MOVE:
            case _sharedconstants.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              skipToValue = restingValue;
              break;
            default:
              skipToValue = 0.5;
              break;
          }
        }
        const origin = getInstanceOrigin(
          element,
          refState,
          computedStyle,
          actionItem,
          _IX2BrowserApi,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          pluginInstance
        );
        store.dispatch((0, _IX2EngineActions.instanceAdded)({
          instanceId,
          elementId,
          origin,
          refType,
          skipMotion,
          skipToValue,
          ...rest
        }));
        dispatchCustomEvent(document.body, "ix2-animation-started", instanceId);
        if (immediate) {
          renderImmediateInstance(store, instanceId);
          return;
        }
        observeStore({
          store,
          // @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
          select: ({ ixInstances }) => ixInstances[instanceId],
          onChange: handleInstanceChange
        });
        if (autoStart) {
          store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, ixSession.tick));
        }
      }
      function removeInstance(instance, store) {
        dispatchCustomEvent(document.body, "ix2-animation-stopping", {
          instanceId: instance.id,
          state: store.getState()
        });
        const { elementId, actionItem } = instance;
        const { ixElements } = store.getState();
        const { ref, refType } = ixElements[elementId] || {};
        if (refType === HTML_ELEMENT) {
          cleanupHTMLElement(ref, actionItem, _IX2BrowserApi);
        }
        store.dispatch((0, _IX2EngineActions.instanceRemoved)(instance.id));
      }
      function dispatchCustomEvent(element, eventName, detail) {
        const event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, detail);
        element.dispatchEvent(event);
      }
      function renderImmediateInstance(store, instanceId) {
        const { ixParameters } = store.getState();
        store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, 0));
        store.dispatch((0, _IX2EngineActions.animationFrameChanged)(performance.now(), ixParameters));
        const { ixInstances } = store.getState();
        handleInstanceChange(ixInstances[instanceId], store);
      }
      function handleInstanceChange(instance, store) {
        const { active, continuous, complete, elementId, actionItem, actionTypeId, renderType, current, groupIndex, eventId, eventTarget, eventStateKey, actionListId, isCarrier, styleProp, verbose, pluginInstance } = instance;
        const { ixData, ixSession } = store.getState();
        const { events } = ixData;
        const event = events && events[eventId] ? events[eventId] : {};
        const { mediaQueries = ixData.mediaQueryKeys } = event;
        if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
          return;
        }
        if (continuous || active || complete) {
          if (current || renderType === RENDER_GENERAL && complete) {
            store.dispatch((0, _IX2EngineActions.elementStateChanged)(elementId, actionTypeId, current, actionItem));
            const { ixElements } = store.getState();
            const { ref, refType, refState } = ixElements[elementId] || {};
            const actionState = refState && refState[actionTypeId];
            if (refType === HTML_ELEMENT || isPluginType(actionTypeId)) {
              renderHTMLElement(ref, refState, actionState, eventId, actionItem, styleProp, _IX2BrowserApi, renderType, pluginInstance);
            }
          }
          if (complete) {
            if (isCarrier) {
              const started = startActionGroup({
                store,
                eventId,
                eventTarget,
                eventStateKey,
                actionListId,
                groupIndex: groupIndex + 1,
                verbose
              });
              if (verbose && !started) {
                store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                  actionListId,
                  isPlaying: false
                }));
              }
            }
            removeInstance(instance, store);
          }
        }
      }
    }
  });

  // ../../app/packages/systems/ix2/engine/index.js
  var require_engine = __commonJS({
    "../../app/packages/systems/ix2/engine/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        actions: function() {
          return _IX2EngineActions;
        },
        destroy: function() {
          return destroy;
        },
        init: function() {
          return init;
        },
        setEnv: function() {
          return setEnv;
        },
        store: function() {
          return store;
        }
      });
      var _redux = require_lib2();
      var _IX2Reducer = /* @__PURE__ */ _interop_require_default(require_IX2Reducer());
      var _IX2VanillaEngine = require_IX2VanillaEngine();
      var _IX2EngineActions = /* @__PURE__ */ _interop_require_wildcard(require_IX2EngineActions());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      var store = (0, _redux.createStore)(_IX2Reducer.default);
      function setEnv(env) {
        if (env()) {
          (0, _IX2VanillaEngine.observeRequests)(store);
        }
      }
      function init(rawData) {
        destroy();
        (0, _IX2VanillaEngine.startEngine)({
          store,
          rawData,
          allowEvents: true
        });
      }
      function destroy() {
        (0, _IX2VanillaEngine.stopEngine)(store);
      }
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js
  var require_webflow_ix2 = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var ix2 = require_engine();
      ix2.setEnv(Webflow.env);
      Webflow.define("ix2", module.exports = function() {
        return ix2;
      });
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
  var require_webflow_ix_events = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
      "use strict";
      var $ = window.jQuery;
      var api = {};
      var eventQueue = [];
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          el.__wf_intro = null;
        },
        intro: function(i, el) {
          if (el.__wf_intro) {
            return;
          }
          el.__wf_intro = true;
          $(el).triggerHandler(api.types.INTRO);
        },
        outro: function(i, el) {
          if (!el.__wf_intro) {
            return;
          }
          el.__wf_intro = null;
          $(el).triggerHandler(api.types.OUTRO);
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      api.init = function() {
        var count = eventQueue.length;
        for (var i = 0; i < count; i++) {
          var memo = eventQueue[i];
          memo[0](0, memo[1]);
        }
        eventQueue = [];
        $.extend(api.triggers, eventTriggers);
      };
      api.async = function() {
        for (var key in eventTriggers) {
          var func = eventTriggers[key];
          if (!eventTriggers.hasOwnProperty(key)) {
            continue;
          }
          api.triggers[key] = function(i, el) {
            eventQueue.push([
              func,
              el
            ]);
          };
        }
      };
      api.async();
      module.exports = api;
    }
  });

  // ../../app/packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
  var require_webflow_ix2_events = __commonJS({
    "../../app/packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports, module) {
      "use strict";
      var IXEvents = require_webflow_ix_events();
      function dispatchCustomEvent(element, eventName) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, null);
        element.dispatchEvent(event);
      }
      var $ = window.jQuery;
      var api = {};
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          IXEvents.triggers.reset(i, el);
        },
        intro: function(i, el) {
          IXEvents.triggers.intro(i, el);
          dispatchCustomEvent(el, "COMPONENT_ACTIVE");
        },
        outro: function(i, el) {
          IXEvents.triggers.outro(i, el);
          dispatchCustomEvent(el, "COMPONENT_INACTIVE");
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      $.extend(api.triggers, eventTriggers);
      module.exports = api;
    }
  });

  // a2263627df168b0487a24ba7e582dcba.js
  require_webflow_brand();
  require_webflow_links();
  require_webflow_scroll();
  require_webflow_focus();
  require_webflow_focus_visible();
  require_webflow_touch();
  require_webflow_ix2();
  require_webflow_ix2_events();
})();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
