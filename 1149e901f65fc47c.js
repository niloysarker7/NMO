!(function (e) {
  function t(t) {
    for (var n, i, o = t[0], s = t[1], a = 0, u = []; a < o.length; a++)
      (i = o[a]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]),
        (r[i] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    for (c && c(t); u.length; ) u.shift()();
  }
  var n = {},
    r = { 5: 0 };
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.e = function (e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function (t, i) {
          n = r[e] = [t, i];
        });
        t.push((n[2] = o));
        var s,
          a = document.createElement('script');
        (a.charset = 'utf-8'),
          (a.timeout = 120),
          i.nc && a.setAttribute('nonce', i.nc),
          (a.src = (function (e) {
            return i.p + 'mutiny-client/' + e + '.3.1.29.js';
          })(e));
        var c = new Error();
        s = function (t) {
          (a.onerror = a.onload = null), clearTimeout(u);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var i = t && ('load' === t.type ? 'missing' : t.type),
                o = t && t.target && t.target.src;
              (c.message =
                'Loading chunk ' + e + ' failed.\n(' + i + ': ' + o + ')'),
                (c.name = 'ChunkLoadError'),
                (c.type = i),
                (c.request = o),
                n[1](c);
            }
            r[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          s({ type: 'timeout', target: a });
        }, 12e4);
        (a.onerror = a.onload = s), document.head.appendChild(a);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = n),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = 'https://client.mutinycdn.com/'),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var o = (window.mutinyWpJsonp = window.mutinyWpJsonp || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var a = 0; a < o.length; a++) t(o[a]);
  var c = s;
  i((i.s = 68));
})([
  function (e, t, n) {
    'use strict';
    var r,
      i,
      o,
      s,
      a,
      c,
      u,
      l,
      d,
      h,
      f,
      p,
      g,
      m,
      v,
      y,
      b,
      w,
      k,
      S,
      E,
      C,
      O,
      _,
      T,
      j,
      x,
      I,
      A,
      M;
    n.d(t, 'u', function () {
      return r;
    }),
      n.d(t, 'h', function () {
        return i;
      }),
      n.d(t, 'n', function () {
        return o;
      }),
      n.d(t, 'B', function () {
        return s;
      }),
      n.d(t, 't', function () {
        return a;
      }),
      n.d(t, 'g', function () {
        return c;
      }),
      n.d(t, 'p', function () {
        return u;
      }),
      n.d(t, 'o', function () {
        return l;
      }),
      n.d(t, 'd', function () {
        return d;
      }),
      n.d(t, 'c', function () {
        return h;
      }),
      n.d(t, 'x', function () {
        return f;
      }),
      n.d(t, 'v', function () {
        return p;
      }),
      n.d(t, 'k', function () {
        return g;
      }),
      n.d(t, 'w', function () {
        return m;
      }),
      n.d(t, 's', function () {
        return v;
      }),
      n.d(t, 'l', function () {
        return y;
      }),
      n.d(t, 'i', function () {
        return w;
      }),
      n.d(t, 'm', function () {
        return k;
      }),
      n.d(t, 'z', function () {
        return S;
      }),
      n.d(t, 'A', function () {
        return E;
      }),
      n.d(t, 'q', function () {
        return C;
      }),
      n.d(t, 'f', function () {
        return O;
      }),
      n.d(t, 'y', function () {
        return _;
      }),
      n.d(t, 'j', function () {
        return T;
      }),
      n.d(t, 'e', function () {
        return j;
      }),
      n.d(t, 'r', function () {
        return x;
      }),
      n.d(t, 'b', function () {
        return I;
      }),
      n.d(t, 'a', function () {
        return A;
      }),
      (function (e) {
        (e.Editor = 'editor'), (e.Preview = 'preview'), (e.Live = 'live');
      })(r || (r = {})),
      (function (e) {
        (e.StateChange = 'mutiny:state-change'),
          (e.ImpressionCacheUpdate = 'mutiny:impression-cache:update'),
          (e.AssetViewerLoaded = 'mutiny:asset-viewer:loaded'),
          (e.AssetViewerOpened = 'mutiny:asset-viewer:opened'),
          (e.WindowExperienceImpression = 'mutiny:experience-impression');
      })(i || (i = {})),
      (function (e) {
        (e.Mutiny = 'mutiny'),
          (e.Window = 'window'),
          (e.Segment = 'segment'),
          (e.Amplitude = 'amplitude'),
          (e.Cookie = 'cookie'),
          (e.Drawbridge = 'drawbridge'),
          (e.GoogleAnalytics = 'google_analytics'),
          (e.Marketo = 'marketo'),
          (e.Hubspot = 'hubspot');
      })(o || (o = {})),
      (function (e) {
        (e.Marketo = 'marketo'), (e.Hubspot = 'hubspot');
      })(s || (s = {})),
      (function (e) {
        (e.Personalized = 'personalized'), (e.Control = 'control');
      })(a || (a = {})),
      (function (e) {
        (e.Data = 'data'), (e.Conversion = 'conversion');
      })(c || (c = {})),
      (function (e) {
        (e.Increment = 'increment'), (e.Timing = 'timing'), (e.Event = 'event');
      })(u || (u = {})),
      (function (e) {
        (e.Change = 'change'),
          (e.Click = 'click'),
          (e.Submit = 'submit'),
          (e.PageView = 'page_view'),
          (e.Calendly = 'calendly'),
          (e.Drift = 'drift'),
          (e.Hubspot = 'hubspot');
      })(l || (l = {})),
      (function (e) {
        (e.Equal = 'equal'),
          (e.NotEqual = 'not_equal'),
          (e.UrlEqual = 'url_equal'),
          (e.UrlNotEqual = 'url_not_equal'),
          (e.GreaterThan = 'greater_than'),
          (e.GreaterThanOrEqual = 'greater_than_or_equal'),
          (e.LessThan = 'less_than'),
          (e.LessThanOrEqual = 'less_than_or_equal'),
          (e.Includes = 'includes'),
          (e.NotIncludes = 'not_includes'),
          (e.StartsWith = 'starts_with'),
          (e.EndsWith = 'ends_with'),
          (e.MatchesRegex = 'matches_regex'),
          (e.UrlHostEqual = 'url_host_equal'),
          (e.UrlHostNotEqual = 'url_host_not_equal'),
          (e.UrlPathEqual = 'url_path_equal'),
          (e.UrlPathNotEqual = 'url_path_not_equal');
      })(d || (d = {})),
      (function (e) {
        e.Count = '_count';
      })(h || (h = {})),
      (function (e) {
        (e.FAB = 'fab'),
          (e.Modal = 'modal'),
          (e.TopBar = 'top_bar'),
          (e.ExitIntentModal = 'exit_intent_modal'),
          (e.ContentPlaylist = 'content_playlist');
      })(f || (f = {})),
      (function (e) {
        (e.MultipleChoice = 'multiple_choice'), (e.Form = 'form');
      })(p || (p = {})),
      (function (e) {
        (e.QuestionnaireClicked = 'questionnaire_clicked'),
          (e.QuestionnaireDismissed = 'questionnaire_dismissed'),
          (e.QuestionnaireAnswered = 'questionnaire_answered'),
          (e.QuestionnaireFormSubmitted = 'questionnaire_form_submitted'),
          (e.QuestionnaireCtaClicked = 'questionnaire_cta_clicked'),
          (e.ContentPlaylistAssetViewed = 'content_playlist_asset_viewed'),
          (e.ContentPlaylistAssetConsumed = 'content_playlist_asset_consumed');
      })(g || (g = {})),
      (function (e) {
        (e.Questionnaire = 'questionnaire'), (e.Control = 'control');
      })(m || (m = {})),
      (function (e) {
        (e.Data = 'data'),
          (e.Link = 'link'),
          (e.Dismiss = 'dismiss'),
          (e.Input = 'input');
      })(v || (v = {})),
      (function (e) {
        (e.Text = 'text'), (e.Email = 'email');
      })(y || (y = {})),
      (function (e) {
        (e.Modal = 'modal'), (e.Page = 'page');
      })(b || (b = {})),
      (function (e) {
        (e.Redirect = 'redirect'),
          (e.Render = 'render'),
          (e.Questionnaire = 'questionnaire');
      })(w || (w = {})),
      (function (e) {
        (e.Before = 'before'),
          (e.After = 'after'),
          (e.FirstChild = 'first_child'),
          (e.LastChild = 'last_child');
      })(k || (k = {})),
      (function (e) {
        (e.OneOff = 'one_off'), (e.Batch = 'batch');
      })(S || (S = {})),
      (function (e) {
        (e.Mouseout = 'mouseout'),
          (e.TimeOnPage = 'time_on_page'),
          (e.Scroll = 'scroll');
      })(E || (E = {})),
      (function (e) {
        (e.Compact = 'compact'),
          (e.Icon = 'icon'),
          (e.Hero = 'hero'),
          (e.None = 'none');
      })(C || (C = {})),
      (function (e) {
        (e.Top = 'top'), (e.Bottom = 'bottom');
      })(O || (O = {})),
      (function (e) {
        (e.Light = 'light'), (e.Dark = 'dark');
      })(_ || (_ = {})),
      (function (e) {
        (e.Colfax = 'colfax'),
          (e.Futura = 'furtura'),
          (e.SystemDefault = 'system_default');
      })(T || (T = {})),
      (function (e) {
        (e.SameTab = 'same_tab'), (e.NewTab = 'new_tab');
      })(j || (j = {})),
      (function (e) {
        (e.Back = 'back'), (e.Forward = 'forward');
      })(x || (x = {})),
      (function (e) {
        (e.Default = 'default'), (e.AssetViewer = 'asset_viewer');
      })(I || (I = {})),
      (function (e) {
        (e.Primary = 'primary'),
          (e.Secondary = 'secondary'),
          (e.Tertiary = 'tertiary'),
          (e.Transparent = 'transparent'),
          (e.TransparentSecondary = 'transparent_secondary'),
          (e.Translucent = 'translucent');
      })(A || (A = {})),
      (function (e) {
        (e.Modal = 'modal'),
          (e.Banner = 'banner'),
          (e.Sidepop = 'sidepop'),
          (e.Brand = 'brand');
      })(M || (M = {}));
  },
  function (e, t, n) {
    'use strict';
    var r = n(13);
    const i = 0,
      o = 1,
      s = 2,
      a = 3,
      c = 4;
    t.a = class {
      constructor(e) {
        (this.prefix = e), this.logger();
      }
      debug(...e) {
        this.logger().then((t) => {
          this.logLevel() > c && t.extend('debug')(...e);
        });
      }
      log(...e) {
        this.logger().then((t) => {
          this.logLevel() > a && t.extend('log')(...e);
        });
      }
      info(...e) {
        this.logger().then((t) => {
          this.logLevel() > s && t.extend('info')(...e);
        });
      }
      warn(...e) {
        this.logger().then((t) => {
          this.logLevel() > o && t.extend('warn')(...e);
        });
      }
      error(...e) {
        this.logger().then((t) => {
          this.logLevel() > i && t.extend('error')(...e);
        });
      }
      logger() {
        return this._logger
          ? Promise.resolve(this._logger)
          : Promise.resolve()
              .then(n.t.bind(null, 45, 7))
              .then((e) => e.default)
              .then((e) => (this._logger = e('mutiny:' + this.prefix)));
      }
      logLevel() {
        const e = Object(r.a)().getItem('debugLevel');
        return e ? Number(e) : 4;
      }
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return h;
    }),
      n.d(t, 'd', function () {
        return f;
      }),
      n.d(t, 'c', function () {
        return p;
      });
    var r = n(50),
      i = n.n(r),
      o = n(18),
      s = n.n(o),
      a = n(51),
      c = n.n(a),
      u = n(1);
    const l = i()({
      apiKey: 'caaf0e94c00c5dc6e1a1f1738570878d',
      autoCaptureSessions: !1,
      autoNotify: !1,
      consoleBreadcrumbsEnabled: !1,
      logger: null,
    });
    (l.metaData = { mutinyClient: { version: c.a } }), (t.b = l);
    const d = new u.a('error-handler'),
      h = (e) => (l.metaData = s()(l.metaData, e)),
      f =
        (e) =>
        (...t) =>
          p(() => e(...t));
    function p(e) {
      try {
        return e();
      } catch (e) {
        throw (d.error('Error thrown: ', e), l.notify(e), new Error());
      }
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'j', function () {
      return g;
    }),
      n.d(t, 'i', function () {
        return m;
      }),
      n.d(t, 'a', function () {
        return v;
      }),
      n.d(t, 'b', function () {
        return y;
      }),
      n.d(t, 'd', function () {
        return b;
      }),
      n.d(t, 'c', function () {
        return w;
      }),
      n.d(t, 'f', function () {
        return k;
      }),
      n.d(t, 'g', function () {
        return S;
      }),
      n.d(t, 'e', function () {
        return C;
      }),
      n.d(t, 'h', function () {
        return O;
      });
    var r = n(18),
      i = n.n(r),
      o = n(41),
      s = n.n(o),
      a = n(32),
      c = n(8),
      u = n(6),
      l = n(11),
      d = n(4),
      h = n(0),
      f = n(13),
      p = n(37);
    const g = '_mv',
      m = '_ms',
      v = '_mcm',
      y = 'mutiny_experience_override',
      b = 'mutiny_variation_override',
      w = 'mutiny_highlight',
      k = 'personalize.override',
      S = 'user.personalize_weight';
    var E;
    !(function (e) {
      (e.Impression = 'impression'),
        (e.QuestionnaireImpression = 'questionnaireImpression');
    })(E || (E = {}));
    class C {
      constructor(e) {
        this.data = e;
      }
      get(e) {
        return Object(l.c)(this.data, e);
      }
    }
    class O {
      constructor(e, t) {
        this.events = t;
        const n = {
          device_type: Object(a.a)(),
          referrer: document.referrer,
          user_agent: navigator.userAgent,
        };
        (this.data = i()({ browser: n }, e)), (this.listeners = []);
      }
      getWriteableStore() {
        return new _(this.data, this.listeners, this.events);
      }
      get(e) {
        const t = Object(l.c)(this.data, e);
        return null === t
          ? Object(p.a)().getItem(e) || Object(f.a)().getItem(e)
          : t;
      }
      onChange(e) {
        this.listeners.push(e);
      }
      merge(e) {
        return (this.data = i()(this.data, e)), this;
      }
      toJSON() {
        return JSON.parse(JSON.stringify(this.data));
      }
    }
    class _ extends O {
      constructor(e, t = [], n) {
        super(e, n),
          (this.events = n),
          (this.listeners = t),
          this.events.on(h.h.ImpressionCacheUpdate, ({ detail: e }) => {
            e.impression &&
              this.updateImpressionCache(e.impression, E.Impression),
              e.questionnaireImpression &&
                this.updateImpressionCache(
                  e.questionnaireImpression,
                  E.QuestionnaireImpression
                ),
              e.sessionNumber &&
                this.setBulk({
                  person: { behavior: { session_number: e.sessionNumber } },
                });
          });
      }
      setBulk(e) {
        const t = i()(
          Object(l.c)(this.data, 'person.behavior') || {},
          Object(l.c)(e, 'person.behavior') || {},
          { arrayMerge: this.behavioralArrayMerge }
        );
        this.data = i()(
          i()(this.data, e),
          { person: { behavior: t } },
          { arrayMerge: (e, t) => t }
        );
      }
      set(e, t, { localStorage: n = !0 } = {}) {
        const r = e.split('.'),
          i = Object.assign({}, this.data);
        return (
          r.reduce(
            (e, n, i) => (
              i === r.length - 1 ? (e[n] = t) : void 0 === e[n] && (e[n] = {}),
              e[n]
            ),
            i
          ),
          (this.data = i),
          n && Object(f.a)().setItem(e, t),
          this.triggerListeners(e, t),
          this
        );
      }
      getSessionToken() {
        const e = this.get('query.' + m);
        if (null == e ? void 0 : e.length) return e;
        const t = Object(u.d)(u.b) || s()();
        return this.setSessionToken(t), t;
      }
      isNewUser() {
        const e =
          Object(u.e)(u.c) || Object(u.e)('_immortal|mutiny.user.token');
        return !(this.get('query.' + g) || (e && 'null' !== e));
      }
      getUserToken() {
        const e = this.get('query.' + g),
          t = Object(u.e)(u.c) || Object(u.e)('_immortal|mutiny.user.token');
        if (e) return this.setUserToken(e), e;
        if (this.isNewUser()) {
          const e = s()();
          return this.setUserToken(e), e;
        }
        return t;
      }
      setSessionToken(e) {
        Object(d.c)() || Object(u.f)(u.b, e, 18e5);
      }
      setUserToken(e) {
        if (!Object(d.c)()) return Object(u.g)(u.c, e);
      }
      getClientMode() {
        var e;
        switch (
          null === (e = this.get('query.' + v)) || void 0 === e
            ? void 0
            : e.toLowerCase()
        ) {
          case h.b.AssetViewer:
            return h.b.AssetViewer;
          default:
            return h.b.Default;
        }
      }
      behavioralArrayMerge(e, t) {
        const n = [],
          r = [];
        return (
          t.forEach((e) => {
            e.token && e.token.length > 0 ? n.push(e) : r.push(e);
          }),
          e.forEach((e) => {
            e.token && e.token.length > 0 ? n.push(e) : r.push(e);
          }),
          [...r, ...Object(c.e)(n, (e) => e.token)]
        );
      }
      triggerListeners(e, t) {
        this.listeners.forEach((n) => n(e, t));
      }
      updateImpressionCache(e, t) {
        const [n, r] = this.impressionCacheAttributeKey(t),
          i = this.get(n) || [],
          o = [e, ...(Array.isArray(i) ? i : [])].reduce(
            (e, t) => (
              e[t.token]
                ? (e[t.token] = Object.assign(Object.assign({}, e[t.token]), t))
                : (e[t.token] = t),
              e
            ),
            {}
          ),
          s = Object(l.e)(o);
        this.setBulk({ person: { behavior: { [r]: s } } });
      }
      impressionCacheAttributeKey(e) {
        switch (e) {
          case E.Impression:
            return ['person.behavior.visited_url', 'visited_url'];
          case E.QuestionnaireImpression:
            return [
              'person.behavior.viewed_questionnaires',
              'viewed_questionnaires',
            ];
        }
      }
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    }),
      n.d(t, 'd', function () {
        return o;
      }),
      n.d(t, 'f', function () {
        return a;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'b', function () {
        return u;
      }),
      n.d(t, 'c', function () {
        return l;
      });
    var r = n(15);
    const i = ['mutiny.defaultOptOut', 'mutiny.optOut', 'mutiny.optIn'];
    function o() {
      const e = (e) => Boolean(r.a.getCookie(e));
      return (
        e('mutiny.optOut') || (e('mutiny.defaultOptOut') && !e('mutiny.optIn'))
      );
    }
    const s = (() => {
      const e = new Date();
      return e.setTime(e.getTime() + 943488e5), e;
    })();
    function a() {
      return (
        r.a.setCookie('mutiny.optIn', '', s),
        r.a.setCookie('mutiny.optOut', 'true', s)
      );
    }
    function c() {
      return (
        r.a.setCookie('mutiny.optOut', '', s),
        r.a.setCookie('mutiny.optIn', 'true', s)
      );
    }
    function u() {
      return r.a.setCookie('mutiny.defaultOptOut', 'true', s);
    }
    function l() {
      if (o()) return !0;
      const e =
        void 0 !== navigator.doNotTrack
          ? navigator.doNotTrack
          : void 0 !== window.doNotTrack
          ? window.doNotTrack
          : void 0 !== navigator.msDoNotTrack
          ? navigator.msDoNotTrack
          : null;
      return (
        0 !== parseInt(null != e ? e : '', 10) &&
        'no' !== e &&
        (1 === parseInt(null != e ? e : '', 10) || 'yes' === e)
      );
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'g', function () {
      return c;
    }),
      n.d(t, 'j', function () {
        return u;
      }),
      n.d(t, 'c', function () {
        return l;
      }),
      n.d(t, 'f', function () {
        return d;
      }),
      n.d(t, 'd', function () {
        return h;
      }),
      n.d(t, 'e', function () {
        return f;
      }),
      n.d(t, 'a', function () {
        return p;
      }),
      n.d(t, 'b', function () {
        return g;
      }),
      n.d(t, 'h', function () {
        return m;
      }),
      n.d(t, 'i', function () {
        return v;
      });
    var r = n(2),
      i = n(16),
      o = n(3),
      s = n(0),
      a = n(11);
    const c = (e) => {
        if ('string' != typeof e || 0 === e.length)
          return {
            hash: '',
            hostname: '',
            pathname: '',
            url_host: '',
            url_path: '',
          };
        const t = document.createElement('a');
        return (
          (t.href = e.startsWith('http') ? e : 'https://' + e),
          {
            hash: t.hash,
            hostname: t.hostname,
            pathname: t.pathname,
            url_host: t.hostname,
            url_path: t.pathname,
          }
        );
      },
      u = (e, t) => Boolean(d(c(e), c(t)));
    function l(e, t) {
      const n = (function (e) {
        if (e === s.u.Editor || e === s.u.Preview) {
          const e = m(window.location.search).url,
            t = document.createElement('a');
          return (t.href = e || window.location), t;
        }
        return window.location;
      })(t);
      return e.filter((e) => d(e, n));
    }
    function d(e, t) {
      const n = t.hostname.toLowerCase(),
        s = t.pathname.toLowerCase();
      if (
        (function (e) {
          const t = e;
          return void 0 !== t.url_condition && null !== t.url_condition;
        })(e)
      )
        return Object(i.b)(
          e.url_condition,
          new o.e({ url: t.toString(), url_host: n, url_path: s })
        );
      if (
        (function (e) {
          const t = e;
          return (
            void 0 !== t.url_host &&
            null !== t.url_host &&
            void 0 !== t.url_path &&
            null !== t.url_path
          );
        })(e)
      ) {
        const t = e.url_host.toLowerCase(),
          r = e.url_path.toLowerCase(),
          i = h(n, t),
          o = f(r, s);
        return i && o;
      }
      return r.b.notify('Invalid URL object', e), !1;
    }
    function h(e, t) {
      const n = e.toLowerCase(),
        r = ((i = n),
        i.substring(
          i.lastIndexOf('.', i.lastIndexOf('.') - 1) + 1
        )).toLowerCase();
      var i;
      const o = 'www.' + r,
        s = t.toLowerCase();
      return n === o || n === r ? s === o || s === r : n === s;
    }
    function f(e, t) {
      return e.replace(/\/$/, '') === t.replace(/\/$/, '');
    }
    function p(e, t, n) {
      const r = `${t}=${n}`;
      return e.includes(t + '=')
        ? e.replace(new RegExp(t + '=[^&]*'), r)
        : e.includes('?')
        ? `${e}&${r}`
        : `${e}?${r}`;
    }
    function g(e, t) {
      return Object(a.d)(t).reduce(
        (e, [t, n]) => (null != n ? p(e, t, n) : e),
        e
      );
    }
    function m(e) {
      return e
        .replace('?', '')
        .split('&')
        .reduce((e, t) => {
          const [n, r] = t.split('='),
            i = n.split('.');
          return (
            i.reduce(
              (e, t, n) =>
                (function (e, t) {
                  return (
                    '__proto__' === t ||
                    ((function (e, t) {
                      try {
                        return t in e;
                      } catch (e) {
                        return !1;
                      }
                    })(e, t) &&
                      !(
                        Object.hasOwnProperty.call(e, t) &&
                        Object.propertyIsEnumerable.call(e, t)
                      ))
                  );
                })(e, t)
                  ? {}
                  : (n === i.length - 1
                      ? (e[t] = 'string' == typeof r ? v(r) : r || '')
                      : (e[t] = e[t] || {}),
                    e[t]),
              e
            ),
            e
          );
        }, {});
    }
    function v(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, '%20'));
      } catch (t) {
        if (t instanceof URIError) return e;
        throw t;
      }
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return s;
    }),
      n.d(t, 'c', function () {
        return a;
      }),
      n.d(t, 'b', function () {
        return c;
      }),
      n.d(t, 'g', function () {
        return h;
      }),
      n.d(t, 'e', function () {
        return f;
      }),
      n.d(t, 'f', function () {
        return p;
      }),
      n.d(t, 'd', function () {
        return g;
      });
    var r = n(15),
      i = n(13),
      o = n(4);
    const s = 'mutiny.user.session_number',
      a = 'mutiny.user.token',
      c = 'mutiny.user.session',
      { getCookie: u, setCookie: l, isCookieSet: d } = r.a,
      h = (e, t, n = !1) => {
        if (Object(o.d)() && !o.a.includes(e)) return;
        if (n || !d(e)) {
          const n = new Date();
          n.setTime(n.getTime() + 943488e5), l(e, t, n);
        }
        Object(i.a)().setItem(e, t);
      },
      f = (e) => {
        const t = u(e);
        if (t) return t;
        {
          const t = Object(i.a)().getItem(e);
          return t && h(e, t), t;
        }
      },
      p = (e, t, n) => {
        if (Object(o.d)() && !o.a.includes(e)) return;
        const i = new Date();
        i.setTime(i.getTime() + n);
        try {
          return r.a.setCookie(e, t, i), !0;
        } catch (e) {
          return !1;
        }
      },
      g = (e) => u(e);
  },
  function (e, t, n) {
    'use strict';
    var r = n(17);
    t.a = new (class {
      constructor() {
        (this.elementRegistry = new WeakMap()),
          (this.elementAdditionRegistry = new WeakMap()),
          (this.registeredPersonalizations = new Set());
      }
      getPersonalizationForElement(e) {
        return this.elementRegistry.get(e);
      }
      getAdditionForElement(e, t) {
        var n;
        return null === (n = this.elementAdditionRegistry.get(e)) ||
          void 0 === n
          ? void 0
          : n.get(t);
      }
      getContainingPersonalizationForElement(e) {
        let t = e,
          n = 0;
        for (; t !== document.body; ) {
          if ((n++, n > 1e3)) return null;
          const e = this.elementRegistry.get(t);
          if (e) return e;
          if (!t.parentElement) return null;
          t = t.parentElement;
        }
        return null;
      }
      getPersonaizationForNode(e) {
        let t = e,
          n = 0;
        for (; t !== document.body; ) {
          if ((n++, n > 1e3)) return null;
          if (
            t instanceof Element &&
            Object(r.c)(t) &&
            this.registeredPersonalizations.has(t)
          )
            return t;
          if (!t.parentElement) return null;
          t = t.parentElement;
        }
        return null;
      }
      getOriginalElement(e) {
        var t;
        const n = this.getPersonaizationForNode(e);
        if (n)
          return null === (t = n.element) || void 0 === t
            ? void 0
            : t.cloneToOriginal.get(e);
      }
      getClonedElement(e) {
        var t;
        const n = this.getContainingPersonalizationForElement(e);
        if (n)
          return null === (t = n.element) || void 0 === t
            ? void 0
            : t.originalToClone.get(e);
      }
      getPersonalizations() {
        return Array.from(this.registeredPersonalizations.values());
      }
      registerPersonalization(e, t) {
        var n;
        const { record: r } = t;
        'addition' === (null == r ? void 0 : r.personalization_type)
          ? (this.elementAdditionRegistry.has(e) ||
              this.elementAdditionRegistry.set(e, new Map()),
            null === (n = this.elementAdditionRegistry.get(e)) ||
              void 0 === n ||
              n.set(r.id, t))
          : this.elementRegistry.set(e, t),
          this.registeredPersonalizations.add(t);
      }
      unregisterPersonalization(e) {
        var t, n;
        e.originalElement &&
          ('addition' ===
          (null === (t = e.record) || void 0 === t
            ? void 0
            : t.personalization_type)
            ? null ===
                (n = this.elementAdditionRegistry.get(e.originalElement)) ||
              void 0 === n ||
              n.delete(e.record.id)
            : this.elementRegistry.get(e.originalElement) === e &&
              this.elementRegistry.delete(e.originalElement)),
          this.registeredPersonalizations.delete(e);
      }
    })();
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return r;
    }),
      n.d(t, 'e', function () {
        return i;
      }),
      n.d(t, 'b', function () {
        return o;
      }),
      n.d(t, 'a', function () {
        return s;
      }),
      n.d(t, 'd', function () {
        return c;
      });
    const r = (e) => e,
      i = (e, t) => {
        const n = new Set();
        return e.filter((e) => {
          const r = t(e);
          return !n.has(r) && (n.add(r), !0);
        });
      };
    function o(e, t = r) {
      for (const n of e) if (t(n)) return !0;
      return !1;
    }
    function s(e, t = r) {
      for (const n of e) if (!t(n)) return !1;
      return !0;
    }
    function a(e, t, n) {
      return n.indexOf(e) === t;
    }
    function c(e) {
      return e.filter(a);
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return w;
    });
    var r = n(0),
      i = n(2),
      o = n(1),
      s = n(8);
    class a {
      constructor() {
        (this.queue = []), (this.logger = new o.a('function-queue'));
      }
      enqueue(e) {
        this.logger.info('Enqueuing function queue item'), this.queue.push(e);
      }
      flushAsync() {
        setTimeout(() => this.flush(), 0);
      }
      flush() {
        const e = [...this.queue];
        (this.queue = []),
          e.forEach((e) => {
            this.logger.info('Flushing function queue item'), Object(i.c)(e);
          });
      }
    }
    class c {
      constructor(e, t = new a()) {
        (this.isReady = e),
          (this.queue = t),
          (this.retryFlushInterval = 250),
          (this.maxFlushRetries = 10);
      }
      enqueue(e) {
        this.queue.enqueue(e), this.flush();
      }
      flush(e = 1) {
        this.isReady()
          ? this.queue.flush()
          : e < this.maxFlushRetries &&
            (clearTimeout(this.timeoutHandle),
            (this.timeoutHandle = setTimeout(() => {
              this.flush(e + 1);
            }, this.retryFlushInterval)));
      }
      flushAsync() {
        this.flush();
      }
    }
    const u = '[Mutiny]';
    class l {
      constructor(e, t, n, r) {
        (this.visitorToken = e),
          (this.userDataStore = n),
          (this.config = r),
          (this.logger = new o.a('amplitude-adapter')),
          (this.queue = new c(() => void 0 !== this.getAmplitude()));
      }
      page() {}
      identify() {
        this.queue.enqueue(() => {
          const e = this.getAmplitude(),
            { Identify: t } = window.amplitude,
            n = new t().set(u + ' visitor_id', this.visitorToken);
          this.logger.info('Calling `identify`'),
            e.identify(
              this.config.exposed_user_data_attributes.reduce(
                (e, t) => e.set(`${u} ${t}`, this.userDataStore.get(t)),
                n
              )
            );
        });
      }
      track(e, t) {
        this.queue.enqueue(() => {
          switch (e) {
            case w.ExperienceImpression:
              return this.trackImpression(t);
            case w.Questionnaire:
              return this.trackQuestionnaireImpression(t);
            case w.QuestionnaireResponse:
              return this.trackQuestionnaireResponseSubmission(t);
            case w.Event:
              return this.trackEvent(t);
            default:
              return;
          }
        });
      }
      trackEvent(e) {
        switch (e.eventType) {
          case r.k.QuestionnaireFormSubmitted:
            return this.trackQuestionnaireFormSubmission(e);
        }
      }
      trackImpression({
        experience: e,
        impressionType: t,
        audienceSegment: n,
      }) {
        if (n && (t === r.t.Personalized || t === r.t.Control)) {
          const i = `${e.description}_${n.name}`,
            o = this.getAmplitude(),
            { Identify: s } = window.amplitude;
          return (
            this.logger.info('Calling `amplitude.identify`'),
            o.identify(
              new s().set(`${u} ${i}`, t).set(u + ' last experience', i)
            ),
            this.logger.info('Calling `amplitude.logEvent`'),
            o.logEvent(u + ' Experience Viewed', {
              audienceSegment: n && n.name,
              experience: e && e.description,
              personalized: t === r.t.Personalized,
            })
          );
        }
      }
      trackQuestionnaireImpression({ questionnaire: e, impressionType: t }) {
        const n = this.getAmplitude();
        return (
          this.logger.info('Calling `amplitude.logEvent`'),
          n.logEvent(u + ' Questionnaire Viewed', {
            questionnaire: e.key,
            shown: t === r.w.Questionnaire,
          })
        );
      }
      trackQuestionnaireResponseSubmission({ answers: e, questionnaire: t }) {
        const n = this.getAmplitude(),
          r = e
            ? e.reduce(
                (e, { key: t, value: n }) =>
                  Object.assign(Object.assign({}, e), { [t]: n }),
                {}
              )
            : {};
        return (
          this.logger.info('Calling `amplitude.logEvent`'),
          n.logEvent(
            u + ' Questionnaire Completed',
            Object.assign(Object.assign({}, r), { questionnaire: t.key })
          )
        );
      }
      trackQuestionnaireFormSubmission({
        metadata: { email: e, questionnaire_key: t },
      }) {
        const n = this.getAmplitude();
        return (
          this.logger.info('Calling `amplitude.logEvent`'),
          n.logEvent(u + ' Questionnaire Completed', {
            email: e,
            questionnaire: t,
          })
        );
      }
      getAmplitude() {
        if (window.amplitude) {
          if ('a8750e5a67bafbcd' === this.config.api_key) {
            const e = window.location.pathname.startsWith('/blog');
            return window.amplitude.getInstance(
              e ? 'blog_2.0' : 'corp_site_2.0'
            );
          }
          return window.amplitude.getInstance();
        }
      }
    }
    var d = n(6);
    var h = class {
      constructor(e, t, n, r, i) {
        (this.apiClient = i), (this.logger = new o.a('hubspot-adapter'));
      }
      identify() {
        this.logger.info('Calling `identify`');
        const e = Object(d.e)('hubspotutk');
        if (e)
          return this.apiClient.trackVisitorIdentification({
            identificationType: r.B.Hubspot,
            value: e,
          });
      }
      page() {}
      track(e, t) {}
    };
    var f = class {
        constructor(e, t, n, r, i) {
          (this.apiClient = i), (this.logger = new o.a('marketo-adapter'));
        }
        identify() {
          this.logger.info('Calling `identify`');
          const e = Object(d.e)('_mkto_trk');
          if (e)
            return this.apiClient.trackVisitorIdentification({
              identificationType: r.B.Marketo,
              value: e,
            });
        }
        page() {}
        track(e, t) {}
      },
      p = n(26);
    var g = class {
        constructor(e, t, n, r, i) {
          (this.sessionToken = t),
            (this.store = n),
            (this.config = r),
            (this.apiClient = i);
        }
        identify() {}
        page() {
          return this.apiClient.trackImpression(this.sessionToken, {
            client_iteration: this.config.client_iteration,
            client_published_at: this.config.published_at,
            user_data_failed: Boolean(this.store.get(p.a)),
            user_data_generated_at: this.store.get('generated_at'),
            user_data_ip_address: this.store.get('user.ip_address'),
            user_data_visitor_token: this.store.get('user.token'),
          });
        }
        track(e, t) {
          switch (e) {
            case w.Questionnaire:
              return this.apiClient.trackQuestionnaireImpression(t);
            case w.QuestionnaireResponse:
              return this.apiClient.trackQuestionnaireResponse(t);
            case w.Conversion:
              return this.apiClient.trackConversion(t);
            case w.Event:
              return this.apiClient.trackEvent(t);
            case w.ExperienceImpression:
              const e = t;
              return this.apiClient.trackExperienceImpression(
                Object.assign(Object.assign({}, e), {
                  selfOptimizingEventId: this.store.get(
                    `web_experience_variation.${
                      e.experience && e.experience.id
                    }.event_id`
                  ),
                })
              );
            case w.Time:
              return this.apiClient.trackTime(t);
            case w.Metric:
              return this.apiClient.trackMetric(t);
          }
        }
      },
      m = n(14);
    class v {
      constructor(e, t, n, r, i) {
        (this.visitorToken = e),
          (this.config = r),
          (this.apiClient = i),
          (this.logger = new o.a('segment-adapter')),
          (this.queue = new c(() => {
            var e;
            return Boolean(
              null === (e = window.analytics) || void 0 === e ? void 0 : e.ready
            );
          }));
      }
      identify() {
        this.queue.enqueue(() => {
          window.analytics.ready(() => {
            if (this.checkAnalyticsValid()) {
              const e = window.analytics.user().id(),
                t = window.analytics.user().anonymousId();
              this.logger.info('Calling `segment.identify`'),
                window.analytics.identify({
                  mutinyVisitorId: this.visitorToken,
                }),
                this.apiClient.segmentIdentify(e, t);
            }
          });
        });
      }
      page() {}
      track(e, t) {
        this.config.write_to_segment &&
          this.queue.enqueue(() => {
            switch (e) {
              case w.ExperienceImpression:
                return this.trackImpression(t);
              case w.Questionnaire:
                return this.trackQuestionnaireImpression(t);
              case w.QuestionnaireResponse:
                return this.trackQuestionnaireResponseSubmission(t);
              case w.Event:
                return this.trackEvent(t);
              default:
                return;
            }
          });
      }
      trackEvent(e) {
        switch (e.eventType) {
          case r.k.QuestionnaireFormSubmitted:
            return this.trackQuestionnaireFormSubmission(e);
        }
      }
      trackImpression({
        impressionType: e,
        audienceSegment: t,
        experience: n,
      }) {
        ((t && e === r.t.Personalized) || e === r.t.Control) &&
          window.analytics.ready(() => {
            var i;
            this.checkAnalyticsValid() &&
              t &&
              (this.logger.info('Calling `segment.track`'),
              window.analytics.track('Mutiny Experience Viewed', {
                audienceSegment: t.name,
                experience: n && (n.description || Object(m.b)(t.id, n.id)),
                personalized: e === r.t.Personalized,
                variation:
                  e === r.t.Personalized
                    ? null !== (i = null == n ? void 0 : n.variation_name) &&
                      void 0 !== i
                      ? i
                      : ''
                    : r.t.Control,
              }));
          });
      }
      trackQuestionnaireImpression({ questionnaire: e, impressionType: t }) {
        window.analytics.ready(() => {
          this.checkAnalyticsValid() &&
            (this.logger.info('Calling `segment.track`'),
            window.analytics.track('Mutiny Questionnaire Viewed', {
              questionnaire: e.key,
              shown: t === r.w.Questionnaire,
            }));
        });
      }
      trackQuestionnaireResponseSubmission({ answers: e, questionnaire: t }) {
        const n = e
          ? e.reduce(
              (e, { key: t, value: n }) =>
                Object.assign(Object.assign({}, e), { [t]: n }),
              {}
            )
          : {};
        window.analytics.ready(() => {
          this.checkAnalyticsValid() &&
            (this.logger.info('Calling `segment.track`'),
            window.analytics.track(
              'Mutiny Questionnaire Completed',
              Object.assign(Object.assign({}, n), { questionnaire: t.key })
            ));
        });
      }
      trackQuestionnaireFormSubmission({
        metadata: { email: e, questionnaire_key: t },
      }) {
        window.analytics.ready(() => {
          this.checkAnalyticsValid() &&
            (this.logger.info('Calling `segment.track`'),
            window.analytics.track('Mutiny Questionnaire Completed', {
              email: e,
              questionnaire: t,
            }));
        });
      }
      checkAnalyticsValid() {
        var e, t, n;
        return (
          null === (e = window.analytics) || void 0 === e ? void 0 : e.user
        )
          ? ((null === (t = window.analytics) || void 0 === t
              ? void 0
              : t.identify) &&
              !!(null === (n = window.analytics) || void 0 === n
                ? void 0
                : n.track)) ||
              (this.apiClient.trackMetric({
                description: `No identify function (${this.config.company_slug}, ${this.visitorToken})`,
                metricKey: 'Unexpected window.analytics object for Segment',
                metricType: r.p.Event,
              }),
              !1)
          : (this.apiClient.trackMetric({
              description: `No user function (${this.config.company_slug}, ${this.visitorToken})`,
              metricKey: 'Unexpected window.analytics object for Segment',
              metricType: r.p.Event,
            }),
            !1);
      }
    }
    var y = function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    };
    var b = class {
      constructor(e, t, n, r, i, o) {
        (this.visitorToken = e),
          (this.userDataStore = n),
          (this.clientMode = o);
      }
      identify() {
        const e = { visitorToken: this.visitorToken };
        window.mutinyData = e;
        const t = this.userDataStore.toJSON(),
          { user: n } = t,
          r = y(t, ['user']);
        (window.mutiny.visitor = { data: r, token: this.visitorToken }),
          (window.mutiny.experiences = []),
          (window.mutiny.clientMode = this.clientMode);
      }
      page() {
        window.mutiny.experiences = [];
      }
      track(e, t) {
        switch (e) {
          case w.ExperienceImpression:
            const { impressionType: e, audienceSegment: n, experience: i } = t;
            if (n) {
              const t = {
                audienceSegment: n && n.name,
                experienceName: i && i.description,
                impressionType: e,
                personalized: e === r.t.Personalized,
                visitorToken: this.visitorToken,
              };
              if (((window.mutinyData = t), i)) {
                window.mutiny.experiences || (window.mutiny.experiences = []);
                const t = {
                  audienceSegment: n && n.name,
                  experience: i && i.description,
                  impressionType: e,
                  page: window.location.origin + window.location.pathname,
                  variationKey: i && i.variation_key,
                  variationName: i && i.variation_name,
                };
                window.mutiny.experiences.push(t),
                  window.dispatchEvent(
                    new CustomEvent(r.h.WindowExperienceImpression, {
                      detail: t,
                    })
                  );
              }
            }
            return;
          default:
            return;
        }
      }
    };
    var w,
      k = class {
        constructor() {
          (this.logger = new o.a('google-analytics-adapter')),
            (this.queue = new c(() =>
              Boolean(
                window.ga && window.ga.getAll && window.ga.getAll().length > 0
              )
            ));
        }
        identify() {}
        page() {}
        getEventLabelForPersonlization(e) {
          return (null == e ? void 0 : e.variation_name)
            ? `${r.t.Personalized} | ${e.variation_name}`
            : r.t.Personalized;
        }
        getEventAction(e, t) {
          return t
            ? t.description
              ? `${e.name} | ${t.description}`
              : `${e.name} | ${Object(m.b)(e.id, t.id)}`
            : e.name;
        }
        track(e, t) {
          this.queue.enqueue(() => {
            window.ga(() => {
              switch (e) {
                case w.ExperienceImpression:
                  const e = t,
                    n = e.audienceSegment,
                    i = e.experience;
                  if (n) {
                    this.logger.info('Calling `ga.send`');
                    const t =
                      e.impressionType === r.t.Personalized
                        ? this.getEventLabelForPersonlization(i)
                        : e.impressionType;
                    window.ga.getAll().forEach((e) => {
                      e.send({
                        eventAction: this.getEventAction(n, i),
                        eventCategory: 'mutinyExperienceQualify',
                        eventLabel: t,
                        hitType: 'event',
                        nonInteraction: !0,
                      });
                    });
                  }
                case w.Questionnaire:
                  const o = t,
                    { questionnaire: s } = o;
                  s &&
                    (this.logger.info('Calling `ga.send`'),
                    window.ga.getAll().forEach((e) => {
                      e.send({
                        eventAction: s.key,
                        eventCategory: 'mutinyQuestionnaireQualify',
                        eventLabel: o.impressionType,
                        hitType: 'event',
                        nonInteraction: !0,
                      });
                    }));
              }
            });
          });
        }
      };
    !(function (e) {
      (e[(e.Conversion = 0)] = 'Conversion'),
        (e[(e.Time = 1)] = 'Time'),
        (e[(e.Questionnaire = 2)] = 'Questionnaire'),
        (e[(e.QuestionnaireResponse = 3)] = 'QuestionnaireResponse'),
        (e[(e.Event = 4)] = 'Event'),
        (e[(e.ExperienceImpression = 5)] = 'ExperienceImpression'),
        (e[(e.Metric = 6)] = 'Metric'),
        (e[(e.VisitorIdentification = 7)] = 'VisitorIdentification');
    })(w || (w = {}));
    const S = [r.n.Mutiny, r.n.Window];
    t.b = class {
      constructor(e, t, n, r, i, a, c, u) {
        (this.apiClient = e),
          (this.trackingDisabled = a),
          (this.preview = c),
          (this.clientMode = u),
          (this.logger = new o.a('data-exporter'));
        const l = Object(s.d)(i.integrations.concat(S));
        this.adapters = l.map((e) => {
          const o = this.getAdapter(e);
          return (
            this.logger.debug(`Configuring ${e} adapter`),
            new o(t, n, r, i, this.apiClient, this.clientMode)
          );
        });
      }
      identify() {
        this.trackingDisabled
          ? this.preview
            ? this.apiClient.trackPreview()
            : this.logger.info('Skipping `identify` for doNotTrack mode')
          : (this.logger.info('Calling `identify`'),
            this.adapters.forEach((e) => e.identify()));
      }
      page() {
        this.trackingDisabled
          ? this.logger.info('Skipping `page` for doNotTrack mode')
          : (this.logger.info('Calling `page`'),
            this.adapters.forEach((e) => e.page()));
      }
      track(e, t) {
        return this.trackingDisabled
          ? (this.logger.info('Skipping `track` for doNotTrack mode'),
            Promise.resolve())
          : (this.logger.info('Calling `track`', e, t),
            Promise.all(
              this.adapters.map((n) => Promise.resolve(n.track(e, t)))
            ));
      }
      forceFlushQueues() {
        return Object(i.c)(() => {
          this.logger.info('Flushing API client queue');
          const e = this.apiClient.flush(!0);
          return (
            this.logger.info('Flushing all adapters', this.adapters),
            this.adapters.forEach((e) => e.queue && e.queue.flush()),
            e
          );
        });
      }
      disableTracking() {
        (this.trackingDisabled = !0), this.apiClient.disableTracking();
      }
      getAdapter(e) {
        switch (e) {
          case r.n.Mutiny:
            return g;
          case r.n.Segment:
            return v;
          case r.n.Window:
            return b;
          case r.n.Amplitude:
            return l;
          case r.n.GoogleAnalytics:
            return k;
          case r.n.Marketo:
            return f;
          case r.n.Hubspot:
            return h;
          default:
            throw new Error('Unknown integration type ' + e);
        }
      }
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'c', function () {
        return i;
      }),
      n.d(t, 'd', function () {
        return o;
      }),
      n.d(t, 'e', function () {
        return s;
      }),
      n.d(t, 'b', function () {
        return a;
      });
    const r = new RegExp(/\{\{\s*([\w.]+)\s*\}\}/, 'g');
    function i(e, t) {
      return e.replace(r, (e, n) => {
        const r = t.get(n);
        return null === r ? '' : r.toString();
      });
    }
    function o(e, t) {
      return Array.isArray(e)
        ? e.map((e) => o(e, t))
        : 'string' == typeof e
        ? i(e, t)
        : 'object' != typeof e || void 0 === e || null == e
        ? e
        : Object.keys(e).reduce((n, r) => ((n[r] = o(e[r], t)), n), {});
    }
    function s(e) {
      const [t, n] = e.split('[].', 2);
      return { nestedPath: n || null, topLevelPath: t };
    }
    function a(e) {
      let t = 0;
      if (0 === e.length) return t;
      for (let n = 0; n < e.length; n++) {
        (t = (t << 5) - t + e.charCodeAt(n)), (t &= t);
      }
      return t;
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return s;
    }),
      n.d(t, 'd', function () {
        return c;
      }),
      n.d(t, 'e', function () {
        return u;
      }),
      n.d(t, 'c', function () {
        return d;
      }),
      n.d(t, 'a', function () {
        return h;
      });
    var r = n(1),
      i = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    const o = new WeakMap(),
      s = (e, t) =>
        i(void 0, void 0, void 0, function* () {
          var n, r;
          if (e[t]) return e[t];
          const i =
            null === (n = o.get(e)) || void 0 === n
              ? void 0
              : n.pendingProperties.get(t);
          if (i) return i;
          const s = a(e, t);
          return (
            o.has(e)
              ? null === (r = o.get(e)) ||
                void 0 === r ||
                r.pendingProperties.set(t, s)
              : o.set(e, { pendingProperties: new Map([[t, s]]) }),
            s
          );
        }),
      a = (e, t) =>
        i(void 0, void 0, void 0, function* () {
          return new Promise((n) => {
            const i = new r.a('on-set-' + t);
            let s,
              a = !1;
            Object.defineProperty(e, t, {
              configurable: !0,
              get: () => s,
              set: (r) => {
                var c;
                (s = r),
                  a ||
                    (i.log('Set', t),
                    null === (c = o.get(e)) ||
                      void 0 === c ||
                      c.pendingProperties.delete(t),
                    (a = !0),
                    n(s));
              },
            });
          });
        });
    function c(e) {
      return Object.keys(e).reduce((t, n) => (t.push([n, e[n]]), t), []);
    }
    function u(e) {
      return Object.keys(e).reduce((t, n) => (t.push(e[n]), t), []);
    }
    function l(e) {
      return null != e && e.constructor !== Object;
    }
    function d(e, t) {
      if (
        null == e ||
        (e.constructor === Object && 0 === Object.keys(e).length)
      )
        return null;
      if (!t || !e || l(e)) return e;
      if (e && t in e && l(e[t])) return e[t];
      const [n, ...r] = t.split('.');
      return d(e[n], r.join('.'));
    }
    function h(e) {
      return Object.id(e);
    }
    (() => {
      if (void 0 === Object.id) {
        let e = 0;
        Object.id = (t) => (
          void 0 === t.__uniqueid &&
            Object.defineProperty(t, '__uniqueid', {
              value: ++e,
              enumerable: !1,
              writable: !1,
            }),
          t.__uniqueid
        );
      }
    })();
  },
  function (e, t, n) {
    'use strict';
    function r() {
      var e, t;
      return (
        (null === (e = document.getElementsByTagName('script')[0]) ||
        void 0 === e
          ? void 0
          : e.nonce) ||
        (null === (t = document.getElementsByTagName('style')[0]) ||
        void 0 === t
          ? void 0
          : t.nonce) ||
        ''
      );
    }
    n.d(t, 'a', function () {
      return r;
    });
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return s;
    });
    var r = n(4);
    class i {
      constructor() {
        this.data = {};
      }
      getItem(e) {
        return this.data.hasOwnProperty(e) ? this.data[e] : null;
      }
      setItem(e, t) {
        this.data[e] = t;
      }
      removeItem(e) {
        delete this.data[e];
      }
    }
    let o;
    function s() {
      return (
        o ||
        ((o =
          !Object(r.d)() &&
          (function () {
            try {
              return (
                localStorage.setItem('test', 'test'),
                'test' !== localStorage.getItem('test')
                  ? !1
                  : (localStorage.removeItem('test'), !0)
              );
            } catch (e) {
              return !1;
            }
          })()
            ? localStorage
            : new i()),
        o)
      );
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return s;
    }),
      n.d(t, 'c', function () {
        return a;
      }),
      n.d(t, 'a', function () {
        return c;
      }),
      n.d(t, 'b', function () {
        return l;
      });
    var r = n(19),
      i = n(16),
      o = n(0);
    function s(e) {
      return e.audience_segments.some((e) =>
        e.web_experiences.some((e) => Boolean(e.async))
      );
    }
    function a(e) {
      return e.audience_segments.some(
        (e) => u(e.condition) && e.web_experiences.length
      );
    }
    function c(e, t) {
      return t === o.b.AssetViewer
        ? u(e.audienceSegment.condition)
        : !u(e.audienceSegment.condition);
    }
    function u(e) {
      var t, n;
      if (!e) return !1;
      let s;
      return (
        (s =
          e.attribute === r.a &&
          Object(i.a)(o.b.AssetViewer, e.value, e.comparator)),
        !!s ||
          Boolean(
            (null === (t = e.or) || void 0 === t
              ? void 0
              : t.some((e) => u(e))) ||
              (null === (n = e.and) || void 0 === n
                ? void 0
                : n.some((e) => u(e)))
          )
      );
    }
    function l(e, t) {
      return `https://app.mutinyhq.com/segments/${e}/experiences/${t}/edit`;
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    class r {
      static getCookie(e) {
        var t;
        const n = ('; ' + document.cookie).split(`; ${e}=`);
        if (n.length > 1)
          return null === (t = n.pop()) || void 0 === t
            ? void 0
            : t.split(';').shift();
      }
      static setCookie(e, t, n) {
        r.setTopLevelDomainCookie(e, t, window.location.hostname, n);
      }
      static isCookieSet(e) {
        return void 0 !== r.getCookie(e);
      }
      static tryCookieWrite(e, t) {
        return (document.cookie = `${e}=${t}`), r.isCookieSet(e);
      }
      static setTopLevelDomainCookie(e, t, n, i) {
        const o = n.split('.');
        let s = 2;
        for (; s <= o.length; ) {
          const n = o.slice(-s).join('.'),
            a = `${t}; expires=${i.toUTCString()}; path=/; domain=.${n}`;
          if (r.tryCookieWrite(e, a)) return;
          s += 1;
        }
      }
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return l;
    }),
      n.d(t, 'a', function () {
        return h;
      });
    var r = n(2),
      i = n(3),
      o = n(0),
      s = n(8),
      a = n(11),
      c = n(10),
      u = n(5);
    function l(e, t) {
      return d(e, (e) =>
        (function (e, t) {
          const n =
              e.attribute.includes('query.') && e.value
                ? Object(u.i)(e.value)
                : e.value,
            { topLevelPath: d, nestedPath: p } = Object(c.e)(e.attribute);
          let g = t.get(d);
          return p
            ? ((g = g || []),
              Array.isArray(g)
                ? (function (e, t, n, r, c, u) {
                    const d = (
                        c
                          ? (function (e, t) {
                              return e.filter((e) => l(t, new i.e(e)));
                            })(e, c)
                          : e
                      ).map((e) => Object(a.c)(e, t)),
                      p = (e) => h(e, n, r);
                    switch (r) {
                      case o.d.Equal:
                      case o.d.UrlEqual:
                        return (null == n && 0 === d.length) || f(d, s.b, p, u);
                      case o.d.GreaterThan:
                      case o.d.GreaterThanOrEqual:
                      case o.d.LessThan:
                      case o.d.LessThanOrEqual:
                        return f(d, s.b, p, u);
                      case o.d.NotEqual:
                      case o.d.UrlNotEqual:
                        return (null != n || 0 !== d.length) && f(d, s.a, p, u);
                      case o.d.Includes:
                        return d.length > 0 && f(d, s.b, p, u);
                      case o.d.NotIncludes:
                        return 0 === d.length || f(d, s.a, p, u);
                      default:
                        return !1;
                    }
                  })(g, p, n, e.comparator, e.filter, e.aggregation)
                : (r.b.notify('Invalid array condition on ', g), !1))
            : h(g, n, e.comparator);
        })(e, t)
      );
    }
    function d(e, t) {
      if (!e || 0 === Object.keys(e).length) return !0;
      const n = t(e),
        r = e.or && e.or.length,
        i = e.and && e.and.length;
      if (r && i) {
        const r = Object(s.b)(e.or, (e) => d(e, t)),
          i = Object(s.a)(e.and, (e) => d(e, t));
        return 'and' === e.priority ? (n && i) || r : (n || r) && i;
      }
      return r
        ? n || Object(s.b)(e.or, (e) => d(e, t))
        : i
        ? n && Object(s.a)(e.and, (e) => d(e, t))
        : n;
    }
    function h(e, t, n) {
      switch (n) {
        case o.d.Equal:
          return e === t;
        case o.d.NotEqual:
          return e !== t;
        case o.d.NotIncludes:
          return !e || -1 === e.indexOf(t);
        case o.d.UrlNotEqual:
          return !e || !Object(u.j)(e, t);
        case o.d.UrlHostNotEqual:
          return !e || !Object(u.d)(e, t);
        case o.d.UrlPathNotEqual:
          return !e || !Object(u.e)(e, t);
        default:
          if (null == e) return !1;
          switch (n) {
            case o.d.UrlEqual:
              return Object(u.j)(e, t);
            case o.d.GreaterThan:
              return e > t;
            case o.d.GreaterThanOrEqual:
              return e >= t;
            case o.d.LessThan:
              return e < t;
            case o.d.LessThanOrEqual:
              return e <= t;
            case o.d.Includes:
              return e && e.indexOf(t) >= 0;
            case o.d.StartsWith:
              return e && e.startsWith(t);
            case o.d.EndsWith:
              return e && e.endsWith(t);
            case o.d.MatchesRegex:
              return e && Boolean(e.match(new RegExp(t)));
            case o.d.UrlHostEqual:
              return e && Object(u.d)(e, t);
            case o.d.UrlPathEqual:
              return e && Object(u.e)(e, t);
          }
      }
    }
    function f(e, t, n, i) {
      return i
        ? d(i, ({ attribute: t, value: i, comparator: s }) =>
            h(
              (function (e, t) {
                switch (t) {
                  case o.c.Count:
                    return e.length;
                  default:
                    return (
                      r.b.notify('Unrecognized aggregation attribute', t), null
                    );
                }
              })(e.filter(n), t),
              i,
              s
            )
          )
        : t(e, n);
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return T;
    }),
      n.d(t, 'd', function () {
        return j;
      }),
      n.d(t, 'a', function () {
        return x;
      }),
      n.d(t, 'b', function () {
        return I;
      });
    n(46);
    var r = n(2),
      i = n(1);
    const o = (e, t) => {
      var n;
      return T(e)
        ? null === (n = e.interactiveClone) || void 0 === n
          ? void 0
          : n.getOriginalOfClonedElement(t)
        : void 0;
    };
    var s = n(9),
      a = n(0),
      c = n(10);
    const u = 'style';
    var l = (e, t, n, r) => {
      var o;
      const l = new i.a('AttributeApplier:' + t.id);
      for (const i of Object.keys(t.html_attributes))
        if ('class' !== i || t.replace_classes)
          (d = i).startsWith('data-mutiny') || [u].includes(d)
            ? (l.warn('Received HTML style attributes in AttributeApplier'),
              null === (o = null == r ? void 0 : r.exporter) ||
                void 0 === o ||
                o.track(s.a.Metric, {
                  description: `DOM Update ID: ${t.id}; Attribute: ${i}`,
                  metricKey: 'Client DOM Update contains blacklisted attribute',
                  metricType: a.p.Event,
                }))
            : e.setAttribute(i, Object(c.c)(t.html_attributes[i], n));
        else {
          const r = Object(c.c)(t.html_attributes[i], n)
            .split(/\s+/g)
            .filter((e) => e.length > 0);
          for (const t of r) e.classList.add(t);
        }
      var d;
    };
    const d = [
        'animate',
        'animateMotion',
        'animateTransform',
        'circle',
        'clippath',
        'color-profile',
        'defs',
        'desc',
        'discard',
        'ellipse',
        'feBlend',
        'feColorMatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feDropShadow',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
        'filter',
        'foreignObject',
        'g',
        'hatch',
        'hatchpath',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'mesh',
        'meshgradient',
        'meshpatch',
        'meshrow',
        'metadata',
        'mpath',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'set',
        'solidcolor',
        'stop',
        'svg',
        'switch',
        'symbol',
        'text',
        'textPath',
        'title',
        'tspan',
        'unknown',
        'use',
        'view',
      ],
      h = {
        html: 'http://www.w3.org/1999/xhtml',
        svg: 'http://www.w3.org/2000/svg',
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      };
    class f {
      constructor(e) {
        (this.userData = e), (this.logger = new i.a('node-renderer'));
      }
      renderNode(e) {
        let t;
        return (
          'fragment' === e.tag
            ? (t = document.createDocumentFragment())
            : d.indexOf(e.tag) >= 0
            ? ((t = document.createElementNS(
                'http://www.w3.org/2000/svg',
                e.tag
              )),
              Object.keys(e.html_attributes).forEach((n) => {
                if ('xmlns' !== n) {
                  const r = n.split(':')[0];
                  if (r)
                    t.setAttributeNS(
                      h[r],
                      n,
                      Object(c.c)(e.html_attributes[n], this.userData)
                    );
                  else {
                    const r = this.buildAttrNode(
                      n,
                      Object(c.c)(e.html_attributes[n], this.userData)
                    );
                    r && t.setAttributeNode(r);
                  }
                }
              }))
            : ((t = document.createElement(e.tag)),
              t.setAttribute('data-mutiny', 'true'),
              Object.keys(e.html_attributes).forEach((n) => {
                try {
                  const r = this.buildAttrNode(
                    n,
                    Object(c.c)(e.html_attributes[n], this.userData)
                  );
                  if (!r)
                    throw new Error(
                      `Could not build attribute node for attribute "${n}"`
                    );
                  t.setAttributeNode(r);
                } catch (e) {
                  this.logger.error('Failed to set HTML attribute', e);
                }
              })),
          e.inner_html.forEach((e) => {
            if ('string' == typeof e)
              t.appendChild(
                document.createTextNode(Object(c.c)(e, this.userData))
              );
            else {
              const n = this.renderNode(e);
              t.appendChild(n);
            }
          }),
          t
        );
      }
      buildAttrNode(e, t) {
        var n, r;
        const i =
          null ===
            (n = new DOMParser()
              .parseFromString(`<div id="tmp" ${e} />`, 'text/html')
              .getElementById('tmp')) || void 0 === n
            ? void 0
            : n.getAttributeNode(e);
        return (
          t && i && (i.value = t),
          null !== (r = null == i ? void 0 : i.cloneNode(!0)) && void 0 !== r
            ? r
            : null
        );
      }
    }
    var p = (e, t, n) => {
      const r = new f(n).renderNode(t.content);
      (e.innerHTML = ''), e.appendChild(r);
    };
    var g = (e, t, n) => {
        Object.entries(t.styles).forEach(([t, r]) => {
          e.style.setProperty(t, Object(c.c)(r, n));
        });
      },
      m = n(20),
      v = n(25),
      y = n(7),
      b = n(47);
    function w(e) {
      return [HTMLInputElement, HTMLSelectElement, HTMLOptionElement].some(
        (t) => e instanceof t
      );
    }
    function k(e) {
      return e instanceof HTMLAnchorElement;
    }
    class S {
      constructor(e, t, n) {
        (this.styleSheet = new CSSStyleSheet()),
          (this.cloneToOriginal = new WeakMap()),
          (this.originalToClone = new WeakMap()),
          (this.mutationListeners = []),
          (this.cloneToOriginalNodes = new WeakMap()),
          (this.originalToCloneNodes = new WeakMap()),
          (this.options = Object.assign({ cloneMutations: !0 }, n)),
          (this.originalElement = e),
          (this.personalization = t);
      }
      initialize() {
        this.clone(this.originalElement),
          this.updateElementMapping(),
          this.registerEvents(),
          (this.mutationObserver = new MutationObserver((e) => {
            for (const t of e)
              switch (t.type) {
                case 'attributes':
                  this.handleAttributeMutation(t);
                  break;
                case 'characterData':
                  this.handleCharacterDataMutation(t);
                  break;
                case 'childList':
                  this.handleChildListMutation(t);
              }
            return (
              this.mutationListeners.forEach((t) => {
                t(this.personalization, this.originalElement, e);
              }),
              !0
            );
          })),
          this.mutationObserver.observe(this.originalElement, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          });
      }
      teardown() {
        var e;
        null === (e = this.mutationObserver) || void 0 === e || e.disconnect();
      }
      addMutationListener(e) {
        this.mutationListeners.push(e);
      }
      handleChildListMutation(e) {
        if (!this.options.cloneMutations) return;
        e.removedNodes.forEach((e) => {
          var t;
          if (
            e instanceof HTMLElement
              ? !this.originalToClone.has(e)
              : !this.originalToCloneNodes.has(e)
          )
            return;
          const n =
            e instanceof HTMLElement
              ? this.originalToClone.get(e)
              : this.originalToCloneNodes.get(e);
          null === (t = null == n ? void 0 : n.parentNode) ||
            void 0 === t ||
            t.removeChild(n);
        });
        const t = this.originalToClone.get(e.target),
          n =
            null === e.nextSibling
              ? null
              : e.nextSibling instanceof HTMLElement
              ? this.originalToClone.get(e.nextSibling)
              : this.originalToCloneNodes.get(e.nextSibling);
        e.addedNodes.forEach((e) => {
          const r = e.cloneNode(!0);
          null == t || t.insertBefore(r, null != n ? n : null),
            this.updateElementMapping(e, r);
        });
      }
      handleAttributeMutation(e) {
        if (!(e.target instanceof HTMLElement && e.attributeName)) return;
        if (e.target === this.originalElement)
          return (
            this.cloneAttribute(
              e.attributeName,
              this.originalElement,
              this.personalization
            ),
            void this.personalization.attributeChangeCallback(
              e.attributeName,
              e.oldValue,
              this.personalization.getAttribute(e.attributeName)
            )
          );
        if (!this.options.cloneMutations) return;
        const t = this.originalToClone.get(e.target);
        t && this.cloneAttribute(e.attributeName, e.target, t);
      }
      handleCharacterDataMutation(e) {
        var t;
        if (!this.options.cloneMutations) return;
        const n = this.originalToCloneNodes.get(e.target);
        if (!n) return;
        const r = e.target.cloneNode(!0);
        null === (t = n.parentNode) || void 0 === t || t.replaceChild(r, n),
          this.updateElementMapping(e.target, r);
      }
      clone(e) {
        var t;
        if (e === this.originalElement) {
          this.originalElement.getAttributeNames().forEach((e) => {
            this.cloneAttribute(e, this.originalElement, this.personalization),
              this.personalization.attributeChangeCallback(
                e,
                null,
                this.originalElement.getAttribute(e)
              );
          });
          const e = [];
          return (
            this.originalElement.childNodes.forEach((t) => {
              e.push(t.cloneNode(!0));
            }),
            (this.personalization.innerHTML = ''),
            void this.personalization.append(...e)
          );
        }
        const n = this.originalToClone.get(e);
        n &&
          (null === (t = n.parentElement) ||
            void 0 === t ||
            t.replaceChild(e.cloneNode(!0), n));
      }
      getPersonalizationForElement(e) {
        var t;
        const n =
            T(e) &&
            (null === (t = e.isRendered) || void 0 === t ? void 0 : t.call(e)),
          r = y.a.getPersonalizationForElement(e);
        return n ? e : r;
      }
      updateElementMapping(e, t) {
        e ||
          t ||
          ((this.cloneToOriginal = new WeakMap()),
          (this.originalToClone = new WeakMap()),
          (this.cloneToOriginalNodes = new WeakMap()),
          (this.originalToCloneNodes = new WeakMap()));
        const n = new Set(),
          r = [],
          i = new Set();
        let o = !0;
        this.traverseTreeWith(
          (e, t) => {
            var s;
            j(e) && i.add(e);
            const a = this.getPersonalizationForElement(e);
            return a && a !== this.personalization
              ? (t !== a &&
                  (r.push({ replace: t, withElement: a }), j(a) && i.add(a)),
                'break')
              : T(t) &&
                t !== this.personalization &&
                !(null === (s = t.isRendered) || void 0 === s
                  ? void 0
                  : s.call(t))
              ? (n.add(t), 'break')
              : (this.elementMatches(e, t) || (o = !1),
                o &&
                  (this.cloneToOriginal.set(t, e),
                  this.originalToClone.set(e, t)),
                'continue');
          },
          e,
          t
        ),
          n.forEach((e) => e.remove()),
          r.forEach(({ replace: e, withElement: t }) => {
            var n;
            null === (n = e.parentElement) ||
              void 0 === n ||
              n.replaceChild(t, e);
          }),
          i.forEach((e) => {
            e.placePersonalization();
          }),
          o ||
            e ||
            t ||
            ((this.cloneToOriginal = new WeakMap()),
            (this.originalToClone = new WeakMap()),
            (this.cloneToOriginalNodes = new WeakMap()),
            (this.originalToCloneNodes = new WeakMap()));
      }
      traverseTreeWith(e, t, n) {
        const r = (t, n) => {
          var i, o, s, a;
          if (
            (t instanceof HTMLElement ||
              n instanceof HTMLElement ||
              (this.originalToCloneNodes.set(t, n),
              this.cloneToOriginalNodes.set(n, t)),
            !(
              t instanceof HTMLElement &&
              n instanceof HTMLElement &&
              'break' === e(t, n)
            ))
          )
            for (let e = 0; e < n.childNodes.length; e++) {
              const c =
                  null ===
                    (o =
                      null === (i = null == t ? void 0 : t.childNodes) ||
                      void 0 === i
                        ? void 0
                        : i.item) || void 0 === o
                    ? void 0
                    : o.call(i, e),
                u =
                  null ===
                    (a =
                      null === (s = null == n ? void 0 : n.childNodes) ||
                      void 0 === s
                        ? void 0
                        : s.item) || void 0 === a
                    ? void 0
                    : a.call(s, e);
              c && u && r(c, u);
            }
        };
        r(
          null != t ? t : this.originalElement,
          null != n ? n : this.personalization
        );
      }
      elementMatches(e, t) {
        return (
          ['tagName', 'id'].every((n) => e[n] === t[n]) &&
          e.children.length === t.children.length
        );
      }
      getOriginalOfClonedElement(e) {
        return this.cloneToOriginal.get(e);
      }
      cloneAttribute(e, t, n) {
        var r;
        if ('style' === e)
          return void Object(b.b)(
            null !== (r = t.getAttribute('style')) && void 0 !== r ? r : '',
            n
          );
        const i = t.getAttributeNode(e);
        i ? n.setAttributeNode(i.cloneNode(!0)) : n.removeAttribute(e);
      }
      registerEvents() {
        Object(v.b)().forEach((e) => {
          this.personalization.addEventListener(
            e,
            (e) => {
              if (e.target instanceof HTMLElement) {
                const t = this.cloneToOriginal.get(e.target);
                if (k(t) && k(e.target)) {
                  if (e.target.href !== t.href) return;
                  e.preventDefault();
                }
                w(t) &&
                  w(e.target) &&
                  e.target.value !== t.value &&
                  (t.value = e.target.value),
                  null == t || t.dispatchEvent(new e.constructor(e.type, e));
              }
            },
            !!['scroll', 'wheel', 'mousewheel', 'touch', 'drag'].some((t) =>
              e.startsWith(t)
            ) && v.d
          );
        });
      }
    }
    var E = function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    };
    const C = (e) => `mutiny-${e.toLowerCase()}-personalization`,
      O = new Map(),
      _ = new Set(),
      T = (e) => {
        var t, n, r, i;
        return (
          !!e &&
          null !==
            (r =
              null !== (t = e.isMutinyElement) && void 0 !== t
                ? t
                : ((i =
                    null !== (n = e.getAttribute('is')) && void 0 !== n
                      ? n
                      : ''),
                  /^mutiny-[a-z0-9-]+-personalization$/.test(i))) &&
          void 0 !== r &&
          r
        );
      },
      j = (e) => {
        var t;
        return (
          T(e) &&
          !!(null === (t = e.record) || void 0 === t ? void 0 : t.data.position)
        );
      },
      x = (e) =>
        Array.from(e.children).reduce(
          (t, n) => (n === e || T(n) || t.push(n), t),
          new Array()
        );
    function I(e) {
      if (
        (function (e) {
          const t = C(e.tagName);
          if (_.has(t)) return !1;
          if (O.has(t)) return !0;
          const n = Object.getPrototypeOf(e).constructor,
            i = A(n);
          try {
            customElements.define(t, i, { extends: e.tagName.toLowerCase() }),
              O.set(t, i);
          } catch (e) {
            return (
              'object' == typeof (o = e) &&
                null !== o &&
                'code' in o &&
                'number' == typeof o.message &&
                e.code === DOMException.NOT_SUPPORTED_ERR &&
                r.b.notify(e),
              _.add(t),
              !1
            );
          }
          var o;
          return !0;
        })(e)
      )
        return C(e.tagName);
    }
    const A = (e) =>
      class extends e {
        constructor() {
          super(),
            (this.initialized = !1),
            (this.rendered = !1),
            (this.tearingDown = !1),
            (this.tempRemoved = !1),
            (this.logger = new i.a('mutiny-personalization')),
            (this.reattachedCounter = 0);
          try {
            (this.root = this.attachShadow({ mode: 'closed' })),
              (this.root.innerHTML = '<slot></slot>');
          } catch (e) {
            this.logger.log(
              'Element type cannot be used as shadow root. Falling back to rendering personalization within the main tree.'
            );
          }
        }
        get isMutinyElement() {
          return !0;
        }
        get nodeName() {
          return 'MUTINY-' + super.nodeName;
        }
        initializePersonalization(e, t, n, r, i) {
          this.initialized
            ? this.logger.error(
                'Attempted to initialize the same personalization more than once.'
              )
            : ((this.originalElement = e),
              (this.record = t),
              (this.userData = n),
              (this.exporter = i),
              (this.mutinyParentElement = r),
              this.render(),
              (this.initialized = !0));
        }
        isRendered() {
          return this.rendered;
        }
        render() {
          var e;
          const { record: t, userData: n } = this.getContext(),
            { remove: r, content: i } = t.data;
          if (!this.rendered) {
            if (((this.rendered = !0), !this.element)) {
              if (!this.originalElement)
                throw new Error('could not retrieve original element');
              if ((y.a.registerPersonalization(this.originalElement, this), r))
                return void (this.elementHider = new m.c(
                  this.originalElement,
                  t.selector
                ));
              (this.element = new S(this.originalElement, this, {
                cloneMutations: !i,
              })),
                this.element.initialize(),
                'addition' !==
                  (null === (e = this.record) || void 0 === e
                    ? void 0
                    : e.personalization_type) &&
                  (this.elementHider = new m.c(
                    this.originalElement,
                    t.selector
                  ));
            }
            i &&
              (p(this, { id: t.resource_id, content: i }, n),
              this.element.updateElementMapping()),
              this.applyAttributePersonalization();
          }
        }
        placePersonalization() {
          var e, t;
          const n =
              this.mutinyParentElement &&
              y.a.getClonedElement(this.mutinyParentElement),
            r = null != n ? n : this.mutinyParentElement,
            {
              record: {
                data: { position: i },
              },
            } = this.getContext();
          if (i && r) {
            const e = ((e, t, n) => {
              var r, i;
              const s = Array.from(n.children);
              for (const a of s)
                if (a !== e && a !== e.originalElement)
                  if (
                    T(a) &&
                    (null === (r = a.record) || void 0 === r
                      ? void 0
                      : r.data.position)
                  ) {
                    const e = a.record.data.position;
                    if (e.index >= t.index && e.deconflictor >= t.deconflictor)
                      return a;
                  } else if (
                    T(a) &&
                    (null === (i = a.originalElement) || void 0 === i
                      ? void 0
                      : i.parentElement)
                  ) {
                    if (
                      x(a.originalElement.parentElement).indexOf(
                        a.originalElement
                      ) >= t.index
                    )
                      return a;
                  } else {
                    const e = o(n, a),
                      r = e || a;
                    if (
                      (r.parentElement ? x(r.parentElement).indexOf(r) : -1) >=
                      t.index
                    )
                      return a;
                  }
              return null;
            })(this, i, r);
            r.insertBefore(this, e);
          } else
            null ===
              (t =
                null === (e = this.element) || void 0 === e
                  ? void 0
                  : e.originalElement.parentElement) ||
              void 0 === t ||
              t.insertBefore(this, this.element.originalElement.nextSibling);
        }
        teardown() {
          var e, t;
          (this.tempRemoved = !1),
            (this.tearingDown = !0),
            null === (e = this.element) || void 0 === e || e.teardown(),
            (this.rendered = !1),
            y.a.unregisterPersonalization(this),
            this.remove(),
            null === (t = this.elementHider) || void 0 === t || t.show();
        }
        temporarilyRemove() {
          (this.tempRemoved = !0), this.remove();
        }
        attributeChangeCallback(e, t, n) {
          var r, i, o, s;
          const { record: a } = this.getContext(),
            { html_attributes: c, styles: u } = a.data;
          if ('style' === e)
            for (const e of Object.keys(
              null !==
                (i =
                  null === (r = this.elementHider) || void 0 === r
                    ? void 0
                    : r.originalStyles) && void 0 !== i
                ? i
                : {}
            ))
              this.style.setProperty(
                e,
                null !==
                  (s =
                    null === (o = this.elementHider) || void 0 === o
                      ? void 0
                      : o.originalStyles[e]) && void 0 !== s
                  ? s
                  : ''
              );
          (Object.keys(null != c ? c : {}).some((t) => e === t) ||
            ('style' === e && u)) &&
            this.applyAttributePersonalization();
        }
        connectedCallback() {
          this.tempRemoved = !1;
        }
        disconnectedCallback() {
          requestAnimationFrame(() => {
            var e;
            if (!this.isConnected && !this.tempRemoved)
              if (
                this.initialized &&
                !this.tearingDown &&
                (null === (e = this.element) || void 0 === e
                  ? void 0
                  : e.originalElement.isConnected)
              ) {
                if (this.reattachedCounter >= 100)
                  return (
                    this.logger.error(
                      'Attempted to reattach more times than the permitted limit.',
                      this
                    ),
                    y.a.unregisterPersonalization(this),
                    void (this.rendered = !1)
                  );
                this.logger.warn(
                  'Personalization was disconnected premmaturely. Attempting to reattach.',
                  this
                ),
                  this.placePersonalization(),
                  this.reattachedCounter++;
              } else y.a.unregisterPersonalization(this), (this.rendered = !1);
          });
        }
        get interactiveClone() {
          return this.element;
        }
        get replacedStyleAttribute() {
          var e, t;
          if (!this.originalElement) return;
          if (!this.elementHider)
            return null !== (e = this.originalElement.getAttribute('style')) &&
              void 0 !== e
              ? e
              : void 0;
          const n = this.originalElement.cloneNode(!1);
          for (const [e, t] of Object.entries(this.elementHider.originalStyles))
            t && n.style.setProperty(e, t);
          return null !== (t = n.getAttribute('style')) && void 0 !== t
            ? t
            : void 0;
        }
        applyAttributePersonalization() {
          const { record: e, userData: t } = this.getContext(),
            { html_attributes: n, styles: r, replace_classes: i } = e.data,
            o = n || {},
            { style: s } = o,
            a = E(o, ['style']),
            c = (u = s)
              ? u.split(';').reduce((e, t) => {
                  const [n, r] = t.split(':', 2);
                  return (
                    void 0 === r || 0 === r.length || (e[n.trim()] = r.trim()),
                    e
                  );
                }, {})
              : void 0;
          var u;
          const d = Object.assign(Object.assign({}, r), c);
          a &&
            l(
              this,
              { id: e.resource_id, html_attributes: a, replace_classes: i },
              t,
              { exporter: this.exporter }
            ),
            g(this, { id: e.resource_id, styles: d }, t);
        }
        getContext() {
          if (!this.record || !this.userData)
            throw (
              (this.logger.error(
                'Attempted to call getContext on MutinyPersonalization prior to initializing'
              ),
              new Error(
                'initializePersonalization must be called prior to interacting with personalizations'
              ))
            );
          return { record: this.record, userData: this.userData };
        }
      };
    A(HTMLElement);
  },
  function (e, t, n) {
    'use strict';
    var r = function (e) {
      return (
        (function (e) {
          return !!e && 'object' == typeof e;
        })(e) &&
        !(function (e) {
          var t = Object.prototype.toString.call(e);
          return (
            '[object RegExp]' === t ||
            '[object Date]' === t ||
            (function (e) {
              return e.$$typeof === i;
            })(e)
          );
        })(e)
      );
    };
    var i =
      'function' == typeof Symbol && Symbol.for
        ? Symbol.for('react.element')
        : 60103;
    function o(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e)
        ? l(((n = e), Array.isArray(n) ? [] : {}), e, t)
        : e;
      var n;
    }
    function s(e, t, n) {
      return e.concat(t).map(function (e) {
        return o(e, n);
      });
    }
    function a(e) {
      return Object.keys(e).concat(
        (function (e) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(e).filter(function (t) {
                return e.propertyIsEnumerable(t);
              })
            : [];
        })(e)
      );
    }
    function c(e, t) {
      try {
        return t in e;
      } catch (e) {
        return !1;
      }
    }
    function u(e, t, n) {
      var r = {};
      return (
        n.isMergeableObject(e) &&
          a(e).forEach(function (t) {
            r[t] = o(e[t], n);
          }),
        a(t).forEach(function (i) {
          (function (e, t) {
            return (
              c(e, t) &&
              !(
                Object.hasOwnProperty.call(e, t) &&
                Object.propertyIsEnumerable.call(e, t)
              )
            );
          })(e, i) ||
            (c(e, i) && n.isMergeableObject(t[i])
              ? (r[i] = (function (e, t) {
                  if (!t.customMerge) return l;
                  var n = t.customMerge(e);
                  return 'function' == typeof n ? n : l;
                })(i, n)(e[i], t[i], n))
              : (r[i] = o(t[i], n)));
        }),
        r
      );
    }
    function l(e, t, n) {
      ((n = n || {}).arrayMerge = n.arrayMerge || s),
        (n.isMergeableObject = n.isMergeableObject || r),
        (n.cloneUnlessOtherwiseSpecified = o);
      var i = Array.isArray(t);
      return i === Array.isArray(e)
        ? i
          ? n.arrayMerge(e, t, n)
          : u(e, t, n)
        : o(t, n);
    }
    l.all = function (e, t) {
      if (!Array.isArray(e))
        throw new Error('first argument should be an array');
      return e.reduce(function (e, n) {
        return l(e, n, t);
      }, {});
    };
    var d = l;
    e.exports = d;
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return te;
    }),
      n.d(t, 'c', function () {
        return ne;
      }),
      n.d(t, 'a', function () {
        return ie;
      }),
      n.d(t, 'd', function () {
        return se;
      });
    var r = n(31),
      i = n.n(r),
      o = (n(40), n(32)),
      s = n(1),
      a = n(0),
      c = n(5);
    class u {
      constructor(e, t, n) {
        (this.apiKey = e),
          (this.visitorToken = t),
          (this.timer = n),
          (this.buffer = []),
          (this.logger = new s.a('batch-request-scheduler')),
          this.resetInterval(),
          this.timer.callOnPageInactive(() => this.flush()),
          window.addEventListener('beforeunload', () => this.teardown());
      }
      static handleErrors(e) {
        if (!e.ok) throw Error(e.statusText);
        return e;
      }
      track(e, t) {
        this.logger.debug('Adding event of to batch request buffer', e, t);
        const n = new Promise((n) => {
          this.buffer.push({ onComplete: n, payload: t, trackType: e });
        });
        return (
          this.buffer.length >= 20 &&
            (this.logger.info(
              'Batch request buffer has exceeded element limit. Flushing'
            ),
            this.resetInterval(),
            this.flush()),
          n
        );
      }
      flush() {
        if (!this.buffer.length) return Promise.resolve();
        const e = this.clearBuffer();
        this.logger.debug(`Flushing ${e.length} entries to batch endpoint`, e);
        const t = this.generateBody(e);
        return (
          null !== t
            ? fetch(this.generateUrl(), { body: t, method: 'POST' })
            : Promise.resolve()
        )
          .then(u.handleErrors)
          .then(() => e.forEach(({ onComplete: e }) => e()))
          .catch(() => {
            this.buffer.unshift(...e), this.trackRequestFailed();
          });
      }
      teardown() {
        if (
          (this.logger.info(
            'Page unloaded detected. Beginning teardown process'
          ),
          this.requestInterval && clearInterval(this.requestInterval),
          navigator && 'function' == typeof navigator.sendBeacon)
        ) {
          const e = this.clearBuffer();
          this.logger.info(
            `Browser Beacon support found. Flushing remaining ${e.length} items`
          );
          const t = this.generateBody(e);
          if ((this.logger.info('Generated body', t), null !== t)) {
            navigator.sendBeacon(this.generateUrl(), t)
              ? e.forEach((e) => e.onComplete())
              : this.trackRequestFailed();
          }
        } else this.flushSync();
      }
      flushSync() {
        const e = this.clearBuffer();
        this.logger.info(
          `No Beacon support found. Falling back to synchronous XHR. Flushing remaining ${e.length} items`
        );
        const t = this.generateBody(e);
        if (null !== t) {
          let n = !1;
          try {
            const e = new XMLHttpRequest();
            e.open('POST', this.generateUrl(), !1),
              (e.onreadystatechange = () => {
                if (
                  !(
                    e.readyState === XMLHttpRequest.DONE &&
                    e.status >= 200 &&
                    e.status < 300
                  )
                )
                  throw Error;
                n = !0;
              }),
              e.send(t);
          } catch (e) {
            this.trackRequestFailed();
          }
          n && e.forEach(({ onComplete: e }) => e());
        }
      }
      generateBody(e) {
        const t = this.formatEvents(e);
        return (
          this.logger.info('Events', t),
          this.logger.info('Visitor Token', this.visitorToken),
          t.length
            ? JSON.stringify({
                events: t,
                metadata: { client_version: '3.1.29' },
                token: this.apiKey,
                visitor_token: this.visitorToken,
              })
            : null
        );
      }
      formatEvents(e) {
        return e.reduce((e, t) => {
          const n = this.formatEvent(t);
          return null !== n && e.push(n), e;
        }, []);
      }
      formatEvent({ trackType: e, payload: t }) {
        switch (e) {
          case j.Impression:
            return { event_type: 'impression', payload: t };
          case j.ExperienceImpression:
            return { event_type: 'experience_impression', payload: t };
          case j.QuestionnaireImpression:
            return { event_type: 'questionnaire_impression', payload: t };
          case j.QuestionnaireResponse:
            return { event_type: 'questionnaire_response', payload: t };
          case j.Conversion:
            return { event_type: 'conversion', payload: t };
          case j.ImpressionEvent:
            return { event_type: 'event', payload: t };
          case j.ImpressionTime:
            return { event_type: 'impression_time', payload: t };
          case j.Preview:
            return { event_type: 'preview', payload: t };
          case j.Identify:
            return { event_type: 'identify', payload: t };
          case j.SegmentIdentify:
            return { event_type: 'segment_identify', payload: t };
          case j.Metric:
            return { event_type: 'metric', payload: t };
          case j.VisitorIdentification:
            return { event_type: 'visitor_identification', payload: t };
          default:
            return (
              this.logger.info(
                'Unrecognized TrackType found. Ignoring event',
                e,
                t
              ),
              null
            );
        }
      }
      generateUrl() {
        return (
          (window.MUTINY_API_URL || 'https://api-v2.mutinyhq.io') + '/v2/b'
        );
      }
      resetInterval() {
        this.requestInterval && clearInterval(this.requestInterval),
          (this.requestInterval = setInterval(() => this.flush(), 3e3));
      }
      clearBuffer() {
        const e = this.buffer;
        return (this.buffer = []), e;
      }
      trackRequestFailed() {
        this.buffer.some(
          ({ payload: e }) =>
            e && 'client.tracking_request.failed' === e.metric_key
        ) ||
          this.track(j.Metric, {
            metric_key: 'client.tracking_request.failed',
            metric_type: a.p.Increment,
            tags: { client_version: '3.1.29' },
          });
      }
    }
    var l = u,
      d = n(52),
      h = n.n(d);
    var f = class {
        constructor(e, t, n) {
          (this.apiKey = e),
            (this.visitorToken = t),
            (this.generateUrl = n),
            (this.queue = []);
        }
        track(e, t = {}) {
          return new Promise((n, r) => {
            let i;
            const o = () => (
              i ||
                (i = new Promise((n, r) => {
                  let i = !1;
                  h()(
                    this.generateUrl(e),
                    Object.assign(
                      { token: this.apiKey, visitor_token: this.visitorToken },
                      t
                    ),
                    {},
                    null,
                    (e, t) => {
                      if (!i && t && 4 === t.readyState)
                        return (
                          (i = !0),
                          t.status >= 200 && t.status < 300
                            ? n(t)
                            : (this.trackRequestFailed(), e || t.status, r(t))
                        );
                    }
                  );
                })
                  .then(n)
                  .catch((e) => {
                    throw (r(e), e);
                  })),
              i
            );
            e === j.Impression || e === j.Preview
              ? ((this.impressionRequest = o),
                this.visitorToken &&
                  this.impressionRequest().then(
                    () => (this.impressionRequest = void 0)
                  ))
              : (this.queue.push(o), this.visitorToken && this.flush());
          });
        }
        flush(e = !1) {
          const t = () => {
              const e = this.queue.map((e) => e());
              return (
                (this.impressionRequest = void 0),
                (this.queue = []),
                Promise.all(e)
              );
            },
            n = this.impressionRequest;
          return n && !e
            ? new Promise((e, r) => {
                n()
                  .then(() => t().then(e))
                  .catch(r);
              })
            : t();
        }
        trackRequestFailed() {
          this.track(j.Metric, {
            metric_key: 'client.tracking_request.failed',
            metric_type: a.p.Increment,
            tags: { client_version: '3.1.29' },
          });
        }
      },
      p = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      };
    const g = 'v2/i',
      m = 't',
      v = 'preview',
      y = 'experience_impressions/t',
      b = 'conversions/t',
      w = 'questionnaires/t',
      k = 'questionnaire_responses/t',
      S = 'events/t',
      E = 'elapsed_time/t',
      C = 'identify',
      O = 'segment/identify',
      _ = 'metric/t',
      T = 'visitor_identification/t';
    var j;
    !(function (e) {
      (e.Identify = 'identify'),
        (e.SegmentIdentify = 'segment_identify'),
        (e.Preview = 'preview'),
        (e.Impression = 'impression'),
        (e.ExperienceImpression = 'experience_impression'),
        (e.Conversion = 'conversion'),
        (e.QuestionnaireImpression = 'questionnaire_impression'),
        (e.QuestionnaireResponse = 'questionnaire_response'),
        (e.ImpressionEvent = 'impression_event'),
        (e.ImpressionTime = 'impression_time'),
        (e.Metric = 'metric'),
        (e.VisitorIdentification = 'visitor_identification');
    })(j || (j = {}));
    var x = class {
        constructor(e, t, n, r) {
          (this.apiKey = e),
            (this.companyToken = t),
            (this.visitorToken = n),
            (this.sessionToken = r);
        }
        getNextAssets(e, t = 3, n) {
          return Promise.resolve(
            fetch(this.buildUrl(), {
              body: this.buildRequestBody(e, t, n),
              method: 'POST',
            }).then((e) => e.json())
          );
        }
        buildUrl() {
          return `${
            window.MUTINY_USER_DATA_URL || 'https://user-data.mutinycdn.com'
          }/personalize/${this.companyToken}/assets.json?preview=true`;
        }
        buildRequestBody(e, t, n) {
          return JSON.stringify({
            excluded_actions: n,
            requested_items: t,
            session_token: this.sessionToken,
            visitor_token: this.visitorToken,
            web_experience_id: e,
          });
        }
      },
      I = n(26),
      A = n(2),
      M = n(37),
      q = n(3);
    const P = ['preview', 'mutiny', q.j, q.i, q.a, q.b, q.d];
    function N(e, t, n) {
      const r = {
          person: {
            behavior: {
              session_number: n.getAndSetSessionNumber(),
              viewed_questionnaires: n.impressionStore.questionnaireImpressions,
              visited_url: n.impressionStore.impressions,
            },
          },
        },
        i = Object(c.h)(window.location.search);
      return (
        (function (e, { campaign_query_param_keys: t }) {
          const n = [...P, ...t],
            r = Object(M.a)();
          Object.keys(e)
            .filter((e) => n.indexOf(e) < 0)
            .forEach((t) => {
              r.setItem('query.' + t, e[t]);
            });
        })(i, e),
        new q.h(
          Object.assign(Object.assign({}, r), { query: i }),
          t
        ).getWriteableStore()
      );
    }
    var R = n(38),
      L = n(9),
      D = n(12),
      F = n(36);
    var B = class {
        constructor(
          e,
          t = 'html:not([data-mutiny-loaded])',
          n = 'data-mutiny-loaded'
        ) {
          (this.timer = e),
            (this.hiderSelector = t),
            (this.mutinyLoadedAttribute = n),
            (this.logger = new s.a('hide-elements'));
        }
        attachHider(e, t) {
          const n = this.activeSelectors(e, t.preview);
          0 !== n.length
            ? (this.cssStyle || (this.cssStyle = this.generateHiderStyles(n)),
              this.attachStyles(this.cssStyle),
              this.attachObserver(),
              A.b.leaveBreadcrumb('[Mutiny] Attached hider'),
              this.timer.callAtElapsedTime(() => {
                this.isAttached()
                  ? (A.b.leaveBreadcrumb(
                      '[Mutiny] Hider load timeout executed'
                    ),
                    this.removeHider(!1, 'hide timeout exceeded'))
                  : this.logger.debug(
                      'Hider timeout triggered, but hider was already removed'
                    );
              }, 3e3))
            : this.logger.info('No active DOM updates found, exiting');
        }
        attachBodyHider() {
          this.cssStyle || (this.cssStyle = this.generateBodyHiderStyles()),
            this.attachStyles(this.cssStyle),
            this.attachObserver(),
            A.b.leaveBreadcrumb('[Mutiny] Attached body hider'),
            this.timer.callAtElapsedTime(() => {
              this.isAttached()
                ? (A.b.leaveBreadcrumb(
                    '[Mutiny] Body hider load timeout executed'
                  ),
                  this.removeHider(!1, 'hide timeout exceeded'))
                : this.logger.debug(
                    'Hider timeout triggered, but hider was already removed'
                  );
            }, 3e3);
        }
        removeBodyHiderCSS() {}
        removeHider(e, t) {
          var n;
          null === (n = this.mutationObserver) ||
            void 0 === n ||
            n.disconnect(),
            this.isAttached() &&
              (this.logger.info(
                (null == t ? void 0 : t.length)
                  ? 'Removing hider because ' + t
                  : 'Removing hider'
              ),
              requestAnimationFrame(() =>
                document.documentElement.setAttribute(
                  this.mutinyLoadedAttribute,
                  e ? 'true' : 'false'
                )
              ));
        }
        isAttached() {
          return !document.documentElement.getAttribute(
            this.mutinyLoadedAttribute
          );
        }
        activeSelectors(e, t) {
          const n = e.audience_segments.flatMap((e) =>
            Object(c.c)(e.web_experiences, t)
          );
          return n.some((e) => e.experience_type === a.i.Redirect)
            ? ['body']
            : n
                .flatMap(({ dom_updates: e }) => e)
                .flatMap(({ selector: e, data: { hide_selector: t } }) => [
                  e,
                  ...(t ? [t] : []),
                ]);
        }
        generateHiderStyles(e) {
          const t = e.map((e) => `${this.hiderSelector} ${e}`),
            n = document.createElement('style');
          return (
            (n.id = 'mutiny-styles'),
            (n.nonce = Object(D.a)()),
            n.appendChild(
              document.createTextNode(
                t.join(', ') + ' { opacity: 0 !important; }'
              )
            ),
            n
          );
        }
        generateBodyHiderStyles() {
          const e = document.createElement('style');
          return (
            (e.id = 'mutiny-styles'),
            (e.nonce = Object(D.a)()),
            e.appendChild(
              document.createTextNode(
                this.hiderSelector + ' body { opacity: 0 !important; }'
              )
            ),
            e
          );
        }
        attachStyles(e) {
          document.head.appendChild(e), this.logger.info('Attached hider');
        }
        attachObserver() {
          (this.mutationObserver = new F.a(
            (e) =>
              this.cssStyle
                ? (this.logger.info('Mutations observed from head', e),
                  !!e.some(
                    ({ removedNodes: e }) =>
                      this.cssStyle && Array.from(e).indexOf(this.cssStyle) >= 0
                  ) &&
                    (this.logger.info('Style tag removed, re-applying'),
                    this.attachStyles(this.cssStyle),
                    !0))
                : (this.logger.error(
                    'Attempted to reattach hider styles, but they were not initialized'
                  ),
                  !1),
            { logger: this.logger }
          )),
            this.mutationObserver.observe(document.head, {
              subtree: !0,
              childList: !0,
            });
        }
      },
      U = n(33);
    var z = class {
        constructor() {
          (this.listeners = []),
            (this.onChange = (e) => {
              this.logger.info('Attaching change listener'),
                this.listeners.push(e);
            }),
            (this.logger = new s.a('state-change-handler'));
        }
        attach() {
          const e = window.history,
            { pushState: t, replaceState: n } = e;
          let r = Object.assign({}, window.location);
          this.logger.debug('Overriding window.history.pushState'),
            (e.pushState = (...n) => {
              const i = t.apply(e, n);
              return (
                this.urlChanged(r) &&
                  (this.logger.info(
                    'Calling listeners for window.history.pushState'
                  ),
                  this.executeListeners()),
                (r = Object.assign({}, window.location)),
                i
              );
            }),
            (e._mutinyPushState = t),
            this.logger.debug('Overriding window.history.replaceState'),
            (e.replaceState = (...t) => {
              const i = n.apply(e, t);
              return (
                this.urlChanged(r) &&
                  (this.logger.info(
                    'Calling listeners for window.history.replaceState'
                  ),
                  this.executeListeners()),
                (r = Object.assign({}, window.location)),
                i
              );
            }),
            (e._mutinyReplaceState = n),
            this.logger.debug('Adding popstate event listener'),
            window.addEventListener('popstate', () => {
              this.urlChanged(r) &&
                (this.logger.info('Calling listeners for window.onpopstate'),
                this.executeListeners()),
                (r = Object.assign({}, window.location));
            });
        }
        executeListeners() {
          try {
            this.listeners.forEach((e) => e());
          } catch (e) {
            A.b.notify(e);
          }
        }
        urlChanged(e) {
          const { pathname: t, hash: n } = e;
          return window.location.pathname !== t || window.location.hash !== n;
        }
      },
      H = n(28);
    const $ = ['scroll', 'resize'],
      Q = [
        'wheel',
        'keydown',
        'keyup',
        'mousedown',
        'mousemove',
        'touchstart',
        'touchmove',
        'click',
        'contextmenu',
      ];
    class V {
      constructor({
        timeIntervalEllapsedCallbacks: e = [],
        absoluteTimeEllapsedCallbacks: t = [],
        checkCallbacksIntervalMs: n = 100,
        browserTabInactiveCallbacks: r = [],
        idleCallbacks: i = [],
        stopTimerOnTabchange: o = !0,
        activeCallbacks: s = [],
        browserTabActiveCallbacks: a = [],
        idleTimeoutMs: c = 3e3,
      }) {
        (this.startTimer = () => {
          this.checkCallbackIntervalId || this.checkCallbacksOnInterval();
          const e = this.times[this.times.length - 1];
          (e && null === e.stop) ||
            (this.times.push({ start: performance.now(), stop: null }),
            (this.running = !0));
        }),
          (this.stopTimer = () => {
            0 !== this.times.length &&
              ((this.times[this.times.length - 1].stop = performance.now()),
              (this.running = !1));
          }),
          (this.addTimeIntervalEllapsedCallback = (e) => {
            this.timeIntervalEllapsedCallbacks.push(e);
          }),
          (this.addAbsoluteTimeEllapsedCallback = (e) => {
            this.absoluteTimeEllapsedCallbacks.push(e);
          }),
          (this.addBrowserTabInactiveCallback = (e) => {
            this.browserTabInactiveCallbacks.push(e);
          }),
          (this.addBrowserTabActiveCallback = (e) => {
            this.browserTabActiveCallbacks.push(e);
          }),
          (this.addIdleCallback = (e) => {
            this.idleCallbacks.push(e);
          }),
          (this.addActiveCallback = (e) => {
            this.activeCallbacks.push(e);
          }),
          (this.getTimeInMilliseconds = () =>
            this.times.reduce(
              (e, t) => (
                t.stop
                  ? (e += t.stop - t.start)
                  : (e += performance.now() - t.start),
                e
              ),
              0
            )),
          (this.isRunning = () => this.running),
          (this.isIdle = () => this.idle),
          (this.reset = () => {
            this.times = [];
          }),
          (this.destroy = () => {
            this.unregisterEventListeners(),
              this.checkCallbackIntervalId &&
                window.clearInterval(this.checkCallbackIntervalId);
          }),
          (this.onBrowserTabInactive = () => {
            this.isRunning() && this.stopTimerOnTabchange && this.stopTimer(),
              this.browserTabInactiveCallbacks.forEach((e) =>
                e(this.getTimeInMilliseconds())
              );
          }),
          (this.onBrowserTabActive = () => {
            this.isRunning() || this.startTimer(),
              this.browserTabActiveCallbacks.forEach((e) =>
                e(this.getTimeInMilliseconds())
              );
          }),
          (this.onBrowserActiveChange = () => {
            'visible' === document.visibilityState
              ? this.onBrowserTabActive()
              : this.onBrowserTabInactive();
          }),
          (this.onTimePassed = () => {
            this.absoluteTimeEllapsedCallbacks.forEach(
              ({ callback: e, pending: t, timeInMilliseconds: n }, r) => {
                t &&
                  n <= this.getTimeInMilliseconds() &&
                  (e(this.getTimeInMilliseconds()),
                  (this.absoluteTimeEllapsedCallbacks[r].pending = !1));
              }
            ),
              this.timeIntervalEllapsedCallbacks.forEach(
                ({ callback: e, timeInMilliseconds: t, multiplier: n }, r) => {
                  t <= this.getTimeInMilliseconds() &&
                    (e(this.getTimeInMilliseconds()),
                    (this.timeIntervalEllapsedCallbacks[r].timeInMilliseconds =
                      n(t)));
                }
              ),
              this.currentIdleTimeMs >= this.idleTimeoutMs && this.isRunning()
                ? ((this.idle = !0),
                  this.stopTimer(),
                  this.idleCallbacks.forEach((e) =>
                    e(this.getTimeInMilliseconds())
                  ))
                : (this.currentIdleTimeMs += this.checkCallbacksIntervalMs);
          }),
          (this.resetIdleTime = () => {
            this.idle && this.startTimer(),
              this.activeCallbacks.forEach((e) =>
                e(this.getTimeInMilliseconds())
              ),
              (this.idle = !1),
              (this.currentIdleTimeMs = 0);
          }),
          (this.registerEventListeners = () => {
            const e = { passive: !0 },
              t = Object.assign(Object.assign({}, e), { capture: !0 });
            document.addEventListener(
              'visibilitychange',
              this.onBrowserActiveChange
            );
            const n = Object(H.c)(this.resetIdleTime, 2e3, { trailing: !1 });
            $.forEach((e) => {
              window.addEventListener(e, n, t);
            }),
              Q.forEach((t) => document.addEventListener(t, n, e));
          }),
          (this.unregisterEventListeners = () => {
            document.removeEventListener(
              'visibilitychange',
              this.onBrowserActiveChange
            ),
              $.forEach((e) =>
                window.removeEventListener(e, this.resetIdleTime)
              ),
              Q.forEach((e) =>
                document.removeEventListener(e, this.resetIdleTime)
              );
          }),
          (this.checkCallbacksOnInterval = () => {
            this.checkCallbackIntervalId = window.setInterval(() => {
              this.onTimePassed();
            }, this.checkCallbacksIntervalMs);
          }),
          (this.running = !1),
          (this.times = []),
          (this.idle = !1),
          (this.currentIdleTimeMs = 0),
          (this.marks = {}),
          (this.measures = {}),
          (this.stopTimerOnTabchange = o),
          (this.browserTabActiveCallbacks = a),
          (this.browserTabInactiveCallbacks = r),
          (this.checkCallbacksIntervalMs = n),
          (this.idleTimeoutMs = c),
          (this.timeIntervalEllapsedCallbacks = e),
          (this.absoluteTimeEllapsedCallbacks = t),
          (this.idleCallbacks = i),
          (this.activeCallbacks = s),
          this.registerEventListeners();
      }
      mark(e) {
        this.marks[e] || (this.marks[e] = []),
          this.marks[e].push({ time: this.getTimeInMilliseconds() });
      }
      getMarks(e) {
        if (0 !== this.marks[e].length) return this.marks[e];
      }
      measure(e, t, n) {
        const r = this.marks[t],
          i = r[r.length - 1],
          o = this.marks[n],
          s = o[o.length - 1];
        this.measures[e] || (this.measures[e] = []),
          this.measures[e].push({
            duration: s.time - i.time,
            name: e,
            startTime: i.time,
          });
      }
      getMeasures(e) {
        if (this.measures[e] || 0 !== this.measures[e].length)
          return this.measures[e];
      }
    }
    var W = class {
        constructor() {
          (this.timer = new V({})), this.start();
        }
        start() {
          this.timer.startTimer();
        }
        stop() {
          this.timer.stopTimer();
        }
        restart() {
          this.timer.destroy(), (this.timer = new V({})), this.start();
        }
        isRunning() {
          return this.timer.isRunning();
        }
        getTimeInMilliseconds() {
          return this.timer.getTimeInMilliseconds();
        }
        callAtElapsedTime(e, t) {
          this.timer.addAbsoluteTimeEllapsedCallback({
            callback: e,
            timeInMilliseconds: t,
            pending: !0,
          });
        }
        callOnPageInactive(e) {
          this.timer.addBrowserTabInactiveCallback(e);
        }
        setMarker(e) {
          return this.timer.mark(e);
        }
      },
      J = n(8),
      K = n(6),
      G = n(13);
    class X {
      constructor(e) {
        (this.events = e),
          (this.impressionStore = this.emptyImpressionStore()),
          (this.logger = new s.a('local-impression-cache')),
          (this.impressionObject = null),
          (this.storage = Object(G.a)()),
          this.loadImpressions(),
          this.logger.info(
            `Finished initializing local impression cache with ${this.length()} records`
          );
      }
      getAndSetSessionNumber() {
        const e = Object(K.d)(K.a),
          t = e ? parseInt(e, 10) : NaN;
        e && this.logger.debug('Found session storage session number', e);
        const n = isNaN(t) ? 1 : t,
          r = this.impressionStore.sessionNumber;
        if (e && n === r) return this.setSessionNumber(n), n;
        this.logger.debug(
          'Session storage session number does not match impression store session number',
          r
        );
        const i = r + 1;
        return this.setSessionNumber(i), i;
      }
      setSessionNumber(e) {
        this.logger.debug('Setting session storage session number', e),
          Object(K.f)(K.a, e.toString(), 18e5),
          (this.impressionStore.sessionNumber = e),
          this.writeStorage(),
          this.events.trigger(a.h.ImpressionCacheUpdate, { sessionNumber: e });
      }
      storeImpression(e, t) {
        (this.impressionObject = this.buildImpression(e, t)),
          this.impressionObject &&
            (this.logger.debug(
              'Adding new impression to local impression cache'
            ),
            this.impressionStore.impressions.push(this.impressionObject),
            this.writeStorage(),
            this.events.trigger(a.h.ImpressionCacheUpdate, {
              impression: this.impressionObject,
            }));
      }
      storeQuestionnaireImpression(e) {
        const t = this.buildQuestionnaireImpression(e);
        t &&
          (this.logger.debug(
            'Adding new questionnaire impression to local impression cache'
          ),
          this.impressionStore.questionnaireImpressions.push(t),
          this.writeStorage(),
          this.events.trigger(a.h.ImpressionCacheUpdate, {
            questionnaireImpression: t,
          }));
      }
      flushLocalCache() {
        this.logger.debug('Clearing local impression cache'),
          (this.impressionStore = this.emptyImpressionStore()),
          this.storage.removeItem('_mutiny_impressions'),
          (this.impressionObject = null);
      }
      loadImpressions() {
        this.impressionStore = this.readStorage();
      }
      length() {
        return (
          this.impressionStore.impressions.length +
          this.impressionStore.questionnaireImpressions.length
        );
      }
      readStorage() {
        this.logger.debug('Loading local impression cache');
        const e = this.storage.getItem('_mutiny_impressions');
        return e ? this.parseImpressionStore(e) : this.emptyImpressionStore();
      }
      writeStorage() {
        this.logger.debug('Saving local impression cache'),
          this.storage.setItem(
            '_mutiny_impressions',
            JSON.stringify(this.impressionStore)
          );
      }
      buildImpression(e, t) {
        if (e && t.url) {
          const n = t.query || {},
            [r] = t.url.split('?', 2);
          return { query: n, token: e, url: r };
        }
        return null;
      }
      buildQuestionnaireImpression(e) {
        return null === this.impressionObject
          ? null
          : e && e.questionnaire && e.questionnaire.key
          ? Object.assign(Object.assign({}, this.impressionObject), {
              questionnaire: { key: e.questionnaire.key },
            })
          : void 0;
      }
      parseImpressionStore(e) {
        try {
          const t = JSON.parse(e);
          return Array.isArray(t)
            ? {
                impressions: this.parseRecords(
                  t,
                  this.parseImpression,
                  'impression'
                ),
                questionnaireImpressions: [],
                sessionNumber: 1,
              }
            : {
                impressions: this.parseRecords(
                  t.impressions || [],
                  this.parseImpression,
                  'impression'
                ),
                questionnaireImpressions: this.parseRecords(
                  t.questionnaireImpressions || [],
                  this.parseQuestionnaireImpression,
                  'questionnaire impression'
                ),
                sessionNumber: t.sessionNumber || 1,
              };
        } catch (e) {
          return (
            this.logger.info(
              'Failed to parse local storage impression cache; discarding'
            ),
            this.emptyImpressionStore()
          );
        }
      }
      parseRecords(e, t, n) {
        return (
          this.logger.info(`Found ${e.length} impressions in local ${n} cache`),
          Object(J.e)(
            e.reduce((e, n) => {
              const r = t(n);
              return (
                r
                  ? e.push(r)
                  : this.logger.debug(
                      'Failed to parse local impression cache record with input ' +
                        n
                    ),
                e
              );
            }, []),
            (e) => e.token
          )
        );
      }
      parseImpression(e) {
        return e.token && e.url
          ? { query: e.query || {}, token: e.token, url: e.url }
          : (A.b.notify('Tried to cache invalid impression value: ' + e), null);
      }
      parseQuestionnaireImpression(e) {
        if (!(e.token && e.url && e.questionnaire && e.questionnaire.key))
          return (
            A.b.notify(
              'Tried to cache invalid questionnaire impression value: ' + e
            ),
            null
          );
        return {
          query: e.query || {},
          questionnaire: { key: e.questionnaire.key },
          token: e.token,
          url: e.url,
        };
      }
      emptyImpressionStore() {
        return {
          impressions: [],
          questionnaireImpressions: [],
          sessionNumber: 0,
        };
      }
    }
    var Y = n(14),
      Z = n(11),
      ee = n(4);
    const te = 'query.' + q.b,
      ne = 'query.' + q.d,
      re = 'query.' + q.c,
      ie = 'client.mode';
    class oe {
      constructor(e, t, n, r, u) {
        var d, h;
        (this.config = e),
          (this.events = t),
          (this.localImpressionStore = n),
          (this.userDataStore = r),
          (this.personalizedClientModes = u),
          (this.bugsnagClient = A.b),
          (this.stateChangeHandler = new z()),
          (this.unloadCallbacks = []),
          (this.unloadListener = void 0),
          (this._isRedirecting = !1),
          (this.logger = new s.a('context')),
          (this.userDataStore = r),
          (this.isNewUser = this.userDataStore.isNewUser()),
          (this.visitorToken = this.userDataStore.getUserToken()),
          (this.sessionToken = this.userDataStore.getSessionToken()),
          (this.clientMode = this.userDataStore.getClientMode()),
          (this.preview = this.computePreview()),
          (this.highlightPersonalizations =
            this.computeHighlightPersonalizations()),
          (this.trackingDisabled = Object(ee.c)() || Boolean(this.preview)),
          (this.shouldRender = this.computeShouldRender()),
          this.userDataStore.set(ie, this.clientMode, { localStorage: !1 });
        const M = new W();
        (this.timer = M),
          (this.hider = new B(M)),
          (this.apiClient = new (class {
            constructor(e, t, n, r, o, c, u, l) {
              (this.apiKey = e),
                (this.localImpressionStore = n),
                (this.visitorToken = r),
                (this.preview = o),
                (this.doNotTrack = c),
                (this.trackingMode = l),
                (this.logger = new s.a('api-client')),
                (this.impressionToken = i()()),
                t.on(a.h.StateChange, () => {
                  (this.impressionToken = i()()),
                    this.logger.info(
                      'resetting impressionToken to',
                      this.impressionToken
                    );
                }),
                (this.requestScheduler = this.initializeRequestScheduler(u));
            }
            identify(e, t = {}) {
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : this.requestScheduler.track(j.Identify, {
                    data: t,
                    user_id: e,
                  });
            }
            segmentIdentify(e, t) {
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : this.requestScheduler.track(j.SegmentIdentify, {
                    anonymous_id: t,
                    user_id: e,
                  });
            }
            trackPreview() {
              return this.doNotTrack
                ? Promise.resolve()
                : this.requestScheduler.track(j.Preview, {});
            }
            trackImpression(e, t) {
              if (this.doNotTrack || Boolean(this.preview))
                return Promise.resolve();
              const n = {
                device_type: Object(o.a)(),
                impression_token: this.impressionToken,
                metadata: Object.assign(Object.assign({}, t), {
                  client_version: '3.1.29',
                  window_data: window.mutinyData,
                }),
                referrer: document.referrer,
                session_token: e,
                url: window.location.href,
                user_agent: navigator.userAgent,
              };
              return (
                this.localImpressionStore.storeImpression(
                  this.impressionToken,
                  Object.assign(Object.assign({}, n), {
                    query: Object(c.h)(window.location.search),
                  })
                ),
                this.requestScheduler.track(j.Impression, n)
              );
            }
            trackExperienceImpression({
              audienceSegment: e,
              campaignAccountId: t,
              experience: n,
              impressionType: r,
              selfOptimizingEventId: i,
            }) {
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : this.requestScheduler.track(j.ExperienceImpression, {
                    audience_segment_id: e && e.id,
                    campaign_account_id: t,
                    client_version: '3.1.29',
                    dom_update_group_id: n && n.dom_update_group_id,
                    impression_token: this.impressionToken,
                    impression_type: r,
                    self_optimizing_event_id: i,
                  });
            }
            trackQuestionnaireImpression({
              questionnaire: e,
              impressionType: t,
            }) {
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : (this.localImpressionStore.storeQuestionnaireImpression({
                    questionnaire: e,
                  }),
                  this.requestScheduler.track(j.QuestionnaireImpression, {
                    client_version: '3.1.29',
                    impression_token: this.impressionToken,
                    impression_type: t,
                    questionnaire_id: e.id,
                  }));
            }
            trackConversion({ conversionConfigurationId: e, formData: t }) {
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : this.requestScheduler.track(j.Conversion, {
                    client_version: '3.1.29',
                    conversion_configuration_id: e,
                    form_data: t,
                    impression_token: this.impressionToken,
                    hostname: window.location.hostname,
                  });
            }
            trackQuestionnaireResponse({
              questionnaire: e,
              answers: t,
              formValues: n,
            }) {
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : this.requestScheduler.track(j.QuestionnaireResponse, {
                    answers: t,
                    form_values: n,
                    impression_token: this.impressionToken,
                    questionnaire_id: e.id,
                  });
            }
            trackEvent({ eventType: e, metadata: t }) {
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : this.requestScheduler.track(j.ImpressionEvent, {
                    event_type: e,
                    impression_token: this.impressionToken,
                    metadata: t,
                  });
            }
            trackTime({ timeInSeconds: e }) {
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : this.requestScheduler.track(j.ImpressionTime, {
                    elapsed_time_in_ms: 1e3 * e,
                    impression_token: this.impressionToken,
                  });
            }
            trackMetric(e) {
              var { metricType: t, metricKey: n, tags: r } = e,
                i = p(e, ['metricType', 'metricKey', 'tags']);
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : (void 0 === r && (r = {}),
                  (r.client_version = '3.1.29'),
                  this.requestScheduler.track(
                    j.Metric,
                    Object.assign({ metric_key: n, metric_type: t, tags: r }, i)
                  ));
            }
            trackVisitorIdentification({ identificationType: e, value: t }) {
              return this.doNotTrack || Boolean(this.preview)
                ? Promise.resolve()
                : this.requestScheduler.track(j.VisitorIdentification, {
                    identification_type: e,
                    value: t,
                  });
            }
            flush(e = !1) {
              return this.requestScheduler.flush(e);
            }
            disableTracking() {
              this.doNotTrack = !0;
            }
            generateUrl(e) {
              const t = window.MUTINY_API_URL || 'https://api-v2.mutinyhq.io';
              switch (e) {
                case j.Identify:
                  return [t, C].join('/');
                case j.SegmentIdentify:
                  return [t, O].join('/');
                case j.VisitorIdentification:
                  return [t, T].join('/');
                case j.Preview:
                  return [t, g, this.impressionToken, v].join('/');
                case j.Impression:
                  return [t, g, this.impressionToken, m].join('/');
                case j.ExperienceImpression:
                  return [t, g, this.impressionToken, y].join('/');
                case j.Conversion:
                  return [t, g, this.impressionToken, b].join('/');
                case j.QuestionnaireImpression:
                  return [t, g, this.impressionToken, w].join('/');
                case j.QuestionnaireResponse:
                  return [t, g, this.impressionToken, k].join('/');
                case j.ImpressionEvent:
                  return [t, g, this.impressionToken, S].join('/');
                case j.ImpressionTime:
                  return [t, g, this.impressionToken, E].join('/');
                case j.Metric:
                  return [t, g, this.impressionToken, _].join('/');
              }
            }
            initializeRequestScheduler(e) {
              return (
                this.logger.debug(
                  'Initializing request scheduler with trackingMode',
                  this.trackingMode
                ),
                this.trackingMode === a.z.Batch
                  ? new l(this.apiKey, this.visitorToken, e)
                  : new f(this.apiKey, this.visitorToken, (e) =>
                      this.generateUrl(e)
                    )
              );
            }
          })(
            this.config.api_key,
            this.events,
            this.localImpressionStore,
            this.visitorToken,
            this.preview,
            Object(ee.c)(),
            M,
            this.config.tracking_mode
          )),
          (this.exporter = new L.b(
            this.apiClient,
            this.visitorToken,
            this.sessionToken,
            this.userDataStore,
            this.config,
            this.trackingDisabled,
            this.preview,
            this.clientMode
          )),
          (this.userDataClient = new I.b(
            this.config.api_key,
            this.config.company_token,
            this.visitorToken,
            this.sessionToken,
            this.userDataStore,
            this.exporter,
            this.localImpressionStore,
            this.config.campaign_query_param_keys,
            this.preview,
            this.hider
          )),
          (this.contentPlaylistClient = new x(
            this.config.api_key,
            this.config.company_token,
            this.visitorToken,
            this.sessionToken
          )),
          (this.shimQueue =
            null ===
              (h =
                null === (d = window.mutiny) || void 0 === d
                  ? void 0
                  : d.client) || void 0 === h
              ? void 0
              : h._queue),
          (this.publicInterface = new R.a(this.exporter, this.userDataStore)),
          this.configureBugsnag(),
          this.exposePublicInterface(),
          this.flushShimQueue(),
          this.attachUnloadListener(),
          this.stateChangeHandler.attach(),
          M.start();
      }
      isRedirecting() {
        return this._isRedirecting;
      }
      shouldExitBeforeUserDataFetch() {
        if (this.preview) return !1;
        const e = this.isWhitelistedHost(),
          t = this.userDataStore.getClientMode() !== a.b.AssetViewer;
        return Object(ee.d)() || (t && !e);
      }
      shouldExitAfterUserDataFetch() {
        if (this.preview) return !1;
        const e = this.userDataStore.get(I.a),
          t = this.userDataStore.get('user.ip_address'),
          n = t && this.config.blocked_ips.includes(t),
          r = this.isBlacklistedUrlParam();
        return (this.isNewUser && e) || n || r;
      }
      ensureShouldRender(e, t) {
        return this.shouldRender
          ? Promise.resolve(e())
          : (this.logger.debug(
              'Mutiny rendering is disabled' + (t ? '; ' + t : '')
            ),
            Promise.resolve());
      }
      onUnload(e) {
        this.unloadCallbacks.push(e);
      }
      setRedirecting(e) {
        this._isRedirecting = e;
      }
      configureBugsnag() {
        Object(A.a)({
          mutinyClient: {
            companySlug: this.config.company_slug,
            iteration: this.config.client_iteration,
          },
          visitor: { token: this.visitorToken },
        });
      }
      flushShimQueue() {
        const e = this.shimQueue;
        if (e)
          for (const t of Object.keys(e))
            for (const { args: n } of e[t]) this.publicInterface[t](...n);
      }
      exposePublicInterface() {
        (window.mutiny = window.mutiny || {}),
          (window.mutiny.attached = !0),
          (window.mutiny.client = this.publicInterface);
      }
      computePreview() {
        const e = this.userDataStore.get(te) || this.userDataStore.get(ne);
        return this.config.preview
          ? this.config.preview
          : e
          ? a.u.Live
          : void 0;
      }
      computeShouldRender() {
        return (
          !!this.computePreview() ||
          (this.clientMode === a.b.AssetViewer &&
            this.personalizedClientModes.includes(a.b.AssetViewer)) ||
          this.clientMode === a.b.Default
        );
      }
      computeHighlightPersonalizations() {
        const e = this.userDataStore.get(re);
        return !!this.preview && 'true' === e;
      }
      isWhitelistedHost() {
        return (
          !this.config.whitelisted_domains ||
          0 === this.config.whitelisted_domains.length ||
          this.config.whitelisted_domains.some((e) =>
            Object(c.d)(window.location.host, e)
          )
        );
      }
      isBlacklistedUrlParam() {
        return (
          void 0 !== this.config.blacklisted_query_params &&
          0 !== Object.keys(this.config.blacklisted_query_params).length &&
          Object(Z.d)(this.config.blacklisted_query_params).some(([e, t]) => {
            const n = this.userDataStore.get('query.' + e);
            return n && (0 === t.length || t.includes(n));
          })
        );
      }
      attachUnloadListener() {
        this.unloadListener ||
          ((this.unloadListener = () => {
            for (const e of this.unloadCallbacks) e();
          }),
          window.addEventListener('beforeunload', this.unloadListener));
      }
    }
    function se(e) {
      const t = e.config,
        n = new U.a(),
        r = new X(n),
        i = N(t, n, r),
        o = Object(Y.c)(e),
        s = [a.b.Default, ...(o ? [a.b.AssetViewer] : [])];
      return new oe(t, n, r, i, s);
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'b', function () {
        return i;
      }),
      n.d(t, 'd', function () {
        return o;
      });
    const r = { display: 'none' },
      i = {};
    t.c = class {
      constructor(e, t) {
        (this.originalStyles = {}),
          (this.hidden = !1),
          (this.element = e),
          t && (i[t] = this),
          this.hide(),
          (this.mutationObserver = new MutationObserver(() => {
            this.forEachReservedStyle((t) => {
              e.style[t] !== r[t] &&
                this.hidden &&
                ((this.originalStyles[t] = e.style[t]),
                this.element.style.setProperty(t, r[t], 'important'));
            });
          })),
          this.mutationObserver.observe(e, {
            attributes: !0,
            attributeFilter: ['style'],
          });
      }
      hide() {
        (this.hidden = !0),
          this.forEachReservedStyle((e) => {
            (this.originalStyles[e] = this.element.style[e]),
              this.element.style.setProperty(e, r[e], 'important');
          });
      }
      show() {
        (this.hidden = !1),
          this.forEachReservedStyle((e) => {
            var t;
            return this.element.style.setProperty(
              e,
              null !== (t = this.originalStyles[e]) && void 0 !== t ? t : ''
            );
          });
      }
      forEachReservedStyle(e) {
        for (const t of Object.keys(r)) e(t);
      }
    };
    const o = (e) => Object.entries(r).every(([t, n]) => e.style[t] === n);
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return i;
    }),
      n.d(t, 'b', function () {
        return o;
      }),
      n.d(t, 'a', function () {
        return s;
      }),
      n.d(t, 'd', function () {
        return a;
      });
    var r = n(7);
    function i(e, t = 'independent') {
      'legacy' !== t && s();
      const n = document.querySelectorAll(e);
      return 'legacy' !== t && a(), n;
    }
    function o(e, t = 'independent') {
      var n, r;
      return null !==
        (r = null === (n = i(e, t)) || void 0 === n ? void 0 : n[0]) &&
        void 0 !== r
        ? r
        : null;
    }
    function s() {
      r.a.getPersonalizations().forEach((e) => {
        e.temporarilyRemove();
      });
    }
    function a() {
      r.a.getPersonalizations().forEach((e) => {
        e.placePersonalization();
      });
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return b;
    }),
      n.d(t, 'c', function () {
        return w;
      }),
      n.d(t, 'a', function () {
        return k;
      });
    var r = n(1),
      i = n(23),
      o = n(0),
      s = n(8),
      a = n(14),
      c = n(5),
      u = n(9),
      l = n(12);
    var d = n(29),
      h = n(10),
      f = n(30);
    class p {
      constructor(e, t, n, i, o) {
        (this.audienceSegment = e),
          (this.webExperience = t),
          (this.mutinyClientData = n),
          (this.context = i),
          (this.personalizeType = o),
          (this.logger = new r.a('questionnaire-render')),
          (this.preactContainerId = 'mutiny-preact-' + this.webExperience.id),
          (this.stylesheet = this.mutinyClientData.stylesheets.find(
            ({ id: e }) => e === this.webExperience.component_stylesheet_id
          )),
          (this.stylesheetElementId =
            this.stylesheet && 'mutiny-stylesheet-' + this.stylesheet.id);
      }
      attach() {
        return new Promise((e) => {
          requestAnimationFrame(() => {
            Promise.all([n.e(1), n.e(3)])
              .then(n.bind(null, 108))
              .then(({ default: t }) => {
                n.e(4)
                  .then(n.bind(null, 70))
                  .then(({ h: n, render: r }) => {
                    let i = document.getElementById(this.preactContainerId);
                    if (
                      (i ||
                        ((i = document.createElement('div')),
                        i.setAttribute('id', this.preactContainerId),
                        document.body.prepend(i)),
                      this.stylesheet &&
                        this.stylesheetElementId &&
                        !document.getElementById(this.stylesheetElementId))
                    ) {
                      const e = document.createElement('style');
                      (e.nonce = Object(l.a)()),
                        e.setAttribute('id', this.stylesheetElementId),
                        (e.innerHTML = this.stylesheet.stylesheet),
                        document.head.appendChild(e),
                        this.logger.info('Attaching component stylesheet', e);
                    }
                    return (
                      this.webExperience.questionnaire &&
                        (this.logger.debug(
                          'Rendering component',
                          this.webExperience.questionnaire
                        ),
                        r(
                          n(t, {
                            audienceSegment: this.audienceSegment,
                            context: this.context,
                            personalizeType: this.personalizeType,
                            questionnaire: this.webExperience.questionnaire,
                            userData: this.context.userDataStore,
                            webExperience: this.webExperience,
                          }),
                          i
                        ),
                        this.attachQuestionnaireCompleteHandler()),
                      e(!1)
                    );
                  });
              });
          });
        });
      }
      teardown() {
        const e = document.getElementById(this.preactContainerId);
        if ((e && e.remove(), this.stylesheetElementId)) {
          const e = document.getElementById(this.stylesheetElementId);
          e && e.remove();
        }
      }
      attachQuestionnaireCompleteHandler() {
        document.addEventListener('mutiny:questionnaire-complete', () => {
          const e = Object(i.b)(
            this.mutinyClientData.audience_segments,
            'person.questionnaire.' + this.webExperience.questionnaire.key
          );
          if (e.length > 0)
            return (
              this.logger.info('Found dependent segments to re-evaluate', e),
              k(
                w(e, this.context, { alwaysEvaluate: !0 }),
                this.mutinyClientData,
                this.context
              )
            );
          this.logger.info('Found no dependent segments');
        });
      }
    }
    var g = n(53),
      m = (n(17), n(39)),
      v = n(38);
    function y(e, t, n, i, s) {
      const a = new r.a('page-render'),
        c = Object(d.a)(e, n.userDataStore, i),
        y = c === o.t.Personalized;
      let b;
      const w = e.experience_type === o.i.Redirect && e.redirect_url;
      if (e.experience_type === o.i.Render) {
        const t = new f.a(
          y,
          e.dom_updates.map(
            (e) => new m.a(e, n.userDataStore, n.exporter, n.preview)
          ),
          [],
          'update-renderer'
        );
        (b = t.renderAsync()),
          a.info('Attaching state change event listener'),
          document.addEventListener(
            o.h.StateChange,
            () => {
              a.info('Received state change event, tearing down DOMRenderer'),
                t.teardown();
            },
            { once: !0 }
          );
      } else if (e.experience_type === o.i.Questionnaire && e.questionnaire)
        if (2 === e.questionnaire.version) {
          const r = new p(t, e, s, n, c);
          (b = r.attach()),
            document.addEventListener(
              o.h.StateChange,
              () => {
                a.info(
                  'Received state change event, tearing down QuestionnaireRenderer'
                ),
                  r.teardown();
              },
              { once: !0 }
            );
        } else b = Object(g.renderQuestionnaire)([e.questionnaire], s, n, c);
      else b = w ? Promise.resolve(!0) : Promise.resolve(!1);
      return (
        b.then((r) => {
          if (
            (!i &&
              r &&
              n.exporter.track(u.a.ExperienceImpression, {
                audienceSegment: t,
                campaignAccountId: n.userDataStore.get(
                  t.campaign_slug + '.campaign_account_id'
                ),
                experience: e,
                impressionType: c,
              }),
            w && y)
          ) {
            const t = Object(h.c)(e.redirect_url, n.userDataStore);
            a.info('Executing redirect to ' + t), window.location.replace(t);
          }
          y &&
            (function (e, t) {
              if (
                e.custom_javascript &&
                !document.getElementById('mutiny-custom-javascript')
              ) {
                const n = document.createElement('script');
                (n.nonce = Object(l.a)()),
                  n.setAttribute('type', 'text/javascript'),
                  n.setAttribute('id', 'mutiny-custom-javascript'),
                  (n.innerHTML = e.custom_javascript),
                  document.head.appendChild(n),
                  t.info('Attaching global custom javascript');
              }
            })(e, a);
        }),
        Object(v.b)({ experience: e, audienceSegment: t }),
        b
      );
    }
    function b(e, t, n) {
      return k(w(e.audience_segments, t, { async: n }), e, t);
    }
    function w(e, t, { async: n, alwaysEvaluate: o }) {
      const { preview: s } = t,
        u = new r.a('attach-experiences');
      u.info('Evaluating audienceSegments', e);
      const { activeSegments: l } = Object(i.a)(
        { audienceSegments: e, userDataStore: t.userDataStore },
        o
      );
      l.length > 0 && u.info('Found activeSegments', l);
      return l.reduce(
        (e, r) =>
          e.concat(
            Object(c.c)(r.web_experiences, s)
              .filter((e) => void 0 === n || n === e.async)
              .map((e) => ({ audienceSegment: r, experience: e }))
              .filter((e) => Object(a.a)(e, t.clientMode))
          ),
        []
      );
    }
    function k(e, t, n) {
      const { preview: i } = n,
        a = new r.a('attach-experiences');
      e.length > 0
        ? a.info('Found activeSegments for URL', e)
        : a.info('Did not find any active segments for URL', e);
      const c = (e, t) => e.experience.priority - t.experience.priority,
        u = e
          .filter(
            ({
              experience: { global: e },
              audienceSegment: { campaign_slug: t },
            }) => !e && t
          )
          .sort(c),
        l = e.filter(
          ({
            experience: { global: e },
            audienceSegment: { campaign_slug: t },
          }) => !e && !t
        ),
        d = l
          .filter(
            ({ experience: { experience_type: e } }) => e === o.i.Redirect
          )
          .sort(c),
        h = l
          .filter(
            ({ experience: { experience_type: e, questionnaire: t } }) =>
              e === o.i.Questionnaire &&
              t &&
              t.questionnaire_type !== o.x.ExitIntentModal
          )
          .sort(c),
        f = l
          .filter(
            ({ experience: { experience_type: e, questionnaire: t } }) =>
              e === o.i.Questionnaire &&
              t &&
              t.questionnaire_type === o.x.ExitIntentModal
          )
          .sort(c),
        p = e.filter(
          ({ experience: { questionnaire: e, global: t } }) =>
            t &&
            (0 === h.length ||
              (null == e ? void 0 : e.questionnaire_type) !==
                h[0].experience.questionnaire.questionnaire_type) &&
            (0 === f.length ||
              (null == e ? void 0 : e.questionnaire_type) !==
                f[0].experience.questionnaire.questionnaire_type)
        ),
        g = l
          .filter(({ experience: { experience_type: e } }) => e === o.i.Render)
          .sort(c);
      e.length > 0 &&
        (a.info('campaignSegments', u),
        a.info('redirectSegments', d),
        a.info('renderSegments', g),
        a.info('questionnaireSegments', h),
        a.info('exitIntentSegments', f),
        a.info('concurrentSegments', p));
      let m = [];
      return (
        u.length > 0
          ? (m = [u[0], ...p])
          : d.length > 0
          ? ((m = [d[0]]), n.setRedirecting(!0))
          : (m = [g[0], h[0], f[0], ...p].filter(s.c)),
        m.length > 0
          ? a.info('Found segmentsToRender', m)
          : a.info('Did not find any segmentsToRender', m),
        Promise.all(
          m.map(({ experience: e, audienceSegment: r }) => y(e, r, n, i, t))
        ).then((e) => e.every(s.c))
      );
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return s;
    }),
      n.d(t, 'b', function () {
        return a;
      });
    var r = n(19),
      i = n(16),
      o = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      };
    function s({ userDataStore: e, audienceSegments: t }, n) {
      let s;
      const a = e.get(r.b),
        c = e.get(r.c);
      return (
        (s =
          c && !n
            ? t.map((e) => {
                var { web_experiences: t } = e,
                  n = o(e, ['web_experiences']);
                return Object.assign(Object.assign({}, n), {
                  web_experiences: t.filter(
                    ({ variation_key: e }) => String(e) === String(c)
                  ),
                });
              })
            : a && !n
            ? t.map((e) => {
                var { web_experiences: t } = e,
                  n = o(e, ['web_experiences']);
                return Object.assign(Object.assign({}, n), {
                  web_experiences: t.filter(
                    ({ id: e }) => String(e) === String(a)
                  ),
                });
              })
            : t
                .filter(({ condition: t }) => Object(i.b)(t, e))
                .map((t) => {
                  var { web_experiences: n } = t,
                    r = o(t, ['web_experiences']);
                  return Object.assign(Object.assign({}, r), {
                    web_experiences: n.filter(({ condition: t }) =>
                      Object(i.b)(t, e)
                    ),
                  });
                })),
        { activeSegments: s }
      );
    }
    function a(e, t) {
      return e.filter((e) =>
        Boolean(
          e.web_experiences.find((e) =>
            Boolean((e.data_dependencies || []).find((e) => e.startsWith(t)))
          )
        )
      );
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'e', function () {
      return c;
    }),
      n.d(t, 'd', function () {
        return l;
      }),
      n.d(t, 'c', function () {
        return d;
      }),
      n.d(t, 'b', function () {
        return h;
      }),
      n.d(t, 'a', function () {
        return f;
      });
    var r = n(3),
      i = n(0),
      o = n(12),
      s = n(11),
      a = n(5);
    const c = (e, t) => ({
        assetCtaText: e.asset.cta_text,
        assetDescription: e.asset.description,
        assetId: e.asset.id,
        assetImageUrl: e.asset.image_url,
        assetTitle: e.asset.title,
        assetUrl: u(e.asset.url, t),
        eventId: e.event_id,
      }),
      u = (e, t) =>
        Object(a.b)(e, {
          [r.a]: i.b.AssetViewer,
          [r.i]: null == t ? void 0 : t.sessionToken,
          [r.j]: null == t ? void 0 : t.visitorToken,
        }),
      l = () => {
        var e;
        window.parent !== window &&
          window.parent.postMessage(
            {
              type: i.h.AssetViewerLoaded,
              height:
                (null === (e = document.body) || void 0 === e
                  ? void 0
                  : e.clientHeight) || 0,
            },
            '*'
          );
      },
      d = () => {
        window.setInterval(l, 1e4);
      },
      h = () => {
        const e = document.createElement('style');
        (e.nonce = Object(o.a)()),
          (e.innerHTML =
            '\n    body::-webkit-scrollbar {\n      display: none;\n    };\n\n    body {\n      overflow-style: none;\n      scrollbar-width: none;\n    };\n  '),
          Object(s.b)(document, 'documentElement').then((t) =>
            t.appendChild(e)
          );
      },
      f = () => {
        const e = document.createElement('base');
        e.target = '_parent';
        let t = !1;
        Object(s.b)(document, 'head').then((n) => {
          t || ((t = !0), n.appendChild(e));
        }),
          Object(s.b)(document, 'body').then((n) => {
            t || ((t = !0), n.appendChild(e));
          });
      };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return i;
    }),
      n.d(t, 'a', function () {
        return o;
      }),
      n.d(t, 'b', function () {
        return a;
      }),
      n.d(t, 'd', function () {
        return c;
      });
    var r = n(0);
    function i(e, t, n, r) {
      let i = !1;
      e.preventDefault();
      const o = t()
        .then(() => {
          i || ((i = !0), n(e));
        })
        .catch(() => {
          i || n(e);
        });
      return (
        setTimeout(() => {
          i || ((i = !0), n(e));
        }, r),
        o
      );
    }
    function o(e) {
      const t = (n) => {
        (function (e) {
          return (
            e instanceof MessageEvent &&
            e.data &&
            e.data.type === r.h.AssetViewerOpened
          );
        })(n) && (e.exporter.page(), window.removeEventListener('message', t));
      };
      window.addEventListener('message', t);
    }
    let s;
    function a() {
      if (s) return s;
      const e = new Set([
        'click',
        'dblclick',
        'keydown',
        'keypress',
        'keyup',
        'scroll',
      ]);
      return (
        [
          HTMLElement,
          HTMLFormElement,
          HTMLInputElement,
          HTMLMediaElement,
          HTMLVideoElement,
          HTMLCanvasElement,
          HTMLSelectElement,
        ].forEach((t) => {
          Object.keys(t.prototype)
            .filter((e) => e.startsWith('on'))
            .forEach((t) => e.add(t.slice(2)));
        }),
        (s = Array.from(e.values())),
        s
      );
    }
    let c = !1;
    try {
      window.addEventListener(
        'test',
        () => {},
        Object.defineProperty({}, 'passive', {
          get() {
            c = { passive: !0 };
          },
        })
      );
    } catch (e) {}
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return c;
    }),
      n.d(t, 'b', function () {
        return u;
      });
    n(40);
    var r = n(2),
      i = n(9),
      o = n(1),
      s = n(0);
    const a = { referrer: '' },
      c = 'user_data_failed';
    class u {
      constructor(e, t, n, r, i, s, a, c, u, l) {
        (this.apiKey = e),
          (this.companyToken = t),
          (this.visitorToken = n),
          (this.sessionToken = r),
          (this.userDataStore = i),
          (this.exporter = s),
          (this.localImpressionStore = a),
          (this.campaignQueryParamKeys = c),
          (this.preview = u),
          (this.hider = l),
          (this.syncLogger = new o.a('user-data-client-sync')),
          (this.asyncLogger = new o.a('user-data-client-async'));
      }
      getAsyncUserData() {
        return this.fetchUserData(this.asyncLogger, !0)
          .then((e) => (e.ok ? e.json() : {}))
          .then((e) => (this.userDataStore.setBulk(e), e));
      }
      getUserData() {
        return this.fetchUserData(this.syncLogger, !1)
          .then((e) => {
            const t = e.headers.get('x-cache'),
              n = t && t.includes('MISS');
            return e.ok
              ? e
                  .json()
                  .then(
                    (e) => (
                      n
                        ? (this.localImpressionStore.flushLocalCache(),
                          this.localImpressionStore.setSessionNumber(
                            this.getSessionNumber(e) || 1
                          ))
                        : this.getSessionNumber(e) &&
                          delete e.person.behavior.session_number,
                      e
                    )
                  )
              : { [c]: !0 };
          })
          .then(
            Object(r.d)(
              (e) => (
                this.userDataStore.setBulk(e),
                (this.preview !== s.u.Editor && this.preview !== s.u.Preview) ||
                  (window.__mutiny &&
                    window.__mutiny.preview_data &&
                    this.userDataStore.setBulk(window.__mutiny.preview_data)),
                e
              )
            )
          )
          .catch((e) => {
            throw (
              (this.hider.removeHider(!1, 'user data request failed'),
              this.userDataStore.set(c, 'true'),
              e)
            );
          });
      }
      fetchUserData(e, t) {
        e.info('Fetching user data');
        const n = performance.now(),
          o = `[Mutiny-${t ? 'async' : 'sync'}]`;
        return (
          r.b.leaveBreadcrumb(o + ' Loading user-data'),
          fetch(this.getUrl(t), a)
            .then(
              Object(r.d)((a) => {
                t || this.checkForTimeout(e);
                const c = a.headers.get('x-cache'),
                  u = c && c.includes('MISS') ? 'miss' : 'hit',
                  l = a.headers.get('x-continent-code'),
                  d = a.headers.get('x-country-code'),
                  h = {
                    cdn_client_connection_speed:
                      a.headers.get('x-connection-speed') || 'UNKNOWN',
                    cdn_client_continent: l || 'UNKNOWN',
                    cdn_client_country_code: d || 'UNKNOWN',
                    cdn_edge_data_center:
                      a.headers.get('x-edge-datacenter') || 'UNKNOWN',
                    cdn_edge_region:
                      a.headers.get('x-edge-region') || 'UNKNOWN',
                  },
                  f = Object.assign(
                    {
                      async: t.toString(),
                      cdn_status: u,
                      status: a.status.toString(),
                    },
                    h
                  );
                this.exporter.track(i.a.Metric, {
                  metricKey: 'client.user_data.fetch',
                  metricType: s.p.Increment,
                  tags: f,
                }),
                  this.exporter.track(i.a.Metric, {
                    metricKey: 'client.user_data.fetch.time',
                    metricType: s.p.Timing,
                    tags: f,
                    value: performance.now() - n,
                  });
                const p =
                  performance.getEntriesByType &&
                  performance
                    .getEntriesByType('resource')
                    .find((e) =>
                      e.name.startsWith('https://client-registry.mutinycdn.com')
                    );
                return (
                  p &&
                    this.exporter.track(i.a.Metric, {
                      metricKey: 'client.bundle.fetch.time',
                      metricType: s.p.Timing,
                      tags: h,
                      value: p.duration,
                    }),
                  a.ok
                    ? (e.info('User data loaded successfully'),
                      r.b.leaveBreadcrumb(o + ' User data loaded'),
                      this.exporter.track(i.a.Metric, {
                        metricKey: 'client.user_data.fetch.success',
                        metricType: s.p.Increment,
                        tags: f,
                      }),
                      a)
                    : (e.info('User data failed'),
                      r.b.leaveBreadcrumb(`${o} User data fail ${a.status}`),
                      this.exporter.track(i.a.Metric, {
                        metricKey: 'client.user_data.fetch.failure',
                        metricType: s.p.Increment,
                        tags: f,
                      }),
                      a)
                );
              })
            )
            .catch((n) => {
              throw (
                (e.info('Fetch failure', n),
                this.exporter.track(i.a.Metric, {
                  metricKey: 'client.user_data.fetch.network_error',
                  metricType: s.p.Increment,
                  tags: { async: t.toString() },
                }),
                n)
              );
            })
        );
      }
      getUrl(e) {
        const t = this.getParams(e);
        return `${[
          window.MUTINY_USER_DATA_URL || 'https://user-data.mutinycdn.com',
          'personalize/user_data',
          this.companyToken + '.json',
        ].join('/')}?${Object.keys(t)
          .map((e) => `${e}=${t[e]}`)
          .join('&')}`;
      }
      getParams(e) {
        const t = {
          async: e,
          session_token: this.sessionToken,
          token: this.apiKey,
          visitor_token: this.visitorToken,
        };
        let n;
        return (
          this.campaignQueryParamKeys.find((e) =>
            Boolean((n = this.userDataStore.get('query.' + e)))
          ),
          n && (t.m_token = n),
          (this.preview !== s.u.Editor && this.preview !== s.u.Preview) ||
            (t.preview = 'true'),
          t
        );
      }
      getSessionNumber(e) {
        if (
          e.person &&
          e.person.behavior &&
          void 0 !== e.person.behavior.session_number
        )
          return e.person.behavior.session_number;
      }
      checkForTimeout(e) {
        document.documentElement.getAttribute('data-mutiny-loaded') &&
          (this.exporter.track(i.a.Metric, {
            metricKey: 'client.user_data.fetch.timed_out',
            metricType: s.p.Increment,
          }),
          e.info('Load timed out before user data finished'));
      }
    }
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'c', function () {
        return i;
      }),
      n.d(t, 'a', function () {
        return o;
      }),
      n.d(t, 'd', function () {
        return s;
      });
    const r = (e, t = 50) => {
        let n = null;
        return (...r) => {
          null !== n && clearTimeout(n),
            null === n
              ? ((n = window.setTimeout(() => {}, t)), e(...r))
              : (n = window.setTimeout(() => {
                  (n = null), e(...r);
                }, t));
        };
      },
      i = (e, t = 50, n) => {
        let r = null,
          i = null;
        const o =
          void 0 === (null == n ? void 0 : n.trailing) ||
          (null == n ? void 0 : n.trailing);
        return (...n) => {
          const s = Date.now();
          r || ((i = s), e(...n));
          const a = t - (s - (i || 0));
          a <= 0 || a > t
            ? (r && (window.clearTimeout(r), (r = null)), (i = s), e(...n))
            : o && (r = window.setTimeout(() => e(...n), a));
        };
      },
      o =
        (e, ...t) =>
        (...n) => {
          const r = [...t, ...n];
          return e(...r);
        },
      s = (e, t, n = 1e3) => {
        for (let r = 0; r < n; r++) {
          if (!e()) return null;
          t();
        }
      };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return u;
    }),
      n.d(t, 'b', function () {
        return l;
      });
    var r = n(2),
      i = n(3),
      o = n(0),
      s = n(1),
      a = n(10),
      c = n(28);
    const u = (e, t, n) => {
      const a = new s.a('personalize');
      if (n)
        return (
          r.b.leaveBreadcrumb('Personalized: 1'),
          a.info('Personalize: ', o.t.Personalized),
          a.info('Because of preview mode'),
          o.t.Personalized
        );
      if (t.get(i.f))
        return (
          r.b.leaveBreadcrumb('Personalized: 5'),
          a.info('Personalize: ', o.t.Personalized),
          a.info('Because personalize store override is set'),
          o.t.Personalized
        );
      return Number(e.hold_out) > Number(t.get(i.g))
        ? (r.b.leaveBreadcrumb('Personalized: 6'),
          a.info('Personalize: ', o.t.Personalized),
          a.info(
            'Because there are DOM Updates to show, and user is greater than hold out percentage'
          ),
          o.t.Personalized)
        : (r.b.leaveBreadcrumb('Personalized: 7'),
          a.info('Personalize: ', o.t.Control),
          a.info(
            'Because there are DOM Updates to show, and user is lower than hold out percentage'
          ),
          o.t.Control);
    };
    function l(e) {
      const t = (e) => {
        if (!e) return [];
        if ('string' == typeof e) {
          const t = [],
            n = new RegExp(a.a);
          let r = n.exec(e);
          return (
            Object(c.d)(
              () => !!r,
              () => {
                t.push(r[1]), (r = n.exec(e));
              }
            ),
            t
          );
        }
        return 'object' == typeof e
          ? Object.values(e).flatMap((e) => t(e))
          : [];
      };
      return new Set(t(e));
    }
  },
  function (e, t, n) {
    'use strict';
    var r = n(2),
      i = n(1),
      o = n(36);
    const s = { characterData: !0, childList: !0, subtree: !0 };
    t.a = class {
      constructor(e, t, n, r = 'update-renderer') {
        (this.personalize = e),
          (this.domUpdates = t),
          (this.domEvents = n),
          (this.type = r),
          (this.listeners = []),
          (this.logger = new i.a(r));
      }
      get isUpdateRenderer() {
        return 'update-renderer' === this.type;
      }
      onRender(e) {
        this.logger.info('attaching renderListener', e), this.listeners.push(e);
      }
      renderAsync() {
        return (
          this.logger.info(
            'renderAsync called, queuing requestAnimationFrame with',
            this.domUpdates
          ),
          new Promise((e) => {
            requestAnimationFrame(() => {
              this.logger.info('requestAnimationFrame executing'),
                this.render(),
                this.attachBodyObserver(),
                e(!0);
            });
          })
        );
      }
      render() {
        return Object(r.c)(() => {
          this.logger.info('Starting DOMRenderer render'),
            document.body &&
              this.personalize &&
              this.domUpdates.forEach((e) => e.render()),
            this.domEvents.forEach((e) => e.setup()),
            this.listeners.forEach((e) => {
              this.logger.info('Running render callbacks'), e();
            });
          const e = this.domUpdates.filter((e) => e.isRendered()),
            t = this.domUpdates.filter((e) => !e.shouldRender()),
            n = this.domUpdates.filter(
              (e) => e.shouldRender() && !e.isRendered()
            );
          return (
            this.isUpdateRenderer &&
              document.dispatchEvent(
                new CustomEvent('mutiny:dom-renderer:complete', {
                  detail: {
                    renderedRecords: e.map((e) => e.record),
                    unrenderedRecords: n.map((e) => e.record),
                  },
                })
              ),
            this.logger.info(
              'Finished DOMRenderer render. Rendered elements: ',
              e
            ),
            this.logger.info(
              'Finished DOMRenderer render. Skipped elements: ',
              t
            ),
            this.logger.info(
              'Finished DOMRenderer render. Missing elements: ',
              n
            ),
            e
          );
        });
      }
      teardown() {
        this.logger.info('Tearing down DOMRenderer'),
          this.observer && this.observer.disconnect(),
          this.domUpdates.forEach((e) => e.teardown()),
          this.domEvents.forEach((e) => e.teardown());
      }
      attachBodyObserver() {
        document.body
          ? (this.logger.info(
              'attaching MutationObserver to document.body',
              document.body
            ),
            this.observer
              ? this.observer.disconnect()
              : (this.observer = new o.a(
                  (e) => {
                    const t = e.every(
                      ({ target: e, addedNodes: t, removedNodes: n }) => {
                        const r = e,
                          i = Array.from(t).concat(Array.from(n)),
                          o = (e) => {
                            var t;
                            return (
                              !!(null === (t = e.dataset) || void 0 === t
                                ? void 0
                                : t.mutiny) || e.isMutinyElement
                            );
                          };
                        return (
                          o(r) ||
                          (i.length > 0 &&
                            i.every((e) => e instanceof HTMLElement && o(e)))
                        );
                      }
                    );
                    return this.isUpdateRenderer && t
                      ? (this.logger.info(
                          'Ignoring mutations from Mutiny client',
                          e
                        ),
                        !1)
                      : (this.logger.info(
                          'Mutation observed from DOMRenderer',
                          e
                        ),
                        this.domUpdates.forEach((e) => {
                          !e.isOriginalPresent() &&
                            e.isRendered() &&
                            e.teardown();
                        }),
                        this.render(),
                        !0);
                  },
                  { callbackLimit: 200, logger: this.logger }
                )),
            this.observer.observe(document.body, s))
          : (this.logger.info('document.body is null, re-enqueuing'),
            requestAnimationFrame(() => this.attachBodyObserver()));
      }
      isListening() {
        var e;
        return Boolean(
          null === (e = this.observer) || void 0 === e ? void 0 : e.connected
        );
      }
    };
  },
  function (e, t, n) {
    var r = n(43),
      i = n(44);
    e.exports = function (e, t, n) {
      var o = (t && n) || 0;
      'string' == typeof e &&
        ((t = 'binary' === e ? new Array(16) : null), (e = null));
      var s = (e = e || {}).random || (e.rng || r)();
      if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t))
        for (var a = 0; a < 16; ++a) t[o + a] = s[a];
      return t || i(s);
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return o;
    }),
      n.d(t, 'a', function () {
        return s;
      });
    const r =
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      i =
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    function o() {
      const e = navigator.userAgent || navigator.vendor;
      return r.test(e) || i.test(e.substr(0, 4));
    }
    function s() {
      return o() ? 'mobile' : 'desktop';
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    });
    var r = n(1);
    class i {
      constructor() {
        this.logger = new r.a('event-bus');
      }
      on(e, t) {
        document.addEventListener(e, t);
      }
      off(e, t) {
        document.removeEventListener(e, t);
      }
      trigger(e, t = {}) {
        this.logger.info(`Dispatching '${e}' event`),
          document.dispatchEvent(new CustomEvent(e, { detail: t }));
      }
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    });
    var r = n(7);
    const i = globalThis.IntersectionObserver,
      o = [];
    class s extends i {
      constructor(e, t) {
        super(s.wrappedCallback(e), t),
          (this.targets = new Set()),
          o.push(this);
      }
      observe(e) {
        if (!(e instanceof HTMLElement))
          return this.targets.add(e), super.observe(e);
        const t = r.a.getClonedElement(e);
        return (
          this.targets.add(null != t ? t : e), super.observe(null != t ? t : e)
        );
      }
      unobserve(e, t = !1) {
        if (!(e instanceof HTMLElement) || t)
          return this.targets.delete(e), super.unobserve(e);
        const n = r.a.getClonedElement(e);
        return (
          this.targets.delete(null != n ? n : e),
          super.unobserve(null != n ? n : e)
        );
      }
      static wrappedCallback(e) {
        return (t, n) => {
          const i = t.map((e) => {
            if (!(e.target instanceof HTMLElement)) return e;
            const t = r.a.getOriginalElement(e.target);
            return t ? Object.assign(Object.assign({}, e), { target: t }) : e;
          });
          e(i, n);
        };
      }
    }
    globalThis.IntersectionObserver = s;
  },
  function (e, t, n) {
    'use strict';
    t.a = function (e) {
      var t = this.constructor;
      return this.then(
        function (n) {
          return t.resolve(e()).then(function () {
            return n;
          });
        },
        function (n) {
          return t.resolve(e()).then(function () {
            return t.reject(n);
          });
        }
      );
    };
  },
  function (e, t, n) {
    'use strict';
    var r = n(9),
      i = n(0);
    t.a = class {
      constructor(e, t) {
        (this.callback = e),
          (this.connected = !1),
          (this.callbackCount = 0),
          (this.firstCallbackAt = void 0),
          (this.observer = new MutationObserver(
            this.wrappedCallback.bind(this)
          )),
          (this.callbackLimit =
            void 0 === (null == t ? void 0 : t.callbackLimit)
              ? 100
              : t.callbackLimit),
          (this.exporter = null == t ? void 0 : t.exporter),
          (this.domUpdateId = null == t ? void 0 : t.domUpdateId),
          (this.logger = null == t ? void 0 : t.logger);
      }
      observe(e, t) {
        var n;
        (this.connected = !0),
          null === (n = this.logger) ||
            void 0 === n ||
            n.info('Observing mutations on new node', e),
          this.observer.observe(e, t || {});
      }
      disconnect() {
        var e;
        (this.connected = !1),
          null === (e = this.logger) ||
            void 0 === e ||
            e.info('Unsubscribing mutation observer from new changes'),
          this.observer.disconnect();
      }
      takeRecords() {
        return this.observer.takeRecords();
      }
      wrappedCallback(e) {
        var t, n, o;
        if (this.connected)
          return (
            (void 0 === this.firstCallbackAt ||
              performance.now() - this.firstCallbackAt >= 1e3) &&
              ((this.firstCallbackAt = performance.now()),
              (this.callbackCount = 0)),
            this.callback(e, this.observer) &&
              ((this.callbackCount += 1),
              null === (n = this.logger) ||
                void 0 === n ||
                n.debug('Executed WrappedMutationObserver callback', {
                  callbackCount: this.callbackCount,
                  callbackLimit: this.callbackLimit,
                })),
            this.shouldDisconnect()
              ? (this.disconnect(),
                void (
                  null === (o = this.exporter) ||
                  void 0 === o ||
                  o.track(r.a.Metric, {
                    description: this.domUpdateId
                      ? 'DOM Update ID: ' + this.domUpdateId
                      : 'No DOM Update ID provided',
                    metricKey:
                      'Client DOM Update MutationObserver Limit Exceeded',
                    metricType: i.p.Event,
                  })
                ))
              : void 0
          );
        null === (t = this.logger) ||
          void 0 === t ||
          t.error('Mutation observer callback triggered while not connected');
      }
      shouldDisconnect() {
        var e;
        return (
          !!(
            this.callbackCount >= this.callbackLimit &&
            this.firstCallbackAt &&
            performance.now() - this.firstCallbackAt < 1e3
          ) &&
          (null === (e = this.logger) ||
            void 0 === e ||
            e.warn(
              'Disconnecting WrappedMutationObserver because exceeded per second callback limit',
              {
                callbackCount: this.callbackCount,
                callbackLimit: this.callbackLimit,
              }
            ),
          !0)
        );
      }
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return s;
    });
    var r = n(4);
    class i {
      constructor() {
        this.data = {};
      }
      getItem(e) {
        return this.data.hasOwnProperty(e) ? this.data[e] : null;
      }
      setItem(e, t) {
        this.data[e] = t;
      }
    }
    let o;
    function s() {
      return (
        o ||
        ((o =
          !Object(r.d)() &&
          (function () {
            try {
              return (
                sessionStorage.setItem('test', 'test'),
                'test' !== sessionStorage.getItem('test')
                  ? !1
                  : (sessionStorage.removeItem('test'), !0)
              );
            } catch (e) {
              return !1;
            }
          })()
            ? sessionStorage
            : new i()),
        o)
      );
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return o;
    }),
      n.d(t, 'a', function () {
        return s;
      });
    var r = n(4),
      i = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      };
    function o(e) {
      document.dispatchEvent(
        new CustomEvent('mutiny:renderExperience:complete', {
          detail: { experience: e },
        })
      );
    }
    class s {
      constructor(e, t) {
        (this.exporter = e),
          (this.userDataStore = t),
          document.addEventListener(
            'mutiny:dom-renderer:complete',
            ({ detail: e }) => {
              e.renderedRecords && (this.renderedRecords = e.renderedRecords),
                e.unrenderedRecords &&
                  (this.unrenderedRecords = e.unrenderedRecords);
            }
          ),
          document.addEventListener(
            'mutiny:renderExperience:complete',
            ({ detail: e }) => {
              e.experience && this.experiences.push(e.experience);
            }
          ),
          (this.experiences = []);
      }
      identify(e, t = {}) {
        return this.exporter.apiClient.identify(e, t);
      }
      trackConversion(e) {
        return this.exporter.apiClient.trackConversion({ formData: e });
      }
      defaultOptOut() {
        return Object(r.b)();
      }
      optOut() {
        return this.exporter.disableTracking(), Object(r.f)();
      }
      optIn() {
        return Object(r.e)();
      }
      getRenderedRecords() {
        return this.renderedRecords;
      }
      getUnrenderedRecords() {
        return this.unrenderedRecords;
      }
      getUserData() {
        const e = this.userDataStore.toJSON(),
          { user: t } = e;
        return i(e, ['user']);
      }
      getCampaignData() {
        const e = this.getUserData(),
          t = this.experiences.filter((e) =>
            Boolean(e.audienceSegment.campaign_slug)
          );
        return 0 === t.length
          ? {}
          : Object.assign({}, e[t[0].audienceSegment.campaign_slug]);
      }
      getRenderedExperiences() {
        return this.experiences;
      }
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return p;
    });
    var r = n(34),
      i = n(16),
      o = n(29),
      s = n(21),
      a = n(10),
      c = n(20),
      u = n(17),
      l = n(7),
      d = n(1),
      h = n(0),
      f = n(12);
    class p {
      constructor(e, t, n, r) {
        (this.record = e),
          (this.userData = t),
          (this.exporter = n),
          (this.preview = r),
          (this.logger = new d.a('dom-update'));
      }
      isRendered() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = this.personalization) || void 0 === e
                ? void 0
                : e.isRendered()) &&
          void 0 !== t &&
          t
        );
      }
      isOriginalPresent() {
        var e;
        return (
          !!(null === (e = this.personalization) || void 0 === e
            ? void 0
            : e.originalElement) &&
          document.contains(this.personalization.originalElement)
        );
      }
      shouldRender() {
        const e = this.preview === h.u.Editor,
          t = Array.from(Object(o.b)(this.record)),
          n = t.every((e) => null !== this.userData.get(e));
        return (
          n ||
            this.logger.warn(
              'Found invalid content dependencies.',
              t.filter((e) => null === this.userData.get(e))
            ),
          (e || n) && Object(i.b)(this.record.condition, this.userData)
        );
      }
      render() {
        var e, t, n, i, o, s;
        if (this.isRendered() || !this.shouldRender()) return;
        const a = this.getElement();
        if (!a) return;
        if (
          'modification' === this.record.personalization_type &&
          (null === (e = l.a.getPersonalizationForElement(a)) || void 0 === e
            ? void 0
            : e.isRendered())
        )
          return (
            this.logger.warn(
              "Skipping rendering of 'modification' personalization targetting an already personalized element."
            ),
            void (
              null === (t = this.exporter) ||
              void 0 === t ||
              t.apiClient.trackMetric({
                description: `Personalization targetted element already personalized by another personalization (${this.record.resource_id})`,
                metricKey: 'Duplicate target within personalization detected',
                metricType: h.p.Event,
              })
            )
          );
        if (
          'addition' === this.record.personalization_type &&
          (null === (n = l.a.getAdditionForElement(a, this.record.id)) ||
          void 0 === n
            ? void 0
            : n.isRendered())
        )
          return (
            this.logger.warn(
              "Skipping rendering of 'addition' personalization targetting an already personalized element."
            ),
            void (
              null === (i = this.exporter) ||
              void 0 === i ||
              i.apiClient.trackMetric({
                description: `Personalization targetted element already personalized by another personalization (${this.record.resource_id})`,
                metricKey: 'Duplicate target within personalization detected',
                metricType: h.p.Event,
              })
            )
          );
        const d = Object(u.b)(a);
        if (!d) return;
        if (Object(c.d)(a)) {
          const e = c.b[this.record.selector];
          e &&
            Object.keys(c.a).forEach((t) => {
              var n;
              a.style.setProperty(
                t,
                null !== (n = e.originalStyles[t]) && void 0 !== n ? n : ''
              );
            });
        }
        let f;
        Array.from(
          null !==
            (s =
              null === (o = a.parentElement) || void 0 === o
                ? void 0
                : o.querySelectorAll(':scope > ' + d)) && void 0 !== s
            ? s
            : []
        ).forEach((e) => {
          e.remove();
        }),
          (this.personalization = document.createElement(
            a.tagName.toLowerCase(),
            { is: d }
          )),
          (this.personalization.dataset.mutinyRoot = 'true'),
          (this.personalization.dataset.mutinyId = this.record.resource_id),
          (this.record.data.position &&
            ((f =
              this.getElement(this.record.data.position.parent_selector) ||
              void 0),
            !f)) ||
            (this.personalization.initializePersonalization(
              a,
              this.record,
              this.userData,
              f,
              this.exporter
            ),
            this.personalization.placePersonalization(),
            this.attachAndRunElementCustomJavascript(this.personalization),
            r.a.forEach((e) => {
              Array.from(e.targets.values()).forEach((t) => {
                t instanceof HTMLElement &&
                  l.a.getContainingPersonalizationForElement(t) ===
                    this.personalization &&
                  (e.unobserve(t, !0), e.observe(t));
              });
            }));
      }
      teardown() {
        var e;
        null === (e = this.personalization) || void 0 === e || e.teardown();
      }
      getElement(e = this.record.selector) {
        var t;
        return null !==
          (t = Array.from(Object(s.c)(e, this.record.selectorMode)).find(
            (e) =>
              !this.record.content_hash ||
              Number(this.record.content_hash) === Object(a.b)(e.innerHTML)
          )) && void 0 !== t
          ? t
          : null;
      }
      getCustomJavascriptWrapperName() {
        return 'mutinyJS' + this.record.resource_id.replaceAll('-', '');
      }
      attachAndRunElementCustomJavascript(e) {
        var t, n, r, i, o, s, a, c;
        if (
          null === (t = this.record) || void 0 === t
            ? void 0
            : t.customJavascript
        ) {
          const t = this.getCustomJavascriptWrapperName();
          let u = window[t];
          const l = Boolean(u);
          if (!u) {
            const r = document.createElement('script');
            (r.nonce = Object(f.a)()),
              r.setAttribute('type', 'text/javascript'),
              r.setAttribute('id', t);
            const i = `function ${t}(element) { ${this.record.customJavascript.customJavascriptString} }`;
            (r.innerHTML = i),
              document.head.appendChild(r),
              null === (n = this.logger) ||
                void 0 === n ||
                n.info('Attaching custom javascript to element:', e, r),
              (u = window[t]);
          }
          try {
            u(e),
              null === (r = this.logger) ||
                void 0 === r ||
                r.info('Running custom javascript with element:', e, u);
          } catch (t) {
            if (!l) {
              this.logger.warn('Error in custom javascript with element', e, u);
              const n = t;
              window.postMessage({
                type: 'elementLevelCustomJavascriptError',
                error: t,
                customJavascriptId: this.record.customJavascript.id,
              }),
                null === (i = this.exporter) ||
                  void 0 === i ||
                  i.apiClient.trackMetric({
                    description:
                      null !== (o = null == n ? void 0 : n.message) &&
                      void 0 !== o
                        ? o
                        : 'Error thrown from element-level js',
                    metricKey: 'element-level js error',
                    metricType: h.p.Event,
                    tags: {
                      name:
                        null !== (s = null == n ? void 0 : n.name) &&
                        void 0 !== s
                          ? s
                          : '',
                      message:
                        null !== (a = null == n ? void 0 : n.message) &&
                        void 0 !== a
                          ? a
                          : '',
                      stack:
                        null !== (c = null == n ? void 0 : n.stack) &&
                        void 0 !== c
                          ? c
                          : '',
                      code: this.record.customJavascript.customJavascriptString,
                    },
                  });
            }
          }
        }
      }
    }
  },
  function (e, t, n) {
    'use strict';
    var r = 'URLSearchParams' in self,
      i = 'Symbol' in self && 'iterator' in Symbol,
      o =
        'FileReader' in self &&
        'Blob' in self &&
        (function () {
          try {
            return new Blob(), !0;
          } catch (e) {
            return !1;
          }
        })(),
      s = 'FormData' in self,
      a = 'ArrayBuffer' in self;
    if (a)
      var c = [
          '[object Int8Array]',
          '[object Uint8Array]',
          '[object Uint8ClampedArray]',
          '[object Int16Array]',
          '[object Uint16Array]',
          '[object Int32Array]',
          '[object Uint32Array]',
          '[object Float32Array]',
          '[object Float64Array]',
        ],
        u =
          ArrayBuffer.isView ||
          function (e) {
            return e && c.indexOf(Object.prototype.toString.call(e)) > -1;
          };
    function l(e) {
      if (
        ('string' != typeof e && (e = String(e)),
        /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
      )
        throw new TypeError('Invalid character in header field name');
      return e.toLowerCase();
    }
    function d(e) {
      return 'string' != typeof e && (e = String(e)), e;
    }
    function h(e) {
      var t = {
        next: function () {
          var t = e.shift();
          return { done: void 0 === t, value: t };
        },
      };
      return (
        i &&
          (t[Symbol.iterator] = function () {
            return t;
          }),
        t
      );
    }
    function f(e) {
      (this.map = {}),
        e instanceof f
          ? e.forEach(function (e, t) {
              this.append(t, e);
            }, this)
          : Array.isArray(e)
          ? e.forEach(function (e) {
              this.append(e[0], e[1]);
            }, this)
          : e &&
            Object.getOwnPropertyNames(e).forEach(function (t) {
              this.append(t, e[t]);
            }, this);
    }
    function p(e) {
      if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
      e.bodyUsed = !0;
    }
    function g(e) {
      return new Promise(function (t, n) {
        (e.onload = function () {
          t(e.result);
        }),
          (e.onerror = function () {
            n(e.error);
          });
      });
    }
    function m(e) {
      var t = new FileReader(),
        n = g(t);
      return t.readAsArrayBuffer(e), n;
    }
    function v(e) {
      if (e.slice) return e.slice(0);
      var t = new Uint8Array(e.byteLength);
      return t.set(new Uint8Array(e)), t.buffer;
    }
    function y() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function (e) {
          var t;
          (this._bodyInit = e),
            e
              ? 'string' == typeof e
                ? (this._bodyText = e)
                : o && Blob.prototype.isPrototypeOf(e)
                ? (this._bodyBlob = e)
                : s && FormData.prototype.isPrototypeOf(e)
                ? (this._bodyFormData = e)
                : r && URLSearchParams.prototype.isPrototypeOf(e)
                ? (this._bodyText = e.toString())
                : a && o && (t = e) && DataView.prototype.isPrototypeOf(t)
                ? ((this._bodyArrayBuffer = v(e.buffer)),
                  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                : a && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e))
                ? (this._bodyArrayBuffer = v(e))
                : (this._bodyText = e = Object.prototype.toString.call(e))
              : (this._bodyText = ''),
            this.headers.get('content-type') ||
              ('string' == typeof e
                ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set('content-type', this._bodyBlob.type)
                : r &&
                  URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set(
                    'content-type',
                    'application/x-www-form-urlencoded;charset=UTF-8'
                  ));
        }),
        o &&
          ((this.blob = function () {
            var e = p(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error('could not read FormData body as blob');
            return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function () {
            return this._bodyArrayBuffer
              ? p(this) || Promise.resolve(this._bodyArrayBuffer)
              : this.blob().then(m);
          })),
        (this.text = function () {
          var e,
            t,
            n,
            r = p(this);
          if (r) return r;
          if (this._bodyBlob)
            return (
              (e = this._bodyBlob),
              (t = new FileReader()),
              (n = g(t)),
              t.readAsText(e),
              n
            );
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function (e) {
                for (
                  var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                  r < t.length;
                  r++
                )
                  n[r] = String.fromCharCode(t[r]);
                return n.join('');
              })(this._bodyArrayBuffer)
            );
          if (this._bodyFormData)
            throw new Error('could not read FormData body as text');
          return Promise.resolve(this._bodyText);
        }),
        s &&
          (this.formData = function () {
            return this.text().then(k);
          }),
        (this.json = function () {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }
    (f.prototype.append = function (e, t) {
      (e = l(e)), (t = d(t));
      var n = this.map[e];
      this.map[e] = n ? n + ', ' + t : t;
    }),
      (f.prototype.delete = function (e) {
        delete this.map[l(e)];
      }),
      (f.prototype.get = function (e) {
        return (e = l(e)), this.has(e) ? this.map[e] : null;
      }),
      (f.prototype.has = function (e) {
        return this.map.hasOwnProperty(l(e));
      }),
      (f.prototype.set = function (e, t) {
        this.map[l(e)] = d(t);
      }),
      (f.prototype.forEach = function (e, t) {
        for (var n in this.map)
          this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
      }),
      (f.prototype.keys = function () {
        var e = [];
        return (
          this.forEach(function (t, n) {
            e.push(n);
          }),
          h(e)
        );
      }),
      (f.prototype.values = function () {
        var e = [];
        return (
          this.forEach(function (t) {
            e.push(t);
          }),
          h(e)
        );
      }),
      (f.prototype.entries = function () {
        var e = [];
        return (
          this.forEach(function (t, n) {
            e.push([n, t]);
          }),
          h(e)
        );
      }),
      i && (f.prototype[Symbol.iterator] = f.prototype.entries);
    var b = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
    function w(e, t) {
      var n,
        r,
        i = (t = t || {}).body;
      if (e instanceof w) {
        if (e.bodyUsed) throw new TypeError('Already read');
        (this.url = e.url),
          (this.credentials = e.credentials),
          t.headers || (this.headers = new f(e.headers)),
          (this.method = e.method),
          (this.mode = e.mode),
          (this.signal = e.signal),
          i || null == e._bodyInit || ((i = e._bodyInit), (e.bodyUsed = !0));
      } else this.url = String(e);
      if (
        ((this.credentials =
          t.credentials || this.credentials || 'same-origin'),
        (!t.headers && this.headers) || (this.headers = new f(t.headers)),
        (this.method =
          ((n = t.method || this.method || 'GET'),
          (r = n.toUpperCase()),
          b.indexOf(r) > -1 ? r : n)),
        (this.mode = t.mode || this.mode || null),
        (this.signal = t.signal || this.signal),
        (this.referrer = null),
        ('GET' === this.method || 'HEAD' === this.method) && i)
      )
        throw new TypeError('Body not allowed for GET or HEAD requests');
      this._initBody(i);
    }
    function k(e) {
      var t = new FormData();
      return (
        e
          .trim()
          .split('&')
          .forEach(function (e) {
            if (e) {
              var n = e.split('='),
                r = n.shift().replace(/\+/g, ' '),
                i = n.join('=').replace(/\+/g, ' ');
              t.append(decodeURIComponent(r), decodeURIComponent(i));
            }
          }),
        t
      );
    }
    function S(e, t) {
      t || (t = {}),
        (this.type = 'default'),
        (this.status = void 0 === t.status ? 200 : t.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
        (this.headers = new f(t.headers)),
        (this.url = t.url || ''),
        this._initBody(e);
    }
    (w.prototype.clone = function () {
      return new w(this, { body: this._bodyInit });
    }),
      y.call(w.prototype),
      y.call(S.prototype),
      (S.prototype.clone = function () {
        return new S(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new f(this.headers),
          url: this.url,
        });
      }),
      (S.error = function () {
        var e = new S(null, { status: 0, statusText: '' });
        return (e.type = 'error'), e;
      });
    var E = [301, 302, 303, 307, 308];
    S.redirect = function (e, t) {
      if (-1 === E.indexOf(t)) throw new RangeError('Invalid status code');
      return new S(null, { status: t, headers: { location: e } });
    };
    var C = self.DOMException;
    try {
      new C();
    } catch (e) {
      ((C = function (e, t) {
        (this.message = e), (this.name = t);
        var n = Error(e);
        this.stack = n.stack;
      }).prototype = Object.create(Error.prototype)),
        (C.prototype.constructor = C);
    }
    function O(e, t) {
      return new Promise(function (n, r) {
        var i = new w(e, t);
        if (i.signal && i.signal.aborted)
          return r(new C('Aborted', 'AbortError'));
        var s = new XMLHttpRequest();
        function a() {
          s.abort();
        }
        (s.onload = function () {
          var e,
            t,
            r = {
              status: s.status,
              statusText: s.statusText,
              headers:
                ((e = s.getAllResponseHeaders() || ''),
                (t = new f()),
                e
                  .replace(/\r?\n[\t ]+/g, ' ')
                  .split(/\r?\n/)
                  .forEach(function (e) {
                    var n = e.split(':'),
                      r = n.shift().trim();
                    if (r) {
                      var i = n.join(':').trim();
                      t.append(r, i);
                    }
                  }),
                t),
            };
          r.url =
            'responseURL' in s ? s.responseURL : r.headers.get('X-Request-URL');
          var i = 'response' in s ? s.response : s.responseText;
          n(new S(i, r));
        }),
          (s.onerror = function () {
            r(new TypeError('Network request failed'));
          }),
          (s.ontimeout = function () {
            r(new TypeError('Network request failed'));
          }),
          (s.onabort = function () {
            r(new C('Aborted', 'AbortError'));
          }),
          s.open(i.method, i.url, !0),
          'include' === i.credentials
            ? (s.withCredentials = !0)
            : 'omit' === i.credentials && (s.withCredentials = !1),
          'responseType' in s && o && (s.responseType = 'blob'),
          i.headers.forEach(function (e, t) {
            s.setRequestHeader(t, e);
          }),
          i.signal &&
            (i.signal.addEventListener('abort', a),
            (s.onreadystatechange = function () {
              4 === s.readyState && i.signal.removeEventListener('abort', a);
            })),
          s.send(void 0 === i._bodyInit ? null : i._bodyInit);
      });
    }
    (O.polyfill = !0),
      self.fetch ||
        ((self.fetch = O),
        (self.Headers = f),
        (self.Request = w),
        (self.Response = S));
  },
  function (e, t, n) {
    var r = n(58),
      i = n(31),
      o = i;
    (o.v1 = r), (o.v4 = i), (e.exports = o);
  },
  function (e, t) {
    var n,
      r,
      i = (e.exports = {});
    function o() {
      throw new Error('setTimeout has not been defined');
    }
    function s() {
      throw new Error('clearTimeout has not been defined');
    }
    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = 'function' == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        r = s;
      }
    })();
    var c,
      u = [],
      l = !1,
      d = -1;
    function h() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && f());
    }
    function f() {
      if (!l) {
        var e = a(h);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === s || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new p(e, t)), 1 !== u.length || l || a(f);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = 'browser'),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ''),
      (i.versions = {}),
      (i.on = g),
      (i.addListener = g),
      (i.once = g),
      (i.off = g),
      (i.removeListener = g),
      (i.removeAllListeners = g),
      (i.emit = g),
      (i.prependListener = g),
      (i.prependOnceListener = g),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error('process.binding is not supported');
      }),
      (i.cwd = function () {
        return '/';
      }),
      (i.chdir = function (e) {
        throw new Error('process.chdir is not supported');
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    var n =
      ('undefined' != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ('undefined' != typeof msCrypto &&
        'function' == typeof window.msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto));
    if (n) {
      var r = new Uint8Array(16);
      e.exports = function () {
        return n(r), r;
      };
    } else {
      var i = new Array(16);
      e.exports = function () {
        for (var e, t = 0; t < 16; t++)
          0 == (3 & t) && (e = 4294967296 * Math.random()),
            (i[t] = (e >>> ((3 & t) << 3)) & 255);
        return i;
      };
    }
  },
  function (e, t) {
    for (var n = [], r = 0; r < 256; ++r)
      n[r] = (r + 256).toString(16).substr(1);
    e.exports = function (e, t) {
      var r = t || 0,
        i = n;
      return [
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        '-',
        i[e[r++]],
        i[e[r++]],
        '-',
        i[e[r++]],
        i[e[r++]],
        '-',
        i[e[r++]],
        i[e[r++]],
        '-',
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
        i[e[r++]],
      ].join('');
    };
  },
  function (e, t, n) {
    (function (r) {
      (t.log = function (...e) {
        return 'object' == typeof console && console.log && console.log(...e);
      }),
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? '%c' : '') +
              this.namespace +
              (this.useColors ? ' %c' : ' ') +
              t[0] +
              (this.useColors ? '%c ' : ' ') +
              '+' +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const n = 'color: ' + this.color;
          t.splice(1, 0, n, 'color: inherit');
          let r = 0,
            i = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            '%%' !== e && (r++, '%c' === e && (i = r));
          }),
            t.splice(i, 0, n);
        }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem('debug', e) : t.storage.removeItem('debug');
          } catch (e) {}
        }),
        (t.load = function () {
          let e;
          try {
            e = t.storage.getItem('debug');
          } catch (e) {}
          !e && void 0 !== r && 'env' in r && (e = r.env.DEBUG);
          return e;
        }),
        (t.useColors = function () {
          if (
            'undefined' != typeof window &&
            window.process &&
            ('renderer' === window.process.type || window.process.__nwjs)
          )
            return !0;
          if (
            'undefined' != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ('undefined' != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ('undefined' != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (e.exports = n(66)(t));
      const { formatters: i } = e.exports;
      i.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '[UnexpectedJSONParseError]: ' + e.message;
        }
      };
    }.call(this, n(42)));
  },
  function (e, t) {
    !(function () {
      'use strict';
      if (
        'undefined' != typeof document &&
        !('adoptedStyleSheets' in document)
      ) {
        var e = 'ShadyCSS' in window && !ShadyCSS.nativeShadow,
          t = document.implementation.createHTMLDocument(''),
          n = new WeakMap(),
          r = 'object' == typeof DOMException ? Error : DOMException,
          i = Object.defineProperty,
          o = Array.prototype.forEach,
          s = /@import.+?;?$/gm,
          a = CSSStyleSheet.prototype;
        (a.replace = function () {
          return Promise.reject(
            new r("Can't call replace on non-constructed CSSStyleSheets.")
          );
        }),
          (a.replaceSync = function () {
            throw new r(
              "Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets."
            );
          });
        var c = new WeakMap(),
          u = new WeakMap(),
          l = new WeakMap(),
          d = new WeakMap(),
          h = T.prototype;
        (h.replace = function (e) {
          try {
            return this.replaceSync(e), Promise.resolve(this);
          } catch (e) {
            return Promise.reject(e);
          }
        }),
          (h.replaceSync = function (e) {
            if ((_(this), 'string' == typeof e)) {
              var t = this;
              (c.get(t).textContent = (function (e) {
                var t = e.replace(s, '');
                return (
                  t !== e &&
                    console.warn(
                      '@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418'
                    ),
                  t.trim()
                );
              })(e)),
                d.set(t, []),
                u.get(t).forEach(function (e) {
                  e.isConnected() && O(t, C(t, e));
                });
            }
          }),
          i(h, 'cssRules', {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return _(this), c.get(this).sheet.cssRules;
            },
          }),
          i(h, 'media', {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return _(this), c.get(this).sheet.media;
            },
          }),
          ['addRule', 'deleteRule', 'insertRule', 'removeRule'].forEach(
            function (e) {
              h[e] = function () {
                var t = this;
                _(t);
                var n = arguments;
                d.get(t).push({ method: e, args: n }),
                  u.get(t).forEach(function (r) {
                    if (r.isConnected()) {
                      var i = C(t, r).sheet;
                      i[e].apply(i, n);
                    }
                  });
                var r = c.get(t).sheet;
                return r[e].apply(r, n);
              };
            }
          ),
          i(T, Symbol.hasInstance, { configurable: !0, value: S });
        var f = { childList: !0, subtree: !0 },
          p = new WeakMap(),
          g = new WeakMap(),
          m = new WeakMap(),
          v = new WeakMap();
        if (
          ((q.prototype = {
            isConnected: function () {
              var e = g.get(this);
              return e instanceof Document
                ? 'loading' !== e.readyState
                : (function (e) {
                    return 'isConnected' in e
                      ? e.isConnected
                      : document.contains(e);
                  })(e.host);
            },
            connect: function () {
              var e = A(this);
              v.get(this).observe(e, f),
                m.get(this).length > 0 && M(this),
                I(e, function (e) {
                  j(e).connect();
                });
            },
            disconnect: function () {
              v.get(this).disconnect();
            },
            update: function (e) {
              var t = this,
                n = g.get(t) === document ? 'Document' : 'ShadowRoot';
              if (!Array.isArray(e))
                throw new TypeError(
                  "Failed to set the 'adoptedStyleSheets' property on " +
                    n +
                    ': Iterator getter is not callable.'
                );
              if (!e.every(S))
                throw new TypeError(
                  "Failed to set the 'adoptedStyleSheets' property on " +
                    n +
                    ": Failed to convert value to 'CSSStyleSheet'"
                );
              if (e.some(E))
                throw new TypeError(
                  "Failed to set the 'adoptedStyleSheets' property on " +
                    n +
                    ": Can't adopt non-constructed stylesheets"
                );
              t.sheets = e;
              var r,
                i,
                o = m.get(t),
                s = (r = e).filter(function (e, t) {
                  return r.indexOf(e) === t;
                });
              ((i = s),
              o.filter(function (e) {
                return -1 === i.indexOf(e);
              })).forEach(function (e) {
                var n;
                (n = C(e, t)).parentNode.removeChild(n),
                  (function (e, t) {
                    l.get(e).delete(t),
                      u.set(
                        e,
                        u.get(e).filter(function (e) {
                          return e !== t;
                        })
                      );
                  })(e, t);
              }),
                m.set(t, s),
                t.isConnected() && s.length > 0 && M(t);
            },
          }),
          (window.CSSStyleSheet = T),
          x(Document),
          'ShadowRoot' in window)
        ) {
          x(ShadowRoot);
          var y = Element.prototype,
            b = y.attachShadow;
          y.attachShadow = function (e) {
            var t = b.call(this, e);
            return 'closed' === e.mode && n.set(this, t), t;
          };
        }
        var w = j(document);
        w.isConnected()
          ? w.connect()
          : document.addEventListener('DOMContentLoaded', w.connect.bind(w));
      }
      function k(e) {
        return e.shadowRoot || n.get(e);
      }
      function S(e) {
        return (
          'object' == typeof e && (h.isPrototypeOf(e) || a.isPrototypeOf(e))
        );
      }
      function E(e) {
        return 'object' == typeof e && a.isPrototypeOf(e);
      }
      function C(e, t) {
        return l.get(e).get(t);
      }
      function O(e, t) {
        requestAnimationFrame(function () {
          (t.textContent = c.get(e).textContent),
            d.get(e).forEach(function (e) {
              return t.sheet[e.method].apply(t.sheet, e.args);
            });
        });
      }
      function _(e) {
        if (!c.has(e)) throw new TypeError('Illegal invocation');
      }
      function T() {
        var e = document.createElement('style');
        t.body.appendChild(e),
          c.set(this, e),
          u.set(this, []),
          l.set(this, new WeakMap()),
          d.set(this, []);
      }
      function j(e) {
        var t = p.get(e);
        return t || ((t = new q(e)), p.set(e, t)), t;
      }
      function x(e) {
        i(e.prototype, 'adoptedStyleSheets', {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return j(this).sheets;
          },
          set: function (e) {
            j(this).update(e);
          },
        });
      }
      function I(e, t) {
        for (
          var n = document.createNodeIterator(
              e,
              NodeFilter.SHOW_ELEMENT,
              function (e) {
                return k(e)
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_REJECT;
              },
              null,
              !1
            ),
            r = void 0;
          (r = n.nextNode());

        )
          t(k(r));
      }
      function A(e) {
        var t = g.get(e);
        return t instanceof Document ? t.body : t;
      }
      function M(e) {
        var t = document.createDocumentFragment(),
          n = m.get(e),
          r = v.get(e),
          i = A(e);
        r.disconnect(),
          n.forEach(function (n) {
            t.appendChild(
              C(n, e) ||
                (function (e, t) {
                  var n = document.createElement('style');
                  return l.get(e).set(t, n), u.get(e).push(t), n;
                })(n, e)
            );
          }),
          i.insertBefore(t, null),
          r.observe(i, f),
          n.forEach(function (t) {
            O(t, C(t, e));
          });
      }
      function q(t) {
        var n = this;
        (n.sheets = []),
          g.set(n, t),
          m.set(n, []),
          v.set(
            n,
            new MutationObserver(function (t, r) {
              document
                ? t.forEach(function (t) {
                    e ||
                      o.call(t.addedNodes, function (e) {
                        e instanceof Element &&
                          I(e, function (e) {
                            j(e).connect();
                          });
                      }),
                      o.call(t.removedNodes, function (t) {
                        t instanceof Element &&
                          ((function (e, t) {
                            return (
                              t instanceof HTMLStyleElement &&
                              m.get(e).some(function (t) {
                                return C(t, e);
                              })
                            );
                          })(n, t) && M(n),
                          e ||
                            I(t, function (e) {
                              j(e).disconnect();
                            }));
                      });
                  })
                : r.disconnect();
            })
          );
      }
    })();
  },
  function (e, t, n) {
    'use strict';
    function r(e, t) {
      Object.keys(t).forEach((n) => e.style.setProperty(n, t[n]));
    }
    function i(e) {
      const t = new CSSStyleSheet(),
        n = t.insertRule(`tmp { ${e} }`),
        r = t.cssRules[null != n ? n : 0];
      return (function (e) {
        return e.type === CSSRule.STYLE_RULE;
      })(r)
        ? r
        : void 0;
    }
    function o(e, t) {
      var n, r, o;
      const s = i(
          null !== (n = t.getAttribute('style')) && void 0 !== n ? n : ''
        ),
        a = i(e),
        c = new Set(
          Array.from(
            null !== (r = null == a ? void 0 : a.style) && void 0 !== r ? r : []
          )
        );
      Array.from(
        null !== (o = null == s ? void 0 : s.style) && void 0 !== o ? o : []
      )
        .filter((e) => !c.has(e))
        .forEach((e) => {
          t.style.removeProperty(e);
        }),
        a &&
          Array.from(a.style).forEach((e) => {
            t.style.setProperty(
              e,
              a.style.getPropertyValue(e),
              a.style.getPropertyPriority(e)
            );
          });
    }
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'b', function () {
        return o;
      });
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'a', function () {
        return i;
      });
    const r = (e) => {
        'complete' === document.readyState
          ? e()
          : window.addEventListener('load', e);
      },
      i = (e) => {
        window.location.assign(e);
      };
  },
  function (e, t, n) {
    'use strict';
    (function (e) {
      var r = n(35),
        i = setTimeout;
      function o(e) {
        return Boolean(e && void 0 !== e.length);
      }
      function s() {}
      function a(e) {
        if (!(this instanceof a))
          throw new TypeError('Promises must be constructed via new');
        if ('function' != typeof e) throw new TypeError('not a function');
        (this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          f(e, this);
      }
      function c(e, t) {
        for (; 3 === e._state; ) e = e._value;
        0 !== e._state
          ? ((e._handled = !0),
            a._immediateFn(function () {
              var n = 1 === e._state ? t.onFulfilled : t.onRejected;
              if (null !== n) {
                var r;
                try {
                  r = n(e._value);
                } catch (e) {
                  return void l(t.promise, e);
                }
                u(t.promise, r);
              } else (1 === e._state ? u : l)(t.promise, e._value);
            }))
          : e._deferreds.push(t);
      }
      function u(e, t) {
        try {
          if (t === e)
            throw new TypeError('A promise cannot be resolved with itself.');
          if (t && ('object' == typeof t || 'function' == typeof t)) {
            var n = t.then;
            if (t instanceof a)
              return (e._state = 3), (e._value = t), void d(e);
            if ('function' == typeof n)
              return void f(
                ((r = n),
                (i = t),
                function () {
                  r.apply(i, arguments);
                }),
                e
              );
          }
          (e._state = 1), (e._value = t), d(e);
        } catch (t) {
          l(e, t);
        }
        var r, i;
      }
      function l(e, t) {
        (e._state = 2), (e._value = t), d(e);
      }
      function d(e) {
        2 === e._state &&
          0 === e._deferreds.length &&
          a._immediateFn(function () {
            e._handled || a._unhandledRejectionFn(e._value);
          });
        for (var t = 0, n = e._deferreds.length; t < n; t++)
          c(e, e._deferreds[t]);
        e._deferreds = null;
      }
      function h(e, t, n) {
        (this.onFulfilled = 'function' == typeof e ? e : null),
          (this.onRejected = 'function' == typeof t ? t : null),
          (this.promise = n);
      }
      function f(e, t) {
        var n = !1;
        try {
          e(
            function (e) {
              n || ((n = !0), u(t, e));
            },
            function (e) {
              n || ((n = !0), l(t, e));
            }
          );
        } catch (e) {
          if (n) return;
          (n = !0), l(t, e);
        }
      }
      (a.prototype.catch = function (e) {
        return this.then(null, e);
      }),
        (a.prototype.then = function (e, t) {
          var n = new this.constructor(s);
          return c(this, new h(e, t, n)), n;
        }),
        (a.prototype.finally = r.a),
        (a.all = function (e) {
          return new a(function (t, n) {
            if (!o(e)) return n(new TypeError('Promise.all accepts an array'));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var i = r.length;
            function s(e, o) {
              try {
                if (o && ('object' == typeof o || 'function' == typeof o)) {
                  var a = o.then;
                  if ('function' == typeof a)
                    return void a.call(
                      o,
                      function (t) {
                        s(e, t);
                      },
                      n
                    );
                }
                (r[e] = o), 0 == --i && t(r);
              } catch (e) {
                n(e);
              }
            }
            for (var a = 0; a < r.length; a++) s(a, r[a]);
          });
        }),
        (a.resolve = function (e) {
          return e && 'object' == typeof e && e.constructor === a
            ? e
            : new a(function (t) {
                t(e);
              });
        }),
        (a.reject = function (e) {
          return new a(function (t, n) {
            n(e);
          });
        }),
        (a.race = function (e) {
          return new a(function (t, n) {
            if (!o(e)) return n(new TypeError('Promise.race accepts an array'));
            for (var r = 0, i = e.length; r < i; r++)
              a.resolve(e[r]).then(t, n);
          });
        }),
        (a._immediateFn =
          ('function' == typeof e &&
            function (t) {
              e(t);
            }) ||
          function (e) {
            i(e, 0);
          }),
        (a._unhandledRejectionFn = function (e) {
          'undefined' != typeof console &&
            console &&
            console.warn('Possible Unhandled Promise Rejection:', e);
        }),
        (t.a = a);
    }.call(this, n(56).setImmediate));
  },
  function (e, t, n) {
    e.exports = (function () {
      function e(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function t(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function n() {
        return W(((Math.random() * re) << 0).toString(ne), te);
      }
      function r() {
        return (
          'c' +
          new Date().getTime().toString(ne) +
          W(((ee = ee < re ? ee : 0), ++ee - 1).toString(ne), te) +
          Z() +
          (n() + n())
        );
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function o() {
        if (!et(nt(), this[Ye])) {
          var e = { status: this.status, request: this[Ze] + ' ' + this[Ye] };
          this.status >= 400
            ? tt.leaveBreadcrumb('XMLHttpRequest failed', e, Xe)
            : tt.leaveBreadcrumb('XMLHttpRequest succeeded', e, Xe);
        }
      }
      function s() {
        et(nt(), this[Ye]) ||
          tt.leaveBreadcrumb(
            'XMLHttpRequest error',
            { request: this[Ze] + ' ' + this[Ye] },
            Xe
          );
      }
      function a(e) {
        return '[Throws: ' + (e ? e.message : '?') + ']';
      }
      function c(e, t) {
        try {
          return e[t];
        } catch (e) {
          return a(e);
        }
      }
      function u(e) {
        var t = [],
          n = 0;
        return (function e(r, i) {
          function o() {
            return i > jt && n > Tt;
          }
          if ((n++, void 0 === i && (i = 0), i > _t)) return xt;
          if (o()) return xt;
          if (null === r || 'object' != typeof r) return r;
          if (
            (function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return !0;
              return !1;
            })(t, r)
          )
            return '[Circular]';
          if ((t.push(r), 'function' == typeof r.toJSON))
            try {
              n--;
              var s = e(r.toJSON(), i);
              return t.pop(), s;
            } catch (e) {
              return a(e);
            }
          if (
            (function (e) {
              return '[object Array]' === Object.prototype.toString.call(e);
            })(r)
          ) {
            for (var u = [], l = 0, d = r.length; l < d; l++) {
              if (o()) {
                u.push(xt);
                break;
              }
              u.push(e(r[l], i + 1));
            }
            return t.pop(), u;
          }
          var h = {};
          try {
            for (var f in r)
              if (Object.prototype.hasOwnProperty.call(r, f)) {
                if (o()) {
                  h[f] = xt;
                  break;
                }
                h[f] = e(c(r, f), i + 1);
              }
          } catch (e) {}
          return t.pop(), h;
        })(e);
      }
      var l = function (e, t, n) {
          for (var r = n, i = 0, o = e.length; i < o; i++) r = t(r, e[i], i, e);
          return r;
        },
        d = !{ toString: null }.propertyIsEnumerable('toString'),
        h = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor',
        ],
        f = function (e) {
          return e < 10 ? '0' + e : e;
        },
        p = function (e, t) {
          return l(
            e,
            function (e, n, r, i) {
              return e.concat(t(n, r, i));
            },
            []
          );
        },
        g = l,
        m = function (e, t) {
          return l(
            e,
            function (e, n, r, i) {
              return t(n, r, i) ? e.concat(n) : e;
            },
            []
          );
        },
        v = function (e, t) {
          return l(
            e,
            function (e, n, r, i) {
              return !0 === e || n === t;
            },
            !1
          );
        },
        y = function (e) {
          var t = [],
            n = void 0;
          for (n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
          if (!d) return t;
          for (var r = 0, i = h.length; r < i; r++)
            Object.prototype.hasOwnProperty.call(e, h[r]) && t.push(h[r]);
          return t;
        },
        b = function (e) {
          return '[object Array]' === Object.prototype.toString.call(e);
        },
        w = function () {
          var e = new Date();
          return (
            e.getUTCFullYear() +
            '-' +
            f(e.getUTCMonth() + 1) +
            '-' +
            f(e.getUTCDate()) +
            'T' +
            f(e.getUTCHours()) +
            ':' +
            f(e.getUTCMinutes()) +
            ':' +
            f(e.getUTCSeconds()) +
            '.' +
            (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
            'Z'
          );
        },
        k = w,
        S = (function () {
          function t() {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : '[anonymous]',
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'manual',
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : k();
            e(this, t),
              (this.type = i),
              (this.name = n),
              (this.metaData = r),
              (this.timestamp = o);
          }
          return (
            (t.prototype.toJSON = function () {
              return {
                type: this.type,
                name: this.name,
                timestamp: this.timestamp,
                metaData: this.metaData,
              };
            }),
            t
          );
        })(),
        E = {},
        C = v;
      (E.positiveIntIfDefined = function (e) {
        return (
          C(['undefined', 'number'], typeof e) &&
          parseInt('' + e, 10) === e &&
          e > 0
        );
      }),
        (E.stringWithLength = function (e) {
          return 'string' == typeof e && !!e.length;
        });
      var O = {},
        _ = m,
        T = g,
        j = y,
        x = b,
        I = v,
        A = E.positiveIntIfDefined,
        M = E.stringWithLength;
      (O.schema = {
        apiKey: {
          defaultValue: function () {
            return null;
          },
          message: 'is required',
          validate: M,
        },
        appVersion: {
          defaultValue: function () {
            return null;
          },
          message: 'should be a string',
          validate: function (e) {
            return null === e || M(e);
          },
        },
        autoNotify: {
          defaultValue: function () {
            return !0;
          },
          message: 'should be true|false',
          validate: function (e) {
            return !0 === e || !1 === e;
          },
        },
        beforeSend: {
          defaultValue: function () {
            return [];
          },
          message: 'should be a function or array of functions',
          validate: function (e) {
            return (
              'function' == typeof e ||
              (x(e) &&
                _(e, function (e) {
                  return 'function' == typeof e;
                }).length === e.length)
            );
          },
        },
        endpoints: {
          defaultValue: function () {
            return {
              notify: 'https://notify.bugsnag.com',
              sessions: 'https://sessions.bugsnag.com',
            };
          },
          message:
            'should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false',
          validate: function (e, t) {
            return (
              e &&
              'object' == typeof e &&
              M(e.notify) &&
              (!1 === t.autoCaptureSessions || M(e.sessions)) &&
              0 ===
                _(j(e), function (e) {
                  return !I(['notify', 'sessions'], e);
                }).length
            );
          },
        },
        autoCaptureSessions: {
          defaultValue: function (e, t) {
            return (
              void 0 === t.endpoints ||
              (!!t.endpoints && !!t.endpoints.sessions)
            );
          },
          message: 'should be true|false',
          validate: function (e) {
            return !0 === e || !1 === e;
          },
        },
        notifyReleaseStages: {
          defaultValue: function () {
            return null;
          },
          message: 'should be an array of strings',
          validate: function (e) {
            return (
              null === e ||
              (x(e) &&
                _(e, function (e) {
                  return 'string' == typeof e;
                }).length === e.length)
            );
          },
        },
        releaseStage: {
          defaultValue: function () {
            return 'production';
          },
          message: 'should be a string',
          validate: function (e) {
            return 'string' == typeof e && e.length;
          },
        },
        maxBreadcrumbs: {
          defaultValue: function () {
            return 20;
          },
          message: 'should be a number ≤40',
          validate: function (e) {
            return 0 === e || (A(e) && (void 0 === e || e <= 40));
          },
        },
        autoBreadcrumbs: {
          defaultValue: function () {
            return !0;
          },
          message: 'should be true|false',
          validate: function (e) {
            return 'boolean' == typeof e;
          },
        },
        user: {
          defaultValue: function () {
            return null;
          },
          message: '(object) user should be an object',
          validate: function (e) {
            return 'object' == typeof e;
          },
        },
        metaData: {
          defaultValue: function () {
            return null;
          },
          message: 'should be an object',
          validate: function (e) {
            return 'object' == typeof e;
          },
        },
        logger: {
          defaultValue: function () {},
          message:
            'should be null or an object with methods { debug, info, warn, error }',
          validate: function (e) {
            return (
              !e ||
              (e &&
                T(
                  ['debug', 'info', 'warn', 'error'],
                  function (t, n) {
                    return t && 'function' == typeof e[n];
                  },
                  !0
                ))
            );
          },
        },
      }),
        (O.mergeDefaults = function (e, t) {
          if (!e || !t) throw new Error('opts and schema objects are required');
          return T(
            j(t),
            function (n, r) {
              return (
                (n[r] = void 0 !== e[r] ? e[r] : t[r].defaultValue(e[r], e)), n
              );
            },
            {}
          );
        }),
        (O.validate = function (e, t) {
          if (!e || !t) throw new Error('opts and schema objects are required');
          var n = T(
            j(t),
            function (n, r) {
              return t[r].validate(e[r], e)
                ? n
                : n.concat({ key: r, message: t[r].message, value: e[r] });
            },
            []
          );
          return { valid: !n.length, errors: n };
        });
      var q = function (e) {
          return e.app && 'string' == typeof e.app.releaseStage
            ? e.app.releaseStage
            : e.config.releaseStage;
        },
        P = function (e) {
          return !(
            !e ||
            (!e.stack && !e.stacktrace && !e['opera#sourceloc']) ||
            'string' !=
              typeof (e.stack || e.stacktrace || e['opera#sourceloc']) ||
            e.stack === e.name + ': ' + e.message
          );
        },
        N = {};
      !(function (e, t) {
        'use strict';
        'object' == typeof N ? (N = t()) : (e.StackFrame = t());
      })(this, function () {
        'use strict';
        function e(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }
        function t(e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        }
        function n(e) {
          return function () {
            return this[e];
          };
        }
        function r(e) {
          if (e instanceof Object)
            for (var n = 0; n < a.length; n++)
              e.hasOwnProperty(a[n]) &&
                void 0 !== e[a[n]] &&
                this['set' + t(a[n])](e[a[n]]);
        }
        var i = ['isConstructor', 'isEval', 'isNative', 'isToplevel'],
          o = ['columnNumber', 'lineNumber'],
          s = ['fileName', 'functionName', 'source'],
          a = i.concat(o, s, ['args']);
        r.prototype = {
          getArgs: function () {
            return this.args;
          },
          setArgs: function (e) {
            if ('[object Array]' !== Object.prototype.toString.call(e))
              throw new TypeError('Args must be an Array');
            this.args = e;
          },
          getEvalOrigin: function () {
            return this.evalOrigin;
          },
          setEvalOrigin: function (e) {
            if (e instanceof r) this.evalOrigin = e;
            else {
              if (!(e instanceof Object))
                throw new TypeError(
                  'Eval Origin must be an Object or StackFrame'
                );
              this.evalOrigin = new r(e);
            }
          },
          toString: function () {
            return (
              (this.getFunctionName() || '{anonymous}') +
              '(' +
              (this.getArgs() || []).join(',') +
              ')' +
              (this.getFileName() ? '@' + this.getFileName() : '') +
              (e(this.getLineNumber()) ? ':' + this.getLineNumber() : '') +
              (e(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '')
            );
          },
        };
        for (var c = 0; c < i.length; c++)
          (r.prototype['get' + t(i[c])] = n(i[c])),
            (r.prototype['set' + t(i[c])] = (function (e) {
              return function (t) {
                this[e] = Boolean(t);
              };
            })(i[c]));
        for (var u = 0; u < o.length; u++)
          (r.prototype['get' + t(o[u])] = n(o[u])),
            (r.prototype['set' + t(o[u])] = (function (t) {
              return function (n) {
                if (!e(n)) throw new TypeError(t + ' must be a Number');
                this[t] = Number(n);
              };
            })(o[u]));
        for (var l = 0; l < s.length; l++)
          (r.prototype['get' + t(s[l])] = n(s[l])),
            (r.prototype['set' + t(s[l])] = (function (e) {
              return function (t) {
                this[e] = String(t);
              };
            })(s[l]));
        return r;
      });
      var R = {};
      !(function (e, t) {
        'use strict';
        'object' == typeof R
          ? (R = t(N))
          : (e.ErrorStackParser = t(e.StackFrame));
      })(this, function (e) {
        'use strict';
        var t = /(^|@)\S+\:\d+/,
          n = /^\s*at .*(\S+\:\d+|\(native\))/m,
          r = /^(eval@)?(\[native code\])?$/;
        return {
          parse: function (e) {
            if (void 0 !== e.stacktrace || void 0 !== e['opera#sourceloc'])
              return this.parseOpera(e);
            if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
            if (e.stack) return this.parseFFOrSafari(e);
            throw new Error('Cannot parse given Error object');
          },
          extractLocation: function (e) {
            if (-1 === e.indexOf(':')) return [e];
            var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(
              e.replace(/[\(\)]/g, '')
            );
            return [t[1], t[2] || void 0, t[3] || void 0];
          },
          parseV8OrIE: function (t) {
            return t.stack
              .split('\n')
              .filter(function (e) {
                return !!e.match(n);
              }, this)
              .map(function (t) {
                t.indexOf('(eval ') > -1 &&
                  (t = t
                    .replace(/eval code/g, 'eval')
                    .replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ''));
                var n = t
                    .replace(/^\s+/, '')
                    .replace(/\(eval code/g, '(')
                    .split(/\s+/)
                    .slice(1),
                  r = this.extractLocation(n.pop()),
                  i = n.join(' ') || void 0,
                  o =
                    ['eval', '<anonymous>'].indexOf(r[0]) > -1 ? void 0 : r[0];
                return new e({
                  functionName: i,
                  fileName: o,
                  lineNumber: r[1],
                  columnNumber: r[2],
                  source: t,
                });
              }, this);
          },
          parseFFOrSafari: function (t) {
            return t.stack
              .split('\n')
              .filter(function (e) {
                return !e.match(r);
              }, this)
              .map(function (t) {
                if (
                  (t.indexOf(' > eval') > -1 &&
                    (t = t.replace(
                      / line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,
                      ':$1'
                    )),
                  -1 === t.indexOf('@') && -1 === t.indexOf(':'))
                )
                  return new e({ functionName: t });
                var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  r = t.match(n),
                  i = r && r[1] ? r[1] : void 0,
                  o = this.extractLocation(t.replace(n, ''));
                return new e({
                  functionName: i,
                  fileName: o[0],
                  lineNumber: o[1],
                  columnNumber: o[2],
                  source: t,
                });
              }, this);
          },
          parseOpera: function (e) {
            return !e.stacktrace ||
              (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)
              ? this.parseOpera9(e)
              : e.stack
              ? this.parseOpera11(e)
              : this.parseOpera10(e);
          },
          parseOpera9: function (t) {
            for (
              var n = /Line (\d+).*script (?:in )?(\S+)/i,
                r = t.message.split('\n'),
                i = [],
                o = 2,
                s = r.length;
              o < s;
              o += 2
            ) {
              var a = n.exec(r[o]);
              a &&
                i.push(
                  new e({ fileName: a[2], lineNumber: a[1], source: r[o] })
                );
            }
            return i;
          },
          parseOpera10: function (t) {
            for (
              var n =
                  /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                r = t.stacktrace.split('\n'),
                i = [],
                o = 0,
                s = r.length;
              o < s;
              o += 2
            ) {
              var a = n.exec(r[o]);
              a &&
                i.push(
                  new e({
                    functionName: a[3] || void 0,
                    fileName: a[2],
                    lineNumber: a[1],
                    source: r[o],
                  })
                );
            }
            return i;
          },
          parseOpera11: function (n) {
            return n.stack
              .split('\n')
              .filter(function (e) {
                return !!e.match(t) && !e.match(/^Error created at/);
              }, this)
              .map(function (t) {
                var n,
                  r = t.split('@'),
                  i = this.extractLocation(r.pop()),
                  o = r.shift() || '',
                  s =
                    o
                      .replace(/<anonymous function(: (\w+))?>/, '$2')
                      .replace(/\([^\)]*\)/g, '') || void 0;
                o.match(/\(([^\)]*)\)/) &&
                  (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, '$1'));
                var a =
                  void 0 === n || '[arguments not available]' === n
                    ? void 0
                    : n.split(',');
                return new e({
                  functionName: s,
                  args: a,
                  fileName: i[0],
                  lineNumber: i[1],
                  columnNumber: i[2],
                  source: t,
                });
              }, this);
          },
        };
      });
      var L = {};
      !(function (e, t) {
        'use strict';
        'object' == typeof L
          ? (L = t(N))
          : (e.StackGenerator = t(e.StackFrame));
      })(this, function (e) {
        return {
          backtrace: function (t) {
            var n = [],
              r = 10;
            'object' == typeof t &&
              'number' == typeof t.maxStackSize &&
              (r = t.maxStackSize);
            for (var i = arguments.callee; i && n.length < r && i.arguments; ) {
              for (
                var o = new Array(i.arguments.length), s = 0;
                s < o.length;
                ++s
              )
                o[s] = i.arguments[s];
              /function(?:\s+([\w$]+))+\s*\(/.test(i.toString())
                ? n.push(new e({ functionName: RegExp.$1 || void 0, args: o }))
                : n.push(new e({ args: o }));
              try {
                i = i.caller;
              } catch (e) {
                break;
              }
            }
            return n;
          },
        };
      });
      var D =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        F = g,
        B = m,
        U = (function () {
          function e(n, r) {
            var i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : $();
            t(this, e),
              (this.__isBugsnagReport = !0),
              (this._ignored = !1),
              (this._handledState = o),
              (this.app = void 0),
              (this.apiKey = void 0),
              (this.breadcrumbs = []),
              (this.context = void 0),
              (this.device = void 0),
              (this.errorClass = Q(n, '[no error class]')),
              (this.errorMessage = Q(r, '[no error message]')),
              (this.groupingHash = void 0),
              (this.metaData = {}),
              (this.request = void 0),
              (this.severity = this._handledState.severity),
              (this.stacktrace = F(
                i,
                function (e, t) {
                  var n = z(t);
                  try {
                    return '{}' === JSON.stringify(n) ? e : e.concat(n);
                  } catch (t) {
                    return e;
                  }
                },
                []
              )),
              (this.user = void 0),
              (this.session = void 0);
          }
          return (
            (e.prototype.ignore = function () {
              this._ignored = !0;
            }),
            (e.prototype.isIgnored = function () {
              return this._ignored;
            }),
            (e.prototype.updateMetaData = function (e) {
              var t;
              if (!e) return this;
              var n = void 0;
              return null === (arguments.length <= 1 ? void 0 : arguments[1])
                ? this.removeMetaData(e)
                : null === (arguments.length <= 2 ? void 0 : arguments[2])
                ? this.removeMetaData(
                    e,
                    arguments.length <= 1 ? void 0 : arguments[1],
                    arguments.length <= 2 ? void 0 : arguments[2]
                  )
                : ('object' ==
                    typeof (arguments.length <= 1 ? void 0 : arguments[1]) &&
                    (n = arguments.length <= 1 ? void 0 : arguments[1]),
                  'string' ==
                    typeof (arguments.length <= 1 ? void 0 : arguments[1]) &&
                    (((t = {})[arguments.length <= 1 ? void 0 : arguments[1]] =
                      arguments.length <= 2 ? void 0 : arguments[2]),
                    (n = t)),
                  n
                    ? (this.metaData[e] || (this.metaData[e] = {}),
                      (this.metaData[e] = D({}, this.metaData[e], n)),
                      this)
                    : this);
            }),
            (e.prototype.removeMetaData = function (e, t) {
              return 'string' != typeof e
                ? this
                : t
                ? this.metaData[e]
                  ? (delete this.metaData[e][t], this)
                  : this
                : (delete this.metaData[e], this);
            }),
            (e.prototype.toJSON = function () {
              return {
                payloadVersion: '4',
                exceptions: [
                  {
                    errorClass: this.errorClass,
                    message: this.errorMessage,
                    stacktrace: this.stacktrace,
                    type: 'browserjs',
                  },
                ],
                severity: this.severity,
                unhandled: this._handledState.unhandled,
                severityReason: this._handledState.severityReason,
                app: this.app,
                device: this.device,
                breadcrumbs: this.breadcrumbs,
                context: this.context,
                user: this.user,
                metaData: this.metaData,
                groupingHash: this.groupingHash,
                request: this.request,
                session: this.session,
              };
            }),
            e
          );
        })(),
        z = function (e) {
          var t = {
            file: e.fileName,
            method: H(e.functionName),
            lineNumber: e.lineNumber,
            columnNumber: e.columnNumber,
            code: void 0,
            inProject: void 0,
          };
          return (
            t.lineNumber > -1 &&
              !t.file &&
              !t.method &&
              (t.file = 'global code'),
            t
          );
        },
        H = function (e) {
          return /^global code$/i.test(e) ? 'global code' : e;
        },
        $ = function () {
          return {
            unhandled: !1,
            severity: 'warning',
            severityReason: { type: 'handledException' },
          };
        },
        Q = function (e, t) {
          return 'string' == typeof e && e ? e : t;
        };
      (U.getStacktrace = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return P(e)
          ? R.parse(e).slice(t)
          : B(L.backtrace(), function (e) {
              return -1 === (e.functionName || '').indexOf('StackGenerator$$');
            }).slice(1 + n);
      }),
        (U.ensureReport = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          if (e.__isBugsnagReport) return e;
          try {
            var r = U.getStacktrace(e, t, 1 + n);
            return new U(e.name, e.message, r);
          } catch (t) {
            return new U(e.name, e.message, []);
          }
        });
      var V = U,
        W = function (e, t) {
          var n = '000000000' + e;
          return n.substr(n.length - t);
        },
        J = 'object' == typeof window ? window : self,
        K = 0;
      for (var G in J) Object.hasOwnProperty.call(J, G) && K++;
      var X = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        Y = W(
          (X + navigator.userAgent.length).toString(36) + K.toString(36),
          4
        ),
        Z = function () {
          return Y;
        },
        ee = 0,
        te = 4,
        ne = 36,
        re = Math.pow(ne, te);
      r.fingerprint = Z;
      var ie = r,
        oe = w,
        se = (function () {
          function e() {
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.id = ie()),
              (this.startedAt = oe()),
              (this._handled = 0),
              (this._unhandled = 0);
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                id: this.id,
                startedAt: this.startedAt,
                events: { handled: this._handled, unhandled: this._unhandled },
              };
            }),
            (e.prototype.trackError = function (e) {
              this[e._handledState.unhandled ? '_unhandled' : '_handled'] += 1;
            }),
            e
          );
        })(),
        ae = function (e) {
          switch (Object.prototype.toString.call(e)) {
            case '[object Error]':
            case '[object Exception]':
            case '[object DOMException]':
              return !0;
            default:
              return e instanceof Error;
          }
        },
        ce =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        ue = p,
        le = g,
        de = v,
        he = b,
        fe = function () {},
        pe = (function () {
          function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : O.schema,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            if ((i(this, e), !(t && t.name && t.version && t.url)))
              throw new Error('`notifier` argument is required');
            (this.notifier = t),
              (this.configSchema = n),
              (this._configured = !1),
              (this._transport = { sendSession: fe, sendReport: fe }),
              (this._logger = { debug: fe, info: fe, warn: fe, error: fe }),
              (this.plugins = []),
              (this.session = r),
              (this.beforeSession = []),
              (this.breadcrumbs = []),
              (this.app = {}),
              (this.context = void 0),
              (this.device = void 0),
              (this.metaData = void 0),
              (this.request = void 0),
              (this.user = {}),
              (this.BugsnagReport = V),
              (this.BugsnagBreadcrumb = S),
              (this.BugsnagSession = se);
          }
          return (
            (e.prototype.configure = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              this.config = O.mergeDefaults(
                ce({}, this.config, e),
                this.configSchema
              );
              var t = O.validate(this.config, this.configSchema);
              if (1 == !t.valid) throw new Error(ve(t.errors));
              return (
                'function' == typeof this.config.beforeSend &&
                  (this.config.beforeSend = [this.config.beforeSend]),
                null !== this.config.appVersion &&
                  (this.app.version = this.config.appVersion),
                this.config.metaData && (this.metaData = this.config.metaData),
                this.config.user && (this.user = this.config.user),
                this.config.logger && this.logger(this.config.logger),
                (this._configured = !0),
                this._logger.debug('Loaded!'),
                this
              );
            }),
            (e.prototype.use = function (e) {
              return this.plugins.push(e), e.init(this);
            }),
            (e.prototype.transport = function (e) {
              return (this._transport = e), this;
            }),
            (e.prototype.logger = function (e, t) {
              return (this._logger = e), this;
            }),
            (e.prototype.sessionDelegate = function (e) {
              return (this._sessionDelegate = e), this;
            }),
            (e.prototype.startSession = function () {
              return this._sessionDelegate
                ? this._sessionDelegate.startSession(this)
                : (this._logger.warn('No session implementation is installed'),
                  this);
            }),
            (e.prototype.leaveBreadcrumb = function (e, t, n, r) {
              if (!this._configured) throw new Error('client not configured');
              if (
                ((n = 'string' == typeof n ? n : void 0),
                (r = 'string' == typeof r ? r : void 0),
                (t = 'object' == typeof t && null !== t ? t : void 0),
                'string' == typeof (e = e || void 0) || t)
              ) {
                var i = new S(e, t, n, r);
                return (
                  this.breadcrumbs.push(i),
                  this.breadcrumbs.length > this.config.maxBreadcrumbs &&
                    (this.breadcrumbs = this.breadcrumbs.slice(
                      this.breadcrumbs.length - this.config.maxBreadcrumbs
                    )),
                  this
                );
              }
            }),
            (e.prototype.notify = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (!this._configured) throw new Error('client not configured');
              var n = q(this),
                r = ge(e, t, this._logger),
                i = r.err,
                o = r.errorFramesToSkip,
                s = r._opts;
              if ((s && (t = s), !i)) {
                var a = ye('nothing');
                this._logger.warn('Usage error. ' + a),
                  (i = new Error('Bugsnag usage error. ' + a));
              }
              ('object' == typeof t && null !== t) || (t = {});
              var c = V.ensureReport(i, o, 1);
              if (
                ((c.app = ce({ releaseStage: n }, c.app, this.app)),
                (c.context = c.context || t.context || this.context || void 0),
                (c.device = ce({}, c.device, this.device, t.device)),
                (c.request = ce({}, c.request, this.request, t.request)),
                (c.user = ce({}, c.user, this.user, t.user)),
                (c.metaData = ce({}, c.metaData, this.metaData, t.metaData)),
                (c.breadcrumbs = this.breadcrumbs.slice(0)),
                this.session &&
                  (this.session.trackError(c), (c.session = this.session)),
                void 0 !== t.severity &&
                  ((c.severity = t.severity),
                  (c._handledState.severityReason = {
                    type: 'userSpecifiedSeverity',
                  })),
                he(this.config.notifyReleaseStages) &&
                  !de(this.config.notifyReleaseStages, n))
              )
                return (
                  this._logger.warn(
                    'Report not sent due to releaseStage/notifyReleaseStages configuration'
                  ),
                  !1
                );
              var u = c.severity,
                l = [].concat(t.beforeSend).concat(this.config.beforeSend);
              return le(
                l,
                function (e, t) {
                  return (
                    !0 === e ||
                    ('function' == typeof t && !1 === t(c)) ||
                    !!c.isIgnored()
                  );
                },
                !1
              )
                ? (this._logger.debug(
                    'Report not sent due to beforeSend callback'
                  ),
                  !1)
                : (this.config.autoBreadcrumbs &&
                    this.leaveBreadcrumb(
                      c.errorClass,
                      {
                        errorClass: c.errorClass,
                        errorMessage: c.errorMessage,
                        severity: c.severity,
                      },
                      'error'
                    ),
                  u !== c.severity &&
                    (c._handledState.severityReason = {
                      type: 'userCallbackSetSeverity',
                    }),
                  this._transport.sendReport(this._logger, this.config, {
                    apiKey: c.apiKey || this.config.apiKey,
                    notifier: this.notifier,
                    events: [c],
                  }),
                  !0);
            }),
            e
          );
        })(),
        ge = function (e, t, n) {
          var r = void 0,
            i = 0,
            o = void 0;
          switch (typeof e) {
            case 'string':
              if ('string' == typeof t) {
                var s = ye('string/string');
                n.warn('Usage error. ' + s),
                  (r = new Error('Bugsnag usage error. ' + s)),
                  (o = { metaData: { notifier: { notifyArgs: [e, t] } } });
              } else (r = new Error(String(e))), (i += 2);
              break;
            case 'number':
            case 'boolean':
              r = new Error(String(e));
              break;
            case 'function':
              var a = ye('function');
              n.warn('Usage error. ' + a),
                (r = new Error('Bugsnag usage error. ' + a));
              break;
            case 'object':
              if (null !== e && (ae(e) || e.__isBugsnagReport)) r = e;
              else if (null !== e && me(e))
                ((r = new Error(e.message || e.errorMessage)).name =
                  e.name || e.errorClass),
                  (i += 2);
              else {
                var c = ye('unsupported object');
                n.warn('Usage error. ' + c),
                  (r = new Error('Bugsnag usage error. ' + c));
              }
          }
          return { err: r, errorFramesToSkip: i, _opts: o };
        },
        me = function (e) {
          return !(
            ('string' != typeof e.name && 'string' != typeof e.errorClass) ||
            ('string' != typeof e.message && 'string' != typeof e.errorMessage)
          );
        },
        ve = function (e) {
          return (
            'Bugsnag configuration error\n' +
            ue(e, function (e) {
              return (
                '"' + e.key + '" ' + e.message + ' \n    got ' + be(e.value)
              );
            }).join('\n\n')
          );
        },
        ye = function (e) {
          return 'notify() expected error/opts parameters, got ' + e;
        },
        be = function (e) {
          return 'object' == typeof e ? JSON.stringify(e) : String(e);
        },
        we = pe,
        ke = E.positiveIntIfDefined,
        Se = {
          init: function (e) {
            var t = 0;
            e.config.beforeSend.push(function (n) {
              if (t >= e.config.maxEvents) return n.ignore();
              t++;
            }),
              (e.refresh = function () {
                t = 0;
              });
          },
          configSchema: {
            maxEvents: {
              defaultValue: function () {
                return 10;
              },
              message: 'should be a positive integer ≤100',
              validate: function (e) {
                return ke(e) && e < 100;
              },
            },
          },
        },
        Ee =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Ce = O.schema,
        Oe = p,
        _e = {
          releaseStage: {
            defaultValue: function () {
              return /^localhost(:\d+)?$/.test(window.location.host)
                ? 'development'
                : 'production';
            },
            message: 'should be set',
            validate: E.stringWithLength,
          },
          collectUserIp: {
            defaultValue: function () {
              return !0;
            },
            message: 'should be true|false',
            validate: function (e) {
              return !0 === e || !1 === e;
            },
          },
          logger: Ee({}, Ce.logger, {
            defaultValue: function () {
              return 'undefined' != typeof console &&
                'function' == typeof console.debug
                ? Te()
                : void 0;
            },
          }),
        },
        Te = function () {
          var e = {},
            t = console.log;
          return (
            Oe(['debug', 'info', 'warn', 'error'], function (n) {
              var r = console[n];
              e[n] =
                'function' == typeof r
                  ? r.bind(console, '[bugsnag]')
                  : t.bind(console, '[bugsnag]');
            }),
            e
          );
        },
        je = {},
        xe = p,
        Ie = g,
        Ae = m;
      (je.init = function (e) {
        xe(Me, function (t) {
          var n = console[t];
          (console[t] = function () {
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            e.leaveBreadcrumb(
              'Console output',
              Ie(
                i,
                function (e, t, n) {
                  var r = String(t);
                  if ('[object Object]' === r)
                    try {
                      r = JSON.stringify(t);
                    } catch (e) {}
                  return (e['[' + n + ']'] = r), e;
                },
                { severity: 0 === t.indexOf('group') ? 'log' : t }
              ),
              'log'
            ),
              n.apply(console, i);
          }),
            (console[t]._restore = function () {
              console[t] = n;
            });
        });
      }),
        (je.configSchema = {
          consoleBreadcrumbsEnabled: {
            defaultValue: function () {},
            validate: function (e) {
              return !0 === e || !1 === e || void 0 === e;
            },
            message: 'should be true|false',
          },
        });
      var Me = Ae(['log', 'debug', 'info', 'warn', 'error'], function (e) {
          return (
            'undefined' != typeof console && 'function' == typeof console[e]
          );
        }),
        qe = {
          init: function (e) {
            e.config.beforeSend.unshift(function (e) {
              e.context || (e.context = window.location.pathname);
            });
          },
        },
        Pe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Ne = w,
        Re = {
          init: function (e) {
            e.config.beforeSend.unshift(function (e) {
              e.device = Pe(
                {
                  time: Ne(),
                  locale:
                    navigator.browserLanguage ||
                    navigator.systemLanguage ||
                    navigator.userLanguage ||
                    navigator.language,
                  userAgent: navigator.userAgent,
                },
                e.device
              );
            }),
              e.beforeSession.push(function (e) {
                e.device = { userAgent: navigator.userAgent };
              });
          },
        },
        Le = {},
        De = g,
        Fe = /^.*<script.*?>/,
        Be = /<\/script>.*$/,
        Ue = ((Le = {
          init: function (e) {
            var t = '',
              n = !1,
              r = function () {
                return document.documentElement.outerHTML;
              },
              i = window.location.href;
            (t = r()),
              (document.onreadystatechange = function () {
                'interactive' === document.readyState && ((t = r()), (n = !0));
              }),
              e.config.beforeSend.unshift(function (e) {
                var o = e.stacktrace[0];
                if (!o || !o.file || !o.lineNumber) return o;
                if (o.file.replace(/#.*$/, '') !== i.replace(/#.*$/, ''))
                  return o;
                (n && t) || (t = r());
                var s = ['\x3c!-- DOC START --\x3e'].concat(t.split('\n')),
                  a = Ue(s, o.lineNumber - 1),
                  c = a.script,
                  u = a.start,
                  l = De(
                    c,
                    function (e, t, n) {
                      return (
                        Math.abs(u + n + 1 - o.lineNumber) > 10 ||
                          (e['' + (u + n + 1)] = t),
                        e
                      );
                    },
                    {}
                  );
                (o.code = l),
                  e.updateMetaData('script', { content: c.join('\n') });
              });
          },
        }).extractScriptContent = function (e, t) {
          for (var n = t; n < e.length && !Be.test(e[n]); ) n++;
          for (var r = n; n > 0 && !Fe.test(e[n]); ) n--;
          var i = n,
            o = e.slice(i, r + 1);
          return (
            (o[0] = o[0].replace(Fe, '')),
            (o[o.length - 1] = o[o.length - 1].replace(Be, '')),
            { script: o, start: i }
          );
        }),
        ze = {
          init: function (e) {
            'addEventListener' in window &&
              window.addEventListener(
                'click',
                function (t) {
                  var n = void 0,
                    r = void 0;
                  try {
                    (n = He(t.target)),
                      (r = (function e(t) {
                        var n = [t.tagName];
                        if (
                          (t.id && n.push('#' + t.id),
                          t.className &&
                            t.className.length &&
                            n.push('.' + t.className.split(' ').join('.')),
                          !document.querySelectorAll ||
                            !Array.prototype.indexOf)
                        )
                          return n.join('');
                        try {
                          if (
                            1 === document.querySelectorAll(n.join('')).length
                          )
                            return n.join('');
                        } catch (e) {
                          return n.join('');
                        }
                        if (t.parentNode.childNodes.length > 1) {
                          var r =
                            Array.prototype.indexOf.call(
                              t.parentNode.childNodes,
                              t
                            ) + 1;
                          n.push(':nth-child(' + r + ')');
                        }
                        return 1 ===
                          document.querySelectorAll(n.join('')).length
                          ? n.join('')
                          : t.parentNode
                          ? e(t.parentNode) + ' > ' + n.join('')
                          : n.join('');
                      })(t.target));
                  } catch (t) {
                    (n = '[hidden]'),
                      (r = '[hidden]'),
                      e._logger.error(
                        'Cross domain error when tracking click event. See docs: https://tinyurl.com/y94fq5zm'
                      );
                  }
                  e.leaveBreadcrumb(
                    'UI click',
                    { targetText: n, targetSelector: r },
                    'user'
                  );
                },
                !0
              );
          },
          configSchema: {
            interactionBreadcrumbsEnabled: {
              defaultValue: function () {},
              validate: function (e) {
                return !0 === e || !1 === e || void 0 === e;
              },
              message: 'should be true|false',
            },
          },
        },
        He = function (e) {
          var t = e.textContent || e.innerText || '';
          return (
            t || ('submit' !== e.type && 'button' !== e.type) || (t = e.value),
            (function (e, t) {
              return e && e.length <= t
                ? e
                : e.slice(0, t - '(...)'.length) + '(...)';
            })((t = t.replace(/^\s+|\s+$/g, '')), 140)
          );
        },
        $e =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Qe = {
          init: function (e) {
            e.config.collectUserIp ||
              e.config.beforeSend.push(function (e) {
                (e.user = $e({ id: '[NOT COLLECTED]' }, e.user)),
                  (e.request = $e({ clientIp: '[NOT COLLECTED]' }, e.request));
              });
          },
        },
        Ve = {
          init: function (e) {
            if ('addEventListener' in window) {
              var t = function (t) {
                return function () {
                  return e.leaveBreadcrumb(t, {}, 'navigation');
                };
              };
              window.addEventListener('pagehide', t('Page hidden'), !0),
                window.addEventListener('pageshow', t('Page shown'), !0),
                window.addEventListener('load', t('Page loaded'), !0),
                window.document.addEventListener(
                  'DOMContentLoaded',
                  t('DOMContentLoaded'),
                  !0
                ),
                window.addEventListener('load', function () {
                  return window.addEventListener(
                    'popstate',
                    t('Navigated back'),
                    !0
                  );
                }),
                window.addEventListener(
                  'hashchange',
                  function (t) {
                    var n = t.oldURL
                      ? { from: We(t.oldURL), to: We(t.newURL), state: Ke() }
                      : { to: We(window.location.href) };
                    e.leaveBreadcrumb('Hash changed', n, 'navigation');
                  },
                  !0
                ),
                window.history.replaceState &&
                  Je(e, window.history, 'replaceState'),
                window.history.pushState && Je(e, window.history, 'pushState'),
                e.leaveBreadcrumb('Bugsnag loaded', {}, 'navigation');
            }
          },
          configSchema: {
            navigationBreadcrumbsEnabled: {
              defaultValue: function () {},
              validate: function (e) {
                return !0 === e || !1 === e || void 0 === e;
              },
              message: 'should be true|false',
            },
          },
        },
        We = function (e) {
          var t = document.createElement('A');
          return (t.href = e), '' + t.pathname + t.search + t.hash;
        },
        Je = function (e, t, n) {
          var r = t[n];
          (t[n] = function (i, o, s) {
            e.leaveBreadcrumb(
              'History ' + n,
              (function (e, t, n) {
                var r = We(window.location.href);
                return {
                  title: t,
                  state: e,
                  prevState: Ke(),
                  to: n || r,
                  from: r,
                };
              })(i, o, s),
              'navigation'
            ),
              'function' == typeof e.refresh && e.refresh(),
              e.session && e.startSession(),
              r.apply(t, [i, o].concat(void 0 !== s ? s : []));
          }),
            (t[n]._restore = function () {
              t[n] = r;
            });
        },
        Ke = function () {
          try {
            return window.history.state;
          } catch (e) {}
        },
        Ge = {},
        Xe = 'request',
        Ye = 'BS~~U',
        Ze = 'BS~~M',
        et = v,
        tt = void 0,
        nt = function () {
          return [tt.config.endpoints.notify, tt.config.endpoints.sessions];
        };
      (Ge.init = function (e) {
        (tt = e), rt(), it();
      }),
        (Ge.configSchema = {
          networkBreadcrumbsEnabled: {
            defaultValue: function () {},
            validate: function (e) {
              return !0 === e || !1 === e || void 0 === e;
            },
            message: 'should be true|false',
          },
        });
      var rt = function () {
          if ('addEventListener' in window.XMLHttpRequest.prototype) {
            var e = window.XMLHttpRequest.prototype.open;
            window.XMLHttpRequest.prototype.open = function (t, n) {
              (this[Ye] = n),
                (this[Ze] = t),
                this['BS~~S'] &&
                  (this.removeEventListener('load', o),
                  this.removeEventListener('error', s)),
                this.addEventListener('load', o),
                this.addEventListener('error', s),
                (this['BS~~S'] = !0),
                e.apply(this, arguments);
            };
          }
        },
        it = function () {
          if ('fetch' in window) {
            var e = window.fetch;
            window.fetch = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              var i = n[0],
                o = n[1],
                s = 'GET';
              return (
                o && o.method && (s = o.method),
                new Promise(function (t, r) {
                  e.apply(void 0, n)
                    .then(function (e) {
                      ot(e, s, i), t(e);
                    })
                    .catch(function (e) {
                      st(s, i), r(e);
                    });
                })
              );
            };
          }
        },
        ot = function (e, t, n) {
          var r = { status: e.status, request: t + ' ' + n };
          e.status >= 400
            ? tt.leaveBreadcrumb('fetch() failed', r, Xe)
            : tt.leaveBreadcrumb('fetch() succeeded', r, Xe);
        },
        st = function (e, t) {
          tt.leaveBreadcrumb('fetch() error', { request: e + ' ' + t }, Xe);
        },
        at =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        ct = {
          init: function (e) {
            e.config.beforeSend.unshift(function (e) {
              (e.request && e.request.url) ||
                (e.request = at({}, e.request, { url: window.location.href }));
            });
          },
        },
        ut =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        lt = p,
        dt = b,
        ht = v,
        ft = {
          init: function (e) {
            return e.sessionDelegate(pt);
          },
        },
        pt = {
          startSession: function (e) {
            var t = e;
            (t.session = new e.BugsnagSession()),
              lt(t.beforeSession, function (e) {
                return e(t);
              });
            var n = q(t);
            return dt(t.config.notifyReleaseStages) &&
              !ht(t.config.notifyReleaseStages, n)
              ? (t._logger.warn(
                  'Session not sent due to releaseStage/notifyReleaseStages configuration'
                ),
                t)
              : t.config.endpoints.sessions
              ? (t._transport.sendSession(t._logger, t.config, {
                  notifier: t.notifier,
                  device: t.device,
                  app: ut({ releaseStage: n }, t.app),
                  sessions: [
                    {
                      id: t.session.id,
                      startedAt: t.session.startedAt,
                      user: t.user,
                    },
                  ],
                }),
                t)
              : (t._logger.warn(
                  'Session not sent due to missing endpoints.sessions configuration'
                ),
                t);
          },
        },
        gt = {},
        mt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        vt = p,
        yt = ((gt = {
          init: function (e) {
            e.config.beforeSend.push(function (e) {
              e.stacktrace = vt(e.stacktrace, function (e) {
                return mt({}, e, { file: yt(e.file) });
              });
            });
          },
        })._strip = function (e) {
          return 'string' == typeof e
            ? e.replace(/\?.*$/, '').replace(/#.*$/, '')
            : e;
        }),
        bt = {},
        wt = g;
      bt.init = function (e) {
        var t = function (t) {
          var n = t.reason,
            r = !1;
          t.detail && t.detail.reason && ((n = t.detail.reason), (r = !0));
          var i = {
              severity: 'error',
              unhandled: !0,
              severityReason: { type: 'unhandledPromiseRejection' },
            },
            o = void 0;
          n && P(n)
            ? ((o = new e.BugsnagReport(n.name, n.message, R.parse(n), i)),
              r && (o.stacktrace = wt(o.stacktrace, St(n), [])))
            : (o = new e.BugsnagReport(
                n && n.name ? n.name : 'UnhandledRejection',
                n && n.message
                  ? n.message
                  : 'Rejection reason was not an Error. See "Promise" tab for more detail.',
                [],
                i
              )).updateMetaData('promise', 'rejection reason', kt(n)),
            e.notify(o);
        };
        'addEventListener' in window
          ? window.addEventListener('unhandledrejection', t)
          : (window.onunhandledrejection = function (e, n) {
              t({ detail: { reason: e, promise: n } });
            });
      };
      var kt = function (e) {
          return null == e
            ? 'undefined (or null)'
            : ae(e)
            ? (((t = {})[Object.prototype.toString.call(e)] = {
                name: e.name,
                message: e.message,
                code: e.code,
                stack: e.stack,
              }),
              t)
            : e;
          var t;
        },
        St = function (e) {
          return function (t, n) {
            return n.file === e.toString()
              ? t
              : (n.method && (n.method = n.method.replace(/^\s+/, '')),
                t.concat(n));
          };
        },
        Et = {
          init: function (e) {
            var t = window.onerror;
            window.onerror = function (n, r, i, o, s) {
              if (0 === i && /Script error\.?/.test(n))
                e._logger.warn(
                  'Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/y94fq5zm'
                );
              else {
                var a = {
                    severity: 'error',
                    unhandled: !0,
                    severityReason: { type: 'unhandledException' },
                  },
                  c = void 0;
                if (s)
                  s.name && s.message
                    ? (c = new e.BugsnagReport(
                        s.name,
                        s.message,
                        Ct(e.BugsnagReport.getStacktrace(s), r, i, o),
                        a
                      ))
                    : (c = new e.BugsnagReport(
                        'window.onerror',
                        String(s),
                        Ct(e.BugsnagReport.getStacktrace(s, 1), r, i, o),
                        a
                      )).updateMetaData('window onerror', { error: s });
                else if ('object' != typeof n || null === n || r || i || o || s)
                  (c = new e.BugsnagReport(
                    'window.onerror',
                    String(n),
                    Ct(e.BugsnagReport.getStacktrace(s, 1), r, i, o),
                    a
                  )).updateMetaData('window onerror', { event: n });
                else {
                  var u = n.type ? 'Event: ' + n.type : 'window.onerror',
                    l = n.message || n.detail || '';
                  (c = new e.BugsnagReport(
                    u,
                    l,
                    e.BugsnagReport.getStacktrace(new Error(), 1).slice(1),
                    a
                  )).updateMetaData('window onerror', { event: n });
                }
                e.notify(c), 'function' == typeof t && t(n, r, i, o, s);
              }
            };
          },
        },
        Ct = function (e, t, n, r) {
          var i = e[0];
          return i
            ? (i.fileName || i.setFileName(t),
              i.lineNumber || i.setLineNumber(n),
              i.columnNumber ||
                (void 0 !== r
                  ? i.setColumnNumber(r)
                  : window.event &&
                    window.event.errorCharacter &&
                    i.setColumnNumber(
                      window.event && window.event.errorCharacter
                    )),
              e)
            : e;
        },
        Ot = function (e, t, n) {
          return JSON.stringify(u(e), t, n);
        },
        _t = 20,
        Tt = 25e3,
        jt = 8,
        xt = '...',
        It = function (e) {
          var t = Ot(e);
          if (
            t.length > 1e6 &&
            (delete e.events[0].metaData,
            (e.events[0].metaData = {
              notifier:
                'WARNING!\nSerialized payload was ' +
                t.length / 1e6 +
                'MB (limit = 1MB)\nmetaData was removed',
            }),
            (t = Ot(e)).length > 1e6)
          )
            throw new Error('payload exceeded 1MB limit');
          return t;
        },
        At = {},
        Mt = w;
      At = {
        sendReport: function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {},
            i = Pt(t, 'notify', '4.0'),
            o = new window.XDomainRequest();
          (o.onload = function () {
            r(null, o.responseText);
          }),
            o.open('POST', i),
            setTimeout(function () {
              try {
                o.send(It(n));
              } catch (t) {
                e.error(t);
              }
            }, 0);
        },
        sendSession: function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {},
            i = Pt(t, 'sessions', '1.0'),
            o = new window.XDomainRequest();
          (o.onload = function () {
            r(null, o.responseText);
          }),
            o.open('POST', i),
            setTimeout(function () {
              try {
                o.send(Ot(n));
              } catch (t) {
                e.error(t);
              }
            }, 0);
        },
      };
      var qt,
        Pt = function (e, t, n) {
          return (
            Nt(e.endpoints[t], window.location.protocol) +
            '?apiKey=' +
            encodeURIComponent(e.apiKey) +
            '&payloadVersion=' +
            n +
            '&sentAt=' +
            encodeURIComponent(Mt())
          );
        },
        Nt = (At._matchPageProtocol = function (e, t) {
          return 'http:' === t ? e.replace(/^https:/, 'http:') : e;
        }),
        Rt = w,
        Lt = {
          sendReport: function (e, t, n) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {};
            try {
              var i = t.endpoints.notify,
                o = new window.XMLHttpRequest();
              (o.onreadystatechange = function () {
                o.readyState === window.XMLHttpRequest.DONE &&
                  r(null, o.responseText);
              }),
                o.open('POST', i),
                o.setRequestHeader('Content-Type', 'application/json'),
                o.setRequestHeader('Bugsnag-Api-Key', n.apiKey || t.apiKey),
                o.setRequestHeader('Bugsnag-Payload-Version', '4.0'),
                o.setRequestHeader('Bugsnag-Sent-At', Rt()),
                o.send(It(n));
            } catch (t) {
              e.error(t);
            }
          },
          sendSession: function (e, t, n) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {};
            try {
              var i = t.endpoints.sessions,
                o = new window.XMLHttpRequest();
              (o.onreadystatechange = function () {
                o.readyState === window.XMLHttpRequest.DONE &&
                  r(null, o.responseText);
              }),
                o.open('POST', i),
                o.setRequestHeader('Content-Type', 'application/json'),
                o.setRequestHeader('Bugsnag-Api-Key', t.apiKey),
                o.setRequestHeader('Bugsnag-Payload-Version', '1.0'),
                o.setRequestHeader('Bugsnag-Sent-At', Rt()),
                o.send(Ot(n));
            } catch (t) {
              e.error(t);
            }
          },
        },
        Dt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Ft = p,
        Bt = g,
        Ut = Dt({}, O.schema, _e),
        zt = [Et, bt, Re, qe, ct, Se, je, Ge, Ve, ze, Le, ft, Qe, gt];
      qt = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        'string' == typeof e && (e = { apiKey: e });
        var n = [];
        e.sessionTrackingEnabled &&
          (n.push(
            'deprecated option sessionTrackingEnabled is now called autoCaptureSessions'
          ),
          (e.autoCaptureSessions = e.sessionTrackingEnabled)),
          (!e.endpoint && !e.sessionEndpoint) ||
            e.endpoints ||
            (n.push(
              'deprecated options endpoint/sessionEndpoint are now configured in the endpoints object'
            ),
            (e.endpoints = {
              notify: e.endpoint,
              sessions: e.sessionEndpoint,
            })),
          e.endpoints &&
            e.endpoints.notify &&
            !e.endpoints.sessions &&
            n.push(
              'notify endpoint is set but sessions endpoint is not. No sessions will be sent.'
            );
        var r = Bt(
            [].concat(zt).concat(t),
            function (e, t) {
              return t.configSchema ? Dt({}, e, t.configSchema) : e;
            },
            Ut
          ),
          i = new we(
            {
              name: 'Bugsnag JavaScript',
              version: '4.7.3',
              url: 'https://github.com/bugsnag/bugsnag-js',
            },
            r
          );
        return (
          i.transport(window.XDomainRequest ? At : Lt),
          i.configure(e),
          Ft(n, function (e) {
            return i._logger.warn(e);
          }),
          i.use(Re),
          i.use(qe),
          i.use(ct),
          i.use(Le),
          i.use(Se),
          i.use(ft),
          i.use(Qe),
          i.use(gt),
          !1 !== i.config.autoNotify && (i.use(Et), i.use(bt)),
          Ht(i.config, 'navigationBreadcrumbsEnabled') && i.use(Ve),
          Ht(i.config, 'interactionBreadcrumbsEnabled') && i.use(ze),
          Ht(i.config, 'networkBreadcrumbsEnabled') && i.use(Ge),
          Ht(i.config, 'consoleBreadcrumbsEnabled', !1) && i.use(je),
          Ft(t, function (e) {
            return i.use(e);
          }),
          i.config.autoCaptureSessions ? i.startSession() : i
        );
      };
      var Ht = function (e, t) {
        var n =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return 'boolean' == typeof e[t]
          ? e[t]
          : e.autoBreadcrumbs &&
              (n || !/^dev(elopment)?$/.test(e.releaseStage));
      };
      return (
        (qt.Bugsnag = { Client: we, Report: V, Session: se, Breadcrumb: S }),
        (qt.default = qt),
        qt
      );
    })();
  },
  function (e, t) {
    e.exports = '3.1.29';
  },
  function (e, t, n) {
    'use strict';
    var r = n(59),
      i = n(62),
      o = n(64),
      s = n(65);
    function a(e, t, n, i, o) {
      var s = new XMLHttpRequest();
      for (var a in ((s.onerror = o),
      (s.onreadystatechange = function () {
        if (4 === s.readyState) return o(null, s);
      }),
      s.open('POST', e, !0),
      i && ((s.timeout = i), (s.ontimeout = o)),
      n))
        s.setRequestHeader(a, n[a]);
      s.send(r.stringify(t));
    }
    function c(e, n, o, a, c) {
      var u = t.prefix,
        l = (function (e) {
          var t = '';
          return (
            (t = r.stringify(e)),
            (t = (t = i(t)).replace(/\+/g, '-').replace(/\//g, '_')),
            encodeURIComponent(t)
          );
        })(n);
      s((e += '?' + u + '=' + l), { param: t.callback }, function (t, n) {
        if (t) return c(t);
        c(null, { url: e, body: n });
      });
    }
    ((t = e.exports = o ? a : c).callback = 'callback'),
      (t.prefix = 'data'),
      (t.json = a),
      (t.base64 = c),
      (t.type = o ? 'xhr' : 'jsonp');
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'renderQuestionnaire', function () {
        return c;
      }),
      n.d(t, 'attachQuestionnaire', function () {
        return u;
      });
    var r = n(2),
      i = n(1),
      o = n(23),
      s = n(5),
      a = n(22);
    function c(e, t, c, u) {
      return new Promise((l) => {
        requestAnimationFrame(
          Object(r.d)(() => {
            const d = new i.a('questionnaire-render'),
              h = Object(s.c)(e, c.preview);
            h.length > 0
              ? Promise.all([n.e(2), n.e(0), n.e(9)])
                  .then(n.bind(null, 69))
                  .then(
                    ({ NewQuestionnaire: e }) => (
                      d.info('Loaded async questionnaire Webpack chunk'),
                      h
                        .sort((e, t) => e.priority - t.priority)
                        .find((n) => {
                          const r = e(
                            n,
                            c.userDataStore.getWriteableStore(),
                            c.exporter,
                            u,
                            t
                          );
                          return (
                            !!r.shouldDisplay() &&
                            (d.debug('Found questionnaire to render', r),
                            r.isRendered() ||
                              (r.attach(),
                              (function (e, t, n, r) {
                                document.addEventListener(
                                  'mutiny:questionnaire-complete',
                                  () => {
                                    const i = Object(o.b)(
                                      t.audience_segments,
                                      'person.questionnaire.' + e.key
                                    );
                                    if (i.length > 0)
                                      return (
                                        r.info(
                                          'Found dependent segments to re-evaluate',
                                          i
                                        ),
                                        Object(a.a)(
                                          Object(a.c)(i, n, {
                                            alwaysEvaluate: !0,
                                          }),
                                          t,
                                          n
                                        )
                                      );
                                    r.info('Found no dependent segments');
                                  }
                                );
                              })(n, t, c, d)),
                            !0)
                          );
                        })
                    )
                  )
                  .then((e) => l(Boolean(e)))
                  .catch((e) => {
                    throw (r.b.notify(e), l(!1), e);
                  })
              : l(!1);
          })
        );
      });
    }
    const u = (e, t) => c(e.questionnaires, e, t);
  },
  function (e, t) {
    /*! (c) Andrea Giammarchi @webreflection ISC */
    !(function () {
      'use strict';
      var e =
          'function' == typeof Promise
            ? Promise
            : function (e) {
                var t,
                  n = [],
                  r = 0;
                return (
                  e(function (e) {
                    (t = e), (r = 1), n.splice(0).forEach(i);
                  }),
                  { then: i }
                );
                function i(e) {
                  return r ? setTimeout(e, 0, t) : n.push(e), this;
                }
              },
        t = function (e, t) {
          var n = function (e) {
              for (var t = 0, n = e.length; t < n; t++) r(e[t]);
            },
            r = function (e) {
              var t = e.target,
                n = e.attributeName,
                r = e.oldValue;
              t.attributeChangedCallback(n, r, t.getAttribute(n));
            };
          return function (i, o) {
            var s = i.constructor.observedAttributes;
            return (
              s &&
                e(o).then(function () {
                  new t(n).observe(i, {
                    attributes: !0,
                    attributeOldValue: !0,
                    attributeFilter: s,
                  });
                  for (var e = 0, o = s.length; e < o; e++)
                    i.hasAttribute(s[e]) &&
                      r({ target: i, attributeName: s[e], oldValue: null });
                }),
              i
            );
          };
        },
        n = 'querySelectorAll';
      function r(e) {
        this.observe(e, { subtree: !0, childList: !0 });
      }
      var i = 'querySelectorAll',
        o = self,
        s = o.document,
        a = o.Element,
        c = o.MutationObserver,
        u = o.Set,
        l = o.WeakMap,
        d = function (e) {
          return i in e;
        },
        h = [].filter,
        f = function (e) {
          var t = new l(),
            o = function (n, r) {
              var i;
              if (r)
                for (
                  var o,
                    s = (function (e) {
                      return (
                        e.matches ||
                        e.webkitMatchesSelector ||
                        e.msMatchesSelector
                      );
                    })(n),
                    a = 0,
                    c = p.length;
                  a < c;
                  a++
                )
                  s.call(n, (o = p[a])) &&
                    (t.has(n) || t.set(n, new u()),
                    (i = t.get(n)).has(o) || (i.add(o), e.handle(n, r, o)));
              else
                t.has(n) &&
                  ((i = t.get(n)),
                  t.delete(n),
                  i.forEach(function (t) {
                    e.handle(n, r, t);
                  }));
            },
            f = function (e) {
              for (
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  n = 0,
                  r = e.length;
                n < r;
                n++
              )
                o(e[n], t);
            },
            p = e.query,
            g = e.root || s,
            m = (function (e, t, i) {
              var o = function t(r, i, o, s, a) {
                  for (var c = 0, u = r.length; c < u; c++) {
                    var l = r[c];
                    (a || n in l) &&
                      (s
                        ? i.has(l) || (i.add(l), o.delete(l), e(l, s))
                        : o.has(l) || (o.add(l), i.delete(l), e(l, s)),
                      a || t(l[n]('*'), i, o, s, !0));
                  }
                },
                s = new (i || MutationObserver)(function (e) {
                  for (
                    var t = new Set(), n = new Set(), r = 0, i = e.length;
                    r < i;
                    r++
                  ) {
                    var s = e[r],
                      a = s.addedNodes,
                      c = s.removedNodes;
                    o(c, t, n, !1, !1), o(a, t, n, !0, !1);
                  }
                });
              return (s.add = r), s.add(t || document), s;
            })(o, g, c),
            v = a.prototype.attachShadow;
          return (
            v &&
              (a.prototype.attachShadow = function (e) {
                var t = v.call(this, e);
                return m.add(t), t;
              }),
            p.length && f(g[i](p)),
            {
              drop: function (e) {
                for (var n = 0, r = e.length; n < r; n++) t.delete(e[n]);
              },
              flush: function () {
                for (var e = m.takeRecords(), t = 0, n = e.length; t < n; t++)
                  f(h.call(e[t].removedNodes, d), !1),
                    f(h.call(e[t].addedNodes, d), !0);
              },
              observer: m,
              parse: f,
            }
          );
        },
        p = self,
        g = p.document,
        m = p.Map,
        v = p.MutationObserver,
        y = p.Object,
        b = p.Set,
        w = p.WeakMap,
        k = p.Element,
        S = p.HTMLElement,
        E = p.Node,
        C = p.Error,
        O = p.TypeError,
        _ = p.Reflect,
        T = self.Promise || e,
        j = y.defineProperty,
        x = y.keys,
        I = y.getOwnPropertyNames,
        A = y.setPrototypeOf,
        M = !self.customElements,
        q = function (e) {
          for (var t = x(e), n = [], r = t.length, i = 0; i < r; i++)
            (n[i] = e[t[i]]), delete e[t[i]];
          return function () {
            for (var i = 0; i < r; i++) e[t[i]] = n[i];
          };
        };
      if (M) {
        var P = function () {
            var e = this.constructor;
            if (!R.has(e)) throw new O('Illegal constructor');
            var t = R.get(e);
            if (z) return $(z, t);
            var n = N.call(g, t);
            return $(A(n, e.prototype), t);
          },
          N = g.createElement,
          R = new m(),
          L = new m(),
          D = new m(),
          F = new m(),
          B = [],
          U = f({
            query: B,
            handle: function (e, t, n) {
              var r = D.get(n);
              if (t && !r.isPrototypeOf(e)) {
                var i = q(e);
                z = A(e, r);
                try {
                  new r.constructor();
                } finally {
                  (z = null), i();
                }
              }
              var o = ''.concat(t ? '' : 'dis', 'connectedCallback');
              o in r && e[o]();
            },
          }).parse,
          z = null,
          H = function (t) {
            if (!L.has(t)) {
              var n,
                r = new e(function (e) {
                  n = e;
                });
              L.set(t, { $: r, _: n });
            }
            return L.get(t).$;
          },
          $ = t(H, v);
        j(self, 'customElements', {
          configurable: !0,
          value: {
            define: function (e, t) {
              if (F.has(e))
                throw new C(
                  'the name "'.concat(
                    e,
                    '" has already been used with this registry'
                  )
                );
              R.set(t, e),
                D.set(e, t.prototype),
                F.set(e, t),
                B.push(e),
                H(e).then(function () {
                  U(g.querySelectorAll(e));
                }),
                L.get(e)._(t);
            },
            get: function (e) {
              return F.get(e);
            },
            whenDefined: H,
          },
        }),
          j((P.prototype = S.prototype), 'constructor', { value: P }),
          j(self, 'HTMLElement', { configurable: !0, value: P }),
          j(g, 'createElement', {
            configurable: !0,
            value: function (e, t) {
              var n = t && t.is,
                r = n ? F.get(n) : F.get(e);
              return r ? new r() : N.call(g, e);
            },
          }),
          'isConnected' in E.prototype ||
            j(E.prototype, 'isConnected', {
              configurable: !0,
              get: function () {
                return !(
                  this.ownerDocument.compareDocumentPosition(this) &
                  this.DOCUMENT_POSITION_DISCONNECTED
                );
              },
            });
      } else
        try {
          var Q = function e() {
            return self.Reflect.construct(HTMLLIElement, [], e);
          };
          Q.prototype = HTMLLIElement.prototype;
          var V = 'extends-li';
          self.customElements.define('extends-li', Q, { extends: 'li' }),
            (M = g.createElement('li', { is: V }).outerHTML.indexOf(V) < 0);
          var W = self.customElements,
            J = W.get,
            K = W.whenDefined;
          j(self.customElements, 'whenDefined', {
            configurable: !0,
            value: function (e) {
              var t = this;
              return K.call(this, e).then(function (n) {
                return n || J.call(t, e);
              });
            },
          });
        } catch (e) {
          M = !M;
        }
      if (M) {
        var G = function (e) {
            var t = ie.get(e);
            fe(t.querySelectorAll(this), e.isConnected);
          },
          X = self.customElements,
          Y = k.prototype.attachShadow,
          Z = g.createElement,
          ee = X.define,
          te = X.get,
          ne = X.upgrade,
          re = (
            _ || {
              construct: function (e) {
                return e.call(this);
              },
            }
          ).construct,
          ie = new w(),
          oe = new b(),
          se = new m(),
          ae = new m(),
          ce = new m(),
          ue = new m(),
          le = [],
          de = [],
          he = function (e) {
            return ue.get(e) || te.call(X, e);
          },
          fe = f({
            query: de,
            handle: function (e, t, n) {
              var r = ce.get(n);
              if (t && !r.isPrototypeOf(e)) {
                var i = q(e);
                ve = A(e, r);
                try {
                  new r.constructor();
                } finally {
                  (ve = null), i();
                }
              }
              var o = ''.concat(t ? '' : 'dis', 'connectedCallback');
              o in r && e[o]();
            },
          }).parse,
          pe = f({
            query: le,
            handle: function (e, t) {
              ie.has(e) &&
                (t ? oe.add(e) : oe.delete(e), de.length && G.call(de, e));
            },
          }).parse,
          ge = function (e) {
            if (!ae.has(e)) {
              var t,
                n = new T(function (e) {
                  t = e;
                });
              ae.set(e, { $: n, _: t });
            }
            return ae.get(e).$;
          },
          me = t(ge, v),
          ve = null;
        I(self)
          .filter(function (e) {
            return /^HTML.*Element$/.test(e);
          })
          .forEach(function (e) {
            var t = self[e];
            function n() {
              var e = this.constructor;
              if (!se.has(e)) throw new O('Illegal constructor');
              var n = se.get(e),
                r = n.is,
                i = n.tag;
              if (r) {
                if (ve) return me(ve, r);
                var o = Z.call(g, i);
                return o.setAttribute('is', r), me(A(o, e.prototype), r);
              }
              return re.call(this, t, [], e);
            }
            j((n.prototype = t.prototype), 'constructor', { value: n }),
              j(self, e, { value: n });
          }),
          j(g, 'createElement', {
            configurable: !0,
            value: function (e, t) {
              var n = t && t.is;
              if (n) {
                var r = ue.get(n);
                if (r && se.get(r).tag === e) return new r();
              }
              var i = Z.call(g, e);
              return n && i.setAttribute('is', n), i;
            },
          }),
          Y &&
            (k.prototype.attachShadow = function (e) {
              var t = Y.call(this, e);
              return ie.set(this, t), t;
            }),
          j(X, 'get', { configurable: !0, value: he }),
          j(X, 'whenDefined', { configurable: !0, value: ge }),
          j(X, 'upgrade', {
            configurable: !0,
            value: function (e) {
              var t = e.getAttribute('is');
              if (t) {
                var n = ue.get(t);
                if (n) return void me(A(e, n.prototype), t);
              }
              ne.call(X, e);
            },
          }),
          j(X, 'define', {
            configurable: !0,
            value: function (e, t, n) {
              if (he(e))
                throw new C(
                  "'".concat(
                    e,
                    "' has already been defined as a custom element"
                  )
                );
              var r,
                i = n && n.extends;
              se.set(t, i ? { is: e, tag: i } : { is: '', tag: e }),
                i
                  ? ((r = ''.concat(i, '[is="').concat(e, '"]')),
                    ce.set(r, t.prototype),
                    ue.set(e, t),
                    de.push(r))
                  : (ee.apply(X, arguments), le.push((r = e))),
                ge(e).then(function () {
                  i
                    ? (fe(g.querySelectorAll(r)), oe.forEach(G, [r]))
                    : pe(g.querySelectorAll(r));
                }),
                ae.get(e)._(t);
            },
          });
      }
    })();
  },
  function (e, t, n) {
    'use strict';
    (function (e) {
      var t = n(49),
        r = n(35),
        i = (function () {
          if ('undefined' != typeof self) return self;
          if ('undefined' != typeof window) return window;
          if (void 0 !== e) return e;
          throw new Error('unable to locate global object');
        })();
      'Promise' in i
        ? i.Promise.prototype.finally || (i.Promise.prototype.finally = r.a)
        : (i.Promise = t.a);
    }.call(this, n(27)));
  },
  function (e, t, n) {
    (function (e) {
      var r =
          (void 0 !== e && e) || ('undefined' != typeof self && self) || window,
        i = Function.prototype.apply;
      function o(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new o(i.call(setTimeout, r, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new o(i.call(setInterval, r, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(r, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        n(57),
        (t.setImmediate =
          ('undefined' != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ('undefined' != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, n(27)));
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        'use strict';
        if (!e.setImmediate) {
          var r,
            i,
            o,
            s,
            a,
            c = 1,
            u = {},
            l = !1,
            d = e.document,
            h = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (h = h && h.setTimeout ? h : e),
            '[object process]' === {}.toString.call(e.process)
              ? (r = function (e) {
                  t.nextTick(function () {
                    p(e);
                  });
                })
              : !(function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage('', '*'),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? e.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function (e) {
                    p(e.data);
                  }),
                  (r = function (e) {
                    o.port2.postMessage(e);
                  }))
                : d && 'onreadystatechange' in d.createElement('script')
                ? ((i = d.documentElement),
                  (r = function (e) {
                    var t = d.createElement('script');
                    (t.onreadystatechange = function () {
                      p(e),
                        (t.onreadystatechange = null),
                        i.removeChild(t),
                        (t = null);
                    }),
                      i.appendChild(t);
                  }))
                : (r = function (e) {
                    setTimeout(p, 0, e);
                  })
              : ((s = 'setImmediate$' + Math.random() + '$'),
                (a = function (t) {
                  t.source === e &&
                    'string' == typeof t.data &&
                    0 === t.data.indexOf(s) &&
                    p(+t.data.slice(s.length));
                }),
                e.addEventListener
                  ? e.addEventListener('message', a, !1)
                  : e.attachEvent('onmessage', a),
                (r = function (t) {
                  e.postMessage(s + t, '*');
                })),
            (h.setImmediate = function (e) {
              'function' != typeof e && (e = new Function('' + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              var i = { callback: e, args: t };
              return (u[c] = i), r(c), c++;
            }),
            (h.clearImmediate = f);
        }
        function f(e) {
          delete u[e];
        }
        function p(e) {
          if (l) setTimeout(p, 0, e);
          else {
            var t = u[e];
            if (t) {
              l = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(void 0, n);
                  }
                })(t);
              } finally {
                f(e), (l = !1);
              }
            }
          }
        }
      })('undefined' == typeof self ? (void 0 === e ? this : e) : self);
    }.call(this, n(27), n(42)));
  },
  function (e, t, n) {
    var r,
      i,
      o = n(43),
      s = n(44),
      a = 0,
      c = 0;
    e.exports = function (e, t, n) {
      var u = (t && n) || 0,
        l = t || [],
        d = (e = e || {}).node || r,
        h = void 0 !== e.clockseq ? e.clockseq : i;
      if (null == d || null == h) {
        var f = o();
        null == d && (d = r = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]),
          null == h && (h = i = 16383 & ((f[6] << 8) | f[7]));
      }
      var p = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
        g = void 0 !== e.nsecs ? e.nsecs : c + 1,
        m = p - a + (g - c) / 1e4;
      if (
        (m < 0 && void 0 === e.clockseq && (h = (h + 1) & 16383),
        (m < 0 || p > a) && void 0 === e.nsecs && (g = 0),
        g >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (a = p), (c = g), (i = h);
      var v = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296;
      (l[u++] = (v >>> 24) & 255),
        (l[u++] = (v >>> 16) & 255),
        (l[u++] = (v >>> 8) & 255),
        (l[u++] = 255 & v);
      var y = ((p / 4294967296) * 1e4) & 268435455;
      (l[u++] = (y >>> 8) & 255),
        (l[u++] = 255 & y),
        (l[u++] = ((y >>> 24) & 15) | 16),
        (l[u++] = (y >>> 16) & 255),
        (l[u++] = (h >>> 8) | 128),
        (l[u++] = 255 & h);
      for (var b = 0; b < 6; ++b) l[u + b] = d[b];
      return t || s(l);
    };
  },
  function (e, t, n) {
    (function (e, r) {
      var i;
      /*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */ (function () {
        var o = n(61),
          s = { function: !0, object: !0 },
          a = s[typeof t] && t && !t.nodeType && t,
          c = (s[typeof window] && window) || this,
          u = a && s[typeof e] && e && !e.nodeType && 'object' == typeof r && r;
        function l(e, t) {
          e || (e = c.Object()), t || (t = c.Object());
          var n = e.Number || c.Number,
            r = e.String || c.String,
            i = e.Object || c.Object,
            o = e.Date || c.Date,
            a = e.SyntaxError || c.SyntaxError,
            u = e.TypeError || c.TypeError,
            d = e.Math || c.Math,
            h = e.JSON || c.JSON;
          'object' == typeof h &&
            h &&
            ((t.stringify = h.stringify), (t.parse = h.parse));
          var f = i.prototype,
            p = f.toString,
            g = f.hasOwnProperty;
          function m(e, t) {
            try {
              e();
            } catch (e) {
              t && t();
            }
          }
          var v = new o(-0xc782b5b800cec);
          function y(e) {
            if (null != y[e]) return y[e];
            var i;
            if ('bug-string-char-index' == e) i = 'a' != 'a'[0];
            else if ('json' == e)
              i =
                y('json-stringify') &&
                y('date-serialization') &&
                y('json-parse');
            else if ('date-serialization' == e) {
              if ((i = y('json-stringify') && v)) {
                var s = t.stringify;
                m(function () {
                  i =
                    '"-271821-04-20T00:00:00.000Z"' == s(new o(-864e13)) &&
                    '"+275760-09-13T00:00:00.000Z"' == s(new o(864e13)) &&
                    '"-000001-01-01T00:00:00.000Z"' == s(new o(-621987552e5)) &&
                    '"1969-12-31T23:59:59.999Z"' == s(new o(-1));
                });
              }
            } else {
              var a,
                c = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
              if ('json-stringify' == e) {
                var u = 'function' == typeof (s = t.stringify);
                u &&
                  (((a = function () {
                    return 1;
                  }).toJSON = a),
                  m(
                    function () {
                      u =
                        '0' === s(0) &&
                        '0' === s(new n()) &&
                        '""' == s(new r()) &&
                        void 0 === s(p) &&
                        void 0 === s(void 0) &&
                        void 0 === s() &&
                        '1' === s(a) &&
                        '[1]' == s([a]) &&
                        '[null]' == s([void 0]) &&
                        'null' == s(null) &&
                        '[null,null,null]' == s([void 0, p, null]) &&
                        s({ a: [a, !0, !1, null, '\0\b\n\f\r\t'] }) == c &&
                        '1' === s(null, a) &&
                        '[\n 1,\n 2\n]' == s([1, 2], null, 1);
                    },
                    function () {
                      u = !1;
                    }
                  )),
                  (i = u);
              }
              if ('json-parse' == e) {
                var l,
                  d = t.parse;
                'function' == typeof d &&
                  m(
                    function () {
                      0 !== d('0') ||
                        d(!1) ||
                        ((a = d(c)),
                        (l = 5 == a.a.length && 1 === a.a[0]) &&
                          (m(function () {
                            l = !d('"\t"');
                          }),
                          l &&
                            m(function () {
                              l = 1 !== d('01');
                            }),
                          l &&
                            m(function () {
                              l = 1 !== d('1.');
                            })));
                    },
                    function () {
                      l = !1;
                    }
                  ),
                  (i = l);
              }
            }
            return (y[e] = !!i);
          }
          if (
            (m(function () {
              v =
                -109252 == v.getUTCFullYear() &&
                0 === v.getUTCMonth() &&
                1 === v.getUTCDate() &&
                10 == v.getUTCHours() &&
                37 == v.getUTCMinutes() &&
                6 == v.getUTCSeconds() &&
                708 == v.getUTCMilliseconds();
            }),
            (y['bug-string-char-index'] =
              y['date-serialization'] =
              y.json =
              y['json-stringify'] =
              y['json-parse'] =
                null),
            !y('json'))
          ) {
            var b = y('bug-string-char-index'),
              w = function (e, t) {
                var n,
                  r,
                  i,
                  o = 0;
                for (i in (((n = function () {
                  this.valueOf = 0;
                }).prototype.valueOf = 0),
                (r = new n())))
                  g.call(r, i) && o++;
                return (
                  (n = r = null),
                  o
                    ? (w = function (e, t) {
                        var n,
                          r,
                          i = '[object Function]' == p.call(e);
                        for (n in e)
                          (i && 'prototype' == n) ||
                            !g.call(e, n) ||
                            (r = 'constructor' === n) ||
                            t(n);
                        (r || g.call(e, (n = 'constructor'))) && t(n);
                      })
                    : ((r = [
                        'valueOf',
                        'toString',
                        'toLocaleString',
                        'propertyIsEnumerable',
                        'isPrototypeOf',
                        'hasOwnProperty',
                        'constructor',
                      ]),
                      (w = function (e, t) {
                        var n,
                          i,
                          o = '[object Function]' == p.call(e),
                          a =
                            (!o &&
                              'function' != typeof e.constructor &&
                              s[typeof e.hasOwnProperty] &&
                              e.hasOwnProperty) ||
                            g;
                        for (n in e)
                          (o && 'prototype' == n) || !a.call(e, n) || t(n);
                        for (i = r.length; (n = r[--i]); ) a.call(e, n) && t(n);
                      })),
                  w(e, t)
                );
              };
            if (!y('json-stringify') && !y('date-serialization')) {
              var k = {
                  92: '\\\\',
                  34: '\\"',
                  8: '\\b',
                  12: '\\f',
                  10: '\\n',
                  13: '\\r',
                  9: '\\t',
                },
                S = function (e, t) {
                  return ('000000' + (t || 0)).slice(-e);
                },
                E = function (e) {
                  var t, n, r, i, o, s, a, c, u;
                  if (v)
                    t = function (e) {
                      (n = e.getUTCFullYear()),
                        (r = e.getUTCMonth()),
                        (i = e.getUTCDate()),
                        (s = e.getUTCHours()),
                        (a = e.getUTCMinutes()),
                        (c = e.getUTCSeconds()),
                        (u = e.getUTCMilliseconds());
                    };
                  else {
                    var l = d.floor,
                      h = [
                        0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334,
                      ],
                      f = function (e, t) {
                        return (
                          h[t] +
                          365 * (e - 1970) +
                          l((e - 1969 + (t = +(t > 1))) / 4) -
                          l((e - 1901 + t) / 100) +
                          l((e - 1601 + t) / 400)
                        );
                      };
                    t = function (e) {
                      for (
                        i = l(e / 864e5), n = l(i / 365.2425) + 1970 - 1;
                        f(n + 1, 0) <= i;
                        n++
                      );
                      for (r = l((i - f(n, 0)) / 30.42); f(n, r + 1) <= i; r++);
                      (i = 1 + i - f(n, r)),
                        (s =
                          l((o = ((e % 864e5) + 864e5) % 864e5) / 36e5) % 24),
                        (a = l(o / 6e4) % 60),
                        (c = l(o / 1e3) % 60),
                        (u = o % 1e3);
                    };
                  }
                  return (E = function (e) {
                    return (
                      e > -1 / 0 && e < 1 / 0
                        ? (t(e),
                          (e =
                            (n <= 0 || n >= 1e4
                              ? (n < 0 ? '-' : '+') + S(6, n < 0 ? -n : n)
                              : S(4, n)) +
                            '-' +
                            S(2, r + 1) +
                            '-' +
                            S(2, i) +
                            'T' +
                            S(2, s) +
                            ':' +
                            S(2, a) +
                            ':' +
                            S(2, c) +
                            '.' +
                            S(3, u) +
                            'Z'),
                          (n = r = i = s = a = c = u = null))
                        : (e = null),
                      e
                    );
                  })(e);
                };
              if (y('json-stringify') && !y('date-serialization')) {
                function C(e) {
                  return E(this);
                }
                var O = t.stringify;
                t.stringify = function (e, t, n) {
                  var r = o.prototype.toJSON;
                  o.prototype.toJSON = C;
                  var i = O(e, t, n);
                  return (o.prototype.toJSON = r), i;
                };
              } else {
                var _ = function (e) {
                    var t = e.charCodeAt(0),
                      n = k[t];
                    return n || '\\u00' + S(2, t.toString(16));
                  },
                  T = /[\x00-\x1f\x22\x5c]/g,
                  j = function (e) {
                    return (
                      (T.lastIndex = 0),
                      '"' + (T.test(e) ? e.replace(T, _) : e) + '"'
                    );
                  },
                  x = function (e, t, n, r, i, s, a) {
                    var c, l, d, h, f, g, v, y, b;
                    if (
                      (m(function () {
                        c = t[e];
                      }),
                      'object' == typeof c &&
                        c &&
                        (c.getUTCFullYear &&
                        '[object Date]' == p.call(c) &&
                        c.toJSON === o.prototype.toJSON
                          ? (c = E(c))
                          : 'function' == typeof c.toJSON && (c = c.toJSON(e))),
                      n && (c = n.call(t, e, c)),
                      null == c)
                    )
                      return void 0 === c ? c : 'null';
                    switch (
                      ('object' == (l = typeof c) && (d = p.call(c)), d || l)
                    ) {
                      case 'boolean':
                      case '[object Boolean]':
                        return '' + c;
                      case 'number':
                      case '[object Number]':
                        return c > -1 / 0 && c < 1 / 0 ? '' + c : 'null';
                      case 'string':
                      case '[object String]':
                        return j('' + c);
                    }
                    if ('object' == typeof c) {
                      for (v = a.length; v--; ) if (a[v] === c) throw u();
                      if (
                        (a.push(c),
                        (h = []),
                        (y = s),
                        (s += i),
                        '[object Array]' == d)
                      ) {
                        for (g = 0, v = c.length; g < v; g++)
                          (f = x(g, c, n, r, i, s, a)),
                            h.push(void 0 === f ? 'null' : f);
                        b = h.length
                          ? i
                            ? '[\n' + s + h.join(',\n' + s) + '\n' + y + ']'
                            : '[' + h.join(',') + ']'
                          : '[]';
                      } else
                        w(r || c, function (e) {
                          var t = x(e, c, n, r, i, s, a);
                          void 0 !== t &&
                            h.push(j(e) + ':' + (i ? ' ' : '') + t);
                        }),
                          (b = h.length
                            ? i
                              ? '{\n' + s + h.join(',\n' + s) + '\n' + y + '}'
                              : '{' + h.join(',') + '}'
                            : '{}');
                      return a.pop(), b;
                    }
                  };
                t.stringify = function (e, t, n) {
                  var r, i, o, a;
                  if (s[typeof t] && t)
                    if ('[object Function]' == (a = p.call(t))) i = t;
                    else if ('[object Array]' == a) {
                      o = {};
                      for (var c, u = 0, l = t.length; u < l; )
                        (c = t[u++]),
                          ('[object String]' != (a = p.call(c)) &&
                            '[object Number]' != a) ||
                            (o[c] = 1);
                    }
                  if (n)
                    if ('[object Number]' == (a = p.call(n))) {
                      if ((n -= n % 1) > 0)
                        for (n > 10 && (n = 10), r = ''; r.length < n; )
                          r += ' ';
                    } else
                      '[object String]' == a &&
                        (r = n.length <= 10 ? n : n.slice(0, 10));
                  return x('', (((c = {})[''] = e), c), i, o, r, '', []);
                };
              }
            }
            if (!y('json-parse')) {
              var I,
                A,
                M = r.fromCharCode,
                q = {
                  92: '\\',
                  34: '"',
                  47: '/',
                  98: '\b',
                  116: '\t',
                  110: '\n',
                  102: '\f',
                  114: '\r',
                },
                P = function () {
                  throw ((I = A = null), a());
                },
                N = function () {
                  for (var e, t, n, r, i, o = A, s = o.length; I < s; )
                    switch ((i = o.charCodeAt(I))) {
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        I++;
                        break;
                      case 123:
                      case 125:
                      case 91:
                      case 93:
                      case 58:
                      case 44:
                        return (e = b ? o.charAt(I) : o[I]), I++, e;
                      case 34:
                        for (e = '@', I++; I < s; )
                          if ((i = o.charCodeAt(I)) < 32) P();
                          else if (92 == i)
                            switch ((i = o.charCodeAt(++I))) {
                              case 92:
                              case 34:
                              case 47:
                              case 98:
                              case 116:
                              case 110:
                              case 102:
                              case 114:
                                (e += q[i]), I++;
                                break;
                              case 117:
                                for (t = ++I, n = I + 4; I < n; I++)
                                  ((i = o.charCodeAt(I)) >= 48 && i <= 57) ||
                                    (i >= 97 && i <= 102) ||
                                    (i >= 65 && i <= 70) ||
                                    P();
                                e += M('0x' + o.slice(t, I));
                                break;
                              default:
                                P();
                            }
                          else {
                            if (34 == i) break;
                            for (
                              i = o.charCodeAt(I), t = I;
                              i >= 32 && 92 != i && 34 != i;

                            )
                              i = o.charCodeAt(++I);
                            e += o.slice(t, I);
                          }
                        if (34 == o.charCodeAt(I)) return I++, e;
                        P();
                      default:
                        if (
                          ((t = I),
                          45 == i && ((r = !0), (i = o.charCodeAt(++I))),
                          i >= 48 && i <= 57)
                        ) {
                          for (
                            48 == i &&
                              (i = o.charCodeAt(I + 1)) >= 48 &&
                              i <= 57 &&
                              P(),
                              r = !1;
                            I < s && (i = o.charCodeAt(I)) >= 48 && i <= 57;
                            I++
                          );
                          if (46 == o.charCodeAt(I)) {
                            for (
                              n = ++I;
                              n < s && !((i = o.charCodeAt(n)) < 48 || i > 57);
                              n++
                            );
                            n == I && P(), (I = n);
                          }
                          if (101 == (i = o.charCodeAt(I)) || 69 == i) {
                            for (
                              (43 != (i = o.charCodeAt(++I)) && 45 != i) || I++,
                                n = I;
                              n < s && !((i = o.charCodeAt(n)) < 48 || i > 57);
                              n++
                            );
                            n == I && P(), (I = n);
                          }
                          return +o.slice(t, I);
                        }
                        r && P();
                        var a = o.slice(I, I + 4);
                        if ('true' == a) return (I += 4), !0;
                        if ('fals' == a && 101 == o.charCodeAt(I + 4))
                          return (I += 5), !1;
                        if ('null' == a) return (I += 4), null;
                        P();
                    }
                  return '$';
                },
                R = function (e) {
                  var t, n;
                  if (('$' == e && P(), 'string' == typeof e)) {
                    if ('@' == (b ? e.charAt(0) : e[0])) return e.slice(1);
                    if ('[' == e) {
                      for (t = []; ']' != (e = N()); )
                        n
                          ? ',' == e
                            ? ']' == (e = N()) && P()
                            : P()
                          : (n = !0),
                          ',' == e && P(),
                          t.push(R(e));
                      return t;
                    }
                    if ('{' == e) {
                      for (t = {}; '}' != (e = N()); )
                        n
                          ? ',' == e
                            ? '}' == (e = N()) && P()
                            : P()
                          : (n = !0),
                          (',' != e &&
                            'string' == typeof e &&
                            '@' == (b ? e.charAt(0) : e[0]) &&
                            ':' == N()) ||
                            P(),
                          (t[e.slice(1)] = R(N()));
                      return t;
                    }
                    P();
                  }
                  return e;
                },
                L = function (e, t, n) {
                  var r = D(e, t, n);
                  void 0 === r ? delete e[t] : (e[t] = r);
                },
                D = function (e, t, n) {
                  var r,
                    i = e[t];
                  if ('object' == typeof i && i)
                    if ('[object Array]' == p.call(i))
                      for (r = i.length; r--; ) L(p, w, i);
                    else
                      w(i, function (e) {
                        L(i, e, n);
                      });
                  return n.call(e, t, i);
                };
              t.parse = function (e, t) {
                var n, r;
                return (
                  (I = 0),
                  (A = '' + e),
                  (n = R(N())),
                  '$' != N() && P(),
                  (I = A = null),
                  t && '[object Function]' == p.call(t)
                    ? D((((r = {})[''] = n), r), '', t)
                    : n
                );
              };
            }
          }
          return (t.runInContext = l), t;
        }
        if (
          (!u || (u.global !== u && u.window !== u && u.self !== u) || (c = u),
          a && !o)
        )
          l(c, a);
        else {
          var d = c.JSON,
            h = c.JSON3,
            f = !1,
            p = l(
              c,
              (c.JSON3 = {
                noConflict: function () {
                  return (
                    f ||
                      ((f = !0), (c.JSON = d), (c.JSON3 = h), (d = h = null)),
                    p
                  );
                },
              })
            );
          c.JSON = { parse: p.parse, stringify: p.stringify };
        }
        o &&
          (void 0 ===
            (i = function () {
              return p;
            }.call(t, n, t, e)) ||
            (e.exports = i));
      }.call(this));
    }.call(this, n(60)(e), n(27)));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t) {
    (function (t) {
      e.exports = t;
    }.call(this, {}));
  },
  function (e, t, n) {
    var r = n(63),
      i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    e.exports = function (e) {
      var t,
        n,
        o,
        s,
        a,
        c,
        u,
        l = '',
        d = 0;
      e = r(e);
      for (; d < e.length; )
        (t = e.charCodeAt(d++)),
          (n = e.charCodeAt(d++)),
          (o = e.charCodeAt(d++)),
          (s = t >> 2),
          (a = ((3 & t) << 4) | (n >> 4)),
          (c = ((15 & n) << 2) | (o >> 6)),
          (u = 63 & o),
          isNaN(n) ? (c = u = 64) : isNaN(o) && (u = 64),
          (l = l + i.charAt(s) + i.charAt(a) + i.charAt(c) + i.charAt(u));
      return l;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      e = e.replace(/\r\n/g, '\n');
      for (var t = '', n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        r < 128
          ? (t += String.fromCharCode(r))
          : r > 127 && r < 2048
          ? ((t += String.fromCharCode((r >> 6) | 192)),
            (t += String.fromCharCode((63 & r) | 128)))
          : ((t += String.fromCharCode((r >> 12) | 224)),
            (t += String.fromCharCode(((r >> 6) & 63) | 128)),
            (t += String.fromCharCode((63 & r) | 128)));
      }
      return t;
    };
  },
  function (e, t) {
    try {
      e.exports =
        'undefined' != typeof XMLHttpRequest &&
        'withCredentials' in new XMLHttpRequest();
    } catch (t) {
      e.exports = !1;
    }
  },
  function (e, t, n) {
    var r = n(45)('jsonp');
    e.exports = function (e, t, n) {
      'function' == typeof t && ((n = t), (t = {}));
      t || (t = {});
      var s,
        a,
        c = t.prefix || '__jp',
        u = t.name || c + i++,
        l = t.param || 'callback',
        d = null != t.timeout ? t.timeout : 6e4,
        h = encodeURIComponent,
        f = document.getElementsByTagName('script')[0] || document.head;
      d &&
        (a = setTimeout(function () {
          p(), n && n(new Error('Timeout'));
        }, d));
      function p() {
        s.parentNode && s.parentNode.removeChild(s),
          (window[u] = o),
          a && clearTimeout(a);
      }
      return (
        (window[u] = function (e) {
          r('jsonp got', e), p(), n && n(null, e);
        }),
        (e = (e += (~e.indexOf('?') ? '&' : '?') + l + '=' + h(u)).replace(
          '?&',
          '?'
        )),
        r('jsonp req "%s"', e),
        ((s = document.createElement('script')).src = e),
        f.parentNode.insertBefore(s, f),
        function () {
          window[u] && p();
        }
      );
    };
    var i = 0;
    function o() {}
  },
  function (e, t, n) {
    e.exports = function (e) {
      function t(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++)
          (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
        return r.colors[Math.abs(t) % r.colors.length];
      }
      function r(e) {
        let n;
        function s(...e) {
          if (!s.enabled) return;
          const t = s,
            i = Number(new Date()),
            o = i - (n || i);
          (t.diff = o),
            (t.prev = n),
            (t.curr = i),
            (n = i),
            (e[0] = r.coerce(e[0])),
            'string' != typeof e[0] && e.unshift('%O');
          let a = 0;
          (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, i) => {
            if ('%%' === n) return n;
            a++;
            const o = r.formatters[i];
            if ('function' == typeof o) {
              const r = e[a];
              (n = o.call(t, r)), e.splice(a, 1), a--;
            }
            return n;
          })),
            r.formatArgs.call(t, e);
          (t.log || r.log).apply(t, e);
        }
        return (
          (s.namespace = e),
          (s.enabled = r.enabled(e)),
          (s.useColors = r.useColors()),
          (s.color = t(e)),
          (s.destroy = i),
          (s.extend = o),
          'function' == typeof r.init && r.init(s),
          r.instances.push(s),
          s
        );
      }
      function i() {
        const e = r.instances.indexOf(this);
        return -1 !== e && (r.instances.splice(e, 1), !0);
      }
      function o(e, t) {
        const n = r(this.namespace + (void 0 === t ? ':' : t) + e);
        return (n.log = this.log), n;
      }
      function s(e) {
        return e
          .toString()
          .substring(2, e.toString().length - 2)
          .replace(/\.\*\?$/, '*');
      }
      return (
        (r.debug = r),
        (r.default = r),
        (r.coerce = function (e) {
          if (e instanceof Error) return e.stack || e.message;
          return e;
        }),
        (r.disable = function () {
          const e = [
            ...r.names.map(s),
            ...r.skips.map(s).map((e) => '-' + e),
          ].join(',');
          return r.enable(''), e;
        }),
        (r.enable = function (e) {
          let t;
          r.save(e), (r.names = []), (r.skips = []);
          const n = ('string' == typeof e ? e : '').split(/[\s,]+/),
            i = n.length;
          for (t = 0; t < i; t++)
            n[t] &&
              ('-' === (e = n[t].replace(/\*/g, '.*?'))[0]
                ? r.skips.push(new RegExp('^' + e.substr(1) + '$'))
                : r.names.push(new RegExp('^' + e + '$')));
          for (t = 0; t < r.instances.length; t++) {
            const e = r.instances[t];
            e.enabled = r.enabled(e.namespace);
          }
        }),
        (r.enabled = function (e) {
          if ('*' === e[e.length - 1]) return !0;
          let t, n;
          for (t = 0, n = r.skips.length; t < n; t++)
            if (r.skips[t].test(e)) return !1;
          for (t = 0, n = r.names.length; t < n; t++)
            if (r.names[t].test(e)) return !0;
          return !1;
        }),
        (r.humanize = n(67)),
        Object.keys(e).forEach((t) => {
          r[t] = e[t];
        }),
        (r.instances = []),
        (r.names = []),
        (r.skips = []),
        (r.formatters = {}),
        (r.selectColor = t),
        r.enable(r.load()),
        r
      );
    };
  },
  function (e, t) {
    var n = 1e3,
      r = 6e4,
      i = 60 * r,
      o = 24 * i;
    function s(e, t, n, r) {
      var i = t >= 1.5 * n;
      return Math.round(e / n) + ' ' + r + (i ? 's' : '');
    }
    e.exports = function (e, t) {
      t = t || {};
      var a = typeof e;
      if ('string' === a && e.length > 0)
        return (function (e) {
          if ((e = String(e)).length > 100) return;
          var t =
            /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              e
            );
          if (!t) return;
          var s = parseFloat(t[1]);
          switch ((t[2] || 'ms').toLowerCase()) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return 315576e5 * s;
            case 'weeks':
            case 'week':
            case 'w':
              return 6048e5 * s;
            case 'days':
            case 'day':
            case 'd':
              return s * o;
            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
              return s * i;
            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
              return s * r;
            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
              return s * n;
            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
              return s;
            default:
              return;
          }
        })(e);
      if ('number' === a && !1 === isNaN(e))
        return t.long
          ? (function (e) {
              var t = Math.abs(e);
              if (t >= o) return s(e, t, o, 'day');
              if (t >= i) return s(e, t, i, 'hour');
              if (t >= r) return s(e, t, r, 'minute');
              if (t >= n) return s(e, t, n, 'second');
              return e + ' ms';
            })(e)
          : (function (e) {
              var t = Math.abs(e);
              if (t >= o) return Math.round(e / o) + 'd';
              if (t >= i) return Math.round(e / i) + 'h';
              if (t >= r) return Math.round(e / r) + 'm';
              if (t >= n) return Math.round(e / n) + 's';
              return e + 'ms';
            })(e);
      throw new Error(
        'val is not a non-empty string or a valid number. val=' +
          JSON.stringify(e)
      );
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    n(54), n(55);
    var r = n(30),
      i = n(39),
      o = n(3),
      s = n(33),
      a = n(17),
      c = n(7),
      u = n(21),
      l = n(0);
    window.mutinyEditor ||
      (window.mutinyEditor = {
        DOMRenderer: r.a,
        hidePersonalizations: u.a,
        isMutinyElement: a.c,
        getAllOriginalChildren: a.a,
        loadQuestionnaireInterface: () =>
          Promise.all([n.e(1), n.e(3), n.e(8)])
            .then(n.bind(null, 111))
            .then(({ default: e }) =>
              n
                .e(4)
                .then(n.bind(null, 70))
                .then(({ render: t, h: r }) => {
                  let i = document.getElementById('mutiny-preact');
                  return (
                    i ||
                      ((i = document.createElement('div')),
                      i.setAttribute('id', 'mutiny-preact'),
                      document.body.appendChild(i)),
                    t(r(e, {}), i),
                    Promise.all([n.e(2), n.e(0), n.e(7)]).then(
                      n.bind(null, 112)
                    )
                  );
                })
            ),
        personalizationRegistry: c.a,
        querySelector: u.b,
        querySelectorAll: u.c,
        showPersonalizations: u.d,
        wrapDomUpdates: function (e, t = {}) {
          return e.map(
            (e) => new i.a(e, new o.h(t, new s.a()), void 0, l.u.Editor)
          );
        },
      });
    n(34);
    var d = n(12),
      h = n(2),
      f = n(9),
      p = n(19),
      g = n(1);
    const m = new g.a('highlights');
    var v = n(24);
    var y = n(48),
      b = n(4),
      w = n(22),
      k = n(25),
      S = n(14);
    var E = () => {
        var e;
        const t = new g.a('should-bail-early');
        return window.location.search.includes('mutiny=false')
          ? (t.info('Query param is mutiny=false'), !0)
          : !!(null === (e = window.mutiny) || void 0 === e
              ? void 0
              : e.attached) && (t.info('Mutiny is already attached'), !0);
      },
      C = function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    function O(e, t) {
      t.clientMode === l.b.AssetViewer ? Object(k.a)(t) : t.exporter.page();
      const r = t.ensureShouldRender(
        () => Object(w.b)(e, t, !1),
        'Skipping attachExperiences for synchronous experiences'
      );
      return (
        Object(v.d)(),
        n
          .e(6)
          .then(n.bind(null, 113))
          .then(({ attachEvents: n }) => n(e, t)),
        Promise.resolve()
          .then(n.bind(null, 53))
          .then(({ attachQuestionnaire: n }) => n(e, t)),
        r
      );
    }
    function _(e) {
      const t = e.timer.getTimeInMilliseconds();
      t && e.exporter.track(f.a.Time, { timeInSeconds: t / 1e3 }),
        e.exporter.forceFlushQueues();
    }
    const T = Object(h.d)((e, t) =>
      C(void 0, void 0, void 0, function* () {
        var n, r;
        const i = new g.a('index');
        if (E()) return;
        if (
          (function () {
            const e =
                'true' ===
                window.localStorage.getItem('mutiny.client.local_debug'),
              t = new URLSearchParams(window.location.search).has(
                'local_debug'
              );
            return e || t;
          })()
        ) {
          i.info('Loading Mutiny script from development environment.');
          const t = document.createElement('script');
          return (
            (window.__initializeMutiny = void 0),
            Object.defineProperty(window, '__initializeMutiny', {
              set: function (t) {
                t(e);
              },
            }),
            (t.src = 'https://mutiny.local:5678/mutiny-client/client.js'),
            void document.head.append(t)
          );
        }
        const o =
          null ===
            (r =
              null === (n = window.mutiny) || void 0 === n
                ? void 0
                : n.client) || void 0 === r
            ? void 0
            : r._queue;
        (null == o ? void 0 : o.defaultOptOut) &&
          (Object(b.b)(), delete o.defaultOptOut),
          (null == o ? void 0 : o.optOut) && (Object(b.f)(), delete o.optOut);
        const s = Object(p.d)(e);
        if (s.shouldExitBeforeUserDataFetch())
          return void i.info('Exiting before user data fetch');
        if (
          (s.hider.attachHider(e, s),
          null == t || t.removeHider(!0, 'Initialized Mutiny Client'),
          (function (e) {
            if (!e.highlightPersonalizations) return;
            const t = document.createElement('style');
            (t.type = 'text/css'),
              (t.id = 'mutiny-highlight-styles'),
              (t.nonce = Object(d.a)()),
              t.appendChild(
                document.createTextNode(
                  '\n      [data-mutiny-root="true"] {\n        outline: 3px solid rgba(150, 15, 223, 0.5);\n      }\n    '
                )
              ),
              document.head.appendChild(t),
              m.info('attached highlight styles', t);
          })(s),
          yield s.ensureShouldRender(
            () => s.userDataClient.getUserData(),
            'Skipping user data request'
          ),
          s.shouldExitAfterUserDataFetch())
        )
          return void i.info('Exiting after user data fetch');
        s.clientMode === l.b.AssetViewer && (Object(v.a)(), Object(v.b)()),
          s.exporter.identify(),
          Object(y.b)(() => {
            Object(v.d)(), Object(v.c)();
          }),
          s.stateChangeHandler.onChange(() => {
            _(s),
              s.timer.restart(),
              s.timer.setMarker(window.location.toString());
          }),
          s.onUnload(() => _(s));
        const a = s.ensureShouldRender(
          () =>
            (function (e, t) {
              return Object(S.d)(e)
                ? t.userDataClient.getAsyncUserData()
                : Promise.resolve();
            })(e, s),
          'Skipping async user data request'
        );
        s.stateChangeHandler.onChange(() => s.events.trigger(l.h.StateChange)),
          s.stateChangeHandler.onChange(() => {
            O(e, s),
              s.ensureShouldRender(
                () => Object(w.b)(e, s, !0),
                'Skipping attaching async experiences'
              );
          }),
          O(e, s)
            .then(() => {
              s.isRedirecting() ||
                s.hider.removeHider(
                  !0,
                  'initial render for synchronous experiences has finished'
                );
            })
            .catch((e) => {
              throw (
                (s.hider.removeHider(!1, 'synchronous render promise failed'),
                e)
              );
            }),
          s.ensureShouldRender(
            () => a.then(() => Object(w.b)(e, s, !0)),
            'Skipping attachExperiences for async experiences'
          );
      })
    );
    (n.nc = Object(d.a)()), (window.__initializeMutiny = T);
    t.default = T;
  },
]);

__initializeMutiny({
  config: {
    blacklisted_query_params: { tve: [] },
    track_calendly: false,
    track_drift: false,
    track_forms: false,
    track_hubspot: false,
    tracking_mode: 'batch',
    write_to_segment: true,
    api_key: '0debab9dd9dcf600',
    blocked_ips: [],
    campaign_query_param_keys: ['mt'],
    client_iteration: 383,
    company_slug: 'notion',
    company_token: '1149e901f65fc47c',
    exposed_user_data_attributes: [],
    integrations: ['mutiny', 'window', 'segment'],
    preview: null,
    published_at: '2022-12-14T10:42:53.144-08:00',
    tracked_domains: null,
    whitelisted_domains: [],
  },
  audience_segments: [
    {
      id: '55',
      name: 'demo Segment',
      campaign_slug: 'demo',
      condition: {
        attribute: 'demo',
        value: null,
        and: [],
        or: [],
        comparator: 'not_equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: '5a9710d1-02aa-4941-a0fc-a3850d78a72d',
          description: null,
          global: false,
          priority: 58,
          experience_type: 'render',
          redirect_url: null,
          url_host: 'notion.so',
          url_path: '/product',
          url_condition: null,
          hold_out: 1,
          async: false,
          dom_update_group_id: 'e1728ad5-035c-41b3-9c7f-5562b9991bbc',
          variation_key: 'c6956bf6-f146-4b52-aa6c-834119703aa8',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    '{{demo.company}},',
                    {
                      tag: 'br',
                      html_attributes: { class: 'jsx-1805324592' },
                      inner_html: [],
                    },
                    'meet Notion.',
                  ],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '6e1276a3-f8d2-452f-ad85-f4a77c0ff2b3',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['demo.company', 'demo'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '5',
      name: 'All traffic',
      campaign_slug: null,
      condition: {
        attribute: 'user.random',
        value: 0,
        and: [],
        or: [],
        comparator: 'greater_than_or_equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: '7ae8c9f5-0e96-42a6-8a27-f66586b72d7a',
          description: '',
          global: true,
          priority: 1,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/product/notion-for-teams',
          url_condition: null,
          hold_out: 1,
          async: false,
          dom_update_group_id: 'bc324e80-ee7b-4afe-858b-5561c3265998',
          variation_key: '6f7e9358-5733-4766-9fcf-0341aa41381b',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector:
                'div.try-free-form \u003e a.button-link \u003e button.button',
              data: {
                html_attributes: { style: 'border:none:' },
                styles: { 'background-color': 'rgba(0,142,224,1)' },
                custom: false,
                tag: 'button',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '55acb561-3d32-4d7c-bd00-16117f280c41',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-cta \u003e a.button-link \u003e button.button',
              data: {
                html_attributes: { style: 'border:none:' },
                styles: { 'background-color': 'rgba(45,156,219,1)' },
                custom: false,
                tag: 'button',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '64b5efd3-b198-4bb3-a3bf-7c05cb61f71d',
              custom_javascript: null,
            },
            {
              selector:
                'div.cta-wrap \u003e a.button-link \u003e button.button',
              data: {
                html_attributes: { style: 'border:none:' },
                styles: { 'background-color': 'rgba(45,156,219,1)' },
                custom: false,
                tag: 'button',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '8549c258-b338-42b8-8b6a-e9c24dab8292',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-cta \u003e a.button-link \u003e button.button',
              data: {
                html_attributes: { style: 'border:none:' },
                styles: { 'background-color': 'rgba(45,156,219,1)' },
                custom: false,
                tag: 'button',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '1c415a3b-a4f2-467d-9dca-e3220f952568',
              custom_javascript: null,
            },
            {
              selector: 'li.cta-item \u003e a.button-link \u003e button.button',
              data: {
                html_attributes: { style: 'border:none:' },
                styles: { 'background-color': 'rgba(45,156,219,1)' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Try Notion free '],
                },
                custom: false,
                tag: 'button',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '2b725b64-3ac0-4837-9b41-aa75f13d9ee9',
              custom_javascript: null,
            },
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Stop wasting time jumping between different tools ',
                  ],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '3ec6231f-8d50-43b6-a747-03984d81cbce',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['user.random'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '11',
      name: 'SMB / Startups',
      campaign_slug: null,
      condition: {
        attribute: 'company.clearbit.metrics.employeesRange',
        value: '1-10',
        and: [],
        or: [
          {
            attribute: 'company.clearbit.metrics.employeesRange',
            value: '11-50',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: '248efa68-2e87-45de-8fff-0a496f3d5c46',
          description: 'All:Prospecting:Startups',
          global: false,
          priority: 15,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/product/notion-for-teams',
          url_condition: null,
          hold_out: 0.5,
          async: false,
          dom_update_group_id: 'b8a1da3f-14a4-4cee-82b5-eeff6b686a0f',
          variation_key: '835d6318-d84f-468a-bc6d-75e5fbdc618a',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector:
                'div.image-wrap \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=1080,q=100/front-static/pages/startups/startups-hero.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=1080,q=100/front-static/pages/startups/startups-hero.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '089a9bd2-a57a-4f1f-8343-603cf0bc8765',
              custom_javascript: null,
            },
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Your startup’s operating system'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '943726fd-7841-4d91-a2f3-74b79605f04b',
              custom_javascript: null,
            },
            {
              selector:
                'div.subtitle \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Notion scales with your startup from Seed to Series A, and beyond.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '526b1a64-e618-4114-870c-f793d4ab6399',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/4xQmlvd2irMIrahin29v50/01b4fbc84222355b28bf410d81ec3726/blinkist-logo.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/4xQmlvd2irMIrahin29v50/01b4fbc84222355b28bf410d81ec3726/blinkist-logo.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'af15e79f-6530-42bc-b7e7-b70d8e7e0d15',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(9) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/1moqEec4ojFOCE8b2oA8gg/c50bc82dc23015c06ff76e7b10c408d6/Argyle.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/1moqEec4ojFOCE8b2oA8gg/c50bc82dc23015c06ff76e7b10c408d6/Argyle.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '7062299a-295f-4d19-a469-1f6c012503c4',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/248lpDOefbem7N1Q6QU9zn/ab900c553ee4e237a5901d799aa465ca/mixpanel.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/248lpDOefbem7N1Q6QU9zn/ab900c553ee4e237a5901d799aa465ca/mixpanel.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '34d4f94d-7081-4853-b602-ac7f134bf54f',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/28gLS0QDb5iP79HynxfmL0/50950a165767cb485294e07c283a9159/blog-logo-3_1.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/28gLS0QDb5iP79HynxfmL0/50950a165767cb485294e07c283a9159/blog-logo-3_1.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '24c62b8e-8d94-4e0b-b82a-f180add14021',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(8) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'de8706e6-0612-4e84-af09-96137ac09702',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(5) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/6hiic5jxl3mItKq5SbXp0q/ec06bd9d888173f94498ce901e98e80f/buffer-logo.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/6hiic5jxl3mItKq5SbXp0q/ec06bd9d888173f94498ce901e98e80f/buffer-logo.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '921eac37-b1ac-4d01-bd57-8f3e66a9b068',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/2yyiwwOcF2juLDKm7vpbwx/2dc472fc6bcb18dcc7358ec46cdb8e12/branch-logo-color-dark_1.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/2yyiwwOcF2juLDKm7vpbwx/2dc472fc6bcb18dcc7358ec46cdb8e12/branch-logo-color-dark_1.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'c37d23bd-beda-4a9c-ba68-65922c13667b',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-title \u003e h2.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Trusted by successful startups'],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'dda0d49a-6f49-4a4e-9754-16451322626c',
              custom_javascript: null,
            },
            {
              selector: 'div.hero-text \u003e div.label',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Notion for startups'],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'e6dbdc5e-527f-4821-9232-117c970aadd4',
              custom_javascript: null,
            },
            {
              selector: 'div.clickable \u003e div.label',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'cc2a699a-a2d9-494d-9399-92f5fc505d65',
              custom_javascript: null,
            },
            {
              selector: 'a.clickable \u003e div.label',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'a5bb4bc7-4433-4f98-a86b-1c8056804d65',
              custom_javascript: null,
            },
            {
              selector: 'div.divider',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'c15a121a-351b-4f4a-9d1b-d8f8a216df36',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['company.clearbit.metrics.employeesRange'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '12',
      name: 'Paid Mobile traffic only',
      campaign_slug: null,
      condition: {
        attribute: 'user.random',
        value: 0,
        and: [
          {
            attribute: 'browser.device_type',
            value: 'mobile',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_source',
            value: 'google',
            and: [],
            or: [
              {
                attribute: 'query.utm_source',
                value: 'display',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
              {
                attribute: 'query.utm_source',
                value: 'discovery',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
              {
                attribute: 'query.utm_source',
                value: 'ads_fb',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
              {
                attribute: 'query.utm_source',
                value: 'adwords',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
              {
                attribute: 'query.utm_source',
                value: 'ads_youtube',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
              {
                attribute: 'query.utm_source',
                value: 'ads_ig',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
              {
                attribute: 'query.utm_source',
                value: 'naver',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
              {
                attribute: 'query.utm_source',
                value: 'daum',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
              {
                attribute: 'query.utm_source',
                value: 'ads_msg',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
              {
                attribute: 'query.utm_source',
                value: 'ads',
                and: [],
                or: [],
                comparator: 'equal',
                filter: null,
                aggregation: null,
              },
            ],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        or: [],
        comparator: 'greater_than_or_equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: '2ab5fc57-6bce-4202-854c-25e9613fedb3',
          description: '',
          global: false,
          priority: 1,
          experience_type: 'questionnaire',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/product',
          url_condition: null,
          hold_out: 1,
          async: true,
          dom_update_group_id: '552566c4-5f04-444c-8a50-3230289fd1f7',
          variation_key: 'e3936697-2a48-4b00-8140-fd1c0b87d21b',
          variation_name: 'Variation 1',
          dom_updates: [],
          questionnaire: {
            id: '9212fe25-f1b9-477e-80d8-5e4ccaa66856',
            config: {
              crossColor: '#960fdf',
              titleColor: '#cff6ff',
              ctaTextColor: '#cff6ff',
              primaryColor: '#2196f3',
              showOnMobile: false,
              backgroundColor: '#3a0068',
              ctaBackgroundColor: '#960fdf',
            },
            component_config: {
              colors: {
                primary: 'rgba(45,156,219,1)',
                secondary: '#FFFFFF',
                text_color: 'light',
              },
              disable_mutiny_branding: false,
              inherit_fonts: true,
              success_button_theme: null,
              layout: { desktop_banner_placement: 'top' },
              open_mode: 'same_tab',
              show_at_scroll_percent: 50,
            },
            key: 'mobile_traffic_only_questionnaire_2',
            questionnaire_type: 'top_bar',
            hold_out: 1.0,
            url_host: 'www.notion.so',
            url_path: '/product',
            url_condition: null,
            condition: null,
            questions: [
              {
                title:
                  'Instant access. Free templates. \nNo credit card required.',
                snippet: null,
                key: 'try_notion_for_free',
                question_type: 'multiple_choice',
                question_options: [
                  {
                    token: '55e098e8-8155-469a-98b0-02839e04f4ba',
                    title: 'link',
                    value: 'link',
                    option_type: 'link',
                    input_type: null,
                    link: null,
                    success_headline: null,
                    success_snippet: null,
                    success_cta: 'Try Notion for free',
                    success_cta_link: 'https://www.notion.so/signup',
                  },
                ],
                cta: null,
                cta_link: null,
                fallback_success_headline: null,
                fallback_success_snippet: null,
                fallback_success_cta: null,
                fallback_success_cta_link: null,
              },
            ],
            resource_type: 'Questionnaire',
            resource_id: '9212fe25-f1b9-477e-80d8-5e4ccaa66856',
            priority: 1,
            version: 2,
          },
          component_stylesheet_id: null,
          data_dependencies: [
            'user.random',
            'browser.device_type',
            'query.utm_source',
          ],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
        {
          id: 'cd869994-f1e6-47b3-80ba-3fac5f56e58f',
          description: 'Mobile friendly page',
          global: true,
          priority: 0,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/product/notion-for-teams',
          url_condition: null,
          hold_out: 1,
          async: false,
          dom_update_group_id: '88eafd1f-92ec-4716-b54c-23d2ab2211c4',
          variation_key: '0dfd8606-8dde-49fb-8a6d-5d911b01cbce',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-title \u003e h2.global-title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '25px' },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'dc346f11-60da-4388-b2c8-1386bee6cb20',
              custom_javascript: null,
            },
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '32px' },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '2da8f42b-a7a0-4253-ae01-302069db7868',
              custom_javascript: null,
            },
            {
              selector:
                'div.subtitle \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: { 'font-size': '17px' },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '8c3755dc-f07b-4e37-bec4-7313197b910c',
              custom_javascript: null,
            },
            {
              selector: 'div.hero-text \u003e div.label',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '5f833289-5ff9-4c74-9bb7-1104ec3fd5bd',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e img.logo',
              data: {
                html_attributes: {},
                styles: {},
                remove: false,
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '268611cf-34bb-4ab9-a57a-94545ef8e5c5',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(8) \u003e img.logo',
              data: {
                html_attributes: {},
                styles: {},
                remove: false,
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '1a20b6f8-702d-4c93-a2d6-0076f87801cb',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(6) \u003e img.logo',
              data: {
                html_attributes: {},
                styles: {},
                remove: false,
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'b5d17c7e-dfe3-454a-995a-3a57dc518a67',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e img.logo',
              data: {
                html_attributes: {},
                styles: {},
                remove: false,
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'caebd94f-e9b1-4738-81af-006bc25d7392',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(5) \u003e img.logo',
              data: {
                html_attributes: {},
                styles: {},
                remove: false,
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '416633b4-da47-474c-ae9c-7434c14d14d3',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://images.ctfassets.net/spoqsaf9291f/49e1CCRfYajrMwuXnrFQiZ/d129670f5f327eeb8f73a1ae9353d20c/monzo.png',
                  srcset:
                    'https://images.ctfassets.net/spoqsaf9291f/49e1CCRfYajrMwuXnrFQiZ/d129670f5f327eeb8f73a1ae9353d20c/monzo.png',
                },
                styles: {},
                remove: false,
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '474e1680-17c2-4040-b4aa-22129e799ce6',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(10) \u003e img.logo',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '2f11571f-6484-4a87-95bb-814f5ff8bafe',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(9) \u003e img.logo',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '1466bfc6-3667-4032-be22-f8f3e373710f',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e div.grid \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div.stat \u003e span.stat-number',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'span',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'a536254d-4010-4a1a-8092-747899330fd4',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e div.grid \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div.stat \u003e span.stat-text',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'span',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '4002f954-2eaa-405c-960d-2227818f3204',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e div.grid',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '98fefcf9-9e95-4dde-be96-dc066c30e32e',
              custom_javascript: null,
            },
            {
              selector:
                'section:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(6)',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'f5c2958a-97be-4698-9488-fcf246b1fc65',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-title \u003e h2.global-title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '25px' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    "You're minutes away from combining all your tools in one with Notion",
                  ],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'aa95a5c5-558a-4ae1-a93f-80b8dde74be4',
              custom_javascript: null,
            },
            {
              selector: 'div.grid-item \u003e div.wrapper',
              data: {
                html_attributes: {},
                styles: { 'font-weight': 'normal' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '4dd9ca61-7d2e-43b2-9533-3dd53009dca0',
              custom_javascript: null,
            },
            {
              selector: 'div.global-limit-s \u003e div.wrapper',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '390add67-db4d-4cf2-b951-0ea2b9e7b74e',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: [
            'user.random',
            'browser.device_type',
            'query.utm_source',
          ],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '8',
      name: 'ENG:EMEA:Smart Display',
      campaign_slug: null,
      condition: {
        attribute: 'query.utm_campaign',
        value: '13482421112',
        and: [],
        or: [],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'd0762795-7ec7-4baa-b350-abf6f144c2bb',
          description: 'Headline',
          global: false,
          priority: 7,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/product',
          url_condition: null,
          hold_out: 1,
          async: false,
          dom_update_group_id: 'ef37797f-a317-4f08-964c-6d31c685a0ee',
          variation_key: '851aa42f-11fe-4efb-a8a2-63241c9ab5ce',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Tailored to the way you work'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'de29bf36-b358-4124-b35e-63cc13be4c32',
              custom_javascript: null,
            },
            {
              selector:
                'div.subtitle \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Personalize every inch of Notion to build your dream workflows and tools — so your team can get more done.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'b431a994-3c63-4098-a224-ef6b5d3a124d',
              custom_javascript: null,
            },
            {
              selector:
                'div.image-wrap \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/11sLKPW9vc5z8UfQtlGkTi/68f2ebbd9ef99935fb8fe27b76918b6a/new-landing-pages-mgmt__2_.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/11sLKPW9vc5z8UfQtlGkTi/68f2ebbd9ef99935fb8fe27b76918b6a/new-landing-pages-mgmt__2_.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '989eea7c-a97d-4ada-8f98-11df63d80547',
              custom_javascript: null,
            },
            {
              selector: 'h1.title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Tailored to the way you work'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '93732779-13b3-4542-924b-4cc4376b6b6a',
              custom_javascript: null,
            },
            {
              selector: 'h2.global-subtitle',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Personalize every inch of Notion to build your dream workflows and tools — so your team can get more done.',
                  ],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'bd561097-2ece-4b98-892f-1cd13f693c33',
              custom_javascript: null,
            },
            {
              selector:
                'div.visual \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/11sLKPW9vc5z8UfQtlGkTi/68f2ebbd9ef99935fb8fe27b76918b6a/new-landing-pages-mgmt__2_.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/11sLKPW9vc5z8UfQtlGkTi/68f2ebbd9ef99935fb8fe27b76918b6a/new-landing-pages-mgmt__2_.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '40041ba9-699c-44a4-a305-ca78e2365968',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['query.utm_campaign'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '9',
      name: 'ENG:ROW:Smart Display',
      campaign_slug: null,
      condition: {
        attribute: 'query.utm_campaign',
        value: '13482421115',
        and: [],
        or: [],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'f74dc7b4-fcbb-423c-a6e3-e8fde19eb5bf',
          description: '',
          global: false,
          priority: 8,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'notion.so',
          url_path: '/product',
          url_condition: null,
          hold_out: 0.5,
          async: false,
          dom_update_group_id: '8df4c4e3-aa40-4536-8727-57041db9386e',
          variation_key: 'a54e5021-98f7-4b89-8e36-0cc56e1c2430',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Boost productivity with Notion'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '6c112828-e32c-4260-ae22-c5b69f6d0894',
              custom_javascript: null,
            },
            {
              selector:
                'div.subtitle \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Notion replaces tools like Asana, Confluence and Google Docs to become your single source of truth for all types of work. Spend less time context switching and get more done.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '9d1d4df3-ab3c-477b-8f27-fb9e9b4e41c2',
              custom_javascript: null,
            },
            {
              selector: 'h1.title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '65px' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Boost productivity with Notion'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '1edb22ec-e4ff-4a23-94fa-1ad11353ba35',
              custom_javascript: null,
            },
            {
              selector: 'h2.global-subtitle',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Notion replaces tools like Asana, Confluence and Google Docs to become your single source of truth for all types of work. Spend less time context switching and get more done.',
                  ],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'f8e1d343-d5eb-4260-a00b-0b1fee59db3e',
              custom_javascript: null,
            },
            {
              selector:
                'div.visual \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: '/cdn-cgi/image/format=auto,width=3840,quality=100/https://images.ctfassets.net/spoqsaf9291f/6OKV13ExDC6uAeEIJxbLJn/be539cdd060b96fbbecab502dcd574b9/competitors.png',
                  srcset:
                    '/cdn-cgi/image/format=auto,width=3840,quality=100/https://images.ctfassets.net/spoqsaf9291f/6OKV13ExDC6uAeEIJxbLJn/be539cdd060b96fbbecab502dcd574b9/competitors.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'ce7f1090-59e9-4798-98bf-bdb386f7b060',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['query.utm_campaign'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '23',
      name: 'JK - Japan traffic - personalized logos',
      campaign_slug: null,
      condition: {
        attribute: 'person.current_geo.country',
        value: 'JP',
        and: [],
        or: [
          {
            attribute: 'company.headquarters_geo.country',
            value: 'Japan',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'person.identify.accept_language_preference',
            value: 'v2/ja-JP',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_content',
            value: 'japantest',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'd6d2a188-d77a-4ac3-b04d-1248d1cbc353',
          description: 'Japanese localized logos on homepage',
          global: false,
          priority: 6,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'notion.so',
          url_path: '/',
          url_condition: null,
          hold_out: 0.5,
          async: false,
          dom_update_group_id: '2a2a31e7-7928-452e-8fed-ecd4ffc39f83',
          variation_key: '5bf6f241-d4fd-4962-a416-8b1807864034',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector:
                'div.logos \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/MHI_JP01_FC_POS_RGB 1.png',
                  style: 'filter:none;',
                  srcset:
                    'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/MHI_JP01_FC_POS_RGB 1.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '33d45397-d626-4d21-a7fc-57a150fa6554',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/image 1.png',
                  style: 'filter:none;',
                  srcset:
                    'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/image 1.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'a6c89a82-9294-4ac7-bd42-7129b35b64da',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/Group 40.png',
                  style: 'filter:none;',
                  srcset:
                    'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/Group 40.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '8c9920eb-9a29-4cdb-8a20-d5014e418a66',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/SmartNews_logo_right (1) 1.png',
                  style: 'filter:none;',
                  srcset:
                    'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/SmartNews_logo_right (1) 1.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'e2feeb84-361e-46cd-b63c-34c78a082625',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(5) \u003e img.logo',
              data: {
                html_attributes: {
                  src: 'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/20210729_raksul_logo_black_CMYK 3.png',
                  style: 'filter:none;',
                  srcset:
                    'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/20210729_raksul_logo_black_CMYK 3.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '70099495-0503-434d-926c-071742163aab',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: [
            'person.current_geo.country',
            'company.headquarters_geo.country',
            'person.identify.accept_language_preference',
            'query.utm_content',
          ],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '7',
      name: 'Search:Prospecting:Collaboration',
      campaign_slug: null,
      condition: {
        attribute: 'query.utm_medium',
        value: '118468481185',
        and: [],
        or: [
          {
            attribute: 'query.utm_medium',
            value: '121540600469',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468481265',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540600549',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468481945',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540601229',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540601269',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468481985',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965653998',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965654158',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965656358',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965654198',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: '1c9b4ae7-31cf-40c3-98ce-8a6388fc9f2f',
          description: 'Search Prospecting Collaboration',
          global: false,
          priority: 6,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/product',
          url_condition: null,
          hold_out: 0.5,
          async: false,
          dom_update_group_id: '6edf50a8-9075-4648-a444-d9bf4e66eaa4',
          variation_key: '4144a71e-2f33-401c-8e93-2835804c8637',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector:
                'main.main \u003e section:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(3)',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '120px', 'margin-bottom': '120px' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '02e39535-ca5b-4ae9-b789-5cd5c6861535',
              custom_javascript: null,
            },
            {
              selector:
                'main.main \u003e section:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(4)',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '0px', 'margin-bottom': '0px' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '61b31f12-5e9d-4a03-8324-99d93570c11e',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e section.global-margin-l \u003e div.global-limit-l',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '120px', 'margin-bottom': '120px' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '94156d74-0121-48d2-8c94-86b332f6def2',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-title \u003e h2.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ["Give your team a tool they'll love"],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'ddd5d83b-846b-4056-9c84-1cf0c8c4b750',
              custom_javascript: null,
            },
            {
              selector:
                'div.subtitle \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Stop wasting hours searching for the right info across Google Docs, emails and Slack. Connect projects, docs, and knowledge in Notion.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '5196e677-838f-4389-8280-bae5f3f0b82c',
              custom_javascript: null,
            },
            {
              selector: 'div.global-margin-m \u003e figure \u003e blockquote',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    '“',
                    { tag: 'fragment', html_attributes: {}, inner_html: [] },
                    'Our wiki was a mess. Notion gave us the opportunity to rally around one tool for everyone.',
                    { tag: 'fragment', html_attributes: {}, inner_html: [] },
                    '”',
                  ],
                },
                custom: false,
                tag: 'blockquote',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'b0c2a51c-676f-4e4c-a3f3-fcc0402cff05',
              custom_javascript: null,
            },
            {
              selector: 'div.person-name',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Vijay Iyengar'],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '20254f05-9bad-4e38-ae1a-56656547dc9c',
              custom_javascript: null,
            },
            {
              selector: 'div.person-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Principal Tech Lead Manager, Mixpanel'],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '43ceaee3-162f-4da3-9df3-b4c4fed296cf',
              custom_javascript: null,
            },
            {
              selector:
                'div.person-image \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/6108cNCoAeiKfGVUZRpD43/93210c4ef35ed8bb6365a2684a4bda66/9FAFB4FC-FA20-4D17-9259-DE4FF953897E_1.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/6108cNCoAeiKfGVUZRpD43/93210c4ef35ed8bb6365a2684a4bda66/9FAFB4FC-FA20-4D17-9259-DE4FF953897E_1.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'd7786248-955a-4833-8400-e1bc54fdc24d',
              custom_javascript: null,
            },
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '50px' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['The most popular collaboration tool, period.'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'bafa3ead-b82e-4f12-bc1d-ebba96969a8c',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-caption \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Get instant access to Notion features \u0026 templates. No credit card needed.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'f25c7aa3-9a1b-448d-826b-d913423ce076',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-title \u003e h2.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Make Notion your online collaboration hub '],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'ff6fb870-d91e-4f45-a91c-19adb2636125',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(6) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-title \u003e h2.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Get more work done with Notion'],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '85a50089-f023-4b99-8fcf-35747005bc50',
              custom_javascript: null,
            },
            {
              selector:
                'div.image-wrap \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/2IbsF6gv8I4kzUBMXFjhMj/1b13aff237a2cdbcb859cd32e35fb886/laptop-people.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/2IbsF6gv8I4kzUBMXFjhMj/1b13aff237a2cdbcb859cd32e35fb886/laptop-people.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'eec72932-8890-4b9c-97ab-c712117b94cb',
              custom_javascript: null,
            },
            {
              selector: 'h1.title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '53px' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['The most popular collaboration tool, period.'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'e08c3c59-f391-4768-8b1d-d608f0eb7ec5',
              custom_javascript: null,
            },
            {
              selector: 'h2.global-subtitle',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Stop wasting hours searching for the right info across Google Docs, emails and Slack. Connect projects, docs, and knowledge in Notion.',
                  ],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'fb76f92c-70d0-4448-8173-6fb19c2e5143',
              custom_javascript: null,
            },
            {
              selector:
                'div.visual \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/2IbsF6gv8I4kzUBMXFjhMj/1b13aff237a2cdbcb859cd32e35fb886/laptop-people.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/2IbsF6gv8I4kzUBMXFjhMj/1b13aff237a2cdbcb859cd32e35fb886/laptop-people.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'a76289ac-87bb-4539-8c62-6c90241d6ebe',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['query.utm_medium'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '4',
      name: 'Search:Prospecting:Knowledge Management',
      campaign_slug: null,
      condition: {
        attribute: 'query.utm_medium',
        value: '118468483185',
        and: [],
        or: [
          {
            attribute: 'query.utm_medium',
            value: '118468481465',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468483145',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468481425',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468481505',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468482225',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540602469',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540600749',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468481465',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540602429',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468483145',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468481425',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540600709',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468481505',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540600789',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468482225',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540601509',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965656118',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965654398',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965656078',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965654238',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965654438',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965655158',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965655198',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'c1f99fde-4207-4fc7-af52-7a995215e073',
          description: 'Search Prospecting Headline Keyword matching',
          global: false,
          priority: 5,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/product',
          url_condition: null,
          hold_out: 0.5,
          async: false,
          dom_update_group_id: '154cfc15-0a5b-4b02-af7e-49638e24d782',
          variation_key: '9a16607d-9f0f-47ca-b802-114641d0e7b9',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector:
                'div.image-wrap \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=1080,q=100/front-static/pages/wikis/hero-illustration-v2.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=1080,q=100/front-static/pages/wikis/hero-illustration-v2.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '71f321e3-3d11-4fcf-8439-1494c764bd5a',
              custom_javascript: null,
            },
            {
              selector:
                'main.main \u003e section:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(3)',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '120px', 'margin-bottom': '120px' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '8bfb1eff-6789-491e-b40d-baed70541cc0',
              custom_javascript: null,
            },
            {
              selector:
                'main.main \u003e section:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(4)',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '0px', 'margin-bottom': '0px' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '924a6367-b8c4-4e41-b449-06a7bae11f9e',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e section.global-margin-l \u003e div.global-limit-l',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '120px', 'margin-bottom': '120px' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'd5782294-45a0-4a3e-8751-16405586cfde',
              custom_javascript: null,
            },
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '50px' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Your team’s long term memory, all in one spot'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '9fcdcb37-47ad-446e-8f48-feba9cf48884',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-title \u003e h2.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ["Give your team a tool they'll love"],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '5e9cc22d-32e8-4e09-bc4a-b612962a83a6',
              custom_javascript: null,
            },
            {
              selector:
                'div.subtitle \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Stop wasting hours searching for the right info across Google Docs, emails and Slack. Connect projects, docs, and knowledge in Notion.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'f330226e-1390-4518-96cb-096288b68d97',
              custom_javascript: null,
            },
            {
              selector: 'div.global-margin-m \u003e figure \u003e blockquote',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    '“',
                    { tag: 'fragment', html_attributes: {}, inner_html: [] },
                    'Our wiki was a mess. Notion gave us the opportunity to rally around one tool for everyone.',
                    { tag: 'fragment', html_attributes: {}, inner_html: [] },
                    '”',
                  ],
                },
                custom: false,
                tag: 'blockquote',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'd997956c-dc6e-4f8f-a91c-55cc8149d756',
              custom_javascript: null,
            },
            {
              selector: 'div.person-name',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Vijay Iyengar'],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '06fc2a44-45e7-44a0-aed9-e5373bc57db4',
              custom_javascript: null,
            },
            {
              selector: 'div.person-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Principal Tech Lead Manager, Mixpanel'],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'caa6e6b9-d6ce-4c7f-aa5c-f8eb9119d2bd',
              custom_javascript: null,
            },
            {
              selector:
                'div.person-image \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/6108cNCoAeiKfGVUZRpD43/93210c4ef35ed8bb6365a2684a4bda66/9FAFB4FC-FA20-4D17-9259-DE4FF953897E_1.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/6108cNCoAeiKfGVUZRpD43/93210c4ef35ed8bb6365a2684a4bda66/9FAFB4FC-FA20-4D17-9259-DE4FF953897E_1.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '61ae0b14-d87a-44d5-9181-b29513d0d015',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-caption \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Get instant access to Notion features \u0026 templates. No credit card needed.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '95b73885-9165-4d69-b5cd-7efa1f6452ba',
              custom_javascript: null,
            },
            {
              selector: 'h1.title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Your team’s long term memory, all in one spot'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '5fc58e51-2f3e-4dab-9d5e-02070d824335',
              custom_javascript: null,
            },
            {
              selector: 'h2.global-subtitle',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Stop wasting hours searching for the right info across Google Docs, emails and Slack. Connect projects, docs, and knowledge in Notion.',
                  ],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '1bbb5a97-908d-49bc-970a-bc43e64613ad',
              custom_javascript: null,
            },
            {
              selector:
                'div.visual \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=1080,q=100/front-static/pages/wikis/hero-illustration-v2.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=1080,q=100/front-static/pages/wikis/hero-illustration-v2.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '7d9099fb-dafe-4ccd-9469-6c41bba74ae1',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['query.utm_medium'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '6',
      name: 'Search:Prospecting:Wiki',
      campaign_slug: null,
      condition: {
        attribute: 'query.utm_medium',
        value: '121540601429',
        and: [],
        or: [
          {
            attribute: 'query.utm_medium',
            value: '118468482145',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468482465',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540601749',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540601469',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468482185',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '121540601709',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '118468482425',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965654958',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965655398',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965655118',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '130965655358',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '135706837815 ',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_medium',
            value: '135706838095',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'c08ebd3f-b1dc-408d-b1a0-4b001c449174',
          description: 'Search Prospecting Wiki',
          global: false,
          priority: 3,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/product',
          url_condition: {
            attribute: 'url',
            value: 'https://www.notion.so/product',
            and: [],
            or: [
              {
                attribute: 'url',
                value: 'dev.notion.so',
                and: [],
                or: [],
                comparator: 'includes',
                filter: null,
                aggregation: null,
              },
            ],
            comparator: 'url_equal',
            filter: null,
            aggregation: null,
          },
          hold_out: 1,
          async: false,
          dom_update_group_id: 'ecd3f533-fbad-40ed-95df-11bcf5c791f3',
          variation_key: '49ff3cea-2e9b-4b9e-a4e2-8c2a434e6fdf',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector:
                'main.main \u003e section:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(3)',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '120px', 'margin-bottom': '120px' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'a8f458e7-6a0a-4842-9e8c-b5e017a24748',
              custom_javascript: null,
            },
            {
              selector:
                'main.main \u003e section:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(4)',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '0px', 'margin-bottom': '0px' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '38c5d803-997d-4910-b93c-5a5a9fcff4b5',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e section.global-margin-l \u003e div.global-limit-l',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '120px', 'margin-bottom': '120px' },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '82a2fc87-ce97-4b63-bbb0-ff1141a6a412',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-title \u003e h2.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ["Give your team a tool they'll love"],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '75c6ff7d-4149-434e-9ff6-8f7443aaee9c',
              custom_javascript: null,
            },
            {
              selector:
                'div.subtitle \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Stop wasting hours searching for the right info across Google Docs, emails and Slack. Connect projects, docs, and knowledge in Notion.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'af92ded9-9355-4dc8-9dd8-e0cb614e3c4f',
              custom_javascript: null,
            },
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '50px' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ["A wiki that isn't clunky"],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '2b2f24d5-a8c2-4199-ab52-67bf7ee59707',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-title \u003e h2.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ["Make Notion your team's wiki"],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'f5f2f99d-700c-4358-ae6e-27dde493b578',
              custom_javascript: null,
            },
            {
              selector: 'div.global-margin-m \u003e figure \u003e blockquote',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    '“',
                    { tag: 'fragment', html_attributes: {}, inner_html: [] },
                    'Our wiki was a mess. Notion gave us the opportunity to rally around one tool for everyone.”',
                    { tag: 'fragment', html_attributes: {}, inner_html: [] },
                    '”',
                  ],
                },
                custom: false,
                tag: 'blockquote',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '60535f3c-eb38-4c5e-b5ac-879300dc7b5c',
              custom_javascript: null,
            },
            {
              selector: 'div.person-name',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Vijay Iyengar'],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '1887ebbb-ab33-4281-ab08-99281a1ccbf3',
              custom_javascript: null,
            },
            {
              selector: 'div.person-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Principal Tech Lead Manager, Mixpanel'],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '83809aef-2475-47b5-95a1-a6b0a322cc31',
              custom_javascript: null,
            },
            {
              selector:
                'div.person-image \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/6108cNCoAeiKfGVUZRpD43/93210c4ef35ed8bb6365a2684a4bda66/9FAFB4FC-FA20-4D17-9259-DE4FF953897E_1.png',
                  srcset:
                    'https://www.notion.so/cdn-cgi/image/f=auto,w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/6108cNCoAeiKfGVUZRpD43/93210c4ef35ed8bb6365a2684a4bda66/9FAFB4FC-FA20-4D17-9259-DE4FF953897E_1.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '0bd1a021-0650-4512-b4d6-0d1d7ac811dc',
              custom_javascript: null,
            },
            {
              selector:
                'div.image-wrap \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://dev.notion.so/cdn-cgi/image/f=auto,w=1920,q=100/front-static/shared/illustrations/team-features-illustration.png',
                  srcset:
                    'https://dev.notion.so/cdn-cgi/image/f=auto,w=1920,q=100/front-static/shared/illustrations/team-features-illustration.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'f95d0893-f905-4097-9f20-64ac47472442',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(7) \u003e section.global-margin-l \u003e div.global-limit-l \u003e div.header \u003e div.header-text-wrap \u003e div.header-text \u003e div.header-caption \u003e div.rich-text \u003e div.body-limit \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Get instant access to Notion features \u0026 templates. No credit card needed.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '6af3a5cb-77b7-4a4c-95ec-696f09baf363',
              custom_javascript: null,
            },
            {
              selector: 'h1.title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    "A wiki that isn't",
                    {
                      tag: 'br',
                      html_attributes: { class: 'jsx-2549911665' },
                      inner_html: [],
                    },
                    ' clunky.',
                  ],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '2e8390d7-9c78-4c47-aedb-724952ca4fba',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['query.utm_medium'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '57',
      name: '[AW] Startup H1 Test',
      campaign_slug: null,
      condition: {
        attribute: 'user.random',
        value: 0,
        and: [],
        or: [],
        comparator: 'greater_than_or_equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'c9d41d93-f44d-4060-b6f0-bcb197068be9',
          description: null,
          global: false,
          priority: 62,
          experience_type: 'render',
          redirect_url: null,
          url_host: 'notion.so',
          url_path: '/startups',
          url_condition: null,
          hold_out: 0.75,
          async: false,
          dom_update_group_id: '815d63bf-0a91-4095-8e27-58f0c7dc3d17',
          variation_key: '7e123ae6-fa72-45fe-a08b-cfc768f78943',
          variation_name: 'Scale your startup with Notion',
          dom_updates: [
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: { 'text-align': 'center', 'margin-right': 'px' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Scale your startup with Notion'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '603af61c-ff14-46fc-b461-5ecbc6a4ac9a',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['user.random'],
          custom_javascript: null,
          custom_css: null,
          condition: {
            attribute:
              'web_experience_variation.c9d41d93-f44d-4060-b6f0-bcb197068be9.variation',
            value: '7e123ae6-fa72-45fe-a08b-cfc768f78943',
            and: [
              {
                attribute:
                  'web_experience_variation.c9d41d93-f44d-4060-b6f0-bcb197068be9.event_id',
                value: null,
                and: [],
                or: [],
                comparator: 'not_equal',
                filter: null,
                aggregation: null,
              },
            ],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        },
        {
          id: 'c9d41d93-f44d-4060-b6f0-bcb197068be9',
          description: null,
          global: false,
          priority: 62,
          experience_type: 'render',
          redirect_url: null,
          url_host: 'notion.so',
          url_path: '/startups',
          url_condition: null,
          hold_out: 0.75,
          async: false,
          dom_update_group_id: '4dfa199a-8346-4505-ae46-4f2fe2e9a2e3',
          variation_key: '3444524a-332f-4f81-a43b-b4b691e0f96b',
          variation_name: 'Invest in one operating system to scale with ease',
          dom_updates: [
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Invest in one operating system to scale with ease',
                  ],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '31bbc702-da8e-4e50-8b52-0764b1891e28',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['user.random'],
          custom_javascript: null,
          custom_css: null,
          condition: {
            attribute:
              'web_experience_variation.c9d41d93-f44d-4060-b6f0-bcb197068be9.variation',
            value: '3444524a-332f-4f81-a43b-b4b691e0f96b',
            and: [
              {
                attribute:
                  'web_experience_variation.c9d41d93-f44d-4060-b6f0-bcb197068be9.event_id',
                value: null,
                and: [],
                or: [],
                comparator: 'not_equal',
                filter: null,
                aggregation: null,
              },
            ],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        },
        {
          id: 'c9d41d93-f44d-4060-b6f0-bcb197068be9',
          description: null,
          global: false,
          priority: 62,
          experience_type: 'render',
          redirect_url: null,
          url_host: 'notion.so',
          url_path: '/startups',
          url_condition: null,
          hold_out: 0.75,
          async: false,
          dom_update_group_id: '6d0e268a-2b9b-45e6-94cb-b3906a3463c6',
          variation_key: 'fd413d6b-fd10-49e6-8bf2-e7e3d64204ab',
          variation_name: 'The operating system built for efficiency',
          dom_updates: [
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['The operating system built for efficiency'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '7dd42468-cb0e-425f-b510-3afc60c0deb2',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['user.random'],
          custom_javascript: null,
          custom_css: null,
          condition: {
            attribute:
              'web_experience_variation.c9d41d93-f44d-4060-b6f0-bcb197068be9.variation',
            value: 'fd413d6b-fd10-49e6-8bf2-e7e3d64204ab',
            and: [
              {
                attribute:
                  'web_experience_variation.c9d41d93-f44d-4060-b6f0-bcb197068be9.event_id',
                value: null,
                and: [],
                or: [],
                comparator: 'not_equal',
                filter: null,
                aggregation: null,
              },
            ],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        },
      ],
    },
    {
      id: '38',
      name: 'JK Startups - Homepage Headline Test V2 - Mobile',
      campaign_slug: null,
      condition: {
        attribute: 'company.clearbit.metrics.employeesRange',
        value: '1-10',
        and: [
          {
            attribute: 'browser.device_type',
            value: 'mobile',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        or: [
          {
            attribute: 'company.clearbit.metrics.employeesRange',
            value: '11-50',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'company.clearbit.metrics.employeesRange',
            value: '51-250',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: '19f0cbf1-6b3b-46f8-88fb-ad972af2e0e7',
          description: 'Startups Homepage Headline Test V2 - Mobile',
          global: false,
          priority: 5,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'notion.so',
          url_path: '/',
          url_condition: null,
          hold_out: 1,
          async: false,
          dom_update_group_id: '2e31971b-bfcc-45b5-9568-a405d970a314',
          variation_key: '817b4b18-ee99-4208-b932-e23a310814fc',
          variation_name:
            'Variant 6 - The collaboration tool that lets you focus on building',
          dom_updates: [
            {
              selector: 'h1.title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '70px' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'The collaboration tool that lets you focus on building',
                  ],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '03a0f82b-9e90-4981-9341-af2f02c226fc',
              custom_javascript: null,
            },
            {
              selector: 'h2.global-subtitle',
              data: {
                html_attributes: { style: '' },
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Consolidate your docs, wikis, and projects in Notion — and stay aligned through hypergrowth.',
                  ],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'b41976f4-0c29-474a-886d-8a37a43a4485',
              custom_javascript: null,
            },
            {
              selector: '.subtitle-wrap',
              data: {
                html_attributes: { style: 'max-width: 600px;' },
                styles: {},
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '55541c13-acf1-4334-93e3-d8cdf2c95ec1',
              custom_javascript: null,
            },
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: { 'font-size': '36px' },
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'The collaboration tool that lets you focus on building',
                  ],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'a7f56baf-c875-4a38-84e7-502c279d73d3',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: [
            'company.clearbit.metrics.employeesRange',
            'browser.device_type',
          ],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '34',
      name: 'Paid - Gantt Chart',
      campaign_slug: null,
      condition: {
        attribute: 'query.utm_medium',
        value: '135706839975',
        and: [],
        or: [
          {
            attribute: 'query.utm_medium',
            value: '136264347278',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'query.utm_content',
            value: 'mutiny-test',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'a87b1596-2fb0-45cb-a953-39967fbe9922',
          description: '',
          global: false,
          priority: 4,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'notion.so',
          url_path: '/product',
          url_condition: null,
          hold_out: 1,
          async: false,
          dom_update_group_id: '4b4f3172-d13a-4059-b551-afce925862a0',
          variation_key: '209e48f6-49e9-4775-910d-75c127ad7659',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector: 'h1.title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Way more than a ',
                    { tag: 'br', html_attributes: {}, inner_html: [] },
                    'Gantt Chart',
                  ],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '4a54cf80-4270-475b-b580-6f314ca3a613',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e div.value-prop \u003e div.text \u003e p:not([data-mutiny-insert="true"]):nth-of-type(2)',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'ec1f4d4b-654f-4549-a405-7cf96d630466',
              custom_javascript: null,
            },
            {
              selector:
                'li:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div.label',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '826fc112-bb5e-4d0d-9a6a-32a41e9c0f7c',
              custom_javascript: null,
            },
            {
              selector:
                'li:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div.label',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'de1f98d4-534e-4caf-ac06-729690e7618b',
              custom_javascript: null,
            },
            {
              selector:
                'li:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div.label',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'e41cea05-d84b-4c40-8cab-c6ffecd85023',
              custom_javascript: null,
            },
            {
              selector:
                'li:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1) \u003e div.label',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '4fbd64ff-ef91-44d0-9695-250b0889e924',
              custom_javascript: null,
            },
            {
              selector:
                'li:not([data-mutiny-insert="true"]):nth-of-type(5) \u003e a.clickable \u003e div.label',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '83f0d6f6-eda8-487b-a763-5d23c8115b63',
              custom_javascript: null,
            },
            {
              selector: 'h2.global-subtitle',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    "See all your projects in one place with Notion's Timeline view.",
                  ],
                },
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '18d5323d-e422-4422-b0db-9e531da51306',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e div.value-prop \u003e div.text \u003e div.title-wrap \u003e h3.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Plan and do your work in the same place'],
                },
                custom: false,
                tag: 'h3',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'eceb1a49-b826-410e-8bf2-7093e4079e01',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e div.value-prop \u003e div.text \u003e p',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Switching between Asana and Google Docs just to get things done? Store docs and mockups directly in your timeline.\n',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'aee7ae12-c6da-479f-8f09-ae1f385f116c',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e div.value-prop \u003e div.text \u003e div.title-wrap \u003e h3.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Connect your team’s favorite tools'],
                },
                custom: false,
                tag: 'h3',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'eac82dc1-72d4-45ea-b3de-0d2fcc5bb12b',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e div.value-prop \u003e div.text \u003e div.title-wrap \u003e h3.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Custom views for you and every team'],
                },
                custom: false,
                tag: 'h3',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '037f00a2-5fda-45d6-b244-edfc53026ad0',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e div.value-prop \u003e div.text \u003e p:not([data-mutiny-insert="true"]):nth-of-type(1)',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'View your timeline as a calendar or a table. Filter and group info however you need.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '59da7a6a-8de8-4499-9b6c-e5173cceb57f',
              custom_javascript: null,
            },
            {
              selector: 'h1.global-title',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'More than a',
                    {
                      tag: 'br',
                      html_attributes: { class: 'jsx-3534325540' },
                      inner_html: [],
                    },
                    ' Gantt chart',
                  ],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'ed5ccf06-0f48-4c4f-a02d-f95777e577d1',
              custom_javascript: null,
            },
            {
              selector: 'div.video-wrap.animation--running',
              data: {
                html_attributes: {
                  class:
                    'jsx-1124650935 video-wrap animation--running appear-instantly',
                },
                styles: {},
                content: {
                  tag: 'video',
                  html_attributes: {
                    loop: '',
                    class: 'jsx-1124650935 video-el',
                    muted: '',
                    autoplay: 'true',
                    playsinline: '',
                  },
                  inner_html: [
                    {
                      tag: 'source',
                      html_attributes: {
                        src: 'https://videos.ctfassets.net/spoqsaf9291f/4D32JxJxFv8uRVi9UFHUnT/6a312a12e660169bf16756fbf2413ca6/Timeline_view.mp4',
                        type: 'video/mp4',
                        class: 'jsx-1124650935',
                      },
                      inner_html: [],
                    },
                  ],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '5950d439-36d0-4a3a-9b13-237530592491',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e div.value-prop \u003e div.text \u003e p',
              data: {
                html_attributes: { class: 'jsx-1995594055' },
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    'Keep all context together, no matter what format. Include dynamic previews of Github PRs, Figma boards, Slack threads and more.',
                  ],
                },
                custom: false,
                tag: 'p',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '3f62b55a-3f5d-4835-bfe3-28d23802ec71',
              custom_javascript: null,
            },
            {
              selector: 'div.image-tile.animation--running',
              data: {
                html_attributes: {
                  class:
                    'jsx-541269649 image-tile animation--running appear-instantly',
                  style:
                    '-webkit-filter: drop-shadow(5px 5px 5px #222);   filter: drop-shadow(5px 5px 5px #222);',
                },
                styles: { color: 'rgba(0,0,0,0.17)' },
                content: {
                  tag: 'div',
                  html_attributes: {
                    class: 'jsx-1864960045 animation--running appear-instantly',
                  },
                  inner_html: [
                    {
                      tag: 'div',
                      html_attributes: { class: 'jsx-1124650935 video-wrap' },
                      inner_html: [
                        {
                          tag: 'video',
                          html_attributes: {
                            loop: '',
                            class: 'jsx-1124650935 video-el',
                            muted: '',
                            autoplay: '',
                            playsinline: '',
                          },
                          inner_html: [
                            {
                              tag: 'source',
                              html_attributes: {
                                src: 'https://videos.ctfassets.net/spoqsaf9291f/7rK7i2eAkRmEcv3LLORr1T/1f1113b6fd1c728ca49727b1c6b6e47d/figma_link_preview.mp4',
                              },
                              inner_html: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '45336276-ac02-4cbb-b29e-7f5b1e4c9d38',
              custom_javascript: null,
            },
            {
              selector: 'figure.animation--running',
              data: {
                html_attributes: {},
                styles: {},
                custom: false,
                tag: 'figure',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'b1e87a1a-a55f-47c0-9ee1-a3ccad5c53cd',
              custom_javascript: null,
            },
            {
              selector:
                'div.media \u003e div:not([data-mutiny-insert="true"]):nth-of-type(1)',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'div',
                  html_attributes: { class: 'jsx-3931529471 rounded-media' },
                  inner_html: [
                    {
                      tag: 'div',
                      html_attributes: {
                        class:
                          'jsx-3931529471 animation--running appear-instantly',
                      },
                      inner_html: [
                        {
                          tag: 'div',
                          html_attributes: {
                            class: 'jsx-1124650935 video-wrap',
                          },
                          inner_html: [
                            {
                              tag: 'video',
                              html_attributes: {
                                loop: '',
                                class: 'jsx-1124650935 video-el',
                                muted: '',
                                autoplay: '',
                                playsinline: '',
                              },
                              inner_html: [
                                {
                                  tag: 'source',
                                  html_attributes: {
                                    src: 'https://videos.ctfassets.net/spoqsaf9291f/7rK7i2eAkRmEcv3LLORr1T/1f1113b6fd1c728ca49727b1c6b6e47d/figma_link_preview.mp4',
                                    type: 'video/mp4',
                                    class: 'jsx-1124650935',
                                  },
                                  inner_html: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '6720498d-405a-4094-be69-94c1f2f76d05',
              custom_javascript: null,
            },
            {
              selector: 'div.video-el',
              data: {
                html_attributes: {
                  class: 'jsx-1995594055 video-el',
                  style: 'padding: 0;',
                },
                styles: {},
                content: {
                  tag: 'div',
                  html_attributes: { class: 'jsx-2902175580 rt-spacing-s' },
                  inner_html: [
                    {
                      tag: 'div',
                      html_attributes: { class: 'jsx-863788387 body-limit' },
                      inner_html: [
                        {
                          tag: 'div',
                          html_attributes: {
                            role: 'button',
                            class: 'jsx-cae7a83f292c9e6d lightbox-trigger',
                            'aria-label': 'Open lightbox',
                          },
                          inner_html: [
                            {
                              tag: 'figure',
                              html_attributes: {
                                class: 'jsx-2e09f85b0a430c7b',
                              },
                              inner_html: [
                                {
                                  tag: 'div',
                                  html_attributes: {
                                    class: 'jsx-2e09f85b0a430c7b media',
                                  },
                                  inner_html: [
                                    {
                                      tag: 'div',
                                      html_attributes: {
                                        class: 'jsx-3931529471 rounded-media',
                                      },
                                      inner_html: [
                                        {
                                          tag: 'div',
                                          html_attributes: {
                                            class:
                                              'jsx-3931529471 animation--running appear-instantly',
                                          },
                                          inner_html: [
                                            {
                                              tag: 'div',
                                              html_attributes: {
                                                class:
                                                  'jsx-1124650935 video-wrap',
                                              },
                                              inner_html: [
                                                {
                                                  tag: 'video',
                                                  html_attributes: {
                                                    loop: '',
                                                    class:
                                                      'jsx-1124650935 video-el',
                                                    muted: '',
                                                    autoplay: '',
                                                    playsinline: '',
                                                  },
                                                  inner_html: [
                                                    {
                                                      tag: 'source',
                                                      html_attributes: {
                                                        src: '//videos.ctfassets.net/spoqsaf9291f/7rK7i2eAkRmEcv3LLORr1T/1f1113b6fd1c728ca49727b1c6b6e47d/figma_link_preview.mp4',
                                                        type: 'video/mp4',
                                                        class: 'jsx-1124650935',
                                                      },
                                                      inner_html: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '9c7aab3d-6b25-4ea4-988a-321206258ca4',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(4) \u003e div.value-prop \u003e div.visual \u003e div.rounded-media \u003e div.animation--running \u003e div.video-wrap \u003e video.video-el',
              data: {
                html_attributes: {
                  style:
                    'box-shadow: 0px 74px 89px rgb(0 0 0 / 4%), 0px 44.992px 51.7624px rgb(0 0 0 / 3%), 0px 23.976px 26.5932px rgb(0 0 0 / 2%), 0px 10.064px 11.1428px rgb(0 0 0 / 2%), 0px 2.368px 3.0616px rgb(0 0 0 / 1%);',
                },
                styles: {},
                content: {
                  tag: 'source',
                  html_attributes: {
                    src: 'https://videos.ctfassets.net/spoqsaf9291f/1JCjanYbWJti2Jb7Ipl0k6/d9041a407cd7308ff913f61fb90bad24/better_databases_video.mp4',
                  },
                  inner_html: [],
                },
                custom: false,
                tag: 'video',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'af40313b-1891-4bcf-9ddc-7552e9ce8ed5',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(3) \u003e div.value-prop \u003e div.visual \u003e div.image-tile',
              data: {
                html_attributes: {
                  style:
                    'box-shadow: 0px 74px 89px rgb(0 0 0 / 4%), 0px 44.992px 51.7624px rgb(0 0 0 / 3%), 0px 23.976px 26.5932px rgb(0 0 0 / 2%), 0px 10.064px 11.1428px rgb(0 0 0 / 2%), 0px 2.368px 3.0616px rgb(0 0 0 / 1%);',
                },
                styles: {},
                content: {
                  tag: 'video',
                  html_attributes: {
                    loop: '',
                    class: 'video-el',
                    muted: '',
                    style: 'width: 100%; display: block;',
                    autoplay: '',
                    playsinline: '',
                  },
                  inner_html: [
                    {
                      tag: 'source',
                      html_attributes: {
                        src: 'https://videos.ctfassets.net/spoqsaf9291f/7rK7i2eAkRmEcv3LLORr1T/1f1113b6fd1c728ca49727b1c6b6e47d/figma_link_preview.mp4',
                      },
                      inner_html: [],
                    },
                  ],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '3bad2676-a3aa-4e94-ad22-6870bafbccd7',
              custom_javascript: null,
            },
            {
              selector:
                'div:not([data-mutiny-insert="true"]):nth-of-type(2) \u003e div.value-prop \u003e div.visual \u003e div.rounded-media \u003e div.animation--running',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'div',
                  html_attributes: { class: 'jsx-1124650935 video-wrap' },
                  inner_html: [
                    {
                      tag: 'video',
                      html_attributes: {
                        loop: '',
                        class: 'jsx-1124650935 video-el',
                        muted: '',
                        autoplay: '',
                        playsinline: '',
                      },
                      inner_html: [
                        {
                          tag: 'source',
                          html_attributes: {
                            src: 'https://videos.ctfassets.net/spoqsaf9291f/4D32JxJxFv8uRVi9UFHUnT/6a312a12e660169bf16756fbf2413ca6/Timeline_view.mp4',
                            type: 'video/mp4',
                            class: 'jsx-1124650935',
                          },
                          inner_html: [],
                        },
                      ],
                    },
                  ],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'e0307463-4b7b-407d-962c-3f0898425952',
              custom_javascript: null,
            },
            {
              selector: 'nav.footer-top',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'nav',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '94f3056c-d0c1-4692-b8c8-1e0c57ebccc2',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['query.utm_medium', 'query.utm_content'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '47',
      name: 'Growth - Contact Sales Page - Desktop - 2022-06-23',
      campaign_slug: null,
      condition: {
        attribute: 'browser.device_type',
        value: 'desktop',
        and: [],
        or: [],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'd985873d-f5a2-43e9-9858-869a92d623a5',
          description: '',
          global: false,
          priority: 4,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/contact-sales',
          url_condition: null,
          hold_out: 0.5,
          async: false,
          dom_update_group_id: '7efde50e-ef5e-47d7-8fc2-673314a410dd',
          variation_key: 'd748b8f1-5132-4d5e-a0e2-e038293748da',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector: 'h1',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['Let’s explore how Notion can work for you'],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'c6d242f7-162b-485f-8e48-e8768fd64ef0',
              custom_javascript: null,
            },
            {
              selector: 'h2.global-subtitle',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'd71e6253-d59d-4054-9da0-a7fa85fa1a00',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['browser.device_type'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '48',
      name: 'Growth - Contact Sales Page - Mobile - 2022-06-23',
      campaign_slug: null,
      condition: {
        attribute: 'browser.device_type',
        value: 'mobile',
        and: [],
        or: [],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'e2a018fa-e0d4-4e29-9994-a4ea2cc595a8',
          description: '',
          global: false,
          priority: 17,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/contact-sales',
          url_condition: null,
          hold_out: 0.5,
          async: false,
          dom_update_group_id: '730d5235-83fd-4acf-a054-96a2e41c3cb0',
          variation_key: '1a698544-01a3-4a4b-9219-66f2847bf684',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector: 'h1',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ["Let's explore how Notion can work for you"],
                },
                custom: false,
                tag: 'h1',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'cbd7b2b7-a68e-40f0-b832-d964709aa373',
              custom_javascript: null,
            },
            {
              selector: 'h2.global-subtitle',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'h2',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '4c5ab4fb-284e-4fa8-bb42-e6594f8ab065',
              custom_javascript: null,
            },
            {
              selector: 'div.background',
              data: {
                html_attributes: {},
                styles: {},
                remove: true,
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '0657ccee-5d9f-467f-bdb8-ee2ca57d634c',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['browser.device_type'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
    {
      id: '45',
      name: '[MT] Notion Enterprise | G2 badges',
      campaign_slug: null,
      condition: {
        attribute: 'company.clearbit.metrics.employeesRange',
        value: '1K-5K',
        and: [],
        or: [
          {
            attribute: 'company.clearbit.metrics.employeesRange',
            value: '5K-10K',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'company.clearbit.metrics.employeesRange',
            value: '10K-50K',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'company.clearbit.metrics.employeesRange',
            value: '50K-100K',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
          {
            attribute: 'company.clearbit.metrics.employeesRange',
            value: '100K+',
            and: [],
            or: [],
            comparator: 'equal',
            filter: null,
            aggregation: null,
          },
        ],
        comparator: 'equal',
        filter: null,
        aggregation: null,
      },
      hold_out: '0.5',
      web_experiences: [
        {
          id: 'b0b5cf01-b930-416d-9618-1c5b3af97a28',
          description: 'G2 badges on Notion Enterprise',
          global: false,
          priority: 3,
          experience_type: 'render',
          redirect_url: '',
          url_host: 'www.notion.so',
          url_path: '/enterprise',
          url_condition: null,
          hold_out: 0.5,
          async: false,
          dom_update_group_id: 'c695d896-b6db-4abe-a099-657fc4a1d24c',
          variation_key: 'a54df462-fae9-4776-8272-9a9c844f3c6f',
          variation_name: 'Variation 1',
          dom_updates: [
            {
              selector: 'div.hero-main',
              data: {
                html_attributes: {
                  class: 'jsx-594497396 hero-main hero-main-left',
                },
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: [
                    {
                      tag: 'h1',
                      html_attributes: {
                        class:
                          'global-title global-title global-title-color-dark global-title-weight-bold global-title-size-l',
                      },
                      inner_html: ['Notion for Enterprise'],
                    },
                    {
                      tag: 'div',
                      html_attributes: { class: 'jsx-594497396 subtitle' },
                      inner_html: [
                        {
                          tag: 'article',
                          html_attributes: {
                            class: 'jsx-345faf5f77359a58 rich-text',
                          },
                          inner_html: [
                            {
                              tag: 'div',
                              html_attributes: {
                                class: 'jsx-863788387 body-limit',
                              },
                              inner_html: [
                                {
                                  tag: 'p',
                                  html_attributes: { class: 'jsx-223256972' },
                                  inner_html: [
                                    'One tool for your entire company to share knowledge, ship projects, and collaborate.',
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: 'div',
                      html_attributes: { class: 'jsx-594497396 cta-wrap' },
                      inner_html: [
                        {
                          tag: 'a',
                          html_attributes: {
                            href: 'https://www.notion.so/contact-sales',
                            role: 'button',
                            class: 'jsx-2971364727 button-link',
                          },
                          inner_html: [
                            {
                              tag: 'div',
                              html_attributes: {
                                class:
                                  'jsx-2971364727 button primary button-size-l',
                              },
                              inner_html: ['Contact sales'],
                            },
                          ],
                        },
                      ],
                    },
                    { tag: 'br', html_attributes: {}, inner_html: [] },
                    '\n\n ',
                    {
                      tag: 'div',
                      html_attributes: {
                        class: 'jsx-1805324592 trusted-by-wrap',
                      },
                      inner_html: [
                        {
                          tag: 'p',
                          html_attributes: {
                            class:
                              'global-text global-text-font-family-sans global-text-weight-regular global-text-color-medium global-text-size-caption',
                          },
                          inner_html: ['Rated best on G2'],
                        },
                        {
                          tag: 'div',
                          html_attributes: {
                            class: 'jsx-1805324592 logos-wrap',
                          },
                          inner_html: [
                            {
                              tag: 'div',
                              html_attributes: {
                                class:
                                  'jsx-722906092 logos opacity no-max-width',
                              },
                              inner_html: [
                                {
                                  tag: 'div',
                                  html_attributes: {
                                    class: 'jsx-722906092 logo-item',
                                  },
                                  inner_html: [
                                    {
                                      tag: 'img',
                                      html_attributes: {
                                        alt: '',
                                        src: 'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/Screen%2520Shot%25202022-09-22%2520at%25208.15.57%2520PM.png',
                                        class:
                                          'jsx-98890478 logo logo-bw logo-limit-height',
                                        height: '100',
                                        loading: 'lazy',
                                      },
                                      inner_html: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'f89e752b-d7a9-4d29-abb3-9d644a0aee58',
              custom_javascript: null,
            },
            {
              selector:
                'div.media \u003e span:nth-of-type(1) \u003e img.next-image',
              data: {
                html_attributes: {
                  src: 'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/G2%2520badges%2520-%2520group.png',
                  srcset:
                    'https://images.production.cdn.mutinyhq.io/81e692b7-3620-47bb-a732-957301c51f9e/G2%2520badges%2520-%2520group.png',
                },
                styles: {},
                custom: false,
                tag: 'img',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '74b1588a-80f5-4126-81e2-3949d5744c41',
              custom_javascript: null,
            },
            {
              selector:
                'div:nth-of-type(3) \u003e div.stat \u003e h4.global-title-weight-bold',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['90%'],
                },
                custom: false,
                tag: 'h4',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: 'd60a646b-a63e-4516-b597-50fecfc3096c',
              custom_javascript: null,
            },
            {
              selector:
                'div:nth-of-type(4) \u003e div.stat \u003e h4.global-title-weight-bold',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['85%'],
                },
                custom: false,
                tag: 'h4',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '7e47c815-4409-4b6e-b371-966cf10f04df',
              custom_javascript: null,
            },
            {
              selector:
                'div:nth-of-type(2) \u003e div.stat \u003e h4.global-title-weight-bold',
              data: {
                html_attributes: {},
                styles: {},
                content: {
                  tag: 'fragment',
                  html_attributes: {},
                  inner_html: ['87%'],
                },
                custom: false,
                tag: 'h4',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '87b9fdf4-b63a-43f7-9b05-f3ca3805a05c',
              custom_javascript: null,
            },
            {
              selector:
                'section:nth-of-type(1) \u003e div:nth-of-type(1) \u003e div.global-grid-container \u003e div:nth-of-type(1)',
              data: {
                html_attributes: {},
                styles: { 'margin-top': '10px', 'margin-bottom': 'px' },
                position: {
                  parent_selector:
                    'section:nth-of-type(1) \u003e div:nth-of-type(1) \u003e div.global-grid-container',
                  index: 2,
                  deconflictor: null,
                },
                custom: false,
                tag: 'div',
                replace_classes: false,
                render_only_once: false,
              },
              content_hash: null,
              condition: null,
              resource_id: '201be84f-a5f3-4224-a22f-19492840abb2',
              custom_javascript: null,
            },
          ],
          questionnaire: null,
          component_stylesheet_id: null,
          data_dependencies: ['company.clearbit.metrics.employeesRange'],
          custom_javascript: null,
          custom_css: null,
          condition: null,
        },
      ],
    },
  ],
  dom_events: [
    {
      selector: 'div.cta-wrap \u003e button.button',
      event_type: 'conversion',
      listener_type: 'click',
      conversion_configuration_id: '351eeda2-8e34-4f20-922b-25a549966eec',
      url_host: 'notion.so',
      url_path: '/startups',
      url_condition: null,
    },
    {
      selector: 'form',
      event_type: 'conversion',
      listener_type: 'submit',
      conversion_configuration_id: 'f3e9190a-1a4e-45a8-ab4f-e8f5e5bc62ba',
      url_host: null,
      url_path: null,
      url_condition: {
        attribute: 'url_path',
        value: '/',
        and: [],
        or: [],
        comparator: 'includes',
        filter: null,
        aggregation: null,
      },
    },
    {
      selector: null,
      event_type: 'conversion',
      listener_type: 'hubspot',
      conversion_configuration_id: '0c0bca54-ba91-432a-ac88-0d501dc0fead',
      url_host: null,
      url_path: null,
      url_condition: {
        attribute: 'url_path',
        value: '/',
        and: [],
        or: [],
        comparator: 'includes',
        filter: null,
        aggregation: null,
      },
    },
    {
      selector: null,
      event_type: 'conversion',
      listener_type: 'calendly',
      conversion_configuration_id: '45818605-06d3-4ea6-8a04-b404e21effec',
      url_host: null,
      url_path: null,
      url_condition: {
        attribute: 'url_path',
        value: '/',
        and: [],
        or: [],
        comparator: 'includes',
        filter: null,
        aggregation: null,
      },
    },
    {
      selector: null,
      event_type: 'conversion',
      listener_type: 'drift',
      conversion_configuration_id: '98355bba-e1ba-4434-a6c8-8143212c00ea',
      url_host: null,
      url_path: null,
      url_condition: {
        attribute: 'url_path',
        value: '/',
        and: [],
        or: [],
        comparator: 'includes',
        filter: null,
        aggregation: null,
      },
    },
    {
      selector: 'div.primary.button-size-m',
      event_type: 'conversion',
      listener_type: 'click',
      conversion_configuration_id: '3bf51a48-6026-4c53-b509-83e4a4e3cf26',
      url_host: null,
      url_path: null,
      url_condition: {
        attribute: 'url',
        value: 'notion.so/',
        and: [],
        or: [],
        comparator: 'includes',
        filter: null,
        aggregation: null,
      },
    },
    {
      selector: 'div.sales-form-wrap \u003e form',
      event_type: 'conversion',
      listener_type: 'submit',
      conversion_configuration_id: '5eed0fc2-a906-48e9-bb15-4860447074aa',
      url_host: 'www.notion.so',
      url_path: '/contact-sales',
      url_condition: null,
    },
    {
      selector: 'div.mobile-cta \u003e a.button-link \u003e div.button',
      event_type: 'conversion',
      listener_type: 'click',
      conversion_configuration_id: 'ca81b591-01e0-438c-b572-2d8a058e07cb',
      url_host: null,
      url_path: null,
      url_condition: {
        attribute: 'url',
        value: 'notion.so',
        and: [],
        or: [],
        comparator: 'includes',
        filter: null,
        aggregation: null,
      },
    },
    {
      selector:
        'ul.nav-list-sales \u003e li.nav-item \u003e a.clickable \u003e div.label',
      event_type: 'conversion',
      listener_type: 'click',
      conversion_configuration_id: '893fd1ec-db1a-419c-8528-e5fd0c3e72ed',
      url_host: null,
      url_path: null,
      url_condition: {
        attribute: 'url',
        value: 'https://www.notion.so/',
        and: [],
        or: [],
        comparator: 'includes',
        filter: null,
        aggregation: null,
      },
    },
  ],
  stylesheets: [],
  questionnaires: [],
  url_data_sources: [],
});
