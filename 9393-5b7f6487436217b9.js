(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9393],
  {
    75394: function (e) {
      e.exports = (function () {
        'use strict';
        for (
          var e = function (e, r, t) {
              return (
                void 0 === r && (r = 0),
                void 0 === t && (t = 1),
                e < r ? r : e > t ? t : e
              );
            },
            r = function (r) {
              (r._clipped = !1), (r._unclipped = r.slice(0));
              for (var t = 0; t <= 3; t++)
                t < 3
                  ? ((r[t] < 0 || r[t] > 255) && (r._clipped = !0),
                    (r[t] = e(r[t], 0, 255)))
                  : 3 === t && (r[t] = e(r[t], 0, 1));
              return r;
            },
            t = {},
            n = 0,
            a = [
              'Boolean',
              'Number',
              'String',
              'Function',
              'Array',
              'Date',
              'RegExp',
              'Undefined',
              'Null',
            ];
          n < a.length;
          n += 1
        ) {
          var f = a[n];
          t['[object ' + f + ']'] = f.toLowerCase();
        }
        var o = function (e) {
            return t[Object.prototype.toString.call(e)] || 'object';
          },
          u = function (e, r) {
            return (
              void 0 === r && (r = null),
              e.length >= 3
                ? Array.prototype.slice.call(e)
                : 'object' == o(e[0]) && r
                ? r
                    .split('')
                    .filter(function (r) {
                      return void 0 !== e[0][r];
                    })
                    .map(function (r) {
                      return e[0][r];
                    })
                : e[0]
            );
          },
          i = function (e) {
            if (e.length < 2) return null;
            var r = e.length - 1;
            return 'string' == o(e[r]) ? e[r].toLowerCase() : null;
          },
          c = Math.PI,
          l = {
            clip_rgb: r,
            limit: e,
            type: o,
            unpack: u,
            last: i,
            PI: c,
            TWOPI: 2 * c,
            PITHIRD: c / 3,
            DEG2RAD: c / 180,
            RAD2DEG: 180 / c,
          },
          s = { format: {}, autodetect: [] },
          d = l.last,
          h = l.clip_rgb,
          b = l.type,
          p = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = this;
            if (
              'object' === b(e[0]) &&
              e[0].constructor &&
              e[0].constructor === this.constructor
            )
              return e[0];
            var n = d(e),
              a = !1;
            if (!n) {
              (a = !0),
                s.sorted ||
                  ((s.autodetect = s.autodetect.sort(function (e, r) {
                    return r.p - e.p;
                  })),
                  (s.sorted = !0));
              for (var f = 0, o = s.autodetect; f < o.length; f += 1) {
                var u = o[f];
                if ((n = u.test.apply(u, e))) break;
              }
            }
            if (!s.format[n]) throw new Error('unknown format: ' + e);
            var i = s.format[n].apply(null, a ? e : e.slice(0, -1));
            (t._rgb = h(i)), 3 === t._rgb.length && t._rgb.push(1);
          };
        p.prototype.toString = function () {
          return 'function' == b(this.hex)
            ? this.hex()
            : '[' + this._rgb.join(',') + ']';
        };
        var v = p,
          g = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              g.Color,
              [null].concat(e)
            ))();
          };
        (g.Color = v), (g.version = '2.1.2');
        var m = g,
          y = l.unpack,
          w = Math.max,
          k = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = y(e, 'rgb'),
              n = t[0],
              a = t[1],
              f = t[2],
              o = 1 - w((n /= 255), w((a /= 255), (f /= 255))),
              u = o < 1 ? 1 / (1 - o) : 0;
            return [(1 - n - o) * u, (1 - a - o) * u, (1 - f - o) * u, o];
          },
          _ = k,
          M = l.unpack,
          N = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = (e = M(e, 'cmyk'))[0],
              n = e[1],
              a = e[2],
              f = e[3],
              o = e.length > 4 ? e[4] : 1;
            return 1 === f
              ? [0, 0, 0, o]
              : [
                  t >= 1 ? 0 : 255 * (1 - t) * (1 - f),
                  n >= 1 ? 0 : 255 * (1 - n) * (1 - f),
                  a >= 1 ? 0 : 255 * (1 - a) * (1 - f),
                  o,
                ];
          },
          O = N,
          x = l.unpack,
          E = l.type;
        (v.prototype.cmyk = function () {
          return _(this._rgb);
        }),
          (m.cmyk = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['cmyk'])
            ))();
          }),
          (s.format.cmyk = O),
          s.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
              if (((e = x(e, 'cmyk')), 'array' === E(e) && 4 === e.length))
                return 'cmyk';
            },
          });
        var P = l.unpack,
          A = l.last,
          j = function (e) {
            return Math.round(100 * e) / 100;
          },
          C = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = P(e, 'hsla'),
              n = A(e) || 'lsa';
            return (
              (t[0] = j(t[0] || 0)),
              (t[1] = j(100 * t[1]) + '%'),
              (t[2] = j(100 * t[2]) + '%'),
              'hsla' === n || (t.length > 3 && t[3] < 1)
                ? ((t[3] = t.length > 3 ? t[3] : 1), (n = 'hsla'))
                : (t.length = 3),
              n + '(' + t.join(',') + ')'
            );
          },
          L = C,
          D = l.unpack,
          F = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = (e = D(e, 'rgba'))[0],
              n = e[1],
              a = e[2];
            (t /= 255), (n /= 255), (a /= 255);
            var f,
              o,
              u = Math.min(t, n, a),
              i = Math.max(t, n, a),
              c = (i + u) / 2;
            return (
              i === u
                ? ((f = 0), (o = Number.NaN))
                : (f = c < 0.5 ? (i - u) / (i + u) : (i - u) / (2 - i - u)),
              t == i
                ? (o = (n - a) / (i - u))
                : n == i
                ? (o = 2 + (a - t) / (i - u))
                : a == i && (o = 4 + (t - n) / (i - u)),
              (o *= 60) < 0 && (o += 360),
              e.length > 3 && void 0 !== e[3] ? [o, f, c, e[3]] : [o, f, c]
            );
          },
          R = F,
          G = l.unpack,
          S = l.last,
          I = Math.round,
          q = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = G(e, 'rgba'),
              n = S(e) || 'rgb';
            return 'hsl' == n.substr(0, 3)
              ? L(R(t), n)
              : ((t[0] = I(t[0])),
                (t[1] = I(t[1])),
                (t[2] = I(t[2])),
                ('rgba' === n || (t.length > 3 && t[3] < 1)) &&
                  ((t[3] = t.length > 3 ? t[3] : 1), (n = 'rgba')),
                n + '(' + t.slice(0, 'rgb' === n ? 3 : 4).join(',') + ')');
          },
          T = q,
          B = l.unpack,
          V = Math.round,
          Y = function () {
            for (var e, r = [], t = arguments.length; t--; )
              r[t] = arguments[t];
            var n,
              a,
              f,
              o = (r = B(r, 'hsl'))[0],
              u = r[1],
              i = r[2];
            if (0 === u) n = a = f = 255 * i;
            else {
              var c = [0, 0, 0],
                l = [0, 0, 0],
                s = i < 0.5 ? i * (1 + u) : i + u - i * u,
                d = 2 * i - s,
                h = o / 360;
              (c[0] = h + 1 / 3), (c[1] = h), (c[2] = h - 1 / 3);
              for (var b = 0; b < 3; b++)
                c[b] < 0 && (c[b] += 1),
                  c[b] > 1 && (c[b] -= 1),
                  6 * c[b] < 1
                    ? (l[b] = d + 6 * (s - d) * c[b])
                    : 2 * c[b] < 1
                    ? (l[b] = s)
                    : 3 * c[b] < 2
                    ? (l[b] = d + (s - d) * (2 / 3 - c[b]) * 6)
                    : (l[b] = d);
              (n = (e = [V(255 * l[0]), V(255 * l[1]), V(255 * l[2])])[0]),
                (a = e[1]),
                (f = e[2]);
            }
            return r.length > 3 ? [n, a, f, r[3]] : [n, a, f, 1];
          },
          z = Y,
          $ = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
          X =
            /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
          U =
            /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
          W =
            /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
          H =
            /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
          K =
            /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
          Z = Math.round,
          J = function (e) {
            var r;
            if (((e = e.toLowerCase().trim()), s.format.named))
              try {
                return s.format.named(e);
              } catch (p) {}
            if ((r = e.match($))) {
              for (var t = r.slice(1, 4), n = 0; n < 3; n++) t[n] = +t[n];
              return (t[3] = 1), t;
            }
            if ((r = e.match(X))) {
              for (var a = r.slice(1, 5), f = 0; f < 4; f++) a[f] = +a[f];
              return a;
            }
            if ((r = e.match(U))) {
              for (var o = r.slice(1, 4), u = 0; u < 3; u++)
                o[u] = Z(2.55 * o[u]);
              return (o[3] = 1), o;
            }
            if ((r = e.match(W))) {
              for (var i = r.slice(1, 5), c = 0; c < 3; c++)
                i[c] = Z(2.55 * i[c]);
              return (i[3] = +i[3]), i;
            }
            if ((r = e.match(H))) {
              var l = r.slice(1, 4);
              (l[1] *= 0.01), (l[2] *= 0.01);
              var d = z(l);
              return (d[3] = 1), d;
            }
            if ((r = e.match(K))) {
              var h = r.slice(1, 4);
              (h[1] *= 0.01), (h[2] *= 0.01);
              var b = z(h);
              return (b[3] = +r[4]), b;
            }
          };
        J.test = function (e) {
          return (
            $.test(e) ||
            X.test(e) ||
            U.test(e) ||
            W.test(e) ||
            H.test(e) ||
            K.test(e)
          );
        };
        var Q = J,
          ee = l.type;
        (v.prototype.css = function (e) {
          return T(this._rgb, e);
        }),
          (m.css = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['css'])
            ))();
          }),
          (s.format.css = Q),
          s.autodetect.push({
            p: 5,
            test: function (e) {
              for (var r = [], t = arguments.length - 1; t-- > 0; )
                r[t] = arguments[t + 1];
              if (!r.length && 'string' === ee(e) && Q.test(e)) return 'css';
            },
          });
        var re = l.unpack;
        (s.format.gl = function () {
          for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
          var t = re(e, 'rgba');
          return (t[0] *= 255), (t[1] *= 255), (t[2] *= 255), t;
        }),
          (m.gl = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['gl'])
            ))();
          }),
          (v.prototype.gl = function () {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
          });
        var te = l.unpack,
          ne = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t,
              n = te(e, 'rgb'),
              a = n[0],
              f = n[1],
              o = n[2],
              u = Math.min(a, f, o),
              i = Math.max(a, f, o),
              c = i - u,
              l = (100 * c) / 255,
              s = (u / (255 - c)) * 100;
            return (
              0 === c
                ? (t = Number.NaN)
                : (a === i && (t = (f - o) / c),
                  f === i && (t = 2 + (o - a) / c),
                  o === i && (t = 4 + (a - f) / c),
                  (t *= 60) < 0 && (t += 360)),
              [t, l, s]
            );
          },
          ae = ne,
          fe = l.unpack,
          oe = Math.floor,
          ue = function () {
            for (var e, r, t, n, a, f, o = [], u = arguments.length; u--; )
              o[u] = arguments[u];
            var i,
              c,
              l,
              s = (o = fe(o, 'hcg'))[0],
              d = o[1],
              h = o[2];
            h *= 255;
            var b = 255 * d;
            if (0 === d) i = c = l = h;
            else {
              360 === s && (s = 0), s > 360 && (s -= 360), s < 0 && (s += 360);
              var p = oe((s /= 60)),
                v = s - p,
                g = h * (1 - d),
                m = g + b * (1 - v),
                y = g + b * v,
                w = g + b;
              switch (p) {
                case 0:
                  (i = (e = [w, y, g])[0]), (c = e[1]), (l = e[2]);
                  break;
                case 1:
                  (i = (r = [m, w, g])[0]), (c = r[1]), (l = r[2]);
                  break;
                case 2:
                  (i = (t = [g, w, y])[0]), (c = t[1]), (l = t[2]);
                  break;
                case 3:
                  (i = (n = [g, m, w])[0]), (c = n[1]), (l = n[2]);
                  break;
                case 4:
                  (i = (a = [y, g, w])[0]), (c = a[1]), (l = a[2]);
                  break;
                case 5:
                  (i = (f = [w, g, m])[0]), (c = f[1]), (l = f[2]);
              }
            }
            return [i, c, l, o.length > 3 ? o[3] : 1];
          },
          ie = ue,
          ce = l.unpack,
          le = l.type;
        (v.prototype.hcg = function () {
          return ae(this._rgb);
        }),
          (m.hcg = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['hcg'])
            ))();
          }),
          (s.format.hcg = ie),
          s.autodetect.push({
            p: 1,
            test: function () {
              for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
              if (((e = ce(e, 'hcg')), 'array' === le(e) && 3 === e.length))
                return 'hcg';
            },
          });
        var se = l.unpack,
          de = l.last,
          he = Math.round,
          be = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = se(e, 'rgba'),
              n = t[0],
              a = t[1],
              f = t[2],
              o = t[3],
              u = de(e) || 'auto';
            void 0 === o && (o = 1),
              'auto' === u && (u = o < 1 ? 'rgba' : 'rgb');
            var i =
              '000000' +
              (((n = he(n)) << 16) | ((a = he(a)) << 8) | (f = he(f))).toString(
                16
              );
            i = i.substr(i.length - 6);
            var c = '0' + he(255 * o).toString(16);
            switch (((c = c.substr(c.length - 2)), u.toLowerCase())) {
              case 'rgba':
                return '#' + i + c;
              case 'argb':
                return '#' + c + i;
              default:
                return '#' + i;
            }
          },
          pe = be,
          ve = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
          ge = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
          me = function (e) {
            if (e.match(ve)) {
              (4 !== e.length && 7 !== e.length) || (e = e.substr(1)),
                3 === e.length &&
                  (e = (e = e.split(''))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
              var r = parseInt(e, 16);
              return [r >> 16, (r >> 8) & 255, 255 & r, 1];
            }
            if (e.match(ge)) {
              (5 !== e.length && 9 !== e.length) || (e = e.substr(1)),
                4 === e.length &&
                  (e =
                    (e = e.split(''))[0] +
                    e[0] +
                    e[1] +
                    e[1] +
                    e[2] +
                    e[2] +
                    e[3] +
                    e[3]);
              var t = parseInt(e, 16);
              return [
                (t >> 24) & 255,
                (t >> 16) & 255,
                (t >> 8) & 255,
                Math.round(((255 & t) / 255) * 100) / 100,
              ];
            }
            throw new Error('unknown hex color: ' + e);
          },
          ye = l.type;
        (v.prototype.hex = function (e) {
          return pe(this._rgb, e);
        }),
          (m.hex = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['hex'])
            ))();
          }),
          (s.format.hex = me),
          s.autodetect.push({
            p: 4,
            test: function (e) {
              for (var r = [], t = arguments.length - 1; t-- > 0; )
                r[t] = arguments[t + 1];
              if (
                !r.length &&
                'string' === ye(e) &&
                [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0
              )
                return 'hex';
            },
          });
        var we = l.unpack,
          ke = l.TWOPI,
          _e = Math.min,
          Me = Math.sqrt,
          Ne = Math.acos,
          Oe = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t,
              n = we(e, 'rgb'),
              a = n[0],
              f = n[1],
              o = n[2],
              u = _e((a /= 255), (f /= 255), (o /= 255)),
              i = (a + f + o) / 3,
              c = i > 0 ? 1 - u / i : 0;
            return (
              0 === c
                ? (t = NaN)
                : ((t = (a - f + (a - o)) / 2),
                  (t /= Me((a - f) * (a - f) + (a - o) * (f - o))),
                  (t = Ne(t)),
                  o > f && (t = ke - t),
                  (t /= ke)),
              [360 * t, c, i]
            );
          },
          xe = Oe,
          Ee = l.unpack,
          Pe = l.limit,
          Ae = l.TWOPI,
          je = l.PITHIRD,
          Ce = Math.cos,
          Le = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t,
              n,
              a,
              f = (e = Ee(e, 'hsi'))[0],
              o = e[1],
              u = e[2];
            return (
              isNaN(f) && (f = 0),
              isNaN(o) && (o = 0),
              f > 360 && (f -= 360),
              f < 0 && (f += 360),
              (f /= 360) < 1 / 3
                ? (n =
                    1 -
                    ((a = (1 - o) / 3) +
                      (t = (1 + (o * Ce(Ae * f)) / Ce(je - Ae * f)) / 3)))
                : f < 2 / 3
                ? (a =
                    1 -
                    ((t = (1 - o) / 3) +
                      (n =
                        (1 + (o * Ce(Ae * (f -= 1 / 3))) / Ce(je - Ae * f)) /
                        3)))
                : (t =
                    1 -
                    ((n = (1 - o) / 3) +
                      (a =
                        (1 + (o * Ce(Ae * (f -= 2 / 3))) / Ce(je - Ae * f)) /
                        3))),
              [
                255 * (t = Pe(u * t * 3)),
                255 * (n = Pe(u * n * 3)),
                255 * (a = Pe(u * a * 3)),
                e.length > 3 ? e[3] : 1,
              ]
            );
          },
          De = Le,
          Fe = l.unpack,
          Re = l.type;
        (v.prototype.hsi = function () {
          return xe(this._rgb);
        }),
          (m.hsi = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['hsi'])
            ))();
          }),
          (s.format.hsi = De),
          s.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
              if (((e = Fe(e, 'hsi')), 'array' === Re(e) && 3 === e.length))
                return 'hsi';
            },
          });
        var Ge = l.unpack,
          Se = l.type;
        (v.prototype.hsl = function () {
          return R(this._rgb);
        }),
          (m.hsl = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['hsl'])
            ))();
          }),
          (s.format.hsl = z),
          s.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
              if (((e = Ge(e, 'hsl')), 'array' === Se(e) && 3 === e.length))
                return 'hsl';
            },
          });
        var Ie = l.unpack,
          qe = Math.min,
          Te = Math.max,
          Be = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t,
              n,
              a,
              f = (e = Ie(e, 'rgb'))[0],
              o = e[1],
              u = e[2],
              i = qe(f, o, u),
              c = Te(f, o, u),
              l = c - i;
            return (
              (a = c / 255),
              0 === c
                ? ((t = Number.NaN), (n = 0))
                : ((n = l / c),
                  f === c && (t = (o - u) / l),
                  o === c && (t = 2 + (u - f) / l),
                  u === c && (t = 4 + (f - o) / l),
                  (t *= 60) < 0 && (t += 360)),
              [t, n, a]
            );
          },
          Ve = Be,
          Ye = l.unpack,
          ze = Math.floor,
          $e = function () {
            for (var e, r, t, n, a, f, o = [], u = arguments.length; u--; )
              o[u] = arguments[u];
            var i,
              c,
              l,
              s = (o = Ye(o, 'hsv'))[0],
              d = o[1],
              h = o[2];
            if (((h *= 255), 0 === d)) i = c = l = h;
            else {
              360 === s && (s = 0), s > 360 && (s -= 360), s < 0 && (s += 360);
              var b = ze((s /= 60)),
                p = s - b,
                v = h * (1 - d),
                g = h * (1 - d * p),
                m = h * (1 - d * (1 - p));
              switch (b) {
                case 0:
                  (i = (e = [h, m, v])[0]), (c = e[1]), (l = e[2]);
                  break;
                case 1:
                  (i = (r = [g, h, v])[0]), (c = r[1]), (l = r[2]);
                  break;
                case 2:
                  (i = (t = [v, h, m])[0]), (c = t[1]), (l = t[2]);
                  break;
                case 3:
                  (i = (n = [v, g, h])[0]), (c = n[1]), (l = n[2]);
                  break;
                case 4:
                  (i = (a = [m, v, h])[0]), (c = a[1]), (l = a[2]);
                  break;
                case 5:
                  (i = (f = [h, v, g])[0]), (c = f[1]), (l = f[2]);
              }
            }
            return [i, c, l, o.length > 3 ? o[3] : 1];
          },
          Xe = $e,
          Ue = l.unpack,
          We = l.type;
        (v.prototype.hsv = function () {
          return Ve(this._rgb);
        }),
          (m.hsv = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['hsv'])
            ))();
          }),
          (s.format.hsv = Xe),
          s.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
              if (((e = Ue(e, 'hsv')), 'array' === We(e) && 3 === e.length))
                return 'hsv';
            },
          });
        var He = {
            Kn: 18,
            Xn: 0.95047,
            Yn: 1,
            Zn: 1.08883,
            t0: 0.137931034,
            t1: 0.206896552,
            t2: 0.12841855,
            t3: 0.008856452,
          },
          Ke = l.unpack,
          Ze = Math.pow,
          Je = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = Ke(e, 'rgb'),
              n = t[0],
              a = t[1],
              f = t[2],
              o = rr(n, a, f),
              u = o[0],
              i = o[1],
              c = 116 * i - 16;
            return [c < 0 ? 0 : c, 500 * (u - i), 200 * (i - o[2])];
          },
          Qe = function (e) {
            return (e /= 255) <= 0.04045
              ? e / 12.92
              : Ze((e + 0.055) / 1.055, 2.4);
          },
          er = function (e) {
            return e > He.t3 ? Ze(e, 1 / 3) : e / He.t2 + He.t0;
          },
          rr = function (e, r, t) {
            return (
              (e = Qe(e)),
              (r = Qe(r)),
              (t = Qe(t)),
              [
                er((0.4124564 * e + 0.3575761 * r + 0.1804375 * t) / He.Xn),
                er((0.2126729 * e + 0.7151522 * r + 0.072175 * t) / He.Yn),
                er((0.0193339 * e + 0.119192 * r + 0.9503041 * t) / He.Zn),
              ]
            );
          },
          tr = Je,
          nr = l.unpack,
          ar = Math.pow,
          fr = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t,
              n,
              a,
              f = (e = nr(e, 'lab'))[0],
              o = e[1],
              u = e[2];
            return (
              (n = (f + 16) / 116),
              (t = isNaN(o) ? n : n + o / 500),
              (a = isNaN(u) ? n : n - u / 200),
              (n = He.Yn * ur(n)),
              (t = He.Xn * ur(t)),
              (a = He.Zn * ur(a)),
              [
                or(3.2404542 * t - 1.5371385 * n - 0.4985314 * a),
                or(-0.969266 * t + 1.8760108 * n + 0.041556 * a),
                or(0.0556434 * t - 0.2040259 * n + 1.0572252 * a),
                e.length > 3 ? e[3] : 1,
              ]
            );
          },
          or = function (e) {
            return (
              255 * (e <= 0.00304 ? 12.92 * e : 1.055 * ar(e, 1 / 2.4) - 0.055)
            );
          },
          ur = function (e) {
            return e > He.t1 ? e * e * e : He.t2 * (e - He.t0);
          },
          ir = fr,
          cr = l.unpack,
          lr = l.type;
        (v.prototype.lab = function () {
          return tr(this._rgb);
        }),
          (m.lab = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['lab'])
            ))();
          }),
          (s.format.lab = ir),
          s.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
              if (((e = cr(e, 'lab')), 'array' === lr(e) && 3 === e.length))
                return 'lab';
            },
          });
        var sr = l.unpack,
          dr = l.RAD2DEG,
          hr = Math.sqrt,
          br = Math.atan2,
          pr = Math.round,
          vr = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = sr(e, 'lab'),
              n = t[0],
              a = t[1],
              f = t[2],
              o = hr(a * a + f * f),
              u = (br(f, a) * dr + 360) % 360;
            return 0 === pr(1e4 * o) && (u = Number.NaN), [n, o, u];
          },
          gr = vr,
          mr = l.unpack,
          yr = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = mr(e, 'rgb'),
              n = t[0],
              a = t[1],
              f = t[2],
              o = tr(n, a, f),
              u = o[0],
              i = o[1],
              c = o[2];
            return gr(u, i, c);
          },
          wr = yr,
          kr = l.unpack,
          _r = l.DEG2RAD,
          Mr = Math.sin,
          Nr = Math.cos,
          Or = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = kr(e, 'lch'),
              n = t[0],
              a = t[1],
              f = t[2];
            return isNaN(f) && (f = 0), [n, Nr((f *= _r)) * a, Mr(f) * a];
          },
          xr = Or,
          Er = l.unpack,
          Pr = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = (e = Er(e, 'lch'))[0],
              n = e[1],
              a = e[2],
              f = xr(t, n, a),
              o = f[0],
              u = f[1],
              i = f[2],
              c = ir(o, u, i);
            return [c[0], c[1], c[2], e.length > 3 ? e[3] : 1];
          },
          Ar = Pr,
          jr = l.unpack,
          Cr = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = jr(e, 'hcl').reverse();
            return Ar.apply(void 0, t);
          },
          Lr = Cr,
          Dr = l.unpack,
          Fr = l.type;
        (v.prototype.lch = function () {
          return wr(this._rgb);
        }),
          (v.prototype.hcl = function () {
            return wr(this._rgb).reverse();
          }),
          (m.lch = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['lch'])
            ))();
          }),
          (m.hcl = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['hcl'])
            ))();
          }),
          (s.format.lch = Ar),
          (s.format.hcl = Lr),
          ['lch', 'hcl'].forEach(function (e) {
            return s.autodetect.push({
              p: 2,
              test: function () {
                for (var r = [], t = arguments.length; t--; )
                  r[t] = arguments[t];
                if (((r = Dr(r, e)), 'array' === Fr(r) && 3 === r.length))
                  return e;
              },
            });
          });
        var Rr = {
            aliceblue: '#f0f8ff',
            antiquewhite: '#faebd7',
            aqua: '#00ffff',
            aquamarine: '#7fffd4',
            azure: '#f0ffff',
            beige: '#f5f5dc',
            bisque: '#ffe4c4',
            black: '#000000',
            blanchedalmond: '#ffebcd',
            blue: '#0000ff',
            blueviolet: '#8a2be2',
            brown: '#a52a2a',
            burlywood: '#deb887',
            cadetblue: '#5f9ea0',
            chartreuse: '#7fff00',
            chocolate: '#d2691e',
            coral: '#ff7f50',
            cornflower: '#6495ed',
            cornflowerblue: '#6495ed',
            cornsilk: '#fff8dc',
            crimson: '#dc143c',
            cyan: '#00ffff',
            darkblue: '#00008b',
            darkcyan: '#008b8b',
            darkgoldenrod: '#b8860b',
            darkgray: '#a9a9a9',
            darkgreen: '#006400',
            darkgrey: '#a9a9a9',
            darkkhaki: '#bdb76b',
            darkmagenta: '#8b008b',
            darkolivegreen: '#556b2f',
            darkorange: '#ff8c00',
            darkorchid: '#9932cc',
            darkred: '#8b0000',
            darksalmon: '#e9967a',
            darkseagreen: '#8fbc8f',
            darkslateblue: '#483d8b',
            darkslategray: '#2f4f4f',
            darkslategrey: '#2f4f4f',
            darkturquoise: '#00ced1',
            darkviolet: '#9400d3',
            deeppink: '#ff1493',
            deepskyblue: '#00bfff',
            dimgray: '#696969',
            dimgrey: '#696969',
            dodgerblue: '#1e90ff',
            firebrick: '#b22222',
            floralwhite: '#fffaf0',
            forestgreen: '#228b22',
            fuchsia: '#ff00ff',
            gainsboro: '#dcdcdc',
            ghostwhite: '#f8f8ff',
            gold: '#ffd700',
            goldenrod: '#daa520',
            gray: '#808080',
            green: '#008000',
            greenyellow: '#adff2f',
            grey: '#808080',
            honeydew: '#f0fff0',
            hotpink: '#ff69b4',
            indianred: '#cd5c5c',
            indigo: '#4b0082',
            ivory: '#fffff0',
            khaki: '#f0e68c',
            laserlemon: '#ffff54',
            lavender: '#e6e6fa',
            lavenderblush: '#fff0f5',
            lawngreen: '#7cfc00',
            lemonchiffon: '#fffacd',
            lightblue: '#add8e6',
            lightcoral: '#f08080',
            lightcyan: '#e0ffff',
            lightgoldenrod: '#fafad2',
            lightgoldenrodyellow: '#fafad2',
            lightgray: '#d3d3d3',
            lightgreen: '#90ee90',
            lightgrey: '#d3d3d3',
            lightpink: '#ffb6c1',
            lightsalmon: '#ffa07a',
            lightseagreen: '#20b2aa',
            lightskyblue: '#87cefa',
            lightslategray: '#778899',
            lightslategrey: '#778899',
            lightsteelblue: '#b0c4de',
            lightyellow: '#ffffe0',
            lime: '#00ff00',
            limegreen: '#32cd32',
            linen: '#faf0e6',
            magenta: '#ff00ff',
            maroon: '#800000',
            maroon2: '#7f0000',
            maroon3: '#b03060',
            mediumaquamarine: '#66cdaa',
            mediumblue: '#0000cd',
            mediumorchid: '#ba55d3',
            mediumpurple: '#9370db',
            mediumseagreen: '#3cb371',
            mediumslateblue: '#7b68ee',
            mediumspringgreen: '#00fa9a',
            mediumturquoise: '#48d1cc',
            mediumvioletred: '#c71585',
            midnightblue: '#191970',
            mintcream: '#f5fffa',
            mistyrose: '#ffe4e1',
            moccasin: '#ffe4b5',
            navajowhite: '#ffdead',
            navy: '#000080',
            oldlace: '#fdf5e6',
            olive: '#808000',
            olivedrab: '#6b8e23',
            orange: '#ffa500',
            orangered: '#ff4500',
            orchid: '#da70d6',
            palegoldenrod: '#eee8aa',
            palegreen: '#98fb98',
            paleturquoise: '#afeeee',
            palevioletred: '#db7093',
            papayawhip: '#ffefd5',
            peachpuff: '#ffdab9',
            peru: '#cd853f',
            pink: '#ffc0cb',
            plum: '#dda0dd',
            powderblue: '#b0e0e6',
            purple: '#800080',
            purple2: '#7f007f',
            purple3: '#a020f0',
            rebeccapurple: '#663399',
            red: '#ff0000',
            rosybrown: '#bc8f8f',
            royalblue: '#4169e1',
            saddlebrown: '#8b4513',
            salmon: '#fa8072',
            sandybrown: '#f4a460',
            seagreen: '#2e8b57',
            seashell: '#fff5ee',
            sienna: '#a0522d',
            silver: '#c0c0c0',
            skyblue: '#87ceeb',
            slateblue: '#6a5acd',
            slategray: '#708090',
            slategrey: '#708090',
            snow: '#fffafa',
            springgreen: '#00ff7f',
            steelblue: '#4682b4',
            tan: '#d2b48c',
            teal: '#008080',
            thistle: '#d8bfd8',
            tomato: '#ff6347',
            turquoise: '#40e0d0',
            violet: '#ee82ee',
            wheat: '#f5deb3',
            white: '#ffffff',
            whitesmoke: '#f5f5f5',
            yellow: '#ffff00',
            yellowgreen: '#9acd32',
          },
          Gr = l.type;
        (v.prototype.name = function () {
          for (
            var e = pe(this._rgb, 'rgb'), r = 0, t = Object.keys(Rr);
            r < t.length;
            r += 1
          ) {
            var n = t[r];
            if (Rr[n] === e) return n.toLowerCase();
          }
          return e;
        }),
          (s.format.named = function (e) {
            if (((e = e.toLowerCase()), Rr[e])) return me(Rr[e]);
            throw new Error('unknown color name: ' + e);
          }),
          s.autodetect.push({
            p: 5,
            test: function (e) {
              for (var r = [], t = arguments.length - 1; t-- > 0; )
                r[t] = arguments[t + 1];
              if (!r.length && 'string' === Gr(e) && Rr[e.toLowerCase()])
                return 'named';
            },
          });
        var Sr = l.unpack,
          Ir = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = Sr(e, 'rgb');
            return (t[0] << 16) + (t[1] << 8) + t[2];
          },
          qr = Ir,
          Tr = l.type,
          Br = function (e) {
            if ('number' == Tr(e) && e >= 0 && e <= 16777215)
              return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw new Error('unknown num color: ' + e);
          },
          Vr = l.type;
        (v.prototype.num = function () {
          return qr(this._rgb);
        }),
          (m.num = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['num'])
            ))();
          }),
          (s.format.num = Br),
          s.autodetect.push({
            p: 5,
            test: function () {
              for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
              if (
                1 === e.length &&
                'number' === Vr(e[0]) &&
                e[0] >= 0 &&
                e[0] <= 16777215
              )
                return 'num';
            },
          });
        var Yr = l.unpack,
          zr = l.type,
          $r = Math.round;
        (v.prototype.rgb = function (e) {
          return (
            void 0 === e && (e = !0),
            !1 === e ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map($r)
          );
        }),
          (v.prototype.rgba = function (e) {
            return (
              void 0 === e && (e = !0),
              this._rgb.slice(0, 4).map(function (r, t) {
                return t < 3 ? (!1 === e ? r : $r(r)) : r;
              })
            );
          }),
          (m.rgb = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return new (Function.prototype.bind.apply(
              v,
              [null].concat(e, ['rgb'])
            ))();
          }),
          (s.format.rgb = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            var t = Yr(e, 'rgba');
            return void 0 === t[3] && (t[3] = 1), t;
          }),
          s.autodetect.push({
            p: 3,
            test: function () {
              for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
              if (
                ((e = Yr(e, 'rgba')),
                'array' === zr(e) &&
                  (3 === e.length ||
                    (4 === e.length &&
                      'number' == zr(e[3]) &&
                      e[3] >= 0 &&
                      e[3] <= 1)))
              )
                return 'rgb';
            },
          });
        var Xr = Math.log,
          Ur = function (e) {
            var r,
              t,
              n,
              a = e / 100;
            return (
              a < 66
                ? ((r = 255),
                  (t =
                    -155.25485562709179 -
                    0.44596950469579133 * (t = a - 2) +
                    104.49216199393888 * Xr(t)),
                  (n =
                    a < 20
                      ? 0
                      : 0.8274096064007395 * (n = a - 10) -
                        254.76935184120902 +
                        115.67994401066147 * Xr(n)))
                : ((r =
                    351.97690566805693 +
                    0.114206453784165 * (r = a - 55) -
                    40.25366309332127 * Xr(r)),
                  (t =
                    325.4494125711974 +
                    0.07943456536662342 * (t = a - 50) -
                    28.0852963507957 * Xr(t)),
                  (n = 255)),
              [r, t, n, 1]
            );
          },
          Wr = l.unpack,
          Hr = Math.round,
          Kr = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            for (
              var t,
                n = Wr(e, 'rgb'),
                a = n[0],
                f = n[2],
                o = 1e3,
                u = 4e4,
                i = 0.4;
              u - o > i;

            ) {
              var c = Ur((t = 0.5 * (u + o)));
              c[2] / c[0] >= f / a ? (u = t) : (o = t);
            }
            return Hr(t);
          },
          Zr = Kr;
        (v.prototype.temp =
          v.prototype.kelvin =
          v.prototype.temperature =
            function () {
              return Zr(this._rgb);
            }),
          (m.temp =
            m.kelvin =
            m.temperature =
              function () {
                for (var e = [], r = arguments.length; r--; )
                  e[r] = arguments[r];
                return new (Function.prototype.bind.apply(
                  v,
                  [null].concat(e, ['temp'])
                ))();
              }),
          (s.format.temp = s.format.kelvin = s.format.temperature = Ur);
        var Jr = l.type;
        (v.prototype.alpha = function (e, r) {
          return (
            void 0 === r && (r = !1),
            void 0 !== e && 'number' === Jr(e)
              ? r
                ? ((this._rgb[3] = e), this)
                : new v([this._rgb[0], this._rgb[1], this._rgb[2], e], 'rgb')
              : this._rgb[3]
          );
        }),
          (v.prototype.clipped = function () {
            return this._rgb._clipped || !1;
          }),
          (v.prototype.darken = function (e) {
            void 0 === e && (e = 1);
            var r = this,
              t = r.lab();
            return (t[0] -= He.Kn * e), new v(t, 'lab').alpha(r.alpha(), !0);
          }),
          (v.prototype.brighten = function (e) {
            return void 0 === e && (e = 1), this.darken(-e);
          }),
          (v.prototype.darker = v.prototype.darken),
          (v.prototype.brighter = v.prototype.brighten),
          (v.prototype.get = function (e) {
            var r = e.split('.'),
              t = r[0],
              n = r[1],
              a = this[t]();
            if (n) {
              var f = t.indexOf(n);
              if (f > -1) return a[f];
              throw new Error('unknown channel ' + n + ' in mode ' + t);
            }
            return a;
          });
        var Qr = l.type,
          et = Math.pow,
          rt = 1e-7,
          tt = 20;
        v.prototype.luminance = function (e) {
          if (void 0 !== e && 'number' === Qr(e)) {
            if (0 === e) return new v([0, 0, 0, this._rgb[3]], 'rgb');
            if (1 === e) return new v([255, 255, 255, this._rgb[3]], 'rgb');
            var r = this.luminance(),
              t = 'rgb',
              n = tt,
              a = function (r, f) {
                var o = r.interpolate(f, 0.5, t),
                  u = o.luminance();
                return Math.abs(e - u) < rt || !n--
                  ? o
                  : u > e
                  ? a(r, o)
                  : a(o, f);
              },
              f = (
                r > e
                  ? a(new v([0, 0, 0]), this)
                  : a(this, new v([255, 255, 255]))
              ).rgb();
            return new v(f.concat([this._rgb[3]]));
          }
          return nt.apply(void 0, this._rgb.slice(0, 3));
        };
        var nt = function (e, r, t) {
            return (
              0.2126 * (e = at(e)) + 0.7152 * (r = at(r)) + 0.0722 * (t = at(t))
            );
          },
          at = function (e) {
            return (e /= 255) <= 0.03928
              ? e / 12.92
              : et((e + 0.055) / 1.055, 2.4);
          },
          ft = {},
          ot = l.type,
          ut = function (e, r, t) {
            void 0 === t && (t = 0.5);
            for (var n = [], a = arguments.length - 3; a-- > 0; )
              n[a] = arguments[a + 3];
            var f = n[0] || 'lrgb';
            if ((ft[f] || n.length || (f = Object.keys(ft)[0]), !ft[f]))
              throw new Error('interpolation mode ' + f + ' is not defined');
            return (
              'object' !== ot(e) && (e = new v(e)),
              'object' !== ot(r) && (r = new v(r)),
              ft[f](e, r, t).alpha(e.alpha() + t * (r.alpha() - e.alpha()))
            );
          };
        (v.prototype.mix = v.prototype.interpolate =
          function (e, r) {
            void 0 === r && (r = 0.5);
            for (var t = [], n = arguments.length - 2; n-- > 0; )
              t[n] = arguments[n + 2];
            return ut.apply(void 0, [this, e, r].concat(t));
          }),
          (v.prototype.premultiply = function (e) {
            void 0 === e && (e = !1);
            var r = this._rgb,
              t = r[3];
            return e
              ? ((this._rgb = [r[0] * t, r[1] * t, r[2] * t, t]), this)
              : new v([r[0] * t, r[1] * t, r[2] * t, t], 'rgb');
          }),
          (v.prototype.saturate = function (e) {
            void 0 === e && (e = 1);
            var r = this,
              t = r.lch();
            return (
              (t[1] += He.Kn * e),
              t[1] < 0 && (t[1] = 0),
              new v(t, 'lch').alpha(r.alpha(), !0)
            );
          }),
          (v.prototype.desaturate = function (e) {
            return void 0 === e && (e = 1), this.saturate(-e);
          });
        var it = l.type;
        v.prototype.set = function (e, r, t) {
          void 0 === t && (t = !1);
          var n = e.split('.'),
            a = n[0],
            f = n[1],
            o = this[a]();
          if (f) {
            var u = a.indexOf(f);
            if (u > -1) {
              if ('string' == it(r))
                switch (r.charAt(0)) {
                  case '+':
                  case '-':
                    o[u] += +r;
                    break;
                  case '*':
                    o[u] *= +r.substr(1);
                    break;
                  case '/':
                    o[u] /= +r.substr(1);
                    break;
                  default:
                    o[u] = +r;
                }
              else {
                if ('number' !== it(r))
                  throw new Error('unsupported value for Color.set');
                o[u] = r;
              }
              var i = new v(o, a);
              return t ? ((this._rgb = i._rgb), this) : i;
            }
            throw new Error('unknown channel ' + f + ' in mode ' + a);
          }
          return o;
        };
        var ct = function (e, r, t) {
          var n = e._rgb,
            a = r._rgb;
          return new v(
            n[0] + t * (a[0] - n[0]),
            n[1] + t * (a[1] - n[1]),
            n[2] + t * (a[2] - n[2]),
            'rgb'
          );
        };
        ft.rgb = ct;
        var lt = Math.sqrt,
          st = Math.pow,
          dt = function (e, r, t) {
            var n = e._rgb,
              a = n[0],
              f = n[1],
              o = n[2],
              u = r._rgb,
              i = u[0],
              c = u[1],
              l = u[2];
            return new v(
              lt(st(a, 2) * (1 - t) + st(i, 2) * t),
              lt(st(f, 2) * (1 - t) + st(c, 2) * t),
              lt(st(o, 2) * (1 - t) + st(l, 2) * t),
              'rgb'
            );
          };
        ft.lrgb = dt;
        var ht = function (e, r, t) {
          var n = e.lab(),
            a = r.lab();
          return new v(
            n[0] + t * (a[0] - n[0]),
            n[1] + t * (a[1] - n[1]),
            n[2] + t * (a[2] - n[2]),
            'lab'
          );
        };
        ft.lab = ht;
        var bt = function (e, r, t, n) {
            var a, f, o, u, i, c, l, s, d, h, b, p;
            return (
              'hsl' === n
                ? ((o = e.hsl()), (u = r.hsl()))
                : 'hsv' === n
                ? ((o = e.hsv()), (u = r.hsv()))
                : 'hcg' === n
                ? ((o = e.hcg()), (u = r.hcg()))
                : 'hsi' === n
                ? ((o = e.hsi()), (u = r.hsi()))
                : ('lch' !== n && 'hcl' !== n) ||
                  ((n = 'hcl'), (o = e.hcl()), (u = r.hcl())),
              'h' === n.substr(0, 1) &&
                ((i = (a = o)[0]),
                (l = a[1]),
                (d = a[2]),
                (c = (f = u)[0]),
                (s = f[1]),
                (h = f[2])),
              isNaN(i) || isNaN(c)
                ? isNaN(i)
                  ? isNaN(c)
                    ? (p = Number.NaN)
                    : ((p = c), (1 != d && 0 != d) || 'hsv' == n || (b = s))
                  : ((p = i), (1 != h && 0 != h) || 'hsv' == n || (b = l))
                : (p =
                    i +
                    t *
                      (c > i && c - i > 180
                        ? c - (i + 360)
                        : c < i && i - c > 180
                        ? c + 360 - i
                        : c - i)),
              void 0 === b && (b = l + t * (s - l)),
              new v([p, b, d + t * (h - d)], n)
            );
          },
          pt = function (e, r, t) {
            return bt(e, r, t, 'lch');
          };
        (ft.lch = pt), (ft.hcl = pt);
        var vt = function (e, r, t) {
          var n = e.num(),
            a = r.num();
          return new v(n + t * (a - n), 'num');
        };
        ft.num = vt;
        var gt = function (e, r, t) {
          return bt(e, r, t, 'hcg');
        };
        ft.hcg = gt;
        var mt = function (e, r, t) {
          return bt(e, r, t, 'hsi');
        };
        ft.hsi = mt;
        var yt = function (e, r, t) {
          return bt(e, r, t, 'hsl');
        };
        ft.hsl = yt;
        var wt = function (e, r, t) {
          return bt(e, r, t, 'hsv');
        };
        ft.hsv = wt;
        var kt = l.clip_rgb,
          _t = Math.pow,
          Mt = Math.sqrt,
          Nt = Math.PI,
          Ot = Math.cos,
          xt = Math.sin,
          Et = Math.atan2,
          Pt = function (e, r, t) {
            void 0 === r && (r = 'lrgb'), void 0 === t && (t = null);
            var n = e.length;
            t ||
              (t = Array.from(new Array(n)).map(function () {
                return 1;
              }));
            var a =
              n /
              t.reduce(function (e, r) {
                return e + r;
              });
            if (
              (t.forEach(function (e, r) {
                t[r] *= a;
              }),
              (e = e.map(function (e) {
                return new v(e);
              })),
              'lrgb' === r)
            )
              return At(e, t);
            for (
              var f = e.shift(), o = f.get(r), u = [], i = 0, c = 0, l = 0;
              l < o.length;
              l++
            )
              if (
                ((o[l] = (o[l] || 0) * t[0]),
                u.push(isNaN(o[l]) ? 0 : t[0]),
                'h' === r.charAt(l) && !isNaN(o[l]))
              ) {
                var s = (o[l] / 180) * Nt;
                (i += Ot(s) * t[0]), (c += xt(s) * t[0]);
              }
            var d = f.alpha() * t[0];
            e.forEach(function (e, n) {
              var a = e.get(r);
              d += e.alpha() * t[n + 1];
              for (var f = 0; f < o.length; f++)
                if (!isNaN(a[f]))
                  if (((u[f] += t[n + 1]), 'h' === r.charAt(f))) {
                    var l = (a[f] / 180) * Nt;
                    (i += Ot(l) * t[n + 1]), (c += xt(l) * t[n + 1]);
                  } else o[f] += a[f] * t[n + 1];
            });
            for (var h = 0; h < o.length; h++)
              if ('h' === r.charAt(h)) {
                for (var b = (Et(c / u[h], i / u[h]) / Nt) * 180; b < 0; )
                  b += 360;
                for (; b >= 360; ) b -= 360;
                o[h] = b;
              } else o[h] = o[h] / u[h];
            return (d /= n), new v(o, r).alpha(d > 0.99999 ? 1 : d, !0);
          },
          At = function (e, r) {
            for (var t = e.length, n = [0, 0, 0, 0], a = 0; a < e.length; a++) {
              var f = e[a],
                o = r[a] / t,
                u = f._rgb;
              (n[0] += _t(u[0], 2) * o),
                (n[1] += _t(u[1], 2) * o),
                (n[2] += _t(u[2], 2) * o),
                (n[3] += u[3] * o);
            }
            return (
              (n[0] = Mt(n[0])),
              (n[1] = Mt(n[1])),
              (n[2] = Mt(n[2])),
              n[3] > 0.9999999 && (n[3] = 1),
              new v(kt(n))
            );
          },
          jt = l.type,
          Ct = Math.pow,
          Lt = function (e) {
            var r = 'rgb',
              t = m('#ccc'),
              n = 0,
              a = [0, 1],
              f = [],
              o = [0, 0],
              u = !1,
              i = [],
              c = !1,
              l = 0,
              s = 1,
              d = !1,
              h = {},
              b = !0,
              p = 1,
              v = function (e) {
                if (
                  ((e = e || ['#fff', '#000']) &&
                    'string' === jt(e) &&
                    m.brewer &&
                    m.brewer[e.toLowerCase()] &&
                    (e = m.brewer[e.toLowerCase()]),
                  'array' === jt(e))
                ) {
                  1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                  for (var r = 0; r < e.length; r++) e[r] = m(e[r]);
                  f.length = 0;
                  for (var t = 0; t < e.length; t++) f.push(t / (e.length - 1));
                }
                return _(), (i = e);
              },
              g = function (e) {
                if (null != u) {
                  for (var r = u.length - 1, t = 0; t < r && e >= u[t]; ) t++;
                  return t - 1;
                }
                return 0;
              },
              y = function (e) {
                return e;
              },
              w = function (e) {
                return e;
              },
              k = function (e, n) {
                var a, c;
                if ((null == n && (n = !1), isNaN(e) || null === e)) return t;
                (c = n
                  ? e
                  : u && u.length > 2
                  ? g(e) / (u.length - 2)
                  : s !== l
                  ? (e - l) / (s - l)
                  : 1),
                  (c = w(c)),
                  n || (c = y(c)),
                  1 !== p && (c = Ct(c, p)),
                  (c = o[0] + c * (1 - o[0] - o[1])),
                  (c = Math.min(1, Math.max(0, c)));
                var d = Math.floor(1e4 * c);
                if (b && h[d]) a = h[d];
                else {
                  if ('array' === jt(i))
                    for (var v = 0; v < f.length; v++) {
                      var k = f[v];
                      if (c <= k) {
                        a = i[v];
                        break;
                      }
                      if (c >= k && v === f.length - 1) {
                        a = i[v];
                        break;
                      }
                      if (c > k && c < f[v + 1]) {
                        (c = (c - k) / (f[v + 1] - k)),
                          (a = m.interpolate(i[v], i[v + 1], c, r));
                        break;
                      }
                    }
                  else 'function' === jt(i) && (a = i(c));
                  b && (h[d] = a);
                }
                return a;
              },
              _ = function () {
                return (h = {});
              };
            v(e);
            var M = function (e) {
              var r = m(k(e));
              return c && r[c] ? r[c]() : r;
            };
            return (
              (M.classes = function (e) {
                if (null != e) {
                  if ('array' === jt(e)) (u = e), (a = [e[0], e[e.length - 1]]);
                  else {
                    var r = m.analyze(a);
                    u = 0 === e ? [r.min, r.max] : m.limits(r, 'e', e);
                  }
                  return M;
                }
                return u;
              }),
              (M.domain = function (e) {
                if (!arguments.length) return a;
                (l = e[0]), (s = e[e.length - 1]), (f = []);
                var r = i.length;
                if (e.length === r && l !== s)
                  for (var t = 0, n = Array.from(e); t < n.length; t += 1) {
                    var o = n[t];
                    f.push((o - l) / (s - l));
                  }
                else {
                  for (var u = 0; u < r; u++) f.push(u / (r - 1));
                  if (e.length > 2) {
                    var c = e.map(function (r, t) {
                        return t / (e.length - 1);
                      }),
                      d = e.map(function (e) {
                        return (e - l) / (s - l);
                      });
                    d.every(function (e, r) {
                      return c[r] === e;
                    }) ||
                      (w = function (e) {
                        if (e <= 0 || e >= 1) return e;
                        for (var r = 0; e >= d[r + 1]; ) r++;
                        var t = (e - d[r]) / (d[r + 1] - d[r]);
                        return c[r] + t * (c[r + 1] - c[r]);
                      });
                  }
                }
                return (a = [l, s]), M;
              }),
              (M.mode = function (e) {
                return arguments.length ? ((r = e), _(), M) : r;
              }),
              (M.range = function (e, r) {
                return v(e, r), M;
              }),
              (M.out = function (e) {
                return (c = e), M;
              }),
              (M.spread = function (e) {
                return arguments.length ? ((n = e), M) : n;
              }),
              (M.correctLightness = function (e) {
                return (
                  null == e && (e = !0),
                  (d = e),
                  _(),
                  (y = d
                    ? function (e) {
                        for (
                          var r = k(0, !0).lab()[0],
                            t = k(1, !0).lab()[0],
                            n = r > t,
                            a = k(e, !0).lab()[0],
                            f = r + (t - r) * e,
                            o = a - f,
                            u = 0,
                            i = 1,
                            c = 20;
                          Math.abs(o) > 0.01 && c-- > 0;

                        )
                          n && (o *= -1),
                            o < 0
                              ? ((u = e), (e += 0.5 * (i - e)))
                              : ((i = e), (e += 0.5 * (u - e))),
                            (a = k(e, !0).lab()[0]),
                            (o = a - f);
                        return e;
                      }
                    : function (e) {
                        return e;
                      }),
                  M
                );
              }),
              (M.padding = function (e) {
                return null != e
                  ? ('number' === jt(e) && (e = [e, e]), (o = e), M)
                  : o;
              }),
              (M.colors = function (r, t) {
                arguments.length < 2 && (t = 'hex');
                var n = [];
                if (0 === arguments.length) n = i.slice(0);
                else if (1 === r) n = [M(0.5)];
                else if (r > 1) {
                  var f = a[0],
                    o = a[1] - f;
                  n = Dt(0, r, !1).map(function (e) {
                    return M(f + (e / (r - 1)) * o);
                  });
                } else {
                  e = [];
                  var c = [];
                  if (u && u.length > 2)
                    for (
                      var l = 1, s = u.length, d = 1 <= s;
                      d ? l < s : l > s;
                      d ? l++ : l--
                    )
                      c.push(0.5 * (u[l - 1] + u[l]));
                  else c = a;
                  n = c.map(function (e) {
                    return M(e);
                  });
                }
                return (
                  m[t] &&
                    (n = n.map(function (e) {
                      return e[t]();
                    })),
                  n
                );
              }),
              (M.cache = function (e) {
                return null != e ? ((b = e), M) : b;
              }),
              (M.gamma = function (e) {
                return null != e ? ((p = e), M) : p;
              }),
              (M.nodata = function (e) {
                return null != e ? ((t = m(e)), M) : t;
              }),
              M
            );
          };
        function Dt(e, r, t) {
          for (
            var n = [], a = e < r, f = t ? (a ? r + 1 : r - 1) : r, o = e;
            a ? o < f : o > f;
            a ? o++ : o--
          )
            n.push(o);
          return n;
        }
        var Ft = function (e) {
            var r, t, n, a, f, o, u;
            if (
              2 ===
              (e = e.map(function (e) {
                return new v(e);
              })).length
            )
              (r = e.map(function (e) {
                return e.lab();
              })),
                (f = r[0]),
                (o = r[1]),
                (a = function (e) {
                  var r = [0, 1, 2].map(function (r) {
                    return f[r] + e * (o[r] - f[r]);
                  });
                  return new v(r, 'lab');
                });
            else if (3 === e.length)
              (t = e.map(function (e) {
                return e.lab();
              })),
                (f = t[0]),
                (o = t[1]),
                (u = t[2]),
                (a = function (e) {
                  var r = [0, 1, 2].map(function (r) {
                    return (
                      (1 - e) * (1 - e) * f[r] +
                      2 * (1 - e) * e * o[r] +
                      e * e * u[r]
                    );
                  });
                  return new v(r, 'lab');
                });
            else if (4 === e.length) {
              var i;
              (n = e.map(function (e) {
                return e.lab();
              })),
                (f = n[0]),
                (o = n[1]),
                (u = n[2]),
                (i = n[3]),
                (a = function (e) {
                  var r = [0, 1, 2].map(function (r) {
                    return (
                      (1 - e) * (1 - e) * (1 - e) * f[r] +
                      3 * (1 - e) * (1 - e) * e * o[r] +
                      3 * (1 - e) * e * e * u[r] +
                      e * e * e * i[r]
                    );
                  });
                  return new v(r, 'lab');
                });
            } else if (5 === e.length) {
              var c = Ft(e.slice(0, 3)),
                l = Ft(e.slice(2, 5));
              a = function (e) {
                return e < 0.5 ? c(2 * e) : l(2 * (e - 0.5));
              };
            }
            return a;
          },
          Rt = function (e) {
            var r = Ft(e);
            return (
              (r.scale = function () {
                return Lt(r);
              }),
              r
            );
          },
          Gt = function (e, r, t) {
            if (!Gt[t]) throw new Error('unknown blend mode ' + t);
            return Gt[t](e, r);
          },
          St = function (e) {
            return function (r, t) {
              var n = m(t).rgb(),
                a = m(r).rgb();
              return m.rgb(e(n, a));
            };
          },
          It = function (e) {
            return function (r, t) {
              var n = [];
              return (
                (n[0] = e(r[0], t[0])),
                (n[1] = e(r[1], t[1])),
                (n[2] = e(r[2], t[2])),
                n
              );
            };
          },
          qt = function (e) {
            return e;
          },
          Tt = function (e, r) {
            return (e * r) / 255;
          },
          Bt = function (e, r) {
            return e > r ? r : e;
          },
          Vt = function (e, r) {
            return e > r ? e : r;
          },
          Yt = function (e, r) {
            return 255 * (1 - (1 - e / 255) * (1 - r / 255));
          },
          zt = function (e, r) {
            return r < 128
              ? (2 * e * r) / 255
              : 255 * (1 - 2 * (1 - e / 255) * (1 - r / 255));
          },
          $t = function (e, r) {
            return 255 * (1 - (1 - r / 255) / (e / 255));
          },
          Xt = function (e, r) {
            return 255 === e || (e = ((r / 255) * 255) / (1 - e / 255)) > 255
              ? 255
              : e;
          };
        (Gt.normal = St(It(qt))),
          (Gt.multiply = St(It(Tt))),
          (Gt.screen = St(It(Yt))),
          (Gt.overlay = St(It(zt))),
          (Gt.darken = St(It(Bt))),
          (Gt.lighten = St(It(Vt))),
          (Gt.dodge = St(It(Xt))),
          (Gt.burn = St(It($t)));
        for (
          var Ut = Gt,
            Wt = l.type,
            Ht = l.clip_rgb,
            Kt = l.TWOPI,
            Zt = Math.pow,
            Jt = Math.sin,
            Qt = Math.cos,
            en = function (e, r, t, n, a) {
              void 0 === e && (e = 300),
                void 0 === r && (r = -1.5),
                void 0 === t && (t = 1),
                void 0 === n && (n = 1),
                void 0 === a && (a = [0, 1]);
              var f,
                o = 0;
              'array' === Wt(a) ? (f = a[1] - a[0]) : ((f = 0), (a = [a, a]));
              var u = function (u) {
                var i = Kt * ((e + 120) / 360 + r * u),
                  c = Zt(a[0] + f * u, n),
                  l = ((0 !== o ? t[0] + u * o : t) * c * (1 - c)) / 2,
                  s = Qt(i),
                  d = Jt(i);
                return m(
                  Ht([
                    255 * (c + l * (-0.14861 * s + 1.78277 * d)),
                    255 * (c + l * (-0.29227 * s - 0.90649 * d)),
                    255 * (c + l * (1.97294 * s)),
                    1,
                  ])
                );
              };
              return (
                (u.start = function (r) {
                  return null == r ? e : ((e = r), u);
                }),
                (u.rotations = function (e) {
                  return null == e ? r : ((r = e), u);
                }),
                (u.gamma = function (e) {
                  return null == e ? n : ((n = e), u);
                }),
                (u.hue = function (e) {
                  return null == e
                    ? t
                    : ('array' === Wt((t = e))
                        ? 0 === (o = t[1] - t[0]) && (t = t[1])
                        : (o = 0),
                      u);
                }),
                (u.lightness = function (e) {
                  return null == e
                    ? a
                    : ('array' === Wt(e)
                        ? ((a = e), (f = e[1] - e[0]))
                        : ((a = [e, e]), (f = 0)),
                      u);
                }),
                (u.scale = function () {
                  return m.scale(u);
                }),
                u.hue(t),
                u
              );
            },
            rn = '0123456789abcdef',
            tn = Math.floor,
            nn = Math.random,
            an = function () {
              for (var e = '#', r = 0; r < 6; r++)
                e += rn.charAt(tn(16 * nn()));
              return new v(e, 'hex');
            },
            fn = Math.log,
            on = Math.pow,
            un = Math.floor,
            cn = Math.abs,
            ln = function (e, r) {
              void 0 === r && (r = null);
              var t = {
                min: Number.MAX_VALUE,
                max: -1 * Number.MAX_VALUE,
                sum: 0,
                values: [],
                count: 0,
              };
              return (
                'object' === o(e) && (e = Object.values(e)),
                e.forEach(function (e) {
                  r && 'object' === o(e) && (e = e[r]),
                    void 0 === e ||
                      null === e ||
                      isNaN(e) ||
                      (t.values.push(e),
                      (t.sum += e),
                      e < t.min && (t.min = e),
                      e > t.max && (t.max = e),
                      (t.count += 1));
                }),
                (t.domain = [t.min, t.max]),
                (t.limits = function (e, r) {
                  return sn(t, e, r);
                }),
                t
              );
            },
            sn = function (e, r, t) {
              void 0 === r && (r = 'equal'),
                void 0 === t && (t = 7),
                'array' == o(e) && (e = ln(e));
              var n = e.min,
                a = e.max,
                f = e.values.sort(function (e, r) {
                  return e - r;
                });
              if (1 === t) return [n, a];
              var u = [];
              if (
                ('c' === r.substr(0, 1) && (u.push(n), u.push(a)),
                'e' === r.substr(0, 1))
              ) {
                u.push(n);
                for (var i = 1; i < t; i++) u.push(n + (i / t) * (a - n));
                u.push(a);
              } else if ('l' === r.substr(0, 1)) {
                if (n <= 0)
                  throw new Error(
                    'Logarithmic scales are only possible for values > 0'
                  );
                var c = Math.LOG10E * fn(n),
                  l = Math.LOG10E * fn(a);
                u.push(n);
                for (var s = 1; s < t; s++)
                  u.push(on(10, c + (s / t) * (l - c)));
                u.push(a);
              } else if ('q' === r.substr(0, 1)) {
                u.push(n);
                for (var d = 1; d < t; d++) {
                  var h = ((f.length - 1) * d) / t,
                    b = un(h);
                  if (b === h) u.push(f[b]);
                  else {
                    var p = h - b;
                    u.push(f[b] * (1 - p) + f[b + 1] * p);
                  }
                }
                u.push(a);
              } else if ('k' === r.substr(0, 1)) {
                var v,
                  g = f.length,
                  m = new Array(g),
                  y = new Array(t),
                  w = !0,
                  k = 0,
                  _ = null;
                (_ = []).push(n);
                for (var M = 1; M < t; M++) _.push(n + (M / t) * (a - n));
                for (_.push(a); w; ) {
                  for (var N = 0; N < t; N++) y[N] = 0;
                  for (var O = 0; O < g; O++)
                    for (
                      var x = f[O], E = Number.MAX_VALUE, P = void 0, A = 0;
                      A < t;
                      A++
                    ) {
                      var j = cn(_[A] - x);
                      j < E && ((E = j), (P = A)), y[P]++, (m[O] = P);
                    }
                  for (var C = new Array(t), L = 0; L < t; L++) C[L] = null;
                  for (var D = 0; D < g; D++)
                    null === C[(v = m[D])] ? (C[v] = f[D]) : (C[v] += f[D]);
                  for (var F = 0; F < t; F++) C[F] *= 1 / y[F];
                  w = !1;
                  for (var R = 0; R < t; R++)
                    if (C[R] !== _[R]) {
                      w = !0;
                      break;
                    }
                  (_ = C), ++k > 200 && (w = !1);
                }
                for (var G = {}, S = 0; S < t; S++) G[S] = [];
                for (var I = 0; I < g; I++) G[(v = m[I])].push(f[I]);
                for (var q = [], T = 0; T < t; T++)
                  q.push(G[T][0]), q.push(G[T][G[T].length - 1]);
                (q = q.sort(function (e, r) {
                  return e - r;
                })),
                  u.push(q[0]);
                for (var B = 1; B < q.length; B += 2) {
                  var V = q[B];
                  isNaN(V) || -1 !== u.indexOf(V) || u.push(V);
                }
              }
              return u;
            },
            dn = { analyze: ln, limits: sn },
            hn = function (e, r) {
              (e = new v(e)), (r = new v(r));
              var t = e.luminance(),
                n = r.luminance();
              return t > n ? (t + 0.05) / (n + 0.05) : (n + 0.05) / (t + 0.05);
            },
            bn = Math.sqrt,
            pn = Math.atan2,
            vn = Math.abs,
            gn = Math.cos,
            mn = Math.PI,
            yn = function (e, r, t, n) {
              void 0 === t && (t = 1),
                void 0 === n && (n = 1),
                (e = new v(e)),
                (r = new v(r));
              for (
                var a = Array.from(e.lab()),
                  f = a[0],
                  o = a[1],
                  u = a[2],
                  i = Array.from(r.lab()),
                  c = i[0],
                  l = i[1],
                  s = i[2],
                  d = bn(o * o + u * u),
                  h = bn(l * l + s * s),
                  b = f < 16 ? 0.511 : (0.040975 * f) / (1 + 0.01765 * f),
                  p = (0.0638 * d) / (1 + 0.0131 * d) + 0.638,
                  g = d < 1e-6 ? 0 : (180 * pn(u, o)) / mn;
                g < 0;

              )
                g += 360;
              for (; g >= 360; ) g -= 360;
              var m =
                  g >= 164 && g <= 345
                    ? 0.56 + vn(0.2 * gn((mn * (g + 168)) / 180))
                    : 0.36 + vn(0.4 * gn((mn * (g + 35)) / 180)),
                y = d * d * d * d,
                w = bn(y / (y + 1900)),
                k = p * (w * m + 1 - w),
                _ = d - h,
                M = o - l,
                N = u - s,
                O = (f - c) / (t * b),
                x = _ / (n * p);
              return bn(O * O + x * x + (M * M + N * N - _ * _) / (k * k));
            },
            wn = function (e, r, t) {
              void 0 === t && (t = 'lab'), (e = new v(e)), (r = new v(r));
              var n = e.get(t),
                a = r.get(t),
                f = 0;
              for (var o in n) {
                var u = (n[o] || 0) - (a[o] || 0);
                f += u * u;
              }
              return Math.sqrt(f);
            },
            kn = function () {
              for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
              try {
                return (
                  new (Function.prototype.bind.apply(v, [null].concat(e)))(), !0
                );
              } catch (t) {
                return !1;
              }
            },
            _n = {
              cool: function () {
                return Lt([m.hsl(180, 1, 0.9), m.hsl(250, 0.7, 0.4)]);
              },
              hot: function () {
                return Lt(
                  ['#000', '#f00', '#ff0', '#fff'],
                  [0, 0.25, 0.75, 1]
                ).mode('rgb');
              },
            },
            Mn = {
              OrRd: [
                '#fff7ec',
                '#fee8c8',
                '#fdd49e',
                '#fdbb84',
                '#fc8d59',
                '#ef6548',
                '#d7301f',
                '#b30000',
                '#7f0000',
              ],
              PuBu: [
                '#fff7fb',
                '#ece7f2',
                '#d0d1e6',
                '#a6bddb',
                '#74a9cf',
                '#3690c0',
                '#0570b0',
                '#045a8d',
                '#023858',
              ],
              BuPu: [
                '#f7fcfd',
                '#e0ecf4',
                '#bfd3e6',
                '#9ebcda',
                '#8c96c6',
                '#8c6bb1',
                '#88419d',
                '#810f7c',
                '#4d004b',
              ],
              Oranges: [
                '#fff5eb',
                '#fee6ce',
                '#fdd0a2',
                '#fdae6b',
                '#fd8d3c',
                '#f16913',
                '#d94801',
                '#a63603',
                '#7f2704',
              ],
              BuGn: [
                '#f7fcfd',
                '#e5f5f9',
                '#ccece6',
                '#99d8c9',
                '#66c2a4',
                '#41ae76',
                '#238b45',
                '#006d2c',
                '#00441b',
              ],
              YlOrBr: [
                '#ffffe5',
                '#fff7bc',
                '#fee391',
                '#fec44f',
                '#fe9929',
                '#ec7014',
                '#cc4c02',
                '#993404',
                '#662506',
              ],
              YlGn: [
                '#ffffe5',
                '#f7fcb9',
                '#d9f0a3',
                '#addd8e',
                '#78c679',
                '#41ab5d',
                '#238443',
                '#006837',
                '#004529',
              ],
              Reds: [
                '#fff5f0',
                '#fee0d2',
                '#fcbba1',
                '#fc9272',
                '#fb6a4a',
                '#ef3b2c',
                '#cb181d',
                '#a50f15',
                '#67000d',
              ],
              RdPu: [
                '#fff7f3',
                '#fde0dd',
                '#fcc5c0',
                '#fa9fb5',
                '#f768a1',
                '#dd3497',
                '#ae017e',
                '#7a0177',
                '#49006a',
              ],
              Greens: [
                '#f7fcf5',
                '#e5f5e0',
                '#c7e9c0',
                '#a1d99b',
                '#74c476',
                '#41ab5d',
                '#238b45',
                '#006d2c',
                '#00441b',
              ],
              YlGnBu: [
                '#ffffd9',
                '#edf8b1',
                '#c7e9b4',
                '#7fcdbb',
                '#41b6c4',
                '#1d91c0',
                '#225ea8',
                '#253494',
                '#081d58',
              ],
              Purples: [
                '#fcfbfd',
                '#efedf5',
                '#dadaeb',
                '#bcbddc',
                '#9e9ac8',
                '#807dba',
                '#6a51a3',
                '#54278f',
                '#3f007d',
              ],
              GnBu: [
                '#f7fcf0',
                '#e0f3db',
                '#ccebc5',
                '#a8ddb5',
                '#7bccc4',
                '#4eb3d3',
                '#2b8cbe',
                '#0868ac',
                '#084081',
              ],
              Greys: [
                '#ffffff',
                '#f0f0f0',
                '#d9d9d9',
                '#bdbdbd',
                '#969696',
                '#737373',
                '#525252',
                '#252525',
                '#000000',
              ],
              YlOrRd: [
                '#ffffcc',
                '#ffeda0',
                '#fed976',
                '#feb24c',
                '#fd8d3c',
                '#fc4e2a',
                '#e31a1c',
                '#bd0026',
                '#800026',
              ],
              PuRd: [
                '#f7f4f9',
                '#e7e1ef',
                '#d4b9da',
                '#c994c7',
                '#df65b0',
                '#e7298a',
                '#ce1256',
                '#980043',
                '#67001f',
              ],
              Blues: [
                '#f7fbff',
                '#deebf7',
                '#c6dbef',
                '#9ecae1',
                '#6baed6',
                '#4292c6',
                '#2171b5',
                '#08519c',
                '#08306b',
              ],
              PuBuGn: [
                '#fff7fb',
                '#ece2f0',
                '#d0d1e6',
                '#a6bddb',
                '#67a9cf',
                '#3690c0',
                '#02818a',
                '#016c59',
                '#014636',
              ],
              Viridis: [
                '#440154',
                '#482777',
                '#3f4a8a',
                '#31678e',
                '#26838f',
                '#1f9d8a',
                '#6cce5a',
                '#b6de2b',
                '#fee825',
              ],
              Spectral: [
                '#9e0142',
                '#d53e4f',
                '#f46d43',
                '#fdae61',
                '#fee08b',
                '#ffffbf',
                '#e6f598',
                '#abdda4',
                '#66c2a5',
                '#3288bd',
                '#5e4fa2',
              ],
              RdYlGn: [
                '#a50026',
                '#d73027',
                '#f46d43',
                '#fdae61',
                '#fee08b',
                '#ffffbf',
                '#d9ef8b',
                '#a6d96a',
                '#66bd63',
                '#1a9850',
                '#006837',
              ],
              RdBu: [
                '#67001f',
                '#b2182b',
                '#d6604d',
                '#f4a582',
                '#fddbc7',
                '#f7f7f7',
                '#d1e5f0',
                '#92c5de',
                '#4393c3',
                '#2166ac',
                '#053061',
              ],
              PiYG: [
                '#8e0152',
                '#c51b7d',
                '#de77ae',
                '#f1b6da',
                '#fde0ef',
                '#f7f7f7',
                '#e6f5d0',
                '#b8e186',
                '#7fbc41',
                '#4d9221',
                '#276419',
              ],
              PRGn: [
                '#40004b',
                '#762a83',
                '#9970ab',
                '#c2a5cf',
                '#e7d4e8',
                '#f7f7f7',
                '#d9f0d3',
                '#a6dba0',
                '#5aae61',
                '#1b7837',
                '#00441b',
              ],
              RdYlBu: [
                '#a50026',
                '#d73027',
                '#f46d43',
                '#fdae61',
                '#fee090',
                '#ffffbf',
                '#e0f3f8',
                '#abd9e9',
                '#74add1',
                '#4575b4',
                '#313695',
              ],
              BrBG: [
                '#543005',
                '#8c510a',
                '#bf812d',
                '#dfc27d',
                '#f6e8c3',
                '#f5f5f5',
                '#c7eae5',
                '#80cdc1',
                '#35978f',
                '#01665e',
                '#003c30',
              ],
              RdGy: [
                '#67001f',
                '#b2182b',
                '#d6604d',
                '#f4a582',
                '#fddbc7',
                '#ffffff',
                '#e0e0e0',
                '#bababa',
                '#878787',
                '#4d4d4d',
                '#1a1a1a',
              ],
              PuOr: [
                '#7f3b08',
                '#b35806',
                '#e08214',
                '#fdb863',
                '#fee0b6',
                '#f7f7f7',
                '#d8daeb',
                '#b2abd2',
                '#8073ac',
                '#542788',
                '#2d004b',
              ],
              Set2: [
                '#66c2a5',
                '#fc8d62',
                '#8da0cb',
                '#e78ac3',
                '#a6d854',
                '#ffd92f',
                '#e5c494',
                '#b3b3b3',
              ],
              Accent: [
                '#7fc97f',
                '#beaed4',
                '#fdc086',
                '#ffff99',
                '#386cb0',
                '#f0027f',
                '#bf5b17',
                '#666666',
              ],
              Set1: [
                '#e41a1c',
                '#377eb8',
                '#4daf4a',
                '#984ea3',
                '#ff7f00',
                '#ffff33',
                '#a65628',
                '#f781bf',
                '#999999',
              ],
              Set3: [
                '#8dd3c7',
                '#ffffb3',
                '#bebada',
                '#fb8072',
                '#80b1d3',
                '#fdb462',
                '#b3de69',
                '#fccde5',
                '#d9d9d9',
                '#bc80bd',
                '#ccebc5',
                '#ffed6f',
              ],
              Dark2: [
                '#1b9e77',
                '#d95f02',
                '#7570b3',
                '#e7298a',
                '#66a61e',
                '#e6ab02',
                '#a6761d',
                '#666666',
              ],
              Paired: [
                '#a6cee3',
                '#1f78b4',
                '#b2df8a',
                '#33a02c',
                '#fb9a99',
                '#e31a1c',
                '#fdbf6f',
                '#ff7f00',
                '#cab2d6',
                '#6a3d9a',
                '#ffff99',
                '#b15928',
              ],
              Pastel2: [
                '#b3e2cd',
                '#fdcdac',
                '#cbd5e8',
                '#f4cae4',
                '#e6f5c9',
                '#fff2ae',
                '#f1e2cc',
                '#cccccc',
              ],
              Pastel1: [
                '#fbb4ae',
                '#b3cde3',
                '#ccebc5',
                '#decbe4',
                '#fed9a6',
                '#ffffcc',
                '#e5d8bd',
                '#fddaec',
                '#f2f2f2',
              ],
            },
            Nn = 0,
            On = Object.keys(Mn);
          Nn < On.length;
          Nn += 1
        ) {
          var xn = On[Nn];
          Mn[xn.toLowerCase()] = Mn[xn];
        }
        var En = Mn;
        return (
          (m.average = Pt),
          (m.bezier = Rt),
          (m.blend = Ut),
          (m.cubehelix = en),
          (m.mix = m.interpolate = ut),
          (m.random = an),
          (m.scale = Lt),
          (m.analyze = dn.analyze),
          (m.contrast = hn),
          (m.deltaE = yn),
          (m.distance = wn),
          (m.limits = dn.limits),
          (m.valid = kn),
          (m.scales = _n),
          (m.colors = Rr),
          (m.brewer = En),
          m
        );
      })();
    },
    48186: function (e, r, t) {
      'use strict';
      var n = t(96086),
        a = t(2784);
      r.useSubscription = function (e) {
        var r = e.getCurrentValue,
          t = e.subscribe,
          f = a.useState(function () {
            return { getCurrentValue: r, subscribe: t, value: r() };
          });
        e = f[0];
        var o = f[1];
        return (
          (f = e.value),
          (e.getCurrentValue === r && e.subscribe === t) ||
            ((f = r()), o({ getCurrentValue: r, subscribe: t, value: f })),
          a.useDebugValue(f),
          a.useEffect(
            function () {
              function e() {
                if (!a) {
                  var e = r();
                  o(function (a) {
                    return a.getCurrentValue !== r ||
                      a.subscribe !== t ||
                      a.value === e
                      ? a
                      : n({}, a, { value: e });
                  });
                }
              }
              var a = !1,
                f = t(e);
              return (
                e(),
                function () {
                  (a = !0), f();
                }
              );
            },
            [r, t]
          ),
          f
        );
      };
    },
    36718: function (e, r, t) {
      'use strict';
      e.exports = t(48186);
    },
    90638: function (e, r, t) {
      'use strict';
      function n(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            a = Object.keys(t);
          'function' === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            a.forEach(function (r) {
              n(e, r, t[r]);
            });
        }
        return e;
      }
      r.default = function (e, r) {
        var t = f.default,
          n = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        (o = e),
          (i = Promise),
          (
            null != i && 'undefined' !== typeof Symbol && i[Symbol.hasInstance]
              ? i[Symbol.hasInstance](o)
              : o instanceof i
          )
            ? (n.loader = function () {
                return e;
              })
            : 'function' === typeof e
            ? (n.loader = e)
            : 'object' === typeof e && (n = a({}, n, e));
        var o, i;
        var c = (n = a({}, n, r));
        if (c.suspense)
          throw new Error(
            'Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense'
          );
        if (c.suspense) return t(c);
        n.loadableGenerated &&
          delete (n = a({}, n, n.loadableGenerated)).loadableGenerated;
        if ('boolean' === typeof n.ssr) {
          if (!n.ssr) return delete n.ssr, u(t, n);
          delete n.ssr;
        }
        return t(n);
      };
      o(t(2784));
      var f = o(t(14302));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, r) {
        return delete r.webpack, delete r.modules, e(r);
      }
    },
    16319: function (e, r, t) {
      'use strict';
      var n;
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.LoadableContext = void 0);
      var a = (
        (n = t(2784)) && n.__esModule ? n : { default: n }
      ).default.createContext(null);
      r.LoadableContext = a;
    },
    14302: function (e, r, t) {
      'use strict';
      function n(e, r) {
        for (var t = 0; t < r.length; t++) {
          var n = r[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function a(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function f(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (r) {
              a(e, r, t[r]);
            });
        }
        return e;
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var o,
        u = (o = t(2784)) && o.__esModule ? o : { default: o },
        i = t(36718),
        c = t(16319);
      var l = [],
        s = [],
        d = !1;
      function h(e) {
        var r = e(),
          t = { loading: !0, loaded: null, error: null };
        return (
          (t.promise = r
            .then(function (e) {
              return (t.loading = !1), (t.loaded = e), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), (t.error = e), e);
            })),
          t
        );
      }
      var b = (function () {
        function e(r, t) {
          !(function (e, r) {
            if (!(e instanceof r))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this._loadFn = r),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        var r, t, a;
        return (
          (r = e),
          (t = [
            {
              key: 'promise',
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: 'retry',
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var r = this._res,
                  t = this._opts;
                if (r.loading) {
                  if ('number' === typeof t.delay)
                    if (0 === t.delay) this._state.pastDelay = !0;
                    else {
                      var n = this;
                      this._delay = setTimeout(function () {
                        n._update({ pastDelay: !0 });
                      }, t.delay);
                    }
                  if ('number' === typeof t.timeout) {
                    var a = this;
                    this._timeout = setTimeout(function () {
                      a._update({ timedOut: !0 });
                    }, t.timeout);
                  }
                }
                this._res.promise
                  .then(function () {
                    e._update({}), e._clearTimeouts();
                  })
                  .catch(function (r) {
                    e._update({}), e._clearTimeouts();
                  }),
                  this._update({});
              },
            },
            {
              key: '_update',
              value: function (e) {
                (this._state = f(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return this._state;
              },
            },
            {
              key: 'subscribe',
              value: function (e) {
                var r = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    r._callbacks.delete(e);
                  }
                );
              },
            },
          ]) && n(r.prototype, t),
          a && n(r, a),
          e
        );
      })();
      function p(e) {
        return (function (e, r) {
          var t = function () {
              if (!a) {
                var r = new b(e, n);
                a = {
                  getCurrentValue: r.getCurrentValue.bind(r),
                  subscribe: r.subscribe.bind(r),
                  retry: r.retry.bind(r),
                  promise: r.promise.bind(r),
                };
              }
              return a.promise();
            },
            n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              r
            );
          n.suspense && (n.lazy = u.default.lazy(n.loader));
          var a = null;
          if (!d && !n.suspense) {
            var o = n.webpack ? n.webpack() : n.modules;
            o &&
              s.push(function (e) {
                var r = !0,
                  n = !1,
                  a = void 0;
                try {
                  for (
                    var f, u = o[Symbol.iterator]();
                    !(r = (f = u.next()).done);
                    r = !0
                  ) {
                    var i = f.value;
                    if (-1 !== e.indexOf(i)) return t();
                  }
                } catch (c) {
                  (n = !0), (a = c);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (n) throw a;
                  }
                }
              });
          }
          var l = n.suspense
            ? function (e, r) {
                return u.default.createElement(n.lazy, f({}, e, { ref: r }));
              }
            : function (e, r) {
                t();
                var f = u.default.useContext(c.LoadableContext),
                  o = i.useSubscription(a);
                return (
                  u.default.useImperativeHandle(
                    r,
                    function () {
                      return { retry: a.retry };
                    },
                    []
                  ),
                  f &&
                    Array.isArray(n.modules) &&
                    n.modules.forEach(function (e) {
                      f(e);
                    }),
                  u.default.useMemo(
                    function () {
                      return o.loading || o.error
                        ? u.default.createElement(n.loading, {
                            isLoading: o.loading,
                            pastDelay: o.pastDelay,
                            timedOut: o.timedOut,
                            error: o.error,
                            retry: a.retry,
                          })
                        : o.loaded
                        ? u.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e;
                            })(o.loaded),
                            e
                          )
                        : null;
                    },
                    [e, o]
                  )
                );
              };
          return (
            (l.preload = function () {
              return !n.suspense && t();
            }),
            (l.displayName = 'LoadableComponent'),
            u.default.forwardRef(l)
          );
        })(h, e);
      }
      function v(e, r) {
        for (var t = []; e.length; ) {
          var n = e.pop();
          t.push(n(r));
        }
        return Promise.all(t).then(function () {
          if (e.length) return v(e, r);
        });
      }
      (p.preloadAll = function () {
        return new Promise(function (e, r) {
          v(l).then(e, r);
        });
      }),
        (p.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (r) {
            var t = function () {
              return (d = !0), r();
            };
            v(s, e).then(t, t);
          });
        }),
        (window.__NEXT_PRELOADREADY = p.preloadReady);
      var g = p;
      r.default = g;
    },
    5152: function (e, r, t) {
      e.exports = t(90638);
    },
  },
]);
