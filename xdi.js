// Copyright 2023 Transcend Inc. All Rights Reserved.
// Learn more at https://transcend.io/consent-manager

self.transcend = Object.assign(
  {
    readyQueue: [],
    ready(c) {
      this.readyQueue.push(c);
    },
    showConsentManager() {
      this.ready((t) => {
        t.showConsentManager();
      });
    },
    loadOptions: {
      csp: 'off',
      log: 'warn error',
      telemetry: 'on',
      syncEndpoint:
        'https://sync.transcend.io/consent-manager/a36a42ad-3a71-444f-9e8a-b19950129dc6',
      privacyPolicy:
        'https://www.notion.so/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091',
      telemetryEndpoint: 'https://telemetry.transcend.io/collect',
      unknownRequestPolicy: 'allow',
      telemetryPartitioning: 'path',
      prompt: '0',
      regimePrecedence: 'GDPR;LGPD;NEVADA_SB220;CPRA;CDPA;CPA;Unknown',
      consentManagerConfig: {
        privacyPolicy:
          'https://www.notion.so/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091',
        theme: { primaryColor: '#3333FF', fontColor: '#010101' },
        initialViewStateByPrivacyRegime: {
          GDPR: 'Hidden',
          LGPD: 'Hidden',
          NEVADA_SB220: 'Hidden',
          CPRA: 'Hidden',
          CDPA: 'Hidden',
          CPA: 'Hidden',
          Unknown: 'Hidden',
        },
      },
      css: 'https://cdn.transcend.io/cm/a36a42ad-3a71-444f-9e8a-b19950129dc6/cm.css',
      messages:
        'https://cdn.transcend.io/cm/a36a42ad-3a71-444f-9e8a-b19950129dc6/translations',
    },
  },
  self.transcend
);
(() => {
  const allowedHosts = [
    'sync.transcend.io',
    'notion.so',
    'notion.com',
    'notion.site',
    'localhost',
  ];
  (() => {
    'use strict';
    var Es = Object.defineProperty,
      bs = Object.defineProperties;
    var Ds = Object.getOwnPropertyDescriptors;
    var jo = Object.getOwnPropertySymbols;
    var Cs = Object.prototype.hasOwnProperty,
      _s = Object.prototype.propertyIsEnumerable;
    var Kt = (e, t, o) =>
        t in e
          ? Es(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (e[t] = o),
      x = (e, t) => {
        for (var o in t || (t = {})) Cs.call(t, o) && Kt(e, o, t[o]);
        if (jo) for (var o of jo(t)) _s.call(t, o) && Kt(e, o, t[o]);
        return e;
      },
      H = (e, t) => bs(e, Ds(t));
    var Y = (e, t, o) => (Kt(e, typeof t != 'symbol' ? t + '' : t, o), o),
      Uo = (e, t, o) => {
        if (!t.has(e)) throw TypeError('Cannot ' + o);
      };
    var R = (e, t, o) => (
        Uo(e, t, 'read from private field'), o ? o.call(e) : t.get(e)
      ),
      Wt = (e, t, o) => {
        if (t.has(e))
          throw TypeError('Cannot add the same private member more than once');
        t instanceof WeakSet ? t.add(e) : t.set(e, o);
      },
      Vo = (e, t, o, n) => (
        Uo(e, t, 'write to private field'), n ? n.call(e, o) : t.set(e, o), o
      );
    var Ko = 'http://www.w3.org/1999/xhtml',
      pt = ':~:';
    var u = self,
      { Function: Bt } = u,
      { call: ut, apply: Ls, bind: Rs } = Bt.prototype,
      r = ut.bind(ut),
      V = ut.bind(Ls),
      Qi = ut.bind(Rs),
      {
        Symbol: ar,
        parent: gt,
        document: M,
        location: Z,
        localStorage: K,
        sessionStorage: Ji,
        navigator: Yi,
        String: Qt,
        XMLHttpRequest: Jt,
        fetch: Zi,
        Request: Ms,
        WebSocket: ec,
        WebTransport: tc,
        EventSource: oc,
        Worker: rc,
        SharedWorker: nc,
        ServiceWorkerContainer: sc,
        Array: ge,
        Blob: ac,
        Boolean: ic,
        Object: I,
        Error: fe,
        ReferenceError: cc,
        TypeError: pc,
        Set: C,
        WeakSet: Ke,
        Map: _,
        WeakMap: yt,
        Promise: $,
        URL: Re,
        URLSearchParams: We,
        Event: Pe,
        CustomEvent: lc,
        UIEvent: ir,
        SubmitEvent: Ps,
        CookieChangeEvent: Os,
        CookieStore: mc,
        cookieStore: uc,
        SecurityPolicyViolationEvent: cr,
        Date: Me,
        FormData: Ns,
        ReadableStream: dc,
        Headers: As,
        console: pr,
        Math: ce,
        JSON: Yt,
        RegExp: lr,
        EventTarget: ws,
        MessagePort: ks,
        MessageChannel: mr,
        postMessage: ur,
        history: Hs,
        History: Gs,
        AbortController: gc,
        setTimeout: Oe,
        clearTimeout: Te,
        setInterval: yc,
        clearInterval: fc,
        requestIdleCallback: dr = function (
          e,
          { timeout: t = 0 } = { timeout: 0 }
        ) {
          return r(Oe, this, e, t);
        },
        cancelIdleCallback: Tc = function (e) {
          r(Te, this, e);
        },
        eval: gr,
        open: xc,
        close: Ic,
        TextEncoder: mt,
        performance: U,
        encodeURIComponent: ze,
        unescape: Xs,
        Intl: Fs,
        isNaN: js,
        confirm: Sc,
        Node: q,
        NodeList: Zt,
        Attr: yr,
        NamedNodeMap: Us,
        XMLSerializer: fr,
        DOMException: vc,
        MutationObserver: Vs,
        Number: Ks,
        Performance: Wo,
        PerformanceObserver: zo,
        PerformanceObserverEntryList: $o,
        PerformanceEntry: hc,
        PerformanceResourceTiming: Ec,
        Element: $e,
        Document: B,
        HTMLDocument: bc,
        DocumentFragment: Ws,
        DocumentType: zs,
        CharacterData: $s,
        HTMLElement: ft,
        HTMLScriptElement: Tr,
        HTMLAnchorElement: eo,
        HTMLEmbedElement: qs,
        HTMLIFrameElement: xr,
        HTMLFrameElement: Bs,
        HTMLFormElement: Tt,
        HTMLButtonElement: Dc,
        HTMLInputElement: Cc,
        HTMLImageElement: to,
        HTMLVideoElement: _c,
        HTMLLinkElement: Qs,
        HTMLAreaElement: Js,
        HTMLSourceElement: Ir,
        HTMLPictureElement: Lc,
        HTMLMediaElement: Sr,
        HTMLObjectElement: Ys,
        HTMLTrackElement: Rc,
        HTMLCollection: xt,
        SVGElement: oo,
        SVGScriptElement: Mc,
        SVGImageElement: Pc,
        DOMTokenList: ro,
        Navigator: pe,
        Navigation: qo,
        NavigateEvent: Oc,
        NavigationDestination: Nc,
        navigation: Ac,
        Proxy: vr,
        Reflect: dt,
        Range: hr,
        BroadcastChannel: zt,
        ShadowRoot: wc,
        Worklet: kc,
      } = u,
      {
        iterator: le,
        hasInstance: no,
        match: Bo,
        matchAll: Qo,
        replace: Jo,
        search: Yo,
        split: Zo,
        toStringTag: Zs,
      } = ar,
      ea = ar[no],
      v = (e, t) => r(ea, e, t),
      { childNodes: ta, children: oa } = M.createDocumentFragment(),
      It = [[], new C(), new _(), ta, M.createElement('_').classList, oa, ''],
      [ra, so, na, sa, aa, ia, ca] = It.map(({ [le]: e }) => e),
      ao = (e) =>
        v(ge, e)
          ? ra
          : v(C, e)
          ? so
          : v(_, e)
          ? na
          : v(Zt, e)
          ? ia
          : v(ro, e)
          ? sa
          : v(xt, e)
          ? aa
          : typeof e == 'string' || v(Qt, e)
          ? ca
          : e[le],
      io = I.defineProperty.bind(I),
      qe = I.getPrototypeOf.bind(I),
      Hc = dt.ownKeys.bind(dt),
      [pa, la, ma, ua, da, ga, ya] = It.map((e) => e[le]().next),
      Er = (e) =>
        v(ge, e)
          ? pa
          : v(C, e)
          ? la
          : v(_, e)
          ? ma
          : v(Zt, e)
          ? ua
          : v(ro, e)
          ? da
          : v(xt, e)
          ? ga
          : typeof e == 'string' || v(Qt, e)
          ? ya
          : r(ao(e), e).next,
      {
        includes: br,
        every: fa,
        some: Dr,
        map: Cr,
        push: co,
        pop: Ta,
        shift: xa,
        unshift: Ia,
        join: _r,
        slice: Gc,
        splice: Lr,
        find: Rr,
        findIndex: Sa,
        filter: Mr,
        flat: po,
        flatMap: va,
        reduce: lo,
        concat: Pr,
        keys: ha,
        values: Or,
        entries: Ea,
        slice: Nr,
        indexOf: Ar,
      } = ge.prototype,
      {
        add: wr,
        has: kr,
        delete: Hr,
        clear: Gr,
        values: Xr,
        entries: Fr,
        keys: jr,
        forEach: Ur,
      } = C.prototype,
      {
        get: St,
        set: Vr,
        has: Kr,
        delete: Wr,
        clear: ba,
        keys: Da,
        values: Ca,
        entries: _a,
      } = _.prototype,
      { toString: Xc } = Ks.prototype,
      g = function (e, t, o) {
        let n = r(ao(e), e),
          a = Er(e),
          p = r(a, n),
          l = 0;
        for (; !p.done; ) r(t, o, p.value, l++, e), (p = r(a, n));
      },
      La = dt.ownKeys.bind(dt),
      Ne = I.keys.bind(I),
      vt = I.entries.bind(I),
      lt,
      or,
      zr =
        ((or =
          (lt = I == null ? void 0 : I.fromEntries) == null
            ? void 0
            : lt.bind) == null
          ? void 0
          : or.call(lt, I)) ||
        ((e) => r(lo, xe(e), (t, [o, n]) => ((t[o] = n), t), d())),
      Fc = I.assign.bind(I),
      er = I.create.bind(I),
      Be = (e) => !js(e),
      d = (e = null, t = null) => (e ? er(t, uo(e)) : er(t)),
      { then: $r, catch: qr } = $.prototype,
      mo = $.all.bind($),
      jc = $.resolve.bind($),
      Uc = $.reject.bind($);
    var xe = (e) => {
        let t = r(ao(e), e),
          o = Er(e),
          n = [],
          a = r(o, t);
        for (; !a.done; ) r(co, n, a.value), (a = r(o, t));
        return n;
      },
      Ie = (e) => {
        e.length = 0;
      },
      Se = I.getOwnPropertyDescriptor.bind(I),
      uo = I.getOwnPropertyDescriptors.bind(I),
      s = (e, t) => Se(e.prototype, t),
      Ra = (e) => uo(e.prototype),
      { hasOwnProperty: Qe } = I.prototype,
      { postMessage: ht, start: Et, close: Je } = ks.prototype,
      rr,
      Vc =
        (rr = zt == null ? void 0 : zt.prototype) == null
          ? void 0
          : rr.postMessage,
      { parse: Ma, stringify: Pa } = Yt,
      go = Ma.bind(Yt),
      Ye = Pa.bind(Yt),
      { href: yo, hostname: Kc, origin: ee } = Z,
      Ae = lr.prototype,
      { test: Br } = Ae,
      Oa = Bo && Ae[Bo],
      Wc = Qo && Ae[Qo],
      fo = Zo && Ae[Zo],
      zc = Yo && Ae[Yo],
      To = Jo && Ae[Jo],
      $c = s(lr, 'source').get,
      {
        includes: Qr,
        split: Jr,
        startsWith: Na,
        endsWith: Aa,
        toLowerCase: Yr,
        toUpperCase: Zr,
        replace: en,
        replaceAll: qc,
        trim: tn,
        match: wa,
        matchAll: Bc,
        search: Qc,
        indexOf: on,
        slice: rn,
      } = Qt.prototype,
      { add: ka, has: Ha, delete: Ga } = Ke.prototype,
      { get: Xa, set: Fa, has: ja, delete: Ua } = yt.prototype,
      {
        preventDefault: Jc,
        stopPropagation: Yc,
        stopImmediatePropagation: Zc,
      } = Pe.prototype,
      { add: ep, remove: tp, toggle: op, contains: rp } = ro.prototype,
      {
        addEventListener: ve,
        removeEventListener: Ze,
        dispatchEvent: np,
      } = ws.prototype,
      {
        set: et,
        entries: xo,
        toString: nn,
        has: sp,
        get: Io,
        delete: Va,
      } = We.prototype,
      { entries: ap } = As.prototype,
      { go: ip, replaceState: Ka } = Gs.prototype;
    var { click: cp } = ft.prototype,
      { submit: pp, requestSubmit: lp } = Tt.prototype,
      {
        setAttribute: sn,
        setAttributeNS: mp,
        setAttributeNode: up,
        setAttributeNodeNS: dp,
        insertAdjacentElement: gp,
        insertAdjacentHTML: yp,
        append: an,
        prepend: fp,
        before: Tp,
        after: xp,
        replaceWith: Ip,
        remove: Sp,
        hasAttribute: vp,
        getAttribute: cn,
        removeAttribute: pn,
        hasAttributeNS: hp,
        getAttributeNS: Ep,
        removeAttributeNS: bp,
        getElementsByTagName: Dp,
      } = $e.prototype,
      {
        appendChild: Cp,
        removeChild: _p,
        insertBefore: Lp,
        replaceChild: Rp,
        cloneNode: Mp,
        getRootNode: Pp,
        lookupNamespaceURI: Op,
      } = q.prototype,
      { forEach: Wa } = Zt.prototype,
      { setNamedItem: Np, setNamedItemNS: Ap } = Us.prototype,
      {
        adoptNode: wp,
        importNode: kp,
        append: Hp,
        prepend: Gp,
        write: Xp = M.write,
        open: Fp = M.open,
        close: jp = M.close,
        createElement: Up,
        createElementNS: ln,
        createDocumentFragment: za,
      } = B.prototype,
      { append: Vp, prepend: Kp } = Ws.prototype,
      { before: Wp, after: zp, replaceWith: $p } = zs.prototype,
      { before: qp, after: Bp, replaceWith: Qp } = $s.prototype,
      { observe: Jp, disconnect: Yp } = Vs.prototype,
      mn = Wo && Wo.prototype.getEntries,
      {
        observe: Zp,
        disconnect: el,
        takeRecords: tl,
      } = (zo && zo.prototype) || d(),
      ol = $o && $o.prototype.getEntries,
      rl = U == null ? void 0 : U.timeOrigin,
      nl = U == null ? void 0 : U.setResourceTimingBufferSize,
      sl = U == null ? void 0 : U.clearResourceTimings,
      { serializeToString: $a } = fr.prototype,
      { createHTMLDocument: al, createDocument: il } =
        DOMImplementation.prototype,
      $t = ['DocumentFragment', 'Document', 'Element'],
      qt = ['DocumentType', 'CharacterData', 'Element'],
      un = new _(),
      dn = new _(),
      gn = new _(),
      yn = new _(),
      fn = new _(),
      Tn = new _();
    g($t, (e) => {
      let t = u[e];
      un.set(e, t.prototype.querySelector),
        dn.set(e, t.prototype.querySelectorAll);
    });
    g(qt, (e) => {
      let t = u[e];
      gn.set(e, t.prototype.remove),
        yn.set(e, t.prototype.replaceWith),
        fn.set(e, t.prototype.before),
        Tn.set(e, t.prototype.after);
    });
    var qa = s(q, 'nodeType').get,
      Ba = s(q, 'childNodes').get,
      cl = s(q, 'parentNode').get,
      pl = s(q, 'parentElement').get,
      ll = s(q, 'firstChild').get,
      {
        compareDocumentPosition: Qa,
        DOCUMENT_POSITION_DISCONNECTED: Ja,
        DOCUMENT_NODE: Ya,
        ELEMENT_NODE: ml,
        TEXT_NODE: ul,
        DOCUMENT_FRAGMENT_NODE: dl,
        DOCUMENT_TYPE_NODE: gl,
      } = q.prototype,
      { contains: yl } = q.prototype;
    var Za = (e) => r(qa, e) === Ya;
    var fl = s(B, 'cookie'),
      ei = s(B, 'implementation').get,
      So = s(q, 'ownerDocument').get,
      xn = s(B, 'defaultView').get,
      ti = s(B, 'currentScript').get,
      Tl = s(B, 'readyState').get;
    var xl = s($e, 'tagName').get,
      Il = s($e, 'namespaceURI').get,
      Sl = r(ei, M),
      te = r(ti, M),
      oi = () => r(Ba, r(za, M)),
      bt =
        (e, t) =>
        (o, ...n) => {
          let a = r(xn, r(So, o) || M) || u,
            p = qt.length;
          for (; p--; ) {
            let l = qt[p],
              m = a[l];
            if (v(m, o)) return V(r(St, e, l), o, n);
          }
          return t;
        },
      In =
        (e, t) =>
        (o, ...n) => {
          let a = r(xn, Za(o) ? o : r(So, o) || M) || u,
            p = $t.length;
          for (; p--; ) {
            let l = $t[p],
              m = a[l];
            if (v(m, o)) return V(r(St, e, l), o, n);
          }
          return t;
        },
      Dt = bt(gn),
      vl = bt(fn),
      hl = bt(Tn),
      El = bt(yn),
      bl = In(un, null),
      Dl = In(dn, oi()),
      ye = I.freeze.bind(I),
      vo = (e, t, o = e[t]) =>
        io(e, t, { value: o, configurable: !1, writable: !1, enumerable: !1 }),
      we = (e) => (ye(e.prototype), ye(e));
    var oe = ge.isArray.bind(ge),
      Ct = Me.now.bind(Me),
      he = Me.parse.bind(Me),
      { toISOString: ri, toUTCString: Cl, setMilliseconds: _l } = Me.prototype,
      tt = (e = new Me()) => r(ri, e);
    var nr,
      ni =
        (nr = mt == null ? void 0 : mt.prototype) == null ? void 0 : nr.encode,
      si = Se(qe(Uint8Array.prototype), 'byteLength').get,
      Sn = ce.min.bind(ce),
      vn = ce.max.bind(ce),
      Ll = ce.random.bind(ce),
      Rl = ce.floor.bind(ce),
      Ml = Re.createObjectURL.bind(Re),
      Pl = Re.revokeObjectURL.bind(Re),
      ai = 'doNotTrack' in pe.prototype,
      Ol = ai && s(pe, 'doNotTrack').get;
    var Nl = s(pe, 'languages').get,
      { DateTimeFormat: ii } = Fs,
      { resolvedOptions: Al } = ii.prototype,
      ci = 'globalPrivacyControl' in pe.prototype,
      wl = ci && s(pe, 'globalPrivacyControl').get;
    var { sendBeacon: kl } = pe.prototype,
      Hl = qo && qo.prototype.navigate,
      { createContextualFragment: Gl } = hr.prototype,
      Xl = s(hr, 'commonAncestorContainer').get,
      pi = s(C, 'size').get,
      _t = (e) => r(pi, e),
      Fl = s(_, 'size').get;
    var ho = (e) => {
        let t = uo(e);
        return (o, ...n) => {
          let a = d();
          return (
            g(n, (p) => {
              let l = t[p];
              if (l) {
                let { get: m, set: i } = l;
                (m || i) &&
                  io(
                    a,
                    p,
                    x(
                      x(
                        {},
                        m && {
                          get(...c) {
                            return V(m, o, c);
                          },
                        }
                      ),
                      i && {
                        set(...c) {
                          return V(i, o, c);
                        },
                      }
                    )
                  );
              }
            }),
            a
          );
        };
      },
      jl = ho(Z).bind(self, Z),
      Lt = ho(Re.prototype),
      Eo = (e, t = yo) => new Re(e, t),
      re = (e, ...t) => Lt(Eo(e), ...t),
      tr = Ra(Pe),
      li = d(),
      mi = d();
    g(Ne(tr), (e) => {
      let { get: t, set: o } = tr[e];
      (li[e] = t), (mi[e] = o);
    });
    var ui = ho(Pe.prototype),
      { item: Ul } = xt.prototype,
      Vl = s(xt, 'length').get,
      hn = s(ft, 'dataset').get,
      En = s(oo, 'dataset').get,
      bn = s(B, 'documentElement').get,
      Kl = s(B, 'body').get,
      Wl = s(B, 'head').get,
      sr,
      zl = (sr = s(B, 'xmlVersion')) == null ? void 0 : sr.get,
      $l = s(Tt, 'action'),
      ql = s(Tt, 'enctype'),
      Bl = s(Tt, 'method'),
      Ql = (
        s(q, 'isConnected') || {
          get() {
            let e = r(So, this);
            return !e || !(r(Qa, e, this) & Ja);
          },
        }
      ).get,
      Jl = s($e, 'innerHTML'),
      Yl = s($e, 'outerHTML'),
      Zl = s(Tr, 'src'),
      em = s(to, 'src'),
      tm = s(to, 'currentSrc'),
      om = s(to, 'srcset'),
      rm = s(Ir, 'src'),
      nm = s(Ir, 'srcset'),
      sm = s(Sr, 'src'),
      am = s(Sr, 'currentSrc'),
      Dn = s(xr, 'src'),
      im = s(qs, 'src'),
      cm = s(Bs, 'src'),
      pm = s(xr, 'srcdoc'),
      lm = s(eo, 'ping'),
      mm = s(eo, 'download'),
      um = s(Ys, 'data'),
      dm = s(eo, 'href'),
      gm = s(Qs, 'href'),
      ym = s(Js, 'href'),
      fm = s(yr, 'name'),
      Tm = s(yr, 'value'),
      xm = s(Ms, 'url').get,
      { open: Im, send: Sm, OPENED: vm } = Jt.prototype,
      hm = s(Jt, 'withCredentials'),
      Em = s(Jt, 'readyState').get,
      { entries: bm } = Ns.prototype,
      di = Ct();
    var ne = (e, t) => r(br, e, t);
    var Ln = (e, t, o) => r(Dr, e, t, o),
      L = (e, t, o) => r(Cr, e, t, o),
      G = (e, ...t) => V(co, e, t);
    var ke = (e, t) => r(_r, e, t),
      me = (e, t, o) => r(Nr, e, t, o),
      Rn = (e, t, o) => r(Lr, e, t, o),
      gi = (e, t, o) => r(Rr, e, t, o);
    var Q = (e, t, o) => r(Mr, e, t, o),
      yi = (e, t) => r(po, e, t),
      fi = (e, t, o) => r(lo, e, t, o),
      Ti = (e, ...t) => V(Pr, e, t),
      Rt = po ? (e) => yi(e, 1) : (e) => fi(e, (t, o) => Ti(t, o), []);
    var Co = (e, t, o) => r(Ar, e, t, o);
    var _o = (e) => r(Or, e),
      Mn = (e) => r(Xr, e);
    var Pn = (e, t) => r(Qr, e, t);
    var Lo = (e, t, o) => r(Jr, e, t, o),
      Ro = fo ? (e, t, o) => r(fo, t, e, o) : Lo;
    var Mt = (e) => r(Yr, e),
      On = (e) => r(Zr, e),
      He = To ? (e, t, o) => r(To, t, e, o) : (e, t, o) => r(en, e, t, o),
      Nn = (e) => r(tn, e),
      Cn = (e, t, o) => r(on, e, t, o),
      Mo = (e, t, o) => r(rn, e, t, o);
    var J = (e, t) => r(wr, e, t),
      N = (e, t) => r(kr, e, t),
      An = (e, t) => r(Hr, e, t),
      wn = (e) => r(Gr, e),
      Ge = (e, t) => r(St, e, t),
      ot = (e, t, o) => r(Vr, e, t, o),
      Xe = (e, t) => r(Kr, e, t),
      kn = (e, t) => r(Wr, e, t);
    var Hn = (e, t) => r(Br, e, t),
      Gn = (e) => {
        let t = new _();
        return (
          g(e, ([o, n]) => {
            ot(t, o, n);
          }),
          t
        );
      };
    var Ee = (e) => {
      let t = new C();
      return (
        g(e, (o) => {
          J(t, o);
        }),
        t
      );
    };
    var bo,
      Xn = () => {
        var e;
        return bo != null
          ? bo
          : (bo =
              ((e = gi(r(mn, U), ({ entryType: t }) => t === 'navigation')) ==
              null
                ? void 0
                : e.name) || yo);
      },
      Fn = (e) => {
        let t = Cn(e, '#'),
          o = t !== -1 ? Cn(Mo(e, t), pt) : -1;
        return o !== -1 ? t + o : -1;
      },
      Po = (e, t = Fn(e)) => (t !== -1 ? new We(Mo(e, t + pt.length)) : !1),
      xi = /=(&|$)/g,
      Ii = (e) => He(e, xi, '$1'),
      _n = (e) => Ii(r(nn, e)),
      jn = (e, t) => {
        if (r(xo, t).next().done) return;
        let { hash: o } = e;
        if (o) {
          let n = Fn(o);
          if (n !== -1) {
            let a = Po(o);
            for (let [p, l] of r(xo, t)) r(et, a, p, l);
            e.hash = `${Mo(o, 0, n)}${_n(a)}`;
            return;
          }
        }
        e.hash += `${pt}${_n(t)}`;
      };
    var Do = (e) => `data-${He(e, /[A-Z]/g, (t) => `-${Mt(t)}`)}`,
      Si = function () {
        let e = this;
        return new vr(d(), {
          get: (t, o) => (typeof o == 'string' ? r(cn, e, Do(o)) : t[o]),
          set: (t, o, n) =>
            typeof o == 'string' ? r(sn, e, Do(o)) : ((t[o] = n), !0),
          deleteProperty: (t, o) =>
            typeof o == 'string' ? (r(pn, e, Do(o)), !0) : delete t[o],
        });
      },
      Oo = (e) => r(v(ft, e) ? hn : v(oo, e) ? En : Si, e);
    var Un = (e) => r(ln, document, Ko, e);
    var Vn = () => {
      var n, a;
      g(It, (p) => {
        vo(qe(p), le), ye(qe(p[le]()));
      });
      let e =
        (a = (n = u) == null ? void 0 : n.Iterator) == null
          ? void 0
          : a.prototype;
      e && ye(e);
      let t = 'prototype',
        o = [
          [yt[t], 'has', 'get', 'set'],
          [Ke[t], 'has', 'add'],
          [Ke, no],
          [Bt[t], 'call'],
        ];
      g(o, ([p, ...l]) => {
        g(l, (m) => {
          vo(p, m);
        });
      });
    };
    var vi = /(?:\s*(?:,\s*)+|\s+)/,
      Fe = (e) => Ro(e, vi);
    var Kn,
      Wn = !((Kn = te) == null ? void 0 : Kn.src) && typeof GM < 'u';
    var Pt = (e) => {
      r(dr, u, () => {
        throw e;
      });
    };
    var ue = (e, t = d, o) => {
      try {
        return go(e, o);
      } catch (n) {
        return Pt(n), t == null ? void 0 : t();
      }
    };
    var No = u.airgap,
      rt = No == null ? void 0 : No.loadOptions,
      zn = te ? Oo(te) : d();
    if (Wn) {
      let e = { log: '*', monitoring: 'export' },
        { tcmLoadOptions: t } = K,
        o = x(x({}, e), t ? ue(t) : d());
      rt = rt ? x(x({}, rt), o) : o;
    }
    var X = d(rt ? x(x({}, rt), zn) : zn),
      Nt = ['fatal', 'error', 'warn', 'info', 'log', 'debug', 'trace'],
      hi = 'info',
      Ei = (e) => {
        let t = -1;
        return (
          g(e, (o) => {
            let n = Co(Nt, o);
            n !== -1 && (t = vn(n, t));
          }),
          t !== -1 ? me(Nt, 0, t + 1) : []
        );
      },
      bi = ['all', '*'],
      $n,
      Ot = Mt(($n = X.log) != null ? $n : ''),
      nt = Ee(Ei(ne(bi, Ot) ? Nt : !Ot || Ot === 'off' ? [] : Fe(Mt(Ot)))),
      A = _t(nt) > Co(Nt, hi),
      Ao = N(nt, 'error'),
      de = N(nt, 'warn');
    var w,
      be,
      qn = class {
        constructor() {
          Wt(this, w, new C());
          Wt(this, be, !1);
        }
        static freeze(t) {
          return R(t, be) || Vo(t, be, !0), t;
        }
        add(t) {
          return R(this, be) || J(R(this, w), t), this;
        }
        clear() {
          R(this, be) || wn(R(this, w));
        }
        delete(t) {
          return R(this, be) ? !1 : An(R(this, w), t);
        }
        get size() {
          return _t(R(this, w));
        }
        has(t) {
          return N(R(this, w), t);
        }
        entries() {
          return r(Fr, R(this, w));
        }
        forEach(t, o) {
          r(Ur, R(this, w), t, o);
        }
        keys() {
          return r(jr, R(this, w));
        }
        values() {
          return Mn(R(this, w));
        }
        [le]() {
          return r(so, R(this, w));
        }
      };
    (w = new WeakMap()), (be = new WeakMap());
    we(qn);
    var Di = /\.+$/g,
      Bn = (e) => He(e, Di, '');
    var se = (e, t, o) => {
      let { hostname: n, port: a } = re(
          `https://${t}${typeof o < 'u' ? `:${o}` : ''}`,
          'port',
          'hostname'
        ),
        p = Lo(Bn(n), '.'),
        m = p.length > 1 ? p.length - 1 : 1;
      return Ln(e, (i) => {
        let { port: c, hostname: y } = re(`https://${i}`, 'port', 'hostname');
        for (let f = 0; f < m; f++)
          if (ke(me(p, f), '.') === y && (!c || c === a)) return !0;
        return !1;
      });
    };
    var Ci = /[=;]/g,
      Qn = (e) => He(`${e}`, Ci, (t) => r(ze, u, t)),
      Jn = ({ name: e, value: t }, o = !1) =>
        `${Qn(o || e || '')}${o ? '' : `=${Qn(t || '')}`}`;
    var Yn =
        ({ getKey: e, searchDepth: t = null, condition: o }) =>
        (n, ...a) => {
          let l = !a.length ? xe(n) : Rt(a),
            m = new C();
          g(l, (T) => {
            J(m, e(T));
          });
          let i = [],
            c = t === null,
            y = c ? 0 : Sn(l.length, t);
          g(c ? l : me(l, -y), (T, b) => {
            let S = e(T);
            N(m, S) ? (!o || o(T)) && G(i, c ? b : b + y) : J(m, S);
          });
          let f = i.length;
          for (; f--; ) {
            let T = i[f];
            Rn(l, T, 1);
          }
          return l;
        },
      wo = Yn({
        getKey: ({ url: e }) => e,
        condition: (e) => {
          var o;
          let t =
            (o = e == null ? void 0 : e.requestInit) == null
              ? void 0
              : o.method;
          return !t || On(t) === 'GET';
        },
      }),
      Zn = Yn({ getKey: Jn });
    var At = {
        get() {
          return this.isTrusted;
        },
      },
      Eu = (Se(new Pe(''), 'isTrusted') || At).get,
      bu = (Se(new ir(''), 'isTrusted') || At).get;
    var Du = (Se(new cr('securitypolicyviolation'), 'isTrusted') || At).get;
    var Cu = (Se(new Pe('load'), 'isTrusted') || At).get;
    var es = (e = '', t, o = pr) => {
      let n = (D, P, ...j) => {
          let ae = [],
            Ce = !0;
          g(j, ({ tag: O, message: E }) => {
            Ce
              ? (typeof E.content == 'string'
                  ? G(ae, [
                      `%c${O.content ? `${O.content}%c ` : '%c'}${E.content}`,
                      ...O.styles,
                      '',
                      ...E.styles,
                    ])
                  : G(ae, [`%c${O.content}`, ...O.styles, E.content]),
                (Ce = !1))
              : G(ae, E.content);
          });
          let _e = Rt(ae);
          V(D, o, _e);
        },
        a =
          'font-size:larger;font-weight:bold;border-radius:0.25em;padding:0.08em 0.25em;',
        p = `${a};color:navy;background-color:#78acff;`,
        l = `${a};color:#2F4F4F;background-color:darkgray`,
        m = `${a};color:amber;background-color:#6e3e00`,
        i = `${a};color:#800000;background-color:#ff4500`,
        c = e,
        y = (D, P) => {
          let j = c;
          (c = D), P && (P(), (c = j));
        },
        f = Gn([['fatal', 'error']]),
        T = (D, P, j = a) => {
          if (t && !N(t, P)) {
            let E = () => {};
            return (E.styled = E), E;
          }
          let ae = o[Xe(f, D) ? Ge(f, D) : D],
            Ce = [j],
            _e = [],
            O = (...E) => {
              n(
                ae,
                D,
                ...L(E, (ie) => ({
                  tag: { content: c, styles: Ce },
                  message: { content: ie, styles: _e },
                }))
              );
            };
          return (
            (O.styled = (E, ...ie) => {
              let [z] = ie;
              ie.length > 0 &&
                (typeof z != 'string' || !Pn(z, '%c')) &&
                (ie[0] = `%c${z}`),
                typeof E < 'u' && E !== null && G(_e, ...(oe(E) ? E : [E])),
                O(...ie),
                Ie(_e);
            }),
            O
          );
        },
        b = 'info',
        S = [
          ['group', [b, p]],
          ['groupCollapsed', [b, p]],
          ['groupEnd', [b, p]],
          ['trace', ['trace', l]],
          ['log', [b, p]],
          ['info', [b, p]],
          ['debug', ['debug', l]],
          ['warn', ['warn', m]],
          ['error', ['error', i]],
          ['fatal', ['error', i]],
        ],
        F = d({ tag: y });
      return (
        g(S, ([D, [P, j]]) => {
          F[D] = T(D, P, j);
        }),
        ye(F)
      );
    };
    var ko = (e) =>
      e
        ? L(e ? Q(Fe(e), (t) => t) : [], (t) =>
            Eo(Hn(/^[\w-]+:\/\//, t) ? t : `https://${t}`)
          )
        : [];
    var wt = class {
      constructor(t, o) {
        this.id = t;
        Y(this, 'hosts');
        Y(this, 'consent');
        Y(this, 'toJSON', () => {
          let { id: t, consent: o, hosts: n } = this;
          return { [t]: o ? [o, ...n] : n };
        });
        let [n] = o;
        typeof n == 'object'
          ? ((this.consent = n), (this.hosts = me(o, 1)))
          : (this.hosts = o);
      }
    };
    we(wt);
    var _i = ({ timestamp: e, purposes: t, confirmed: o }) =>
        d({
          purposes: d(zr(L(vt(t), ([n, a]) => [n, !!a]))),
          timestamp: tt(new Date(e ? he(`${e || 0}`) : Ct())),
          confirmed: !!o,
        }),
      kt = class extends ge {
        constructor(t) {
          super();
          Y(this, 'findGroupByHost', (t) => {
            for (let o of _o(this)) if (se(o.hosts, t)) return o;
            return null;
          });
          Y(this, 'findGroupById', (t) => {
            for (let o of _o(this)) if (o.id === t) return o;
            return null;
          });
          Y(this, 'setConsent', (t) => {
            let o = vt(t);
            g(o, ([n, [a]]) => {
              let p = this.findGroupById(n);
              p && typeof a == 'object' && (p.consent = a);
            });
          });
          Y(this, 'serializeConsent', (t) => {
            let o = d();
            return (
              g(this, ({ id: n, consent: a }) => {
                a && (o[n] = [t ? a : _i(a)]);
              }),
              o
            );
          });
          for (let [o, n] of vt(t || d())) G(this, new wt(o, n));
        }
        get hosts() {
          let t = new C();
          return (
            g(this, (o) => {
              g(o.hosts, (n) => {
                J(t, n);
              });
            }),
            xe(t)
          );
        }
      };
    we(kt);
    X.tamperResist !== 'off' && Vn();
    var je = 'ConsentManager:Sync',
      ts = 'ExtractIdentifiers:Simple',
      os = 'ExtractIdentifiers:RCE';
    var rs = '/.well-known/xdi';
    var {
        privacyPolicy: Li,
        firstParty: Ri = '',
        xdiAllowed: Mi = Li || '',
      } = X,
      { syncGroups: Ht, xdiCommonEndpoint: ns = rs } = X,
      De = L(ko(Ri), (e) => Lt(e, 'origin', 'hostname')),
      k = Ht ? new kt(ue(Ht)) : null,
      st = L(ko(Mi), (e) => Lt(e, 'hostname').hostname);
    var h = es('Transcend XDI', nt);
    var Ue = (e, t, o) => {
      var a, p;
      let n = !1;
      if (e) {
        let l = u.transcend,
          { readyQueue: m = [] } = t;
        if (typeof allowedHosts < 'u' && oe(allowedHosts)) {
          let { hostname: i, port: c } = Z;
          if (!se(allowedHosts, i, c))
            throw new fe(`This build of Transcend XDI cannot run on ${ee}`);
        }
        m && A && h.log('transcend.xdi.ready() queue = [', m, ']'),
          l ? (l.xdi = t) : (u.transcend = d(H(x({}, l), { xdi: t }))),
          o && (t.host = (...i) => ((n = !0), V(o, t, i))),
          g(m, (i) => {
            try {
              i(t);
            } catch (c) {
              Pt(c);
            }
          }),
          delete t.host,
          Ie(m);
      }
      o &&
        u !== gt &&
        (st.length ||
          De.length ||
          ((p = (a = k) == null ? void 0 : a.hosts) == null
            ? void 0
            : p.length)) &&
        !n &&
        o(),
        te && Dt(te);
    };
    var ss = !1,
      { xdiConnectTimeout: Pi = 3e4 } = X,
      Oi = 0,
      at = (e, t = +Pi) => {
        if (typeof e != 'string') throw new fe('XDI endpoint unspecified');
        let o = `${Oi++}`,
          n = re(e, 'href', 'origin', 'hash'),
          { origin: a, href: p } = n;
        return (
          A && h.log(`Connecting to endpoint: ${p}`),
          new $((l, m) => {
            let i = 0,
              c = Un('iframe'),
              y =
                t &&
                r(
                  Oe,
                  u,
                  () => {
                    m(new fe(`XDI connection to ${p} timed out.`));
                  },
                  t
                ),
              f = ({ ports: [S], origin: F, data: D }) => {
                if (!D) return;
                let {
                  id: P,
                  ready: j,
                  'transcend-xdi': ae,
                  commands: Ce = new C(),
                } = D;
                if (!(+ae >= 1 && j) || o !== P || !S) return;
                if (F !== a) {
                  de && h.warn(`Connection attempt from ${F} refused`);
                  return;
                }
                r(Ze, u, 'message', f), y && r(Te, u, y);
                let O = new _(),
                  E = ({ data: z }) => {
                    if (!z) return;
                    let { id: Le, error: Ve, results: it } = z;
                    if (Xe(O, Le)) {
                      let [ct, Vt] = Ge(O, Le);
                      Ve ? Vt(new fe(Ve)) : ct(it);
                    }
                  };
                r(ve, S, 'message', E), r(Et, S);
                let ie = (z) =>
                  new $((...Le) => {
                    ot(O, z, Le);
                  });
                l({
                  commands: Ce,
                  run: (z, Le, Ve) => {
                    let it = i++,
                      ct =
                        Be(Ve) &&
                        r(
                          Oe,
                          u,
                          () => {
                            m(new fe(`Request sent to ${F} timed out.`));
                          },
                          Ve
                        ),
                      Vt = r($r, ie(it), (hs) => (ct && r(Te, u, ct), hs));
                    return r(ht, S, { id: it, command: z, options: Le }), Vt;
                  },
                  close: () => {
                    r(Ze, S, 'message', E), r(Je, S), Dt(c);
                  },
                });
              };
            r(ve, u, 'message', f),
              (c.style.display = 'none'),
              (c.width = c.height = '0');
            let T = new We();
            'ancestorOrigins' in Z ||
              r(et, T, 'xdi-client-origin', a, r(ze, u, ee)),
              r(et, T, 'xdi-channel-id', o),
              jn(n, T),
              r(Dn.set, c, n.href);
            let b = r(bn, M);
            r(an, b, c);
          })
        );
      },
      as,
      is;
    if (ss) {
      let e = H(
        x(
          { readyQueue: [] },
          (is = (as = u) == null ? void 0 : as.transcend) == null
            ? void 0
            : is.xdi
        ),
        {
          ready(t) {
            t(e);
          },
          connect: at,
        }
      );
      Ue(ss, e);
    }
    var Ai = ['tcm3PConsent', 'tcmConsent', 'tcmQuarantine'],
      cs,
      Xt = d({ requests: [], cookies: [] }),
      ps = !1,
      { xdiFpsSync: wi, xdiFpsSyncTimeout: ki = 1e4 } = X,
      Hi = wi !== 'off',
      Gt = new _(),
      Gi = 'chrome' in u && !('brave' in pe.prototype),
      Ft = () => {
        let { tcmConsent: e, tcmQuarantine: t, tcm3PConsent: o = Ht } = K;
        if (o && k) {
          let n = ue(o);
          n && k.setConsent(n);
        }
        if (e) {
          let n = ue(e);
          n && (cs = n);
        }
        if (t) {
          let n = ue(t, () => []);
          n && (Xt = d(oe(n) ? { requests: n, cookies: [] } : n));
        }
      },
      Xi = () => {
        r(ve, u, 'storage', ({ key: e, storageArea: t }) => {
          t === K && ne(Ai, e) && Ft();
        }),
          Ft(),
          (ps = !0);
      },
      ls = async (
        { sync: e, reset: t, consent: o, quarantine: n, deep: a = !0 },
        p
      ) => {
        ps || Xi();
        let l = d(),
          m = se(
            L(De, ({ hostname: i }) => i),
            p
          );
        if (ne(e, 'consent')) {
          let i = !!o,
            c = k && k.findGroupByHost(p),
            y = t ? void 0 : (m && cs) || (c == null ? void 0 : c.consent),
            f = (y && he(y.timestamp)) || 0,
            T = (o && o.timestamp && he(o.timestamp)) || 0,
            S =
              t || !f || T > f
                ? x(
                    x({}, y == null ? void 0 : y.purposes),
                    o == null ? void 0 : o.purposes
                  )
                : x(
                    x({}, o == null ? void 0 : o.purposes),
                    y == null ? void 0 : y.purposes
                  ),
            F = !!(o == null ? void 0 : o.confirmed),
            D = tt(),
            P = { purposes: S, confirmed: F, timestamp: D };
          if (t) delete K.tcmConsent, delete K.tcm3PConsent;
          else if (i) {
            if ((m && (K.tcm1PConsent = Ye(P)), k && c)) {
              c.consent = P;
              let j = k.serializeConsent(m);
              Ne(j).length && (K.tcm3PConsent = Ye(k.serializeConsent(m)));
            }
            l.consent = P;
          } else l.consent = y;
        }
        if (ne(e, 'quarantine')) {
          if (!m)
            A &&
              h.log('Quarantine sync is only allowed on first-party domains');
          else if (n) {
            let i = !1,
              { requests: c, cookies: y } = Xt;
            if (t) Ie(c), Ie(y), delete K.tcmQuarantine;
            else if (oe(n)) wo(c, n).length && (i = !0);
            else {
              let { requests: f, cookies: T } = n,
                b = oe(f) && wo(c, f),
                S = oe(T) && Zn(y, T);
              b && b.length && ((i = !0), G(c, ...b)),
                S && S.length && ((i = !0), G(y, ...S));
            }
            i && (K.tcmQuarantine = Ye(Xt));
          }
          l.quarantine = Xt;
        }
        if (Hi && a && m && Gi) {
          let i = await Fi(De, d(H(x({}, l), { sync: e, reset: t })));
          return Ft(), i;
        }
        return Ft(), l;
      },
      Fi = async (e, t, o = +ki) => {
        let n = Q(
            await mo(
              L(
                Q(e, ({ origin: i }) => i !== ee),
                ({ origin: i }) => {
                  let c = `${i}${ns}`;
                  if (Xe(Gt, c)) return Ge(Gt, c);
                  let y = r(qr, at(c, o), (f) => {
                    var T;
                    de && h.warn(`Unable to connect to sync endpoint: ${c}`),
                      kn(Gt, c),
                      (T = f == null ? void 0 : f.close) == null || T.call(f);
                  });
                  return ot(Gt, c, y), y;
                }
              )
            ),
            (i) => i
          ),
          a = Q(
            await mo(L(n, (i) => i.run(je, H(x({}, t), { deep: !1 })))),
            (i) => i && !r(Qe, i, 'error')
          ),
          p = null,
          l = null;
        g(a, (i, c) => {
          var f;
          let y =
            (f = i == null ? void 0 : i.consent) == null ? void 0 : f.timestamp;
          if (y) {
            let T = he(y);
            (l === null || T > l) && ((p = c), (l = T));
          }
        });
        let m = p !== null ? d(x(x({}, t), a[p])) : t;
        return (
          g(n, (i) => {
            i.run(je, d(H(x({}, m), { deep: !1 })));
          }),
          A &&
            h.log('Cross-domain sync complete', { request: t, consensus: m }),
          m
        );
      };
    var ms = !1,
      ji = ['self', 'document', 'sessionStorage', 'localStorage'],
      Go = d({
        [je]: ls,
        [ts]: ({ target: e = 'self', property: t }) => {
          if (!ne(ji, e)) throw `Unsupported extraction target: ${e}`;
          return u[e][t];
        },
        [os]: ({ exec: e }) => gr(e),
      }),
      Ui = Ee(Ne(Go)),
      ds,
      Ts = ((ds = k) == null ? void 0 : ds.hosts) || [],
      {
        xdiCommands: Vi = '',
        xdiConnectTimeout: Ki = 3e4,
        xdiRequireHttps: Wi,
      } = X,
      us = Wi !== 'off',
      jt = [...st, ...L(De, ({ hostname: e }) => e), ...Ts];
    A &&
      jt.length &&
      (h.log('Enabled for these hosts:', ke(xe(new C(jt)), ', ')),
      Ts.length &&
        h.log(
          `Sync groups:
`,
          ke(
            L(
              k,
              ({ id: e, hosts: t }) =>
                `	${e ? `[Consent Manager ID: ${e}]: ` : ''}${ke(
                  t,
                  '\u2009\u2194\u2009'
                )}`
            ),
            `
`
          )
        ));
    var xs = Ee(Q(Fe(Vi), (e) => N(Ui, e))),
      zi = Ee([je]),
      Xo = d();
    g(xs, (e) => {
      r(Qe, Go, e)
        ? (Xo[e] = Go[e])
        : de && h.warn('Command not recognized:', e);
    });
    var Ut = Po(Xn()),
      gs,
      [W] = Z.ancestorOrigins || [
        (((gs = M) == null ? void 0 : gs.referrer) &&
          re(M.referrer, 'origin').origin) ||
          (Ut && r(Io, Ut, 'xdi-client-origin')),
      ],
      $i = (Ut && r(Io, Ut, 'xdi-channel-id')) || void 0,
      Fo = (e = +Ki) => {
        if ((A && h.log('Initializing Transcend XDI host'), !jt.length)) {
          Ao && h.error('No allowed clients');
          return;
        }
        if (!W || Nn(W) === '*') {
          Ao && h.error('Invalid client origin');
          return;
        }
        let { protocol: t, hostname: o } = re(W, 'protocol', 'hostname');
        if (
          t !== 'https:' &&
          (de &&
            h.warn(
              `Insecure connection from ${W} ${
                us
                  ? 'rejected'
                  : 'allowed (using xdi-require-https="off" option)'
              }`
            ),
          us)
        )
          return;
        if (!se(jt, o)) {
          de && h.warn(`Connection from ${W} rejected`);
          return;
        }
        let n = null,
          a = new C(),
          p = se(st, o) ? xs : zi,
          { port1: l, port2: m } = new mr(),
          i = async ({ data: y }) => {
            n !== null && (r(Te, u, n), (n = null)),
              N(a, W) ||
                (J(a, W),
                A && h.log(`Connection established between ${ee} and ${W}`));
            let { id: f, command: T, options: b } = y,
              S = d({ id: f });
            if (N(p, T) && r(Qe, Xo, T)) {
              let F = Xo[T];
              try {
                S.results = !!F && (await F(b, o));
              } catch (D) {
                S.error = `${D}`;
              }
            } else S.error = `unsupported command: ${T}`;
            r(ht, l, S);
          };
        r(ve, l, 'message', i),
          r(Et, l),
          r(
            ur,
            gt,
            d({ 'transcend-xdi': 1, id: $i, ready: !0, commands: p }),
            W,
            [m]
          );
        let c = () => {
          r(Ze, l, 'message', i),
            r(Je, l),
            r(Je, m),
            r(Te, u, n),
            (n = null),
            A && h.warn(`Connection with ${W} timed out`);
        };
        Be(e) && (n = r(Oe, u, c, e)),
          A && h.log(`Establishing connection between ${ee} and ${W}`);
      },
      ys,
      fs;
    if (ms) {
      let e = H(
        x(
          { readyQueue: [] },
          (fs = (ys = u) == null ? void 0 : ys.transcend) == null
            ? void 0
            : fs.xdi
        ),
        {
          ready(t) {
            t(e);
          },
        }
      );
      Ue(ms, e, Fo);
    }
    var Is,
      Ss,
      vs = H(
        x(
          { readyQueue: [] },
          (Ss = (Is = u) == null ? void 0 : Is.transcend) == null
            ? void 0
            : Ss.xdi
        ),
        {
          ready(e) {
            e(vs);
          },
          connect: at,
        }
      );
    Ue(!0, vs, Fo);
  })();
})();
