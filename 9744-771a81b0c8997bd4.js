(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9744],
  {
    20204: function (e, t, r) {
      'use strict';
      var n,
        o = r(2784),
        i = (n = o) && 'object' === typeof n && 'default' in n ? n.default : n,
        s = function () {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            s.apply(this, arguments)
          );
        },
        a =
          'undefined' !== typeof globalThis
            ? globalThis
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof r.g
            ? r.g
            : 'undefined' !== typeof self
            ? self
            : {};
      var c,
        u,
        l,
        p =
          ((c = function (e, t) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r =
              'undefined' !== typeof globalThis
                ? globalThis
                : 'undefined' !== typeof window
                ? window
                : 'undefined' !== typeof a
                ? a
                : 'undefined' !== typeof self
                ? self
                : {};
            function n(e, t) {
              return e((t = { exports: {} }), t.exports), t.exports;
            }
            var o,
              i,
              s = function (e) {
                return e && e.Math == Math && e;
              },
              c =
                s('object' == typeof globalThis && globalThis) ||
                s('object' == typeof window && window) ||
                s('object' == typeof self && self) ||
                s('object' == typeof r && r) ||
                (function () {
                  return this;
                })() ||
                Function('return this')(),
              u = function (e) {
                try {
                  return !!e();
                } catch (t) {
                  return !0;
                }
              },
              l = !u(function () {
                return (
                  7 !=
                  Object.defineProperty({}, 1, {
                    get: function () {
                      return 7;
                    },
                  })[1]
                );
              }),
              p = {}.propertyIsEnumerable,
              f = Object.getOwnPropertyDescriptor,
              d = {
                f:
                  f && !p.call({ 1: 2 }, 1)
                    ? function (e) {
                        var t = f(this, e);
                        return !!t && t.enumerable;
                      }
                    : p,
              },
              h = function (e, t) {
                return {
                  enumerable: !(1 & e),
                  configurable: !(2 & e),
                  writable: !(4 & e),
                  value: t,
                };
              },
              m = {}.toString,
              g = ''.split,
              _ = u(function () {
                return !Object('z').propertyIsEnumerable(0);
              })
                ? function (e) {
                    return 'String' ==
                      (function (e) {
                        return m.call(e).slice(8, -1);
                      })(e)
                      ? g.call(e, '')
                      : Object(e);
                  }
                : Object,
              v = function (e) {
                if (void 0 == e) throw TypeError("Can't call method on " + e);
                return e;
              },
              b = function (e) {
                return _(v(e));
              },
              y = function (e) {
                return 'object' === typeof e
                  ? null !== e
                  : 'function' === typeof e;
              },
              E = function (e) {
                return 'function' == typeof e ? e : void 0;
              },
              k = function (e, t) {
                return arguments.length < 2 ? E(c[e]) : c[e] && c[e][t];
              },
              C = k('navigator', 'userAgent') || '',
              w = c.process,
              A = c.Deno,
              D = (w && w.versions) || (A && A.version),
              x = D && D.v8;
            x
              ? (i = (o = x.split('.'))[0] < 4 ? 1 : o[0] + o[1])
              : C &&
                (!(o = C.match(/Edge\/(\d+)/)) || o[1] >= 74) &&
                (o = C.match(/Chrome\/(\d+)/)) &&
                (i = o[1]);
            var T = i && +i,
              S =
                !!Object.getOwnPropertySymbols &&
                !u(function () {
                  var e = Symbol();
                  return (
                    !String(e) ||
                    !(Object(e) instanceof Symbol) ||
                    (!Symbol.sham && T && T < 41)
                  );
                }),
              L = S && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
              O = L
                ? function (e) {
                    return 'symbol' == typeof e;
                  }
                : function (e) {
                    var t = k('Symbol');
                    return 'function' == typeof t && Object(e) instanceof t;
                  },
              I = function (e, t) {
                try {
                  Object.defineProperty(c, e, {
                    value: t,
                    configurable: !0,
                    writable: !0,
                  });
                } catch (r) {
                  c[e] = t;
                }
                return t;
              },
              P = '__core-js_shared__',
              M = c[P] || I(P, {}),
              F = n(function (e) {
                (e.exports = function (e, t) {
                  return M[e] || (M[e] = void 0 !== t ? t : {});
                })('versions', []).push({
                  version: '3.17.3',
                  mode: 'global',
                  copyright: '\xa9 2021 Denis Pushkarev (zloirock.ru)',
                });
              }),
              R = {}.hasOwnProperty,
              q =
                Object.hasOwn ||
                function (e, t) {
                  return R.call(Object(v(e)), t);
                },
              N = 0,
              j = Math.random(),
              B = function (e) {
                return (
                  'Symbol(' +
                  String(void 0 === e ? '' : e) +
                  ')_' +
                  (++N + j).toString(36)
                );
              },
              z = F('wks'),
              H = c.Symbol,
              U = L ? H : (H && H.withoutSetter) || B,
              G = function (e) {
                return (
                  (q(z, e) && (S || 'string' == typeof z[e])) ||
                    (S && q(H, e) ? (z[e] = H[e]) : (z[e] = U('Symbol.' + e))),
                  z[e]
                );
              },
              V = G('toPrimitive'),
              Z = function (e, t) {
                if (!y(e) || O(e)) return e;
                var r,
                  n = e[V];
                if (void 0 !== n) {
                  if (
                    (void 0 === t && (t = 'default'),
                    (r = n.call(e, t)),
                    !y(r) || O(r))
                  )
                    return r;
                  throw TypeError("Can't convert object to primitive value");
                }
                return (
                  void 0 === t && (t = 'number'),
                  (function (e, t) {
                    var r, n;
                    if (
                      'string' === t &&
                      'function' == typeof (r = e.toString) &&
                      !y((n = r.call(e)))
                    )
                      return n;
                    if (
                      'function' == typeof (r = e.valueOf) &&
                      !y((n = r.call(e)))
                    )
                      return n;
                    if (
                      'string' !== t &&
                      'function' == typeof (r = e.toString) &&
                      !y((n = r.call(e)))
                    )
                      return n;
                    throw TypeError("Can't convert object to primitive value");
                  })(e, t)
                );
              },
              W = function (e) {
                var t = Z(e, 'string');
                return O(t) ? t : String(t);
              },
              K = c.document,
              $ = y(K) && y(K.createElement),
              Y = function (e) {
                return $ ? K.createElement(e) : {};
              },
              J =
                !l &&
                !u(function () {
                  return (
                    7 !=
                    Object.defineProperty(Y('div'), 'a', {
                      get: function () {
                        return 7;
                      },
                    }).a
                  );
                }),
              Q = Object.getOwnPropertyDescriptor,
              X = {
                f: l
                  ? Q
                  : function (e, t) {
                      if (((e = b(e)), (t = W(t)), J))
                        try {
                          return Q(e, t);
                        } catch (r) {}
                      if (q(e, t)) return h(!d.f.call(e, t), e[t]);
                    },
              },
              ee = function (e) {
                if (!y(e)) throw TypeError(String(e) + ' is not an object');
                return e;
              },
              te = Object.defineProperty,
              re = {
                f: l
                  ? te
                  : function (e, t, r) {
                      if ((ee(e), (t = W(t)), ee(r), J))
                        try {
                          return te(e, t, r);
                        } catch (n) {}
                      if ('get' in r || 'set' in r)
                        throw TypeError('Accessors not supported');
                      return 'value' in r && (e[t] = r.value), e;
                    },
              },
              ne = l
                ? function (e, t, r) {
                    return re.f(e, t, h(1, r));
                  }
                : function (e, t, r) {
                    return (e[t] = r), e;
                  },
              oe = Function.toString;
            'function' != typeof M.inspectSource &&
              (M.inspectSource = function (e) {
                return oe.call(e);
              });
            var ie,
              se,
              ae,
              ce = M.inspectSource,
              ue = c.WeakMap,
              le = 'function' === typeof ue && /native code/.test(ce(ue)),
              pe = F('keys'),
              fe = function (e) {
                return pe[e] || (pe[e] = B(e));
              },
              de = {},
              he = 'Object already initialized',
              me = c.WeakMap;
            if (le || M.state) {
              var ge = M.state || (M.state = new me()),
                _e = ge.get,
                ve = ge.has,
                be = ge.set;
              (ie = function (e, t) {
                if (ve.call(ge, e)) throw new TypeError(he);
                return (t.facade = e), be.call(ge, e, t), t;
              }),
                (se = function (e) {
                  return _e.call(ge, e) || {};
                }),
                (ae = function (e) {
                  return ve.call(ge, e);
                });
            } else {
              var ye = fe('state');
              (de[ye] = !0),
                (ie = function (e, t) {
                  if (q(e, ye)) throw new TypeError(he);
                  return (t.facade = e), ne(e, ye, t), t;
                }),
                (se = function (e) {
                  return q(e, ye) ? e[ye] : {};
                }),
                (ae = function (e) {
                  return q(e, ye);
                });
            }
            var Ee = {
                set: ie,
                get: se,
                has: ae,
                enforce: function (e) {
                  return ae(e) ? se(e) : ie(e, {});
                },
                getterFor: function (e) {
                  return function (t) {
                    var r;
                    if (!y(t) || (r = se(t)).type !== e)
                      throw TypeError(
                        'Incompatible receiver, ' + e + ' required'
                      );
                    return r;
                  };
                },
              },
              ke = n(function (e) {
                var t = Ee.get,
                  r = Ee.enforce,
                  n = String(String).split('String');
                (e.exports = function (e, t, o, i) {
                  var s,
                    a = !!i && !!i.unsafe,
                    u = !!i && !!i.enumerable,
                    l = !!i && !!i.noTargetGet;
                  'function' == typeof o &&
                    ('string' != typeof t || q(o, 'name') || ne(o, 'name', t),
                    (s = r(o)).source ||
                      (s.source = n.join('string' == typeof t ? t : ''))),
                    e !== c
                      ? (a ? !l && e[t] && (u = !0) : delete e[t],
                        u ? (e[t] = o) : ne(e, t, o))
                      : u
                      ? (e[t] = o)
                      : I(t, o);
                })(Function.prototype, 'toString', function () {
                  return (
                    ('function' == typeof this && t(this).source) || ce(this)
                  );
                });
              }),
              Ce = Math.ceil,
              we = Math.floor,
              Ae = function (e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? we : Ce)(e);
              },
              De = Math.min,
              xe = Math.max,
              Te = Math.min,
              Se = function (e) {
                return function (t, r, n) {
                  var o,
                    i,
                    s = b(t),
                    a = (o = s.length) > 0 ? De(Ae(o), 9007199254740991) : 0,
                    c = (function (e, t) {
                      var r = Ae(e);
                      return r < 0 ? xe(r + t, 0) : Te(r, t);
                    })(n, a);
                  if (e && r != r) {
                    for (; a > c; ) if ((i = s[c++]) != i) return !0;
                  } else
                    for (; a > c; c++)
                      if ((e || c in s) && s[c] === r) return e || c || 0;
                  return !e && -1;
                };
              },
              Le = { includes: Se(!0), indexOf: Se(!1) },
              Oe = Le.indexOf,
              Ie = function (e, t) {
                var r,
                  n = b(e),
                  o = 0,
                  i = [];
                for (r in n) !q(de, r) && q(n, r) && i.push(r);
                for (; t.length > o; )
                  q(n, (r = t[o++])) && (~Oe(i, r) || i.push(r));
                return i;
              },
              Pe = [
                'constructor',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'toLocaleString',
                'toString',
                'valueOf',
              ],
              Me = Pe.concat('length', 'prototype'),
              Fe = {
                f:
                  Object.getOwnPropertyNames ||
                  function (e) {
                    return Ie(e, Me);
                  },
              },
              Re = { f: Object.getOwnPropertySymbols },
              qe =
                k('Reflect', 'ownKeys') ||
                function (e) {
                  var t = Fe.f(ee(e)),
                    r = Re.f;
                  return r ? t.concat(r(e)) : t;
                },
              Ne = function (e, t) {
                for (
                  var r = qe(t), n = re.f, o = X.f, i = 0;
                  i < r.length;
                  i++
                ) {
                  var s = r[i];
                  q(e, s) || n(e, s, o(t, s));
                }
              },
              je = /#|\.prototype\./,
              Be = function (e, t) {
                var r = He[ze(e)];
                return (
                  r == Ge || (r != Ue && ('function' == typeof t ? u(t) : !!t))
                );
              },
              ze = (Be.normalize = function (e) {
                return String(e).replace(je, '.').toLowerCase();
              }),
              He = (Be.data = {}),
              Ue = (Be.NATIVE = 'N'),
              Ge = (Be.POLYFILL = 'P'),
              Ve = Be,
              Ze = X.f,
              We = function (e, t) {
                var r,
                  n,
                  o,
                  i,
                  s,
                  a = e.target,
                  u = e.global,
                  l = e.stat;
                if ((r = u ? c : l ? c[a] || I(a, {}) : (c[a] || {}).prototype))
                  for (n in t) {
                    if (
                      ((i = t[n]),
                      (o = e.noTargetGet ? (s = Ze(r, n)) && s.value : r[n]),
                      !Ve(u ? n : a + (l ? '.' : '#') + n, e.forced) &&
                        void 0 !== o)
                    ) {
                      if (typeof i === typeof o) continue;
                      Ne(i, o);
                    }
                    (e.sham || (o && o.sham)) && ne(i, 'sham', !0),
                      ke(r, n, i, e);
                  }
              },
              Ke =
                Object.keys ||
                function (e) {
                  return Ie(e, Pe);
                },
              $e = d.f,
              Ye = function (e) {
                return function (t) {
                  for (
                    var r, n = b(t), o = Ke(n), i = o.length, s = 0, a = [];
                    i > s;

                  )
                    (r = o[s++]),
                      (l && !$e.call(n, r)) || a.push(e ? [r, n[r]] : n[r]);
                  return a;
                };
              },
              Je = (Ye(!0), Ye(!1));
            We(
              { target: 'Object', stat: !0 },
              {
                values: function (e) {
                  return Je(e);
                },
              }
            ),
              c.Object.values;
            var Qe,
              Xe = l
                ? Object.defineProperties
                : function (e, t) {
                    ee(e);
                    for (var r, n = Ke(t), o = n.length, i = 0; o > i; )
                      re.f(e, (r = n[i++]), t[r]);
                    return e;
                  },
              et = k('document', 'documentElement'),
              tt = fe('IE_PROTO'),
              rt = function () {},
              nt = function (e) {
                return '<script>' + e + '</script>';
              },
              ot = function (e) {
                e.write(nt('')), e.close();
                var t = e.parentWindow.Object;
                return (e = null), t;
              },
              it = function () {
                try {
                  Qe = new ActiveXObject('htmlfile');
                } catch (t) {}
                it =
                  'undefined' != typeof document
                    ? document.domain && Qe
                      ? ot(Qe)
                      : (function () {
                          var e,
                            t = Y('iframe');
                          return (
                            (t.style.display = 'none'),
                            et.appendChild(t),
                            (t.src = String('javascript:')),
                            (e = t.contentWindow.document).open(),
                            e.write(nt('document.F=Object')),
                            e.close(),
                            e.F
                          );
                        })()
                    : ot(Qe);
                for (var e = Pe.length; e--; ) delete it.prototype[Pe[e]];
                return it();
              };
            de[tt] = !0;
            var st =
                Object.create ||
                function (e, t) {
                  var r;
                  return (
                    null !== e
                      ? ((rt.prototype = ee(e)),
                        (r = new rt()),
                        (rt.prototype = null),
                        (r[tt] = e))
                      : (r = it()),
                    void 0 === t ? r : Xe(r, t)
                  );
                },
              at = G('unscopables'),
              ct = Array.prototype;
            void 0 == ct[at] &&
              re.f(ct, at, { configurable: !0, value: st(null) });
            var ut,
              lt = Le.includes;
            We(
              { target: 'Array', proto: !0 },
              {
                includes: function (e) {
                  return lt(
                    this,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            ),
              (ut = 'includes'),
              (ct[at][ut] = !0);
            var pt,
              ft,
              dt,
              ht = function (e, t, r) {
                if (
                  ((function (e) {
                    if ('function' != typeof e)
                      throw TypeError(String(e) + ' is not a function');
                  })(e),
                  void 0 === t)
                )
                  return e;
                switch (r) {
                  case 0:
                    return function () {
                      return e.call(t);
                    };
                  case 1:
                    return function (r) {
                      return e.call(t, r);
                    };
                  case 2:
                    return function (r, n) {
                      return e.call(t, r, n);
                    };
                  case 3:
                    return function (r, n, o) {
                      return e.call(t, r, n, o);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              },
              mt = Function.call;
            (pt = 'includes'),
              ht(mt, c.Array.prototype[pt], ft),
              (function (e) {
                (e.DOCUMENT = 'document'),
                  (e.PARAGRAPH = 'paragraph'),
                  (e.HEADING_1 = 'heading-1'),
                  (e.HEADING_2 = 'heading-2'),
                  (e.HEADING_3 = 'heading-3'),
                  (e.HEADING_4 = 'heading-4'),
                  (e.HEADING_5 = 'heading-5'),
                  (e.HEADING_6 = 'heading-6'),
                  (e.OL_LIST = 'ordered-list'),
                  (e.UL_LIST = 'unordered-list'),
                  (e.LIST_ITEM = 'list-item'),
                  (e.HR = 'hr'),
                  (e.QUOTE = 'blockquote'),
                  (e.EMBEDDED_ENTRY = 'embedded-entry-block'),
                  (e.EMBEDDED_ASSET = 'embedded-asset-block'),
                  (e.TABLE = 'table'),
                  (e.TABLE_ROW = 'table-row'),
                  (e.TABLE_CELL = 'table-cell'),
                  (e.TABLE_HEADER_CELL = 'table-header-cell');
              })(dt || (dt = {}));
            var gt,
              _t = dt;
            !(function (e) {
              (e.HYPERLINK = 'hyperlink'),
                (e.ENTRY_HYPERLINK = 'entry-hyperlink'),
                (e.ASSET_HYPERLINK = 'asset-hyperlink'),
                (e.EMBEDDED_ENTRY = 'embedded-entry-inline');
            })(gt || (gt = {}));
            var vt,
              bt = gt;
            !(function (e) {
              (e.BOLD = 'bold'),
                (e.ITALIC = 'italic'),
                (e.UNDERLINE = 'underline'),
                (e.CODE = 'code');
            })(vt || (vt = {}));
            var yt,
              Et = vt,
              kt = [
                _t.PARAGRAPH,
                _t.HEADING_1,
                _t.HEADING_2,
                _t.HEADING_3,
                _t.HEADING_4,
                _t.HEADING_5,
                _t.HEADING_6,
                _t.OL_LIST,
                _t.UL_LIST,
                _t.HR,
                _t.QUOTE,
                _t.EMBEDDED_ENTRY,
                _t.EMBEDDED_ASSET,
                _t.TABLE,
              ],
              Ct = [
                _t.PARAGRAPH,
                _t.HEADING_1,
                _t.HEADING_2,
                _t.HEADING_3,
                _t.HEADING_4,
                _t.HEADING_5,
                _t.HEADING_6,
                _t.OL_LIST,
                _t.UL_LIST,
                _t.HR,
                _t.QUOTE,
                _t.EMBEDDED_ENTRY,
                _t.EMBEDDED_ASSET,
              ],
              wt = [
                _t.TABLE,
                _t.TABLE_ROW,
                _t.TABLE_CELL,
                _t.TABLE_HEADER_CELL,
              ],
              At = [_t.HR, _t.EMBEDDED_ENTRY, _t.EMBEDDED_ASSET],
              Dt =
                (((yt = {})[_t.OL_LIST] = [_t.LIST_ITEM]),
                (yt[_t.UL_LIST] = [_t.LIST_ITEM]),
                (yt[_t.LIST_ITEM] = Ct),
                (yt[_t.QUOTE] = [_t.PARAGRAPH]),
                (yt[_t.TABLE] = [_t.TABLE_ROW]),
                (yt[_t.TABLE_ROW] = [_t.TABLE_CELL, _t.TABLE_HEADER_CELL]),
                (yt[_t.TABLE_CELL] = [_t.PARAGRAPH]),
                (yt[_t.TABLE_HEADER_CELL] = [_t.PARAGRAPH]),
                yt),
              xt = {
                nodeType: _t.DOCUMENT,
                data: {},
                content: [
                  {
                    nodeType: _t.PARAGRAPH,
                    data: {},
                    content: [
                      { nodeType: 'text', value: '', marks: [], data: {} },
                    ],
                  },
                ],
              },
              Tt = Object.freeze({
                __proto__: null,
                isInline: function (e) {
                  return Object.values(bt).includes(e.nodeType);
                },
                isBlock: function (e) {
                  return Object.values(_t).includes(e.nodeType);
                },
                isText: function (e) {
                  return 'text' === e.nodeType;
                },
              });
            (t.BLOCKS = _t),
              (t.CONTAINERS = Dt),
              (t.EMPTY_DOCUMENT = xt),
              (t.INLINES = bt),
              (t.LIST_ITEM_BLOCKS = Ct),
              (t.MARKS = Et),
              (t.TABLE_BLOCKS = wt),
              (t.TOP_LEVEL_BLOCKS = kt),
              (t.VOID_BLOCKS = At),
              (t.helpers = Tt);
          }),
          c((u = { exports: {} }), u.exports),
          u.exports);
      (l = p) &&
        l.__esModule &&
        Object.prototype.hasOwnProperty.call(l, 'default') &&
        l.default;
      var f,
        d,
        h = p.BLOCKS,
        m = (p.CONTAINERS, p.EMPTY_DOCUMENT, p.INLINES),
        g = (p.LIST_ITEM_BLOCKS, p.MARKS),
        _ = (p.TABLE_BLOCKS, p.TOP_LEVEL_BLOCKS, p.VOID_BLOCKS, p.helpers);
      function v(e, t) {
        return e.map(function (e, r) {
          return (
            (n = b(e, t)),
            (i = r),
            o.isValidElement(n) && null === n.key
              ? o.cloneElement(n, { key: i })
              : n
          );
          var n, i;
        });
      }
      function b(e, t) {
        var r = t.renderNode,
          n = t.renderMark,
          o = t.renderText;
        if (_.isText(e))
          return e.marks.reduce(
            function (e, t) {
              return n[t.type] ? n[t.type](e) : e;
            },
            o ? o(e.value) : e.value
          );
        var s = v(e.content, t);
        return e.nodeType && r[e.nodeType]
          ? r[e.nodeType](e, s)
          : i.createElement(i.Fragment, null, s);
      }
      var y =
          (((f = {})[h.DOCUMENT] = function (e, t) {
            return t;
          }),
          (f[h.PARAGRAPH] = function (e, t) {
            return i.createElement('p', null, t);
          }),
          (f[h.HEADING_1] = function (e, t) {
            return i.createElement('h1', null, t);
          }),
          (f[h.HEADING_2] = function (e, t) {
            return i.createElement('h2', null, t);
          }),
          (f[h.HEADING_3] = function (e, t) {
            return i.createElement('h3', null, t);
          }),
          (f[h.HEADING_4] = function (e, t) {
            return i.createElement('h4', null, t);
          }),
          (f[h.HEADING_5] = function (e, t) {
            return i.createElement('h5', null, t);
          }),
          (f[h.HEADING_6] = function (e, t) {
            return i.createElement('h6', null, t);
          }),
          (f[h.EMBEDDED_ENTRY] = function (e, t) {
            return i.createElement('div', null, t);
          }),
          (f[h.UL_LIST] = function (e, t) {
            return i.createElement('ul', null, t);
          }),
          (f[h.OL_LIST] = function (e, t) {
            return i.createElement('ol', null, t);
          }),
          (f[h.LIST_ITEM] = function (e, t) {
            return i.createElement('li', null, t);
          }),
          (f[h.QUOTE] = function (e, t) {
            return i.createElement('blockquote', null, t);
          }),
          (f[h.HR] = function () {
            return i.createElement('hr', null);
          }),
          (f[h.TABLE] = function (e, t) {
            return i.createElement('table', null, t);
          }),
          (f[h.TABLE_ROW] = function (e, t) {
            return i.createElement('tr', null, t);
          }),
          (f[h.TABLE_HEADER_CELL] = function (e, t) {
            return i.createElement('th', null, t);
          }),
          (f[h.TABLE_CELL] = function (e, t) {
            return i.createElement('td', null, t);
          }),
          (f[m.ASSET_HYPERLINK] = function (e) {
            return k(m.ASSET_HYPERLINK, e);
          }),
          (f[m.ENTRY_HYPERLINK] = function (e) {
            return k(m.ENTRY_HYPERLINK, e);
          }),
          (f[m.EMBEDDED_ENTRY] = function (e) {
            return k(m.EMBEDDED_ENTRY, e);
          }),
          (f[m.HYPERLINK] = function (e, t) {
            return i.createElement('a', { href: e.data.uri }, t);
          }),
          f),
        E =
          (((d = {})[g.BOLD] = function (e) {
            return i.createElement('b', null, e);
          }),
          (d[g.ITALIC] = function (e) {
            return i.createElement('i', null, e);
          }),
          (d[g.UNDERLINE] = function (e) {
            return i.createElement('u', null, e);
          }),
          (d[g.CODE] = function (e) {
            return i.createElement('code', null, e);
          }),
          d);
      function k(e, t) {
        return i.createElement(
          'span',
          { key: t.data.target.sys.id },
          'type: ',
          t.nodeType,
          ' id: ',
          t.data.target.sys.id
        );
      }
      t.h = function (e, t) {
        return (
          void 0 === t && (t = {}),
          e
            ? b(e, {
                renderNode: s(s({}, y), t.renderNode),
                renderMark: s(s({}, E), t.renderMark),
                renderText: t.renderText,
              })
            : null
        );
      };
    },
    87814: function (e, t, r) {
      'use strict';
      var n =
        'undefined' !== typeof globalThis
          ? globalThis
          : 'undefined' !== typeof window
          ? window
          : 'undefined' !== typeof r.g
          ? r.g
          : 'undefined' !== typeof self
          ? self
          : {};
      function o(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var i,
        s,
        a = function (e) {
          return e && e.Math == Math && e;
        },
        c =
          a('object' == typeof globalThis && globalThis) ||
          a('object' == typeof window && window) ||
          a('object' == typeof self && self) ||
          a('object' == typeof n && n) ||
          (function () {
            return this;
          })() ||
          Function('return this')(),
        u = function (e) {
          try {
            return !!e();
          } catch (t) {
            return !0;
          }
        },
        l = !u(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        }),
        p = {}.propertyIsEnumerable,
        f = Object.getOwnPropertyDescriptor,
        d = {
          f:
            f && !p.call({ 1: 2 }, 1)
              ? function (e) {
                  var t = f(this, e);
                  return !!t && t.enumerable;
                }
              : p,
        },
        h = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        },
        m = {}.toString,
        g = ''.split,
        _ = u(function () {
          return !Object('z').propertyIsEnumerable(0);
        })
          ? function (e) {
              return 'String' ==
                (function (e) {
                  return m.call(e).slice(8, -1);
                })(e)
                ? g.call(e, '')
                : Object(e);
            }
          : Object,
        v = function (e) {
          if (void 0 == e) throw TypeError("Can't call method on " + e);
          return e;
        },
        b = function (e) {
          return _(v(e));
        },
        y = function (e) {
          return 'object' === typeof e ? null !== e : 'function' === typeof e;
        },
        E = function (e) {
          return 'function' == typeof e ? e : void 0;
        },
        k = function (e, t) {
          return arguments.length < 2 ? E(c[e]) : c[e] && c[e][t];
        },
        C = k('navigator', 'userAgent') || '',
        w = c.process,
        A = c.Deno,
        D = (w && w.versions) || (A && A.version),
        x = D && D.v8;
      x
        ? (s = (i = x.split('.'))[0] < 4 ? 1 : i[0] + i[1])
        : C &&
          (!(i = C.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
          (i = C.match(/Chrome\/(\d+)/)) &&
          (s = i[1]);
      var T = s && +s,
        S =
          !!Object.getOwnPropertySymbols &&
          !u(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && T && T < 41)
            );
          }),
        L = S && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
        O = L
          ? function (e) {
              return 'symbol' == typeof e;
            }
          : function (e) {
              var t = k('Symbol');
              return 'function' == typeof t && Object(e) instanceof t;
            },
        I = function (e, t) {
          try {
            Object.defineProperty(c, e, {
              value: t,
              configurable: !0,
              writable: !0,
            });
          } catch (r) {
            c[e] = t;
          }
          return t;
        },
        P = '__core-js_shared__',
        M = c[P] || I(P, {}),
        F = o(function (e) {
          (e.exports = function (e, t) {
            return M[e] || (M[e] = void 0 !== t ? t : {});
          })('versions', []).push({
            version: '3.17.3',
            mode: 'global',
            copyright: '\xa9 2021 Denis Pushkarev (zloirock.ru)',
          });
        }),
        R = {}.hasOwnProperty,
        q =
          Object.hasOwn ||
          function (e, t) {
            return R.call(Object(v(e)), t);
          },
        N = 0,
        j = Math.random(),
        B = function (e) {
          return (
            'Symbol(' +
            String(void 0 === e ? '' : e) +
            ')_' +
            (++N + j).toString(36)
          );
        },
        z = F('wks'),
        H = c.Symbol,
        U = L ? H : (H && H.withoutSetter) || B,
        G = function (e) {
          return (
            (q(z, e) && (S || 'string' == typeof z[e])) ||
              (S && q(H, e) ? (z[e] = H[e]) : (z[e] = U('Symbol.' + e))),
            z[e]
          );
        },
        V = G('toPrimitive'),
        Z = function (e, t) {
          if (!y(e) || O(e)) return e;
          var r,
            n = e[V];
          if (void 0 !== n) {
            if (
              (void 0 === t && (t = 'default'),
              (r = n.call(e, t)),
              !y(r) || O(r))
            )
              return r;
            throw TypeError("Can't convert object to primitive value");
          }
          return (
            void 0 === t && (t = 'number'),
            (function (e, t) {
              var r, n;
              if (
                'string' === t &&
                'function' == typeof (r = e.toString) &&
                !y((n = r.call(e)))
              )
                return n;
              if ('function' == typeof (r = e.valueOf) && !y((n = r.call(e))))
                return n;
              if (
                'string' !== t &&
                'function' == typeof (r = e.toString) &&
                !y((n = r.call(e)))
              )
                return n;
              throw TypeError("Can't convert object to primitive value");
            })(e, t)
          );
        },
        W = function (e) {
          var t = Z(e, 'string');
          return O(t) ? t : String(t);
        },
        K = c.document,
        $ = y(K) && y(K.createElement),
        Y = function (e) {
          return $ ? K.createElement(e) : {};
        },
        J =
          !l &&
          !u(function () {
            return (
              7 !=
              Object.defineProperty(Y('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a
            );
          }),
        Q = Object.getOwnPropertyDescriptor,
        X = {
          f: l
            ? Q
            : function (e, t) {
                if (((e = b(e)), (t = W(t)), J))
                  try {
                    return Q(e, t);
                  } catch (r) {}
                if (q(e, t)) return h(!d.f.call(e, t), e[t]);
              },
        },
        ee = function (e) {
          if (!y(e)) throw TypeError(String(e) + ' is not an object');
          return e;
        },
        te = Object.defineProperty,
        re = {
          f: l
            ? te
            : function (e, t, r) {
                if ((ee(e), (t = W(t)), ee(r), J))
                  try {
                    return te(e, t, r);
                  } catch (n) {}
                if ('get' in r || 'set' in r)
                  throw TypeError('Accessors not supported');
                return 'value' in r && (e[t] = r.value), e;
              },
        },
        ne = l
          ? function (e, t, r) {
              return re.f(e, t, h(1, r));
            }
          : function (e, t, r) {
              return (e[t] = r), e;
            },
        oe = Function.toString;
      'function' != typeof M.inspectSource &&
        (M.inspectSource = function (e) {
          return oe.call(e);
        });
      var ie,
        se,
        ae,
        ce = M.inspectSource,
        ue = c.WeakMap,
        le = 'function' === typeof ue && /native code/.test(ce(ue)),
        pe = F('keys'),
        fe = function (e) {
          return pe[e] || (pe[e] = B(e));
        },
        de = {},
        he = 'Object already initialized',
        me = c.WeakMap;
      if (le || M.state) {
        var ge = M.state || (M.state = new me()),
          _e = ge.get,
          ve = ge.has,
          be = ge.set;
        (ie = function (e, t) {
          if (ve.call(ge, e)) throw new TypeError(he);
          return (t.facade = e), be.call(ge, e, t), t;
        }),
          (se = function (e) {
            return _e.call(ge, e) || {};
          }),
          (ae = function (e) {
            return ve.call(ge, e);
          });
      } else {
        var ye = fe('state');
        (de[ye] = !0),
          (ie = function (e, t) {
            if (q(e, ye)) throw new TypeError(he);
            return (t.facade = e), ne(e, ye, t), t;
          }),
          (se = function (e) {
            return q(e, ye) ? e[ye] : {};
          }),
          (ae = function (e) {
            return q(e, ye);
          });
      }
      var Ee = {
          set: ie,
          get: se,
          has: ae,
          enforce: function (e) {
            return ae(e) ? se(e) : ie(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var r;
              if (!y(t) || (r = se(t)).type !== e)
                throw TypeError('Incompatible receiver, ' + e + ' required');
              return r;
            };
          },
        },
        ke = o(function (e) {
          var t = Ee.get,
            r = Ee.enforce,
            n = String(String).split('String');
          (e.exports = function (e, t, o, i) {
            var s,
              a = !!i && !!i.unsafe,
              u = !!i && !!i.enumerable,
              l = !!i && !!i.noTargetGet;
            'function' == typeof o &&
              ('string' != typeof t || q(o, 'name') || ne(o, 'name', t),
              (s = r(o)).source ||
                (s.source = n.join('string' == typeof t ? t : ''))),
              e !== c
                ? (a ? !l && e[t] && (u = !0) : delete e[t],
                  u ? (e[t] = o) : ne(e, t, o))
                : u
                ? (e[t] = o)
                : I(t, o);
          })(Function.prototype, 'toString', function () {
            return ('function' == typeof this && t(this).source) || ce(this);
          });
        }),
        Ce = Math.ceil,
        we = Math.floor,
        Ae = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? we : Ce)(e);
        },
        De = Math.min,
        xe = Math.max,
        Te = Math.min,
        Se = function (e) {
          return function (t, r, n) {
            var o,
              i,
              s = b(t),
              a = (o = s.length) > 0 ? De(Ae(o), 9007199254740991) : 0,
              c = (function (e, t) {
                var r = Ae(e);
                return r < 0 ? xe(r + t, 0) : Te(r, t);
              })(n, a);
            if (e && r != r) {
              for (; a > c; ) if ((i = s[c++]) != i) return !0;
            } else
              for (; a > c; c++)
                if ((e || c in s) && s[c] === r) return e || c || 0;
            return !e && -1;
          };
        },
        Le = { includes: Se(!0), indexOf: Se(!1) },
        Oe = Le.indexOf,
        Ie = function (e, t) {
          var r,
            n = b(e),
            o = 0,
            i = [];
          for (r in n) !q(de, r) && q(n, r) && i.push(r);
          for (; t.length > o; ) q(n, (r = t[o++])) && (~Oe(i, r) || i.push(r));
          return i;
        },
        Pe = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ],
        Me = Pe.concat('length', 'prototype'),
        Fe = {
          f:
            Object.getOwnPropertyNames ||
            function (e) {
              return Ie(e, Me);
            },
        },
        Re = { f: Object.getOwnPropertySymbols },
        qe =
          k('Reflect', 'ownKeys') ||
          function (e) {
            var t = Fe.f(ee(e)),
              r = Re.f;
            return r ? t.concat(r(e)) : t;
          },
        Ne = function (e, t) {
          for (var r = qe(t), n = re.f, o = X.f, i = 0; i < r.length; i++) {
            var s = r[i];
            q(e, s) || n(e, s, o(t, s));
          }
        },
        je = /#|\.prototype\./,
        Be = function (e, t) {
          var r = He[ze(e)];
          return r == Ge || (r != Ue && ('function' == typeof t ? u(t) : !!t));
        },
        ze = (Be.normalize = function (e) {
          return String(e).replace(je, '.').toLowerCase();
        }),
        He = (Be.data = {}),
        Ue = (Be.NATIVE = 'N'),
        Ge = (Be.POLYFILL = 'P'),
        Ve = Be,
        Ze = X.f,
        We = function (e, t) {
          var r,
            n,
            o,
            i,
            s,
            a = e.target,
            u = e.global,
            l = e.stat;
          if ((r = u ? c : l ? c[a] || I(a, {}) : (c[a] || {}).prototype))
            for (n in t) {
              if (
                ((i = t[n]),
                (o = e.noTargetGet ? (s = Ze(r, n)) && s.value : r[n]),
                !Ve(u ? n : a + (l ? '.' : '#') + n, e.forced) && void 0 !== o)
              ) {
                if (typeof i === typeof o) continue;
                Ne(i, o);
              }
              (e.sham || (o && o.sham)) && ne(i, 'sham', !0), ke(r, n, i, e);
            }
        },
        Ke =
          Object.keys ||
          function (e) {
            return Ie(e, Pe);
          },
        $e = d.f,
        Ye = function (e) {
          return function (t) {
            for (
              var r, n = b(t), o = Ke(n), i = o.length, s = 0, a = [];
              i > s;

            )
              (r = o[s++]),
                (l && !$e.call(n, r)) || a.push(e ? [r, n[r]] : n[r]);
            return a;
          };
        },
        Je = { entries: Ye(!0), values: Ye(!1) }.values;
      We(
        { target: 'Object', stat: !0 },
        {
          values: function (e) {
            return Je(e);
          },
        }
      );
      c.Object.values;
      var Qe,
        Xe = l
          ? Object.defineProperties
          : function (e, t) {
              ee(e);
              for (var r, n = Ke(t), o = n.length, i = 0; o > i; )
                re.f(e, (r = n[i++]), t[r]);
              return e;
            },
        et = k('document', 'documentElement'),
        tt = fe('IE_PROTO'),
        rt = function () {},
        nt = function (e) {
          return '<script>' + e + '</' + 'script>';
        },
        ot = function (e) {
          e.write(nt('')), e.close();
          var t = e.parentWindow.Object;
          return (e = null), t;
        },
        it = function () {
          try {
            Qe = new ActiveXObject('htmlfile');
          } catch (t) {}
          it =
            'undefined' != typeof document
              ? document.domain && Qe
                ? ot(Qe)
                : (function () {
                    var e,
                      t = Y('iframe');
                    return (
                      (t.style.display = 'none'),
                      et.appendChild(t),
                      (t.src = String('javascript:')),
                      (e = t.contentWindow.document).open(),
                      e.write(nt('document.F=Object')),
                      e.close(),
                      e.F
                    );
                  })()
              : ot(Qe);
          for (var e = Pe.length; e--; ) delete it.prototype[Pe[e]];
          return it();
        };
      de[tt] = !0;
      var st =
          Object.create ||
          function (e, t) {
            var r;
            return (
              null !== e
                ? ((rt.prototype = ee(e)),
                  (r = new rt()),
                  (rt.prototype = null),
                  (r[tt] = e))
                : (r = it()),
              void 0 === t ? r : Xe(r, t)
            );
          },
        at = G('unscopables'),
        ct = Array.prototype;
      void 0 == ct[at] && re.f(ct, at, { configurable: !0, value: st(null) });
      var ut,
        lt = Le.includes;
      We(
        { target: 'Array', proto: !0 },
        {
          includes: function (e) {
            return lt(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        (ut = 'includes'),
        (ct[at][ut] = !0);
      var pt,
        ft,
        dt,
        ht = function (e, t, r) {
          if (
            ((function (e) {
              if ('function' != typeof e)
                throw TypeError(String(e) + ' is not a function');
            })(e),
            void 0 === t)
          )
            return e;
          switch (r) {
            case 0:
              return function () {
                return e.call(t);
              };
            case 1:
              return function (r) {
                return e.call(t, r);
              };
            case 2:
              return function (r, n) {
                return e.call(t, r, n);
              };
            case 3:
              return function (r, n, o) {
                return e.call(t, r, n, o);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        },
        mt = Function.call;
      (pt = 'includes'), ht(mt, c['Array'].prototype[pt], ft);
      !(function (e) {
        (e.DOCUMENT = 'document'),
          (e.PARAGRAPH = 'paragraph'),
          (e.HEADING_1 = 'heading-1'),
          (e.HEADING_2 = 'heading-2'),
          (e.HEADING_3 = 'heading-3'),
          (e.HEADING_4 = 'heading-4'),
          (e.HEADING_5 = 'heading-5'),
          (e.HEADING_6 = 'heading-6'),
          (e.OL_LIST = 'ordered-list'),
          (e.UL_LIST = 'unordered-list'),
          (e.LIST_ITEM = 'list-item'),
          (e.HR = 'hr'),
          (e.QUOTE = 'blockquote'),
          (e.EMBEDDED_ENTRY = 'embedded-entry-block'),
          (e.EMBEDDED_ASSET = 'embedded-asset-block'),
          (e.TABLE = 'table'),
          (e.TABLE_ROW = 'table-row'),
          (e.TABLE_CELL = 'table-cell'),
          (e.TABLE_HEADER_CELL = 'table-header-cell');
      })(dt || (dt = {}));
      var gt,
        _t = dt;
      !(function (e) {
        (e.HYPERLINK = 'hyperlink'),
          (e.ENTRY_HYPERLINK = 'entry-hyperlink'),
          (e.ASSET_HYPERLINK = 'asset-hyperlink'),
          (e.EMBEDDED_ENTRY = 'embedded-entry-inline');
      })(gt || (gt = {}));
      var vt,
        bt = gt;
      !(function (e) {
        (e.BOLD = 'bold'),
          (e.ITALIC = 'italic'),
          (e.UNDERLINE = 'underline'),
          (e.CODE = 'code');
      })(vt || (vt = {}));
      var yt,
        Et = vt,
        kt = [
          _t.PARAGRAPH,
          _t.HEADING_1,
          _t.HEADING_2,
          _t.HEADING_3,
          _t.HEADING_4,
          _t.HEADING_5,
          _t.HEADING_6,
          _t.OL_LIST,
          _t.UL_LIST,
          _t.HR,
          _t.QUOTE,
          _t.EMBEDDED_ENTRY,
          _t.EMBEDDED_ASSET,
          _t.TABLE,
        ],
        Ct = [
          _t.PARAGRAPH,
          _t.HEADING_1,
          _t.HEADING_2,
          _t.HEADING_3,
          _t.HEADING_4,
          _t.HEADING_5,
          _t.HEADING_6,
          _t.OL_LIST,
          _t.UL_LIST,
          _t.HR,
          _t.QUOTE,
          _t.EMBEDDED_ENTRY,
          _t.EMBEDDED_ASSET,
        ],
        wt = [_t.TABLE, _t.TABLE_ROW, _t.TABLE_CELL, _t.TABLE_HEADER_CELL],
        At = [_t.HR, _t.EMBEDDED_ENTRY, _t.EMBEDDED_ASSET],
        Dt =
          (((yt = {})[_t.OL_LIST] = [_t.LIST_ITEM]),
          (yt[_t.UL_LIST] = [_t.LIST_ITEM]),
          (yt[_t.LIST_ITEM] = Ct),
          (yt[_t.QUOTE] = [_t.PARAGRAPH]),
          (yt[_t.TABLE] = [_t.TABLE_ROW]),
          (yt[_t.TABLE_ROW] = [_t.TABLE_CELL, _t.TABLE_HEADER_CELL]),
          (yt[_t.TABLE_CELL] = [_t.PARAGRAPH]),
          (yt[_t.TABLE_HEADER_CELL] = [_t.PARAGRAPH]),
          yt),
        xt = {
          nodeType: _t.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: _t.PARAGRAPH,
              data: {},
              content: [{ nodeType: 'text', value: '', marks: [], data: {} }],
            },
          ],
        };
      var Tt = Object.freeze({
        __proto__: null,
        isInline: function (e) {
          return Object.values(bt).includes(e.nodeType);
        },
        isBlock: function (e) {
          return Object.values(_t).includes(e.nodeType);
        },
        isText: function (e) {
          return 'text' === e.nodeType;
        },
      });
      (t.RG = _t), (t.Ev = bt), (t.oN = Et);
    },
    37098: function (e) {
      e.exports = (function () {
        'use strict';
        var e = {
            27: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.FORM_BASE_URL =
                  t.POPUP_SIZE =
                  t.SLIDER_WIDTH =
                  t.SLIDER_POSITION =
                  t.SIDETAB_ATTRIBUTE =
                  t.WIDGET_ATTRIBUTE =
                  t.SLIDER_ATTRIBUTE =
                  t.POPUP_ATTRIBUTE =
                  t.POPOVER_ATTRIBUTE =
                    void 0),
                (t.POPOVER_ATTRIBUTE = 'data-tf-popover'),
                (t.POPUP_ATTRIBUTE = 'data-tf-popup'),
                (t.SLIDER_ATTRIBUTE = 'data-tf-slider'),
                (t.WIDGET_ATTRIBUTE = 'data-tf-widget'),
                (t.SIDETAB_ATTRIBUTE = 'data-tf-sidetab'),
                (t.SLIDER_POSITION = 'right'),
                (t.SLIDER_WIDTH = 800),
                (t.POPUP_SIZE = 100),
                (t.FORM_BASE_URL = 'https://form.typeform.com');
            },
            528: function (e, t, r) {
              var n =
                (this && this.__assign) ||
                function () {
                  return (n =
                    Object.assign ||
                    function (e) {
                      for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in (t = arguments[r]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }).apply(this, arguments);
                };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createPopover = void 0);
              var o = r(747),
                i = r(320),
                s = function (e, t) {
                  var r = e.parentNode;
                  r && (r.removeChild(e), r.appendChild(t));
                },
                a = function (e, t) {
                  void 0 === e && (e = 'div'),
                    void 0 === t && (t = 'tf-v1-popover-button-icon');
                  var r = document.createElement(e);
                  return (
                    (r.className = t),
                    (r.innerHTML = '&times;'),
                    (r.dataset.testid = t),
                    r
                  );
                },
                c = { buttonColor: '#3a7685' };
              t.createPopover = function (e, t) {
                void 0 === t && (t = {});
                var r,
                  u,
                  l,
                  p,
                  f,
                  d,
                  h = n(n({}, c), t),
                  m = o.createIframe(e, 'popover', h),
                  g = m.iframe,
                  _ = m.embedId,
                  v = (function (e, t) {
                    var r = document.createElement('div');
                    return (
                      (r.className = 'tf-v1-popover'),
                      (r.dataset.testid = 'tf-v1-popover'),
                      o.setElementSize(r, { width: e, height: t })
                    );
                  })(h.width, h.height),
                  b = (function () {
                    var e = document.createElement('div');
                    return (
                      (e.className = 'tf-v1-popover-wrapper'),
                      (e.dataset.testid = 'tf-v1-popover-wrapper'),
                      e
                    );
                  })(),
                  y =
                    ((r = h.customIcon),
                    (u = h.buttonColor || c.buttonColor),
                    (l = o.getTextColor(u)),
                    ((p = document.createElement('div')).className =
                      'tf-v1-popover-button-icon'),
                    (p.innerHTML = r
                      ? "<img alt='popover trigger icon button' src='" +
                        r +
                        "'/>"
                      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n    xmlns="http://www.w3.org/2000/svg">\n      <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5\n    9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75\n    7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25\n    7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125\n    17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' +
                        l +
                        '"></path>\n    </svg>'),
                    (p.dataset.testid = 'default-icon'),
                    p),
                  E = (function () {
                    var e = document.createElement('div');
                    e.className = 'tf-v1-spinner';
                    var t = document.createElement('div');
                    return (
                      (t.className = 'tf-v1-popover-button-icon'),
                      (t.dataset.testid = 'spinner-icon'),
                      t.append(e),
                      t
                    );
                  })(),
                  k = a(),
                  C = a('a', 'tf-v1-popover-close'),
                  w = (function (e) {
                    var t = o.getTextColor(e),
                      r = document.createElement('button');
                    return (
                      (r.className = 'tf-v1-popover-button'),
                      (r.dataset.testid = 'tf-v1-popover-button'),
                      (r.style.backgroundColor = e),
                      (r.style.color = t),
                      r
                    );
                  })(h.buttonColor || c.buttonColor),
                  A = o.createHttpWarningBanner();
                (h.container || document.body).append(v),
                  b.append(g),
                  b.append(A),
                  v.append(w),
                  v.append(C),
                  w.append(y);
                var D = function () {
                  f &&
                    f.parentNode &&
                    (f.classList.add('closing'),
                    setTimeout(function () {
                      o.unmountElement(f);
                    }, 250));
                };
                h.tooltip &&
                  h.tooltip.length > 0 &&
                  ((f = (function (e, t) {
                    var r = document.createElement('span');
                    (r.className = 'tf-v1-popover-tooltip-close'),
                      (r.dataset.testid = 'tf-v1-popover-tooltip-close'),
                      (r.innerHTML = '&times;'),
                      (r.onclick = t);
                    var n = document.createElement('div');
                    (n.className = 'tf-v1-popover-tooltip-text'),
                      (n.innerHTML = e);
                    var o = document.createElement('div');
                    return (
                      (o.className = 'tf-v1-popover-tooltip'),
                      (o.dataset.testid = 'tf-v1-popover-tooltip'),
                      o.appendChild(n),
                      o.appendChild(r),
                      o
                    );
                  })(h.tooltip, D)),
                  v.append(f)),
                  h.notificationDays &&
                    (h.enableSandbox || i.canBuildNotificationDot(e)) &&
                    ((d = i.buildNotificationDot()), w.append(d)),
                  (g.onload = function () {
                    v.classList.add('open'),
                      (b.style.opacity = '1'),
                      (C.style.opacity = '1'),
                      s(E, k),
                      o.addCustomKeyboardListener(T);
                  });
                var x = function () {
                    o.isOpen(b) ||
                      (D(),
                      d &&
                        (d.classList.add('closing'),
                        h.notificationDays &&
                          !h.enableSandbox &&
                          i.saveNotificationDotHideUntilTime(
                            e,
                            h.notificationDays
                          ),
                        setTimeout(function () {
                          o.unmountElement(d);
                        }, 250)),
                      setTimeout(function () {
                        o.isInPage(b)
                          ? ((b.style.opacity = '0'),
                            (C.style.opacity = '0'),
                            (b.style.display = 'flex'),
                            setTimeout(function () {
                              v.classList.add('open'),
                                (b.style.opacity = '1'),
                                (C.style.opacity = '1');
                            }),
                            s(y, k))
                          : (v.append(b),
                            s(y, E),
                            (b.style.opacity = '0'),
                            (C.style.opacity = '0'));
                      }));
                  },
                  T = function () {
                    var e;
                    o.isOpen(v) &&
                      (null === (e = t.onClose) || void 0 === e || e.call(t),
                      setTimeout(function () {
                        h.keepSession
                          ? (b.style.display = 'none')
                          : o.unmountElement(b),
                          v.classList.remove('open'),
                          s(k, y);
                      }, 250));
                  };
                o.setAutoClose(_, h.autoClose, T);
                var S = function () {
                  o.isOpen(b) ? T() : x();
                };
                return (
                  (w.onclick = S),
                  (C.onclick = T),
                  h.open &&
                    !o.isOpen(b) &&
                    o.handleCustomOpen(x, h.open, h.openValue),
                  {
                    open: x,
                    close: T,
                    toggle: S,
                    refresh: function () {
                      var e;
                      null === (e = g.contentWindow) ||
                        void 0 === e ||
                        e.location.reload();
                    },
                    unmount: function () {
                      o.unmountElement(v);
                    },
                  }
                );
              };
            },
            797: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      'default' === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                o(r(528), t),
                o(r(100), t);
            },
            320: function (e, t) {
              var r =
                (this && this.__assign) ||
                function () {
                  return (r =
                    Object.assign ||
                    function (e) {
                      for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in (t = arguments[r]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }).apply(this, arguments);
                };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.buildNotificationDot =
                  t.canBuildNotificationDot =
                  t.saveNotificationDotHideUntilTime =
                    void 0);
              var n = 'tfNotificationData',
                o = function () {
                  var e = localStorage.getItem(n);
                  return e ? JSON.parse(e) : {};
                },
                i = function (e) {
                  e && localStorage.setItem(n, JSON.stringify(e));
                };
              (t.saveNotificationDotHideUntilTime = function (e, t) {
                var n,
                  s = new Date();
                s.setDate(s.getDate() + t),
                  i(
                    r(
                      r({}, o()),
                      (((n = {})[e] = { hideUntilTime: s.getTime() }), n)
                    )
                  );
              }),
                (t.canBuildNotificationDot = function (e) {
                  var t = (function (e) {
                    var t;
                    return (
                      (null === (t = o()[e]) || void 0 === t
                        ? void 0
                        : t.hideUntilTime) || 0
                    );
                  })(e);
                  return (
                    new Date().getTime() > t &&
                    (t &&
                      (function (e) {
                        var t = o();
                        delete t[e], i(t);
                      })(e),
                    !0)
                  );
                }),
                (t.buildNotificationDot = function () {
                  var e = document.createElement('span');
                  return (
                    (e.className = 'tf-v1-popover-unread-dot'),
                    (e.dataset.testid = 'tf-v1-popover-unread-dot'),
                    e
                  );
                });
            },
            100: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 });
            },
            630: function (e, t, r) {
              var n =
                (this && this.__rest) ||
                function (e, t) {
                  var r = {};
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) &&
                      t.indexOf(n) < 0 &&
                      (r[n] = e[n]);
                  if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                  ) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                      t.indexOf(n[o]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                        (r[n[o]] = e[n[o]]);
                  }
                  return r;
                };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createPopup = void 0);
              var o = r(747),
                i = r(27),
                s = r(747);
              t.createPopup = function (e, t) {
                if ((void 0 === t && (t = {}), !o.hasDom()))
                  return {
                    open: function () {},
                    close: function () {},
                    toggle: function () {},
                    refresh: function () {},
                    unmount: function () {},
                  };
                var r = t.width,
                  a = t.height,
                  c = t.size,
                  u = void 0 === c ? i.POPUP_SIZE : c,
                  l = t.onClose,
                  p = n(t, ['width', 'height', 'size', 'onClose']),
                  f = o.createIframe(e, 'popup', p),
                  d = f.iframe,
                  h = f.embedId,
                  m = document.body.style.overflow,
                  g = (function () {
                    var e = document.createElement('div');
                    return (
                      (e.className = 'tf-v1-popup'), (e.style.opacity = '0'), e
                    );
                  })(),
                  _ = (function () {
                    var e = document.createElement('div');
                    return (e.className = 'tf-v1-spinner'), e;
                  })(),
                  v = (function (e, t, r) {
                    var n = document.createElement('div');
                    return (
                      (n.className = 'tf-v1-iframe-wrapper'),
                      (n.style.opacity = '0'),
                      o.isDefined(e) && o.isDefined(t)
                        ? o.setElementSize(n, { width: e, height: t })
                        : ((n.style.width = 'calc(' + r + '% - 80px)'),
                          (n.style.height = 'calc(' + r + '% - 80px)'),
                          n)
                    );
                  })(r, a, u),
                  b = o.createHttpWarningBanner();
                v.append(d), v.append(b), g.append(_), g.append(v);
                var y = p.container || document.body;
                d.onload = function () {
                  (v.style.opacity = '1'),
                    setTimeout(function () {
                      _.style.display = 'none';
                    }, 250),
                    o.addCustomKeyboardListener(k);
                };
                var E = function () {
                    s.isOpen(g) ||
                      (s.isInPage(g)
                        ? (g.style.display = 'flex')
                        : ((_.style.display = 'block'), y.append(g)),
                      (document.body.style.overflow = 'hidden'),
                      setTimeout(function () {
                        g.style.opacity = '1';
                      }));
                  },
                  k = function () {
                    s.isOpen(g) &&
                      (null == l || l(),
                      (g.style.opacity = '0'),
                      (document.body.style.overflow = m),
                      setTimeout(function () {
                        p.keepSession ? (g.style.display = 'none') : C();
                      }, 250));
                  };
                v.append(
                  (function (e) {
                    var t = document.createElement('a');
                    return (
                      (t.className = 'tf-v1-close'),
                      (t.innerHTML = '&times;'),
                      (t.onclick = e),
                      t
                    );
                  })(k)
                ),
                  o.setAutoClose(h, p.autoClose, k);
                var C = function () {
                  o.unmountElement(g);
                };
                return (
                  p.open &&
                    !s.isOpen(g) &&
                    o.handleCustomOpen(E, p.open, p.openValue),
                  {
                    open: E,
                    close: k,
                    toggle: function () {
                      s.isOpen(g) ? k() : E();
                    },
                    refresh: function () {
                      var e;
                      null === (e = d.contentWindow) ||
                        void 0 === e ||
                        e.location.reload();
                    },
                    unmount: C,
                  }
                );
              };
            },
            970: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      'default' === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                o(r(630), t),
                o(r(394), t);
            },
            394: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 });
            },
            382: function (e, t, r) {
              var n =
                (this && this.__assign) ||
                function () {
                  return (n =
                    Object.assign ||
                    function (e) {
                      for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in (t = arguments[r]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }).apply(this, arguments);
                };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createSidetab = void 0);
              var o = r(747),
                i = { buttonColor: '#3a7685', buttonText: 'Launch me' },
                s = function (e, t) {
                  void 0 === e && (e = 'div'),
                    void 0 === t && (t = 'tf-v1-sidetab-button-icon');
                  var r = document.createElement(e);
                  return (
                    (r.className = t),
                    (r.innerHTML = '&times;'),
                    (r.dataset.testid = t),
                    r
                  );
                },
                a = function (e, t) {
                  var r = e.parentNode;
                  r && (r.removeChild(e), r.appendChild(t));
                };
              t.createSidetab = function (e, t) {
                void 0 === t && (t = {});
                var r,
                  c,
                  u,
                  l,
                  p,
                  f,
                  d,
                  h = n(n({}, i), t),
                  m = o.createIframe(e, 'side-tab', h),
                  g = m.iframe,
                  _ = m.embedId,
                  v =
                    ((r = h.width),
                    (c = h.height),
                    ((u = document.createElement('div')).className =
                      'tf-v1-sidetab'),
                    (u.dataset.testid = 'tf-v1-sidetab'),
                    o.setElementSize(u, { width: r, height: c })),
                  b = (function () {
                    var e = document.createElement('div');
                    return (
                      (e.className = 'tf-v1-sidetab-wrapper'),
                      (e.dataset.testid = 'tf-v1-sidetab-wrapper'),
                      e
                    );
                  })(),
                  y = (function () {
                    var e = document.createElement('div');
                    e.className = 'tf-v1-spinner';
                    var t = document.createElement('div');
                    return (
                      (t.className = 'tf-v1-sidetab-button-icon'),
                      (t.dataset.testid = 'spinner-icon'),
                      t.append(e),
                      t
                    );
                  })(),
                  E = (function (e) {
                    var t = o.getTextColor(e),
                      r = document.createElement('button');
                    return (
                      (r.className = 'tf-v1-sidetab-button'),
                      (r.style.backgroundColor = e),
                      (r.style.color = t),
                      r
                    );
                  })(h.buttonColor || i.buttonColor),
                  k = (function (e) {
                    var t = document.createElement('span');
                    return (
                      (t.className = 'tf-v1-sidetab-button-text'),
                      (t.innerHTML = e),
                      t
                    );
                  })(h.buttonText || i.buttonText),
                  C =
                    ((l = h.customIcon),
                    (p = h.buttonColor || i.buttonColor),
                    (f = o.getTextColor(p)),
                    ((d = document.createElement('div')).className =
                      'tf-v1-sidetab-button-icon'),
                    (d.innerHTML = l
                      ? "<img alt='sidetab trigger icon button' src='" +
                        l +
                        '\' style="max-width: 100%; max-height: 100%" />'
                      : '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' +
                        f +
                        '"></path>\n</svg>'),
                    (d.dataset.testid = 'default-icon'),
                    d),
                  w = s(),
                  A = s('a', 'tf-v1-sidetab-close'),
                  D = o.createHttpWarningBanner();
                (h.container || document.body).append(v),
                  b.append(g),
                  b.append(D),
                  v.append(E),
                  v.append(A),
                  E.append(C),
                  E.append(k),
                  setTimeout(function () {
                    v.classList.add('ready');
                  }, 250),
                  (g.onload = function () {
                    v.classList.add('open'),
                      a(y, w),
                      o.addCustomKeyboardListener(T);
                  });
                var x = function () {
                    o.isOpen(b) ||
                      (o.isInPage(b)
                        ? ((b.style.display = 'flex'),
                          v.classList.add('open'),
                          a(C, w))
                        : (v.append(b), a(C, y)));
                  },
                  T = function () {
                    var e;
                    o.isOpen(b) &&
                      (null === (e = h.onClose) || void 0 === e || e.call(h),
                      v.classList.remove('open'),
                      setTimeout(function () {
                        h.keepSession
                          ? (b.style.display = 'none')
                          : o.unmountElement(b),
                          a(w, C);
                      }, 250));
                  };
                o.setAutoClose(_, h.autoClose, T);
                var S = function () {
                  o.isOpen(b) ? T() : x();
                };
                return (
                  (E.onclick = S),
                  (A.onclick = T),
                  h.open &&
                    !o.isOpen(b) &&
                    o.handleCustomOpen(x, h.open, h.openValue),
                  {
                    open: x,
                    close: T,
                    toggle: S,
                    refresh: function () {
                      var e;
                      null === (e = g.contentWindow) ||
                        void 0 === e ||
                        e.location.reload();
                    },
                    unmount: function () {
                      o.unmountElement(v);
                    },
                  }
                );
              };
            },
            434: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      'default' === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                o(r(382), t),
                o(r(668), t);
            },
            668: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 });
            },
            603: function (e, t, r) {
              var n =
                (this && this.__rest) ||
                function (e, t) {
                  var r = {};
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) &&
                      t.indexOf(n) < 0 &&
                      (r[n] = e[n]);
                  if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                  ) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                      t.indexOf(n[o]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                        (r[n[o]] = e[n[o]]);
                  }
                  return r;
                };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createSlider = void 0);
              var o = r(747),
                i = r(27);
              t.createSlider = function (e, t) {
                if ((void 0 === t && (t = {}), !o.hasDom()))
                  return {
                    open: function () {},
                    close: function () {},
                    toggle: function () {},
                    refresh: function () {},
                    unmount: function () {},
                  };
                var r = t.position,
                  s = void 0 === r ? i.SLIDER_POSITION : r,
                  a = t.width,
                  c = void 0 === a ? i.SLIDER_WIDTH : a,
                  u = t.onClose,
                  l = n(t, ['position', 'width', 'onClose']),
                  p = o.createIframe(e, 'slider', l),
                  f = p.iframe,
                  d = p.embedId,
                  h = document.body.style.overflow,
                  m = (function (e) {
                    var t = document.createElement('div');
                    return (
                      (t.className = 'tf-v1-slider ' + e),
                      (t.style.opacity = '0'),
                      t
                    );
                  })(s),
                  g = (function () {
                    var e = document.createElement('div');
                    return (e.className = 'tf-v1-spinner'), e;
                  })(),
                  _ = (function (e, t) {
                    var r = document.createElement('div');
                    return (
                      (r.className = 'tf-v1-iframe-wrapper'),
                      (r.style[e] = '-100%'),
                      o.setElementSize(r, { width: t })
                    );
                  })(s, c),
                  v = o.createHttpWarningBanner();
                _.append(f), _.append(v), m.append(g), m.append(_);
                var b = l.container || document.body;
                f.onload = function () {
                  (_.style[s] = '0'),
                    setTimeout(function () {
                      g.style.display = 'none';
                    }, 500),
                    o.addCustomKeyboardListener(E);
                };
                var y = function () {
                    o.isOpen(m) ||
                      (o.isInPage(m)
                        ? ((m.style.display = 'flex'),
                          setTimeout(function () {
                            _.style[s] = '0';
                          }))
                        : (b.append(m), (g.style.display = 'block')),
                      (document.body.style.overflow = 'hidden'),
                      setTimeout(function () {
                        m.style.opacity = '1';
                      }));
                  },
                  E = function () {
                    o.isOpen(m) &&
                      (null == u || u(),
                      (m.style.opacity = '0'),
                      (_.style[s] = '-100%'),
                      (document.body.style.overflow = h),
                      setTimeout(function () {
                        l.keepSession ? (m.style.display = 'none') : k();
                      }, 500));
                  };
                o.setAutoClose(d, l.autoClose, E);
                var k = function () {
                  o.unmountElement(m);
                };
                return (
                  _.append(
                    (function (e) {
                      var t = document.createElement('a');
                      return (
                        (t.className = 'tf-v1-close'),
                        (t.innerHTML = '&times;'),
                        (t.onclick = e),
                        t
                      );
                    })(E)
                  ),
                  l.open &&
                    !o.isOpen(m) &&
                    o.handleCustomOpen(y, l.open, l.openValue),
                  {
                    open: y,
                    close: E,
                    toggle: function () {
                      o.isOpen(m) ? E() : y();
                    },
                    refresh: function () {
                      var e;
                      null === (e = f.contentWindow) ||
                        void 0 === e ||
                        e.location.reload();
                    },
                    unmount: k,
                  }
                );
              };
            },
            331: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      'default' === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                o(r(603), t),
                o(r(162), t);
            },
            162: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 });
            },
            718: function (e, t, r) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createWidget = void 0);
              var n = r(747),
                o = r(554),
                i = r(313);
              t.createWidget = function (e, t) {
                if (!n.hasDom())
                  return { refresh: function () {}, unmount: function () {} };
                var r = t;
                t.inlineOnMobile ||
                  (!t.forceTouch && !n.isFullscreen()) ||
                  ((r.enableFullscreen = !0), (r.forceTouch = !0));
                var s,
                  a = n.createIframe(e, 'widget', r),
                  c = a.embedId,
                  u = a.iframe,
                  l = i.buildWidget(u, t.width, t.height),
                  p = function () {
                    return t.container.append(l);
                  };
                if (
                  ((t.container.innerHTML = ''),
                  t.lazy ? n.lazyInitialize(t.container, p) : p(),
                  r.enableFullscreen)
                ) {
                  var f = t.container;
                  window.addEventListener(
                    'message',
                    o.getWelcomeScreenHiddenHandler(c, f)
                  );
                  var d =
                    (((s = document.createElement('a')).className =
                      'tf-v1-widget-close'),
                    (s.innerHTML = '&times;'),
                    s);
                  (d.onclick = function () {
                    var e;
                    if (
                      (null === (e = t.onClose) || void 0 === e || e.call(t),
                      f.classList.remove('tf-v1-widget-fullscreen'),
                      t.keepSession)
                    ) {
                      var r = document.createElement('div');
                      (r.className = 'tf-v1-widget-iframe-overlay'),
                        (r.onclick = function () {
                          f.classList.add('tf-v1-widget-fullscreen'),
                            n.unmountElement(r);
                        }),
                        l.append(r);
                    } else (t.container.innerHTML = ''), p(), f.append(d);
                  }),
                    f.append(d);
                }
                return {
                  refresh: function () {
                    var e;
                    return null === (e = u.contentWindow) || void 0 === e
                      ? void 0
                      : e.location.reload();
                  },
                  unmount: function () {
                    return n.unmountElement(l);
                  },
                };
              };
            },
            419: function (e, t, r) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.buildWidget = void 0);
              var n = r(747);
              t.buildWidget = function (e, t, r) {
                var o = document.createElement('div');
                (o.className = 'tf-v1-widget'), o.append(e);
                var i = n.createHttpWarningBanner();
                return (
                  o.append(i), n.setElementSize(o, { width: t, height: r })
                );
              };
            },
            313: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      'default' === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                o(r(419), t);
            },
            321: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      'default' === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                o(r(718), t),
                o(r(58), t);
            },
            58: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 });
            },
            920: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      'default' === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                o(r(797), t),
                o(r(970), t),
                o(r(331), t),
                o(r(321), t),
                o(r(434), t);
            },
            626: function (e, t, r) {
              var n =
                (this && this.__assign) ||
                function () {
                  return (n =
                    Object.assign ||
                    function (e) {
                      for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in (t = arguments[r]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }).apply(this, arguments);
                };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.buildIframeSrc = void 0);
              var o = r(27),
                i = r(527),
                s = r(346),
                a = r(698),
                c = {
                  widget: 'embed-widget',
                  popup: 'popup-blank',
                  slider: 'popup-drawer',
                  popover: 'popup-popover',
                  'side-tab': 'popup-side-panel',
                };
              t.buildIframeSrc = function (e) {
                var t = e.formId,
                  r = e.type,
                  u = e.embedId,
                  l = e.options,
                  p = (function (e, t, r) {
                    var o = r.transitiveSearchParams,
                      i = r.source,
                      s = r.medium,
                      u = r.mediumVersion,
                      l = r.hideFooter,
                      p = r.hideHeaders,
                      f = r.opacity,
                      d = r.disableTracking,
                      h = r.enableSandbox,
                      m = r.disableAutoFocus,
                      g = r.shareGaInstance,
                      _ = r.forceTouch,
                      v = r.enableFullscreen,
                      b = r.tracking,
                      y = a.getTransitiveSearchParams(o);
                    return n(
                      n(
                        n(
                          {},
                          {
                            'typeform-embed-id': t,
                            'typeform-embed': c[e],
                            'typeform-source': i,
                            'typeform-medium': s,
                            'typeform-medium-version': u,
                            'embed-hide-footer': l ? 'true' : void 0,
                            'embed-hide-headers': p ? 'true' : void 0,
                            'embed-opacity': f,
                            'disable-tracking': d || h ? 'true' : void 0,
                            'disable-auto-focus': m ? 'true' : void 0,
                            '__dangerous-disable-submissions': h
                              ? 'true'
                              : void 0,
                            'share-ga-instance': g ? 'true' : void 0,
                            'force-touch': _ ? 'true' : void 0,
                            'add-placeholder-ws':
                              'widget' === e && v ? 'true' : void 0,
                          }
                        ),
                        y
                      ),
                      b
                    );
                  })(
                    r,
                    u,
                    (function (e) {
                      return n(
                        n(
                          {},
                          {
                            source:
                              null ===
                                (t =
                                  null === window || void 0 === window
                                    ? void 0
                                    : window.location) || void 0 === t
                                ? void 0
                                : t.hostname.replace(/^www\./, ''),
                            medium: 'embed-sdk',
                            mediumVersion: 'next',
                          }
                        ),
                        i.removeUndefinedKeys(e)
                      );
                      var t;
                    })(l)
                  ),
                  f = (function (e, t) {
                    void 0 === t && (t = !1);
                    var r = t ? 'c' : 'to';
                    return new URL(o.FORM_BASE_URL + '/' + r + '/' + e);
                  })(t, l.chat);
                if (
                  (Object.entries(p)
                    .filter(function (e) {
                      var t = e[1];
                      return s.isDefined(t);
                    })
                    .forEach(function (e) {
                      var t = e[0],
                        r = e[1];
                      f.searchParams.set(t, r);
                    }),
                  l.hidden)
                ) {
                  var d = new URL(o.FORM_BASE_URL);
                  Object.entries(l.hidden)
                    .filter(function (e) {
                      var t = e[1];
                      return s.isDefined(t);
                    })
                    .forEach(function (e) {
                      var t = e[0],
                        r = e[1];
                      d.searchParams.set(t, r);
                    });
                  var h = d.searchParams.toString();
                  h && (f.hash = h);
                }
                return f.href;
              };
            },
            972: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.handleCustomOpen = void 0),
                (t.handleCustomOpen = function (e, t, r) {
                  switch (t) {
                    case 'load':
                      e();
                      break;
                    case 'exit':
                      r &&
                        (function (e, t) {
                          var r = 0,
                            n = function (o) {
                              o.clientY < e && o.clientY < r
                                ? (document.removeEventListener('mousemove', n),
                                  t())
                                : (r = o.clientY);
                            };
                          document.addEventListener('mousemove', n);
                        })(r, e);
                      break;
                    case 'time':
                      setTimeout(function () {
                        e();
                      }, r);
                      break;
                    case 'scroll':
                      r &&
                        (function (e, t) {
                          var r = function () {
                            var n =
                                window.pageYOffset ||
                                document.documentElement.scrollTop,
                              o = document.documentElement.clientTop || 0,
                              i = document.documentElement.scrollHeight,
                              s = n - o,
                              a = (s / i) * 100,
                              c = s + window.innerHeight >= i;
                            (a >= e || c) &&
                              (t(), document.removeEventListener('scroll', r));
                          };
                          document.addEventListener('scroll', r);
                        })(r, e);
                  }
                });
            },
            790: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createHttpWarningBanner = t.getIsWarningNeeded = void 0),
                (t.getIsWarningNeeded = function () {
                  var e,
                    t = new URL(
                      null === (e = window.location) || void 0 === e
                        ? void 0
                        : e.href
                    );
                  return (
                    'https:' !== t.protocol &&
                    'about:srcdoc' !== t.href &&
                    'localhost' !== t.hostname
                  );
                }),
                (t.createHttpWarningBanner = function () {
                  var e = t.getIsWarningNeeded();
                  return e && o(), e ? r() : n();
                });
              var r = function () {
                  var e = document.createElement('div');
                  return (
                    (e.className = 'http-warning-banner'),
                    (e.innerText = i()),
                    e
                  );
                },
                n = function () {
                  return document.createElement('div');
                },
                o = function () {
                  t.getIsWarningNeeded() && console.error(i());
                },
                i = function () {
                  return 'ERROR: Typeform forms can be embedded only on sites served over HTTPS, while this site is using HTTP.';
                };
            },
            553: function (e, t, r) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createIframe = void 0);
              var n = r(626),
                o = r(747),
                i = r(866),
                s = r(554),
                a = r(256),
                c = r(144);
              t.createIframe = function (e, t, r) {
                var u = i.generateEmbedId(),
                  l = r.iframeProps,
                  p = void 0 === l ? {} : l,
                  f = r.onReady,
                  d = r.onQuestionChanged,
                  h = r.onSubmit,
                  m = r.shareGaInstance,
                  g = n.buildIframeSrc({
                    formId: e,
                    embedId: u,
                    type: t,
                    options: r,
                  }),
                  _ = document.createElement('iframe');
                return (
                  (_.src = g),
                  (_.dataset.testid = 'iframe'),
                  (_.style.border = '0px'),
                  (_.allow = 'microphone; camera'),
                  Object.keys(p).forEach(function (e) {
                    _.setAttribute(e, p[e]);
                  }),
                  _.addEventListener('load', a.triggerIframeRedraw, {
                    once: !0,
                  }),
                  window.addEventListener(
                    'message',
                    s.getFormReadyHandler(u, f)
                  ),
                  window.addEventListener(
                    'message',
                    s.getFormQuestionChangedHandler(u, d)
                  ),
                  window.addEventListener(
                    'message',
                    s.getFormSubmitHandler(u, h)
                  ),
                  'widget' !== t &&
                    window.addEventListener(
                      'message',
                      c.dispatchCustomKeyEventFromIframe
                    ),
                  m &&
                    window.addEventListener(
                      'message',
                      s.getFormReadyHandler(u, function () {
                        o.setupGaInstance(_, u, m);
                      })
                    ),
                  { iframe: _, embedId: u }
                );
              };
            },
            866: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.generateEmbedId = void 0),
                (t.generateEmbedId = function () {
                  var e = Math.random();
                  return String(e).split('.')[1];
                });
            },
            554: function (e, t) {
              var r =
                (this && this.__rest) ||
                function (e, t) {
                  var r = {};
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) &&
                      t.indexOf(n) < 0 &&
                      (r[n] = e[n]);
                  if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                  ) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                      t.indexOf(n[o]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                        (r[n[o]] = e[n[o]]);
                  }
                  return r;
                };
              function n(e, t, n) {
                return function (o) {
                  var i = o.data,
                    s = i.type,
                    a = i.embedId,
                    c = r(i, ['type', 'embedId']);
                  s === e && a === t && (null == n || n(c));
                };
              }
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.getFormEventHandler =
                  t.getWelcomeScreenHiddenHandler =
                  t.getFormSubmitHandler =
                  t.getFormQuestionChangedHandler =
                  t.getFormReadyHandler =
                    void 0),
                (t.getFormReadyHandler = function (e, t) {
                  return n('form-ready', e, t);
                }),
                (t.getFormQuestionChangedHandler = function (e, t) {
                  return n('form-screen-changed', e, t);
                }),
                (t.getFormSubmitHandler = function (e, t) {
                  return n('form-submit', e, t);
                }),
                (t.getWelcomeScreenHiddenHandler = function (e, t) {
                  return n('welcome-screen-hidden', e, function () {
                    t.classList.add('tf-v1-widget-fullscreen');
                  });
                }),
                (t.getFormEventHandler = n);
            },
            339: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      'default' === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                o(r(553), t),
                o(r(144), t);
            },
            144: function (e, t) {
              var r =
                  (this && this.__awaiter) ||
                  function (e, t, r, n) {
                    return new (r || (r = Promise))(function (o, i) {
                      function s(e) {
                        try {
                          c(n.next(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function a(e) {
                        try {
                          c(n.throw(e));
                        } catch (e) {
                          i(e);
                        }
                      }
                      function c(e) {
                        var t;
                        e.done
                          ? o(e.value)
                          : ((t = e.value),
                            t instanceof r
                              ? t
                              : new r(function (e) {
                                  e(t);
                                })).then(s, a);
                      }
                      c((n = n.apply(e, t || [])).next());
                    });
                  },
                n =
                  (this && this.__generator) ||
                  function (e, t) {
                    var r,
                      n,
                      o,
                      i,
                      s = {
                        label: 0,
                        sent: function () {
                          if (1 & o[0]) throw o[1];
                          return o[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (i = { next: a(0), throw: a(1), return: a(2) }),
                      'function' == typeof Symbol &&
                        (i[Symbol.iterator] = function () {
                          return this;
                        }),
                      i
                    );
                    function a(i) {
                      return function (a) {
                        return (function (i) {
                          if (r)
                            throw new TypeError(
                              'Generator is already executing.'
                            );
                          for (; s; )
                            try {
                              if (
                                ((r = 1),
                                n &&
                                  (o =
                                    2 & i[0]
                                      ? n.return
                                      : i[0]
                                      ? n.throw ||
                                        ((o = n.return) && o.call(n), 0)
                                      : n.next) &&
                                  !(o = o.call(n, i[1])).done)
                              )
                                return o;
                              switch (
                                ((n = 0), o && (i = [2 & i[0], o.value]), i[0])
                              ) {
                                case 0:
                                case 1:
                                  o = i;
                                  break;
                                case 4:
                                  return s.label++, { value: i[1], done: !1 };
                                case 5:
                                  s.label++, (n = i[1]), (i = [0]);
                                  continue;
                                case 7:
                                  (i = s.ops.pop()), s.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(
                                      (o =
                                        (o = s.trys).length > 0 &&
                                        o[o.length - 1]) ||
                                      (6 !== i[0] && 2 !== i[0])
                                    )
                                  ) {
                                    s = 0;
                                    continue;
                                  }
                                  if (
                                    3 === i[0] &&
                                    (!o || (i[1] > o[0] && i[1] < o[3]))
                                  ) {
                                    s.label = i[1];
                                    break;
                                  }
                                  if (6 === i[0] && s.label < o[1]) {
                                    (s.label = o[1]), (o = i);
                                    break;
                                  }
                                  if (o && s.label < o[2]) {
                                    (s.label = o[2]), s.ops.push(i);
                                    break;
                                  }
                                  o[2] && s.ops.pop(), s.trys.pop();
                                  continue;
                              }
                              i = t.call(e, s);
                            } catch (e) {
                              (i = [6, e]), (n = 0);
                            } finally {
                              r = o = 0;
                            }
                          if (5 & i[0]) throw i[1];
                          return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, a]);
                      };
                    }
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.dispatchCustomKeyEventFromIframe =
                  t.removeCustomKeyboardListener =
                  t.addCustomKeyboardListener =
                    void 0);
              var o = 'Escape',
                i = function (e, i) {
                  return r(void 0, void 0, void 0, function () {
                    return n(this, function (r) {
                      return (
                        e.code === o &&
                          'function' == typeof i &&
                          (i(), t.removeCustomKeyboardListener()),
                        [2]
                      );
                    });
                  });
                };
              (t.addCustomKeyboardListener = function (e) {
                return window.document.addEventListener(
                  'keydown',
                  function (t) {
                    return i(t, e);
                  }
                );
              }),
                (t.removeCustomKeyboardListener = function () {
                  return window.document.removeEventListener('keydown', i);
                }),
                (t.dispatchCustomKeyEventFromIframe = function (e) {
                  'form-close' === e.data.type &&
                    window.document.dispatchEvent(
                      new KeyboardEvent('keydown', { code: o })
                    );
                });
            },
            256: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.triggerIframeRedraw = void 0),
                (t.triggerIframeRedraw = function () {
                  this.style.transform = 'translateZ(0)';
                });
            },
            939: function (e, t, r) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.getTextColor = void 0);
              var n = r(938);
              t.getTextColor = function (e) {
                if (!e) return '#FFFFFF';
                var t = e.startsWith('#')
                    ? n.hexRgb(e)
                    : (function (e) {
                        var t = { red: 0, green: 0, blue: 0 },
                          r = e.match(/\d+/g);
                        return (
                          r &&
                            ((t.red = parseInt(r[0], 10)),
                            (t.green = parseInt(r[0], 10)),
                            (t.blue = parseInt(r[0], 10))),
                          t
                        );
                      })(e),
                  r = t.red,
                  o = t.green,
                  i = t.blue;
                return Math.round((299 * r + 587 * o + 114 * i) / 1e3) > 125
                  ? '#000000'
                  : '#FFFFFF';
              };
            },
            698: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.getTransitiveSearchParams = void 0),
                (t.getTransitiveSearchParams = function (e) {
                  var t = new URL(window.location.href),
                    r = {};
                  return (
                    e &&
                      e.length > 0 &&
                      e.forEach(function (e) {
                        t.searchParams.has(e) && (r[e] = t.searchParams.get(e));
                      }),
                    r
                  );
                });
            },
            252: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.hasDom = void 0),
                (t.hasDom = function () {
                  return (
                    'undefined' != typeof document &&
                    'undefined' != typeof window
                  );
                });
            },
            938: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.hexRgb = void 0);
              var r = new RegExp('[^#a-f\\d]', 'gi'),
                n = new RegExp(
                  '^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$',
                  'i'
                );
              t.hexRgb = function (e) {
                if ('string' != typeof e || r.test(e) || !n.test(e))
                  throw new TypeError('Expected a valid hex string');
                8 === (e = e.replace(/^#/, '')).length && (e = e.slice(0, 6)),
                  4 === e.length && (e = e.slice(0, 3)),
                  3 === e.length &&
                    (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var t = Number.parseInt(e, 16);
                return { red: t >> 16, green: (t >> 8) & 255, blue: 255 & t };
              };
            },
            71: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.includeCss = void 0),
                (t.includeCss = function (e) {
                  var t = (function (e) {
                    return 'https://embed.typeform.com/next/css/' + e;
                  })(e);
                  if (!document.querySelector('link[href="' + t + '"]')) {
                    var r = document.createElement('link');
                    (r.rel = 'stylesheet'),
                      (r.href = t),
                      document.head.append(r);
                  }
                });
            },
            747: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      'default' === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createHttpWarningBanner = void 0),
                o(r(626), t),
                o(r(339), t),
                o(r(252), t),
                o(r(71), t),
                o(r(346), t),
                o(r(377), t),
                o(r(563), t),
                o(r(527), t),
                o(r(533), t),
                o(r(451), t),
                o(r(972), t),
                o(r(748), t),
                o(r(392), t),
                o(r(939), t),
                o(r(917), t);
              var i = r(790);
              Object.defineProperty(t, 'createHttpWarningBanner', {
                enumerable: !0,
                get: function () {
                  return i.createHttpWarningBanner;
                },
              }),
                o(r(987), t);
            },
            346: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.isDefined = void 0),
                (t.isDefined = function (e) {
                  return null != e;
                });
            },
            987: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.isVisible = t.isInPage = t.isOpen = void 0),
                (t.isOpen = function (e) {
                  return t.isInPage(e) && t.isVisible(e);
                }),
                (t.isInPage = function (e) {
                  return !!e.parentNode;
                }),
                (t.isVisible = function (e) {
                  return 'none' !== e.style.display;
                });
            },
            917: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.lazyInitialize = void 0),
                (t.lazyInitialize = function (e, t) {
                  var r = new IntersectionObserver(function (e) {
                    e.forEach(function (e) {
                      e.isIntersecting && (t(), r.unobserve(e.target));
                    });
                  });
                  r.observe(e);
                });
            },
            377: function (e, t) {
              var r =
                (this && this.__assign) ||
                function () {
                  return (r =
                    Object.assign ||
                    function (e) {
                      for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in (t = arguments[r]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }).apply(this, arguments);
                };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.loadOptionsFromAttributes =
                  t.transformAttributeValue =
                  t.camelCaseToKebabCase =
                    void 0),
                (t.camelCaseToKebabCase = function (e) {
                  return e
                    .split('')
                    .map(function (e, t) {
                      return e.toUpperCase() === e
                        ? (0 !== t ? '-' : '') + e.toLowerCase()
                        : e;
                    })
                    .join('');
                });
              var n = function (e) {
                  return e || void 0;
                },
                o = function (e) {
                  return '' === e || 'yes' === e || 'true' === e;
                },
                i = function (e) {
                  var t = e ? parseInt(e, 10) : NaN;
                  return isNaN(t) ? void 0 : t;
                },
                s = '%ESCAPED_COMMA%';
              (t.transformAttributeValue = function (e, t) {
                var a, c;
                switch (t) {
                  case 'string':
                    return n(e);
                  case 'boolean':
                    return o(e);
                  case 'integer':
                    return i(e);
                  case 'function':
                    return (function (e) {
                      var t = e && e in window ? window[e] : void 0;
                      return 'function' == typeof t ? t : void 0;
                    })(e);
                  case 'array':
                    return (function (e) {
                      if (e)
                        return e
                          .replace(/\s/g, '')
                          .replace(/\\,/g, s)
                          .split(',')
                          .filter(function (e) {
                            return !!e;
                          })
                          .map(function (e) {
                            return e.replace(s, ',');
                          });
                    })(e);
                  case 'record':
                    return (function (e) {
                      if (e)
                        return e
                          .replace(/\\,/g, s)
                          .split(',')
                          .filter(function (e) {
                            return !!e;
                          })
                          .map(function (e) {
                            return e.replace(s, ',');
                          })
                          .reduce(function (e, t) {
                            var n,
                              o = t.match(/^([^=]+)=(.*)$/);
                            if (o) {
                              var i = o[1],
                                s = o[2];
                              return r(r({}, e), (((n = {})[i.trim()] = s), n));
                            }
                            return e;
                          }, {});
                    })(e);
                  case 'integerOrBoolean':
                    return null !== (a = i(e)) && void 0 !== a ? a : o(e);
                  case 'stringOrBoolean':
                    return null !== (c = n(e)) && void 0 !== c ? c : o(e);
                  default:
                    throw new Error('Invalid attribute transformation ' + t);
                }
              }),
                (t.loadOptionsFromAttributes = function (e, n) {
                  return Object.keys(n).reduce(function (o, i) {
                    var s;
                    return r(
                      r({}, o),
                      (((s = {})[i] = t.transformAttributeValue(
                        e.getAttribute('data-tf-' + t.camelCaseToKebabCase(i)),
                        n[i]
                      )),
                      s)
                    );
                  }, {});
                });
            },
            563: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.isFullscreen = t.isMobile = t.isBigScreen = void 0),
                (t.isBigScreen = function () {
                  return (
                    window.screen.width >= 1024 && window.screen.height >= 768
                  );
                }),
                (t.isMobile = function () {
                  return /mobile|tablet|android/i.test(
                    navigator.userAgent.toLowerCase()
                  );
                }),
                (t.isFullscreen = function () {
                  return t.isMobile() && !t.isBigScreen();
                });
            },
            527: function (e, t, r) {
              var n =
                (this && this.__assign) ||
                function () {
                  return (n =
                    Object.assign ||
                    function (e) {
                      for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in (t = arguments[r]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }).apply(this, arguments);
                };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.removeUndefinedKeys = void 0);
              var o = r(346);
              t.removeUndefinedKeys = function (e) {
                return Object.entries(e)
                  .filter(function (e) {
                    var t = e[1];
                    return o.isDefined(t);
                  })
                  .reduce(function (e, t) {
                    var r,
                      o = t[0],
                      i = t[1];
                    return n(n({}, e), (((r = {})[o] = i), r));
                  }, {});
              };
            },
            748: function (e, t, r) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.setAutoClose = void 0);
              var n = r(554);
              t.setAutoClose = function (e, t, r) {
                if (t && r) {
                  var o = 'number' == typeof t ? t : 0;
                  window.addEventListener(
                    'message',
                    n.getFormSubmitHandler(e, function () {
                      return setTimeout(r, o);
                    })
                  );
                }
              };
            },
            533: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.setElementSize = void 0),
                (t.setElementSize = function (e, t) {
                  var r = t.width,
                    n = t.height;
                  return (
                    r && (e.style.width = r + 'px'),
                    n && (e.style.height = n + 'px'),
                    e
                  );
                });
            },
            392: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.setupGaInstance = t.sendGaIdMessage = void 0),
                (t.sendGaIdMessage = function (e, t, r) {
                  var n = { embedId: e, gaClientId: t };
                  setTimeout(function () {
                    r &&
                      r.contentWindow &&
                      r.contentWindow.postMessage(
                        { type: 'ga-client-id', data: n },
                        '*'
                      );
                  }, 0);
                });
              var r = function (e) {
                console.error(e);
              };
              t.setupGaInstance = function (e, n, o) {
                try {
                  var i = window[window.GoogleAnalyticsObject],
                    s = 'string' == typeof o ? o : void 0,
                    a = (function (e, t) {
                      return t
                        ? e.find(function (e) {
                            return e.get('trackingId') === t;
                          })
                        : e[0];
                    })(i.getAll(), s);
                  a
                    ? t.sendGaIdMessage(n, a.get('clientId'), e)
                    : r(
                        'Whoops! You enabled the shareGaInstance feature in your typeform embed but the tracker with ID ' +
                          s +
                          ' was not found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page and use correct tracker ID. '
                      );
                } catch (e) {
                  r(
                    'Whoops! You enabled the shareGaInstance feature in your typeform embed but the Google Analytics object has not been found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page. '
                  ),
                    r(e);
                }
              };
            },
            451: function (e, t) {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.unmountElement = void 0),
                (t.unmountElement = function (e) {
                  var t;
                  null === (t = e.parentNode) ||
                    void 0 === t ||
                    t.removeChild(e);
                });
            },
          },
          t = {};
        return (function r(n) {
          if (t[n]) return t[n].exports;
          var o = (t[n] = { exports: {} });
          return e[n].call(o.exports, o, o.exports, r), o.exports;
        })(920);
      })();
    },
    10251: function (e, t, r) {
      'use strict';
      function n(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return (
          t.forEach(function (t) {
            t &&
              Object.keys(t).forEach(function (r) {
                e[r] = t[r];
              });
          }),
          e
        );
      }
      function o(e) {
        return Object.prototype.toString.call(e);
      }
      function i(e) {
        return '[object Function]' === o(e);
      }
      function s(e) {
        return e.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
      }
      var a = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
      var c = {
          'http:': {
            validate: function (e, t, r) {
              var n = e.slice(t);
              return (
                r.re.http ||
                  (r.re.http = new RegExp(
                    '^\\/\\/' +
                      r.re.src_auth +
                      r.re.src_host_port_strict +
                      r.re.src_path,
                    'i'
                  )),
                r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
              );
            },
          },
          'https:': 'http:',
          'ftp:': 'http:',
          '//': {
            validate: function (e, t, r) {
              var n = e.slice(t);
              return (
                r.re.no_http ||
                  (r.re.no_http = new RegExp(
                    '^' +
                      r.re.src_auth +
                      '(?:localhost|(?:(?:' +
                      r.re.src_domain +
                      ')\\.)+' +
                      r.re.src_domain_root +
                      ')' +
                      r.re.src_port +
                      r.re.src_host_terminator +
                      r.re.src_path,
                    'i'
                  )),
                r.re.no_http.test(n)
                  ? (t >= 3 && ':' === e[t - 3]) || (t >= 3 && '/' === e[t - 3])
                    ? 0
                    : n.match(r.re.no_http)[0].length
                  : 0
              );
            },
          },
          'mailto:': {
            validate: function (e, t, r) {
              var n = e.slice(t);
              return (
                r.re.mailto ||
                  (r.re.mailto = new RegExp(
                    '^' + r.re.src_email_name + '@' + r.re.src_host_strict,
                    'i'
                  )),
                r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
              );
            },
          },
        },
        u =
          'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444'.split(
            '|'
          );
      function l(e) {
        var t = (e.re = r(37998)(e.__opts__)),
          n = e.__tlds__.slice();
        function a(e) {
          return e.replace('%TLDS%', t.src_tlds);
        }
        e.onCompile(),
          e.__tlds_replaced__ ||
            n.push(
              'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]'
            ),
          n.push(t.src_xn),
          (t.src_tlds = n.join('|')),
          (t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), 'i')),
          (t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), 'i')),
          (t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), 'i')),
          (t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), 'i'));
        var c = [];
        function u(e, t) {
          throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t);
        }
        (e.__compiled__ = {}),
          Object.keys(e.__schemas__).forEach(function (t) {
            var r = e.__schemas__[t];
            if (null !== r) {
              var n = { validate: null, link: null };
              if (((e.__compiled__[t] = n), '[object Object]' === o(r)))
                return (
                  !(function (e) {
                    return '[object RegExp]' === o(e);
                  })(r.validate)
                    ? i(r.validate)
                      ? (n.validate = r.validate)
                      : u(t, r)
                    : (n.validate = (function (e) {
                        return function (t, r) {
                          var n = t.slice(r);
                          return e.test(n) ? n.match(e)[0].length : 0;
                        };
                      })(r.validate)),
                  void (i(r.normalize)
                    ? (n.normalize = r.normalize)
                    : r.normalize
                    ? u(t, r)
                    : (n.normalize = function (e, t) {
                        t.normalize(e);
                      }))
                );
              !(function (e) {
                return '[object String]' === o(e);
              })(r)
                ? u(t, r)
                : c.push(t);
            }
          }),
          c.forEach(function (t) {
            e.__compiled__[e.__schemas__[t]] &&
              ((e.__compiled__[t].validate =
                e.__compiled__[e.__schemas__[t]].validate),
              (e.__compiled__[t].normalize =
                e.__compiled__[e.__schemas__[t]].normalize));
          }),
          (e.__compiled__[''] = {
            validate: null,
            normalize: function (e, t) {
              t.normalize(e);
            },
          });
        var l = Object.keys(e.__compiled__)
          .filter(function (t) {
            return t.length > 0 && e.__compiled__[t];
          })
          .map(s)
          .join('|');
        (e.re.schema_test = RegExp(
          '(^|(?!_)(?:[><\uff5c]|' + t.src_ZPCc + '))(' + l + ')',
          'i'
        )),
          (e.re.schema_search = RegExp(
            '(^|(?!_)(?:[><\uff5c]|' + t.src_ZPCc + '))(' + l + ')',
            'ig'
          )),
          (e.re.pretest = RegExp(
            '(' +
              e.re.schema_test.source +
              ')|(' +
              e.re.host_fuzzy_test.source +
              ')|@',
            'i'
          )),
          (function (e) {
            (e.__index__ = -1), (e.__text_cache__ = '');
          })(e);
      }
      function p(e, t) {
        var r = e.__index__,
          n = e.__last_index__,
          o = e.__text_cache__.slice(r, n);
        (this.schema = e.__schema__.toLowerCase()),
          (this.index = r + t),
          (this.lastIndex = n + t),
          (this.raw = o),
          (this.text = o),
          (this.url = o);
      }
      function f(e, t) {
        var r = new p(e, t);
        return e.__compiled__[r.schema].normalize(r, e), r;
      }
      function d(e, t) {
        if (!(this instanceof d)) return new d(e, t);
        var r;
        t ||
          ((r = e),
          Object.keys(r || {}).reduce(function (e, t) {
            return e || a.hasOwnProperty(t);
          }, !1) && ((t = e), (e = {}))),
          (this.__opts__ = n({}, a, t)),
          (this.__index__ = -1),
          (this.__last_index__ = -1),
          (this.__schema__ = ''),
          (this.__text_cache__ = ''),
          (this.__schemas__ = n({}, c, e)),
          (this.__compiled__ = {}),
          (this.__tlds__ = u),
          (this.__tlds_replaced__ = !1),
          (this.re = {}),
          l(this);
      }
      (d.prototype.add = function (e, t) {
        return (this.__schemas__[e] = t), l(this), this;
      }),
        (d.prototype.set = function (e) {
          return (this.__opts__ = n(this.__opts__, e)), this;
        }),
        (d.prototype.test = function (e) {
          if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length))
            return !1;
          var t, r, n, o, i, s, a, c;
          if (this.re.schema_test.test(e))
            for (
              (a = this.re.schema_search).lastIndex = 0;
              null !== (t = a.exec(e));

            )
              if ((o = this.testSchemaAt(e, t[2], a.lastIndex))) {
                (this.__schema__ = t[2]),
                  (this.__index__ = t.index + t[1].length),
                  (this.__last_index__ = t.index + t[0].length + o);
                break;
              }
          return (
            this.__opts__.fuzzyLink &&
              this.__compiled__['http:'] &&
              (c = e.search(this.re.host_fuzzy_test)) >= 0 &&
              (this.__index__ < 0 || c < this.__index__) &&
              null !==
                (r = e.match(
                  this.__opts__.fuzzyIP
                    ? this.re.link_fuzzy
                    : this.re.link_no_ip_fuzzy
                )) &&
              ((i = r.index + r[1].length),
              (this.__index__ < 0 || i < this.__index__) &&
                ((this.__schema__ = ''),
                (this.__index__ = i),
                (this.__last_index__ = r.index + r[0].length))),
            this.__opts__.fuzzyEmail &&
              this.__compiled__['mailto:'] &&
              e.indexOf('@') >= 0 &&
              null !== (n = e.match(this.re.email_fuzzy)) &&
              ((i = n.index + n[1].length),
              (s = n.index + n[0].length),
              (this.__index__ < 0 ||
                i < this.__index__ ||
                (i === this.__index__ && s > this.__last_index__)) &&
                ((this.__schema__ = 'mailto:'),
                (this.__index__ = i),
                (this.__last_index__ = s))),
            this.__index__ >= 0
          );
        }),
        (d.prototype.pretest = function (e) {
          return this.re.pretest.test(e);
        }),
        (d.prototype.testSchemaAt = function (e, t, r) {
          return this.__compiled__[t.toLowerCase()]
            ? this.__compiled__[t.toLowerCase()].validate(e, r, this)
            : 0;
        }),
        (d.prototype.match = function (e) {
          var t = 0,
            r = [];
          this.__index__ >= 0 &&
            this.__text_cache__ === e &&
            (r.push(f(this, t)), (t = this.__last_index__));
          for (var n = t ? e.slice(t) : e; this.test(n); )
            r.push(f(this, t)),
              (n = n.slice(this.__last_index__)),
              (t += this.__last_index__);
          return r.length ? r : null;
        }),
        (d.prototype.tlds = function (e, t) {
          return (
            (e = Array.isArray(e) ? e : [e]),
            t
              ? ((this.__tlds__ = this.__tlds__
                  .concat(e)
                  .sort()
                  .filter(function (e, t, r) {
                    return e !== r[t - 1];
                  })
                  .reverse()),
                l(this),
                this)
              : ((this.__tlds__ = e.slice()),
                (this.__tlds_replaced__ = !0),
                l(this),
                this)
          );
        }),
        (d.prototype.normalize = function (e) {
          e.schema || (e.url = 'http://' + e.url),
            'mailto:' !== e.schema ||
              /^mailto:/i.test(e.url) ||
              (e.url = 'mailto:' + e.url);
        }),
        (d.prototype.onCompile = function () {}),
        (e.exports = d);
    },
    37998: function (e, t, r) {
      'use strict';
      e.exports = function (e) {
        var t = {};
        (t.src_Any = r(83530).source),
          (t.src_Cc = r(46889).source),
          (t.src_Z = r(18442).source),
          (t.src_P = r(7062).source),
          (t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join('|')),
          (t.src_ZCc = [t.src_Z, t.src_Cc].join('|'));
        return (
          (t.src_pseudo_letter =
            '(?:(?![><\uff5c]|' + t.src_ZPCc + ')' + t.src_Any + ')'),
          (t.src_ip4 =
            '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'),
          (t.src_auth = '(?:(?:(?!' + t.src_ZCc + '|[@/\\[\\]()]).)+@)?'),
          (t.src_port =
            '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?'),
          (t.src_host_terminator =
            '(?=$|[><\uff5c]|' +
            t.src_ZPCc +
            ')(?!-|_|:\\d|\\.-|\\.(?!$|' +
            t.src_ZPCc +
            '))'),
          (t.src_path =
            '(?:[/?#](?:(?!' +
            t.src_ZCc +
            '|' +
            '[><\uff5c]|[()[\\]{}.,"\'?!\\-;]).|\\[(?:(?!' +
            t.src_ZCc +
            '|\\]).)*\\]|\\((?:(?!' +
            t.src_ZCc +
            '|[)]).)*\\)|\\{(?:(?!' +
            t.src_ZCc +
            '|[}]).)*\\}|\\"(?:(?!' +
            t.src_ZCc +
            '|["]).)+\\"|\\\'(?:(?!' +
            t.src_ZCc +
            "|[']).)+\\'|\\'(?=" +
            t.src_pseudo_letter +
            '|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!' +
            t.src_ZCc +
            '|[.]).|' +
            (e && e['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' : '\\-+|') +
            ',(?!' +
            t.src_ZCc +
            ').|;(?!' +
            t.src_ZCc +
            ').|\\!+(?!' +
            t.src_ZCc +
            '|[!]).|\\?(?!' +
            t.src_ZCc +
            '|[?]).)+|\\/)?'),
          (t.src_email_name =
            '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
          (t.src_xn = 'xn--[a-z0-9\\-]{1,59}'),
          (t.src_domain_root =
            '(?:' + t.src_xn + '|' + t.src_pseudo_letter + '{1,63})'),
          (t.src_domain =
            '(?:' +
            t.src_xn +
            '|(?:' +
            t.src_pseudo_letter +
            ')|(?:' +
            t.src_pseudo_letter +
            '(?:-|' +
            t.src_pseudo_letter +
            '){0,61}' +
            t.src_pseudo_letter +
            '))'),
          (t.src_host =
            '(?:(?:(?:(?:' + t.src_domain + ')\\.)*' + t.src_domain + '))'),
          (t.tpl_host_fuzzy =
            '(?:' +
            t.src_ip4 +
            '|(?:(?:(?:' +
            t.src_domain +
            ')\\.)+(?:%TLDS%)))'),
          (t.tpl_host_no_ip_fuzzy =
            '(?:(?:(?:' + t.src_domain + ')\\.)+(?:%TLDS%))'),
          (t.src_host_strict = t.src_host + t.src_host_terminator),
          (t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator),
          (t.src_host_port_strict =
            t.src_host + t.src_port + t.src_host_terminator),
          (t.tpl_host_port_fuzzy_strict =
            t.tpl_host_fuzzy + t.src_port + t.src_host_terminator),
          (t.tpl_host_port_no_ip_fuzzy_strict =
            t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator),
          (t.tpl_host_fuzzy_test =
            'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' +
            t.src_ZPCc +
            '|>|$))'),
          (t.tpl_email_fuzzy =
            '(^|[><\uff5c]|"|\\(|' +
            t.src_ZCc +
            ')(' +
            t.src_email_name +
            '@' +
            t.tpl_host_fuzzy_strict +
            ')'),
          (t.tpl_link_fuzzy =
            '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' +
            t.src_ZPCc +
            '))((?![$+<=>^`|\uff5c])' +
            t.tpl_host_port_fuzzy_strict +
            t.src_path +
            ')'),
          (t.tpl_link_no_ip_fuzzy =
            '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' +
            t.src_ZPCc +
            '))((?![$+<=>^`|\uff5c])' +
            t.tpl_host_port_no_ip_fuzzy_strict +
            t.src_path +
            ')'),
          t
        );
      };
    },
    13054: function (e, t, r) {
      'use strict';
      e.exports = r(81671);
    },
    83906: function (e, t, r) {
      'use strict';
      e.exports = r(50549);
    },
    75373: function (e) {
      'use strict';
      e.exports = [
        'address',
        'article',
        'aside',
        'base',
        'basefont',
        'blockquote',
        'body',
        'caption',
        'center',
        'col',
        'colgroup',
        'dd',
        'details',
        'dialog',
        'dir',
        'div',
        'dl',
        'dt',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hr',
        'html',
        'iframe',
        'legend',
        'li',
        'link',
        'main',
        'menu',
        'menuitem',
        'nav',
        'noframes',
        'ol',
        'optgroup',
        'option',
        'p',
        'param',
        'section',
        'source',
        'summary',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'title',
        'tr',
        'track',
        'ul',
      ];
    },
    69372: function (e) {
      'use strict';
      var t =
          '<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\x00-\\x20]+|\'[^\']*\'|"[^"]*"))?)*\\s*\\/?>',
        r = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>',
        n = new RegExp(
          '^(?:' +
            t +
            '|' +
            r +
            '|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)'
        ),
        o = new RegExp('^(?:' + t + '|' + r + ')');
      (e.exports.n = n), (e.exports.q = o);
    },
    25292: function (e, t, r) {
      'use strict';
      var n = Object.prototype.hasOwnProperty;
      function o(e, t) {
        return n.call(e, t);
      }
      function i(e) {
        return (
          !(e >= 55296 && e <= 57343) &&
          !(e >= 64976 && e <= 65007) &&
          65535 !== (65535 & e) &&
          65534 !== (65535 & e) &&
          !(e >= 0 && e <= 8) &&
          11 !== e &&
          !(e >= 14 && e <= 31) &&
          !(e >= 127 && e <= 159) &&
          !(e > 1114111)
        );
      }
      function s(e) {
        if (e > 65535) {
          var t = 55296 + ((e -= 65536) >> 10),
            r = 56320 + (1023 & e);
          return String.fromCharCode(t, r);
        }
        return String.fromCharCode(e);
      }
      var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
        c = new RegExp(
          a.source + '|' + /&([a-z#][a-z0-9]{1,31});/gi.source,
          'gi'
        ),
        u = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
        l = r(83906);
      var p = /[&<>"]/,
        f = /[&<>"]/g,
        d = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
      function h(e) {
        return d[e];
      }
      var m = /[.?*+^$[\]\\(){}|-]/g;
      var g = r(7062);
      (t.lib = {}),
        (t.lib.mdurl = r(14976)),
        (t.lib.ucmicro = r(18579)),
        (t.assign = function (e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return (
            t.forEach(function (t) {
              if (t) {
                if ('object' !== typeof t)
                  throw new TypeError(t + 'must be object');
                Object.keys(t).forEach(function (r) {
                  e[r] = t[r];
                });
              }
            }),
            e
          );
        }),
        (t.isString = function (e) {
          return (
            '[object String]' ===
            (function (e) {
              return Object.prototype.toString.call(e);
            })(e)
          );
        }),
        (t.has = o),
        (t.unescapeMd = function (e) {
          return e.indexOf('\\') < 0 ? e : e.replace(a, '$1');
        }),
        (t.unescapeAll = function (e) {
          return e.indexOf('\\') < 0 && e.indexOf('&') < 0
            ? e
            : e.replace(c, function (e, t, r) {
                return (
                  t ||
                  (function (e, t) {
                    var r = 0;
                    return o(l, t)
                      ? l[t]
                      : 35 === t.charCodeAt(0) &&
                        u.test(t) &&
                        i(
                          (r =
                            'x' === t[1].toLowerCase()
                              ? parseInt(t.slice(2), 16)
                              : parseInt(t.slice(1), 10))
                        )
                      ? s(r)
                      : e;
                  })(e, r)
                );
              });
        }),
        (t.isValidEntityCode = i),
        (t.fromCodePoint = s),
        (t.escapeHtml = function (e) {
          return p.test(e) ? e.replace(f, h) : e;
        }),
        (t.arrayReplaceAt = function (e, t, r) {
          return [].concat(e.slice(0, t), r, e.slice(t + 1));
        }),
        (t.isSpace = function (e) {
          switch (e) {
            case 9:
            case 32:
              return !0;
          }
          return !1;
        }),
        (t.isWhiteSpace = function (e) {
          if (e >= 8192 && e <= 8202) return !0;
          switch (e) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
            case 5760:
            case 8239:
            case 8287:
            case 12288:
              return !0;
          }
          return !1;
        }),
        (t.isMdAsciiPunct = function (e) {
          switch (e) {
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 124:
            case 125:
            case 126:
              return !0;
            default:
              return !1;
          }
        }),
        (t.isPunctChar = function (e) {
          return g.test(e);
        }),
        (t.escapeRE = function (e) {
          return e.replace(m, '\\$&');
        }),
        (t.normalizeReference = function (e) {
          return (
            (e = e.trim().replace(/\s+/g, ' ')),
            '\u1e7e' === '\u1e9e'.toLowerCase() &&
              (e = e.replace(/\u1e9e/g, '\xdf')),
            e.toLowerCase().toUpperCase()
          );
        });
    },
    14960: function (e, t, r) {
      'use strict';
      (t.parseLinkLabel = r(21519)),
        (t.parseLinkDestination = r(15361)),
        (t.parseLinkTitle = r(75477));
    },
    15361: function (e, t, r) {
      'use strict';
      var n = r(25292).unescapeAll;
      e.exports = function (e, t, r) {
        var o,
          i,
          s = t,
          a = { ok: !1, pos: 0, lines: 0, str: '' };
        if (60 === e.charCodeAt(t)) {
          for (t++; t < r; ) {
            if (10 === (o = e.charCodeAt(t))) return a;
            if (60 === o) return a;
            if (62 === o)
              return (
                (a.pos = t + 1), (a.str = n(e.slice(s + 1, t))), (a.ok = !0), a
              );
            92 === o && t + 1 < r ? (t += 2) : t++;
          }
          return a;
        }
        for (
          i = 0;
          t < r && 32 !== (o = e.charCodeAt(t)) && !(o < 32 || 127 === o);

        )
          if (92 === o && t + 1 < r) {
            if (32 === e.charCodeAt(t + 1)) break;
            t += 2;
          } else {
            if (40 === o && ++i > 32) return a;
            if (41 === o) {
              if (0 === i) break;
              i--;
            }
            t++;
          }
        return (
          s === t ||
            0 !== i ||
            ((a.str = n(e.slice(s, t))),
            (a.lines = 0),
            (a.pos = t),
            (a.ok = !0)),
          a
        );
      };
    },
    21519: function (e) {
      'use strict';
      e.exports = function (e, t, r) {
        var n,
          o,
          i,
          s,
          a = -1,
          c = e.posMax,
          u = e.pos;
        for (e.pos = t + 1, n = 1; e.pos < c; ) {
          if (93 === (i = e.src.charCodeAt(e.pos)) && 0 === --n) {
            o = !0;
            break;
          }
          if (((s = e.pos), e.md.inline.skipToken(e), 91 === i))
            if (s === e.pos - 1) n++;
            else if (r) return (e.pos = u), -1;
        }
        return o && (a = e.pos), (e.pos = u), a;
      };
    },
    75477: function (e, t, r) {
      'use strict';
      var n = r(25292).unescapeAll;
      e.exports = function (e, t, r) {
        var o,
          i,
          s = 0,
          a = t,
          c = { ok: !1, pos: 0, lines: 0, str: '' };
        if (t >= r) return c;
        if (34 !== (i = e.charCodeAt(t)) && 39 !== i && 40 !== i) return c;
        for (t++, 40 === i && (i = 41); t < r; ) {
          if ((o = e.charCodeAt(t)) === i)
            return (
              (c.pos = t + 1),
              (c.lines = s),
              (c.str = n(e.slice(a + 1, t))),
              (c.ok = !0),
              c
            );
          if (40 === o && 41 === i) return c;
          10 === o
            ? s++
            : 92 === o && t + 1 < r && (t++, 10 === e.charCodeAt(t) && s++),
            t++;
        }
        return c;
      };
    },
    81671: function (e, t, r) {
      'use strict';
      var n = r(25292),
        o = r(14960),
        i = r(33931),
        s = r(88777),
        a = r(89101),
        c = r(54197),
        u = r(10251),
        l = r(14976),
        p = r(68058),
        f = { default: r(61602), zero: r(28373), commonmark: r(35112) },
        d = /^(vbscript|javascript|file|data):/,
        h = /^data:image\/(gif|png|jpeg|webp);/;
      function m(e) {
        var t = e.trim().toLowerCase();
        return !d.test(t) || !!h.test(t);
      }
      var g = ['http:', 'https:', 'mailto:'];
      function _(e) {
        var t = l.parse(e, !0);
        if (t.hostname && (!t.protocol || g.indexOf(t.protocol) >= 0))
          try {
            t.hostname = p.toASCII(t.hostname);
          } catch (r) {}
        return l.encode(l.format(t));
      }
      function v(e) {
        var t = l.parse(e, !0);
        if (t.hostname && (!t.protocol || g.indexOf(t.protocol) >= 0))
          try {
            t.hostname = p.toUnicode(t.hostname);
          } catch (r) {}
        return l.decode(l.format(t), l.decode.defaultChars + '%');
      }
      function b(e, t) {
        if (!(this instanceof b)) return new b(e, t);
        t || n.isString(e) || ((t = e || {}), (e = 'default')),
          (this.inline = new c()),
          (this.block = new a()),
          (this.core = new s()),
          (this.renderer = new i()),
          (this.linkify = new u()),
          (this.validateLink = m),
          (this.normalizeLink = _),
          (this.normalizeLinkText = v),
          (this.utils = n),
          (this.helpers = n.assign({}, o)),
          (this.options = {}),
          this.configure(e),
          t && this.set(t);
      }
      (b.prototype.set = function (e) {
        return n.assign(this.options, e), this;
      }),
        (b.prototype.configure = function (e) {
          var t,
            r = this;
          if (n.isString(e) && !(e = f[(t = e)]))
            throw new Error(
              'Wrong `markdown-it` preset "' + t + '", check name'
            );
          if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
          return (
            e.options && r.set(e.options),
            e.components &&
              Object.keys(e.components).forEach(function (t) {
                e.components[t].rules &&
                  r[t].ruler.enableOnly(e.components[t].rules),
                  e.components[t].rules2 &&
                    r[t].ruler2.enableOnly(e.components[t].rules2);
              }),
            this
          );
        }),
        (b.prototype.enable = function (e, t) {
          var r = [];
          Array.isArray(e) || (e = [e]),
            ['core', 'block', 'inline'].forEach(function (t) {
              r = r.concat(this[t].ruler.enable(e, !0));
            }, this),
            (r = r.concat(this.inline.ruler2.enable(e, !0)));
          var n = e.filter(function (e) {
            return r.indexOf(e) < 0;
          });
          if (n.length && !t)
            throw new Error(
              'MarkdownIt. Failed to enable unknown rule(s): ' + n
            );
          return this;
        }),
        (b.prototype.disable = function (e, t) {
          var r = [];
          Array.isArray(e) || (e = [e]),
            ['core', 'block', 'inline'].forEach(function (t) {
              r = r.concat(this[t].ruler.disable(e, !0));
            }, this),
            (r = r.concat(this.inline.ruler2.disable(e, !0)));
          var n = e.filter(function (e) {
            return r.indexOf(e) < 0;
          });
          if (n.length && !t)
            throw new Error(
              'MarkdownIt. Failed to disable unknown rule(s): ' + n
            );
          return this;
        }),
        (b.prototype.use = function (e) {
          var t = [this].concat(Array.prototype.slice.call(arguments, 1));
          return e.apply(e, t), this;
        }),
        (b.prototype.parse = function (e, t) {
          if ('string' !== typeof e)
            throw new Error('Input data should be a String');
          var r = new this.core.State(e, this, t);
          return this.core.process(r), r.tokens;
        }),
        (b.prototype.render = function (e, t) {
          return (
            (t = t || {}),
            this.renderer.render(this.parse(e, t), this.options, t)
          );
        }),
        (b.prototype.parseInline = function (e, t) {
          var r = new this.core.State(e, this, t);
          return (r.inlineMode = !0), this.core.process(r), r.tokens;
        }),
        (b.prototype.renderInline = function (e, t) {
          return (
            (t = t || {}),
            this.renderer.render(this.parseInline(e, t), this.options, t)
          );
        }),
        (e.exports = b);
    },
    89101: function (e, t, r) {
      'use strict';
      var n = r(51390),
        o = [
          ['table', r(83031), ['paragraph', 'reference']],
          ['code', r(71094)],
          ['fence', r(75883), ['paragraph', 'reference', 'blockquote', 'list']],
          [
            'blockquote',
            r(74261),
            ['paragraph', 'reference', 'blockquote', 'list'],
          ],
          ['hr', r(71208), ['paragraph', 'reference', 'blockquote', 'list']],
          ['list', r(1551), ['paragraph', 'reference', 'blockquote']],
          ['reference', r(74600)],
          ['html_block', r(15231), ['paragraph', 'reference', 'blockquote']],
          ['heading', r(74758), ['paragraph', 'reference', 'blockquote']],
          ['lheading', r(78971)],
          ['paragraph', r(2248)],
        ];
      function i() {
        this.ruler = new n();
        for (var e = 0; e < o.length; e++)
          this.ruler.push(o[e][0], o[e][1], { alt: (o[e][2] || []).slice() });
      }
      (i.prototype.tokenize = function (e, t, r) {
        for (
          var n,
            o = this.ruler.getRules(''),
            i = o.length,
            s = t,
            a = !1,
            c = e.md.options.maxNesting;
          s < r &&
          ((e.line = s = e.skipEmptyLines(s)), !(s >= r)) &&
          !(e.sCount[s] < e.blkIndent);

        ) {
          if (e.level >= c) {
            e.line = r;
            break;
          }
          for (n = 0; n < i && !o[n](e, s, r, !1); n++);
          (e.tight = !a),
            e.isEmpty(e.line - 1) && (a = !0),
            (s = e.line) < r && e.isEmpty(s) && ((a = !0), s++, (e.line = s));
        }
      }),
        (i.prototype.parse = function (e, t, r, n) {
          var o;
          e &&
            ((o = new this.State(e, t, r, n)),
            this.tokenize(o, o.line, o.lineMax));
        }),
        (i.prototype.State = r(89043)),
        (e.exports = i);
    },
    88777: function (e, t, r) {
      'use strict';
      var n = r(51390),
        o = [
          ['normalize', r(37244)],
          ['block', r(92304)],
          ['inline', r(34059)],
          ['linkify', r(99357)],
          ['replacements', r(98919)],
          ['smartquotes', r(32508)],
        ];
      function i() {
        this.ruler = new n();
        for (var e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1]);
      }
      (i.prototype.process = function (e) {
        var t, r, n;
        for (t = 0, r = (n = this.ruler.getRules('')).length; t < r; t++)
          n[t](e);
      }),
        (i.prototype.State = r(47811)),
        (e.exports = i);
    },
    54197: function (e, t, r) {
      'use strict';
      var n = r(51390),
        o = [
          ['text', r(61414)],
          ['newline', r(24537)],
          ['escape', r(28199)],
          ['backticks', r(18706)],
          ['strikethrough', r(70338).w],
          ['emphasis', r(87147).w],
          ['link', r(96267)],
          ['image', r(72641)],
          ['autolink', r(61858)],
          ['html_inline', r(33095)],
          ['entity', r(45796)],
        ],
        i = [
          ['balance_pairs', r(92877)],
          ['strikethrough', r(70338).g],
          ['emphasis', r(87147).g],
          ['text_collapse', r(13659)],
        ];
      function s() {
        var e;
        for (this.ruler = new n(), e = 0; e < o.length; e++)
          this.ruler.push(o[e][0], o[e][1]);
        for (this.ruler2 = new n(), e = 0; e < i.length; e++)
          this.ruler2.push(i[e][0], i[e][1]);
      }
      (s.prototype.skipToken = function (e) {
        var t,
          r,
          n = e.pos,
          o = this.ruler.getRules(''),
          i = o.length,
          s = e.md.options.maxNesting,
          a = e.cache;
        if ('undefined' === typeof a[n]) {
          if (e.level < s)
            for (
              r = 0;
              r < i && (e.level++, (t = o[r](e, !0)), e.level--, !t);
              r++
            );
          else e.pos = e.posMax;
          t || e.pos++, (a[n] = e.pos);
        } else e.pos = a[n];
      }),
        (s.prototype.tokenize = function (e) {
          for (
            var t,
              r,
              n = this.ruler.getRules(''),
              o = n.length,
              i = e.posMax,
              s = e.md.options.maxNesting;
            e.pos < i;

          ) {
            if (e.level < s) for (r = 0; r < o && !(t = n[r](e, !1)); r++);
            if (t) {
              if (e.pos >= i) break;
            } else e.pending += e.src[e.pos++];
          }
          e.pending && e.pushPending();
        }),
        (s.prototype.parse = function (e, t, r, n) {
          var o,
            i,
            s,
            a = new this.State(e, t, r, n);
          for (
            this.tokenize(a), s = (i = this.ruler2.getRules('')).length, o = 0;
            o < s;
            o++
          )
            i[o](a);
        }),
        (s.prototype.State = r(81245)),
        (e.exports = s);
    },
    35112: function (e) {
      'use strict';
      e.exports = {
        options: {
          html: !0,
          xhtmlOut: !0,
          breaks: !1,
          langPrefix: 'language-',
          linkify: !1,
          typographer: !1,
          quotes: '\u201c\u201d\u2018\u2019',
          highlight: null,
          maxNesting: 20,
        },
        components: {
          core: { rules: ['normalize', 'block', 'inline'] },
          block: {
            rules: [
              'blockquote',
              'code',
              'fence',
              'heading',
              'hr',
              'html_block',
              'lheading',
              'list',
              'reference',
              'paragraph',
            ],
          },
          inline: {
            rules: [
              'autolink',
              'backticks',
              'emphasis',
              'entity',
              'escape',
              'html_inline',
              'image',
              'link',
              'newline',
              'text',
            ],
            rules2: ['balance_pairs', 'emphasis', 'text_collapse'],
          },
        },
      };
    },
    61602: function (e) {
      'use strict';
      e.exports = {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: 'language-',
          linkify: !1,
          typographer: !1,
          quotes: '\u201c\u201d\u2018\u2019',
          highlight: null,
          maxNesting: 100,
        },
        components: { core: {}, block: {}, inline: {} },
      };
    },
    28373: function (e) {
      'use strict';
      e.exports = {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: 'language-',
          linkify: !1,
          typographer: !1,
          quotes: '\u201c\u201d\u2018\u2019',
          highlight: null,
          maxNesting: 20,
        },
        components: {
          core: { rules: ['normalize', 'block', 'inline'] },
          block: { rules: ['paragraph'] },
          inline: {
            rules: ['text'],
            rules2: ['balance_pairs', 'text_collapse'],
          },
        },
      };
    },
    33931: function (e, t, r) {
      'use strict';
      var n = r(25292).assign,
        o = r(25292).unescapeAll,
        i = r(25292).escapeHtml,
        s = {};
      function a() {
        this.rules = n({}, s);
      }
      (s.code_inline = function (e, t, r, n, o) {
        var s = e[t];
        return '<code' + o.renderAttrs(s) + '>' + i(e[t].content) + '</code>';
      }),
        (s.code_block = function (e, t, r, n, o) {
          var s = e[t];
          return (
            '<pre' +
            o.renderAttrs(s) +
            '><code>' +
            i(e[t].content) +
            '</code></pre>\n'
          );
        }),
        (s.fence = function (e, t, r, n, s) {
          var a,
            c,
            u,
            l,
            p,
            f = e[t],
            d = f.info ? o(f.info).trim() : '',
            h = '',
            m = '';
          return (
            d && ((h = (u = d.split(/(\s+)/g))[0]), (m = u.slice(2).join(''))),
            0 ===
            (a =
              (r.highlight && r.highlight(f.content, h, m)) ||
              i(f.content)).indexOf('<pre')
              ? a + '\n'
              : d
              ? ((c = f.attrIndex('class')),
                (l = f.attrs ? f.attrs.slice() : []),
                c < 0
                  ? l.push(['class', r.langPrefix + h])
                  : ((l[c] = l[c].slice()),
                    (l[c][1] += ' ' + r.langPrefix + h)),
                (p = { attrs: l }),
                '<pre><code' + s.renderAttrs(p) + '>' + a + '</code></pre>\n')
              : '<pre><code' + s.renderAttrs(f) + '>' + a + '</code></pre>\n'
          );
        }),
        (s.image = function (e, t, r, n, o) {
          var i = e[t];
          return (
            (i.attrs[i.attrIndex('alt')][1] = o.renderInlineAsText(
              i.children,
              r,
              n
            )),
            o.renderToken(e, t, r)
          );
        }),
        (s.hardbreak = function (e, t, r) {
          return r.xhtmlOut ? '<br />\n' : '<br>\n';
        }),
        (s.softbreak = function (e, t, r) {
          return r.breaks ? (r.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
        }),
        (s.text = function (e, t) {
          return i(e[t].content);
        }),
        (s.html_block = function (e, t) {
          return e[t].content;
        }),
        (s.html_inline = function (e, t) {
          return e[t].content;
        }),
        (a.prototype.renderAttrs = function (e) {
          var t, r, n;
          if (!e.attrs) return '';
          for (n = '', t = 0, r = e.attrs.length; t < r; t++)
            n += ' ' + i(e.attrs[t][0]) + '="' + i(e.attrs[t][1]) + '"';
          return n;
        }),
        (a.prototype.renderToken = function (e, t, r) {
          var n,
            o = '',
            i = !1,
            s = e[t];
          return s.hidden
            ? ''
            : (s.block &&
                -1 !== s.nesting &&
                t &&
                e[t - 1].hidden &&
                (o += '\n'),
              (o += (-1 === s.nesting ? '</' : '<') + s.tag),
              (o += this.renderAttrs(s)),
              0 === s.nesting && r.xhtmlOut && (o += ' /'),
              s.block &&
                ((i = !0),
                1 === s.nesting &&
                  t + 1 < e.length &&
                  ('inline' === (n = e[t + 1]).type ||
                    n.hidden ||
                    (-1 === n.nesting && n.tag === s.tag)) &&
                  (i = !1)),
              (o += i ? '>\n' : '>'));
        }),
        (a.prototype.renderInline = function (e, t, r) {
          for (var n, o = '', i = this.rules, s = 0, a = e.length; s < a; s++)
            'undefined' !== typeof i[(n = e[s].type)]
              ? (o += i[n](e, s, t, r, this))
              : (o += this.renderToken(e, s, t));
          return o;
        }),
        (a.prototype.renderInlineAsText = function (e, t, r) {
          for (var n = '', o = 0, i = e.length; o < i; o++)
            'text' === e[o].type
              ? (n += e[o].content)
              : 'image' === e[o].type
              ? (n += this.renderInlineAsText(e[o].children, t, r))
              : 'softbreak' === e[o].type && (n += '\n');
          return n;
        }),
        (a.prototype.render = function (e, t, r) {
          var n,
            o,
            i,
            s = '',
            a = this.rules;
          for (n = 0, o = e.length; n < o; n++)
            'inline' === (i = e[n].type)
              ? (s += this.renderInline(e[n].children, t, r))
              : 'undefined' !== typeof a[i]
              ? (s += a[e[n].type](e, n, t, r, this))
              : (s += this.renderToken(e, n, t, r));
          return s;
        }),
        (e.exports = a);
    },
    51390: function (e) {
      'use strict';
      function t() {
        (this.__rules__ = []), (this.__cache__ = null);
      }
      (t.prototype.__find__ = function (e) {
        for (var t = 0; t < this.__rules__.length; t++)
          if (this.__rules__[t].name === e) return t;
        return -1;
      }),
        (t.prototype.__compile__ = function () {
          var e = this,
            t = [''];
          e.__rules__.forEach(function (e) {
            e.enabled &&
              e.alt.forEach(function (e) {
                t.indexOf(e) < 0 && t.push(e);
              });
          }),
            (e.__cache__ = {}),
            t.forEach(function (t) {
              (e.__cache__[t] = []),
                e.__rules__.forEach(function (r) {
                  r.enabled &&
                    ((t && r.alt.indexOf(t) < 0) || e.__cache__[t].push(r.fn));
                });
            });
        }),
        (t.prototype.at = function (e, t, r) {
          var n = this.__find__(e),
            o = r || {};
          if (-1 === n) throw new Error('Parser rule not found: ' + e);
          (this.__rules__[n].fn = t),
            (this.__rules__[n].alt = o.alt || []),
            (this.__cache__ = null);
        }),
        (t.prototype.before = function (e, t, r, n) {
          var o = this.__find__(e),
            i = n || {};
          if (-1 === o) throw new Error('Parser rule not found: ' + e);
          this.__rules__.splice(o, 0, {
            name: t,
            enabled: !0,
            fn: r,
            alt: i.alt || [],
          }),
            (this.__cache__ = null);
        }),
        (t.prototype.after = function (e, t, r, n) {
          var o = this.__find__(e),
            i = n || {};
          if (-1 === o) throw new Error('Parser rule not found: ' + e);
          this.__rules__.splice(o + 1, 0, {
            name: t,
            enabled: !0,
            fn: r,
            alt: i.alt || [],
          }),
            (this.__cache__ = null);
        }),
        (t.prototype.push = function (e, t, r) {
          var n = r || {};
          this.__rules__.push({
            name: e,
            enabled: !0,
            fn: t,
            alt: n.alt || [],
          }),
            (this.__cache__ = null);
        }),
        (t.prototype.enable = function (e, t) {
          Array.isArray(e) || (e = [e]);
          var r = [];
          return (
            e.forEach(function (e) {
              var n = this.__find__(e);
              if (n < 0) {
                if (t) return;
                throw new Error('Rules manager: invalid rule name ' + e);
              }
              (this.__rules__[n].enabled = !0), r.push(e);
            }, this),
            (this.__cache__ = null),
            r
          );
        }),
        (t.prototype.enableOnly = function (e, t) {
          Array.isArray(e) || (e = [e]),
            this.__rules__.forEach(function (e) {
              e.enabled = !1;
            }),
            this.enable(e, t);
        }),
        (t.prototype.disable = function (e, t) {
          Array.isArray(e) || (e = [e]);
          var r = [];
          return (
            e.forEach(function (e) {
              var n = this.__find__(e);
              if (n < 0) {
                if (t) return;
                throw new Error('Rules manager: invalid rule name ' + e);
              }
              (this.__rules__[n].enabled = !1), r.push(e);
            }, this),
            (this.__cache__ = null),
            r
          );
        }),
        (t.prototype.getRules = function (e) {
          return (
            null === this.__cache__ && this.__compile__(),
            this.__cache__[e] || []
          );
        }),
        (e.exports = t);
    },
    74261: function (e, t, r) {
      'use strict';
      var n = r(25292).isSpace;
      e.exports = function (e, t, r, o) {
        var i,
          s,
          a,
          c,
          u,
          l,
          p,
          f,
          d,
          h,
          m,
          g,
          _,
          v,
          b,
          y,
          E,
          k,
          C,
          w,
          A = e.lineMax,
          D = e.bMarks[t] + e.tShift[t],
          x = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4) return !1;
        if (62 !== e.src.charCodeAt(D++)) return !1;
        if (o) return !0;
        for (
          c = d = e.sCount[t] + 1,
            32 === e.src.charCodeAt(D)
              ? (D++, c++, d++, (i = !1), (y = !0))
              : 9 === e.src.charCodeAt(D)
              ? ((y = !0),
                (e.bsCount[t] + d) % 4 === 3
                  ? (D++, c++, d++, (i = !1))
                  : (i = !0))
              : (y = !1),
            h = [e.bMarks[t]],
            e.bMarks[t] = D;
          D < x && ((s = e.src.charCodeAt(D)), n(s));

        )
          9 === s ? (d += 4 - ((d + e.bsCount[t] + (i ? 1 : 0)) % 4)) : d++,
            D++;
        for (
          m = [e.bsCount[t]],
            e.bsCount[t] = e.sCount[t] + 1 + (y ? 1 : 0),
            l = D >= x,
            v = [e.sCount[t]],
            e.sCount[t] = d - c,
            b = [e.tShift[t]],
            e.tShift[t] = D - e.bMarks[t],
            k = e.md.block.ruler.getRules('blockquote'),
            _ = e.parentType,
            e.parentType = 'blockquote',
            f = t + 1;
          f < r &&
          ((w = e.sCount[f] < e.blkIndent),
          !((D = e.bMarks[f] + e.tShift[f]) >= (x = e.eMarks[f])));
          f++
        )
          if (62 !== e.src.charCodeAt(D++) || w) {
            if (l) break;
            for (E = !1, a = 0, u = k.length; a < u; a++)
              if (k[a](e, f, r, !0)) {
                E = !0;
                break;
              }
            if (E) {
              (e.lineMax = f),
                0 !== e.blkIndent &&
                  (h.push(e.bMarks[f]),
                  m.push(e.bsCount[f]),
                  b.push(e.tShift[f]),
                  v.push(e.sCount[f]),
                  (e.sCount[f] -= e.blkIndent));
              break;
            }
            h.push(e.bMarks[f]),
              m.push(e.bsCount[f]),
              b.push(e.tShift[f]),
              v.push(e.sCount[f]),
              (e.sCount[f] = -1);
          } else {
            for (
              c = d = e.sCount[f] + 1,
                32 === e.src.charCodeAt(D)
                  ? (D++, c++, d++, (i = !1), (y = !0))
                  : 9 === e.src.charCodeAt(D)
                  ? ((y = !0),
                    (e.bsCount[f] + d) % 4 === 3
                      ? (D++, c++, d++, (i = !1))
                      : (i = !0))
                  : (y = !1),
                h.push(e.bMarks[f]),
                e.bMarks[f] = D;
              D < x && ((s = e.src.charCodeAt(D)), n(s));

            )
              9 === s ? (d += 4 - ((d + e.bsCount[f] + (i ? 1 : 0)) % 4)) : d++,
                D++;
            (l = D >= x),
              m.push(e.bsCount[f]),
              (e.bsCount[f] = e.sCount[f] + 1 + (y ? 1 : 0)),
              v.push(e.sCount[f]),
              (e.sCount[f] = d - c),
              b.push(e.tShift[f]),
              (e.tShift[f] = D - e.bMarks[f]);
          }
        for (
          g = e.blkIndent,
            e.blkIndent = 0,
            (C = e.push('blockquote_open', 'blockquote', 1)).markup = '>',
            C.map = p = [t, 0],
            e.md.block.tokenize(e, t, f),
            (C = e.push('blockquote_close', 'blockquote', -1)).markup = '>',
            e.lineMax = A,
            e.parentType = _,
            p[1] = e.line,
            a = 0;
          a < b.length;
          a++
        )
          (e.bMarks[a + t] = h[a]),
            (e.tShift[a + t] = b[a]),
            (e.sCount[a + t] = v[a]),
            (e.bsCount[a + t] = m[a]);
        return (e.blkIndent = g), !0;
      };
    },
    71094: function (e) {
      'use strict';
      e.exports = function (e, t, r) {
        var n, o, i;
        if (e.sCount[t] - e.blkIndent < 4) return !1;
        for (o = n = t + 1; n < r; )
          if (e.isEmpty(n)) n++;
          else {
            if (!(e.sCount[n] - e.blkIndent >= 4)) break;
            o = ++n;
          }
        return (
          (e.line = o),
          ((i = e.push('code_block', 'code', 0)).content =
            e.getLines(t, o, 4 + e.blkIndent, !1) + '\n'),
          (i.map = [t, e.line]),
          !0
        );
      };
    },
    75883: function (e) {
      'use strict';
      e.exports = function (e, t, r, n) {
        var o,
          i,
          s,
          a,
          c,
          u,
          l,
          p = !1,
          f = e.bMarks[t] + e.tShift[t],
          d = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4) return !1;
        if (f + 3 > d) return !1;
        if (126 !== (o = e.src.charCodeAt(f)) && 96 !== o) return !1;
        if (((c = f), (i = (f = e.skipChars(f, o)) - c) < 3)) return !1;
        if (
          ((l = e.src.slice(c, f)),
          (s = e.src.slice(f, d)),
          96 === o && s.indexOf(String.fromCharCode(o)) >= 0)
        )
          return !1;
        if (n) return !0;
        for (
          a = t;
          !(++a >= r) &&
          !(
            (f = c = e.bMarks[a] + e.tShift[a]) < (d = e.eMarks[a]) &&
            e.sCount[a] < e.blkIndent
          );

        )
          if (
            e.src.charCodeAt(f) === o &&
            !(e.sCount[a] - e.blkIndent >= 4) &&
            !((f = e.skipChars(f, o)) - c < i) &&
            !((f = e.skipSpaces(f)) < d)
          ) {
            p = !0;
            break;
          }
        return (
          (i = e.sCount[t]),
          (e.line = a + (p ? 1 : 0)),
          ((u = e.push('fence', 'code', 0)).info = s),
          (u.content = e.getLines(t + 1, a, i, !0)),
          (u.markup = l),
          (u.map = [t, e.line]),
          !0
        );
      };
    },
    74758: function (e, t, r) {
      'use strict';
      var n = r(25292).isSpace;
      e.exports = function (e, t, r, o) {
        var i,
          s,
          a,
          c,
          u = e.bMarks[t] + e.tShift[t],
          l = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4) return !1;
        if (35 !== (i = e.src.charCodeAt(u)) || u >= l) return !1;
        for (s = 1, i = e.src.charCodeAt(++u); 35 === i && u < l && s <= 6; )
          s++, (i = e.src.charCodeAt(++u));
        return (
          !(s > 6 || (u < l && !n(i))) &&
          (o ||
            ((l = e.skipSpacesBack(l, u)),
            (a = e.skipCharsBack(l, 35, u)) > u &&
              n(e.src.charCodeAt(a - 1)) &&
              (l = a),
            (e.line = t + 1),
            ((c = e.push('heading_open', 'h' + String(s), 1)).markup =
              '########'.slice(0, s)),
            (c.map = [t, e.line]),
            ((c = e.push('inline', '', 0)).content = e.src.slice(u, l).trim()),
            (c.map = [t, e.line]),
            (c.children = []),
            ((c = e.push('heading_close', 'h' + String(s), -1)).markup =
              '########'.slice(0, s))),
          !0)
        );
      };
    },
    71208: function (e, t, r) {
      'use strict';
      var n = r(25292).isSpace;
      e.exports = function (e, t, r, o) {
        var i,
          s,
          a,
          c,
          u = e.bMarks[t] + e.tShift[t],
          l = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4) return !1;
        if (42 !== (i = e.src.charCodeAt(u++)) && 45 !== i && 95 !== i)
          return !1;
        for (s = 1; u < l; ) {
          if ((a = e.src.charCodeAt(u++)) !== i && !n(a)) return !1;
          a === i && s++;
        }
        return (
          !(s < 3) &&
          (o ||
            ((e.line = t + 1),
            ((c = e.push('hr', 'hr', 0)).map = [t, e.line]),
            (c.markup = Array(s + 1).join(String.fromCharCode(i)))),
          !0)
        );
      };
    },
    15231: function (e, t, r) {
      'use strict';
      var n = r(75373),
        o = r(69372).q,
        i = [
          [
            /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
            /<\/(script|pre|style|textarea)>/i,
            !0,
          ],
          [/^<!--/, /-->/, !0],
          [/^<\?/, /\?>/, !0],
          [/^<![A-Z]/, />/, !0],
          [/^<!\[CDATA\[/, /\]\]>/, !0],
          [
            new RegExp('^</?(' + n.join('|') + ')(?=(\\s|/?>|$))', 'i'),
            /^$/,
            !0,
          ],
          [new RegExp(o.source + '\\s*$'), /^$/, !1],
        ];
      e.exports = function (e, t, r, n) {
        var o,
          s,
          a,
          c,
          u = e.bMarks[t] + e.tShift[t],
          l = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4) return !1;
        if (!e.md.options.html) return !1;
        if (60 !== e.src.charCodeAt(u)) return !1;
        for (
          c = e.src.slice(u, l), o = 0;
          o < i.length && !i[o][0].test(c);
          o++
        );
        if (o === i.length) return !1;
        if (n) return i[o][2];
        if (((s = t + 1), !i[o][1].test(c)))
          for (; s < r && !(e.sCount[s] < e.blkIndent); s++)
            if (
              ((u = e.bMarks[s] + e.tShift[s]),
              (l = e.eMarks[s]),
              (c = e.src.slice(u, l)),
              i[o][1].test(c))
            ) {
              0 !== c.length && s++;
              break;
            }
        return (
          (e.line = s),
          ((a = e.push('html_block', '', 0)).map = [t, s]),
          (a.content = e.getLines(t, s, e.blkIndent, !0)),
          !0
        );
      };
    },
    78971: function (e) {
      'use strict';
      e.exports = function (e, t, r) {
        var n,
          o,
          i,
          s,
          a,
          c,
          u,
          l,
          p,
          f,
          d = t + 1,
          h = e.md.block.ruler.getRules('paragraph');
        if (e.sCount[t] - e.blkIndent >= 4) return !1;
        for (
          f = e.parentType, e.parentType = 'paragraph';
          d < r && !e.isEmpty(d);
          d++
        )
          if (!(e.sCount[d] - e.blkIndent > 3)) {
            if (
              e.sCount[d] >= e.blkIndent &&
              (c = e.bMarks[d] + e.tShift[d]) < (u = e.eMarks[d]) &&
              (45 === (p = e.src.charCodeAt(c)) || 61 === p) &&
              ((c = e.skipChars(c, p)), (c = e.skipSpaces(c)) >= u)
            ) {
              l = 61 === p ? 1 : 2;
              break;
            }
            if (!(e.sCount[d] < 0)) {
              for (o = !1, i = 0, s = h.length; i < s; i++)
                if (h[i](e, d, r, !0)) {
                  o = !0;
                  break;
                }
              if (o) break;
            }
          }
        return (
          !!l &&
          ((n = e.getLines(t, d, e.blkIndent, !1).trim()),
          (e.line = d + 1),
          ((a = e.push('heading_open', 'h' + String(l), 1)).markup =
            String.fromCharCode(p)),
          (a.map = [t, e.line]),
          ((a = e.push('inline', '', 0)).content = n),
          (a.map = [t, e.line - 1]),
          (a.children = []),
          ((a = e.push('heading_close', 'h' + String(l), -1)).markup =
            String.fromCharCode(p)),
          (e.parentType = f),
          !0)
        );
      };
    },
    1551: function (e, t, r) {
      'use strict';
      var n = r(25292).isSpace;
      function o(e, t) {
        var r, o, i, s;
        return (
          (o = e.bMarks[t] + e.tShift[t]),
          (i = e.eMarks[t]),
          (42 !== (r = e.src.charCodeAt(o++)) && 45 !== r && 43 !== r) ||
          (o < i && ((s = e.src.charCodeAt(o)), !n(s)))
            ? -1
            : o
        );
      }
      function i(e, t) {
        var r,
          o = e.bMarks[t] + e.tShift[t],
          i = o,
          s = e.eMarks[t];
        if (i + 1 >= s) return -1;
        if ((r = e.src.charCodeAt(i++)) < 48 || r > 57) return -1;
        for (;;) {
          if (i >= s) return -1;
          if (!((r = e.src.charCodeAt(i++)) >= 48 && r <= 57)) {
            if (41 === r || 46 === r) break;
            return -1;
          }
          if (i - o >= 10) return -1;
        }
        return i < s && ((r = e.src.charCodeAt(i)), !n(r)) ? -1 : i;
      }
      e.exports = function (e, t, r, n) {
        var s,
          a,
          c,
          u,
          l,
          p,
          f,
          d,
          h,
          m,
          g,
          _,
          v,
          b,
          y,
          E,
          k,
          C,
          w,
          A,
          D,
          x,
          T,
          S,
          L,
          O,
          I,
          P,
          M = !1,
          F = !0;
        if (e.sCount[t] - e.blkIndent >= 4) return !1;
        if (
          e.listIndent >= 0 &&
          e.sCount[t] - e.listIndent >= 4 &&
          e.sCount[t] < e.blkIndent
        )
          return !1;
        if (
          (n &&
            'paragraph' === e.parentType &&
            e.tShift[t] >= e.blkIndent &&
            (M = !0),
          (T = i(e, t)) >= 0)
        ) {
          if (
            ((f = !0),
            (L = e.bMarks[t] + e.tShift[t]),
            (v = Number(e.src.slice(L, T - 1))),
            M && 1 !== v)
          )
            return !1;
        } else {
          if (!((T = o(e, t)) >= 0)) return !1;
          f = !1;
        }
        if (M && e.skipSpaces(T) >= e.eMarks[t]) return !1;
        if (((_ = e.src.charCodeAt(T - 1)), n)) return !0;
        for (
          g = e.tokens.length,
            f
              ? ((P = e.push('ordered_list_open', 'ol', 1)),
                1 !== v && (P.attrs = [['start', v]]))
              : (P = e.push('bullet_list_open', 'ul', 1)),
            P.map = m = [t, 0],
            P.markup = String.fromCharCode(_),
            y = t,
            S = !1,
            I = e.md.block.ruler.getRules('list'),
            C = e.parentType,
            e.parentType = 'list';
          y < r;

        ) {
          for (
            x = T,
              b = e.eMarks[y],
              p = E = e.sCount[y] + T - (e.bMarks[t] + e.tShift[t]);
            x < b;

          ) {
            if (9 === (s = e.src.charCodeAt(x)))
              E += 4 - ((E + e.bsCount[y]) % 4);
            else {
              if (32 !== s) break;
              E++;
            }
            x++;
          }
          if (
            ((l = (a = x) >= b ? 1 : E - p) > 4 && (l = 1),
            (u = p + l),
            ((P = e.push('list_item_open', 'li', 1)).markup =
              String.fromCharCode(_)),
            (P.map = d = [t, 0]),
            f && (P.info = e.src.slice(L, T - 1)),
            (D = e.tight),
            (A = e.tShift[t]),
            (w = e.sCount[t]),
            (k = e.listIndent),
            (e.listIndent = e.blkIndent),
            (e.blkIndent = u),
            (e.tight = !0),
            (e.tShift[t] = a - e.bMarks[t]),
            (e.sCount[t] = E),
            a >= b && e.isEmpty(t + 1)
              ? (e.line = Math.min(e.line + 2, r))
              : e.md.block.tokenize(e, t, r, !0),
            (e.tight && !S) || (F = !1),
            (S = e.line - t > 1 && e.isEmpty(e.line - 1)),
            (e.blkIndent = e.listIndent),
            (e.listIndent = k),
            (e.tShift[t] = A),
            (e.sCount[t] = w),
            (e.tight = D),
            ((P = e.push('list_item_close', 'li', -1)).markup =
              String.fromCharCode(_)),
            (y = t = e.line),
            (d[1] = y),
            (a = e.bMarks[t]),
            y >= r)
          )
            break;
          if (e.sCount[y] < e.blkIndent) break;
          if (e.sCount[t] - e.blkIndent >= 4) break;
          for (O = !1, c = 0, h = I.length; c < h; c++)
            if (I[c](e, y, r, !0)) {
              O = !0;
              break;
            }
          if (O) break;
          if (f) {
            if ((T = i(e, y)) < 0) break;
            L = e.bMarks[y] + e.tShift[y];
          } else if ((T = o(e, y)) < 0) break;
          if (_ !== e.src.charCodeAt(T - 1)) break;
        }
        return (
          ((P = f
            ? e.push('ordered_list_close', 'ol', -1)
            : e.push('bullet_list_close', 'ul', -1)).markup =
            String.fromCharCode(_)),
          (m[1] = y),
          (e.line = y),
          (e.parentType = C),
          F &&
            (function (e, t) {
              var r,
                n,
                o = e.level + 2;
              for (r = t + 2, n = e.tokens.length - 2; r < n; r++)
                e.tokens[r].level === o &&
                  'paragraph_open' === e.tokens[r].type &&
                  ((e.tokens[r + 2].hidden = !0),
                  (e.tokens[r].hidden = !0),
                  (r += 2));
            })(e, g),
          !0
        );
      };
    },
    2248: function (e) {
      'use strict';
      e.exports = function (e, t) {
        var r,
          n,
          o,
          i,
          s,
          a,
          c = t + 1,
          u = e.md.block.ruler.getRules('paragraph'),
          l = e.lineMax;
        for (
          a = e.parentType, e.parentType = 'paragraph';
          c < l && !e.isEmpty(c);
          c++
        )
          if (!(e.sCount[c] - e.blkIndent > 3) && !(e.sCount[c] < 0)) {
            for (n = !1, o = 0, i = u.length; o < i; o++)
              if (u[o](e, c, l, !0)) {
                n = !0;
                break;
              }
            if (n) break;
          }
        return (
          (r = e.getLines(t, c, e.blkIndent, !1).trim()),
          (e.line = c),
          ((s = e.push('paragraph_open', 'p', 1)).map = [t, e.line]),
          ((s = e.push('inline', '', 0)).content = r),
          (s.map = [t, e.line]),
          (s.children = []),
          (s = e.push('paragraph_close', 'p', -1)),
          (e.parentType = a),
          !0
        );
      };
    },
    74600: function (e, t, r) {
      'use strict';
      var n = r(25292).normalizeReference,
        o = r(25292).isSpace;
      e.exports = function (e, t, r, i) {
        var s,
          a,
          c,
          u,
          l,
          p,
          f,
          d,
          h,
          m,
          g,
          _,
          v,
          b,
          y,
          E,
          k = 0,
          C = e.bMarks[t] + e.tShift[t],
          w = e.eMarks[t],
          A = t + 1;
        if (e.sCount[t] - e.blkIndent >= 4) return !1;
        if (91 !== e.src.charCodeAt(C)) return !1;
        for (; ++C < w; )
          if (93 === e.src.charCodeAt(C) && 92 !== e.src.charCodeAt(C - 1)) {
            if (C + 1 === w) return !1;
            if (58 !== e.src.charCodeAt(C + 1)) return !1;
            break;
          }
        for (
          u = e.lineMax,
            y = e.md.block.ruler.getRules('reference'),
            m = e.parentType,
            e.parentType = 'reference';
          A < u && !e.isEmpty(A);
          A++
        )
          if (!(e.sCount[A] - e.blkIndent > 3) && !(e.sCount[A] < 0)) {
            for (b = !1, p = 0, f = y.length; p < f; p++)
              if (y[p](e, A, u, !0)) {
                b = !0;
                break;
              }
            if (b) break;
          }
        for (
          w = (v = e.getLines(t, A, e.blkIndent, !1).trim()).length, C = 1;
          C < w;
          C++
        ) {
          if (91 === (s = v.charCodeAt(C))) return !1;
          if (93 === s) {
            h = C;
            break;
          }
          (10 === s || (92 === s && ++C < w && 10 === v.charCodeAt(C))) && k++;
        }
        if (h < 0 || 58 !== v.charCodeAt(h + 1)) return !1;
        for (C = h + 2; C < w; C++)
          if (10 === (s = v.charCodeAt(C))) k++;
          else if (!o(s)) break;
        if (!(g = e.md.helpers.parseLinkDestination(v, C, w)).ok) return !1;
        if (((l = e.md.normalizeLink(g.str)), !e.md.validateLink(l))) return !1;
        for (a = C = g.pos, c = k += g.lines, _ = C; C < w; C++)
          if (10 === (s = v.charCodeAt(C))) k++;
          else if (!o(s)) break;
        for (
          g = e.md.helpers.parseLinkTitle(v, C, w),
            C < w && _ !== C && g.ok
              ? ((E = g.str), (C = g.pos), (k += g.lines))
              : ((E = ''), (C = a), (k = c));
          C < w && ((s = v.charCodeAt(C)), o(s));

        )
          C++;
        if (C < w && 10 !== v.charCodeAt(C) && E)
          for (E = '', C = a, k = c; C < w && ((s = v.charCodeAt(C)), o(s)); )
            C++;
        return (
          !(C < w && 10 !== v.charCodeAt(C)) &&
          !!(d = n(v.slice(1, h))) &&
          (i ||
            ('undefined' === typeof e.env.references && (e.env.references = {}),
            'undefined' === typeof e.env.references[d] &&
              (e.env.references[d] = { title: E, href: l }),
            (e.parentType = m),
            (e.line = t + k + 1)),
          !0)
        );
      };
    },
    89043: function (e, t, r) {
      'use strict';
      var n = r(99147),
        o = r(25292).isSpace;
      function i(e, t, r, n) {
        var i, s, a, c, u, l, p, f;
        for (
          this.src = e,
            this.md = t,
            this.env = r,
            this.tokens = n,
            this.bMarks = [],
            this.eMarks = [],
            this.tShift = [],
            this.sCount = [],
            this.bsCount = [],
            this.blkIndent = 0,
            this.line = 0,
            this.lineMax = 0,
            this.tight = !1,
            this.ddIndent = -1,
            this.listIndent = -1,
            this.parentType = 'root',
            this.level = 0,
            this.result = '',
            f = !1,
            a = c = l = p = 0,
            u = (s = this.src).length;
          c < u;
          c++
        ) {
          if (((i = s.charCodeAt(c)), !f)) {
            if (o(i)) {
              l++, 9 === i ? (p += 4 - (p % 4)) : p++;
              continue;
            }
            f = !0;
          }
          (10 !== i && c !== u - 1) ||
            (10 !== i && c++,
            this.bMarks.push(a),
            this.eMarks.push(c),
            this.tShift.push(l),
            this.sCount.push(p),
            this.bsCount.push(0),
            (f = !1),
            (l = 0),
            (p = 0),
            (a = c + 1));
        }
        this.bMarks.push(s.length),
          this.eMarks.push(s.length),
          this.tShift.push(0),
          this.sCount.push(0),
          this.bsCount.push(0),
          (this.lineMax = this.bMarks.length - 1);
      }
      (i.prototype.push = function (e, t, r) {
        var o = new n(e, t, r);
        return (
          (o.block = !0),
          r < 0 && this.level--,
          (o.level = this.level),
          r > 0 && this.level++,
          this.tokens.push(o),
          o
        );
      }),
        (i.prototype.isEmpty = function (e) {
          return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
        }),
        (i.prototype.skipEmptyLines = function (e) {
          for (
            var t = this.lineMax;
            e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]);
            e++
          );
          return e;
        }),
        (i.prototype.skipSpaces = function (e) {
          for (
            var t, r = this.src.length;
            e < r && ((t = this.src.charCodeAt(e)), o(t));
            e++
          );
          return e;
        }),
        (i.prototype.skipSpacesBack = function (e, t) {
          if (e <= t) return e;
          for (; e > t; ) if (!o(this.src.charCodeAt(--e))) return e + 1;
          return e;
        }),
        (i.prototype.skipChars = function (e, t) {
          for (
            var r = this.src.length;
            e < r && this.src.charCodeAt(e) === t;
            e++
          );
          return e;
        }),
        (i.prototype.skipCharsBack = function (e, t, r) {
          if (e <= r) return e;
          for (; e > r; ) if (t !== this.src.charCodeAt(--e)) return e + 1;
          return e;
        }),
        (i.prototype.getLines = function (e, t, r, n) {
          var i,
            s,
            a,
            c,
            u,
            l,
            p,
            f = e;
          if (e >= t) return '';
          for (l = new Array(t - e), i = 0; f < t; f++, i++) {
            for (
              s = 0,
                p = c = this.bMarks[f],
                u = f + 1 < t || n ? this.eMarks[f] + 1 : this.eMarks[f];
              c < u && s < r;

            ) {
              if (((a = this.src.charCodeAt(c)), o(a)))
                9 === a ? (s += 4 - ((s + this.bsCount[f]) % 4)) : s++;
              else {
                if (!(c - p < this.tShift[f])) break;
                s++;
              }
              c++;
            }
            l[i] =
              s > r
                ? new Array(s - r + 1).join(' ') + this.src.slice(c, u)
                : this.src.slice(c, u);
          }
          return l.join('');
        }),
        (i.prototype.Token = n),
        (e.exports = i);
    },
    83031: function (e, t, r) {
      'use strict';
      var n = r(25292).isSpace;
      function o(e, t) {
        var r = e.bMarks[t] + e.tShift[t],
          n = e.eMarks[t];
        return e.src.substr(r, n - r);
      }
      function i(e) {
        var t,
          r = [],
          n = 0,
          o = e.length,
          i = !1,
          s = 0,
          a = '';
        for (t = e.charCodeAt(n); n < o; )
          124 === t &&
            (i
              ? ((a += e.substring(s, n - 1)), (s = n))
              : (r.push(a + e.substring(s, n)), (a = ''), (s = n + 1))),
            (i = 92 === t),
            n++,
            (t = e.charCodeAt(n));
        return r.push(a + e.substring(s)), r;
      }
      e.exports = function (e, t, r, s) {
        var a, c, u, l, p, f, d, h, m, g, _, v, b, y, E, k, C, w;
        if (t + 2 > r) return !1;
        if (((f = t + 1), e.sCount[f] < e.blkIndent)) return !1;
        if (e.sCount[f] - e.blkIndent >= 4) return !1;
        if ((u = e.bMarks[f] + e.tShift[f]) >= e.eMarks[f]) return !1;
        if (124 !== (C = e.src.charCodeAt(u++)) && 45 !== C && 58 !== C)
          return !1;
        if (u >= e.eMarks[f]) return !1;
        if (
          124 !== (w = e.src.charCodeAt(u++)) &&
          45 !== w &&
          58 !== w &&
          !n(w)
        )
          return !1;
        if (45 === C && n(w)) return !1;
        for (; u < e.eMarks[f]; ) {
          if (
            124 !== (a = e.src.charCodeAt(u)) &&
            45 !== a &&
            58 !== a &&
            !n(a)
          )
            return !1;
          u++;
        }
        for (
          d = (c = o(e, t + 1)).split('|'), g = [], l = 0;
          l < d.length;
          l++
        ) {
          if (!(_ = d[l].trim())) {
            if (0 === l || l === d.length - 1) continue;
            return !1;
          }
          if (!/^:?-+:?$/.test(_)) return !1;
          58 === _.charCodeAt(_.length - 1)
            ? g.push(58 === _.charCodeAt(0) ? 'center' : 'right')
            : 58 === _.charCodeAt(0)
            ? g.push('left')
            : g.push('');
        }
        if (-1 === (c = o(e, t).trim()).indexOf('|')) return !1;
        if (e.sCount[t] - e.blkIndent >= 4) return !1;
        if (
          ((d = i(c)).length && '' === d[0] && d.shift(),
          d.length && '' === d[d.length - 1] && d.pop(),
          0 === (h = d.length) || h !== g.length)
        )
          return !1;
        if (s) return !0;
        for (
          y = e.parentType,
            e.parentType = 'table',
            k = e.md.block.ruler.getRules('blockquote'),
            (m = e.push('table_open', 'table', 1)).map = v = [t, 0],
            (m = e.push('thead_open', 'thead', 1)).map = [t, t + 1],
            (m = e.push('tr_open', 'tr', 1)).map = [t, t + 1],
            l = 0;
          l < d.length;
          l++
        )
          (m = e.push('th_open', 'th', 1)),
            g[l] && (m.attrs = [['style', 'text-align:' + g[l]]]),
            ((m = e.push('inline', '', 0)).content = d[l].trim()),
            (m.children = []),
            (m = e.push('th_close', 'th', -1));
        for (
          m = e.push('tr_close', 'tr', -1),
            m = e.push('thead_close', 'thead', -1),
            f = t + 2;
          f < r && !(e.sCount[f] < e.blkIndent);
          f++
        ) {
          for (E = !1, l = 0, p = k.length; l < p; l++)
            if (k[l](e, f, r, !0)) {
              E = !0;
              break;
            }
          if (E) break;
          if (!(c = o(e, f).trim())) break;
          if (e.sCount[f] - e.blkIndent >= 4) break;
          for (
            (d = i(c)).length && '' === d[0] && d.shift(),
              d.length && '' === d[d.length - 1] && d.pop(),
              f === t + 2 &&
                ((m = e.push('tbody_open', 'tbody', 1)).map = b = [t + 2, 0]),
              (m = e.push('tr_open', 'tr', 1)).map = [f, f + 1],
              l = 0;
            l < h;
            l++
          )
            (m = e.push('td_open', 'td', 1)),
              g[l] && (m.attrs = [['style', 'text-align:' + g[l]]]),
              ((m = e.push('inline', '', 0)).content = d[l] ? d[l].trim() : ''),
              (m.children = []),
              (m = e.push('td_close', 'td', -1));
          m = e.push('tr_close', 'tr', -1);
        }
        return (
          b && ((m = e.push('tbody_close', 'tbody', -1)), (b[1] = f)),
          (m = e.push('table_close', 'table', -1)),
          (v[1] = f),
          (e.parentType = y),
          (e.line = f),
          !0
        );
      };
    },
    92304: function (e) {
      'use strict';
      e.exports = function (e) {
        var t;
        e.inlineMode
          ? (((t = new e.Token('inline', '', 0)).content = e.src),
            (t.map = [0, 1]),
            (t.children = []),
            e.tokens.push(t))
          : e.md.block.parse(e.src, e.md, e.env, e.tokens);
      };
    },
    34059: function (e) {
      'use strict';
      e.exports = function (e) {
        var t,
          r,
          n,
          o = e.tokens;
        for (r = 0, n = o.length; r < n; r++)
          'inline' === (t = o[r]).type &&
            e.md.inline.parse(t.content, e.md, e.env, t.children);
      };
    },
    99357: function (e, t, r) {
      'use strict';
      var n = r(25292).arrayReplaceAt;
      function o(e) {
        return /^<\/a\s*>/i.test(e);
      }
      e.exports = function (e) {
        var t,
          r,
          i,
          s,
          a,
          c,
          u,
          l,
          p,
          f,
          d,
          h,
          m,
          g,
          _,
          v,
          b,
          y,
          E = e.tokens;
        if (e.md.options.linkify)
          for (r = 0, i = E.length; r < i; r++)
            if ('inline' === E[r].type && e.md.linkify.pretest(E[r].content))
              for (m = 0, t = (s = E[r].children).length - 1; t >= 0; t--)
                if ('link_close' !== (c = s[t]).type) {
                  if (
                    ('html_inline' === c.type &&
                      ((y = c.content),
                      /^<a[>\s]/i.test(y) && m > 0 && m--,
                      o(c.content) && m++),
                    !(m > 0) &&
                      'text' === c.type &&
                      e.md.linkify.test(c.content))
                  ) {
                    for (
                      p = c.content,
                        b = e.md.linkify.match(p),
                        u = [],
                        h = c.level,
                        d = 0,
                        l = 0;
                      l < b.length;
                      l++
                    )
                      (g = b[l].url),
                        (_ = e.md.normalizeLink(g)),
                        e.md.validateLink(_) &&
                          ((v = b[l].text),
                          (v = b[l].schema
                            ? 'mailto:' !== b[l].schema || /^mailto:/i.test(v)
                              ? e.md.normalizeLinkText(v)
                              : e.md
                                  .normalizeLinkText('mailto:' + v)
                                  .replace(/^mailto:/, '')
                            : e.md
                                .normalizeLinkText('http://' + v)
                                .replace(/^http:\/\//, '')),
                          (f = b[l].index) > d &&
                            (((a = new e.Token('text', '', 0)).content =
                              p.slice(d, f)),
                            (a.level = h),
                            u.push(a)),
                          ((a = new e.Token('link_open', 'a', 1)).attrs = [
                            ['href', _],
                          ]),
                          (a.level = h++),
                          (a.markup = 'linkify'),
                          (a.info = 'auto'),
                          u.push(a),
                          ((a = new e.Token('text', '', 0)).content = v),
                          (a.level = h),
                          u.push(a),
                          ((a = new e.Token('link_close', 'a', -1)).level =
                            --h),
                          (a.markup = 'linkify'),
                          (a.info = 'auto'),
                          u.push(a),
                          (d = b[l].lastIndex));
                    d < p.length &&
                      (((a = new e.Token('text', '', 0)).content = p.slice(d)),
                      (a.level = h),
                      u.push(a)),
                      (E[r].children = s = n(s, t, u));
                  }
                } else
                  for (
                    t--;
                    s[t].level !== c.level && 'link_open' !== s[t].type;

                  )
                    t--;
      };
    },
    37244: function (e) {
      'use strict';
      var t = /\r\n?|\n/g,
        r = /\0/g;
      e.exports = function (e) {
        var n;
        (n = (n = e.src.replace(t, '\n')).replace(r, '\ufffd')), (e.src = n);
      };
    },
    98919: function (e) {
      'use strict';
      var t = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
        r = /\((c|tm|r|p)\)/i,
        n = /\((c|tm|r|p)\)/gi,
        o = { c: '\xa9', r: '\xae', p: '\xa7', tm: '\u2122' };
      function i(e, t) {
        return o[t.toLowerCase()];
      }
      function s(e) {
        var t,
          r,
          o = 0;
        for (t = e.length - 1; t >= 0; t--)
          'text' !== (r = e[t]).type ||
            o ||
            (r.content = r.content.replace(n, i)),
            'link_open' === r.type && 'auto' === r.info && o--,
            'link_close' === r.type && 'auto' === r.info && o++;
      }
      function a(e) {
        var r,
          n,
          o = 0;
        for (r = e.length - 1; r >= 0; r--)
          'text' !== (n = e[r]).type ||
            o ||
            (t.test(n.content) &&
              (n.content = n.content
                .replace(/\+-/g, '\xb1')
                .replace(/\.{2,}/g, '\u2026')
                .replace(/([?!])\u2026/g, '$1..')
                .replace(/([?!]){4,}/g, '$1$1$1')
                .replace(/,{2,}/g, ',')
                .replace(/(^|[^-])---(?=[^-]|$)/gm, '$1\u2014')
                .replace(/(^|\s)--(?=\s|$)/gm, '$1\u2013')
                .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, '$1\u2013'))),
            'link_open' === n.type && 'auto' === n.info && o--,
            'link_close' === n.type && 'auto' === n.info && o++;
      }
      e.exports = function (e) {
        var n;
        if (e.md.options.typographer)
          for (n = e.tokens.length - 1; n >= 0; n--)
            'inline' === e.tokens[n].type &&
              (r.test(e.tokens[n].content) && s(e.tokens[n].children),
              t.test(e.tokens[n].content) && a(e.tokens[n].children));
      };
    },
    32508: function (e, t, r) {
      'use strict';
      var n = r(25292).isWhiteSpace,
        o = r(25292).isPunctChar,
        i = r(25292).isMdAsciiPunct,
        s = /['"]/,
        a = /['"]/g;
      function c(e, t, r) {
        return e.substr(0, t) + r + e.substr(t + 1);
      }
      function u(e, t) {
        var r, s, u, l, p, f, d, h, m, g, _, v, b, y, E, k, C, w, A, D, x;
        for (A = [], r = 0; r < e.length; r++) {
          for (
            s = e[r], d = e[r].level, C = A.length - 1;
            C >= 0 && !(A[C].level <= d);
            C--
          );
          if (((A.length = C + 1), 'text' === s.type)) {
            (p = 0), (f = (u = s.content).length);
            e: for (; p < f && ((a.lastIndex = p), (l = a.exec(u))); ) {
              if (
                ((E = k = !0),
                (p = l.index + 1),
                (w = "'" === l[0]),
                (m = 32),
                l.index - 1 >= 0)
              )
                m = u.charCodeAt(l.index - 1);
              else
                for (
                  C = r - 1;
                  C >= 0 &&
                  'softbreak' !== e[C].type &&
                  'hardbreak' !== e[C].type;
                  C--
                )
                  if (e[C].content) {
                    m = e[C].content.charCodeAt(e[C].content.length - 1);
                    break;
                  }
              if (((g = 32), p < f)) g = u.charCodeAt(p);
              else
                for (
                  C = r + 1;
                  C < e.length &&
                  'softbreak' !== e[C].type &&
                  'hardbreak' !== e[C].type;
                  C++
                )
                  if (e[C].content) {
                    g = e[C].content.charCodeAt(0);
                    break;
                  }
              if (
                ((_ = i(m) || o(String.fromCharCode(m))),
                (v = i(g) || o(String.fromCharCode(g))),
                (b = n(m)),
                (y = n(g)) ? (E = !1) : v && (b || _ || (E = !1)),
                b ? (k = !1) : _ && (y || v || (k = !1)),
                34 === g && '"' === l[0] && m >= 48 && m <= 57 && (k = E = !1),
                E && k && ((E = _), (k = v)),
                E || k)
              ) {
                if (k)
                  for (
                    C = A.length - 1;
                    C >= 0 && ((h = A[C]), !(A[C].level < d));
                    C--
                  )
                    if (h.single === w && A[C].level === d) {
                      (h = A[C]),
                        w
                          ? ((D = t.md.options.quotes[2]),
                            (x = t.md.options.quotes[3]))
                          : ((D = t.md.options.quotes[0]),
                            (x = t.md.options.quotes[1])),
                        (s.content = c(s.content, l.index, x)),
                        (e[h.token].content = c(e[h.token].content, h.pos, D)),
                        (p += x.length - 1),
                        h.token === r && (p += D.length - 1),
                        (f = (u = s.content).length),
                        (A.length = C);
                      continue e;
                    }
                E
                  ? A.push({ token: r, pos: l.index, single: w, level: d })
                  : k && w && (s.content = c(s.content, l.index, '\u2019'));
              } else w && (s.content = c(s.content, l.index, '\u2019'));
            }
          }
        }
      }
      e.exports = function (e) {
        var t;
        if (e.md.options.typographer)
          for (t = e.tokens.length - 1; t >= 0; t--)
            'inline' === e.tokens[t].type &&
              s.test(e.tokens[t].content) &&
              u(e.tokens[t].children, e);
      };
    },
    47811: function (e, t, r) {
      'use strict';
      var n = r(99147);
      function o(e, t, r) {
        (this.src = e),
          (this.env = r),
          (this.tokens = []),
          (this.inlineMode = !1),
          (this.md = t);
      }
      (o.prototype.Token = n), (e.exports = o);
    },
    61858: function (e) {
      'use strict';
      var t =
          /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
        r = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
      e.exports = function (e, n) {
        var o,
          i,
          s,
          a,
          c,
          u,
          l = e.pos;
        if (60 !== e.src.charCodeAt(l)) return !1;
        for (c = e.pos, u = e.posMax; ; ) {
          if (++l >= u) return !1;
          if (60 === (a = e.src.charCodeAt(l))) return !1;
          if (62 === a) break;
        }
        return (
          (o = e.src.slice(c + 1, l)),
          r.test(o)
            ? ((i = e.md.normalizeLink(o)),
              !!e.md.validateLink(i) &&
                (n ||
                  (((s = e.push('link_open', 'a', 1)).attrs = [['href', i]]),
                  (s.markup = 'autolink'),
                  (s.info = 'auto'),
                  ((s = e.push('text', '', 0)).content =
                    e.md.normalizeLinkText(o)),
                  ((s = e.push('link_close', 'a', -1)).markup = 'autolink'),
                  (s.info = 'auto')),
                (e.pos += o.length + 2),
                !0))
            : !!t.test(o) &&
              ((i = e.md.normalizeLink('mailto:' + o)),
              !!e.md.validateLink(i) &&
                (n ||
                  (((s = e.push('link_open', 'a', 1)).attrs = [['href', i]]),
                  (s.markup = 'autolink'),
                  (s.info = 'auto'),
                  ((s = e.push('text', '', 0)).content =
                    e.md.normalizeLinkText(o)),
                  ((s = e.push('link_close', 'a', -1)).markup = 'autolink'),
                  (s.info = 'auto')),
                (e.pos += o.length + 2),
                !0))
        );
      };
    },
    18706: function (e) {
      'use strict';
      e.exports = function (e, t) {
        var r,
          n,
          o,
          i,
          s,
          a,
          c,
          u,
          l = e.pos;
        if (96 !== e.src.charCodeAt(l)) return !1;
        for (r = l, l++, n = e.posMax; l < n && 96 === e.src.charCodeAt(l); )
          l++;
        if (
          ((c = (o = e.src.slice(r, l)).length),
          e.backticksScanned && (e.backticks[c] || 0) <= r)
        )
          return t || (e.pending += o), (e.pos += c), !0;
        for (s = a = l; -1 !== (s = e.src.indexOf('`', a)); ) {
          for (a = s + 1; a < n && 96 === e.src.charCodeAt(a); ) a++;
          if ((u = a - s) === c)
            return (
              t ||
                (((i = e.push('code_inline', 'code', 0)).markup = o),
                (i.content = e.src
                  .slice(l, s)
                  .replace(/\n/g, ' ')
                  .replace(/^ (.+) $/, '$1'))),
              (e.pos = a),
              !0
            );
          e.backticks[u] = s;
        }
        return (
          (e.backticksScanned = !0), t || (e.pending += o), (e.pos += c), !0
        );
      };
    },
    92877: function (e) {
      'use strict';
      function t(e, t) {
        var r,
          n,
          o,
          i,
          s,
          a,
          c,
          u,
          l = {},
          p = t.length;
        if (p) {
          var f = 0,
            d = -2,
            h = [];
          for (r = 0; r < p; r++)
            if (
              ((o = t[r]),
              h.push(0),
              (t[f].marker === o.marker && d === o.token - 1) || (f = r),
              (d = o.token),
              (o.length = o.length || 0),
              o.close)
            ) {
              for (
                l.hasOwnProperty(o.marker) ||
                  (l[o.marker] = [-1, -1, -1, -1, -1, -1]),
                  s = l[o.marker][(o.open ? 3 : 0) + (o.length % 3)],
                  a = n = f - h[f] - 1;
                n > s;
                n -= h[n] + 1
              )
                if (
                  (i = t[n]).marker === o.marker &&
                  i.open &&
                  i.end < 0 &&
                  ((c = !1),
                  (i.close || o.open) &&
                    (i.length + o.length) % 3 === 0 &&
                    ((i.length % 3 === 0 && o.length % 3 === 0) || (c = !0)),
                  !c)
                ) {
                  (u = n > 0 && !t[n - 1].open ? h[n - 1] + 1 : 0),
                    (h[r] = r - n + u),
                    (h[n] = u),
                    (o.open = !1),
                    (i.end = r),
                    (i.close = !1),
                    (a = -1),
                    (d = -2);
                  break;
                }
              -1 !== a &&
                (l[o.marker][(o.open ? 3 : 0) + ((o.length || 0) % 3)] = a);
            }
        }
      }
      e.exports = function (e) {
        var r,
          n = e.tokens_meta,
          o = e.tokens_meta.length;
        for (t(0, e.delimiters), r = 0; r < o; r++)
          n[r] && n[r].delimiters && t(0, n[r].delimiters);
      };
    },
    87147: function (e) {
      'use strict';
      function t(e, t) {
        var r, n, o, i, s, a;
        for (r = t.length - 1; r >= 0; r--)
          (95 !== (n = t[r]).marker && 42 !== n.marker) ||
            (-1 !== n.end &&
              ((o = t[n.end]),
              (a =
                r > 0 &&
                t[r - 1].end === n.end + 1 &&
                t[r - 1].marker === n.marker &&
                t[r - 1].token === n.token - 1 &&
                t[n.end + 1].token === o.token + 1),
              (s = String.fromCharCode(n.marker)),
              ((i = e.tokens[n.token]).type = a ? 'strong_open' : 'em_open'),
              (i.tag = a ? 'strong' : 'em'),
              (i.nesting = 1),
              (i.markup = a ? s + s : s),
              (i.content = ''),
              ((i = e.tokens[o.token]).type = a ? 'strong_close' : 'em_close'),
              (i.tag = a ? 'strong' : 'em'),
              (i.nesting = -1),
              (i.markup = a ? s + s : s),
              (i.content = ''),
              a &&
                ((e.tokens[t[r - 1].token].content = ''),
                (e.tokens[t[n.end + 1].token].content = ''),
                r--)));
      }
      (e.exports.w = function (e, t) {
        var r,
          n,
          o = e.pos,
          i = e.src.charCodeAt(o);
        if (t) return !1;
        if (95 !== i && 42 !== i) return !1;
        for (n = e.scanDelims(e.pos, 42 === i), r = 0; r < n.length; r++)
          (e.push('text', '', 0).content = String.fromCharCode(i)),
            e.delimiters.push({
              marker: i,
              length: n.length,
              token: e.tokens.length - 1,
              end: -1,
              open: n.can_open,
              close: n.can_close,
            });
        return (e.pos += n.length), !0;
      }),
        (e.exports.g = function (e) {
          var r,
            n = e.tokens_meta,
            o = e.tokens_meta.length;
          for (t(e, e.delimiters), r = 0; r < o; r++)
            n[r] && n[r].delimiters && t(e, n[r].delimiters);
        });
    },
    45796: function (e, t, r) {
      'use strict';
      var n = r(83906),
        o = r(25292).has,
        i = r(25292).isValidEntityCode,
        s = r(25292).fromCodePoint,
        a = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
        c = /^&([a-z][a-z0-9]{1,31});/i;
      e.exports = function (e, t) {
        var r,
          u,
          l = e.pos,
          p = e.posMax;
        if (38 !== e.src.charCodeAt(l)) return !1;
        if (l + 1 < p)
          if (35 === e.src.charCodeAt(l + 1)) {
            if ((u = e.src.slice(l).match(a)))
              return (
                t ||
                  ((r =
                    'x' === u[1][0].toLowerCase()
                      ? parseInt(u[1].slice(1), 16)
                      : parseInt(u[1], 10)),
                  (e.pending += i(r) ? s(r) : s(65533))),
                (e.pos += u[0].length),
                !0
              );
          } else if ((u = e.src.slice(l).match(c)) && o(n, u[1]))
            return t || (e.pending += n[u[1]]), (e.pos += u[0].length), !0;
        return t || (e.pending += '&'), e.pos++, !0;
      };
    },
    28199: function (e, t, r) {
      'use strict';
      for (var n = r(25292).isSpace, o = [], i = 0; i < 256; i++) o.push(0);
      '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function (e) {
        o[e.charCodeAt(0)] = 1;
      }),
        (e.exports = function (e, t) {
          var r,
            i = e.pos,
            s = e.posMax;
          if (92 !== e.src.charCodeAt(i)) return !1;
          if (++i < s) {
            if ((r = e.src.charCodeAt(i)) < 256 && 0 !== o[r])
              return t || (e.pending += e.src[i]), (e.pos += 2), !0;
            if (10 === r) {
              for (
                t || e.push('hardbreak', 'br', 0), i++;
                i < s && ((r = e.src.charCodeAt(i)), n(r));

              )
                i++;
              return (e.pos = i), !0;
            }
          }
          return t || (e.pending += '\\'), e.pos++, !0;
        });
    },
    33095: function (e, t, r) {
      'use strict';
      var n = r(69372).n;
      e.exports = function (e, t) {
        var r,
          o,
          i,
          s = e.pos;
        return (
          !!e.md.options.html &&
          ((i = e.posMax),
          !(60 !== e.src.charCodeAt(s) || s + 2 >= i) &&
            !(
              33 !== (r = e.src.charCodeAt(s + 1)) &&
              63 !== r &&
              47 !== r &&
              !(function (e) {
                var t = 32 | e;
                return t >= 97 && t <= 122;
              })(r)
            ) &&
            !!(o = e.src.slice(s).match(n)) &&
            (t ||
              (e.push('html_inline', '', 0).content = e.src.slice(
                s,
                s + o[0].length
              )),
            (e.pos += o[0].length),
            !0))
        );
      };
    },
    72641: function (e, t, r) {
      'use strict';
      var n = r(25292).normalizeReference,
        o = r(25292).isSpace;
      e.exports = function (e, t) {
        var r,
          i,
          s,
          a,
          c,
          u,
          l,
          p,
          f,
          d,
          h,
          m,
          g,
          _ = '',
          v = e.pos,
          b = e.posMax;
        if (33 !== e.src.charCodeAt(e.pos)) return !1;
        if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
        if (
          ((u = e.pos + 2),
          (c = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0)
        )
          return !1;
        if ((l = c + 1) < b && 40 === e.src.charCodeAt(l)) {
          for (
            l++;
            l < b && ((i = e.src.charCodeAt(l)), o(i) || 10 === i);
            l++
          );
          if (l >= b) return !1;
          for (
            g = l,
              (f = e.md.helpers.parseLinkDestination(e.src, l, e.posMax)).ok &&
                ((_ = e.md.normalizeLink(f.str)),
                e.md.validateLink(_) ? (l = f.pos) : (_ = '')),
              g = l;
            l < b && ((i = e.src.charCodeAt(l)), o(i) || 10 === i);
            l++
          );
          if (
            ((f = e.md.helpers.parseLinkTitle(e.src, l, e.posMax)),
            l < b && g !== l && f.ok)
          )
            for (
              d = f.str, l = f.pos;
              l < b && ((i = e.src.charCodeAt(l)), o(i) || 10 === i);
              l++
            );
          else d = '';
          if (l >= b || 41 !== e.src.charCodeAt(l)) return (e.pos = v), !1;
          l++;
        } else {
          if ('undefined' === typeof e.env.references) return !1;
          if (
            (l < b && 91 === e.src.charCodeAt(l)
              ? ((g = l + 1),
                (l = e.md.helpers.parseLinkLabel(e, l)) >= 0
                  ? (a = e.src.slice(g, l++))
                  : (l = c + 1))
              : (l = c + 1),
            a || (a = e.src.slice(u, c)),
            !(p = e.env.references[n(a)]))
          )
            return (e.pos = v), !1;
          (_ = p.href), (d = p.title);
        }
        return (
          t ||
            ((s = e.src.slice(u, c)),
            e.md.inline.parse(s, e.md, e.env, (m = [])),
            ((h = e.push('image', 'img', 0)).attrs = r =
              [
                ['src', _],
                ['alt', ''],
              ]),
            (h.children = m),
            (h.content = s),
            d && r.push(['title', d])),
          (e.pos = l),
          (e.posMax = b),
          !0
        );
      };
    },
    96267: function (e, t, r) {
      'use strict';
      var n = r(25292).normalizeReference,
        o = r(25292).isSpace;
      e.exports = function (e, t) {
        var r,
          i,
          s,
          a,
          c,
          u,
          l,
          p,
          f = '',
          d = '',
          h = e.pos,
          m = e.posMax,
          g = e.pos,
          _ = !0;
        if (91 !== e.src.charCodeAt(e.pos)) return !1;
        if (
          ((c = e.pos + 1), (a = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0)
        )
          return !1;
        if ((u = a + 1) < m && 40 === e.src.charCodeAt(u)) {
          for (
            _ = !1, u++;
            u < m && ((i = e.src.charCodeAt(u)), o(i) || 10 === i);
            u++
          );
          if (u >= m) return !1;
          if (
            ((g = u),
            (l = e.md.helpers.parseLinkDestination(e.src, u, e.posMax)).ok)
          ) {
            for (
              f = e.md.normalizeLink(l.str),
                e.md.validateLink(f) ? (u = l.pos) : (f = ''),
                g = u;
              u < m && ((i = e.src.charCodeAt(u)), o(i) || 10 === i);
              u++
            );
            if (
              ((l = e.md.helpers.parseLinkTitle(e.src, u, e.posMax)),
              u < m && g !== u && l.ok)
            )
              for (
                d = l.str, u = l.pos;
                u < m && ((i = e.src.charCodeAt(u)), o(i) || 10 === i);
                u++
              );
          }
          (u >= m || 41 !== e.src.charCodeAt(u)) && (_ = !0), u++;
        }
        if (_) {
          if ('undefined' === typeof e.env.references) return !1;
          if (
            (u < m && 91 === e.src.charCodeAt(u)
              ? ((g = u + 1),
                (u = e.md.helpers.parseLinkLabel(e, u)) >= 0
                  ? (s = e.src.slice(g, u++))
                  : (u = a + 1))
              : (u = a + 1),
            s || (s = e.src.slice(c, a)),
            !(p = e.env.references[n(s)]))
          )
            return (e.pos = h), !1;
          (f = p.href), (d = p.title);
        }
        return (
          t ||
            ((e.pos = c),
            (e.posMax = a),
            (e.push('link_open', 'a', 1).attrs = r = [['href', f]]),
            d && r.push(['title', d]),
            e.md.inline.tokenize(e),
            e.push('link_close', 'a', -1)),
          (e.pos = u),
          (e.posMax = m),
          !0
        );
      };
    },
    24537: function (e, t, r) {
      'use strict';
      var n = r(25292).isSpace;
      e.exports = function (e, t) {
        var r,
          o,
          i = e.pos;
        if (10 !== e.src.charCodeAt(i)) return !1;
        for (
          r = e.pending.length - 1,
            o = e.posMax,
            t ||
              (r >= 0 && 32 === e.pending.charCodeAt(r)
                ? r >= 1 && 32 === e.pending.charCodeAt(r - 1)
                  ? ((e.pending = e.pending.replace(/ +$/, '')),
                    e.push('hardbreak', 'br', 0))
                  : ((e.pending = e.pending.slice(0, -1)),
                    e.push('softbreak', 'br', 0))
                : e.push('softbreak', 'br', 0)),
            i++;
          i < o && n(e.src.charCodeAt(i));

        )
          i++;
        return (e.pos = i), !0;
      };
    },
    81245: function (e, t, r) {
      'use strict';
      var n = r(99147),
        o = r(25292).isWhiteSpace,
        i = r(25292).isPunctChar,
        s = r(25292).isMdAsciiPunct;
      function a(e, t, r, n) {
        (this.src = e),
          (this.env = r),
          (this.md = t),
          (this.tokens = n),
          (this.tokens_meta = Array(n.length)),
          (this.pos = 0),
          (this.posMax = this.src.length),
          (this.level = 0),
          (this.pending = ''),
          (this.pendingLevel = 0),
          (this.cache = {}),
          (this.delimiters = []),
          (this._prev_delimiters = []),
          (this.backticks = {}),
          (this.backticksScanned = !1);
      }
      (a.prototype.pushPending = function () {
        var e = new n('text', '', 0);
        return (
          (e.content = this.pending),
          (e.level = this.pendingLevel),
          this.tokens.push(e),
          (this.pending = ''),
          e
        );
      }),
        (a.prototype.push = function (e, t, r) {
          this.pending && this.pushPending();
          var o = new n(e, t, r),
            i = null;
          return (
            r < 0 &&
              (this.level--, (this.delimiters = this._prev_delimiters.pop())),
            (o.level = this.level),
            r > 0 &&
              (this.level++,
              this._prev_delimiters.push(this.delimiters),
              (this.delimiters = []),
              (i = { delimiters: this.delimiters })),
            (this.pendingLevel = this.level),
            this.tokens.push(o),
            this.tokens_meta.push(i),
            o
          );
        }),
        (a.prototype.scanDelims = function (e, t) {
          var r,
            n,
            a,
            c,
            u,
            l,
            p,
            f,
            d,
            h = e,
            m = !0,
            g = !0,
            _ = this.posMax,
            v = this.src.charCodeAt(e);
          for (
            r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
            h < _ && this.src.charCodeAt(h) === v;

          )
            h++;
          return (
            (a = h - e),
            (n = h < _ ? this.src.charCodeAt(h) : 32),
            (p = s(r) || i(String.fromCharCode(r))),
            (d = s(n) || i(String.fromCharCode(n))),
            (l = o(r)),
            (f = o(n)) ? (m = !1) : d && (l || p || (m = !1)),
            l ? (g = !1) : p && (f || d || (g = !1)),
            t
              ? ((c = m), (u = g))
              : ((c = m && (!g || p)), (u = g && (!m || d))),
            { can_open: c, can_close: u, length: a }
          );
        }),
        (a.prototype.Token = n),
        (e.exports = a);
    },
    70338: function (e) {
      'use strict';
      function t(e, t) {
        var r,
          n,
          o,
          i,
          s,
          a = [],
          c = t.length;
        for (r = 0; r < c; r++)
          126 === (o = t[r]).marker &&
            -1 !== o.end &&
            ((i = t[o.end]),
            ((s = e.tokens[o.token]).type = 's_open'),
            (s.tag = 's'),
            (s.nesting = 1),
            (s.markup = '~~'),
            (s.content = ''),
            ((s = e.tokens[i.token]).type = 's_close'),
            (s.tag = 's'),
            (s.nesting = -1),
            (s.markup = '~~'),
            (s.content = ''),
            'text' === e.tokens[i.token - 1].type &&
              '~' === e.tokens[i.token - 1].content &&
              a.push(i.token - 1));
        for (; a.length; ) {
          for (
            n = (r = a.pop()) + 1;
            n < e.tokens.length && 's_close' === e.tokens[n].type;

          )
            n++;
          r !== --n &&
            ((s = e.tokens[n]), (e.tokens[n] = e.tokens[r]), (e.tokens[r] = s));
        }
      }
      (e.exports.w = function (e, t) {
        var r,
          n,
          o,
          i,
          s = e.pos,
          a = e.src.charCodeAt(s);
        if (t) return !1;
        if (126 !== a) return !1;
        if (
          ((o = (n = e.scanDelims(e.pos, !0)).length),
          (i = String.fromCharCode(a)),
          o < 2)
        )
          return !1;
        for (
          o % 2 && ((e.push('text', '', 0).content = i), o--), r = 0;
          r < o;
          r += 2
        )
          (e.push('text', '', 0).content = i + i),
            e.delimiters.push({
              marker: a,
              length: 0,
              token: e.tokens.length - 1,
              end: -1,
              open: n.can_open,
              close: n.can_close,
            });
        return (e.pos += n.length), !0;
      }),
        (e.exports.g = function (e) {
          var r,
            n = e.tokens_meta,
            o = e.tokens_meta.length;
          for (t(e, e.delimiters), r = 0; r < o; r++)
            n[r] && n[r].delimiters && t(e, n[r].delimiters);
        });
    },
    61414: function (e) {
      'use strict';
      function t(e) {
        switch (e) {
          case 10:
          case 33:
          case 35:
          case 36:
          case 37:
          case 38:
          case 42:
          case 43:
          case 45:
          case 58:
          case 60:
          case 61:
          case 62:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 125:
          case 126:
            return !0;
          default:
            return !1;
        }
      }
      e.exports = function (e, r) {
        for (var n = e.pos; n < e.posMax && !t(e.src.charCodeAt(n)); ) n++;
        return (
          n !== e.pos &&
          (r || (e.pending += e.src.slice(e.pos, n)), (e.pos = n), !0)
        );
      };
    },
    13659: function (e) {
      'use strict';
      e.exports = function (e) {
        var t,
          r,
          n = 0,
          o = e.tokens,
          i = e.tokens.length;
        for (t = r = 0; t < i; t++)
          o[t].nesting < 0 && n--,
            (o[t].level = n),
            o[t].nesting > 0 && n++,
            'text' === o[t].type && t + 1 < i && 'text' === o[t + 1].type
              ? (o[t + 1].content = o[t].content + o[t + 1].content)
              : (t !== r && (o[r] = o[t]), r++);
        t !== r && (o.length = r);
      };
    },
    99147: function (e) {
      'use strict';
      function t(e, t, r) {
        (this.type = e),
          (this.tag = t),
          (this.attrs = null),
          (this.map = null),
          (this.nesting = r),
          (this.level = 0),
          (this.children = null),
          (this.content = ''),
          (this.markup = ''),
          (this.info = ''),
          (this.meta = null),
          (this.block = !1),
          (this.hidden = !1);
      }
      (t.prototype.attrIndex = function (e) {
        var t, r, n;
        if (!this.attrs) return -1;
        for (r = 0, n = (t = this.attrs).length; r < n; r++)
          if (t[r][0] === e) return r;
        return -1;
      }),
        (t.prototype.attrPush = function (e) {
          this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
        }),
        (t.prototype.attrSet = function (e, t) {
          var r = this.attrIndex(e),
            n = [e, t];
          r < 0 ? this.attrPush(n) : (this.attrs[r] = n);
        }),
        (t.prototype.attrGet = function (e) {
          var t = this.attrIndex(e),
            r = null;
          return t >= 0 && (r = this.attrs[t][1]), r;
        }),
        (t.prototype.attrJoin = function (e, t) {
          var r = this.attrIndex(e);
          r < 0
            ? this.attrPush([e, t])
            : (this.attrs[r][1] = this.attrs[r][1] + ' ' + t);
        }),
        (e.exports = t);
    },
    43771: function (e) {
      'use strict';
      var t = {};
      function r(e, n) {
        var o;
        return (
          'string' !== typeof n && (n = r.defaultChars),
          (o = (function (e) {
            var r,
              n,
              o = t[e];
            if (o) return o;
            for (o = t[e] = [], r = 0; r < 128; r++)
              (n = String.fromCharCode(r)), o.push(n);
            for (r = 0; r < e.length; r++)
              o[(n = e.charCodeAt(r))] =
                '%' + ('0' + n.toString(16).toUpperCase()).slice(-2);
            return o;
          })(n)),
          e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
            var t,
              r,
              n,
              i,
              s,
              a,
              c,
              u = '';
            for (t = 0, r = e.length; t < r; t += 3)
              (n = parseInt(e.slice(t + 1, t + 3), 16)) < 128
                ? (u += o[n])
                : 192 === (224 & n) &&
                  t + 3 < r &&
                  128 === (192 & (i = parseInt(e.slice(t + 4, t + 6), 16)))
                ? ((u +=
                    (c = ((n << 6) & 1984) | (63 & i)) < 128
                      ? '\ufffd\ufffd'
                      : String.fromCharCode(c)),
                  (t += 3))
                : 224 === (240 & n) &&
                  t + 6 < r &&
                  ((i = parseInt(e.slice(t + 4, t + 6), 16)),
                  (s = parseInt(e.slice(t + 7, t + 9), 16)),
                  128 === (192 & i) && 128 === (192 & s))
                ? ((u +=
                    (c = ((n << 12) & 61440) | ((i << 6) & 4032) | (63 & s)) <
                      2048 ||
                    (c >= 55296 && c <= 57343)
                      ? '\ufffd\ufffd\ufffd'
                      : String.fromCharCode(c)),
                  (t += 6))
                : 240 === (248 & n) &&
                  t + 9 < r &&
                  ((i = parseInt(e.slice(t + 4, t + 6), 16)),
                  (s = parseInt(e.slice(t + 7, t + 9), 16)),
                  (a = parseInt(e.slice(t + 10, t + 12), 16)),
                  128 === (192 & i) && 128 === (192 & s) && 128 === (192 & a))
                ? ((c =
                    ((n << 18) & 1835008) |
                    ((i << 12) & 258048) |
                    ((s << 6) & 4032) |
                    (63 & a)) < 65536 || c > 1114111
                    ? (u += '\ufffd\ufffd\ufffd\ufffd')
                    : ((c -= 65536),
                      (u += String.fromCharCode(
                        55296 + (c >> 10),
                        56320 + (1023 & c)
                      ))),
                  (t += 9))
                : (u += '\ufffd');
            return u;
          })
        );
      }
      (r.defaultChars = ';/?:@&=+$,#'),
        (r.componentChars = ''),
        (e.exports = r);
    },
    81737: function (e) {
      'use strict';
      var t = {};
      function r(e, n, o) {
        var i,
          s,
          a,
          c,
          u,
          l = '';
        for (
          'string' !== typeof n && ((o = n), (n = r.defaultChars)),
            'undefined' === typeof o && (o = !0),
            u = (function (e) {
              var r,
                n,
                o = t[e];
              if (o) return o;
              for (o = t[e] = [], r = 0; r < 128; r++)
                (n = String.fromCharCode(r)),
                  /^[0-9a-z]$/i.test(n)
                    ? o.push(n)
                    : o.push(
                        '%' + ('0' + r.toString(16).toUpperCase()).slice(-2)
                      );
              for (r = 0; r < e.length; r++) o[e.charCodeAt(r)] = e[r];
              return o;
            })(n),
            i = 0,
            s = e.length;
          i < s;
          i++
        )
          if (
            ((a = e.charCodeAt(i)),
            o &&
              37 === a &&
              i + 2 < s &&
              /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3)))
          )
            (l += e.slice(i, i + 3)), (i += 2);
          else if (a < 128) l += u[a];
          else if (a >= 55296 && a <= 57343) {
            if (
              a >= 55296 &&
              a <= 56319 &&
              i + 1 < s &&
              (c = e.charCodeAt(i + 1)) >= 56320 &&
              c <= 57343
            ) {
              (l += encodeURIComponent(e[i] + e[i + 1])), i++;
              continue;
            }
            l += '%EF%BF%BD';
          } else l += encodeURIComponent(e[i]);
        return l;
      }
      (r.defaultChars = ";/?:@&=+$,-_.!~*'()#"),
        (r.componentChars = "-_.!~*'()"),
        (e.exports = r);
    },
    75024: function (e) {
      'use strict';
      e.exports = function (e) {
        var t = '';
        return (
          (t += e.protocol || ''),
          (t += e.slashes ? '//' : ''),
          (t += e.auth ? e.auth + '@' : ''),
          e.hostname && -1 !== e.hostname.indexOf(':')
            ? (t += '[' + e.hostname + ']')
            : (t += e.hostname || ''),
          (t += e.port ? ':' + e.port : ''),
          (t += e.pathname || ''),
          (t += e.search || ''),
          (t += e.hash || '')
        );
      };
    },
    14976: function (e, t, r) {
      'use strict';
      (e.exports.encode = r(81737)),
        (e.exports.decode = r(43771)),
        (e.exports.format = r(75024)),
        (e.exports.parse = r(72084));
    },
    72084: function (e) {
      'use strict';
      function t() {
        (this.protocol = null),
          (this.slashes = null),
          (this.auth = null),
          (this.port = null),
          (this.hostname = null),
          (this.hash = null),
          (this.search = null),
          (this.pathname = null);
      }
      var r = /^([a-z0-9.+-]+:)/i,
        n = /:[0-9]*$/,
        o = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        i = ['{', '}', '|', '\\', '^', '`'].concat([
          '<',
          '>',
          '"',
          '`',
          ' ',
          '\r',
          '\n',
          '\t',
        ]),
        s = ["'"].concat(i),
        a = ['%', '/', '?', ';', '#'].concat(s),
        c = ['/', '?', '#'],
        u = /^[+a-z0-9A-Z_-]{0,63}$/,
        l = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        p = { javascript: !0, 'javascript:': !0 },
        f = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          'http:': !0,
          'https:': !0,
          'ftp:': !0,
          'gopher:': !0,
          'file:': !0,
        };
      (t.prototype.parse = function (e, t) {
        var n,
          i,
          s,
          d,
          h,
          m = e;
        if (((m = m.trim()), !t && 1 === e.split('#').length)) {
          var g = o.exec(m);
          if (g)
            return (this.pathname = g[1]), g[2] && (this.search = g[2]), this;
        }
        var _ = r.exec(m);
        if (
          (_ &&
            ((s = (_ = _[0]).toLowerCase()),
            (this.protocol = _),
            (m = m.substr(_.length))),
          (t || _ || m.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
            (!(h = '//' === m.substr(0, 2)) ||
              (_ && p[_]) ||
              ((m = m.substr(2)), (this.slashes = !0))),
          !p[_] && (h || (_ && !f[_])))
        ) {
          var v,
            b,
            y = -1;
          for (n = 0; n < c.length; n++)
            -1 !== (d = m.indexOf(c[n])) && (-1 === y || d < y) && (y = d);
          for (
            -1 !==
              (b = -1 === y ? m.lastIndexOf('@') : m.lastIndexOf('@', y)) &&
              ((v = m.slice(0, b)), (m = m.slice(b + 1)), (this.auth = v)),
              y = -1,
              n = 0;
            n < a.length;
            n++
          )
            -1 !== (d = m.indexOf(a[n])) && (-1 === y || d < y) && (y = d);
          -1 === y && (y = m.length), ':' === m[y - 1] && y--;
          var E = m.slice(0, y);
          (m = m.slice(y)),
            this.parseHost(E),
            (this.hostname = this.hostname || '');
          var k =
            '[' === this.hostname[0] &&
            ']' === this.hostname[this.hostname.length - 1];
          if (!k) {
            var C = this.hostname.split(/\./);
            for (n = 0, i = C.length; n < i; n++) {
              var w = C[n];
              if (w && !w.match(u)) {
                for (var A = '', D = 0, x = w.length; D < x; D++)
                  w.charCodeAt(D) > 127 ? (A += 'x') : (A += w[D]);
                if (!A.match(u)) {
                  var T = C.slice(0, n),
                    S = C.slice(n + 1),
                    L = w.match(l);
                  L && (T.push(L[1]), S.unshift(L[2])),
                    S.length && (m = S.join('.') + m),
                    (this.hostname = T.join('.'));
                  break;
                }
              }
            }
          }
          this.hostname.length > 255 && (this.hostname = ''),
            k &&
              (this.hostname = this.hostname.substr(
                1,
                this.hostname.length - 2
              ));
        }
        var O = m.indexOf('#');
        -1 !== O && ((this.hash = m.substr(O)), (m = m.slice(0, O)));
        var I = m.indexOf('?');
        return (
          -1 !== I && ((this.search = m.substr(I)), (m = m.slice(0, I))),
          m && (this.pathname = m),
          f[s] && this.hostname && !this.pathname && (this.pathname = ''),
          this
        );
      }),
        (t.prototype.parseHost = function (e) {
          var t = n.exec(e);
          t &&
            (':' !== (t = t[0]) && (this.port = t.substr(1)),
            (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e);
        }),
        (e.exports = function (e, r) {
          if (e && e instanceof t) return e;
          var n = new t();
          return n.parse(e, r), n;
        });
    },
    68058: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          ucs2decode: function () {
            return d;
          },
          ucs2encode: function () {
            return h;
          },
          decode: function () {
            return _;
          },
          encode: function () {
            return v;
          },
          toASCII: function () {
            return y;
          },
          toUnicode: function () {
            return b;
          },
        });
      const n = 2147483647,
        o = 36,
        i = /^xn--/,
        s = /[^\0-\x7E]/,
        a = /[\x2E\u3002\uFF0E\uFF61]/g,
        c = {
          overflow: 'Overflow: input needs wider integers to process',
          'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
          'invalid-input': 'Invalid input',
        },
        u = Math.floor,
        l = String.fromCharCode;
      function p(e) {
        throw new RangeError(c[e]);
      }
      function f(e, t) {
        const r = e.split('@');
        let n = '';
        r.length > 1 && ((n = r[0] + '@'), (e = r[1]));
        const o = (function (e, t) {
          const r = [];
          let n = e.length;
          for (; n--; ) r[n] = t(e[n]);
          return r;
        })((e = e.replace(a, '.')).split('.'), t).join('.');
        return n + o;
      }
      function d(e) {
        const t = [];
        let r = 0;
        const n = e.length;
        for (; r < n; ) {
          const o = e.charCodeAt(r++);
          if (o >= 55296 && o <= 56319 && r < n) {
            const n = e.charCodeAt(r++);
            56320 == (64512 & n)
              ? t.push(((1023 & o) << 10) + (1023 & n) + 65536)
              : (t.push(o), r--);
          } else t.push(o);
        }
        return t;
      }
      const h = (e) => String.fromCodePoint(...e),
        m = function (e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        },
        g = function (e, t, r) {
          let n = 0;
          for (e = r ? u(e / 700) : e >> 1, e += u(e / t); e > 455; n += o)
            e = u(e / 35);
          return u(n + (36 * e) / (e + 38));
        },
        _ = function (e) {
          const t = [],
            r = e.length;
          let i = 0,
            s = 128,
            a = 72,
            c = e.lastIndexOf('-');
          c < 0 && (c = 0);
          for (let n = 0; n < c; ++n)
            e.charCodeAt(n) >= 128 && p('not-basic'), t.push(e.charCodeAt(n));
          for (let f = c > 0 ? c + 1 : 0; f < r; ) {
            let c = i;
            for (let t = 1, s = o; ; s += o) {
              f >= r && p('invalid-input');
              const c =
                (l = e.charCodeAt(f++)) - 48 < 10
                  ? l - 22
                  : l - 65 < 26
                  ? l - 65
                  : l - 97 < 26
                  ? l - 97
                  : o;
              (c >= o || c > u((n - i) / t)) && p('overflow'), (i += c * t);
              const d = s <= a ? 1 : s >= a + 26 ? 26 : s - a;
              if (c < d) break;
              const h = o - d;
              t > u(n / h) && p('overflow'), (t *= h);
            }
            const d = t.length + 1;
            (a = g(i - c, d, 0 == c)),
              u(i / d) > n - s && p('overflow'),
              (s += u(i / d)),
              (i %= d),
              t.splice(i++, 0, s);
          }
          var l;
          return String.fromCodePoint(...t);
        },
        v = function (e) {
          const t = [];
          let r = (e = d(e)).length,
            i = 128,
            s = 0,
            a = 72;
          for (const n of e) n < 128 && t.push(l(n));
          let c = t.length,
            f = c;
          for (c && t.push('-'); f < r; ) {
            let r = n;
            for (const t of e) t >= i && t < r && (r = t);
            const d = f + 1;
            r - i > u((n - s) / d) && p('overflow'),
              (s += (r - i) * d),
              (i = r);
            for (const h of e)
              if ((h < i && ++s > n && p('overflow'), h == i)) {
                let e = s;
                for (let r = o; ; r += o) {
                  const n = r <= a ? 1 : r >= a + 26 ? 26 : r - a;
                  if (e < n) break;
                  const i = e - n,
                    s = o - n;
                  t.push(l(m(n + (i % s), 0))), (e = u(i / s));
                }
                t.push(l(m(e, 0))), (a = g(s, d, f == c)), (s = 0), ++f;
              }
            ++s, ++i;
          }
          return t.join('');
        },
        b = function (e) {
          return f(e, function (e) {
            return i.test(e) ? _(e.slice(4).toLowerCase()) : e;
          });
        },
        y = function (e) {
          return f(e, function (e) {
            return s.test(e) ? 'xn--' + v(e) : e;
          });
        },
        E = {
          version: '2.1.0',
          ucs2: { decode: d, encode: h },
          decode: _,
          encode: v,
          toASCII: y,
          toUnicode: b,
        };
      t.default = E;
    },
    46889: function (e) {
      e.exports = /[\0-\x1F\x7F-\x9F]/;
    },
    3811: function (e) {
      e.exports =
        /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
    },
    7062: function (e) {
      e.exports =
        /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
    },
    18442: function (e) {
      e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    },
    18579: function (e, t, r) {
      'use strict';
      (t.Any = r(83530)),
        (t.Cc = r(46889)),
        (t.Cf = r(3811)),
        (t.P = r(7062)),
        (t.Z = r(18442));
    },
    83530: function (e) {
      e.exports =
        /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    },
    60227: function () {},
    40416: function () {},
    50549: function (e) {
      'use strict';
      e.exports = JSON.parse(
        '{"Aacute":"\xc1","aacute":"\xe1","Abreve":"\u0102","abreve":"\u0103","ac":"\u223e","acd":"\u223f","acE":"\u223e\u0333","Acirc":"\xc2","acirc":"\xe2","acute":"\xb4","Acy":"\u0410","acy":"\u0430","AElig":"\xc6","aelig":"\xe6","af":"\u2061","Afr":"\ud835\udd04","afr":"\ud835\udd1e","Agrave":"\xc0","agrave":"\xe0","alefsym":"\u2135","aleph":"\u2135","Alpha":"\u0391","alpha":"\u03b1","Amacr":"\u0100","amacr":"\u0101","amalg":"\u2a3f","amp":"&","AMP":"&","andand":"\u2a55","And":"\u2a53","and":"\u2227","andd":"\u2a5c","andslope":"\u2a58","andv":"\u2a5a","ang":"\u2220","ange":"\u29a4","angle":"\u2220","angmsdaa":"\u29a8","angmsdab":"\u29a9","angmsdac":"\u29aa","angmsdad":"\u29ab","angmsdae":"\u29ac","angmsdaf":"\u29ad","angmsdag":"\u29ae","angmsdah":"\u29af","angmsd":"\u2221","angrt":"\u221f","angrtvb":"\u22be","angrtvbd":"\u299d","angsph":"\u2222","angst":"\xc5","angzarr":"\u237c","Aogon":"\u0104","aogon":"\u0105","Aopf":"\ud835\udd38","aopf":"\ud835\udd52","apacir":"\u2a6f","ap":"\u2248","apE":"\u2a70","ape":"\u224a","apid":"\u224b","apos":"\'","ApplyFunction":"\u2061","approx":"\u2248","approxeq":"\u224a","Aring":"\xc5","aring":"\xe5","Ascr":"\ud835\udc9c","ascr":"\ud835\udcb6","Assign":"\u2254","ast":"*","asymp":"\u2248","asympeq":"\u224d","Atilde":"\xc3","atilde":"\xe3","Auml":"\xc4","auml":"\xe4","awconint":"\u2233","awint":"\u2a11","backcong":"\u224c","backepsilon":"\u03f6","backprime":"\u2035","backsim":"\u223d","backsimeq":"\u22cd","Backslash":"\u2216","Barv":"\u2ae7","barvee":"\u22bd","barwed":"\u2305","Barwed":"\u2306","barwedge":"\u2305","bbrk":"\u23b5","bbrktbrk":"\u23b6","bcong":"\u224c","Bcy":"\u0411","bcy":"\u0431","bdquo":"\u201e","becaus":"\u2235","because":"\u2235","Because":"\u2235","bemptyv":"\u29b0","bepsi":"\u03f6","bernou":"\u212c","Bernoullis":"\u212c","Beta":"\u0392","beta":"\u03b2","beth":"\u2136","between":"\u226c","Bfr":"\ud835\udd05","bfr":"\ud835\udd1f","bigcap":"\u22c2","bigcirc":"\u25ef","bigcup":"\u22c3","bigodot":"\u2a00","bigoplus":"\u2a01","bigotimes":"\u2a02","bigsqcup":"\u2a06","bigstar":"\u2605","bigtriangledown":"\u25bd","bigtriangleup":"\u25b3","biguplus":"\u2a04","bigvee":"\u22c1","bigwedge":"\u22c0","bkarow":"\u290d","blacklozenge":"\u29eb","blacksquare":"\u25aa","blacktriangle":"\u25b4","blacktriangledown":"\u25be","blacktriangleleft":"\u25c2","blacktriangleright":"\u25b8","blank":"\u2423","blk12":"\u2592","blk14":"\u2591","blk34":"\u2593","block":"\u2588","bne":"=\u20e5","bnequiv":"\u2261\u20e5","bNot":"\u2aed","bnot":"\u2310","Bopf":"\ud835\udd39","bopf":"\ud835\udd53","bot":"\u22a5","bottom":"\u22a5","bowtie":"\u22c8","boxbox":"\u29c9","boxdl":"\u2510","boxdL":"\u2555","boxDl":"\u2556","boxDL":"\u2557","boxdr":"\u250c","boxdR":"\u2552","boxDr":"\u2553","boxDR":"\u2554","boxh":"\u2500","boxH":"\u2550","boxhd":"\u252c","boxHd":"\u2564","boxhD":"\u2565","boxHD":"\u2566","boxhu":"\u2534","boxHu":"\u2567","boxhU":"\u2568","boxHU":"\u2569","boxminus":"\u229f","boxplus":"\u229e","boxtimes":"\u22a0","boxul":"\u2518","boxuL":"\u255b","boxUl":"\u255c","boxUL":"\u255d","boxur":"\u2514","boxuR":"\u2558","boxUr":"\u2559","boxUR":"\u255a","boxv":"\u2502","boxV":"\u2551","boxvh":"\u253c","boxvH":"\u256a","boxVh":"\u256b","boxVH":"\u256c","boxvl":"\u2524","boxvL":"\u2561","boxVl":"\u2562","boxVL":"\u2563","boxvr":"\u251c","boxvR":"\u255e","boxVr":"\u255f","boxVR":"\u2560","bprime":"\u2035","breve":"\u02d8","Breve":"\u02d8","brvbar":"\xa6","bscr":"\ud835\udcb7","Bscr":"\u212c","bsemi":"\u204f","bsim":"\u223d","bsime":"\u22cd","bsolb":"\u29c5","bsol":"\\\\","bsolhsub":"\u27c8","bull":"\u2022","bullet":"\u2022","bump":"\u224e","bumpE":"\u2aae","bumpe":"\u224f","Bumpeq":"\u224e","bumpeq":"\u224f","Cacute":"\u0106","cacute":"\u0107","capand":"\u2a44","capbrcup":"\u2a49","capcap":"\u2a4b","cap":"\u2229","Cap":"\u22d2","capcup":"\u2a47","capdot":"\u2a40","CapitalDifferentialD":"\u2145","caps":"\u2229\ufe00","caret":"\u2041","caron":"\u02c7","Cayleys":"\u212d","ccaps":"\u2a4d","Ccaron":"\u010c","ccaron":"\u010d","Ccedil":"\xc7","ccedil":"\xe7","Ccirc":"\u0108","ccirc":"\u0109","Cconint":"\u2230","ccups":"\u2a4c","ccupssm":"\u2a50","Cdot":"\u010a","cdot":"\u010b","cedil":"\xb8","Cedilla":"\xb8","cemptyv":"\u29b2","cent":"\xa2","centerdot":"\xb7","CenterDot":"\xb7","cfr":"\ud835\udd20","Cfr":"\u212d","CHcy":"\u0427","chcy":"\u0447","check":"\u2713","checkmark":"\u2713","Chi":"\u03a7","chi":"\u03c7","circ":"\u02c6","circeq":"\u2257","circlearrowleft":"\u21ba","circlearrowright":"\u21bb","circledast":"\u229b","circledcirc":"\u229a","circleddash":"\u229d","CircleDot":"\u2299","circledR":"\xae","circledS":"\u24c8","CircleMinus":"\u2296","CirclePlus":"\u2295","CircleTimes":"\u2297","cir":"\u25cb","cirE":"\u29c3","cire":"\u2257","cirfnint":"\u2a10","cirmid":"\u2aef","cirscir":"\u29c2","ClockwiseContourIntegral":"\u2232","CloseCurlyDoubleQuote":"\u201d","CloseCurlyQuote":"\u2019","clubs":"\u2663","clubsuit":"\u2663","colon":":","Colon":"\u2237","Colone":"\u2a74","colone":"\u2254","coloneq":"\u2254","comma":",","commat":"@","comp":"\u2201","compfn":"\u2218","complement":"\u2201","complexes":"\u2102","cong":"\u2245","congdot":"\u2a6d","Congruent":"\u2261","conint":"\u222e","Conint":"\u222f","ContourIntegral":"\u222e","copf":"\ud835\udd54","Copf":"\u2102","coprod":"\u2210","Coproduct":"\u2210","copy":"\xa9","COPY":"\xa9","copysr":"\u2117","CounterClockwiseContourIntegral":"\u2233","crarr":"\u21b5","cross":"\u2717","Cross":"\u2a2f","Cscr":"\ud835\udc9e","cscr":"\ud835\udcb8","csub":"\u2acf","csube":"\u2ad1","csup":"\u2ad0","csupe":"\u2ad2","ctdot":"\u22ef","cudarrl":"\u2938","cudarrr":"\u2935","cuepr":"\u22de","cuesc":"\u22df","cularr":"\u21b6","cularrp":"\u293d","cupbrcap":"\u2a48","cupcap":"\u2a46","CupCap":"\u224d","cup":"\u222a","Cup":"\u22d3","cupcup":"\u2a4a","cupdot":"\u228d","cupor":"\u2a45","cups":"\u222a\ufe00","curarr":"\u21b7","curarrm":"\u293c","curlyeqprec":"\u22de","curlyeqsucc":"\u22df","curlyvee":"\u22ce","curlywedge":"\u22cf","curren":"\xa4","curvearrowleft":"\u21b6","curvearrowright":"\u21b7","cuvee":"\u22ce","cuwed":"\u22cf","cwconint":"\u2232","cwint":"\u2231","cylcty":"\u232d","dagger":"\u2020","Dagger":"\u2021","daleth":"\u2138","darr":"\u2193","Darr":"\u21a1","dArr":"\u21d3","dash":"\u2010","Dashv":"\u2ae4","dashv":"\u22a3","dbkarow":"\u290f","dblac":"\u02dd","Dcaron":"\u010e","dcaron":"\u010f","Dcy":"\u0414","dcy":"\u0434","ddagger":"\u2021","ddarr":"\u21ca","DD":"\u2145","dd":"\u2146","DDotrahd":"\u2911","ddotseq":"\u2a77","deg":"\xb0","Del":"\u2207","Delta":"\u0394","delta":"\u03b4","demptyv":"\u29b1","dfisht":"\u297f","Dfr":"\ud835\udd07","dfr":"\ud835\udd21","dHar":"\u2965","dharl":"\u21c3","dharr":"\u21c2","DiacriticalAcute":"\xb4","DiacriticalDot":"\u02d9","DiacriticalDoubleAcute":"\u02dd","DiacriticalGrave":"`","DiacriticalTilde":"\u02dc","diam":"\u22c4","diamond":"\u22c4","Diamond":"\u22c4","diamondsuit":"\u2666","diams":"\u2666","die":"\xa8","DifferentialD":"\u2146","digamma":"\u03dd","disin":"\u22f2","div":"\xf7","divide":"\xf7","divideontimes":"\u22c7","divonx":"\u22c7","DJcy":"\u0402","djcy":"\u0452","dlcorn":"\u231e","dlcrop":"\u230d","dollar":"$","Dopf":"\ud835\udd3b","dopf":"\ud835\udd55","Dot":"\xa8","dot":"\u02d9","DotDot":"\u20dc","doteq":"\u2250","doteqdot":"\u2251","DotEqual":"\u2250","dotminus":"\u2238","dotplus":"\u2214","dotsquare":"\u22a1","doublebarwedge":"\u2306","DoubleContourIntegral":"\u222f","DoubleDot":"\xa8","DoubleDownArrow":"\u21d3","DoubleLeftArrow":"\u21d0","DoubleLeftRightArrow":"\u21d4","DoubleLeftTee":"\u2ae4","DoubleLongLeftArrow":"\u27f8","DoubleLongLeftRightArrow":"\u27fa","DoubleLongRightArrow":"\u27f9","DoubleRightArrow":"\u21d2","DoubleRightTee":"\u22a8","DoubleUpArrow":"\u21d1","DoubleUpDownArrow":"\u21d5","DoubleVerticalBar":"\u2225","DownArrowBar":"\u2913","downarrow":"\u2193","DownArrow":"\u2193","Downarrow":"\u21d3","DownArrowUpArrow":"\u21f5","DownBreve":"\u0311","downdownarrows":"\u21ca","downharpoonleft":"\u21c3","downharpoonright":"\u21c2","DownLeftRightVector":"\u2950","DownLeftTeeVector":"\u295e","DownLeftVectorBar":"\u2956","DownLeftVector":"\u21bd","DownRightTeeVector":"\u295f","DownRightVectorBar":"\u2957","DownRightVector":"\u21c1","DownTeeArrow":"\u21a7","DownTee":"\u22a4","drbkarow":"\u2910","drcorn":"\u231f","drcrop":"\u230c","Dscr":"\ud835\udc9f","dscr":"\ud835\udcb9","DScy":"\u0405","dscy":"\u0455","dsol":"\u29f6","Dstrok":"\u0110","dstrok":"\u0111","dtdot":"\u22f1","dtri":"\u25bf","dtrif":"\u25be","duarr":"\u21f5","duhar":"\u296f","dwangle":"\u29a6","DZcy":"\u040f","dzcy":"\u045f","dzigrarr":"\u27ff","Eacute":"\xc9","eacute":"\xe9","easter":"\u2a6e","Ecaron":"\u011a","ecaron":"\u011b","Ecirc":"\xca","ecirc":"\xea","ecir":"\u2256","ecolon":"\u2255","Ecy":"\u042d","ecy":"\u044d","eDDot":"\u2a77","Edot":"\u0116","edot":"\u0117","eDot":"\u2251","ee":"\u2147","efDot":"\u2252","Efr":"\ud835\udd08","efr":"\ud835\udd22","eg":"\u2a9a","Egrave":"\xc8","egrave":"\xe8","egs":"\u2a96","egsdot":"\u2a98","el":"\u2a99","Element":"\u2208","elinters":"\u23e7","ell":"\u2113","els":"\u2a95","elsdot":"\u2a97","Emacr":"\u0112","emacr":"\u0113","empty":"\u2205","emptyset":"\u2205","EmptySmallSquare":"\u25fb","emptyv":"\u2205","EmptyVerySmallSquare":"\u25ab","emsp13":"\u2004","emsp14":"\u2005","emsp":"\u2003","ENG":"\u014a","eng":"\u014b","ensp":"\u2002","Eogon":"\u0118","eogon":"\u0119","Eopf":"\ud835\udd3c","eopf":"\ud835\udd56","epar":"\u22d5","eparsl":"\u29e3","eplus":"\u2a71","epsi":"\u03b5","Epsilon":"\u0395","epsilon":"\u03b5","epsiv":"\u03f5","eqcirc":"\u2256","eqcolon":"\u2255","eqsim":"\u2242","eqslantgtr":"\u2a96","eqslantless":"\u2a95","Equal":"\u2a75","equals":"=","EqualTilde":"\u2242","equest":"\u225f","Equilibrium":"\u21cc","equiv":"\u2261","equivDD":"\u2a78","eqvparsl":"\u29e5","erarr":"\u2971","erDot":"\u2253","escr":"\u212f","Escr":"\u2130","esdot":"\u2250","Esim":"\u2a73","esim":"\u2242","Eta":"\u0397","eta":"\u03b7","ETH":"\xd0","eth":"\xf0","Euml":"\xcb","euml":"\xeb","euro":"\u20ac","excl":"!","exist":"\u2203","Exists":"\u2203","expectation":"\u2130","exponentiale":"\u2147","ExponentialE":"\u2147","fallingdotseq":"\u2252","Fcy":"\u0424","fcy":"\u0444","female":"\u2640","ffilig":"\ufb03","fflig":"\ufb00","ffllig":"\ufb04","Ffr":"\ud835\udd09","ffr":"\ud835\udd23","filig":"\ufb01","FilledSmallSquare":"\u25fc","FilledVerySmallSquare":"\u25aa","fjlig":"fj","flat":"\u266d","fllig":"\ufb02","fltns":"\u25b1","fnof":"\u0192","Fopf":"\ud835\udd3d","fopf":"\ud835\udd57","forall":"\u2200","ForAll":"\u2200","fork":"\u22d4","forkv":"\u2ad9","Fouriertrf":"\u2131","fpartint":"\u2a0d","frac12":"\xbd","frac13":"\u2153","frac14":"\xbc","frac15":"\u2155","frac16":"\u2159","frac18":"\u215b","frac23":"\u2154","frac25":"\u2156","frac34":"\xbe","frac35":"\u2157","frac38":"\u215c","frac45":"\u2158","frac56":"\u215a","frac58":"\u215d","frac78":"\u215e","frasl":"\u2044","frown":"\u2322","fscr":"\ud835\udcbb","Fscr":"\u2131","gacute":"\u01f5","Gamma":"\u0393","gamma":"\u03b3","Gammad":"\u03dc","gammad":"\u03dd","gap":"\u2a86","Gbreve":"\u011e","gbreve":"\u011f","Gcedil":"\u0122","Gcirc":"\u011c","gcirc":"\u011d","Gcy":"\u0413","gcy":"\u0433","Gdot":"\u0120","gdot":"\u0121","ge":"\u2265","gE":"\u2267","gEl":"\u2a8c","gel":"\u22db","geq":"\u2265","geqq":"\u2267","geqslant":"\u2a7e","gescc":"\u2aa9","ges":"\u2a7e","gesdot":"\u2a80","gesdoto":"\u2a82","gesdotol":"\u2a84","gesl":"\u22db\ufe00","gesles":"\u2a94","Gfr":"\ud835\udd0a","gfr":"\ud835\udd24","gg":"\u226b","Gg":"\u22d9","ggg":"\u22d9","gimel":"\u2137","GJcy":"\u0403","gjcy":"\u0453","gla":"\u2aa5","gl":"\u2277","glE":"\u2a92","glj":"\u2aa4","gnap":"\u2a8a","gnapprox":"\u2a8a","gne":"\u2a88","gnE":"\u2269","gneq":"\u2a88","gneqq":"\u2269","gnsim":"\u22e7","Gopf":"\ud835\udd3e","gopf":"\ud835\udd58","grave":"`","GreaterEqual":"\u2265","GreaterEqualLess":"\u22db","GreaterFullEqual":"\u2267","GreaterGreater":"\u2aa2","GreaterLess":"\u2277","GreaterSlantEqual":"\u2a7e","GreaterTilde":"\u2273","Gscr":"\ud835\udca2","gscr":"\u210a","gsim":"\u2273","gsime":"\u2a8e","gsiml":"\u2a90","gtcc":"\u2aa7","gtcir":"\u2a7a","gt":">","GT":">","Gt":"\u226b","gtdot":"\u22d7","gtlPar":"\u2995","gtquest":"\u2a7c","gtrapprox":"\u2a86","gtrarr":"\u2978","gtrdot":"\u22d7","gtreqless":"\u22db","gtreqqless":"\u2a8c","gtrless":"\u2277","gtrsim":"\u2273","gvertneqq":"\u2269\ufe00","gvnE":"\u2269\ufe00","Hacek":"\u02c7","hairsp":"\u200a","half":"\xbd","hamilt":"\u210b","HARDcy":"\u042a","hardcy":"\u044a","harrcir":"\u2948","harr":"\u2194","hArr":"\u21d4","harrw":"\u21ad","Hat":"^","hbar":"\u210f","Hcirc":"\u0124","hcirc":"\u0125","hearts":"\u2665","heartsuit":"\u2665","hellip":"\u2026","hercon":"\u22b9","hfr":"\ud835\udd25","Hfr":"\u210c","HilbertSpace":"\u210b","hksearow":"\u2925","hkswarow":"\u2926","hoarr":"\u21ff","homtht":"\u223b","hookleftarrow":"\u21a9","hookrightarrow":"\u21aa","hopf":"\ud835\udd59","Hopf":"\u210d","horbar":"\u2015","HorizontalLine":"\u2500","hscr":"\ud835\udcbd","Hscr":"\u210b","hslash":"\u210f","Hstrok":"\u0126","hstrok":"\u0127","HumpDownHump":"\u224e","HumpEqual":"\u224f","hybull":"\u2043","hyphen":"\u2010","Iacute":"\xcd","iacute":"\xed","ic":"\u2063","Icirc":"\xce","icirc":"\xee","Icy":"\u0418","icy":"\u0438","Idot":"\u0130","IEcy":"\u0415","iecy":"\u0435","iexcl":"\xa1","iff":"\u21d4","ifr":"\ud835\udd26","Ifr":"\u2111","Igrave":"\xcc","igrave":"\xec","ii":"\u2148","iiiint":"\u2a0c","iiint":"\u222d","iinfin":"\u29dc","iiota":"\u2129","IJlig":"\u0132","ijlig":"\u0133","Imacr":"\u012a","imacr":"\u012b","image":"\u2111","ImaginaryI":"\u2148","imagline":"\u2110","imagpart":"\u2111","imath":"\u0131","Im":"\u2111","imof":"\u22b7","imped":"\u01b5","Implies":"\u21d2","incare":"\u2105","in":"\u2208","infin":"\u221e","infintie":"\u29dd","inodot":"\u0131","intcal":"\u22ba","int":"\u222b","Int":"\u222c","integers":"\u2124","Integral":"\u222b","intercal":"\u22ba","Intersection":"\u22c2","intlarhk":"\u2a17","intprod":"\u2a3c","InvisibleComma":"\u2063","InvisibleTimes":"\u2062","IOcy":"\u0401","iocy":"\u0451","Iogon":"\u012e","iogon":"\u012f","Iopf":"\ud835\udd40","iopf":"\ud835\udd5a","Iota":"\u0399","iota":"\u03b9","iprod":"\u2a3c","iquest":"\xbf","iscr":"\ud835\udcbe","Iscr":"\u2110","isin":"\u2208","isindot":"\u22f5","isinE":"\u22f9","isins":"\u22f4","isinsv":"\u22f3","isinv":"\u2208","it":"\u2062","Itilde":"\u0128","itilde":"\u0129","Iukcy":"\u0406","iukcy":"\u0456","Iuml":"\xcf","iuml":"\xef","Jcirc":"\u0134","jcirc":"\u0135","Jcy":"\u0419","jcy":"\u0439","Jfr":"\ud835\udd0d","jfr":"\ud835\udd27","jmath":"\u0237","Jopf":"\ud835\udd41","jopf":"\ud835\udd5b","Jscr":"\ud835\udca5","jscr":"\ud835\udcbf","Jsercy":"\u0408","jsercy":"\u0458","Jukcy":"\u0404","jukcy":"\u0454","Kappa":"\u039a","kappa":"\u03ba","kappav":"\u03f0","Kcedil":"\u0136","kcedil":"\u0137","Kcy":"\u041a","kcy":"\u043a","Kfr":"\ud835\udd0e","kfr":"\ud835\udd28","kgreen":"\u0138","KHcy":"\u0425","khcy":"\u0445","KJcy":"\u040c","kjcy":"\u045c","Kopf":"\ud835\udd42","kopf":"\ud835\udd5c","Kscr":"\ud835\udca6","kscr":"\ud835\udcc0","lAarr":"\u21da","Lacute":"\u0139","lacute":"\u013a","laemptyv":"\u29b4","lagran":"\u2112","Lambda":"\u039b","lambda":"\u03bb","lang":"\u27e8","Lang":"\u27ea","langd":"\u2991","langle":"\u27e8","lap":"\u2a85","Laplacetrf":"\u2112","laquo":"\xab","larrb":"\u21e4","larrbfs":"\u291f","larr":"\u2190","Larr":"\u219e","lArr":"\u21d0","larrfs":"\u291d","larrhk":"\u21a9","larrlp":"\u21ab","larrpl":"\u2939","larrsim":"\u2973","larrtl":"\u21a2","latail":"\u2919","lAtail":"\u291b","lat":"\u2aab","late":"\u2aad","lates":"\u2aad\ufe00","lbarr":"\u290c","lBarr":"\u290e","lbbrk":"\u2772","lbrace":"{","lbrack":"[","lbrke":"\u298b","lbrksld":"\u298f","lbrkslu":"\u298d","Lcaron":"\u013d","lcaron":"\u013e","Lcedil":"\u013b","lcedil":"\u013c","lceil":"\u2308","lcub":"{","Lcy":"\u041b","lcy":"\u043b","ldca":"\u2936","ldquo":"\u201c","ldquor":"\u201e","ldrdhar":"\u2967","ldrushar":"\u294b","ldsh":"\u21b2","le":"\u2264","lE":"\u2266","LeftAngleBracket":"\u27e8","LeftArrowBar":"\u21e4","leftarrow":"\u2190","LeftArrow":"\u2190","Leftarrow":"\u21d0","LeftArrowRightArrow":"\u21c6","leftarrowtail":"\u21a2","LeftCeiling":"\u2308","LeftDoubleBracket":"\u27e6","LeftDownTeeVector":"\u2961","LeftDownVectorBar":"\u2959","LeftDownVector":"\u21c3","LeftFloor":"\u230a","leftharpoondown":"\u21bd","leftharpoonup":"\u21bc","leftleftarrows":"\u21c7","leftrightarrow":"\u2194","LeftRightArrow":"\u2194","Leftrightarrow":"\u21d4","leftrightarrows":"\u21c6","leftrightharpoons":"\u21cb","leftrightsquigarrow":"\u21ad","LeftRightVector":"\u294e","LeftTeeArrow":"\u21a4","LeftTee":"\u22a3","LeftTeeVector":"\u295a","leftthreetimes":"\u22cb","LeftTriangleBar":"\u29cf","LeftTriangle":"\u22b2","LeftTriangleEqual":"\u22b4","LeftUpDownVector":"\u2951","LeftUpTeeVector":"\u2960","LeftUpVectorBar":"\u2958","LeftUpVector":"\u21bf","LeftVectorBar":"\u2952","LeftVector":"\u21bc","lEg":"\u2a8b","leg":"\u22da","leq":"\u2264","leqq":"\u2266","leqslant":"\u2a7d","lescc":"\u2aa8","les":"\u2a7d","lesdot":"\u2a7f","lesdoto":"\u2a81","lesdotor":"\u2a83","lesg":"\u22da\ufe00","lesges":"\u2a93","lessapprox":"\u2a85","lessdot":"\u22d6","lesseqgtr":"\u22da","lesseqqgtr":"\u2a8b","LessEqualGreater":"\u22da","LessFullEqual":"\u2266","LessGreater":"\u2276","lessgtr":"\u2276","LessLess":"\u2aa1","lesssim":"\u2272","LessSlantEqual":"\u2a7d","LessTilde":"\u2272","lfisht":"\u297c","lfloor":"\u230a","Lfr":"\ud835\udd0f","lfr":"\ud835\udd29","lg":"\u2276","lgE":"\u2a91","lHar":"\u2962","lhard":"\u21bd","lharu":"\u21bc","lharul":"\u296a","lhblk":"\u2584","LJcy":"\u0409","ljcy":"\u0459","llarr":"\u21c7","ll":"\u226a","Ll":"\u22d8","llcorner":"\u231e","Lleftarrow":"\u21da","llhard":"\u296b","lltri":"\u25fa","Lmidot":"\u013f","lmidot":"\u0140","lmoustache":"\u23b0","lmoust":"\u23b0","lnap":"\u2a89","lnapprox":"\u2a89","lne":"\u2a87","lnE":"\u2268","lneq":"\u2a87","lneqq":"\u2268","lnsim":"\u22e6","loang":"\u27ec","loarr":"\u21fd","lobrk":"\u27e6","longleftarrow":"\u27f5","LongLeftArrow":"\u27f5","Longleftarrow":"\u27f8","longleftrightarrow":"\u27f7","LongLeftRightArrow":"\u27f7","Longleftrightarrow":"\u27fa","longmapsto":"\u27fc","longrightarrow":"\u27f6","LongRightArrow":"\u27f6","Longrightarrow":"\u27f9","looparrowleft":"\u21ab","looparrowright":"\u21ac","lopar":"\u2985","Lopf":"\ud835\udd43","lopf":"\ud835\udd5d","loplus":"\u2a2d","lotimes":"\u2a34","lowast":"\u2217","lowbar":"_","LowerLeftArrow":"\u2199","LowerRightArrow":"\u2198","loz":"\u25ca","lozenge":"\u25ca","lozf":"\u29eb","lpar":"(","lparlt":"\u2993","lrarr":"\u21c6","lrcorner":"\u231f","lrhar":"\u21cb","lrhard":"\u296d","lrm":"\u200e","lrtri":"\u22bf","lsaquo":"\u2039","lscr":"\ud835\udcc1","Lscr":"\u2112","lsh":"\u21b0","Lsh":"\u21b0","lsim":"\u2272","lsime":"\u2a8d","lsimg":"\u2a8f","lsqb":"[","lsquo":"\u2018","lsquor":"\u201a","Lstrok":"\u0141","lstrok":"\u0142","ltcc":"\u2aa6","ltcir":"\u2a79","lt":"<","LT":"<","Lt":"\u226a","ltdot":"\u22d6","lthree":"\u22cb","ltimes":"\u22c9","ltlarr":"\u2976","ltquest":"\u2a7b","ltri":"\u25c3","ltrie":"\u22b4","ltrif":"\u25c2","ltrPar":"\u2996","lurdshar":"\u294a","luruhar":"\u2966","lvertneqq":"\u2268\ufe00","lvnE":"\u2268\ufe00","macr":"\xaf","male":"\u2642","malt":"\u2720","maltese":"\u2720","Map":"\u2905","map":"\u21a6","mapsto":"\u21a6","mapstodown":"\u21a7","mapstoleft":"\u21a4","mapstoup":"\u21a5","marker":"\u25ae","mcomma":"\u2a29","Mcy":"\u041c","mcy":"\u043c","mdash":"\u2014","mDDot":"\u223a","measuredangle":"\u2221","MediumSpace":"\u205f","Mellintrf":"\u2133","Mfr":"\ud835\udd10","mfr":"\ud835\udd2a","mho":"\u2127","micro":"\xb5","midast":"*","midcir":"\u2af0","mid":"\u2223","middot":"\xb7","minusb":"\u229f","minus":"\u2212","minusd":"\u2238","minusdu":"\u2a2a","MinusPlus":"\u2213","mlcp":"\u2adb","mldr":"\u2026","mnplus":"\u2213","models":"\u22a7","Mopf":"\ud835\udd44","mopf":"\ud835\udd5e","mp":"\u2213","mscr":"\ud835\udcc2","Mscr":"\u2133","mstpos":"\u223e","Mu":"\u039c","mu":"\u03bc","multimap":"\u22b8","mumap":"\u22b8","nabla":"\u2207","Nacute":"\u0143","nacute":"\u0144","nang":"\u2220\u20d2","nap":"\u2249","napE":"\u2a70\u0338","napid":"\u224b\u0338","napos":"\u0149","napprox":"\u2249","natural":"\u266e","naturals":"\u2115","natur":"\u266e","nbsp":"\xa0","nbump":"\u224e\u0338","nbumpe":"\u224f\u0338","ncap":"\u2a43","Ncaron":"\u0147","ncaron":"\u0148","Ncedil":"\u0145","ncedil":"\u0146","ncong":"\u2247","ncongdot":"\u2a6d\u0338","ncup":"\u2a42","Ncy":"\u041d","ncy":"\u043d","ndash":"\u2013","nearhk":"\u2924","nearr":"\u2197","neArr":"\u21d7","nearrow":"\u2197","ne":"\u2260","nedot":"\u2250\u0338","NegativeMediumSpace":"\u200b","NegativeThickSpace":"\u200b","NegativeThinSpace":"\u200b","NegativeVeryThinSpace":"\u200b","nequiv":"\u2262","nesear":"\u2928","nesim":"\u2242\u0338","NestedGreaterGreater":"\u226b","NestedLessLess":"\u226a","NewLine":"\\n","nexist":"\u2204","nexists":"\u2204","Nfr":"\ud835\udd11","nfr":"\ud835\udd2b","ngE":"\u2267\u0338","nge":"\u2271","ngeq":"\u2271","ngeqq":"\u2267\u0338","ngeqslant":"\u2a7e\u0338","nges":"\u2a7e\u0338","nGg":"\u22d9\u0338","ngsim":"\u2275","nGt":"\u226b\u20d2","ngt":"\u226f","ngtr":"\u226f","nGtv":"\u226b\u0338","nharr":"\u21ae","nhArr":"\u21ce","nhpar":"\u2af2","ni":"\u220b","nis":"\u22fc","nisd":"\u22fa","niv":"\u220b","NJcy":"\u040a","njcy":"\u045a","nlarr":"\u219a","nlArr":"\u21cd","nldr":"\u2025","nlE":"\u2266\u0338","nle":"\u2270","nleftarrow":"\u219a","nLeftarrow":"\u21cd","nleftrightarrow":"\u21ae","nLeftrightarrow":"\u21ce","nleq":"\u2270","nleqq":"\u2266\u0338","nleqslant":"\u2a7d\u0338","nles":"\u2a7d\u0338","nless":"\u226e","nLl":"\u22d8\u0338","nlsim":"\u2274","nLt":"\u226a\u20d2","nlt":"\u226e","nltri":"\u22ea","nltrie":"\u22ec","nLtv":"\u226a\u0338","nmid":"\u2224","NoBreak":"\u2060","NonBreakingSpace":"\xa0","nopf":"\ud835\udd5f","Nopf":"\u2115","Not":"\u2aec","not":"\xac","NotCongruent":"\u2262","NotCupCap":"\u226d","NotDoubleVerticalBar":"\u2226","NotElement":"\u2209","NotEqual":"\u2260","NotEqualTilde":"\u2242\u0338","NotExists":"\u2204","NotGreater":"\u226f","NotGreaterEqual":"\u2271","NotGreaterFullEqual":"\u2267\u0338","NotGreaterGreater":"\u226b\u0338","NotGreaterLess":"\u2279","NotGreaterSlantEqual":"\u2a7e\u0338","NotGreaterTilde":"\u2275","NotHumpDownHump":"\u224e\u0338","NotHumpEqual":"\u224f\u0338","notin":"\u2209","notindot":"\u22f5\u0338","notinE":"\u22f9\u0338","notinva":"\u2209","notinvb":"\u22f7","notinvc":"\u22f6","NotLeftTriangleBar":"\u29cf\u0338","NotLeftTriangle":"\u22ea","NotLeftTriangleEqual":"\u22ec","NotLess":"\u226e","NotLessEqual":"\u2270","NotLessGreater":"\u2278","NotLessLess":"\u226a\u0338","NotLessSlantEqual":"\u2a7d\u0338","NotLessTilde":"\u2274","NotNestedGreaterGreater":"\u2aa2\u0338","NotNestedLessLess":"\u2aa1\u0338","notni":"\u220c","notniva":"\u220c","notnivb":"\u22fe","notnivc":"\u22fd","NotPrecedes":"\u2280","NotPrecedesEqual":"\u2aaf\u0338","NotPrecedesSlantEqual":"\u22e0","NotReverseElement":"\u220c","NotRightTriangleBar":"\u29d0\u0338","NotRightTriangle":"\u22eb","NotRightTriangleEqual":"\u22ed","NotSquareSubset":"\u228f\u0338","NotSquareSubsetEqual":"\u22e2","NotSquareSuperset":"\u2290\u0338","NotSquareSupersetEqual":"\u22e3","NotSubset":"\u2282\u20d2","NotSubsetEqual":"\u2288","NotSucceeds":"\u2281","NotSucceedsEqual":"\u2ab0\u0338","NotSucceedsSlantEqual":"\u22e1","NotSucceedsTilde":"\u227f\u0338","NotSuperset":"\u2283\u20d2","NotSupersetEqual":"\u2289","NotTilde":"\u2241","NotTildeEqual":"\u2244","NotTildeFullEqual":"\u2247","NotTildeTilde":"\u2249","NotVerticalBar":"\u2224","nparallel":"\u2226","npar":"\u2226","nparsl":"\u2afd\u20e5","npart":"\u2202\u0338","npolint":"\u2a14","npr":"\u2280","nprcue":"\u22e0","nprec":"\u2280","npreceq":"\u2aaf\u0338","npre":"\u2aaf\u0338","nrarrc":"\u2933\u0338","nrarr":"\u219b","nrArr":"\u21cf","nrarrw":"\u219d\u0338","nrightarrow":"\u219b","nRightarrow":"\u21cf","nrtri":"\u22eb","nrtrie":"\u22ed","nsc":"\u2281","nsccue":"\u22e1","nsce":"\u2ab0\u0338","Nscr":"\ud835\udca9","nscr":"\ud835\udcc3","nshortmid":"\u2224","nshortparallel":"\u2226","nsim":"\u2241","nsime":"\u2244","nsimeq":"\u2244","nsmid":"\u2224","nspar":"\u2226","nsqsube":"\u22e2","nsqsupe":"\u22e3","nsub":"\u2284","nsubE":"\u2ac5\u0338","nsube":"\u2288","nsubset":"\u2282\u20d2","nsubseteq":"\u2288","nsubseteqq":"\u2ac5\u0338","nsucc":"\u2281","nsucceq":"\u2ab0\u0338","nsup":"\u2285","nsupE":"\u2ac6\u0338","nsupe":"\u2289","nsupset":"\u2283\u20d2","nsupseteq":"\u2289","nsupseteqq":"\u2ac6\u0338","ntgl":"\u2279","Ntilde":"\xd1","ntilde":"\xf1","ntlg":"\u2278","ntriangleleft":"\u22ea","ntrianglelefteq":"\u22ec","ntriangleright":"\u22eb","ntrianglerighteq":"\u22ed","Nu":"\u039d","nu":"\u03bd","num":"#","numero":"\u2116","numsp":"\u2007","nvap":"\u224d\u20d2","nvdash":"\u22ac","nvDash":"\u22ad","nVdash":"\u22ae","nVDash":"\u22af","nvge":"\u2265\u20d2","nvgt":">\u20d2","nvHarr":"\u2904","nvinfin":"\u29de","nvlArr":"\u2902","nvle":"\u2264\u20d2","nvlt":"<\u20d2","nvltrie":"\u22b4\u20d2","nvrArr":"\u2903","nvrtrie":"\u22b5\u20d2","nvsim":"\u223c\u20d2","nwarhk":"\u2923","nwarr":"\u2196","nwArr":"\u21d6","nwarrow":"\u2196","nwnear":"\u2927","Oacute":"\xd3","oacute":"\xf3","oast":"\u229b","Ocirc":"\xd4","ocirc":"\xf4","ocir":"\u229a","Ocy":"\u041e","ocy":"\u043e","odash":"\u229d","Odblac":"\u0150","odblac":"\u0151","odiv":"\u2a38","odot":"\u2299","odsold":"\u29bc","OElig":"\u0152","oelig":"\u0153","ofcir":"\u29bf","Ofr":"\ud835\udd12","ofr":"\ud835\udd2c","ogon":"\u02db","Ograve":"\xd2","ograve":"\xf2","ogt":"\u29c1","ohbar":"\u29b5","ohm":"\u03a9","oint":"\u222e","olarr":"\u21ba","olcir":"\u29be","olcross":"\u29bb","oline":"\u203e","olt":"\u29c0","Omacr":"\u014c","omacr":"\u014d","Omega":"\u03a9","omega":"\u03c9","Omicron":"\u039f","omicron":"\u03bf","omid":"\u29b6","ominus":"\u2296","Oopf":"\ud835\udd46","oopf":"\ud835\udd60","opar":"\u29b7","OpenCurlyDoubleQuote":"\u201c","OpenCurlyQuote":"\u2018","operp":"\u29b9","oplus":"\u2295","orarr":"\u21bb","Or":"\u2a54","or":"\u2228","ord":"\u2a5d","order":"\u2134","orderof":"\u2134","ordf":"\xaa","ordm":"\xba","origof":"\u22b6","oror":"\u2a56","orslope":"\u2a57","orv":"\u2a5b","oS":"\u24c8","Oscr":"\ud835\udcaa","oscr":"\u2134","Oslash":"\xd8","oslash":"\xf8","osol":"\u2298","Otilde":"\xd5","otilde":"\xf5","otimesas":"\u2a36","Otimes":"\u2a37","otimes":"\u2297","Ouml":"\xd6","ouml":"\xf6","ovbar":"\u233d","OverBar":"\u203e","OverBrace":"\u23de","OverBracket":"\u23b4","OverParenthesis":"\u23dc","para":"\xb6","parallel":"\u2225","par":"\u2225","parsim":"\u2af3","parsl":"\u2afd","part":"\u2202","PartialD":"\u2202","Pcy":"\u041f","pcy":"\u043f","percnt":"%","period":".","permil":"\u2030","perp":"\u22a5","pertenk":"\u2031","Pfr":"\ud835\udd13","pfr":"\ud835\udd2d","Phi":"\u03a6","phi":"\u03c6","phiv":"\u03d5","phmmat":"\u2133","phone":"\u260e","Pi":"\u03a0","pi":"\u03c0","pitchfork":"\u22d4","piv":"\u03d6","planck":"\u210f","planckh":"\u210e","plankv":"\u210f","plusacir":"\u2a23","plusb":"\u229e","pluscir":"\u2a22","plus":"+","plusdo":"\u2214","plusdu":"\u2a25","pluse":"\u2a72","PlusMinus":"\xb1","plusmn":"\xb1","plussim":"\u2a26","plustwo":"\u2a27","pm":"\xb1","Poincareplane":"\u210c","pointint":"\u2a15","popf":"\ud835\udd61","Popf":"\u2119","pound":"\xa3","prap":"\u2ab7","Pr":"\u2abb","pr":"\u227a","prcue":"\u227c","precapprox":"\u2ab7","prec":"\u227a","preccurlyeq":"\u227c","Precedes":"\u227a","PrecedesEqual":"\u2aaf","PrecedesSlantEqual":"\u227c","PrecedesTilde":"\u227e","preceq":"\u2aaf","precnapprox":"\u2ab9","precneqq":"\u2ab5","precnsim":"\u22e8","pre":"\u2aaf","prE":"\u2ab3","precsim":"\u227e","prime":"\u2032","Prime":"\u2033","primes":"\u2119","prnap":"\u2ab9","prnE":"\u2ab5","prnsim":"\u22e8","prod":"\u220f","Product":"\u220f","profalar":"\u232e","profline":"\u2312","profsurf":"\u2313","prop":"\u221d","Proportional":"\u221d","Proportion":"\u2237","propto":"\u221d","prsim":"\u227e","prurel":"\u22b0","Pscr":"\ud835\udcab","pscr":"\ud835\udcc5","Psi":"\u03a8","psi":"\u03c8","puncsp":"\u2008","Qfr":"\ud835\udd14","qfr":"\ud835\udd2e","qint":"\u2a0c","qopf":"\ud835\udd62","Qopf":"\u211a","qprime":"\u2057","Qscr":"\ud835\udcac","qscr":"\ud835\udcc6","quaternions":"\u210d","quatint":"\u2a16","quest":"?","questeq":"\u225f","quot":"\\"","QUOT":"\\"","rAarr":"\u21db","race":"\u223d\u0331","Racute":"\u0154","racute":"\u0155","radic":"\u221a","raemptyv":"\u29b3","rang":"\u27e9","Rang":"\u27eb","rangd":"\u2992","range":"\u29a5","rangle":"\u27e9","raquo":"\xbb","rarrap":"\u2975","rarrb":"\u21e5","rarrbfs":"\u2920","rarrc":"\u2933","rarr":"\u2192","Rarr":"\u21a0","rArr":"\u21d2","rarrfs":"\u291e","rarrhk":"\u21aa","rarrlp":"\u21ac","rarrpl":"\u2945","rarrsim":"\u2974","Rarrtl":"\u2916","rarrtl":"\u21a3","rarrw":"\u219d","ratail":"\u291a","rAtail":"\u291c","ratio":"\u2236","rationals":"\u211a","rbarr":"\u290d","rBarr":"\u290f","RBarr":"\u2910","rbbrk":"\u2773","rbrace":"}","rbrack":"]","rbrke":"\u298c","rbrksld":"\u298e","rbrkslu":"\u2990","Rcaron":"\u0158","rcaron":"\u0159","Rcedil":"\u0156","rcedil":"\u0157","rceil":"\u2309","rcub":"}","Rcy":"\u0420","rcy":"\u0440","rdca":"\u2937","rdldhar":"\u2969","rdquo":"\u201d","rdquor":"\u201d","rdsh":"\u21b3","real":"\u211c","realine":"\u211b","realpart":"\u211c","reals":"\u211d","Re":"\u211c","rect":"\u25ad","reg":"\xae","REG":"\xae","ReverseElement":"\u220b","ReverseEquilibrium":"\u21cb","ReverseUpEquilibrium":"\u296f","rfisht":"\u297d","rfloor":"\u230b","rfr":"\ud835\udd2f","Rfr":"\u211c","rHar":"\u2964","rhard":"\u21c1","rharu":"\u21c0","rharul":"\u296c","Rho":"\u03a1","rho":"\u03c1","rhov":"\u03f1","RightAngleBracket":"\u27e9","RightArrowBar":"\u21e5","rightarrow":"\u2192","RightArrow":"\u2192","Rightarrow":"\u21d2","RightArrowLeftArrow":"\u21c4","rightarrowtail":"\u21a3","RightCeiling":"\u2309","RightDoubleBracket":"\u27e7","RightDownTeeVector":"\u295d","RightDownVectorBar":"\u2955","RightDownVector":"\u21c2","RightFloor":"\u230b","rightharpoondown":"\u21c1","rightharpoonup":"\u21c0","rightleftarrows":"\u21c4","rightleftharpoons":"\u21cc","rightrightarrows":"\u21c9","rightsquigarrow":"\u219d","RightTeeArrow":"\u21a6","RightTee":"\u22a2","RightTeeVector":"\u295b","rightthreetimes":"\u22cc","RightTriangleBar":"\u29d0","RightTriangle":"\u22b3","RightTriangleEqual":"\u22b5","RightUpDownVector":"\u294f","RightUpTeeVector":"\u295c","RightUpVectorBar":"\u2954","RightUpVector":"\u21be","RightVectorBar":"\u2953","RightVector":"\u21c0","ring":"\u02da","risingdotseq":"\u2253","rlarr":"\u21c4","rlhar":"\u21cc","rlm":"\u200f","rmoustache":"\u23b1","rmoust":"\u23b1","rnmid":"\u2aee","roang":"\u27ed","roarr":"\u21fe","robrk":"\u27e7","ropar":"\u2986","ropf":"\ud835\udd63","Ropf":"\u211d","roplus":"\u2a2e","rotimes":"\u2a35","RoundImplies":"\u2970","rpar":")","rpargt":"\u2994","rppolint":"\u2a12","rrarr":"\u21c9","Rrightarrow":"\u21db","rsaquo":"\u203a","rscr":"\ud835\udcc7","Rscr":"\u211b","rsh":"\u21b1","Rsh":"\u21b1","rsqb":"]","rsquo":"\u2019","rsquor":"\u2019","rthree":"\u22cc","rtimes":"\u22ca","rtri":"\u25b9","rtrie":"\u22b5","rtrif":"\u25b8","rtriltri":"\u29ce","RuleDelayed":"\u29f4","ruluhar":"\u2968","rx":"\u211e","Sacute":"\u015a","sacute":"\u015b","sbquo":"\u201a","scap":"\u2ab8","Scaron":"\u0160","scaron":"\u0161","Sc":"\u2abc","sc":"\u227b","sccue":"\u227d","sce":"\u2ab0","scE":"\u2ab4","Scedil":"\u015e","scedil":"\u015f","Scirc":"\u015c","scirc":"\u015d","scnap":"\u2aba","scnE":"\u2ab6","scnsim":"\u22e9","scpolint":"\u2a13","scsim":"\u227f","Scy":"\u0421","scy":"\u0441","sdotb":"\u22a1","sdot":"\u22c5","sdote":"\u2a66","searhk":"\u2925","searr":"\u2198","seArr":"\u21d8","searrow":"\u2198","sect":"\xa7","semi":";","seswar":"\u2929","setminus":"\u2216","setmn":"\u2216","sext":"\u2736","Sfr":"\ud835\udd16","sfr":"\ud835\udd30","sfrown":"\u2322","sharp":"\u266f","SHCHcy":"\u0429","shchcy":"\u0449","SHcy":"\u0428","shcy":"\u0448","ShortDownArrow":"\u2193","ShortLeftArrow":"\u2190","shortmid":"\u2223","shortparallel":"\u2225","ShortRightArrow":"\u2192","ShortUpArrow":"\u2191","shy":"\xad","Sigma":"\u03a3","sigma":"\u03c3","sigmaf":"\u03c2","sigmav":"\u03c2","sim":"\u223c","simdot":"\u2a6a","sime":"\u2243","simeq":"\u2243","simg":"\u2a9e","simgE":"\u2aa0","siml":"\u2a9d","simlE":"\u2a9f","simne":"\u2246","simplus":"\u2a24","simrarr":"\u2972","slarr":"\u2190","SmallCircle":"\u2218","smallsetminus":"\u2216","smashp":"\u2a33","smeparsl":"\u29e4","smid":"\u2223","smile":"\u2323","smt":"\u2aaa","smte":"\u2aac","smtes":"\u2aac\ufe00","SOFTcy":"\u042c","softcy":"\u044c","solbar":"\u233f","solb":"\u29c4","sol":"/","Sopf":"\ud835\udd4a","sopf":"\ud835\udd64","spades":"\u2660","spadesuit":"\u2660","spar":"\u2225","sqcap":"\u2293","sqcaps":"\u2293\ufe00","sqcup":"\u2294","sqcups":"\u2294\ufe00","Sqrt":"\u221a","sqsub":"\u228f","sqsube":"\u2291","sqsubset":"\u228f","sqsubseteq":"\u2291","sqsup":"\u2290","sqsupe":"\u2292","sqsupset":"\u2290","sqsupseteq":"\u2292","square":"\u25a1","Square":"\u25a1","SquareIntersection":"\u2293","SquareSubset":"\u228f","SquareSubsetEqual":"\u2291","SquareSuperset":"\u2290","SquareSupersetEqual":"\u2292","SquareUnion":"\u2294","squarf":"\u25aa","squ":"\u25a1","squf":"\u25aa","srarr":"\u2192","Sscr":"\ud835\udcae","sscr":"\ud835\udcc8","ssetmn":"\u2216","ssmile":"\u2323","sstarf":"\u22c6","Star":"\u22c6","star":"\u2606","starf":"\u2605","straightepsilon":"\u03f5","straightphi":"\u03d5","strns":"\xaf","sub":"\u2282","Sub":"\u22d0","subdot":"\u2abd","subE":"\u2ac5","sube":"\u2286","subedot":"\u2ac3","submult":"\u2ac1","subnE":"\u2acb","subne":"\u228a","subplus":"\u2abf","subrarr":"\u2979","subset":"\u2282","Subset":"\u22d0","subseteq":"\u2286","subseteqq":"\u2ac5","SubsetEqual":"\u2286","subsetneq":"\u228a","subsetneqq":"\u2acb","subsim":"\u2ac7","subsub":"\u2ad5","subsup":"\u2ad3","succapprox":"\u2ab8","succ":"\u227b","succcurlyeq":"\u227d","Succeeds":"\u227b","SucceedsEqual":"\u2ab0","SucceedsSlantEqual":"\u227d","SucceedsTilde":"\u227f","succeq":"\u2ab0","succnapprox":"\u2aba","succneqq":"\u2ab6","succnsim":"\u22e9","succsim":"\u227f","SuchThat":"\u220b","sum":"\u2211","Sum":"\u2211","sung":"\u266a","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","sup":"\u2283","Sup":"\u22d1","supdot":"\u2abe","supdsub":"\u2ad8","supE":"\u2ac6","supe":"\u2287","supedot":"\u2ac4","Superset":"\u2283","SupersetEqual":"\u2287","suphsol":"\u27c9","suphsub":"\u2ad7","suplarr":"\u297b","supmult":"\u2ac2","supnE":"\u2acc","supne":"\u228b","supplus":"\u2ac0","supset":"\u2283","Supset":"\u22d1","supseteq":"\u2287","supseteqq":"\u2ac6","supsetneq":"\u228b","supsetneqq":"\u2acc","supsim":"\u2ac8","supsub":"\u2ad4","supsup":"\u2ad6","swarhk":"\u2926","swarr":"\u2199","swArr":"\u21d9","swarrow":"\u2199","swnwar":"\u292a","szlig":"\xdf","Tab":"\\t","target":"\u2316","Tau":"\u03a4","tau":"\u03c4","tbrk":"\u23b4","Tcaron":"\u0164","tcaron":"\u0165","Tcedil":"\u0162","tcedil":"\u0163","Tcy":"\u0422","tcy":"\u0442","tdot":"\u20db","telrec":"\u2315","Tfr":"\ud835\udd17","tfr":"\ud835\udd31","there4":"\u2234","therefore":"\u2234","Therefore":"\u2234","Theta":"\u0398","theta":"\u03b8","thetasym":"\u03d1","thetav":"\u03d1","thickapprox":"\u2248","thicksim":"\u223c","ThickSpace":"\u205f\u200a","ThinSpace":"\u2009","thinsp":"\u2009","thkap":"\u2248","thksim":"\u223c","THORN":"\xde","thorn":"\xfe","tilde":"\u02dc","Tilde":"\u223c","TildeEqual":"\u2243","TildeFullEqual":"\u2245","TildeTilde":"\u2248","timesbar":"\u2a31","timesb":"\u22a0","times":"\xd7","timesd":"\u2a30","tint":"\u222d","toea":"\u2928","topbot":"\u2336","topcir":"\u2af1","top":"\u22a4","Topf":"\ud835\udd4b","topf":"\ud835\udd65","topfork":"\u2ada","tosa":"\u2929","tprime":"\u2034","trade":"\u2122","TRADE":"\u2122","triangle":"\u25b5","triangledown":"\u25bf","triangleleft":"\u25c3","trianglelefteq":"\u22b4","triangleq":"\u225c","triangleright":"\u25b9","trianglerighteq":"\u22b5","tridot":"\u25ec","trie":"\u225c","triminus":"\u2a3a","TripleDot":"\u20db","triplus":"\u2a39","trisb":"\u29cd","tritime":"\u2a3b","trpezium":"\u23e2","Tscr":"\ud835\udcaf","tscr":"\ud835\udcc9","TScy":"\u0426","tscy":"\u0446","TSHcy":"\u040b","tshcy":"\u045b","Tstrok":"\u0166","tstrok":"\u0167","twixt":"\u226c","twoheadleftarrow":"\u219e","twoheadrightarrow":"\u21a0","Uacute":"\xda","uacute":"\xfa","uarr":"\u2191","Uarr":"\u219f","uArr":"\u21d1","Uarrocir":"\u2949","Ubrcy":"\u040e","ubrcy":"\u045e","Ubreve":"\u016c","ubreve":"\u016d","Ucirc":"\xdb","ucirc":"\xfb","Ucy":"\u0423","ucy":"\u0443","udarr":"\u21c5","Udblac":"\u0170","udblac":"\u0171","udhar":"\u296e","ufisht":"\u297e","Ufr":"\ud835\udd18","ufr":"\ud835\udd32","Ugrave":"\xd9","ugrave":"\xf9","uHar":"\u2963","uharl":"\u21bf","uharr":"\u21be","uhblk":"\u2580","ulcorn":"\u231c","ulcorner":"\u231c","ulcrop":"\u230f","ultri":"\u25f8","Umacr":"\u016a","umacr":"\u016b","uml":"\xa8","UnderBar":"_","UnderBrace":"\u23df","UnderBracket":"\u23b5","UnderParenthesis":"\u23dd","Union":"\u22c3","UnionPlus":"\u228e","Uogon":"\u0172","uogon":"\u0173","Uopf":"\ud835\udd4c","uopf":"\ud835\udd66","UpArrowBar":"\u2912","uparrow":"\u2191","UpArrow":"\u2191","Uparrow":"\u21d1","UpArrowDownArrow":"\u21c5","updownarrow":"\u2195","UpDownArrow":"\u2195","Updownarrow":"\u21d5","UpEquilibrium":"\u296e","upharpoonleft":"\u21bf","upharpoonright":"\u21be","uplus":"\u228e","UpperLeftArrow":"\u2196","UpperRightArrow":"\u2197","upsi":"\u03c5","Upsi":"\u03d2","upsih":"\u03d2","Upsilon":"\u03a5","upsilon":"\u03c5","UpTeeArrow":"\u21a5","UpTee":"\u22a5","upuparrows":"\u21c8","urcorn":"\u231d","urcorner":"\u231d","urcrop":"\u230e","Uring":"\u016e","uring":"\u016f","urtri":"\u25f9","Uscr":"\ud835\udcb0","uscr":"\ud835\udcca","utdot":"\u22f0","Utilde":"\u0168","utilde":"\u0169","utri":"\u25b5","utrif":"\u25b4","uuarr":"\u21c8","Uuml":"\xdc","uuml":"\xfc","uwangle":"\u29a7","vangrt":"\u299c","varepsilon":"\u03f5","varkappa":"\u03f0","varnothing":"\u2205","varphi":"\u03d5","varpi":"\u03d6","varpropto":"\u221d","varr":"\u2195","vArr":"\u21d5","varrho":"\u03f1","varsigma":"\u03c2","varsubsetneq":"\u228a\ufe00","varsubsetneqq":"\u2acb\ufe00","varsupsetneq":"\u228b\ufe00","varsupsetneqq":"\u2acc\ufe00","vartheta":"\u03d1","vartriangleleft":"\u22b2","vartriangleright":"\u22b3","vBar":"\u2ae8","Vbar":"\u2aeb","vBarv":"\u2ae9","Vcy":"\u0412","vcy":"\u0432","vdash":"\u22a2","vDash":"\u22a8","Vdash":"\u22a9","VDash":"\u22ab","Vdashl":"\u2ae6","veebar":"\u22bb","vee":"\u2228","Vee":"\u22c1","veeeq":"\u225a","vellip":"\u22ee","verbar":"|","Verbar":"\u2016","vert":"|","Vert":"\u2016","VerticalBar":"\u2223","VerticalLine":"|","VerticalSeparator":"\u2758","VerticalTilde":"\u2240","VeryThinSpace":"\u200a","Vfr":"\ud835\udd19","vfr":"\ud835\udd33","vltri":"\u22b2","vnsub":"\u2282\u20d2","vnsup":"\u2283\u20d2","Vopf":"\ud835\udd4d","vopf":"\ud835\udd67","vprop":"\u221d","vrtri":"\u22b3","Vscr":"\ud835\udcb1","vscr":"\ud835\udccb","vsubnE":"\u2acb\ufe00","vsubne":"\u228a\ufe00","vsupnE":"\u2acc\ufe00","vsupne":"\u228b\ufe00","Vvdash":"\u22aa","vzigzag":"\u299a","Wcirc":"\u0174","wcirc":"\u0175","wedbar":"\u2a5f","wedge":"\u2227","Wedge":"\u22c0","wedgeq":"\u2259","weierp":"\u2118","Wfr":"\ud835\udd1a","wfr":"\ud835\udd34","Wopf":"\ud835\udd4e","wopf":"\ud835\udd68","wp":"\u2118","wr":"\u2240","wreath":"\u2240","Wscr":"\ud835\udcb2","wscr":"\ud835\udccc","xcap":"\u22c2","xcirc":"\u25ef","xcup":"\u22c3","xdtri":"\u25bd","Xfr":"\ud835\udd1b","xfr":"\ud835\udd35","xharr":"\u27f7","xhArr":"\u27fa","Xi":"\u039e","xi":"\u03be","xlarr":"\u27f5","xlArr":"\u27f8","xmap":"\u27fc","xnis":"\u22fb","xodot":"\u2a00","Xopf":"\ud835\udd4f","xopf":"\ud835\udd69","xoplus":"\u2a01","xotime":"\u2a02","xrarr":"\u27f6","xrArr":"\u27f9","Xscr":"\ud835\udcb3","xscr":"\ud835\udccd","xsqcup":"\u2a06","xuplus":"\u2a04","xutri":"\u25b3","xvee":"\u22c1","xwedge":"\u22c0","Yacute":"\xdd","yacute":"\xfd","YAcy":"\u042f","yacy":"\u044f","Ycirc":"\u0176","ycirc":"\u0177","Ycy":"\u042b","ycy":"\u044b","yen":"\xa5","Yfr":"\ud835\udd1c","yfr":"\ud835\udd36","YIcy":"\u0407","yicy":"\u0457","Yopf":"\ud835\udd50","yopf":"\ud835\udd6a","Yscr":"\ud835\udcb4","yscr":"\ud835\udcce","YUcy":"\u042e","yucy":"\u044e","yuml":"\xff","Yuml":"\u0178","Zacute":"\u0179","zacute":"\u017a","Zcaron":"\u017d","zcaron":"\u017e","Zcy":"\u0417","zcy":"\u0437","Zdot":"\u017b","zdot":"\u017c","zeetrf":"\u2128","ZeroWidthSpace":"\u200b","Zeta":"\u0396","zeta":"\u03b6","zfr":"\ud835\udd37","Zfr":"\u2128","ZHcy":"\u0416","zhcy":"\u0436","zigrarr":"\u21dd","zopf":"\ud835\udd6b","Zopf":"\u2124","Zscr":"\ud835\udcb5","zscr":"\ud835\udccf","zwj":"\u200d","zwnj":"\u200c"}'
      );
    },
  },
]);
