// Copyright 2023 Transcend Inc. All Rights Reserved.
// Learn more at https://transcend.io/consent-manager

self.transcend = Object.assign(
  { country: 'IN', countryRegion: 'DL' },
  self.transcend
);
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
  },
  self.transcend
);
self.airgap = Object.assign(
  {
    readyQueue: [],
    ready(c) {
      this.readyQueue.push(c);
    },
    loadOptions: {
      csp: 'off',
      log: 'warn error',
      telemetry: 'on',
      syncEndpoint:
        'https://sync.transcend.io/consent-manager/a36a42ad-3a71-444f-9e8a-b19950129dc6',
      privacyPolicy:
        'https://www.notion.so/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091',
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
    purposes: {
      useDefault: false,
      types: {
        Analytics: {
          name: 'Analytics',
          description:
            'Help us learn how our site is used and how it performs.',
          defaultConsent: 'Auto',
          showInConsentManager: true,
          configurable: true,
          essential: false,
          trackingType: 'Analytics',
          optOutSignals: ['DNT'],
        },
        Functional: {
          name: 'Functional',
          description: 'Personalization, autofilled forms, etc.',
          defaultConsent: 'Auto',
          showInConsentManager: true,
          configurable: true,
          essential: false,
          trackingType: 'Functional',
          optOutSignals: ['DNT'],
        },
        SaleOfInfo: {
          name: 'SaleOfInfo',
          description: 'Sale of personal information.',
          defaultConsent: 'Auto',
          showInConsentManager: false,
          configurable: true,
          essential: false,
          trackingType: 'SaleOfInfo',
          optOutSignals: ['DNT', 'GPC'],
        },
        Advertising: {
          name: 'Advertising',
          description: 'Helps us and others serve ads relevant to you.',
          defaultConsent: 'Auto',
          showInConsentManager: true,
          configurable: true,
          essential: false,
          trackingType: 'Advertising',
          optOutSignals: ['DNT'],
        },
      },
    },
    regimePurposeScopes: [
      [['NEVADA_SB220'], ['SaleOfInfo']],
      [['CPRA'], ['SaleOfInfo']],
      [['CDPA'], ['SaleOfInfo']],
    ],
    macroregions: [
      [
        'EU',
        'BE EL GR LT PT BG ES LU RO CZ FR RE GP MQ GF YT BL MF PM WF PF NC HU SI DK FO GL HR MT SK DE IT NL AW CW SX FI AX EE CY AT SE IE LV PL AI BM IO VG KY FK GI MS PN SH TC GG JE IM',
      ],
    ],
    regionRegimesMap: [
      [
        [['EU'], ['GB']],
        ['GDPR'],
        'in',
        [
          'fr',
          'de',
          'it',
          'de-AT',
          'nl-BE',
          'fr-BE',
          'bg',
          'hr',
          'cs',
          'da',
          'fi',
          'sv',
          'el',
          'hu',
          'en-IE',
          'lt',
          'nl',
          'pl',
          'pt',
          'ro',
          'es-ES',
          'et',
          'ga',
          'lv',
          'mt',
          'sk',
          'sl',
          'sv-FI',
          'fr-LU',
          'de-LU',
        ],
        [],
      ],
      [[['BR']], ['LGPD'], 'in', ['pt-BR'], []],
      [[['US', 'NV']], ['NEVADA_SB220'], 'in', [], []],
      [[['US', 'CA']], ['CPRA'], 'in', [], []],
      [[['US', 'VA']], ['CDPA'], 'in', [], []],
      [[['US', 'CO']], ['CPA'], 'in', [], []],
    ],
    regimePurposeOptOuts: [],
    regulatedPaths: [],
    purposeMap: {
      'www.google.ms': ['Analytics', 'SaleOfInfo'],
      'api.segment.io': ['Analytics', 'SaleOfInfo'],
      'www.google.as': ['Analytics', 'SaleOfInfo'],
      'www.google.com.tj': ['Analytics', 'SaleOfInfo'],
      'www.google.co.mz': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.tg': ['Analytics', 'SaleOfInfo'],
      'www.google.co.ma': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.pe': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.lk': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.cz': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.bj': ['Analytics', 'SaleOfInfo'],
      'www.google.com.ni': ['Analytics', 'SaleOfInfo'],
      'www.google.ht': ['Analytics', 'SaleOfInfo'],
      'www.google.gl': ['Analytics', 'SaleOfInfo'],
      'www.google.tl': ['Analytics', 'SaleOfInfo'],
      'www.google.td': ['Analytics', 'SaleOfInfo'],
      '104.149.146.202': ['Analytics', 'SaleOfInfo'],
      'www.google.ki': ['Analytics', 'SaleOfInfo'],
      'www.google.la': ['Analytics', 'SaleOfInfo'],
      'www.google.tn': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.bi': ['Analytics', 'SaleOfInfo'],
      'www.google.az': ['Analytics', 'SaleOfInfo'],
      'www.google.com.tw': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'td.doubleclick.net': ['Advertising', 'SaleOfInfo'],
      'www.google.co.ck': ['Analytics', 'SaleOfInfo'],
      'www.google.fr': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.ae': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.am': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.cm': ['Analytics', 'SaleOfInfo'],
      'www.google.mg': ['Analytics', 'SaleOfInfo'],
      'www.google.com.gt': ['Analytics', 'SaleOfInfo'],
      'www.google.com.bn': ['Analytics', 'SaleOfInfo'],
      'www.google.ee': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.gm': ['Analytics', 'SaleOfInfo'],
      'www.google.com.gi': ['Analytics', 'SaleOfInfo'],
      'www.google.com.sl': ['Analytics', 'SaleOfInfo'],
      'www.google.ne': ['Analytics', 'SaleOfInfo'],
      'www.google.gg': ['Analytics', 'SaleOfInfo'],
      'www.google.bg': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.kw': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'tpc.googlesyndication.com': ['Advertising', 'SaleOfInfo'],
      '104.149.130.134': ['Analytics', 'SaleOfInfo'],
      'www.google.com.ai': ['Analytics', 'SaleOfInfo'],
      'www.google.mw': ['Analytics', 'SaleOfInfo'],
      'www.google.bf': ['Analytics', 'SaleOfInfo'],
      'www.google.co.jp': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'apis.google.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.ga': ['Analytics', 'SaleOfInfo'],
      'www.google.co.ls': ['Analytics', 'SaleOfInfo'],
      'plx-pa-googleapis.corp.google.com': [
        'Advertising',
        'Analytics',
        'SaleOfInfo',
      ],
      'www.google.fm': ['Analytics', 'SaleOfInfo'],
      'www.google.com.sb': ['Analytics', 'SaleOfInfo'],
      'www.google.jo': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.co.ao': ['Analytics', 'SaleOfInfo'],
      'www.google.com.ag': ['Analytics', 'SaleOfInfo'],
      'www.google.com.vc': ['Analytics', 'SaleOfInfo'],
      'www.google.iq': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.je': ['Analytics', 'SaleOfInfo'],
      'www.google.com.bd': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.no': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.im': ['Analytics', 'SaleOfInfo'],
      'www.google.bs': ['Analytics', 'SaleOfInfo'],
      'www.google.ml': ['Analytics', 'SaleOfInfo'],
      'www.google.com.bz': ['Analytics', 'SaleOfInfo'],
      'www.google.sm': ['Analytics', 'SaleOfInfo'],
      'www.google.com.fj': ['Analytics', 'SaleOfInfo'],
      'www.google.bt': ['Analytics', 'SaleOfInfo'],
      'www.google.al': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.li': ['Analytics', 'SaleOfInfo'],
      'www.google.com.jm': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.vg': ['Analytics', 'SaleOfInfo'],
      'www.google.dm': ['Analytics', 'SaleOfInfo'],
      'region1.google-analytics.com': ['Analytics', 'SaleOfInfo'],
      'www.google.com.sg': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.co.za': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.co.il': ['Advertising', 'Analytics'],
      'www.google.com.ng': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'infragrid.v.network': ['Analytics', 'SaleOfInfo'],
      'www.google.com.pg': ['Analytics', 'SaleOfInfo'],
      'www.google.dj': ['Analytics', 'SaleOfInfo'],
      'www.google.lv': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.cd': ['Analytics', 'SaleOfInfo'],
      'www.google.com.my': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.lb': ['Analytics', 'SaleOfInfo'],
      'www.google.lt': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.vu': ['Analytics', 'SaleOfInfo'],
      'fonts.googleapis.com': ['Essential'],
      'www.google.mv': ['Analytics', 'SaleOfInfo'],
      'www.google.co.id': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.ie': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.uy': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.sr': ['Analytics', 'SaleOfInfo'],
      'www.google.ws': ['Analytics', 'SaleOfInfo'],
      'www.google.hn': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.ps': ['Analytics', 'SaleOfInfo'],
      'www.google.mk': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google-analytics.com': ['Analytics', 'SaleOfInfo'],
      'www.google.com.gh': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.na': ['Analytics', 'SaleOfInfo'],
      'www.google.hr': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.si': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.tt': ['Analytics', 'SaleOfInfo'],
      'www.google.it': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'asksebby.podia.com': ['Analytics', 'SaleOfInfo'],
      'api-v2.mutinyhq.io': ['Analytics', 'SaleOfInfo'],
      'www.google.so': ['SaleOfInfo'],
      'www.google.co.zm': ['Analytics', 'SaleOfInfo'],
      'www.google.com.af': ['Analytics', 'SaleOfInfo'],
      'www.google.com.co': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.eg': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.pr': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.mx': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.ua': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.co.uz': ['Analytics', 'SaleOfInfo'],
      'www.google.dk': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.co.nz': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.pa': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.rw': ['Analytics', 'SaleOfInfo'],
      'www.google.com.kh': ['Analytics', 'SaleOfInfo'],
      'www.google.is': ['Analytics', 'SaleOfInfo'],
      'www.google.co.zw': ['Analytics', 'SaleOfInfo'],
      'www.google.com.et': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.lu': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'pagead2.googlesyndication.com': ['Advertising', 'SaleOfInfo'],
      'www.google.ad': ['Analytics', 'SaleOfInfo'],
      'www.google.fi': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.np': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.kg': ['Analytics', 'SaleOfInfo'],
      'www.google.sn': ['Advertising', 'SaleOfInfo'],
      'www.google.es': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.kz': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.se': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.ch': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.by': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.be': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.rs': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.pt': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.sa': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.ec': ['Advertising', 'Analytics'],
      'www.google.ge': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.dz': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.cn': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.co.ve': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.do': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.ro': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.cy': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'ssl.google-analytics.com': ['Analytics', 'SaleOfInfo'],
      'www.google.co.ke': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.at': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.bo': ['Analytics', 'SaleOfInfo'],
      'www.google.co.tz': ['Analytics', 'SaleOfInfo'],
      'www.googleadservices.com': ['Advertising', 'SaleOfInfo'],
      'www.google.mu': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.cv': ['Analytics', 'SaleOfInfo'],
      'www.google.co.ug': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.cu': ['Analytics', 'SaleOfInfo'],
      'www.google.sc': ['Analytics', 'SaleOfInfo'],
      'notion.notion.site': ['Essential'],
      'www.youtube.com': ['Essential'],
      'www.google.com.br': ['Analytics', 'SaleOfInfo'],
      'www.google.co.in': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.hu': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.py': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.gr': ['Advertising', 'Analytics', 'SaleOfInfo'],
      localhost: ['Essential'],
      'www.google.com.ly': ['Analytics', 'SaleOfInfo'],
      'www.google.co.bw': ['Analytics', 'SaleOfInfo'],
      'www.google.cg': ['Analytics', 'SaleOfInfo'],
      'www.google.com.om': ['Analytics', 'SaleOfInfo'],
      'www.google.com.ph': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.au': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.co.th': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.vn': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.pk': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.nl': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.pl': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.me': ['Analytics', 'SaleOfInfo'],
      'www.google.com.sv': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.cl': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'ad.doubleclick.net': ['Advertising', 'SaleOfInfo'],
      'www.google.co.uk': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.ca': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.ar': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.hk': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'googletagmanager.com': ['Analytics', 'SaleOfInfo'],
      'www.google.com.mm': ['Analytics', 'SaleOfInfo'],
      'www.google.sk': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.bh': ['Analytics', 'SaleOfInfo'],
      'www.google.ci': ['Analytics', 'SaleOfInfo'],
      'www.google.ba': ['Analytics', 'SaleOfInfo'],
      'www.google.md': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'googleads.g.doubleclick.net': ['Advertising', 'SaleOfInfo'],
      'www.google.ru': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'cdn.contentful.com': ['Essential'],
      'acdn.adnxs.com': ['Advertising', 'SaleOfInfo'],
      'd2hrivdxn8ekm8.cloudfront.net': ['Essential'],
      'd330aiyvva2oww.cloudfront.net': ['Essential'],
      'stats.g.doubleclick.net': ['Advertising', 'SaleOfInfo'],
      'www.google.com.tr': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.de': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'translate.googleapis.com': ['Essential'],
      'www.google.co.kr': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'dvqigh9b7wa32.cloudfront.net': ['Essential'],
      'x.clearbitjs.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'segment.prod.bidr.io': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'munchkin.marketo.net': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.mn': ['Analytics', 'SaleOfInfo'],
      'sync.transcend.io': ['Essential'],
      'cdn.transcend.io': ['Essential'],
      'www.googletagmanager.com': ['Analytics', 'SaleOfInfo'],
      '414-xmy-838.mktoresp.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'snap.licdn.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.facebook.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.co.vi': ['Analytics', 'SaleOfInfo'],
      'app.clearbit.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'd1lu3pmaz2ilpx.cloudfront.net': ['Essential'],
      'adservice.google.com': ['Advertising', 'SaleOfInfo'],
      'exp.notion.so': ['Essential'],
      'images.ctfassets.net': ['Essential'],
      'analytics.pgncs.notion.so': ['Analytics', 'Functional'],
      'widget.intercom.io': ['Functional'],
      'http-inputs-notion.splunkcloud.com': ['Essential'],
      'accounts.google.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'analytics.google.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'user-data.mutinycdn.com': ['Analytics'],
      'px.ads.linkedin.com': ['Advertising', 'SaleOfInfo'],
      'ib.adnxs.com': ['Advertising', 'SaleOfInfo'],
      '11762090.fls.doubleclick.net': ['Advertising', 'SaleOfInfo'],
      'metadata-static-files.sfo2.cdn.digitaloceanspaces.com': [
        'Analytics',
        'SaleOfInfo',
      ],
      'cdn.linkedin.oribi.io': ['Analytics', 'SaleOfInfo'],
      'connect.facebook.net': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.gy': ['Analytics', 'SaleOfInfo'],
      '-': ['Analytics', 'SaleOfInfo'],
      'www.google.co.cr': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.st': ['Analytics', 'SaleOfInfo'],
      'google.com': ['Advertising', 'Analytics', 'SaleOfInfo'],
      'www.google.com.qa': ['Analytics', 'SaleOfInfo'],
      'www.google.com.mt': ['Analytics', 'SaleOfInfo'],
    },
    cookies: [
      { cookie: 'ab._gd', purposes: ['Advertising', 'SaleOfInfo'] },
      {
        cookie: '^ab\\.storage\\.deviceId\\..*',
        purposes: ['Advertising', 'SaleOfInfo'],
        regex: true,
      },
      {
        cookie: '^ab\\.storage\\.sessionId\\..*',
        purposes: ['Advertising', 'SaleOfInfo'],
        regex: true,
      },
      {
        cookie: '^ab\\.storage\\.userId\\..*',
        purposes: ['Advertising', 'SaleOfInfo'],
        regex: true,
      },
      {
        cookie: '^ajs_anonymous_id.*',
        purposes: ['Analytics', 'SaleOfInfo'],
        regex: true,
      },
      { cookie: 'ajs_group_id', purposes: ['Analytics', 'SaleOfInfo'] },
      { cookie: '^amp_.*', purposes: ['Analytics', 'SaleOfInfo'], regex: true },
      {
        cookie: '^amplitude_.*',
        purposes: ['Analytics', 'SaleOfInfo'],
        regex: true,
      },
      {
        cookie: '^amplitude_id.*',
        purposes: ['Analytics', 'SaleOfInfo'],
        regex: true,
      },
      { cookie: 'cb_user_id', purposes: ['Advertising', 'SaleOfInfo'] },
      { cookie: '__cf_bm', purposes: ['Essential'] },
      { cookie: 'csrf', purposes: ['Essential'] },
      {
        cookie: '^_dc_gtm_UA-.*',
        purposes: ['Advertising', 'SaleOfInfo'],
        regex: true,
      },
      { cookie: 'eap_csrf', purposes: ['Essential'] },
      {
        cookie: '^_ga.*',
        purposes: ['Advertising', 'SaleOfInfo'],
        regex: true,
      },
      { cookie: '_ga', purposes: ['Advertising', 'SaleOfInfo'] },
      {
        cookie: '^_gac_.*',
        purposes: ['Advertising', 'SaleOfInfo'],
        regex: true,
      },
      {
        cookie: '^_gcl.*',
        purposes: ['Advertising', 'SaleOfInfo'],
        regex: true,
      },
      {
        cookie: '^_gd.*',
        purposes: ['Advertising', 'SaleOfInfo'],
        regex: true,
      },
      { cookie: '_gid', purposes: ['Advertising', 'SaleOfInfo'] },
      { cookie: 'googtrans', purposes: ['Essential'] },
      { cookie: '^intercom-id-.*', purposes: ['Functional'], regex: true },
      { cookie: '^intercom-session-.*', purposes: ['Functional'], regex: true },
      { cookie: '_mkto_trk', purposes: ['Advertising', 'SaleOfInfo'] },
      {
        cookie: 'mutiny.user.session_number',
        purposes: ['Analytics', 'SaleOfInfo'],
      },
      { cookie: 'NEXT_LOCALE', purposes: ['Essential'] },
      { cookie: 'notion_check_cookie_consent', purposes: ['Essential'] },
      { cookie: 'notion_experiment_device_id', purposes: ['Essential'] },
      { cookie: 'notion_locale', purposes: ['Essential'] },
      { cookie: 'notion_user_id', purposes: ['Essential'] },
      { cookie: 'tatari-cookie-test', purposes: ['Advertising', 'SaleOfInfo'] },
      {
        cookie: 'tatari-session-cookie',
        purposes: ['Advertising', 'SaleOfInfo'],
      },
      { cookie: '__tld__', purposes: ['Advertising', 'SaleOfInfo'] },
      { cookie: '__utmz', purposes: ['Advertising', 'SaleOfInfo'] },
    ],
    ui: '/cm/a36a42ad-3a71-444f-9e8a-b19950129dc6/ui.js',
    xdi: '/cm/a36a42ad-3a71-444f-9e8a-b19950129dc6/xdi.js',
    metadata: '/cm/a36a42ad-3a71-444f-9e8a-b19950129dc6/metadata.json',
    id: 'a36a42ad-3a71-444f-9e8a-b19950129dc6',
  },
  self.airgap
);
(() => {
  const allowedHosts = ['notion.so', 'notion.com', 'notion.site', 'localhost'];
  const telemetryEndpoint = 'https://telemetry.transcend.io/collect';
  (() => {
    'use strict';
    var PE = Object.defineProperty,
      vE = Object.defineProperties;
    var RE = Object.getOwnPropertyDescriptors;
    var uu = Object.getOwnPropertySymbols;
    var IE = Object.prototype.hasOwnProperty,
      CE = Object.prototype.propertyIsEnumerable;
    var pc = (e, t, o) =>
        t in e
          ? PE(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (e[t] = o),
      b = (e, t) => {
        for (var o in t || (t = {})) IE.call(t, o) && pc(e, o, t[o]);
        if (uu) for (var o of uu(t)) CE.call(t, o) && pc(e, o, t[o]);
        return e;
      },
      Re = (e, t) => vE(e, RE(t));
    var k = (e, t, o) => (pc(e, typeof t != 'symbol' ? t + '' : t, o), o),
      mu = (e, t, o) => {
        if (!t.has(e)) throw TypeError('Cannot ' + o);
      };
    var V = (e, t, o) => (
        mu(e, t, 'read from private field'), o ? o.call(e) : t.get(e)
      ),
      Ee = (e, t, o) => {
        if (t.has(e))
          throw TypeError('Cannot add the same private member more than once');
        t instanceof WeakSet ? t.add(e) : t.set(e, o);
      },
      pe = (e, t, o, r) => (
        mu(e, t, 'write to private field'), r ? r.call(e, o) : t.set(e, o), o
      );
    var Lr = 'http://www.w3.org/1999/xhtml',
      Ys = ':~:';
    var R = self,
      { Function: mc } = R,
      { call: Zs, apply: bE, bind: ME } = mc.prototype,
      n = Zs.bind(Zs),
      H = Zs.bind(bE),
      ti = Zs.bind(ME),
      {
        Symbol: _o,
        parent: oi,
        document: J,
        location: Ao,
        localStorage: Pe,
        sessionStorage: wo,
        navigator: Tt,
        String: dc,
        XMLHttpRequest: Nr,
        fetch: Qn,
        Request: fc,
        WebSocket: Cu,
        WebTransport: ZS,
        EventSource: gc,
        Worker: bu,
        SharedWorker: yc,
        ServiceWorkerContainer: ri,
        Array: Eo,
        Blob: Mu,
        Boolean: eP,
        Object: Ie,
        Error: Le,
        ReferenceError: Ac,
        TypeError: xt,
        Set: U,
        WeakSet: er,
        Map: Q,
        WeakMap: kr,
        Promise: ue,
        URL: oo,
        URLSearchParams: ut,
        Event: ro,
        CustomEvent: xu,
        UIEvent: ni,
        SubmitEvent: Ou,
        CookieChangeEvent: jn,
        CookieStore: Xn,
        cookieStore: tr,
        SecurityPolicyViolationEvent: si,
        Date: ht,
        FormData: Yn,
        ReadableStream: Lu,
        Headers: xE,
        console: Du,
        Math: ko,
        JSON: Ec,
        RegExp: no,
        EventTarget: hc,
        MessagePort: OE,
        MessageChannel: tP,
        postMessage: oP,
        history: Tc,
        History: LE,
        AbortController: Nu,
        setTimeout: Ot,
        clearTimeout: _r,
        setInterval: ii,
        clearInterval: rP,
        requestIdleCallback: ho = function (
          e,
          { timeout: t = 0 } = { timeout: 0 }
        ) {
          return n(Ot, this, e, t);
        },
        cancelIdleCallback: ku = function (e) {
          n(_r, this, e);
        },
        eval: nP,
        open: _u,
        close: sP,
        TextEncoder: Dr,
        performance: rt,
        encodeURIComponent: wr,
        unescape: wu,
        Intl: Sc,
        isNaN: DE,
        confirm: Uu,
        Node: St,
        NodeList: Pc,
        Attr: ai,
        NamedNodeMap: vc,
        XMLSerializer: Rc,
        DOMException: Gu,
        MutationObserver: Ic,
        Number: NE,
        Performance: du,
        PerformanceObserver: Kn,
        PerformanceObserverEntryList: fu,
        PerformanceEntry: iP,
        PerformanceResourceTiming: aP,
        Element: Lt,
        Document: Je,
        HTMLDocument: Hu,
        DocumentFragment: ci,
        DocumentType: pi,
        CharacterData: li,
        HTMLElement: Ur,
        HTMLScriptElement: To,
        HTMLAnchorElement: So,
        HTMLEmbedElement: Cc,
        HTMLIFrameElement: Gr,
        HTMLFrameElement: bc,
        HTMLFormElement: Uo,
        HTMLButtonElement: ui,
        HTMLInputElement: mi,
        HTMLImageElement: Go,
        HTMLVideoElement: cP,
        HTMLLinkElement: Ho,
        HTMLAreaElement: Hr,
        HTMLSourceElement: Jn,
        HTMLPictureElement: qu,
        HTMLMediaElement: qr,
        HTMLObjectElement: Mc,
        HTMLTrackElement: Fu,
        HTMLCollection: di,
        SVGElement: xc,
        SVGScriptElement: Bu,
        SVGImageElement: Vu,
        DOMTokenList: Oc,
        Navigator: Fr,
        Navigation: Zo,
        NavigateEvent: zu,
        NavigationDestination: Wu,
        navigation: Lc,
        Proxy: fi,
        Reflect: ei,
        Range: gi,
        BroadcastChannel: to,
        ShadowRoot: $u,
        Worklet: yi,
      } = R,
      {
        iterator: qo,
        hasInstance: Dc,
        match: gu,
        matchAll: yu,
        replace: Au,
        search: Eu,
        split: hu,
        toStringTag: or,
      } = _o,
      kE = _o[Dc],
      v = (e, t) => n(kE, e, t),
      { childNodes: _E, children: wE } = J.createDocumentFragment(),
      Ai = [[], new U(), new Q(), _E, J.createElement('_').classList, wE, ''],
      [UE, Nc, GE, HE, qE, FE, BE] = Ai.map(({ [qo]: e }) => e),
      kc = (e) =>
        v(Eo, e)
          ? UE
          : v(U, e)
          ? Nc
          : v(Q, e)
          ? GE
          : v(Pc, e)
          ? FE
          : v(Oc, e)
          ? HE
          : v(di, e)
          ? qE
          : typeof e == 'string' || v(dc, e)
          ? BE
          : e[qo],
      be = Ie.defineProperty.bind(Ie),
      Br = Ie.getPrototypeOf.bind(Ie),
      VE = ei.ownKeys.bind(ei),
      [zE, WE, $E, KE, QE, jE, XE] = Ai.map((e) => e[qo]().next),
      Ku = (e) =>
        v(Eo, e)
          ? zE
          : v(U, e)
          ? WE
          : v(Q, e)
          ? $E
          : v(Pc, e)
          ? KE
          : v(Oc, e)
          ? QE
          : v(di, e)
          ? jE
          : typeof e == 'string' || v(dc, e)
          ? XE
          : n(kc(e), e).next,
      {
        includes: _c,
        every: Qu,
        some: ju,
        map: Xu,
        push: wc,
        pop: YE,
        shift: JE,
        unshift: ZE,
        join: Yu,
        slice: pP,
        splice: Ju,
        find: Zu,
        findIndex: em,
        filter: tm,
        flat: Ei,
        flatMap: om,
        reduce: Uc,
        concat: rm,
        keys: eh,
        values: nm,
        entries: th,
        slice: sm,
        indexOf: im,
      } = Eo.prototype,
      {
        add: am,
        has: cm,
        delete: pm,
        clear: lm,
        values: um,
        entries: mm,
        keys: dm,
        forEach: fm,
      } = U.prototype,
      {
        get: hi,
        set: gm,
        has: ym,
        delete: Am,
        clear: Em,
        keys: hm,
        values: Tm,
        entries: Sm,
      } = Q.prototype,
      { toString: lP } = NE.prototype,
      u = function (e, t, o) {
        let r = n(kc(e), e),
          s = Ku(e),
          i = n(s, r),
          c = 0;
        for (; !i.done; ) n(t, o, i.value, c++, e), (i = n(s, r));
      },
      Pm = ei.ownKeys.bind(ei),
      Oe = Ie.keys.bind(Ie),
      Dt = Ie.entries.bind(Ie),
      Js,
      Pu,
      Vr =
        ((Pu =
          (Js = Ie == null ? void 0 : Ie.fromEntries) == null
            ? void 0
            : Js.bind) == null
          ? void 0
          : Pu.call(Js, Ie)) ||
        ((e) => n(Uc, he(e), (t, [o, r]) => ((t[o] = r), t), y())),
      uP = Ie.assign.bind(Ie),
      Tu = Ie.create.bind(Ie),
      rr = (e) => !DE(e),
      y = (e = null, t = null) => (e ? Tu(t, Gc(e)) : Tu(t)),
      { then: zr, catch: Po } = ue.prototype,
      Ti = ue.all.bind(ue),
      mP = ue.resolve.bind(ue),
      dP = ue.reject.bind(ue),
      Fo = (e) => n(Po, e, () => {});
    var he = (e) => {
        let t = n(kc(e), e),
          o = Ku(e),
          r = [],
          s = n(o, t);
        for (; !s.done; ) n(wc, r, s.value), (s = n(o, t));
        return r;
      },
      Ke = (e) => {
        e.length = 0;
      },
      so = Ie.getOwnPropertyDescriptor.bind(Ie),
      Gc = Ie.getOwnPropertyDescriptors.bind(Ie),
      _ = (e, t) => so(e.prototype, t),
      Si = (e) => Gc(e.prototype),
      { hasOwnProperty: vm } = Ie.prototype,
      { postMessage: Rm, start: Im, close: Cm } = OE.prototype,
      vu,
      Hc =
        (vu = to == null ? void 0 : to.prototype) == null
          ? void 0
          : vu.postMessage,
      { parse: oh, stringify: rh } = Ec,
      Wr = oh.bind(Ec),
      Ve = rh.bind(Ec),
      { href: qc, hostname: Ze, origin: Bo } = Ao,
      $r = no.prototype,
      { test: bm } = $r,
      Fc = gu && $r[gu],
      fP = yu && $r[yu],
      Bc = hu && $r[hu],
      gP = Eu && $r[Eu],
      Vc = Au && $r[Au],
      Pi = _(no, 'source').get,
      {
        includes: Mm,
        split: xm,
        startsWith: Om,
        endsWith: nh,
        toLowerCase: Lm,
        toUpperCase: Dm,
        replace: Nm,
        replaceAll: yP,
        trim: km,
        match: _m,
        matchAll: AP,
        search: EP,
        indexOf: wm,
        slice: Um,
      } = dc.prototype,
      { add: Gm, has: Hm, delete: sh } = er.prototype,
      { get: qm, set: Fm, has: Bm, delete: ih } = kr.prototype,
      {
        preventDefault: vi,
        stopPropagation: Vm,
        stopImmediatePropagation: zm,
      } = ro.prototype,
      { add: Wm, remove: $m, toggle: hP, contains: Ri } = Oc.prototype,
      {
        addEventListener: ae,
        removeEventListener: Nt,
        dispatchEvent: Km,
      } = hc.prototype,
      {
        set: zt,
        entries: nr,
        toString: Kr,
        has: Ii,
        get: Qm,
        delete: jm,
      } = ut.prototype,
      { entries: Xm } = xE.prototype,
      { go: ah, replaceState: Ym } = LE.prototype,
      Qr = () => {
        n(ah, Tc, 0);
      },
      { click: Ci } = Ur.prototype,
      { submit: zc, requestSubmit: Wc } = Uo.prototype,
      {
        setAttribute: vo,
        setAttributeNS: $c,
        setAttributeNode: Jm,
        setAttributeNodeNS: Zm,
        insertAdjacentElement: ed,
        insertAdjacentHTML: Kc,
        append: Zn,
        prepend: TP,
        before: SP,
        after: PP,
        replaceWith: vP,
        remove: td,
        hasAttribute: bi,
        getAttribute: jr,
        removeAttribute: Mi,
        hasAttributeNS: RP,
        getAttributeNS: od,
        removeAttributeNS: xi,
        getElementsByTagName: IP,
      } = Lt.prototype,
      {
        appendChild: Xr,
        removeChild: rd,
        insertBefore: nd,
        replaceChild: sd,
        cloneNode: id,
        getRootNode: Qc,
        lookupNamespaceURI: ad,
      } = St.prototype,
      { forEach: cd } = Pc.prototype,
      { setNamedItem: pd, setNamedItemNS: ld } = vc.prototype,
      {
        adoptNode: Oi,
        importNode: Li,
        append: CP,
        prepend: bP,
        write: Yr = J.write,
        open: Jr = J.open,
        close: Zr = J.close,
        createElement: ud,
        createElementNS: md,
        createDocumentFragment: ch,
      } = Je.prototype,
      { append: MP, prepend: xP } = ci.prototype,
      { before: OP, after: LP, replaceWith: DP } = pi.prototype,
      { before: NP, after: kP, replaceWith: _P } = li.prototype,
      { observe: dd, disconnect: fd } = Ic.prototype,
      gd = du && du.prototype.getEntries,
      {
        observe: yd,
        disconnect: wP,
        takeRecords: UP,
      } = (Kn && Kn.prototype) || y(),
      Ad = fu && fu.prototype.getEntries,
      Ed = rt == null ? void 0 : rt.timeOrigin,
      hd = rt == null ? void 0 : rt.setResourceTimingBufferSize,
      Td = rt == null ? void 0 : rt.clearResourceTimings,
      { serializeToString: Sd } = Rc.prototype,
      { createHTMLDocument: jc, createDocument: Di } =
        DOMImplementation.prototype,
      lc = ['DocumentFragment', 'Document', 'Element'],
      uc = ['DocumentType', 'CharacterData', 'Element'],
      Pd = new Q(),
      vd = new Q(),
      Rd = new Q(),
      Id = new Q(),
      Cd = new Q(),
      bd = new Q();
    u(lc, (e) => {
      let t = R[e];
      Pd.set(e, t.prototype.querySelector),
        vd.set(e, t.prototype.querySelectorAll);
    });
    u(uc, (e) => {
      let t = R[e];
      Rd.set(e, t.prototype.remove),
        Id.set(e, t.prototype.replaceWith),
        Cd.set(e, t.prototype.before),
        bd.set(e, t.prototype.after);
    });
    var es = _(St, 'nodeType').get,
      Xc = _(St, 'childNodes').get,
      GP = _(St, 'parentNode').get,
      HP = _(St, 'parentElement').get,
      Ni = _(St, 'firstChild').get,
      {
        compareDocumentPosition: ph,
        DOCUMENT_POSITION_DISCONNECTED: lh,
        DOCUMENT_NODE: uh,
        ELEMENT_NODE: mh,
        TEXT_NODE: dh,
        DOCUMENT_FRAGMENT_NODE: fh,
        DOCUMENT_TYPE_NODE: gh,
      } = St.prototype,
      { contains: ts } = St.prototype,
      Ro = (e) => v(St, e),
      Wt = (e) => n(es, e) === mh,
      kt = (e) => n(es, e) === uh,
      Yc = (e) => n(es, e) === fh,
      Md = (e) => n(es, e) === dh,
      xd = (e) => n(es, e) === gh,
      en = _(Je, 'cookie'),
      yh = _(Je, 'implementation').get,
      Qe = _(St, 'ownerDocument').get,
      Od = _(Je, 'defaultView').get,
      Jc = _(Je, 'currentScript').get,
      Ah = _(Je, 'readyState').get,
      os = (e) => n(Ah, e),
      ki = _(Lt, 'tagName').get,
      Ld = _(Lt, 'namespaceURI').get,
      tn = n(yh, J),
      je = n(Jc, J),
      Eh = () => n(Xc, n(ch, J)),
      _i =
        (e, t) =>
        (o, ...r) => {
          let s = n(Od, n(Qe, o) || J) || R,
            i = uc.length;
          for (; i--; ) {
            let c = uc[i],
              a = s[c];
            if (v(a, o)) return H(n(hi, e, c), o, r);
          }
          return t;
        },
      Dd =
        (e, t) =>
        (o, ...r) => {
          let s = n(Od, kt(o) ? o : n(Qe, o) || J) || R,
            i = lc.length;
          for (; i--; ) {
            let c = lc[i],
              a = s[c];
            if (v(a, o)) return H(n(hi, e, c), o, r);
          }
          return t;
        },
      io = _i(Rd),
      qP = _i(Cd),
      Nd = _i(bd),
      kd = _i(Id),
      sr = Dd(Pd, null),
      wi = Dd(vd, Eh()),
      Mt = Ie.freeze.bind(Ie),
      Zc = (e, t, o = e[t]) =>
        be(e, t, { value: o, configurable: !1, writable: !1, enumerable: !1 }),
      Me = (e) => (Mt(e.prototype), Mt(e)),
      ep = (e) => (
        VE(e).forEach((o) => {
          let r = e[o];
          r && typeof r == 'object' && ep(r);
        }),
        Mt(e)
      ),
      re = Eo.isArray.bind(Eo),
      ao = ht.now.bind(ht),
      on = ht.parse.bind(ht),
      { toISOString: hh, toUTCString: Th, setMilliseconds: FP } = ht.prototype,
      Ge = (e = new ht()) => n(hh, e),
      _d = (e = new ht()) => n(Th, e),
      Ru,
      wd =
        (Ru = Dr == null ? void 0 : Dr.prototype) == null ? void 0 : Ru.encode,
      Ud = so(Br(Uint8Array.prototype), 'byteLength').get,
      rn = ko.min.bind(ko),
      Gd = ko.max.bind(ko),
      Hd = ko.random.bind(ko),
      qd = ko.floor.bind(ko),
      Fd = oo.createObjectURL.bind(oo),
      Bd = oo.revokeObjectURL.bind(oo),
      Vd = 'doNotTrack' in Fr.prototype,
      Sh = Vd && _(Fr, 'doNotTrack').get,
      zd = Vd ? () => n(_c, ['1', 'on'], n(Sh, Tt)) : null,
      tp = _(Fr, 'languages').get,
      { DateTimeFormat: op } = Sc,
      { resolvedOptions: Wd } = op.prototype,
      $d = 'globalPrivacyControl' in Fr.prototype,
      Ph = $d && _(Fr, 'globalPrivacyControl').get,
      Kd = $d ? () => n(Ph, Tt) : null,
      { userAgent: ir } = Tt,
      { sendBeacon: rs } = Fr.prototype,
      ns = Zo && Zo.prototype.navigate,
      { createContextualFragment: rp } = gi.prototype,
      Qd = _(gi, 'commonAncestorContainer').get,
      vh = _(U, 'size').get,
      mt = (e) => n(vh, e),
      Rh = _(Q, 'size').get,
      De = (e) => n(Rh, e),
      Io = (e) => {
        let t = Gc(e);
        return (o, ...r) => {
          let s = y();
          return (
            u(r, (i) => {
              let c = t[i];
              if (c) {
                let { get: a, set: p } = c;
                (a || p) &&
                  be(
                    s,
                    i,
                    b(
                      b(
                        {},
                        a && {
                          get(...l) {
                            return H(a, o, l);
                          },
                        }
                      ),
                      p && {
                        set(...l) {
                          return H(p, o, l);
                        },
                      }
                    )
                  );
              }
            }),
            s
          );
        };
      },
      ss = Io(Ao).bind(self, Ao),
      ce = Io(oo.prototype),
      et = (e, t = qc) => new oo(e, t),
      ze = (e, ...t) => ce(et(e), ...t),
      Su = Si(ro),
      Ih = y(),
      Ch = y();
    u(Oe(Su), (e) => {
      let { get: t, set: o } = Su[e];
      (Ih[e] = t), (Ch[e] = o);
    });
    var nn = Io(ro.prototype),
      { item: BP } = di.prototype,
      VP = _(di, 'length').get,
      jd = _(Ur, 'dataset').get,
      Xd = _(xc, 'dataset').get,
      Xe = _(Je, 'documentElement').get,
      is = _(Je, 'body').get,
      ar = _(Je, 'head').get,
      Iu,
      np = (Iu = _(Je, 'xmlVersion')) == null ? void 0 : Iu.get,
      Ui = _(Uo, 'action'),
      Yd = _(Uo, 'enctype'),
      Jd = _(Uo, 'method'),
      sp = (
        _(St, 'isConnected') || {
          get() {
            let e = n(Qe, this);
            return !e || !(n(ph, e, this) & lh);
          },
        }
      ).get,
      Gi = _(Lt, 'innerHTML'),
      ip = _(Lt, 'outerHTML'),
      ap = _(To, 'src'),
      sn = _(Go, 'src'),
      as = _(Go, 'currentSrc'),
      zP = _(Go, 'srcset'),
      WP = _(Jn, 'src'),
      $P = _(Jn, 'srcset'),
      cp = _(qr, 'src'),
      pp = _(qr, 'currentSrc'),
      Zd = _(Gr, 'src'),
      KP = _(Cc, 'src'),
      QP = _(bc, 'src'),
      ef = _(Gr, 'srcdoc'),
      jP = _(So, 'ping'),
      tf = _(So, 'download'),
      XP = _(Mc, 'data'),
      cs = _(So, 'href'),
      lp = _(Ho, 'href'),
      up = _(Hr, 'href'),
      mp = _(ai, 'name'),
      Hi = _(ai, 'value'),
      of = _(fc, 'url').get,
      { open: dp, send: qi, OPENED: rf } = Nr.prototype,
      nf = _(Nr, 'withCredentials'),
      sf = _(Nr, 'readyState').get,
      { entries: af } = Yn.prototype,
      Fi = ao();
    var x = (e, t) => n(_c, e, t),
      Vo = (e, t, o) => n(Qu, e, t, o),
      X = (e, t, o) => n(ju, e, t, o),
      M = (e, t, o) => n(Xu, e, t, o),
      I = (e, ...t) => H(wc, e, t);
    var Z = (e, t) => n(Yu, e, t),
      Ce = (e, t, o) => n(sm, e, t, o),
      nt = (e, t, o) => n(Ju, e, t, o),
      _t = (e, t, o) => n(Zu, e, t, o),
      co = (e, t, o) => n(em, e, t, o),
      fe = (e, t, o) => n(tm, e, t, o),
      bh = (e, t) => n(Ei, e, t),
      Mh = (e, t, o) => n(Uc, e, t, o),
      We = (e, ...t) => H(rm, e, t),
      ps = Ei ? (e) => bh(e, 1) : (e) => Mh(e, (t, o) => We(t, o), []),
      lf = Ei ? (e, t, o) => n(om, e, t, o) : (e, t, o) => ps(M(e, t, o)),
      ls = (e, t, o) => n(im, e, t, o);
    var cr = (e) => n(nm, e),
      an = (e) => n(um, e),
      Ep = (e) => n(hm, e),
      hp = (e) => n(Tm, e),
      uf = (e) => n(Sm, e),
      Ne = (e, t) => n(Mm, e, t),
      mf = Fc ? (e, t) => n(Fc, t, e) : (e, t) => n(_m, e, t),
      xe = (e, t, o) => n(xm, e, t, o),
      pr = Bc ? (e, t, o) => n(Bc, t, e, o) : xe,
      Pt = (e, t, o) => n(Om, e, t, o);
    var $e = (e) => n(Lm, e),
      po = (e) => n(Dm, e),
      He = Vc ? (e, t, o) => n(Vc, t, e, o) : (e, t, o) => n(Nm, e, t, o),
      cn = (e) => n(km, e),
      cf = (e, t, o) => n(wm, e, t, o),
      lr = (e, t, o) => n(Um, e, t, o),
      df = (e, t) => n(Gm, e, t),
      ff = (e, t) => n(Hm, e, t);
    var gf = (e, t) => n(qm, e, t),
      yf = (e, t, o) => n(Fm, e, t, o),
      Af = (e, t) => n(Bm, e, t);
    var w = (e, t) => n(am, e, t),
      qe = (e, t) => n(cm, e, t),
      Ef = (e, t) => n(pm, e, t),
      wt = (e) => n(lm, e),
      ne = (e, t) => n(hi, e, t),
      ee = (e, t, o) => n(gm, e, t, o),
      le = (e, t) => n(ym, e, t),
      Bi = (e, t) => n(Am, e, t),
      Ut = (e) => n(Em, e),
      Vi = (e, t) => n(cd, e, t),
      ge = (e, t) => n(bm, e, t),
      zo = (e) => {
        let t = new Q();
        return (
          u(e, ([o, r]) => {
            ee(t, o, r);
          }),
          t
        );
      };
    var Te = (e) => {
      let t = new U();
      return (
        u(e, (o) => {
          w(t, o);
        }),
        t
      );
    };
    var hf = (e = new Date()) => xe(Ge(e), 'T')[0],
      fp,
      pn = () => {
        var e;
        return fp != null
          ? fp
          : (fp =
              ((e = _t(n(gd, rt), ({ entryType: t }) => t === 'navigation')) ==
              null
                ? void 0
                : e.name) || qc);
      },
      Tp = (e) => {
        let t = cf(e, '#'),
          o = t !== -1 ? cf(lr(e, t), Ys) : -1;
        return o !== -1 ? t + o : -1;
      },
      zi = (e, t = Tp(e)) => (t !== -1 ? new ut(lr(e, t + Ys.length)) : !1),
      xh = /=(&|$)/g,
      Oh = (e) => He(e, xh, '$1'),
      pf = (e) => Oh(n(Kr, e)),
      Sp = (e, t) => {
        if (n(nr, t).next().done) return;
        let { hash: o } = e;
        if (o) {
          let r = Tp(o);
          if (r !== -1) {
            let s = zi(o);
            for (let [i, c] of n(nr, t)) n(zt, s, i, c);
            e.hash = `${lr(o, 0, r)}${pf(s)}`;
            return;
          }
        }
        e.hash += `${Ys}${pf(t)}`;
      },
      Tf = (e, t, o = Tc) => {
        if (!t.length) return;
        let r = Tp(e);
        if (r !== -1) {
          let s = zi(e, r);
          u(t, (c) => {
            n(jm, s, c);
          });
          let i = ze(lr(e, 0, r), 'hash', 'href');
          Sp(i, s), n(Ym, o, null, null, He(i.href, /#$/, ''));
        }
      },
      gp,
      Sf = Dr
        ? (e) => n(Ud, n(wd, gp != null ? gp : (gp = new Dr()), e))
        : (e) => n(wu, R, wr(e)).length,
      yp = (e) => `data-${He(e, /[A-Z]/g, (t) => `-${$e(t)}`)}`,
      Lh = function () {
        let e = this;
        return new fi(y(), {
          get: (t, o) => (typeof o == 'string' ? n(jr, e, yp(o)) : t[o]),
          set: (t, o, r) =>
            typeof o == 'string' ? n(vo, e, yp(o)) : ((t[o] = r), !0),
          deleteProperty: (t, o) =>
            typeof o == 'string' ? (n(Mi, e, yp(o)), !0) : delete t[o],
        });
      },
      ur = (e) => n(v(Ur, e) ? jd : v(xc, e) ? Xd : Lh, e),
      Ap,
      Wo = (e) => n(Sd, Ap != null ? Ap : (Ap = new Rc()), e),
      lo = (e) => n(md, document, Lr, e);
    var Pf = () => {
      var r, s;
      u(Ai, (i) => {
        Zc(Br(i), qo), Mt(Br(i[qo]()));
      });
      let e =
        (s = (r = R) == null ? void 0 : r.Iterator) == null
          ? void 0
          : s.prototype;
      e && Mt(e);
      let t = 'prototype',
        o = [
          [kr[t], 'has', 'get', 'set'],
          [er[t], 'has', 'add'],
          [er, Dc],
          [mc[t], 'call'],
        ];
      u(o, ([i, ...c]) => {
        u(c, (a) => {
          Zc(i, a);
        });
      });
    };
    var Dh = /(?:\s*(?:,\s*)+|\s+)/,
      st = (e) => pr(e, Dh);
    var vf,
      uo = !((vf = je) == null ? void 0 : vf.src) && typeof GM < 'u';
    var mo = (e) => {
      n(ho, R, () => {
        throw e;
      });
    };
    var it = (e, t = y, o) => {
      try {
        return Wr(e, o);
      } catch (r) {
        return mo(r), t == null ? void 0 : t();
      }
    };
    var Pp = R.airgap,
      us = Pp == null ? void 0 : Pp.loadOptions,
      Rf = je ? ur(je) : y();
    if (uo) {
      let e = { log: '*', monitoring: 'export' },
        { tcmLoadOptions: t } = Pe,
        o = b(b({}, e), t ? it(t) : y());
      us = us ? b(b({}, us), o) : o;
    }
    var q = y(us ? b(b({}, us), Rf) : Rf),
      $i = ['fatal', 'error', 'warn', 'info', 'log', 'debug', 'trace'],
      Nh = 'info',
      kh = (e) => {
        let t = -1;
        return (
          u(e, (o) => {
            let r = ls($i, o);
            r !== -1 && (t = Gd(r, t));
          }),
          t !== -1 ? Ce($i, 0, t + 1) : []
        );
      },
      _h = ['all', '*'],
      If,
      Wi = $e((If = q.log) != null ? If : ''),
      mr = Te(kh(x(_h, Wi) ? $i : !Wi || Wi === 'off' ? [] : st($e(Wi)))),
      h = mt(mr) > ls($i, Nh),
      ke = qe(mr, 'error'),
      me = qe(mr, 'warn');
    var vt,
      dr,
      Cf = class {
        constructor() {
          Ee(this, vt, new U());
          Ee(this, dr, !1);
        }
        static freeze(t) {
          return V(t, dr) || pe(t, dr, !0), t;
        }
        add(t) {
          return V(this, dr) || w(V(this, vt), t), this;
        }
        clear() {
          V(this, dr) || wt(V(this, vt));
        }
        delete(t) {
          return V(this, dr) ? !1 : Ef(V(this, vt), t);
        }
        get size() {
          return mt(V(this, vt));
        }
        has(t) {
          return qe(V(this, vt), t);
        }
        entries() {
          return n(mm, V(this, vt));
        }
        forEach(t, o) {
          n(fm, V(this, vt), t, o);
        }
        keys() {
          return n(dm, V(this, vt));
        }
        values() {
          return an(V(this, vt));
        }
        [qo]() {
          return n(Nc, V(this, vt));
        }
      };
    (vt = new WeakMap()), (dr = new WeakMap());
    Me(Cf);
    var vp = (e, t) =>
      be(e, or, { value: t, enumerable: !0, configurable: !1, writable: !1 });
    var wh = /\.+$/g,
      ms = (e) => He(e, wh, '');
    var $o = (e, t, o) => {
      let { hostname: r, port: s } = ze(
          `https://${t}${typeof o < 'u' ? `:${o}` : ''}`,
          'port',
          'hostname'
        ),
        i = xe(ms(r), '.'),
        a = i.length > 1 ? i.length - 1 : 1;
      return X(e, (p) => {
        let { port: l, hostname: m } = ze(`https://${p}`, 'port', 'hostname');
        for (let g = 0; g < a; g++)
          if (Z(Ce(i, g), '.') === m && (!l || l === s)) return !0;
        return !1;
      });
    };
    var fr = (e) =>
      v(Set, e) ? Te(e) : Ro(e) ? Wo(e) : typeof e < 'u' ? Wr(Ve(e)) : void 0;
    var Uh = /[=;]/g,
      bf = (e) => He(`${e}`, Uh, (t) => n(wr, R, t)),
      gr = ({ name: e, value: t }, o = !1) =>
        `${bf(o || e || '')}${o ? '' : `=${bf(t || '')}`}`;
    var Ki = (e, t) => {
      let o = ur(t);
      u(Pm(e), (r) => {
        let s = e[r];
        (typeof s == 'string' || typeof s == 'number') && (o[r] = s);
      });
    };
    var Qi =
        ({ getKey: e, searchDepth: t = null, condition: o }) =>
        (r, ...s) => {
          let c = !s.length ? he(r) : ps(s),
            a = new U();
          u(c, (f) => {
            w(a, e(f));
          });
          let p = [],
            l = t === null,
            m = l ? 0 : rn(c.length, t);
          u(l ? c : Ce(c, -m), (f, S) => {
            let C = e(f);
            qe(a, C) ? (!o || o(f)) && I(p, l ? S : S + m) : w(a, C);
          });
          let g = p.length;
          for (; g--; ) {
            let f = p[g];
            nt(c, f, 1);
          }
          return c;
        },
      ji = Qi({
        getKey: ({ url: e }) => e,
        condition: (e) => {
          var o;
          let t =
            (o = e == null ? void 0 : e.requestInit) == null
              ? void 0
              : o.method;
          return !t || po(t) === 'GET';
        },
      }),
      Xi = Qi({ getKey: gr });
    var Yi = (e, t, o) => {
      let r = y(),
        s = !1;
      return (
        u(e, (i) => {
          let c = o[i];
          t[i] !== c && (s || (s = !0), (r[i] = c));
        }),
        s ? r : null
      );
    };
    var ln = ({ timestamp: e }, t) => (rr(e) ? e : on(e)) < ao() - t,
      Rp = (e, t) => fe(e, (o) => ln(o, t));
    var Ji = {
        get() {
          return this.isTrusted;
        },
      },
      Of = (so(new ro(''), 'isTrusted') || Ji).get,
      Gh = (so(new ni(''), 'isTrusted') || Ji).get,
      Hh = (e) => v(ro, e) && n(Of, e),
      Lf = Ou || ro,
      Ip = (e) => v(Lf, e) && nn(e, 'type').type === 'submit' && Hh(e),
      Mf = (e) => (v(ni, e) && n(Gh, e)) || Ip(e),
      qh = (so(new si('securitypolicyviolation'), 'isTrusted') || Ji).get,
      Df = (e) => n(qh, e),
      Fh = (so(new ro('load'), 'isTrusted') || Ji).get,
      xf = (e) => {
        let t = nn(e, 'type', 'target', 'timeStamp');
        return (
          n(Fh, e) &&
          t.type === 'load' &&
          v(To, t.target) &&
          (t.timeStamp <= Fi || t.target === je)
        );
      },
      Bh = jn || ro,
      Nf = (e) => v(Bh, e) && nn(e, 'type').type === 'change' && n(Of, e),
      kf = (e) => {
        if (!e) return !1;
        if (((v(ni, e) || v(Lf, e)) && Mf(e)) || (v(ro, e) && xf(e))) return !0;
        let { interaction: t, load: o } = e;
        return (t && Mf(t)) || (o && xf(o)) || !1;
      };
    function Cp(e) {
      return Oe(e);
    }
    var bp = (e) => {
      let t = y();
      if (x(['string', 'number', 'boolean', 'undefined'], typeof e)) return t;
      let r = Cp(Br(e)),
        s = Cp(e),
        i = (c) => {
          t[c] = e[c];
        };
      return u(r, i), u(s, i), t;
    };
    var Zi = (e = '', t, o = Du) => {
      let r = (E, T, ...P) => {
          let N = [],
            j = !0;
          u(P, ({ tag: W, message: $ }) => {
            j
              ? (typeof $.content == 'string'
                  ? I(N, [
                      `%c${W.content ? `${W.content}%c ` : '%c'}${$.content}`,
                      ...W.styles,
                      '',
                      ...$.styles,
                    ])
                  : I(N, [`%c${W.content}`, ...W.styles, $.content]),
                (j = !1))
              : I(N, $.content);
          });
          let te = ps(N);
          H(E, o, te);
        },
        s =
          'font-size:larger;font-weight:bold;border-radius:0.25em;padding:0.08em 0.25em;',
        i = `${s};color:navy;background-color:#78acff;`,
        c = `${s};color:#2F4F4F;background-color:darkgray`,
        a = `${s};color:amber;background-color:#6e3e00`,
        p = `${s};color:#800000;background-color:#ff4500`,
        l = e,
        m = (E, T) => {
          let P = l;
          (l = E), T && (T(), (l = P));
        },
        g = zo([['fatal', 'error']]),
        f = (E, T, P = s) => {
          if (t && !qe(t, T)) {
            let $ = () => {};
            return ($.styled = $), $;
          }
          let N = o[le(g, E) ? ne(g, E) : E],
            j = [P],
            te = [],
            W = (...$) => {
              r(
                N,
                E,
                ...M($, (Fe) => ({
                  tag: { content: l, styles: j },
                  message: { content: Fe, styles: te },
                }))
              );
            };
          return (
            (W.styled = ($, ...Fe) => {
              let [Ue] = Fe;
              Fe.length > 0 &&
                (typeof Ue != 'string' || !Ne(Ue, '%c')) &&
                (Fe[0] = `%c${Ue}`),
                typeof $ < 'u' && $ !== null && I(te, ...(re($) ? $ : [$])),
                W(...Fe),
                Ke(te);
            }),
            W
          );
        },
        S = 'info',
        C = [
          ['group', [S, i]],
          ['groupCollapsed', [S, i]],
          ['groupEnd', [S, i]],
          ['trace', ['trace', c]],
          ['log', [S, i]],
          ['info', [S, i]],
          ['debug', ['debug', c]],
          ['warn', ['warn', a]],
          ['error', ['error', p]],
          ['fatal', ['error', p]],
        ],
        A = y({ tag: m });
      return (
        u(C, ([E, [T, P]]) => {
          A[E] = f(E, T, P);
        }),
        Mt(A)
      );
    };
    var ds = (e) =>
      e
        ? M(e ? fe(st(e), (t) => t) : [], (t) =>
            et(ge(/^[\w-]+:\/\//, t) ? t : `https://${t}`)
          )
        : [];
    var ea = class {
      constructor(t, o) {
        this.id = t;
        k(this, 'hosts');
        k(this, 'consent');
        k(this, 'toJSON', () => {
          let { id: t, consent: o, hosts: r } = this;
          return { [t]: o ? [o, ...r] : r };
        });
        let [r] = o;
        typeof r == 'object'
          ? ((this.consent = r), (this.hosts = Ce(o, 1)))
          : (this.hosts = o);
      }
    };
    Me(ea);
    var ta = ({ timestamp: e, purposes: t, confirmed: o }) =>
        y({
          purposes: y(Vr(M(Dt(t), ([r, s]) => [r, !!s]))),
          timestamp: Ge(new Date(e ? on(`${e || 0}`) : ao())),
          confirmed: !!o,
        }),
      oa = class extends Eo {
        constructor(t) {
          super();
          k(this, 'findGroupByHost', (t) => {
            for (let o of cr(this)) if ($o(o.hosts, t)) return o;
            return null;
          });
          k(this, 'findGroupById', (t) => {
            for (let o of cr(this)) if (o.id === t) return o;
            return null;
          });
          k(this, 'setConsent', (t) => {
            let o = Dt(t);
            u(o, ([r, [s]]) => {
              let i = this.findGroupById(r);
              i && typeof s == 'object' && (i.consent = s);
            });
          });
          k(this, 'serializeConsent', (t) => {
            let o = y();
            return (
              u(this, ({ id: r, consent: s }) => {
                s && (o[r] = [t ? s : ta(s)]);
              }),
              o
            );
          });
          for (let [o, r] of Dt(t || y())) I(this, new ea(o, r));
        }
        get hosts() {
          let t = new U();
          return (
            u(this, (o) => {
              u(o.hosts, (r) => {
                w(t, r);
              });
            }),
            he(t)
          );
        }
      };
    Me(oa);
    q.tamperResist !== 'off' && Pf();
    var d = Zi('airgap.js', mr);
    var _f = !1,
      Mp = () => {
        _f = !0;
      },
      yr = new U(),
      un = () => {
        var e, t;
        return (
          _f ||
            (((e = zd) == null ? void 0 : e()) && w(yr, 'DNT'),
            ((t = Kd) == null ? void 0 : t()) && w(yr, 'GPC'),
            Mp()),
          yr
        );
      };
    var xp = !1,
      wf = () => xp,
      Vh = () => {
        let e = 'tcmConfigOverrides',
          { [e]: t } = wo,
          o = pn(),
          r = zi(o),
          s = r || new ut();
        if (t) {
          let i = it(t);
          i &&
            u(Dt(i), ([c, a]) => {
              (!r || !n(Ii, r, c)) && n(zt, s, c, a);
            });
        }
        if (r || t) {
          let i = (f, S) => {
              d.warn(`Using ${f} override:`, S ? Ve(S) : '(empty)');
            },
            c = _o(),
            a = _o(),
            p = y(),
            l = y({
              'tcm-clear-overrides': () => (
                d.log('Clearing all config overrides'),
                u(Oe(p), (f) => {
                  delete p[f];
                }),
                delete wo[e],
                c
              ),
              'tcm-reset': () => (
                (xp = n(Uu, R, 'Reset tracking consent?')),
                xp && d.warn('Resetting all caches & consent'),
                a
              ),
              'tcm-report-only': (f) => {
                i('report-only mode', f), (q.reportOnly = f);
              },
              'tcm-regime': (f) => {
                i('privacy regime', f), (q.regime = f);
              },
              'tcm-signals': (f) => {
                i('privacy signals', f),
                  wt(yr),
                  f &&
                    u(st(f), (S) => {
                      w(yr, S);
                    }),
                  Mp();
              },
            }),
            m = !0,
            g = [];
          for (let [f, S] of n(nr, s)) {
            if (!n(vm, l, f)) continue;
            I(g, f);
            let C = l[f](S);
            if (C === c) {
              m = !1;
              break;
            }
            C !== a && (p[f] = S);
          }
          m && (wo[e] = Ve(p)), Tf(o, g);
        }
      };
    Vh();
    Mt(q);
    var Uf = [
        ['GDPR', 'LGPD'],
        ['Advertising', 'Analytics', 'Functional', 'SaleOfInfo'],
      ],
      Gf = [
        [
          'EU',
          'AI AT AW AX BE BG BL BM CW CY CZ DE DK EE EL ES FI FK FO FR GB GF GG GI GL GP HR HU IE IM IO IT JE KY LT LU LV MF MQ MS MT NC NL PF PL PM PN PT RE RO SE SH SI SK SX TC UK VG WF YT',
        ],
      ],
      Hf = [
        Uf,
        [['CPRA', 'CDPA', 'CPA', 'NEVADA_SB220'], ['SaleOfInfo']],
        [['Unknown'], []],
      ],
      qf = [
        [[['US', 'CA']], ['CPRA']],
        [[['EU'], ['GB']], ['GDPR'], 'in', !0, ['Europe']],
        [
          [['BR']],
          ['LGPD'],
          'in',
          !1,
          'Araguaina Bahia Belem Boa_Vista Campo_Grande Cuiaba Eirunepe Fortaleza Maceio Manaus Noronha Porto_Velho Recife Rio_Branco Santarem Sao_Paulo'.split(
            ' '
          ),
        ],
      ],
      Ff = [Uf],
      ra = 'GoogleConsentMode',
      na = 'GoogleAdsRDP',
      sa = 'FacebookLDU',
      ia = 'FacebookLDUStrict',
      aa = 'YouTubePrivacyEnhancedMode',
      ca = 'VimeoDNT';
    var pa = !1,
      la = M(
        xe(
          'about data blob mailto mediastream filesystem chrome-extension moz-extension safari-web-extension',
          ' '
        ),
        (e) => `${e}:`
      ),
      Co = (e) => `airgap.${e}(): Authorization proof is untrusted`,
      Gt = 'Essential',
      Ht = 'Unknown',
      Op = Ht,
      dt = 'request',
      Ko = 'cookie',
      Lp = 'origin',
      fs = 'font-weight:bold',
      ft = 'airgap.js',
      qt = 'on',
      ye = 'off',
      ua = ['*', 'all', qt],
      Bf = 7e4,
      Vf = 3e5;
    var zh = [ra, sa],
      Dp = [ia, na, ca, aa],
      Np = We(Dp, zh),
      zf = Ce(Np, 2);
    var mn = '7.14.5',
      $f,
      Kf,
      Qf,
      kp =
        (je &&
          ((($f = je) == null ? void 0 : $f.src) ||
            ((Qf = (Kf = je) == null ? void 0 : Kf.href) == null
              ? void 0
              : Qf.baseVal))) ||
        q.airgap;
    if (!kp) {
      let e;
      if (uo) {
        let t = GM.info.script.resources;
        e = ((r) => {
          var s;
          return (s = _t(t, ({ name: i }) => i === r)) == null ? void 0 : s.url;
        })(ft);
      }
      if (!e) throw new Le('No airgap.js script URL detected.');
      kp = e;
    }
    var dn = ze(kp, 'href', 'search', 'hostname'),
      {
        telemetry: Yf,
        reportOnly: Wh,
        monitoring: Jf,
        privacyPolicy: $h,
        xdiAllowed: Kh = $h || '',
        regulateRequests: Qh,
        regulateCookies: jh,
        regulateNavigation: Xh,
        trackerOverrides: ma,
        telemetryPartitioning: Yh,
        telemetryTrackingPurpose: Jh,
        prioritizeTelemetry: _p,
        requireAuth: Zh,
      } = q,
      {
        trackerOverridesUnconsentedPurpose: wp = 'SaleOfInfo',
        telemetrySyncPeriod: Zf = 300,
        initialTelemetrySyncPeriod: eg = 30,
        bdInteractionThreshold: tg = 600,
        autoExpire: Wf,
        firstParty: og,
        syncGroups: rg,
        quarantineSize: eT,
      } = q,
      ng = (pa && Jh) || Gt,
      gs =
        (pa && q.telemetryEndpoint) ||
        (typeof telemetryEndpoint < 'u' && telemetryEndpoint),
      ve = (!pa || Yf !== ye) && gs,
      sg = Yf === 'usage',
      ig = _p === qt,
      ag = !_p || _p === 'usage',
      tT = ['origin', 'host', 'hostname', 'port'],
      ys = [];
    gs && ve && I(ys, ze(gs, ...tT));
    var Rt = Wh === qt,
      $t = Jf === 'export',
      _e = ve || Rt || $t || Jf === qt,
      cg = !Rt && Qh !== ye,
      pg = !Rt && jh !== ye,
      lg = !Rt && Xh === qt,
      ug = +(eT || 2621e3),
      we = Wf ? +Wf * 6e4 : 0,
      Up = "airgap://test 'self' data: blob:",
      mg = q.regulateAllScripts !== ye,
      dg = () => {
        mg = !0;
      },
      fn = () => mg;
    var jf,
      Gp = st(
        Rt
          ? ye
          : (jf = q.csp) != null
          ? jf
          : 'allow-known-hosts allow-subdomains'
      ),
      gn = !x(Gp, ye),
      da = M(ds(Kh), (e) => ce(e, 'host', 'hostname', 'port')),
      fa = (e) => {
        let t = n(Jc, J) || n(is, J) || n(ar, J) || n(Ni, n(Xe, J));
        t ? Nd(t, e) : n(Xr, n(Xe, J) || J, e);
      },
      ga = Ne(ir, 'Edge/'),
      Xf,
      Hp =
        Ne(ir, 'Safari/') &&
        !Ne(ir, 'Chrome/') &&
        ((Xf = mf(ir, /Version\/(\d+)/)) == null ? void 0 : Xf[1]),
      ya = Zh === ye,
      As = ma !== ye,
      bo = As ? (ma === '*' ? Np : ma ? st(ma) : zf) : [],
      oT = [Lp, 'path', 'url'],
      qp = _t(oT, (e) => e === Yh) || Lp;
    var Kt = (e) => ya || kf(e);
    var Aa = (e) => {
      if (typeof e > 'u') return;
      let t = y(e);
      return (
        v(Headers, t.headers) && (t.headers = Vr(n(Xm, t.headers))),
        v(Yn, t.body) && (t.body = new ut(t.body)),
        v(ut, t.body)
          ? ((t.body = n(Kr, t.body)), t)
          : (v(Lu, t.body) && delete t.body, t)
      );
    };
    var Ea = [Go, Ho, To, qr, Vu, Bu],
      fg = ['fetch', 'xhr', 'worker', 'eventsource'];
    var Fp = !1,
      Ta = () => Fp,
      yn = [],
      gg = () => {
        re(ha) && ha.length && ((Fp = !0), I(yn, ...ha));
      },
      yg = (e, ...t) => {
        if (!Kt(e)) throw new Le(Co('overrideCookies'));
        return (
          t.length &&
            ((Fp = !0),
            u(t, (r) => {
              I(yn, r);
            }),
            h &&
              d.log(
                `Cookie override${t.length > 1 ? 's' : ''} registered:`,
                t
              )),
          {
            remove: () => {
              u(t, (r) => {
                let s = co(yn, (i) => i === r);
                s !== -1 && nt(yn, s, 1);
              });
            },
          }
        );
      },
      Ag = (e) => {
        yn.length &&
          u(yn, (t) => {
            t(Eg(e));
          });
      };
    var fo = [],
      hg = (e) => {
        h && d.log('Cookie watcher registered:', e);
        let t = I(fo, e) - 1;
        return {
          remove: () => {
            fo[t] !== e && (t = co(fo, (r) => r === e)), nt(fo, t, 1);
          },
        };
      };
    var It = [],
      Tg = () => {
        if (tr) {
          let e = _(jn, 'changed').get,
            t = _(jn, 'deleted').get;
          n(ae, tr, 'change', (o) => {
            if (Nf(o)) {
              let r = n(e, o),
                s = r.length,
                i = n(t, o),
                c = i.length;
              h &&
                (c && d.log('Cookie(s) deleted:', i),
                s && d.log('Cookie(s) changed:', r));
              let a = s + c,
                p = Qi({ getKey: gr, searchDepth: a }),
                l = Ge(new ht(qd(Ed + nn(o, 'timeStamp').timeStamp))),
                m = p(
                  It,
                  M(We(r, i), (g) => hs(Re(b({}, g), { timestamp: l }), !1))
                );
              u(m, (g) => {
                if ((_e && I(It, g), ve && Ts(g), fo.length)) {
                  let f = Es(g);
                  u(fo, (S) => {
                    S(f);
                  });
                }
              });
            }
          });
        }
      },
      Sg = () => {
        Ke(It);
      };
    var Pg = /^(www\.)?youtube\.com$/,
      rT = /(?:^|.*\.)facebook\.com$/,
      nT = /(?:^|.*\.)doubleclick\.net$/,
      sT = x(bo, aa),
      iT = x(bo, ra),
      Ig = x(bo, ia),
      aT = Ig || x(bo, sa),
      cT = x(bo, na),
      pT = x(bo, ca),
      Vp = X(bo, (e) => x(Dp, e))
        ? [
            {
              unconsented: [wp],
              override: (e) => {
                u(e.URLs, (t, o) => {
                  let r = ce(t, 'hostname', 'pathname', 'href', 'searchParams'),
                    { hostname: s } = r;
                  if (sT && ge(Pg, s) && Pt(r.pathname, '/embed/')) {
                    (r.hostname = He(s, Pg, '$1youtube-nocookie.com')),
                      (e.urls[o] = r.href);
                    return;
                  }
                  if (cT && ge(nT, s)) {
                    n(zt, r.searchParams, 'rdp', '1'), (e.urls[o] = r.href);
                    return;
                  }
                  if (Ig && ge(rT, s)) {
                    n(zt, r.searchParams, 'dpo', 'LDU'), (e.urls[o] = r.href);
                    return;
                  }
                  pT &&
                    s === 'player.vimeo.com' &&
                    (n(zt, r.searchParams, 'dnt', 'true'),
                    (e.urls[o] = r.href));
                });
              },
            },
          ]
        : [],
      vg = (e) => (Ae(Te([e])) ? 'granted' : 'denied'),
      Rg = !1,
      Sa = null,
      Bp = y(),
      lT = () => {
        if (!iT) return;
        let { dataLayer: e } = R,
          t = y({
            ad_storage: vg('Advertising'),
            analytics_storage: vg('Analytics'),
          });
        if (!Yi(['ad_storage', 'analytics_storage'], Bp, t)) return;
        Bp = t;
        let r = [['consent', Rg ? 'update' : 'default', Bp]],
          s = !Ae(Te(['SaleOfInfo']));
        ((s && Sa === null) || (Sa !== null && s !== Sa)) &&
          ((Sa = s), I(r, ['set', y({ ads_data_redaction: s })])),
          e
            ? u(r, (i) => {
                e.push(i);
              })
            : be(R, 'dataLayer', {
                value: r,
                configurable: !0,
                enumerable: !0,
                writable: !0,
              }),
          (Rg = !0);
      },
      Cg = !1,
      uT = () => {
        if (!aT) return;
        let e = { enumerable: !0, configurable: !0 },
          t = () => {};
        be(
          R,
          'fbq',
          b(
            {
              get: t,
              set: (o) => {
                be(R, 'fbq', Re(b({ value: o }, e), { writable: !0 })),
                  be(
                    o,
                    'queue',
                    b(
                      {
                        get: t,
                        set: (r) => {
                          be(
                            o,
                            'queue',
                            Re(b({ value: r }, e), { writable: !0 })
                          ),
                            r && o('dataProcessingOptions', ['LDU'], 0, 0);
                        },
                      },
                      e
                    )
                  );
              },
            },
            e
          )
        ),
          (Cg = !0);
      },
      zp = () => {
        if ((lT(), !Cg)) {
          let e = new U();
          w(e, wp), Ae(e) || uT();
        }
      },
      bg = () => {
        zp(),
          h &&
            d.log(
              `Privacy-enhancing tracker overrides activated: ${Z(bo, ', ')}`
            );
      };
    var Ar = [],
      Wp = (e) => {
        if (re(e.unconsented)) {
          let t = e;
          t.unconsented = Te(e.unconsented);
        }
      },
      Mg = () => {
        re(Pa) && (u(Pa, Wp), I(Ar, ...Pa)),
          As && (u(Vp, Wp), I(Ar, ...Vp), bg());
      },
      xg = (e, ...t) => {
        if (!Kt(e)) throw new Le(Co('override'));
        return (
          u(t, (r) => {
            Wp(r), I(Ar, r);
          }),
          h &&
            d.log(`Request override${t.length > 1 ? 's' : ''} registered:`, t),
          {
            remove: () => {
              u(t, (r) => {
                let s = co(Ar, (i) => i === r);
                s !== -1 && nt(Ar, s, 1);
              });
            },
          }
        );
      },
      va = (e) => {
        Ar.length &&
          u(Ar, ({ unconsented: t, matcher: o, override: r }) => {
            if (t && Ae(t, dt)) return;
            let s = typeof o == 'string' ? new no(o) : o;
            if (typeof r != 'string') {
              let i = Lg(e);
              r(i, s);
              return;
            }
            typeof s < 'u' &&
              u(e.URLs, (i, c) => {
                let a = ce(i, 'href').href;
                ge(s, a) && (e.urls[c] = He(a, s, r));
              });
          }),
          Ra(e) && (e.omitCredentials() || e.deny());
      },
      Og = (e) => Er({ type: ft, url: e }).serialize();
    var Ss,
      An,
      Ps,
      En,
      vs,
      Ia,
      F = class {
        constructor(
          {
            type: t,
            url: o,
            persist: r,
            serialize: s,
            omitCredentials: i,
            requestInit: c,
            mutator: a,
            target: p,
            timestamp: l = Ge(),
          },
          m = !0
        ) {
          Ee(this, Ss, void 0);
          Ee(this, An, null);
          Ee(this, Ps, void 0);
          Ee(this, En, void 0);
          Ee(this, vs, void 0);
          Ee(this, Ia, void 0);
          k(this, 'allow', () => {
            this.allowed = !0;
          });
          k(this, 'deny', () => {
            this.allowed = !1;
          });
          k(this, 'type');
          k(this, 'persist');
          k(
            this,
            'urls',
            be([], 0, {
              enumerable: !0,
              configurable: !1,
              get: () => this.url,
              set: (t) => {
                this.url = t;
              },
            })
          );
          k(this, 'URLs', []);
          k(this, 'timestamp');
          k(this, 'target');
          k(this, 'requestInit');
          k(this, 'mutator');
          k(this, 'serialize', () =>
            V(this, En) ? V(this, En).call(this) : this.url
          );
          k(this, 'omitCredentials', () => {
            var t, o;
            return (o = V(this, Ia)) != null
              ? o
              : pe(
                  this,
                  Ia,
                  Ca(this) &&
                    (((t = V(this, vs)) == null ? void 0 : t.call(this)) ||
                      hn(this))
                );
          });
          k(this, 'toJSON', () => {
            let { type: t, url: o, requestInit: r, timestamp: s } = this;
            return {
              type: t,
              url: typeof o == 'string' ? o : `${o}`,
              requestInit: Aa(r),
              timestamp: s,
            };
          });
          (this.type = t),
            (this.url = o),
            (this.persist = r),
            (this.mutator = a),
            (this.target = p),
            (this.requestInit = c),
            (this.timestamp = l),
            s && pe(this, En, s),
            i && pe(this, vs, i),
            m && va(this);
        }
        get purposes() {
          var t;
          return (t = V(this, An)) != null ? t : pe(this, An, Is(this));
        }
        set purposes(t) {
          if (!v(U, t)) throw new xt('PendingEvent.purposes must be a Set');
          let o = V(this, An);
          o === null ? pe(this, An, (o = new U())) : wt(o),
            u(t, (r) => {
              if (typeof r != 'string')
                throw new xt('Tracking purposes must be strings');
              w(o, r);
            });
        }
        get allowed() {
          var t;
          return (t = V(this, Ps)) != null ? t : Ae(this.purposes, dt);
        }
        set allowed(t) {
          if (t !== null && typeof t != 'boolean')
            throw new xt(
              'Pending event allow/deny state must be true, false, or null'
            );
          pe(this, Ps, t);
        }
        get url() {
          return V(this, Ss);
        }
        set url(t) {
          pe(this, Ss, t), (this.URLs[0] = et(t));
        }
      };
    (Ss = new WeakMap()),
      (An = new WeakMap()),
      (Ps = new WeakMap()),
      (En = new WeakMap()),
      (vs = new WeakMap()),
      (Ia = new WeakMap());
    Me(F);
    var Rs = (e) => new F(e, !1);
    var Tn = !!to,
      Ma = 'tcms',
      Ng = !(Ma in wo),
      Dg = () => {
        var e, t;
        return `${(t = (e = wo)[Ma]) != null ? t : (e[Ma] = Hd())}`;
      },
      mT = 80,
      Cs,
      hr,
      xa = 0,
      kg = () => {
        hr || ((hr = new U()), w(hr, Dg())),
          Tn &&
            !Cs &&
            ((Cs = new to('tcm')),
            n(ae, Cs, 'message', (e) => {
              let { tcm: t, id: o } = (e == null ? void 0 : e.data) || y();
              if (t === 'ping')
                if (o) w(hr, o);
                else {
                  let r = Dg();
                  n(Hc, Cs, { tcm: 'ping', id: r }), w(hr, r);
                }
            }));
      },
      ba,
      dT = async (e = mT) =>
        (xa += await (ba != null
          ? ba
          : (ba = await (() => {
              kg();
              let t = mt(hr);
              return to
                ? (n(Hc, Cs, { tcm: 'ping' }),
                  new ue((o) => {
                    n(
                      Ot,
                      R,
                      () => {
                        o(t - rn(mt(hr), xa)), (ba = null);
                      },
                      e
                    );
                  }))
                : t;
            })()))),
      fT = () => xa,
      gT = () => {
        (xa = 0), delete wo.tcms;
      };
    var _g = () => {
        let e = fT();
        return gT(), e;
      },
      wg = () => (to ? (kg(), dT(), !0) : !1);
    var Qt = [],
      Ug = () => {
        re($p) && I(Qt, ...$p);
      },
      Gg = (e) => {
        h && d.log('Request watcher registered:', e);
        let t = I(Qt, e) - 1;
        return {
          remove: () => {
            Qt[t] !== e && (t = co(Qt, (r) => r === e)), nt(Qt, t, 1);
          },
        };
      };
    var yT = 2,
      Mo = [],
      Hg = () => {
        let e = PerformanceEntry ? Si(PerformanceEntry) : {},
          t = y();
        u(Dt(e), ([p, l]) => {
          let m = l.get;
          m && (t[p] = m);
        });
        let o = PerformanceResourceTiming ? Si(PerformanceResourceTiming) : {},
          r = y();
        u(Dt(o), ([p, l]) => {
          let m = l.get;
          m && (r[p] = m);
        });
        let s = [r, t],
          i = (p) => {
            let l = y();
            return (
              u(s, (m) => {
                u(Dt(m), ([g, f]) => {
                  l[g] = n(f, p);
                });
              }),
              l
            );
          },
          c = zo([
            ...M(['iframe', 'object', 'embed', 'frame'], (p) => [
              p,
              'DOM:view',
            ]),
            ['script', 'DOM:script'],
            ['css', 'DOM:style'],
            ['link', 'DOM:link'],
            ['img', 'DOM:image'],
            ['video', 'DOM:video'],
            ['audio', 'DOM:audio'],
            ['track', 'DOM:track'],
            ['xmlhttprequest', 'xhr'],
            ['other', 'DOM:unknown'],
            ['', 'DOM:unknown'],
          ]),
          a = ({
            name: p,
            fetchStart: l,
            entryType: m,
            initiatorType: g = m,
          }) =>
            new F(
              {
                type: le(c, g) ? ne(c, g) : g,
                url: p,
                timestamp: Ge(new ht(l != null ? l : ao())),
              },
              !1
            );
        if (_e) {
          if (Kn) {
            let p = Ne(ir, 'Firefox/'),
              l = p ? 128 : 0;
            p &&
              n(ae, rt, 'resourcetimingbufferfull', () => {
                n(Td, rt);
              }),
              n(hd, rt, l);
            let m = new Kn((g) => {
              let f = fe(M(M(n(Ad, g), i), a), (S) => {
                var T;
                let { url: C } = S;
                if (typeof C > 'u') return !1;
                let A = Mo.length,
                  E = A - rn(A, yT);
                for (; A-- > E; ) {
                  let P = Mo[A];
                  if (
                    C === P.url &&
                    !((T = P == null ? void 0 : P.requestInit) == null
                      ? void 0
                      : T.body)
                  )
                    return !1;
                }
                return !0;
              });
              u(f, (S) => {
                if (
                  (Rt && h && d.log('Request sent:', S),
                  $t && I(Mo, S),
                  ve && Sr(S),
                  Qt.length)
                ) {
                  let C = Tr(S);
                  u(Qt, (A) => {
                    A(C);
                  });
                }
              });
            });
            n(yd, m, { entryTypes: ['resource', 'navigation'] });
          }
          to && wg();
        }
      },
      qg = () => {
        Ke(Mo);
      };
    var Sn = () => {
        Sg(), qg();
      },
      Fg = () => {
        h && d.log('Monitoring mode enabled'), Tg(), Hg();
      };
    var Bg = () => {
      if (Xn) {
        let e = Xn.prototype,
          { set: t } = e;
        e.set = async function (...o) {
          let r = () => (
              _e && I(It, s),
              Ta() && o.length <= 1
                ? (o[0] = s.toJSON())
                : ((o[0] = s.name), (o[1] = s.value)),
              H(t, this, o)
            ),
            s = new Ft(
              Re(b({}, o.length <= 1 ? o[0] : { name: o[0], value: o[1] }), {
                mutator: r,
              })
            );
          return (await Oa(s))
            ? r()
            : new ue((i) => {
                (s.mutator = () => i(r())), La(s);
              });
        };
      }
    };
    var Vg = [
        'timestamp',
        'expires',
        'maxAge',
        'domain',
        'path',
        'sameSite',
        'secure',
      ],
      zg = M(Vg, $e),
      AT = Ce(zg, -1),
      ET = (e) => M(xe(e, '='), cn),
      hT = (e, t) => {
        let o = xe(e, ';'),
          [r, s = ''] = ET(o[0]);
        if (!r && !s) return null;
        let i = y();
        return (
          u(Ce(o, 1), (c) => {
            let [a, p] = M(xe(c, '='), cn),
              l = $e(He(a, /[^a-z]/i, '')),
              m = ls(zg, l);
            m !== -1 && (i[Vg[m]] = x(AT, l) ? !!p : p);
          }),
          new Ft(b(b({ name: r, value: s }, i), t))
        );
      },
      Wg = () => {
        be(
          Je.prototype,
          'cookie',
          Re(b({}, en), {
            set(...e) {
              let [t] = e,
                o = () => ($t && r !== null && I(It, r), H(en.set, this, e)),
                r = hT(t, { mutator: o });
              return r === null
                ? o()
                : (Ta() && (e[0] = Pr(r)), Pn(r) ? o() : La(r));
            },
          })
        );
      };
    var $g = () => {
      Wg(), Bg();
    };
    var { regulationCacheSize: TT, regulationCacheGcInterval: ST } = q,
      Kp = +(TT || Bf),
      Kg = +(ST || Vf),
      jt = !!Kp,
      vn = jt && new Q(),
      Rn = jt && new Q(),
      Qg = ({ URLs: e, requestInit: t }) =>
        (t == null ? void 0 : t.body)
          ? null
          : `${Z(
              M(e, (o) => ce(o, 'href').href),
              `
`
            )}`,
      PT = () => {
        De(vn) + De(Rn) >= Kp && (Ut(vn), Ut(Rn));
      },
      jg = () => {
        jt && Kg && Kp !== -1 && n(ii, R, PT, Kg);
      };
    var Qp = [],
      Xg = !1,
      bs = (e, t) => (typeof e < 'u' && e !== null ? `;${t}=${e}` : ''),
      Pr = (e, t = !1) => {
        let {
          expires: o,
          domain: r,
          path: s,
          maxAge: i,
          secure: c,
          sameSite: a,
        } = e;
        return `${gr(e, t)}${bs(r, 'Domain')}${bs(s, 'Path')}${
          typeof o == 'number' ? bs(_d(new Date(o)), 'Expires') : ''
        }${bs(i, 'Max-Age')}${bs(a, 'SameSite')}${c ? ';Secure' : ''}`;
      },
      Jg = (e, t) => {
        t &&
          u(
            re(t)
              ? t
              : M(Dt(t), ([o, r]) => ({ cookie: o, purposes: r, hosts: [] })),
            (o) => {
              let { cookie: r, regex: s, hosts: i } = o,
                c = In(o.purposes),
                a = s && typeof r == 'string' ? new no(r) : r;
              ve && v(no, a) && I(Qp, [a, v(no, r) ? n(Pi, a) : r]),
                I(e, y(b({ cookie: a, purposes: c }, i && { hosts: Te(i) })));
            }
          );
      },
      jp = class extends Eo {
        constructor(t) {
          super();
          Jg(this, t);
        }
      };
    Me(jp);
    var Da = new jp(),
      Zg = () => {
        Xg ||
          ((Xg = !0),
          Jg(Da, oy),
          gg(),
          $g(),
          h &&
            (d.log('Cookie regulation active'),
            d.log('Cookie purpose map [', Da, ']'),
            d.log('Auto-clearing disallowed cookies')),
          bT());
      },
      Xp = (e) => `${e.name || e.value || ''}`,
      vT = ({ expires: e, maxAge: t }) =>
        (typeof e == 'number' && e <= ao()) || (typeof t < 'u' && +t <= 0),
      Ms = (e, t = !0) => {
        let o = jt && gr(e);
        if (jt && le(Rn, o)) return ne(Rn, o);
        let r = new U();
        if (vT(e)) w(r, Gt);
        else {
          let s = Xp(e),
            { domain: i } = e,
            c = fe(
              Da,
              ({ cookie: a, hosts: p }) =>
                (typeof a == 'string' ? a === s : ge(a, s)) &&
                (!p || (i && $o(he(p), i)))
            );
          c.length
            ? u(c, ({ purposes: a }) => {
                u(a, (p) => w(r, p));
              })
            : w(r, Ht);
        }
        return (
          t && h && d.log(`Purposes for cookie: ${Pr(e)}`, r),
          jt && ee(Rn, o, r),
          r
        );
      },
      ey = async (e, t = !0) => Ms(e, t),
      RT = (e) => {
        let t;
        return (
          typeof e > 'u' ||
          e === '/' ||
          Pt((t = ss('href').href), ce(et(e, t), 'href').href)
        );
      },
      IT = !!(_e && tr),
      Pn = (e, t = !0) => {
        let o = Rt || e.allowed;
        if (
          t &&
          (_e && o && I(It, e),
          ve && (!IT || !o || !RT(e.path)) && Ts(e),
          fo.length)
        ) {
          let r = Es(e);
          u(fo, (s) => {
            s(r);
          });
        }
        return o;
      },
      Oa = async (e, t = !0) => Pn(e, t),
      ty = (e) => {
        _e && I(It, e), n(en.set, J, Pr(e));
      },
      CT = (e) => {
        (e.expires = ao()), n(en.set, J, Pr(e));
      },
      Yg = (e, t) => {
        mt(e) &&
          u(e, (o) => {
            let r = new Ft({ name: o, value: '' });
            Pn(r, t) || CT(r);
          });
      },
      bT = async () => {
        let e = new U(),
          t = new U();
        tr && u(await n(Xn.prototype.getAll, tr), ({ name: o }) => w(e, o)),
          u(Da, ({ cookie: o }) => {
            typeof o == 'string' && !qe(e, o) && w(t, o);
          }),
          Yg(e, !0),
          Yg(t, !1);
      };
    var MT = async (e) => {
        if (Df(e) && Ne(e.originalPolicy, ' airgap://test ')) {
          let t = e.blockedURI,
            o = new F({ type: 'CSPV', url: t, persist: !0 });
          ve && Sr(o);
          let [r] = o.URLs,
            { protocol: s } = ce(r, 'protocol');
          if (!_e && (s === 'wss:' || s === 'ws:')) return;
          h && d.log('Caught network event via CSP:', t), Y(o);
        }
      },
      Yp = !1,
      Jp = !1,
      xs = !0,
      Zp = () => Jp && !xs,
      el = (e = !1) => (
        Zp() &&
          (me &&
            d.warn(
              `CSP already active. Reload${
                e ? 'ing' : ''
              } page for changes to take effect${e ? '\u2026' : '.'}`
            ),
          e && Qr()),
        Jp
      ),
      ry = (e, t, o, r, s) => {
        let i = ` 'unsafe-inline' 'unsafe-eval';
${fn() ? '' : "script-src * 'unsafe-inline' 'unsafe-eval' data: blob:;"}`;
        if (e || t) {
          let c = new U();
          e &&
            De(e) &&
            u(e, ([p, l]) => {
              let m = In(l);
              ((!o && s && !qe(m, Ht)) || Ae(m, dt)) &&
                (w(c, p),
                !o &&
                  r &&
                  Ne(p, '.') &&
                  !Ne(p, '*') &&
                  !Ne(p, ':') &&
                  w(c, `*.${p}`));
            }),
            t &&
              De(t) &&
              u(t, ([p, l]) => {
                (s || Ae(In(l), dt)) && w(c, p);
              });
          let a = Z(he(c), ' ');
          return `default-src ${Up} ${a}${i}`;
        }
        return `default-src ${Up}${i}`;
      },
      xT = async (e, t, o) => (go || (await vr()), ry(Bt, Cn, e, t, o)),
      OT = (e, t, o) => (go || Na(), ry(Bt, Cn, e, t, o)),
      LT = async (e, t, o) => {
        if ((!o && xs && (xs = !1), el())) return;
        Yp = !0;
        let r = await xT(e, t, o);
        return (
          h &&
            d.log(
              `CSP initialized:
`,
              r
            ),
          r
        );
      },
      DT = (e, t, o) => {
        if ((!o && xs && (xs = !1), el())) return;
        let r = OT(e, t, o);
        return (
          (Yp = !0),
          h &&
            d.log(
              `CSP initialized:
`,
              r
            ),
          r
        );
      },
      NT = (e, t) => {
        n(ae, R, 'securitypolicyviolation', MT);
        let o = lo('meta');
        (o.httpEquiv = 'Content-Security-Policy'),
          (o.content = e),
          io(n(Xr, n(ar, J), o)),
          (Jp = !0),
          h && d.log(`CSP activated (${Z(t, ', ')})`);
      },
      ny =
        (e) =>
        (t = Gp) => {
          let o = !x(t, ye),
            r = x(t, 'allow-subdomains'),
            s = x(t, 'allow-known-hosts'),
            i = (o && x(t, 'strict')) || !(r || s);
          if (!o) {
            h && d.log('CSP disabled');
            return;
          }
          let c = sr(J, 'meta[http-equiv="Content-Security-Policy"]'),
            a = (p) => {
              el(!0) || (p && NT(p, t));
            };
          if (!Yp)
            if (e) {
              let p = DT(i, r, s);
              a(p);
            } else return n(zr, LT(i, r, s), a);
        },
      tl = ny(!1),
      sy = ny(!0);
    var Os,
      bn = class {
        constructor(t) {
          Ee(this, Os, void 0);
          k(this, 'getNode', () => V(this, Os));
          k(this, 'getLiveNode', this.getNode);
          k(this, 'release', () => {});
          pe(this, Os, t);
        }
      };
    Os = new WeakMap();
    Me(bn);
    var Mn = (...e) => H(Qn, R, e),
      iy = () => {
        R.fetch = async function (...e) {
          let [t, o] = e,
            r = this,
            s = v(fc, t) ? n(of, t) : `${t}`,
            i = y({ type: 'fetch', url: s, persist: !0, requestInit: bp(o) }),
            c = new F(typeof t == 'string' ? i : b(b({}, bp(t)), i)),
            a = c.serialize(),
            p = () => (s !== a && (e[0] = a), H(Qn, r, e));
          return (await Rr(c))
            ? p()
            : new ue((l) => {
                let m = () => {
                  l(p());
                };
                (c.mutator = m), Y(c);
              });
        };
      };
    var ay = 'ConsentManager:Sync';
    var ka = '/.well-known/xdi';
    var {
        xdiCommonEndpoint: kT = ka,
        syncEndpoint: On = kT,
        syncPeriod: _T = 1800,
        sync: ol,
      } = q,
      xn = $e(ol != null ? ol : ''),
      wT = ['consent', 'quarantine'],
      _a =
        !xn || x(ua, xn) ? wT : xn === ye ? [] : ge(/\s|,/, xn) ? st(xn) : [xn],
      UT = x(_a, 'consent'),
      GT = x(_a, 'quarantine'),
      xo = (!UT && !GT) || !On,
      py = q.deferSync === qt,
      rl,
      cy = !1,
      Ls = !1,
      Xt = async ({ sync: e = _a, reset: t = !1, deep: o = !0 } = y()) => {
        if ((we && wa(we), xo)) return;
        if (Ls) {
          await Ls;
          return;
        }
        if ((h && d.log('Private cross-domain sync queued'), !On)) {
          me && d.warn('Sync endpoint unspecified');
          return;
        }
        let r = x(e, 'consent'),
          s = x(e, 'quarantine');
        (Ls = new ue((i, c) => {
          n(ho, R, async () => {
            if (!(!rl && !(rl = await n(Po, Ns.xdi.connect(On), c))))
              try {
                let { consent: a, quarantine: p } =
                  (await rl.run(
                    ay,
                    b(
                      b(
                        { sync: fe(e, (l) => x(_a, l)), reset: t, deep: o },
                        !t && r && { consent: Yt() }
                      ),
                      !t &&
                        s && {
                          quarantine: b(
                            b({}, yt && { requests: M(Ye, (l) => l.toJSON()) }),
                            Ct && { cookies: M(gt, (l) => l.toJSON()) }
                          ),
                        }
                    )
                  )) || y();
                if (s && p) {
                  let l = re(p) ? { requests: p } : p,
                    { requests: m, cookies: g } = l;
                  if (
                    (yt && m && I(Ye, ...M(ji(Ye, m), Rs)),
                    Ct && g && I(gt, ...M(Xi(gt, g), Ga)),
                    r && a)
                  ) {
                    let { purposes: f, confirmed: S, timestamp: C } = a;
                    await Ua(f, !!S, !1, C);
                  }
                  nl(!1),
                    cy && (n(ii, R, Xt, +_T * 1e3), (cy = !0)),
                    i(),
                    h && d.log('Sync complete'),
                    (Ls = !1);
                }
              } catch (a) {
                ve && Ds(a);
              }
          });
        })),
          await Ls;
      };
    var Ye = [],
      Ir = [],
      gt = [],
      ks = [],
      HT = () => {
        (yt || Ct) && nl();
      },
      ly = !1,
      qT = () => {
        if (!ly) {
          let { tcmQuarantine: e } = Pe;
          if ((yt || Ct) && e) {
            let t = it(e, () => []);
            if (re(t)) yt && I(Ye, ...M(t, Rs));
            else {
              if (yt) {
                let { requests: o = [] } = t;
                I(Ye, ...M(o, Rs));
              }
              if (Ct) {
                let { cookies: o = [] } = t;
                I(gt, ...M(o, Ga));
              }
            }
          }
          h &&
            (yt && d.log(`Pending request queue: ${Ve(Ye, null, 2)}`),
            Ct && d.log(`Pending cookie queue: ${Ve(gt, null, 2)}`)),
            n(ae, R, 'pagehide', HT);
        }
        ly = !0;
      },
      my = async (e, t) => {
        if (t) {
          let o = !1;
          try {
            h && d.log('Applying mutation', e, t);
            let { target: r } = e,
              s = r && (v(Qo, r) || v(bn, r)),
              i = s ? r.getLiveNode() : r;
            await Se(i, t), s && r.release();
          } catch (r) {
            (o = !0), mo(r);
          }
          return !o;
        }
        return !1;
      },
      FT = (e, t) => {
        let o = !1;
        try {
          Mn(e, t);
        } catch (r) {
          (o = !0), mo(r);
        }
        return !o;
      },
      il = () => {
        Ke(Ye), Ke(gt), $t || Sn(), delete Pe.tcmQuarantine;
      },
      nl = async (e = !0) => {
        if (yt || Ct) {
          let t = b(
              b({}, yt && { requests: ji(we ? Rp(Ye, we) : Ye) }),
              Ct && { cookies: Xi(we ? Rp(gt, we) : gt) }
            ),
            o = Ve(t);
          Sf(o) > ug
            ? (me &&
                d.warn(
                  'Transcend Consent Manager replay queue is too large. Clearing queue.'
                ),
              il(),
              !xo && e && (await Fo(Xt({ sync: ['events'], reset: !0 }))))
            : (Pe.tcmQuarantine = o);
        }
      },
      uy,
      Y = (e) => {
        var c;
        if (!e.persist) {
          if (!Cr) return;
          I(Ir, e), h && d.log('Quarantining mutation:', e);
          return;
        }
        if (!yt) return;
        let {
            type: t,
            urls: [o],
            mutator: r,
          } = e,
          s = `${o}`;
        if (t !== 'CSPV') uy = s;
        else if (s === uy) return;
        let i = !1;
        Pt(t, 'DOM:') &&
          !((c = e == null ? void 0 : e.requestInit) == null
            ? void 0
            : c.body) &&
          (i = X(Ye, (a) => s === a.url)),
          !i && yt
            ? (I(Ye, e), h && d.log('Request added to queue:', e))
            : r && Cr && I(Ir, e);
      },
      La = (e) => {
        let t = Ct && e.persist,
          o = t || Cr;
        t ? I(gt, e) : o && I(ks, e),
          h && o && d.log('Quarantining cookie:', e);
      },
      BT = async () => {
        h && d.log('Dispatching cookie queue');
        let e = [];
        Cr && I(e, ks),
          Ct && I(e, gt),
          await Ti(
            M(e, async (t) => {
              let o = [];
              await Ti(
                M(t, async (s, i) => {
                  if (we && ln(s, we)) {
                    I(o, i);
                    return;
                  }
                  if (Pn(s, !1)) {
                    h && d.log('Cookie allowed', s), I(o, i);
                    let { mutator: c } = s;
                    if (c) {
                      await n(c, s);
                      return;
                    }
                    ke && d.error('Mutator missing', s);
                  } else h && d.log('Cookie not allowed', s);
                })
              );
              let r = o.length;
              for (; r--; ) {
                let s = o[r];
                nt(t, s, 1);
              }
            })
          );
      },
      VT = async () => {
        if ((h && d.log('Dispatching non-persistent mutation queue'), !Cr))
          return;
        let e = [];
        await Ti(
          M(Ir, async (o, r) => {
            if (we && ln(o, we)) {
              I(e, r);
              return;
            }
            if (z(o, !1)) {
              I(e, r);
              let { mutator: s } = o;
              if (s) {
                try {
                  await my(o, s);
                } catch (i) {
                  mo(i);
                }
                return;
              }
              ke && d.error('Mutator missing', o);
            } else h && d.log('Mutation not allowed', o);
          })
        );
        let t = e.length;
        for (; t--; ) {
          let o = e[t];
          nt(Ir, o, 1);
        }
      },
      zT = /^\s*ws{1,2}:/i,
      WT = async () => {
        h && d.log('Dispatching persistent request and mutation queue');
        let e = [];
        u(Ye, (o, r) => {
          let {
              URLs: [s],
            } = o,
            { href: i, protocol: c } = ce(s, 'href', 'protocol');
          if (ge(zT, c)) {
            if (_e) return;
            I(e, r);
            return;
          }
          if (we && ln(o, we)) {
            I(e, r);
            return;
          }
          if (z(o, !1)) {
            I(e, r);
            let { requestInit: a, mutator: p, type: l } = o;
            h &&
              (l !== 'DOM:script' || p) &&
              d.log('Request or mutation allowed', o);
            let m = my(o, p) || (l !== 'DOM:script' && FT(i, a));
            ke && !m && d.error('Unable to process request or mutation', o);
          }
        });
        let t = e.length;
        for (; t--; ) {
          let o = e[t];
          nt(Ye, o, 1);
        }
      },
      sl = !1,
      $T = async (e) => {
        if ((await BT(), Zp())) {
          e && Qr();
          return;
        }
        await VT(), await WT();
      },
      dy = (e = !1) => {
        (sl = !0), $T(e);
      },
      Ha = null,
      al = (e = !1) => {
        Ha !== null && n(ku, R, Ha),
          (Ha = n(ho, R, () => {
            dy(e), (Ha = null);
          }));
      },
      fy = () => {
        let e = async () => {
          qT(), !xo && !py && (await Fo(Xt())), sl || al();
        };
        os(J) !== 'complete'
          ? n(
              ae,
              R,
              'load',
              async () => {
                await e();
              },
              { once: !0 }
            )
          : n(ho, R, async () => {
              await e(), sl || dy();
            });
      },
      KT = (e, t) => {
        let o = [];
        u(e, (s, i) => {
          ln(s, t) && I(o, i);
        });
        let r = o.length;
        for (; r--; ) {
          h && d.log('Removing expired event from quarantine', e[o[r]]);
          let s = o[r];
          nt(e, s, 1);
        }
        return e;
      },
      wa = (e = we) => {
        u([Ye, gt, Ir, ks], (t) => {
          KT(t, e);
        });
      };
    var gy = [
      {
        type: 'DOM:form',
        init: () => {
          let e = ['POST', 'PUT', 'DELETE', 'PATCH'],
            t = (s, i, c = n(Jd.get, s)) => {
              let a = n(Ui.get, s),
                p = new F({
                  type: 'DOM:form-action',
                  url: a,
                  target: s,
                }).serialize();
              a !== p && n(Ui.set, s, p);
              let l = x(e, po(c)),
                m = new Yn(s),
                g = ze(p, 'href', 'search', 'pathname'),
                f;
              return (
                l
                  ? (f = p)
                  : ((g.href = p), (g.search = n(Kr, new ut(m))), (f = g.href)),
                new F({
                  url: f,
                  type: 'DOM:form',
                  requestInit: b(
                    { mode: 'no-cors', method: c },
                    l &&
                      !n(af, m).next().done && {
                        headers: { 'Content-Type': n(Yd.get, s) },
                        body: m,
                      }
                  ),
                  target: s,
                  mutator: i,
                  persist: !0,
                })
              );
            };
          (Uo.prototype.submit = function (...s) {
            let i = this,
              c = () => {
                H(zc, i, s);
              },
              a = t(i, c);
            return z(a) ? c() : Y(a);
          }),
            Wc &&
              (Uo.prototype.requestSubmit = function (...s) {
                let i = this,
                  c = () => H(Wc, i, s),
                  a = t(i, c);
                return z(a) ? c() : Y(a);
              });
          let o = Io(mi.prototype),
            r = Io(ui.prototype);
          return (
            (Ur.prototype.click = function (...s) {
              let i = this,
                c = () => {
                  H(Ci, i, s);
                },
                a = v(mi, i) ? o : v(ui, i) ? r : null;
              if (!a) return c();
              let {
                type: p,
                form: l,
                formAction: m,
                formMethod: g = 'get',
              } = a(i, 'type', 'form', 'formAction', 'formMethod');
              if (p === 'submit' && l) {
                let f = t(l, c, g),
                  S = new F({
                    type: 'DOM:form-action',
                    url: m,
                    target: l,
                  }).serialize();
                if ((m !== S && n(Ui.set, i, S), !z(f))) return Y(f);
              }
              return c();
            }),
            n(ae, R, 'submit', (s) => {
              if (Ip(s)) return !0;
              let i = s.target;
              if (i) {
                let c = t(i, () => n(zc, i));
                if (!z(c)) return n(vi, s), n(zm, s), n(Vm, s), Y(c), !1;
              }
              return !0;
            }),
            []
          );
        },
      },
      {
        type: 'DOM:form-action',
        constructors: [ui, mi],
        property: 'formAction',
        attribute: 'formaction',
        safe: !0,
      },
      {
        type: 'DOM:form-action',
        constructors: [Uo],
        property: 'action',
        safe: !0,
      },
    ];
    var tt = class extends SyntaxError {
      constructor(t) {
        super(t);
        this.name = 'AirgapParserError';
      }
      get [or]() {
        return this.name;
      }
    };
    var yy = {
      empty: 'data:text/plain,',
      video:
        'data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAGm1kYXQAAAGzABAHAAABthBgUYI9t+8AAAMNbW9vdgAAAGxtdmhkAAAAAMXMvvrFzL76AAAD6AAAACoAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhpb2RzAAAAABCAgIAHAE/////+/wAAAiF0cmFrAAAAXHRraGQAAAAPxcy++sXMvvoAAAABAAAAAAAAACoAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAgAAAAIAAAAAAG9bWRpYQAAACBtZGhkAAAAAMXMvvrFzL76AAAAGAAAAAEVxwAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABaG1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAShzdGJsAAAAxHN0c2QAAAAAAAAAAQAAALRtcDR2AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAgACABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAXmVzZHMAAAAAA4CAgE0AAQAEgICAPyARAAAAAAMNQAAAAAAFgICALQAAAbABAAABtYkTAAABAAAAASAAxI2IAMUARAEUQwAAAbJMYXZjNTMuMzUuMAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAASAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1My4yMS4x',
      image:
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      script: 'data:text/javascript,',
      document:
        'data:text/html,%3Cmeta%20http-equiv%3D%22Content-Security-Policy%22%20content%3D%22default-src%20%27none%27%3B%20navigate-to%20%27none%27%3B%22%3E',
      track: 'data:text/vtt,WEBVTT',
    };
    var Ln = (e, t) => {
      let o = `Mutation blocked: Error parsing property: ${e}=${Ve(t)}`;
      ve && Ds(o), me && d.warn(o);
    };
    var QT = (e) => {
        var t;
        return v(To, e)
          ? n(ap.get, e)
          : (t = e.href) == null
          ? void 0
          : t.baseVal;
      },
      Ay = (e, t) => {
        v(To, e) ? n(ap.set, e, t) : (e.href.baseVal = t);
      },
      Ey = (...e) => {
        u(e, (t) => {
          Se(t, () => {
            kd(t, n(id, t, !0));
          });
        });
      },
      hy = {
        type: 'DOM:script',
        constructors: [To],
        property: 'src',
        placeholder: 'script',
        handlePendingWrite: (e, t, o, r, s) => {
          let { type: i, parse: c, property: a } = e,
            p = o,
            l = c(r, { type: i, target: p }),
            m = v(tt, l),
            g = !m && z(l),
            f = !m && l.serialize(),
            S = !m && `${r}` != `${f}`;
          if ((s && (m || !g || S) && (s.modified = !0), m)) {
            Ln(a, r);
            return;
          }
          let C = () => {
            t(f);
          };
          if (!g) {
            (l.mutator = () => {
              C(), Ey(p);
            }),
              Y(l);
            return;
          }
          Se(p, C);
        },
        handleLiveMutation: (e, t, o, r) => {
          let { type: s, parse: i, property: c, placeholder: a } = e,
            { attributeNamespace: p, attributeName: l } = t,
            m = o.getNode(),
            g = QT(m),
            f = i(g, { type: s, target: o }),
            S = v(tt, f),
            C = !S && z(f),
            A = !S && f.serialize(),
            E = !S && g !== A;
          if ((r && (!C || E || S) && (r.modified = !0), S)) {
            Ln(c, g),
              Se(m, () => {
                n(xi, m, p, l);
              });
            return;
          }
          let T = (P, N = A) => {
            Ay(P, N), Ey(P);
          };
          C
            ? E &&
              Se(m, () => {
                T(m);
              })
            : (Se(m, () => {
                Ay(m, a);
              }),
              (f.mutator = () => {
                let P = o.getLiveNode();
                T(P, A), o.release();
              }),
              Y(f));
        },
      };
    var Ty = (e) => ge(/\S/, e),
      cl = (e = '', t) => {
        let o = `${e}`,
          r = cn(o) === '',
          s = r ? [['']] : M(xe(o, ','), (a) => pr(a, /(?=\s+)/)),
          i = r ? s[0] : M(s, (a) => cn(_t(a, Ty) || a[0])),
          c = new br(
            Re(b({}, t), {
              urls: i,
              serialize: () => (
                u(c.urls, (a, p) => {
                  if (p < s.length) {
                    let l = s[p],
                      m = co(l, Ty);
                    l[m] = He(l[m], /^(\s*)(?:\S+)(\s*)$/, `$1${a}$2`);
                  }
                }),
                Z(
                  M(s, (a) => Z(a, '')),
                  ','
                )
              ),
            })
          );
        return c;
      };
    var Dn = xe(
        'stylesheet icon preconnect prefetch preload prerender dns-prefetch modulepreload pingback manifest shortcut import alternate webbundle',
        ' '
      ),
      jT = (e) => ({
        get() {
          return n(jr, this, e);
        },
        set(t) {
          return n(vo, this, e, t);
        },
      }),
      Sy = jT('href'),
      Py = [
        {
          type: 'DOM:image',
          constructors: [Go],
          property: 'src',
          placeholder: 'image',
          save: !0,
          handleLiveMutation: (e, t, o, r) => {
            let { type: s, parse: i, placeholder: c } = e,
              a = o.getNode(),
              p = (as && n(as.get, a)) || n(sn.get, a),
              l = i(p, { type: s, target: o }),
              m = v(tt, l),
              g = !m && z(l),
              f = !m && l.serialize(),
              S = m || p !== f;
            r && (!g || S) && (r.modified = !0);
            let C = (A) => {
              n(sn.set, A, f);
            };
            g
              ? S &&
                Se(a, () => {
                  C(a);
                })
              : (Se(a, () => {
                  n(sn.set, a, c);
                }),
                (l.mutator = () => {
                  C(o.getLiveNode()), o.release();
                }),
                m || Y(l));
          },
        },
        {
          type: 'DOM:image',
          constructors: [Go],
          property: 'srcset',
          placeholder: 'image',
          parse: (e, t) => {
            try {
              return cl(e, t);
            } catch (o) {
              return new tt(o);
            }
          },
        },
        { type: 'DOM:media', constructors: [Jn], property: 'src' },
        {
          type: 'DOM:media',
          constructors: [Jn],
          property: 'srcset',
          parse: (e, t) => {
            try {
              return cl(e, t);
            } catch (o) {
              return new tt(o);
            }
          },
        },
        {
          type: 'DOM:image',
          constructors: [qu],
          property: 'src',
          placeholder: 'image',
          handleLiveMutation: (e, t, o, r) => {
            let { type: s, parse: i, placeholder: c } = e,
              a = o.getNode(),
              p = sr(a, 'img'),
              l = p && ((as && n(as.get, p)) || n(sn.get, p)),
              m = i(l, { type: s, target: o }),
              g = v(tt, m);
            if (p && (l || g)) {
              let f = !g && m.serialize(),
                S = !g && z(m),
                C = g || l !== f;
              r && (!S || C) && (r.modified = !0);
              let A = (E, T = f) => {
                n(sn.set, E, T);
              };
              S
                ? C &&
                  Se(p, () => {
                    A(p);
                  })
                : (Se(p, () => {
                    A(p, c);
                  }),
                  (m.mutator = () => {
                    let E = sr(o.getLiveNode(), 'img');
                    A(E), o.release();
                  }),
                  g || Y(m));
            }
          },
        },
        {
          type: 'DOM:media',
          constructors: [qr],
          property: 'src',
          placeholder: 'video',
          handleLiveMutation: (e, t, o, r) => {
            let { type: s, parse: i, placeholder: c } = e,
              a = o.getNode(),
              p = (pp && n(pp.get, a)) || n(cp.get, a),
              l = i(p, { type: s, target: o }),
              m = v(tt, l),
              g = !m && z(l),
              f = !m && l.serialize(),
              S = m || p !== f;
            r && (!g || S) && (r.modified = !0);
            let C = (A, E = f) => {
              n(cp.set, A, E);
            };
            g
              ? S &&
                Se(a, () => {
                  C(a);
                })
              : (Se(a, () => {
                  C(a, c);
                }),
                (l.mutator = () => {
                  C(o.getLiveNode()), o.release();
                }),
                m || Y(l));
          },
        },
        { type: 'DOM:ping', constructors: [So], property: 'ping' },
        {
          type: 'DOM:link',
          constructors: [So, Ho, Hr],
          property: 'href',
          condition: ({ relList: e }) => X(Dn, (t) => e && n(Ri, e, t)),
          handleLiveMutation: (e, t, o, r) => {
            let s = o.getNode(),
              { relList: i } = s,
              c = X(Dn, (T) => n(Ri, i, T)),
              a;
            v(So, s)
              ? (a = cs)
              : v(Ho, s)
              ? (a = lp)
              : v(Hr, s)
              ? (a = up)
              : (a = Sy);
            let { type: p, parse: l } = e,
              m = n(a.get, s),
              g = l(m, { type: p }),
              f = v(tt, g),
              S = !f && g.serialize(),
              C = !f && z(g),
              A = c && !C,
              E = f || m !== S;
            if ((r && (A || E) && (r.modified = !0), A)) {
              let T = [];
              u(i, (P) => {
                x(Dn, P) &&
                  (Se(s, () => {
                    n($m, i, P);
                  }),
                  I(T, P));
              }),
                (g.mutator = () => {
                  let { relList: P } = o.getLiveNode();
                  u(T, (N) => {
                    n(Wm, P, N);
                  }),
                    o.release();
                }),
                f || Y(g);
            }
            E && n(a.set, s, S);
          },
        },
        {
          type: 'DOM:link',
          constructors: [So, Ho, Hr],
          property: 'relList',
          selector: 'a[rel],link[rel],area[rel]',
          attribute: null,
          handlePendingRead: (e, t) => {
            let o = t,
              r;
            v(So, o)
              ? (r = cs)
              : v(Ho, o)
              ? (r = lp)
              : v(Hr, o)
              ? (r = up)
              : (r = Sy);
            let s = e(t),
              { add: i, toggle: c, replace: a } = s;
            return (
              (s.add = function (...p) {
                let l = () => H(i, this, p),
                  m = n(r.get, o);
                if (X(p, (f) => x(Dn, $e(f)))) {
                  let f = new F({
                    type: 'DOM:link',
                    url: m,
                    target: o,
                    mutator: l,
                    persist: !0,
                  });
                  if (!z(f)) {
                    Y(f);
                    return;
                  }
                }
                return l();
              }),
              (s.toggle = function (p, l) {
                let m = () => n(c, this, p, l),
                  g = n(r.get, o);
                if (x(Dn, $e(p))) {
                  let S = new F({
                    type: 'DOM:link',
                    url: g,
                    target: o,
                    mutator: m,
                    persist: !0,
                  });
                  if (!z(S)) return Y(S), !n(Ri, s, p);
                }
                return m();
              }),
              (s.replace = function (p, l) {
                let m = () => n(a, this, p, l),
                  g = n(r.get, o);
                if (x(Dn, $e(l))) {
                  let S = new F({
                    type: 'DOM:link',
                    url: g,
                    target: o,
                    mutator: m,
                    persist: !0,
                  });
                  if (!z(S)) return Y(S), !0;
                }
                return m();
              }),
              s
            );
          },
        },
        {
          type: 'DOM:view',
          constructors: [Gr, Cc, bc],
          property: 'src',
          placeholder: 'document',
        },
        {
          type: 'DOM:view',
          constructors: [Mc],
          property: 'data',
          placeholder: 'document',
        },
        {
          type: 'DOM:track',
          constructors: [Fu],
          property: 'src',
          placeholder: 'track',
        },
      ];
    var pl = !np && new er(),
      XT = pl
        ? (e) =>
            ff(pl, e) ? !1 : n(ki, n(ud, e, 'x')) !== 'x' ? (df(pl, e), !1) : !0
        : (e) => n(np, e) !== null,
      ll = (e) => {
        let t = kt(e) ? e : n(Qe, e);
        return t && XT(t);
      },
      ul = (e) => {
        let t = [];
        return (
          Vi(n(Xc, e), (o) => {
            I(t, Wo(o));
          }),
          Z(t, '')
        );
      };
    var jo = [],
      YT = (e) => {
        I(jo, ...lf(e, (t) => oS(t))),
          (My = X(jo, ({ selector: t }) => t === '*')
            ? '*'
            : Z(
                he(
                  Te(
                    M(
                      fe(jo, ({ selector: t }) => t !== null),
                      ({ selector: t }) => t
                    )
                  )
                ),
                ','
              ));
      },
      qa = new Q(),
      Iy = [...Py, hy, ...gy],
      Fa = (e) => (e ? (Wt(e) && n(Ld, e)) || n(ad, e, null) : null),
      _s = (e) => Fa(n(Qe, e)),
      Nn = (e) => n(ki, e),
      JT = (...e) =>
        M(
          e,
          ({
            attribute: t = null,
            property: o,
            accessor: r,
            constructors: s = [Lt],
          }) => ({
            type: 'unknown',
            constructors: s,
            property: o,
            attribute: t,
            handleLiveMutation: null,
            handlePendingWrite: (i, c, a, p) => {
              let l = _s(a),
                m = kn(l, Nn(a));
              n(Jr, m), n(Yr, m, p === null ? '' : p), n(Zr, m);
              let g =
                  a === n(Xe, n(Qe, a) || J) || l !== Lr
                    ? [n(Xe, m)]
                    : [n(ar, m), n(is, m)],
                f = y({
                  insertion: m,
                  mutator: (S) => {
                    let C = ll(a);
                    n(
                      r.set,
                      S,
                      f.modified
                        ? Z(
                            M(g, (A) => (C ? ul(A) : n(Gi.get, A))),
                            ''
                          )
                        : p
                    );
                  },
                  target: a,
                });
              return Vt(f);
            },
          })
        );
    I(
      Iy,
      ...JT(
        { property: 'innerHTML', accessor: Gi },
        { property: 'outerHTML', accessor: ip },
        {
          property: 'srcdoc',
          attribute: 'srcdoc',
          accessor: ef,
          constructors: [Gr],
        }
      )
    );
    var ZT = () => {
        h && d.log('Initializing DOM patchers'), YT(Iy);
        let e = St.prototype,
          t = Lt.prototype,
          o = Je.prototype,
          r = vc.prototype;
        (t.insertAdjacentElement = function (A, E) {
          let T = this;
          return Vt(
            y({ insertion: E, mutator: () => n(ed, T, A, E), target: T })
          );
        }),
          (t.insertAdjacentHTML = function (A, E) {
            let T = this,
              P = kn(_s(T), Nn(T));
            n(Jr, P), n(Yr, P, E), n(Zr, P);
            let N = ll(T);
            return Vt(
              y({
                insertion: P,
                mutator: (te, W, $) =>
                  $ ? n(Kc, te, A, N ? ul(W) : n(Gi.get, W)) : n(Kc, T, A, E),
                target: T,
              })
            );
          }),
          (o.adoptNode = function (A) {
            let E = this;
            if (Wt(A)) {
              let T = kn(_s(A), Nn(A)),
                P = n(Oi, T, A);
              return (
                n(Zn, Ry(T), P),
                Vt(
                  y({
                    insertion: P,
                    mutator: (j, te, W) => n(Oi, E, W ? P : A),
                    target: E,
                  })
                )
              );
            }
            return n(Oi, E, A);
          }),
          (o.importNode = function (A, E) {
            let T = this;
            if (Wt(A)) {
              let P = kn(_s(A), Nn(A)),
                N = n(Li, P, A, E);
              return (
                n(Zn, Ry(P), N),
                Vt(
                  y({
                    insertion: N,
                    mutator: (te, W, $) => n(Li, T, $ ? N : A, E),
                    target: T,
                  })
                )
              );
            }
            return n(Li, T, A, E);
          }),
          (o.open = function (...A) {
            let E = this;
            return Cy(E), H(Jr, E, A);
          }),
          (o.close = function (...A) {
            let E = this;
            return ml(...Dy(E)), H(Zr, E, A);
          });
        let s = function (...A) {
          let E = this,
            T = n(Xe, E),
            P = T ? Nn(T) : '_',
            N = kn(Fa(E), P);
          return (
            n(Jr, N),
            H(Yr, N, A),
            n(Zr, N),
            Vt(
              y({
                insertion: N,
                mutator: (te, W, $) => n(Yr, E, $ ? n(ip.get, n(Xe, N)) : A),
                target: E,
              })
            )
          );
        };
        (o.write = s),
          (o.writeln = function (...A) {
            return H(
              s,
              this,
              We(
                A,
                `
`
              )
            );
          });
        let i = new Q(),
          c = [Lt, Je, ci],
          a = ['append', 'prepend'],
          p = [Lt, pi, li],
          l = ['before', 'after', 'replaceWith'],
          m = (A, E, T) => {
            var te;
            let { prototype: P } = A,
              N = (te = so(P, E)) == null ? void 0 : te.value,
              j = `${A.name}.${E}`;
            ee(i, j, N),
              be(P, E, {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: T,
              });
          };
        u(c, (A) => {
          u(a, (E) => {
            m(A, E, function (...T) {
              let P = this,
                N;
              Wt(P) ? (N = Lt) : kt(P) ? (N = Je) : Yc(P) && (N = ci);
              let j = ne(i, `${N == null ? void 0 : N.name}.${E}`);
              u(T, (te) => {
                let W = () => n(j, P, te);
                typeof te == 'string'
                  ? W()
                  : Vt(y({ insertion: te, mutator: W, target: P }));
              });
            });
          });
        }),
          u(p, (A) => {
            u(l, (E) => {
              m(A, E, function (...T) {
                let P = this,
                  N;
                Wt(P) ? (N = Lt) : Md(P) ? (N = li) : xd(P) && (N = pi);
                let j = ne(i, `${N == null ? void 0 : N.name}.${E}`),
                  te = () => n(j, P, ...T);
                return (
                  u(T, (W) => {
                    let $ = () => n(j, P, W);
                    typeof W == 'string'
                      ? $()
                      : Vt(y({ insertion: W, mutator: $, target: P }));
                  }),
                  te()
                );
              });
            });
          }),
          (e.appendChild = function (A) {
            let E = this;
            return Vt(
              y({ insertion: A, mutator: () => n(Xr, E, A), target: E })
            );
          }),
          (e.insertBefore = function (A, E) {
            let T = this;
            return Vt(
              y({ insertion: A, mutator: () => n(nd, T, A, E), target: T })
            );
          }),
          (e.replaceChild = function (A, E) {
            let T = this;
            return Vt(
              y({ insertion: A, mutator: () => n(sd, T, A, E), target: T })
            );
          });
        let g = function (A, E, T, P, N = null) {
          let j = $e(E),
            te = (W) => (P ? n($c, A, N, E, W) : n(vo, A, E, T));
          for (let W of cr(jo)) {
            let {
              handlePendingWrite: $,
              attribute: Fe,
              property: Ue,
              condition: at,
            } = W;
            if (
              $ &&
              Fe !== null &&
              Ue !== null &&
              j === Fe &&
              (at === null || at(A))
            ) {
              $(W, te, A, T);
              return;
            }
          }
          return te(T);
        };
        (t.setAttribute = function (A, E) {
          return g(this, A, E, !1);
        }),
          (t.setAttributeNS = function (A, E, T) {
            return g(this, E, T, !0, A);
          });
        let f = (A) => _t(jo, ({ attribute: E }) => E === A),
          S = (A, E, T, P) => {
            if (qe(by, A)) {
              let N = f(A),
                j = N.parse(E, { type: 'unknown', target: T, mutator: P });
              if (v(tt, j)) return Ln(A, E), T;
              if (Ra(j))
                return (
                  me &&
                    d.warn(
                      'Unable to omit credentials from request. Request blocked: ',
                      j
                    ),
                  T
                );
              if (!N.safe && !z(j)) return Y(j), T;
            }
            return P();
          };
        be(
          ai.prototype,
          'value',
          Re(b({}, Hi), {
            set(A) {
              let E = this,
                T = n(mp.get, E);
              return S(T, A, E, () => n(Hi.set, E, A));
            },
          })
        );
        let C = (A) =>
          function (E) {
            let T = this,
              P = n(mp.get, E),
              N = n(Hi.get, E);
            return S(P, N, E, () => n(A, T, E));
          };
        (t.setAttributeNodeNS = C(Zm)),
          (t.setAttributeNode = C(Jm)),
          (r.setNamedItemNS = C(ld)),
          (r.setNamedItem = C(pd)),
          (gi.prototype.createContextualFragment = function (...A) {
            let E = this,
              T = n(Qd, E);
            if (!Oo(T)) return H(rp, E, A);
            let P = () => H(rp, E, A),
              [N] = A,
              j = kn(kt(T) ? Fa(T) : _s(T), Wt(T) ? Nn(T) : '_');
            n(Jr, j), n(Yr, j, N), n(Zr, j);
            let te = y({
              insertion: j,
              target: T,
              static: !0,
              mutator: () => (te.modified && (A[0] = Wo(j)), P()),
            });
            return Vt(te);
          }),
          (xy = !0);
      },
      Cy = (e, t = e) => {
        let o;
        if (e && kt(e) && os(e) === 'loading') {
          let r = 'readystatechange',
            s = Oy(),
            i = () => {
              os(e) !== 'loading' && o();
            };
          (o = () => {
            ml(s), n(Nt, e, r, i);
          }),
            n(ae, e, r, i),
            Ly(s, t);
        } else o = () => {};
        return o;
      },
      Ba = (e = J) => {
        Va || dl(), xy || ZT(), h && d.log('protect() called on', e);
        let t = kt(e) ? e : n(Qe, e),
          o = (Ro(e) ? e : t) || J,
          r = Cy(t, o),
          i = {
            remove: () => {
              gn || r(), Bi(qa, o), h && d.log('protect() removed from', o);
            },
          };
        return ee(qa, o, i), i;
      },
      Oo = Qc
        ? (e) => {
            if (e !== null) {
              for (let t of Ep(qa)) if (n(ts, t, e)) return !0;
              if (v($u, n(Qc, e))) return !0;
            }
            return !1;
          }
        : (e) => {
            if (e !== null) {
              for (let t of Ep(qa)) if (n(ts, t, e)) return !0;
            }
            return !1;
          },
      vy = zo([
        ['anchor', ['a']],
        ['image', ['img']],
        ['media', ['video', 'audio']],
      ]),
      eS = (e, t) =>
        Z(
          M(e, (o) => {
            let r = $e(He(o.name, /^HTML|^SVG|Element$/g, ''));
            return r === ''
              ? '*'
              : Z(
                  M(
                    le(vy, r) ? ne(vy, r) : [r],
                    (s) => `${s}${t ? `[${t}]` : ''}`
                  ),
                  ','
                );
          }),
          ','
        ),
      tS = { mode: 'no-cors' },
      by = new U(),
      My,
      xy = !1,
      oS = (e) => {
        let t = [],
          { type: o } = e,
          {
            property: r = null,
            placeholder: s = null,
            safe: i = !1,
            save: c = !1,
            requestInit: a,
            constructors: p = [],
            condition: l = null,
            attribute: m = r,
            attributeNamespace: g = null,
            selector: f = p.length && m !== null ? eS(p, m) : null,
            omitCredentials: S = (Vo(p, (T) => x(Ea, T)) &&
              ((T, P) => {
                let N = hn(T);
                return N && P && (P.modified = !0), N;
              })) ||
              null,
            parse: C = (T, P) =>
              new F(
                Re(b({}, P), {
                  url: T,
                  persist: c,
                  omitCredentials:
                    S !== null
                      ? function () {
                          return S(this);
                        }
                      : void 0,
                })
              ),
            setup: A = null,
            init: E = () => (
              u(p, (T) => {
                let P = (r !== null && so(T.prototype, r)) || null,
                  N = s && yy[s],
                  j = (a != null ? a : c) ? y(tS) : void 0,
                  {
                    read: te = (r !== null &&
                      (P == null ? void 0 : P.get) &&
                      ((oe) => n(P.get, oe))) ||
                      (m !== null && g
                        ? (oe, se = m, ie = g) => {
                            n(od, oe, ie, se);
                          }
                        : (oe, se = m) => {
                            n(jr, oe, se);
                          }) ||
                      null,
                    write: W = (r !== null &&
                      (P == null ? void 0 : P.set) &&
                      ((oe, se) => n(P.set, oe, se))) ||
                      (m !== null &&
                        (g
                          ? (oe, se, ie = m, Be = g) => {
                              n($c, oe, Be, ie, se);
                            }
                          : (oe, se, ie = m) => {
                              n(vo, oe, ie, se);
                            })) ||
                      null,
                    block: $ = (oe, se, ie = m, Be = g) => {
                      let ct = oe.getNode(),
                        pt = !1;
                      Se(ct, () => {
                        W
                          ? W(ct, N !== null ? N : void 0, ie, Be)
                          : ie !== null
                          ? g
                            ? n(xi, ct, Be, ie)
                            : n(Mi, ct, ie)
                          : ((pt = !0), io(ct));
                      }),
                        v(tt, se) ||
                          (W && !pt
                            ? (se.mutator = () => {
                                W(oe.getLiveNode(), se.serialize(), ie, Be),
                                  oe.release();
                              })
                            : oe.release(),
                          Y(se));
                    },
                    handlePendingRead: Fe = null,
                    handlePendingWrite: Ue = (W !== null &&
                      function (oe, se, ie, Be, ct) {
                        let pt = C(Be, { type: o, target: ie, requestInit: j }),
                          bt = v(tt, pt),
                          Do = oe.safe || (!bt && z(pt)),
                          No = !bt && pt.serialize(),
                          Or = !bt && `${Be}` != `${No}`;
                        if (
                          (ct && (!Do || Or || bt) && (ct.modified = !0), bt)
                        ) {
                          Ln(r || m, Be);
                          return;
                        }
                        let L = () => {
                          se(No);
                        };
                        if (!Do) {
                          (pt.mutator = L), Y(pt);
                          return;
                        }
                        Se(ie, L);
                      }) ||
                      null,
                    handleLiveMutation: at = (te !== null &&
                      W !== null &&
                      $ !== null &&
                      ((oe, se, ie, Be) => {
                        let { attributeName: ct, attributeNamespace: pt } = se,
                          bt = ie.getNode(),
                          Do = te(bt, ct, pt),
                          No = C(Do, { type: o, target: ie }),
                          Or = v(tt, No),
                          L = !Or && z(No),
                          D = !Or && No.serialize(),
                          G = Do !== D;
                        Be && (!L || G || Or) && (Be.modified = !0),
                          !oe.safe && !L
                            ? $(ie, No, ct, pt)
                            : (G && W(bt, D, ct, pt), ie.release());
                      })) ||
                      null,
                  } = e,
                  Et = {
                    type: o,
                    constructor: T,
                    placeholder: N,
                    requestInit: j,
                    selector: f,
                    property: r,
                    condition: l,
                    safe: i,
                    save: c,
                    attribute: m,
                    read: te,
                    write: W,
                    block: $,
                    parse: C,
                    attributeNamespace: g,
                    handlePendingRead: Fe,
                    handlePendingWrite: Ue,
                    handleLiveMutation: at,
                    omitCredentials: S,
                  };
                t.push(Et),
                  m !== null && w(by, m),
                  r &&
                    P &&
                    (Fe || Ue) &&
                    be(
                      T.prototype,
                      r,
                      Re(b({}, P), {
                        get:
                          Fe === null
                            ? P.get
                            : function () {
                                return Fe((ie) => n(P.get, ie), this);
                              },
                        set:
                          Ue === null
                            ? P.set
                            : function (oe) {
                                let se = this,
                                  ie = (Be) => {
                                    n(P.set, se, Be);
                                  };
                                l === null || l(se)
                                  ? Ue(Et, ie, se, oe)
                                  : ie(oe);
                              },
                      })
                    );
              }),
              t
            ),
          } = e;
        return A == null || A(), E();
      },
      rS = ga
        ? () => {
            let e = n(jc, tn, '');
            return n(td, n(Ni, n(ar, e))), e;
          }
        : () => n(jc, tn),
      kn = (e, t) => (e === Lr || e === null ? rS() : n(Di, tn, e, t)),
      nS = (e) => v(Hu, e) || Fa(e) === Lr,
      Ry = (e) => (nS(e) ? n(is, e) : n(Xe, e)),
      Vt = (e) => {
        let { target: t, insertion: o, mutator: r } = e,
          s = (kt(o) ? o : n(Qe, o)) || J,
          i = Wt(o) || Yc(o) ? o : n(Xe, s) || o;
        if (Oo(t) && i) {
          let a = kt(t) ? t : n(Qe, t);
          a && t === a && (i = s),
            Vi(wi(i, My), (p) => {
              u(jo, (l) => {
                let {
                  handleLiveMutation: m,
                  attribute: g,
                  constructor: f,
                  condition: S,
                } = l;
                if (
                  m &&
                  v(f, p) &&
                  g !== null &&
                  n(bi, p, g) &&
                  (S === null || S(p))
                ) {
                  let E = { attributeName: g, attributeNamespace: null },
                    T = new (e.static ? bn : Qo)(p);
                  m(l, E, T, e);
                }
              });
            });
        }
        let c;
        return (
          Se(t, () => {
            c = r(t, i === s ? n(Xe, s) : i, e.modified);
          }),
          c
        );
      };
    var sS = 0,
      ws,
      Xo,
      Mr,
      Qo = class {
        constructor(t) {
          Ee(this, ws, void 0);
          Ee(this, Xo, void 0);
          Ee(this, Mr, null);
          k(this, 'getNode', () => {
            let t = V(this, Xo);
            if (t === null)
              throw new Ac('Attempted to reference a released node');
            return t;
          });
          k(this, 'getLiveNode', () => {
            let t = V(this, Mr);
            if (t) return t;
            let o = V(this, Xo);
            if (o === null)
              throw new Ac('Attempted to reference a released node');
            if (o && n(Qe, o) !== J) {
              h && d.log('Converting quarantined mutation from proxy document');
              let r = sr(J, `[data-airgap-id="${V(this, ws)}"]`);
              if (r !== null)
                return (
                  pe(this, Mr, r), h && d.log('Found corresponding node', r), r
                );
              me &&
                d.warn(
                  'Unable to locate corresponding node from quarantined mutation in proxy document'
                );
            }
            return o;
          });
          k(this, 'release', () => {
            let t = V(this, Xo),
              o = V(this, Mr);
            if (o !== null) {
              let r = ur(o),
                s = () => delete r.airgapId;
              Oo(n(Qe, t)) ? Se(o, s) : s(), pe(this, Mr, null);
            }
            if (t && n(Qe, t) !== J) {
              let r = n(Qe, t);
              r && n(Xe, r) && n(sp, n(Xe, r)) && n(rd, r, n(Xe, r));
            }
            pe(this, Xo, null);
          });
          let o = ur(t),
            r = o.airgapId || `${sS++}`;
          pe(this, ws, r), pe(this, Xo, t);
          let s = () => {
            o.airgapId = r;
          };
          n(sp, t) && Oo(n(Qe, t)) ? Se(t, s) : s();
        }
      };
    (ws = new WeakMap()), (Xo = new WeakMap()), (Mr = new WeakMap());
    Me(Qo);
    var Ny = (e, t) => {
        za() ||
          u(jo, (o) => {
            let {
              handleLiveMutation: r,
              constructor: s,
              attribute: i,
              condition: c,
            } = o;
            if (
              r &&
              v(s, t) &&
              i !== null &&
              n(bi, t, i) &&
              (c === null || c(t))
            ) {
              let a = new Qo(t);
              r(o, e, a);
            }
          });
      },
      Oy = () =>
        new Ic((e) => {
          if (za()) {
            _y();
            return;
          }
          u(e, (t) => {
            if (za()) return;
            let { type: o, target: r, addedNodes: s } = t;
            Oo(r) &&
              (o === 'attributes'
                ? Ny(t, r)
                : o === 'childList' &&
                  u(s, (i) => {
                    Ny(t, i);
                  }));
          });
        }),
      Us = new Q(),
      fl = !1,
      Ly = (e, t) => {
        ee(Us, e, t),
          n(dd, e, t, {
            childList: !0,
            attributes: !0,
            attributeOldValue: !0,
            subtree: !0,
          }),
          (fl = !0);
      },
      ml = (...e) => {
        u(e, (t) => {
          le(Us, t) && (n(fd, t), Bi(Us, t));
        }),
          (fl = De(Us) !== 0);
      },
      Dy = (e) => {
        let t = [];
        return (
          u(Us, ([o, r]) => {
            n(ts, r, e) && I(t, o);
          }),
          t
        );
      },
      ky = () => fl;
    var Gs = !1,
      za = () => Gs,
      _y = () => {
        Gs = !1;
      },
      Se = (e, t) => {
        if (Gs || (e && !Oo(e))) return t(e);
        Gs = !0;
        let o = t(e);
        return ky() || (Gs = !1), o;
      };
    var iS = (e) => {
        let t = Ro(e) ? Wt(e) && e : e.getNode();
        return (
          t &&
            Se(t, () => {
              n(vo, t, 'crossorigin', 'anonymous');
            }),
          Ro(t) && Wt(t) && X(Ea, (o) => v(o, t))
        );
      },
      Ca = (e) => {
        let { requestInit: t } = e;
        return (
          typeof t != 'object' && (e.requestInit = t = y()),
          (t.credentials = 'omit'),
          !0
        );
      },
      hn = (e) => {
        let { target: t, type: o } = e;
        return t ? iS(t) : x(fg, o);
      };
    var _n,
      Hs,
      wn,
      qs,
      Wa,
      br = class {
        constructor(
          {
            type: t,
            urls: o,
            serialize: r,
            omitCredentials: s,
            requestInit: i,
            mutator: c,
            target: a,
            timestamp: p = Ge(),
          },
          l = !0
        ) {
          Ee(this, _n, null);
          Ee(this, Hs, void 0);
          Ee(this, wn, void 0);
          Ee(this, qs, void 0);
          Ee(this, Wa, void 0);
          k(this, 'allow', () => {
            this.allowed = !0;
          });
          k(this, 'deny', () => {
            this.allowed = !1;
          });
          k(this, 'type');
          k(this, 'urls');
          k(this, 'URLs');
          k(this, 'timestamp');
          k(this, 'mutator');
          k(this, 'target');
          k(this, 'requestInit');
          k(this, 'serialize', () =>
            V(this, wn) ? V(this, wn).call(this) : this.urls[0]
          );
          k(this, 'omitCredentials', () => {
            var t, o;
            return (o = V(this, Wa)) != null
              ? o
              : pe(
                  this,
                  Wa,
                  Ca(this) &&
                    (((t = V(this, qs)) == null ? void 0 : t.call(this)) ||
                      hn(this))
                );
          });
          k(this, 'toJSON', () => {
            let { type: t, urls: o, requestInit: r, timestamp: s } = this;
            return {
              type: t,
              urls: M(o, (i) => (typeof i == 'string' ? i : `${i}`)),
              requestInit: Aa(r),
              timestamp: s,
            };
          });
          this.type = t;
          let m = (this.urls = he(o)),
            g = (this.URLs = M(m, (f) => et(f)));
          u(m, (f, S) => {
            be(m, S, {
              enumerable: !0,
              configurable: !1,
              get: () => f,
              set: (C) => {
                g[S] = et((f = C));
              },
            });
          }),
            (this.mutator = c),
            (this.target = a),
            (this.requestInit = i),
            (this.timestamp = p),
            r && pe(this, wn, r),
            s && pe(this, qs, s),
            l && va(this);
        }
        get purposes() {
          var t;
          return (t = V(this, _n)) != null ? t : pe(this, _n, Is(this));
        }
        set purposes(t) {
          if (!v(U, t)) throw new xt('PendingEvent.purposes must be a Set');
          let o = V(this, _n);
          o === null ? pe(this, _n, (o = new U())) : wt(o),
            u(t, (r) => {
              if (typeof r != 'string')
                throw new xt('Tracking purposes must be strings');
              w(o, r);
            });
        }
        get allowed() {
          var t;
          return (t = V(this, Hs)) != null ? t : Ae(this.purposes, dt);
        }
        set allowed(t) {
          if (t !== null && typeof t != 'boolean')
            throw new xt(
              'Pending event allow/deny state must be true, false, or null'
            );
          pe(this, Hs, t);
        }
        get url() {
          return this.urls[0];
        }
        set url(t) {
          this.urls[0] = t;
        }
        get persist() {
          return !1;
        }
        set persist(t) {}
      };
    (_n = new WeakMap()),
      (Hs = new WeakMap()),
      (wn = new WeakMap()),
      (qs = new WeakMap()),
      (Wa = new WeakMap());
    Me(br);
    var $a = () => [_o(), _o()],
      Un =
        (e, t, o, r = (s, i) => fr(i)) =>
        (s) => {
          let i = (a, p) => a !== s || x(e, p),
            c = (a, p) => t && i(a, p) && typeof a[p] != 'function';
          return new fi(s, {
            get: (a, p) => {
              if (!i(a, p)) return;
              if (re(o)) {
                let [m, g] = o;
                if (p === m) return g;
              }
              let l = a[p];
              return typeof l == 'object' && !c(a, p) ? r(p, l) : l;
            },
            set: (a, p, l) => (c(a, p) ? ((a[p] = l), !0) : !1),
            has: (a, p) => p in a,
            deleteProperty: (a, p) => c(a, p) && delete a[p],
          });
        };
    var gl = $a(),
      [aS, cS] = gl,
      yl = [
        'url',
        'urls',
        'type',
        'requestInit',
        'timestamp',
        'URLs',
        'persist',
        'allowed',
        'serialize',
        'purposes',
        'target',
        'toJSON',
      ],
      Tr = Un(yl, !1, gl, (e, t) =>
        e === 'URLs' ? M(t, (o) => new oo(o)) : fr(t)
      ),
      pS = We(yl, 'URLs', 'omitCredentials', 'allow', 'deny'),
      Lg = Un(pS, !0, gl),
      lS = Ce(yl, 0, 5),
      Er = (e, t = !0) => {
        let o = Oe(e),
          r = fe(o, (i) => x(lS, i));
        if (r.length < o.length && me) {
          let i = fe(o, (c) => !x(r, c));
          d.warn(
            `The following properties are not allowed and will be ignored: ${Z(
              i,
              ' '
            )}`
          );
        }
        let s = y();
        return (
          u(r, (i) => {
            var a;
            let c = fr(e[i]);
            i === 'url'
              ? (((a = s.urls) != null ? a : (s.urls = []))[0] = c)
              : (s[i] = c);
          }),
          Tr(new br(s, t))
        );
      },
      Al = (e) => v(F, e) || v(br, e) || e[aS] === cS;
    var Gn = Te([Gt]),
      uS = (e) => {
        let t = le(e, Ze),
          o = `www.${Ze}`,
          r = Pt(Ze, 'www.') || le(e, o);
        t || ee(e, Ze, Gn), Ne(Ze, '.') && !r && ee(e, o, Gn);
      },
      mS = (e) => {
        let { hostname: t } = dn;
        le(e, t) || ee(e, t, Gn);
      },
      dS = (e) => {
        let t = 'about:';
        le(e, t) || ee(e, t, Gn);
      },
      wy = (e, t = !1) => {
        u([...(On ? [ze(On, 'host', 'hostname', 'port')] : []), ...da], (o) => {
          if (o) {
            if (t && !o.port) return;
            let r = t ? o.host : o.hostname;
            le(e, r) || ee(e, r, Gn);
          }
        });
      },
      Uy = (e, t = !1) => {
        ve &&
          u(ys, (o) => {
            if (t && !o.port) return;
            let r = t ? o.host : o.hostname;
            le(e, r) || ee(e, r, Te([ng]));
          });
      },
      fS = (e) => {
        le(e, 'youtube.com') &&
          !le(e, 'youtube-nocookie.com') &&
          ee(e, 'youtube-nocookie.com', Gn);
      },
      El = (e) => {
        uS(e), mS(e), Uy(e), wy(e), fS(e);
      },
      Gy = (e) => {
        dS(e), Uy(e, !0), wy(e, !0);
      };
    var Hy = Me(
      ga || (Hp && +Hp < 14)
        ? class {
            constructor() {
              let e = n(Di, tn, '', '');
              return vp(e, ft);
            }
          }
        : class extends hc {
            constructor(...e) {
              super(...e);
              vp(this, ft);
            }
          }
    );
    var hl = new Hy(),
      Ka = (e, t) => {
        n(Km, hl, new xu(e, { detail: t }));
      },
      qy = (e, t, o) => {
        Ka('consent-change', { oldConsent: e, consent: t, changes: o });
      };
    var gS = q.syncXhr !== ye,
      Tl = new kr(),
      yS = (e, t) => (yf(Tl, e, t), t),
      AS = (e) => (Af(Tl, e) ? gf(Tl, e) : null),
      Sl = !1,
      Qa = (e) => {
        Sl = !0;
        let t = new Nr();
        return n(dp, t, 'GET', e, !1), n(qi, t), (Sl = !1), t;
      },
      Fy = () => {
        let e = Nr.prototype;
        (e.open = function (...t) {
          let o = this,
            [r, s, i] = t,
            c = new F({
              type: 'xhr',
              url: s,
              requestInit: { method: r },
              omitCredentials() {
                var l;
                return (
                  n(nf.set, o, !1),
                  (((l = this.requestInit) != null
                    ? l
                    : (this.requestInit = y())
                  ).credentials = 'omit'),
                  !0
                );
              },
            }),
            a = c.serialize();
          `${s}` != `${a}` && (t[1] = a);
          let p = Sl ? !1 : !z(c);
          if (
            (yS(o, y({ url: a, method: r, async: i, blocked: p })), !gS && !i)
          )
            throw new Le(
              'Synchronous XMLHttpRequest not allowed. This feature was disabled by airgap via the sync-xhr="off" option.'
            );
          return H(dp, o, t);
        }),
          (e.send = function (...t) {
            let o = this,
              [r] = t,
              s = AS(o);
            if (!s || (!s.blocked && n(sf, o) !== rf))
              throw new Gu(
                "The XMLHttpRequest object's state must be OPENED.",
                'InvalidStateError'
              );
            let { url: i, method: c, async: a, blocked: p } = s,
              l = new F({
                type: 'xhr',
                url: i,
                requestInit: { method: c },
                persist: !0,
              });
            r !== null &&
              typeof r < 'u' &&
              po(`${c}`) === 'POST' &&
              (l.requestInit.body = Ro(r) && kt(r) ? Wo(r) : r);
            try {
              p
                ? a
                  ? ((l.mutator = () => {
                      (s.blocked = !1), H(qi, o, t);
                    }),
                    Y(l))
                  : (h &&
                      d.log(
                        'Synchronous XMLHttpRequest quarantined (unable to replay in-place)'
                      ),
                    Y(l))
                : H(qi, o, t);
            } catch (m) {
              ke &&
                d.error(
                  'Unhandled exception while calling [XMLHttpRequest].send():',
                  m
                );
            }
          });
      };
    var Pl = (e, t) =>
        fe(e, ({ param: o, value: r }) => {
          if (n(Ii, t, o)) {
            if (r === null) return !0;
            let s = n(Qm, t, o);
            if (typeof s == 'string' && Ne(s, r)) return !0;
          }
          return !1;
        }),
      vl = (e, t, o) => {
        let r = Pl(e, o);
        return (
          u(r, ({ purposes: s }) => {
            u(s, (i) => {
              w(t, i);
            });
          }),
          !!r.length
        );
      };
    var { regime: By, defaultRegime: Vy, regimeDetection: zy } = q,
      ES = 'ip-only',
      hS = 'heuristics-only',
      Fs,
      TS = () => {
        var o;
        if (typeof Fs < 'u') return Fs;
        let { country: e, countryRegion: t } = Cl || y();
        if (e || t) return (Fs = [e, t]);
        if (uo) {
          let r =
              ((o = O) == null ? void 0 : o.regimeHints) || 'regime-hints.json',
            s = ce(et(r, dn.href), 'href').href;
          try {
            let { country: i, countryRegion: c } = it(Qa(s).responseText);
            return !i && !c ? null : (Fs = [i, c]);
          } catch (i) {
            ke && d.error('Failed to request regime hints:', i);
          }
        }
        return (Fs = null);
      },
      Lo,
      Rl = (e) => {
        var t, o;
        return e !== Op &&
          ja &&
          !((o =
            (t = _t(Hn, ([r]) => X(r, (s) => e === s))) == null
              ? void 0
              : t[1]) == null
            ? void 0
            : o.length)
          ? !1
          : (Lo.add(e), !0);
      },
      SS = (e, t) =>
        e === t ||
        X($y, ([o, r]) => (o === e && x(r, t)) || (o === t && x(r, e))),
      Wy = (e) => {
        let t = pr(e, /\s*;\s*/);
        return X(M(t, Rl), (o) => o);
      },
      Yo = () => {
        if (Lo) return Lo;
        if (((Lo = new U()), uo)) {
          let { tcmRegime: c } = Pe;
          if (c && (h && d.log(`Using regime override: ${c}`), Wy(c)))
            return Lo;
        }
        if (By && Wy(By)) return Lo;
        let e,
          t = () => (e || (e = n(Wd, n(op, Sc)).timeZone), e),
          o = (c) => X(n(tp, Tt), (a) => X(c, (p) => Ne(po(a), po(p)))),
          r = (c) =>
            X(n(tp, Tt), (a) => X(Ce(xe(a, '-'), 1), (p) => x(c, po(p)))),
          [s, i] = TS() || [];
        return (
          u(Ky, ([c, a, p, l, m]) => {
            let g =
              (zy !== hS &&
                s &&
                X(c, ([f, S]) => SS(s, f) && (!S || i === S))) ||
              (zy !== ES &&
                ((re(l) ? o(l) : l && X(c, ([f]) => f && r([f]))) ||
                  (re(m) && X(m, (f) => Ne(t(), f)))));
            (p !== 'out' ? g : !g) && u(a, Rl);
          }),
          Lo.size === 0 && (!Vy || !Rl(Vy)) && Lo.add(Op),
          Lo
        );
      },
      Il = (e, t = Yo()) => {
        let o = new U();
        return (
          u(e, ([r, s]) => {
            for (let i of an(t))
              x(r, i) &&
                u(s, (c) => {
                  w(o, c);
                });
          }),
          o
        );
      };
    var bl = !1,
      Qy = !0,
      PS = () => Ng && !bl,
      Xy = () => (Qy ? ((Qy = !1), PS()) : !1),
      jy = !1,
      Yy = (e) => {
        if (jy) return;
        jy = !0;
        let t;
        u(['mousedown', 'keydown', 'touchstart'], (o) => {
          n(
            ae,
            R,
            o,
            () => {
              (bl = !0),
                t && (n(_r, R, t), (t = null)),
                (t = n(
                  Ot,
                  R,
                  () => {
                    bl = !1;
                  },
                  e
                ));
            },
            { passive: !0 }
          );
        });
      };
    var Xa = (e = !1) => (+Pe.tcmu || 0) + ((e && +Pe.tcmr) || 0),
      Ml = (e, t) => {
        let o = +(Pe.tcmr || 0),
          r = +(Pe.tcmu || 0) + 1,
          s = o + r,
          i = rr(t) && r >= t;
        return (Pe.tcmu = i ? t : r), rr(e) && s >= e;
      },
      Jy = () => {
        delete Pe.tcmu;
      },
      Zy = () => {
        Jy(), delete Pe.tcmr;
      },
      eA = () => {
        let e = Xa(),
          t = Xa(!0);
        return (Pe.tcmr = t), Jy(), e;
      };
    var vS = () => {
        if (qp === 'origin') return Bo;
        if (qp === 'path') {
          let { origin: e, pathname: t } = ss('origin', 'pathname');
          return `${e}${t}`;
        }
        return ss('href').href;
      },
      qn = new Q(),
      xl = [],
      Bs = () => {
        let e = vS(),
          t = ne(qn, e);
        return (
          t ||
            ((t = y({
              hosts: new Q(),
              paths: new Q(),
              cookies: new Q(),
              cookieMatchers: new Q(),
              cspv: new Q(),
              consent: [],
            })),
            ee(qn, e, t)),
          t
        );
      },
      tA = (e, t, o, r, s, i) => {
        h && d.log.styled(fs, `Logging telemetry to %c${i}`), Tn && Yy(r);
        let c = !1,
          a = null,
          p = !1,
          l = !1,
          m = M(e, ({ hostname: L }) => L),
          g = new Q(),
          f = (L) => {
            let D = y();
            for (let [G, { allowed: B, blocked: K }] of uf(L)) D[G] = [B, K];
            return D;
          },
          S = () => {
            u(Fn, (L) => {
              ee(g, L, y({ allowed: 0, blocked: 0 }));
            });
          };
        S();
        let C = ['http:', 'https:'],
          A = (L) => {
            let D = xe(L, '.'),
              { length: G } = D;
            for (let B = 0; B < G; B++) {
              let K = Z(Ce(D, B), '.');
              if (x(m, K)) return !0;
            }
            return !1;
          },
          E = (L, D, G) => (G && (L === Ze || A(L))) || x(la, D),
          T = (
            L,
            D = `
`
          ) => {
            let G = [];
            return (
              u(L, ([B, K]) => {
                I(G, K > 1 ? `${B} ${K}` : B);
              }),
              Z(G, D)
            );
          },
          P = /\n/g,
          N = (L) => {
            let D = [];
            return (
              u(L, ([G, B]) => {
                De(B) &&
                  I(
                    D,
                    `${He(G, P, (K) => n(encodeURIComponent, R, K))}
${Z(
  M(he(B), ([K, de]) => {
    let ot = K === Ze ? '^' : K;
    return de > 1 ? `${ot} ${de}` : ot;
  }),
  ' '
)}`
                  );
              }),
              Z(
                D,
                `
`
              )
            );
          },
          j = (L) =>
            Z(
              M(he(L), ([D, G]) => `${T(G, ',')};${D}`),
              `
`
            ),
          te = (L) =>
            Z(
              M(
                he(L),
                ([D, G]) => `${D}
${T(G, ',')}`
              ),
              `
`
            ),
          W = () => {
            let L = y();
            return (
              u(
                qn,
                ([
                  D,
                  {
                    hosts: G,
                    paths: B,
                    cookies: K,
                    cookieMatchers: de,
                    cspv: ot,
                    consent: eo,
                  },
                ]) => {
                  let lt = y();
                  De(G) && (lt.hosts = T(G)),
                    De(B) && (lt.paths = j(B)),
                    De(K) && (lt.cookies = N(K)),
                    De(de) && (lt.cookieMatchers = te(de)),
                    De(ot) && (lt.cspv = T(ot)),
                    eo.length && (lt.consent = he(eo)),
                    (L[D] = lt);
                }
              ),
              L
            );
          },
          $ = () => {
            let L = y({ version: mn, id: nA, site: Ze });
            return s
              ? L
              : Vo(
                  he(hp(qn)),
                  ({
                    hosts: D,
                    paths: G,
                    cookies: B,
                    cookieMatchers: K,
                    cspv: de,
                    consent: ot,
                  }) =>
                    !De(D) &&
                    !De(G) &&
                    !De(B) &&
                    !De(K) &&
                    !De(de) &&
                    !Xa() &&
                    !ot.length &&
                    !xl.length
                )
              ? null
              : ((L.entries = W()), L);
          },
          Fe = () => {
            u(
              qn,
              ([
                ,
                {
                  hosts: L,
                  paths: D,
                  cookies: G,
                  cookieMatchers: B,
                  cspv: K,
                  consent: de,
                },
              ]) => {
                Ut(L), Ut(D), Ut(G), Ut(B), Ut(K), Ke(de);
              }
            ),
              Ut(qn),
              Ke(xl);
          },
          Ue = (L) => {
            let D = $();
            if (D === null || (Fe(), $t || Sn(), Tn && (D.sessions = _g()), s))
              return D;
            (D.sessions || 0) > 0 &&
              ((D.currentConsent = ta(Yt()).purposes),
              (D.defaultConsent = ta(y({ purposes: Vr(Ol) })).purposes)),
              Tn && (D.bounces = +(L && Xy())),
              (D.views = eA());
            for (let { allowed: K, blocked: de } of hp(g))
              if (K || de) {
                D.purposes = f(g);
                break;
              }
            S();
            let G = Yo();
            G.size && (D.regimes = he(G.values()));
            let B = un();
            return B.size && (D.signals = he(B.values())), D;
          },
          at = (L) => {
            if (!i || !z(new F({ type: 'beacon', url: i }), !1) || (s && !Tn))
              return;
            let D = Ue(L);
            if (!D) return;
            (p = !0), h && d.log('Flushing telemetry data: ', D);
            let G = Ve(D);
            ig || (ag && D.sessions)
              ? Qn(i, { method: 'POST', mode: 'no-cors', body: G })
              : n(rs, Tt, i, G),
              (p = !1),
              l || (l = !0);
          },
          Et = () => {
            p ||
              (c ||
                (n(ae, R, 'pagehide', () => {
                  at(!0);
                }),
                (c = !0)),
              a === null &&
                (a = n(
                  Ot,
                  R,
                  () => {
                    (a = null), at(!1);
                  },
                  (l ? o : t) * 1e3
                )));
          },
          oe = (L) => (D, G) => {
            var eo;
            let B = x(C, G);
            if (E(D, G, B)) return;
            let { [L]: K } = Bs(),
              de = B ? D : `${G}${D}`,
              ot = ((eo = ne(K, de)) != null ? eo : 0) + 1;
            ee(K, de, ot);
          },
          se = oe('hosts'),
          ie = oe('cspv'),
          Be = (L, D) => {
            let { paths: G } = Bs(),
              B = typeof D == 'string' ? D : n(Pi, D),
              K = le(G, B),
              de = K ? ne(G, B) : new Q();
            K || ee(G, B, de), ee(de, L, (ne(de, L) || 0) + 1);
          },
          ct = ({ protocol: L, host: D }) => {
            ie(D, L);
          },
          pt = (L, D = !0) => {
            bt(() => {
              let G = `${L}`;
              (cA && X(Nl, (B) => ge(B, G))) ||
                (I(xl, G), ke && d.error(L), D && Et());
            });
          },
          bt = (L) => n(ho, R, L),
          Do = (L, D) => {
            let G = Ae(L, D) ? 'allowed' : 'blocked';
            u(L, (B) => {
              var K;
              if (qe(Fn, B)) {
                let de = ne(g, B);
                de[G] = ((K = de[G]) != null ? K : 0) + 1;
              }
            });
          };
        return {
          logRequestStats: (L, D = !0) => {
            bt(() => {
              if (sA) {
                let B = Tr(L);
                if (X(kl, (K) => K(B))) return;
              }
              if (
                iA &&
                X(Ll, (B) => X(L.URLs, (K) => ge(B, ce(K, 'href').href)))
              )
                return;
              u(L.URLs, (B) => {
                let K = ce(B, 'protocol', 'hostname', 'host');
                L.type === 'CSPV' && (ct(K), D && Et());
                let de = oA(B),
                  ot = rA(B),
                  eo = We(de, ot);
                if (
                  (u(eo, (lt) => {
                    Be(B.hostname, lt);
                  }),
                  !de.length)
                ) {
                  let { protocol: lt, hostname: pu } = K;
                  se(pu, lt);
                }
              });
              let { purposes: G } = L;
              Do(G, dt), D && Et();
            });
          },
          logCookieStats: (L, D = !0) => {
            bt(() => {
              let G = Xp(L);
              if (G === '' || (aA && X(Dl, (yo) => ge(yo, G)))) return;
              let B = Pr(L, G),
                K = Ms(L, !1);
              Do(K, Ko);
              let { domain: de } = L,
                ot = de || Ze,
                { cookies: eo, cookieMatchers: lt } = Bs();
              if (
                !fe(Qp, ([yo, lu]) => {
                  ge(yo, G) && (le(lt, lu) || ee(lt, lu, zo([[ot, 1]])));
                }).length
              ) {
                let yo = ne(eo, B);
                yo || ((yo = new Q()), ee(eo, B, yo)),
                  ee(yo, ot, (ne(yo, ot) || 0) + 1);
              }
              D && Et();
            });
          },
          logError: pt,
        };
      };
    var Bn,
      Jt = new Q(),
      Zt,
      Vn,
      wl = !1,
      Cn,
      Jo = !1,
      go = !1,
      pA = new Q(),
      Ol = new Q(),
      Ja = y(),
      RS = 'Auto',
      Fn = new U(),
      zs = new U(),
      gA = [],
      IS = [Ht],
      yA = () => Bn.types,
      Ua = async (e, t, o = !0, r = Ge()) => {
        let s = Yi(Oe(Zt), Zt, e);
        if (ve && s) {
          let c = y();
          u(Oe(s), (a) => {
            c[a] = !!Hl(a, s[a]);
          }),
            I(Bs().consent, c);
        }
        let i = Yt();
        u(Oe(e), (c) => {
          var a;
          ((a = ne(Jt, c)) == null ? void 0 : a.configurable) && (Zt[c] = e[c]);
        }),
          (Vn = r),
          (Pe.tcmConsent = Ve(
            Fl({ purposes: Zt, timestamp: Vn, confirmed: t })
          )),
          qy(i, Yt(), s),
          !xo && o && (await Fo(Xt())),
          As && s && zp(),
          Kl && Ks && !Ae(zs) ? jl() : al(Wl);
      },
      rc = (e, t, o) => {
        var i;
        let r = (i = o == null ? void 0 : o.confirmed) != null ? i : !0;
        if (Kt(e)) Ua(t, r), h && d.log('Consent set to', Zt);
        else return ke && d.error(Co('setConsent')), !1;
        return !0;
      },
      CS = (e) => Vo(e, (t) => zl(t)),
      lA = !0,
      Fl = (e = Pe.tcmConsent ? it(Pe.tcmConsent) : y()) => {
        let { purposes: t, timestamp: o = Ge() } = e,
          r = fe(Oe(Zt), (i) => {
            var c;
            return (c = ne(Jt, i)) == null ? void 0 : c.configurable;
          }),
          s = wl || e.confirmed || (lA && r.length > 0 && CS(r));
        return (
          (lA = !1),
          t &&
            ((Vn = o || Ge()),
            u(Oe(t), (i) => {
              x(r, i) && (Zt[i] = t[i]);
            })),
          (wl = s),
          e
        );
      },
      AA = async (e = !0) => {
        let { tcmConsent: t, tcm3PConsent: o } = Pe;
        t && delete Pe.tcmConsent,
          o && delete Pe.tcm3PConsent,
          await Ua(Ja, !1, e),
          Fl();
      },
      Ae = (e, t) => {
        var o;
        if (MA) return !0;
        for (let r of an(e)) {
          if ((o = ne(Jt, r)) == null ? void 0 : o.essential) return !0;
          if (r === Ht || !le(Jt, r))
            return t === dt
              ? nc || (sc && Ae(zs, t))
              : t === Ko
              ? $l || (xA && Ae(zs, t))
              : Ae(e, dt) && Ae(e, Ko);
          if (!Zt[r]) return !1;
        }
        return !0;
      },
      Yt = () =>
        y({
          purposes: y(Zt),
          confirmed: wl,
          timestamp: Vn != null ? Vn : (Vn = Ge()),
        }),
      EA = () => Ae(zs),
      hA = () => Vo(gA, (e) => !Zt[e]),
      TA = (e) => {
        let t = y();
        return (
          u(Oe(Ja), (o) => {
            t[o] = e;
          }),
          t
        );
      },
      SA = (e) => rc(e, TA(!0)),
      PA = (e) => rc(e, TA(!1)),
      In = (e) =>
        typeof e > 'u' || (re(e) && !e.length) || (v(U, e) && !mt(e))
          ? Te(IS)
          : v(U, e)
          ? e
          : Te(e),
      bS = (e, t) => {
        t &&
          u(Oe(t), (o) => {
            ee(e, ms(o), In(t[o]));
          });
      },
      xr = class extends Q {
        constructor(t) {
          super();
          bS(this, t);
        }
      };
    Me(xr);
    var Bt = new xr(),
      Bl = (e) => {
        El(e),
          Ut(Bt),
          u(e, ([t, o]) => {
            ee(Bt, t, o);
          }),
          h && d.log('Data flow purpose map', e),
          (go = !0),
          (Jo = !1);
      },
      MS = (e) => {
        let t = xe(ms(e), '.'),
          { length: o } = t;
        for (let r = 0; r < o; r++) {
          let s = Z(Ce(t, r), '.');
          if (le(Bt, s)) return s;
        }
        return !1;
      },
      vA = (e) => {
        let t = new xr(
          it(
            e,
            () => new xr(),
            (o, r) => (re(r) ? Te(r) : r)
          )
        );
        return El(t), t;
      },
      uA = !1,
      Ul = 'purpose-map-load',
      { remotePurposeMap: Za } = q,
      RA = new Nu(),
      { signal: _l } = RA,
      mA = (e) => {
        ke &&
          e.code !== e.ABORT_ERR &&
          d.error('Error fetching purpose map', e);
      },
      vr = async (e = y()) => {
        if (go) {
          h && d.log('loadPurposeMap(): Purpose map already loaded');
          return;
        }
        if (!Za) {
          me && d.warn('loadPurposeMap(): No remote purpose map defined');
          return;
        }
        let t = ze(Za, 'href').href;
        if (Jo)
          return (
            h && d.log('loadPurposeMap(): Purpose map is already loading'),
            new ue((o) => {
              let r = ({ type: s, target: i }) => {
                (Jo = !1), (go = !0), i && n(Nt, i, s, r), o();
              };
              n(ae, R, Ul, r);
            })
          );
        if (Kt(e)) {
          h && d.log('Loading purpose map:', t), (Jo = !0);
          let o = await n(Po, Mn(t, { signal: _l }), mA),
            r = 'Unable to fetch purpose map';
          if (o && o.body) {
            let s = await n(Po, o.text(), mA);
            s
              ? (Bl(vA(s)),
                (go = !0),
                h && d.log('Purpose map loaded:', Bt),
                Ka(Ul))
              : !_l.aborted && ke && d.error(r);
          } else !_l.aborted && ke && d.error(r);
        }
        Jo = !1;
      },
      Na = (e = y()) => {
        if (go) {
          h && d.log('loadPurposeMapSync(): Purpose map already loaded');
          return;
        }
        if (
          (Jo &&
            (Vs && RA.abort(),
            h &&
              d.log(
                `loadPurposeMapSync(): Purpose map is already loading${
                  Vs ? '. Switching to synchronous request' : ''
                }`
              )),
          !Za)
        ) {
          me && d.warn('loadPurposeMapSync(): No remote purpose map defined');
          return;
        }
        if (Kt(e)) {
          if (!Vs) {
            h &&
              !uA &&
              (d.log(
                'loadPurposeMapSync(): Purpose map is not yet loaded and synchronous requests are disabled. Pending getPurposes() calls will assume all purposes'
              ),
              (uA = !0)),
              vr(e);
            return;
          }
          let t = ze(Za, 'href').href;
          h && d.log('Synchronously loading purpose map:', t),
            (Jo = !0),
            Bl(vA(Qa(t).responseText)),
            (Jo = !1),
            (go = !0),
            Ka(Ul),
            h && d.log('Purpose map loaded synchronously:', Bt);
        }
      },
      ec = !1,
      z = (e, t = !0) => {
        let o = Rt || e.allowed;
        if (t && (_e && o && I(Mo, e), ve && Sr(e), Qt.length)) {
          let r = Tr(e);
          u(Qt, (s) => {
            s(r);
          });
        }
        return o;
      },
      Rr = async (e, t = !0) => z(e, t),
      dA = (e) => {
        w(e, Ht);
      },
      fA = (e, t) => lr(e.href, e[t].length),
      IA = (e, t) => {
        if (typeof e == 'string') {
          let o = e[0] === '/',
            r = o && e[1] === '/' && e[2] === '/',
            s = r ? 'origin' : 'protocol';
          return o
            ? Pt(
                fA(t, s),
                fA(ze(r ? lr(e, 2) : e, 'href', 'protocol', 'origin'), s)
              )
            : Pt(t.href, e);
        }
        return ge(e, t.href);
      },
      Gl = (e, t, o) => {
        let r = fe(e, ({ matcher: s }) => IA(s, o));
        return (
          u(r, ({ purposes: s }) => {
            u(s, (i) => {
              w(t, i);
            });
          }),
          !!r.length
        );
      },
      Ra = ({ URLs: e }) => {
        let t = new U();
        return (
          u(e, (o) => {
            Gl(Ql, t, ce(o, 'href', 'origin', 'protocol'));
          }),
          mt(t) !== 0 && !Ae(t, Ko)
        );
      },
      tc = h && new U(),
      xS = (e, t, o) => {
        u(e, ({ matcher: r }) => {
          IA(r, t) && w(o, r);
        });
      },
      oA = (e) => {
        let t = new U();
        return zn.length && xS(zn, e, t), he(t);
      },
      rA = (e) => {
        let t = new U();
        return (
          vl.length &&
            u(Pl($s, e.searchParams), ({ source: r }) => {
              w(t, r);
            }),
          he(t)
        );
      },
      Is = (e, t = !0) => {
        let o = jt && Qg(e);
        if (jt && o !== null && le(vn, o)) return ne(vn, o);
        let { URLs: r } = e,
          s = M(r, (a) => {
            let p = new U(),
              l = ce(
                a,
                'hostname',
                'href',
                'protocol',
                'origin',
                'searchParams'
              ),
              { href: m, hostname: g, protocol: f, searchParams: S } = l;
            if (x(la, f)) return w(p, Gt), p;
            let C = zn.length && Gl(zn, p, l);
            e.type === 'DOM:script' &&
              ((C = (oc.length && Gl(oc, p, l)) || C), !fn() && !C && w(p, Gt));
            let A = $s.length && vl($s, p, S);
            if (
              (Bt ||
                (h &&
                  !ec &&
                  (d.log(
                    'No tracking purpose map loaded. Attempting to load purpose map synchronously.'
                  ),
                  (ec = !0)),
                Na()),
              Bt)
            ) {
              let E = MS(g);
              if (E) {
                let T = ne(Bt, E);
                u(T, (P) => {
                  (P !== Gt || (!C && !A)) && w(p, P);
                });
              } else dA(p);
            } else
              h && t && d.log('Unable to load purpose maps in time'), dA(p);
            return (
              h &&
                t &&
                (qe(tc, m) || (w(tc, m), d.log(`Purposes for ${m}`, p))),
              jt && o !== null && ee(vn, o, p),
              p
            );
          }),
          i = new U(),
          c = Vo(s, (a) =>
            X(he(a), (p) => {
              var l;
              return (l = ne(Jt, p)) == null ? void 0 : l.essential;
            })
          );
        return (
          u(s, (a) => {
            u(a, (p) => {
              var l;
              (c || !((l = ne(Jt, p)) == null ? void 0 : l.essential)) &&
                w(i, p);
            });
          }),
          i
        );
      },
      Vl = async (e, t = !0) => (
        Bt ||
          (h &&
            !ec &&
            t &&
            (d.log(
              'No tracking purpose map loaded. Attempting to load default purpose map in the background'
            ),
            (ec = !0)),
          await vr()),
        Is(e, t)
      ),
      zl = (e) => {
        var o;
        let t = (o = ne(Jt, e)) == null ? void 0 : o.optOutSignals;
        return !!t && X(t, (r) => un().has(r));
      },
      OS = (e, t) => {
        var o;
        if (!t && zl(e)) return !0;
        for (let r of Yo().values()) {
          let s = (o = _t(bA, ([i]) => x(i, r))) == null ? void 0 : o[1];
          if (s && x(s, e)) return !0;
        }
        return !1;
      },
      Hl = (e, t, o) => {
        if (typeof t == 'boolean') return t;
        let r = st(`${t}`);
        for (let s of cr(r))
          switch (s) {
            case ye:
              return !1;
            case RS:
              if (OS(e, o)) return !1;
              break;
          }
        return t;
      },
      CA = () => {
        var a, p, l, m;
        h &&
          d.log(
            `Network events with unknown purposes are ${
              nc ? 'always allowed' : `${sc ? '' : 'not '}consentable`
            }`
          );
        let e = {
            defaultConsent: 'Auto',
            configurable: !0,
            essential: !1,
            optOutSignals: ['DNT'],
          },
          t = {
            [Gt]: {
              name: Gt,
              description: '',
              defaultConsent: !0,
              configurable: !1,
              essential: !0,
            },
            [Ht]: {
              name: Ht,
              description: '',
              defaultConsent: !1,
              configurable: !1,
              essential: !1,
            },
          },
          o = (a = Ya) == null ? void 0 : a.types;
        o &&
          u(Oe(o), (g) => {
            o[g] = b(b({}, e), o[g]);
          });
        let r = (l = (p = Ya) == null ? void 0 : p.useDefault) != null ? l : !0,
          s = b(
            b(
              {},
              r && {
                Functional: b(
                  {
                    name: 'Functionality',
                    description: 'Personalization, autofilled forms, etc.',
                  },
                  e
                ),
                Analytics: b(
                  {
                    name: 'Analytics + Performance',
                    description:
                      'Help us learn how our site is used and how it performs.',
                  },
                  e
                ),
                Advertising: b(
                  {
                    name: 'Targeting / Advertising',
                    description:
                      'Helps us and others serve ads relevant to you.',
                  },
                  e
                ),
                SaleOfInfo: {
                  name: 'Sale of personal information',
                  description: '',
                  defaultConsent: 'Auto',
                  configurable: !0,
                  essential: !1,
                  optOutSignals: ['GPC', 'DNT'],
                },
              }
            ),
            o
          );
        Bn = y({ useDefault: r, types: b(b({}, s), t) });
        let i = (g, f) => f === 'boolean' || f === 'string',
          c = (m = Ya) == null ? void 0 : m.defaultConsent;
        if (typeof c < 'u') {
          let g = i(c, typeof c)
            ? (() => {
                let f = y();
                return (
                  u(Oe(s), (S) => {
                    f[S] = c;
                  }),
                  f
                );
              })()
            : c;
          u(Oe(g), (f) => {
            var C;
            let S = (C = Bn.types) == null ? void 0 : C[f];
            S
              ? (S.defaultConsent = g[f])
              : me &&
                d.warn(
                  `Default consent specified for unrecognized tracking purpose: ${Ve(
                    f
                  )}`
                );
          });
        }
        Ws && (h && d.log('Using embedded purpose map'), Bl(new xr(Ws))),
          u(Oe(Bn.types), (g) => {
            let f = Bn.types[g],
              { trackingType: S = g } = f;
            (f.showInConsentManager =
              f.configurable &&
              !f.essential &&
              (!ja ||
                X(
                  Hn,
                  ([C, A]) => X(C, (E) => Yo().has(E)) && X(A, (E) => S === E)
                ))),
              w(Fn, g),
              ee(Jt, g, f),
              f.configurable &&
                (ee(
                  pA,
                  g,
                  'defaultConsent' in f ? Hl(g, f.defaultConsent) : !1
                ),
                ee(
                  Ol,
                  g,
                  'defaultConsent' in f ? Hl(g, f.defaultConsent, !0) : !1
                ));
          }),
          ep(Bn),
          u(pA, ([g, f]) => {
            let S = ne(Jt, g);
            (S == null ? void 0 : S.configurable) && (Ja[g] = zl(g) ? !1 : f);
          }),
          (Zt = y(Ja)),
          Fl(),
          u(Jt, ([g]) => {
            if (g === Ht) return;
            let f = ne(Jt, g);
            (f == null ? void 0 : f.showInConsentManager) &&
              !(f == null ? void 0 : f.essential) &&
              (I(gA, g), w(zs, g));
          }),
          (Cn = new xr(ql || y())),
          ql && h && d.log('Using embedded CSP-only purpose map', Cn),
          Gy(Cn),
          go ||
            (q.preloadPurposes === 'sync'
              ? (h && d.log('synchronous purpose map pre-loading enabled'),
                Na())
              : q.preloadPurposes !== ye
              ? vr()
              : h && d.log('purpose map pre-loading disabled'));
      };
    var Wn,
      Qs,
      Ft = class {
        constructor(
          {
            name: t,
            value: o,
            timestamp: r = Ge(),
            expires: s,
            maxAge: i,
            domain: c,
            path: a,
            sameSite: p,
            secure: l,
            persist: m = !0,
            mutator: g = () => ty(this),
          },
          f = !0
        ) {
          Ee(this, Wn, null);
          Ee(this, Qs, void 0);
          k(this, 'name');
          k(this, 'value');
          k(this, 'timestamp');
          k(this, 'expires');
          k(this, 'maxAge');
          k(this, 'domain');
          k(this, 'path');
          k(this, 'secure');
          k(this, 'sameSite');
          k(this, 'persist');
          k(this, 'mutator');
          k(this, 'allow', () => {
            this.allowed = !0;
          });
          k(this, 'deny', () => {
            this.allowed = !1;
          });
          k(this, 'toJSON', () => {
            let {
              name: t,
              value: o,
              timestamp: r,
              expires: s,
              maxAge: i,
              domain: c,
              path: a,
              sameSite: p,
              secure: l,
            } = this;
            return {
              name: `${t}`,
              value: `${o}`,
              timestamp: r,
              expires: s,
              maxAge: i,
              domain: c,
              path: a,
              sameSite: p,
              secure: l,
            };
          });
          let S = typeof s,
            C =
              S !== 'undefined' &&
              s !== null &&
              (S === 'number' ? s : +on(`${s}`));
          (this.name = t),
            (this.value = o),
            (this.timestamp = r),
            typeof C == 'number' && (this.expires = C),
            (this.maxAge = i),
            (this.domain = c),
            (this.path = a),
            (this.sameSite = p),
            (this.secure = l),
            (this.persist = m),
            (this.mutator = g),
            f && Ag(this);
        }
        get purposes() {
          var t;
          return (t = V(this, Wn)) != null ? t : pe(this, Wn, Ms(this));
        }
        set purposes(t) {
          if (!v(U, t))
            throw new xt('PendingCookieMutation.purposes must be a Set');
          let o = V(this, Wn);
          o === null ? pe(this, Wn, (o = new U())) : wt(o),
            u(t, (r) => {
              if (typeof r != 'string')
                throw new xt('Tracking purposes must be strings');
              w(o, r);
            });
        }
        get allowed() {
          var t;
          return (t = V(this, Qs)) != null ? t : Ae(this.purposes, Ko);
        }
        set allowed(t) {
          if (t !== null && typeof t != 'boolean')
            throw new xt(
              'Pending event allow/deny state must be true, false, or null'
            );
          pe(this, Qs, t);
        }
      };
    (Wn = new WeakMap()), (Qs = new WeakMap());
    Me(Ft);
    var Ga = ({
      name: e,
      value: t,
      timestamp: o,
      expires: r,
      maxAge: s,
      domain: i,
      path: c,
      sameSite: a,
      secure: p,
    }) =>
      new Ft({
        name: e,
        value: t,
        timestamp: o,
        expires: r,
        maxAge: s,
        domain: i,
        path: c,
        sameSite: a,
        secure: p,
      });
    var Xl = $a(),
      [LS, DS] = Xl,
      Yl = [
        'name',
        'value',
        'timestamp',
        'expires',
        'domain',
        'path',
        'secure',
        'sameSite',
        'persist',
        'purposes',
        'allowed',
        'toJSON',
      ],
      Es = Un(Yl, !1, Xl),
      NS = We(Yl, 'allow', 'deny'),
      Eg = Un(NS, !0, Xl),
      kS = Ce(Yl, 0, 8),
      hs = (e, t = !0) => {
        let o = Oe(e),
          r = fe(o, (i) => x(kS, i));
        if (r.length < o.length && me) {
          let i = fe(o, (c) => !x(r, c));
          d.warn(
            `The following properties are not allowed and will be ignored: ${Z(
              i,
              ' '
            )}`
          );
        }
        let s = y();
        return (
          u(r, (i) => {
            s[i] = fr(e[i]);
          }),
          Es(new Ft(s, t))
        );
      },
      Jl = (e) => v(Ft, e) || e[LS] === DS;
    var _S = (e, t = 0) => Ve(e, void 0, t),
      OA = (e = y()) => {
        let { endpoint: t, save: o, space: r = o ? 2 : 0, filename: s } = e,
          i = Yt();
        we && wa(we);
        let c = y(
            b(
              {
                version: mn,
                consent: i,
                url: pn(),
                requests: Ye,
                mutations: Ir,
                cookies: gt,
                cookieMutations: ks,
              },
              $t && y({ sentRequests: Mo, setCookies: It })
            )
          ),
          a = _S(c, r);
        if ((o || t) && (t && Tt.sendBeacon(t, a), o)) {
          let p = lo('a'),
            l = new Mu([a], { type: 'application/json' }),
            m = Fd(l);
          n(cs.set, p, m),
            n(
              tf.set,
              p,
              s || `${Ze || 'airgap'} requests (${hf(new ht(Fi))}).json`
            ),
            n(Ci, p),
            n(Ot, R, ti(Bd, oo, m), 1e4);
        }
        return Wr(a);
      };
    var LA = async () => {
      if (!Zl) {
        me && d.warn('getMetadata(): No metadata URL defined');
        return;
      }
      let e = await n(Po, Mn(Zl));
      if (e && e.body) {
        let t = await n(Po, e.text());
        return it(t);
      }
      return ke && d.error('Failed to load remote metadata'), {};
    };
    var At = (e, t) =>
      new si('airgap-block', {
        blockedURI: t,
        documentURI: pn(),
        disposition: 'enforce',
        effectiveDirective: `${e} blocked by Transcend Consent Manager`,
        originalPolicy: '',
        violatedDirective: '',
        statusCode: 0,
      });
    var DA = () => {
      ns &&
        (Zo.prototype.navigate = function (...e) {
          let t = this,
            o = () => H(ns, t, e),
            [r] = e,
            s = new F({ type: 'navigation', url: r, mutator: o, persist: !1 }),
            i = `${s.serialize()}`;
          if ((`${r}` !== i && (e[0] = i), !z(s)))
            throw ((s.mutator = o), Y(s), At('navigation.navigate()', r));
          return o();
        });
    };
    var NA = () => {
      R.open = function (...e) {
        let [t] = e,
          o = this,
          r = new F({ type: 'navigation', url: t, persist: !1 }),
          s = () => {
            let i = r.serialize();
            return `${t}` != `${i}` && (e[0] = i), H(_u, o, e);
          };
        if (z(r)) return s();
        throw ((r.mutator = s), Y(r), At('window.open()', t));
      };
    };
    var wS = () => {
        NA(), Zo && DA();
      },
      US = () => {
        if (!Zo) return;
        let e = Io(zu.prototype),
          t = Io(Wu.prototype);
        n(addEventListener, Lc, 'navigate', (o) => {
          let { destination: r, info: s } = e(o, 'destination', 'info'),
            { url: i } = t(r, 'url'),
            c = new F({ type: 'navigation', url: i, persist: !1 }),
            a = c.serialize(),
            { allowed: p } = c;
          if (!p || `${a}` != `${i}`) {
            n(vi, o);
            let l = () => n(ns, Lc, a, { info: s });
            if (p) {
              l();
              return;
            }
            (c.mutator = l), Y(c);
          }
        }),
          d.log('Navigation control initialized');
      },
      kA = () => {
        wS(), US();
      };
    var _A = () => {
      gc &&
        (R.EventSource = class extends gc {
          constructor(...e) {
            let [t] = e,
              o = new F({
                type: 'eventsource',
                url: t,
                omitCredentials() {
                  var s, i;
                  return (
                    (((s = e[1]) != null ? s : (e[1] = y())).withCredentials =
                      !1),
                    (((i = this.requestInit) != null
                      ? i
                      : (this.requestInit = y())
                    ).credentials = 'omit'),
                    !0
                  );
                },
              }),
              r = o.serialize();
            if (z(o)) {
              `${r}` != `${t}` && (e[0] = r);
              super(...e);
            } else throw At('EventSource connection', r);
          }
        });
    };
    var wA = () => {
      rs &&
        (Tt.sendBeacon = (...e) => {
          let t = () => H(rs, Tt, e);
          if (e.length) {
            let [o, r] = e,
              s = new F(
                b(
                  { type: 'beacon', url: o, mutator: t, persist: !0 },
                  r !== null &&
                    typeof r < 'u' &&
                    y({ requestInit: y({ method: 'POST', body: r }) })
                )
              ),
              i = `${s.serialize()}`;
            if ((`${o}` !== i && (e[0] = i), !z(s))) return Y(s), !1;
          }
          return t();
        });
    };
    var UA = () => {
      if (ri) {
        let { register: e } = ri.prototype;
        ri.prototype.register = function (...t) {
          let [o] = t,
            r = new F({ type: 'worker', url: o }),
            s = r.serialize();
          if ((`${o}` != `${s}` && (t[0] = s), z(r))) return H(e, this, t);
          throw At('Service Worker registration', s);
        };
      }
    };
    var GA = () => {
      yc &&
        (R.SharedWorker = class extends yc {
          constructor(...e) {
            let [t] = e,
              o = new F({
                type: 'worker',
                url: t,
                omitCredentials() {
                  var i;
                  let s = e[1];
                  return (
                    typeof s != 'object' &&
                      (s = y(
                        b(
                          { credentials: 'omit' },
                          typeof s == 'string' && y({ name: s })
                        )
                      )),
                    (e[1] = s),
                    (((i = this.requestInit) != null
                      ? i
                      : (this.requestInit = y())
                    ).credentials = 'omit'),
                    !0
                  );
                },
              }),
              r = o.serialize();
            if (z(o)) {
              `${r}` != `${t}` && (e[0] = r);
              super(...e);
            } else throw At('SharedWorker', r);
          }
        });
    };
    var HA = () => {
      R.WebSocket = class extends Cu {
        constructor(...e) {
          let [t] = e,
            o = new F({ type: 'websocket', url: t }),
            r = o.serialize();
          if (z(o)) {
            `${r}` != `${t}` && (e[0] = r);
            super(...e);
          } else throw At('WebSocket connection', r);
        }
      };
    };
    var qA = () => {
      R.Worker = class extends bu {
        constructor(...e) {
          let t = `${e[0]}`,
            o = new F({
              type: 'worker',
              url: t,
              omitCredentials() {
                var s, i;
                return (
                  (((i = e[1]) != null
                    ? i
                    : (e[1] =
                        (s = this.requestInit) != null
                          ? s
                          : (this.requestInit = y()))
                  ).credentials = 'omit'),
                  !0
                );
              },
            }),
            r = o.serialize();
          if (z(o)) {
            `${r}` != `${t}` && (e[0] = r);
            super(...e);
          } else throw At('Worker', r);
        }
      };
    };
    var FA = () => {
      if (yi) {
        let { addModule: e } = yi.prototype;
        yi.prototype.addModule = async function (...t) {
          let [o] = t,
            r = 'worker',
            s = function () {
              var a, p;
              return (
                (((p = t[1]) != null
                  ? p
                  : (t[1] =
                      (a = this.requestInit) != null
                        ? a
                        : (this.requestInit = y()))
                ).credentials = 'omit'),
                !0
              );
            },
            i = () => {
              let a = c.serialize();
              return `${o}` != `${a}` && (t[0] = a), H(e, this, t);
            },
            c = new F({ type: 'worker', url: o, omitCredentials: s });
          return (await Rr(c))
            ? i()
            : new ue((a) => {
                let p = () => {
                  a(i());
                };
                Y(new F({ type: r, url: o, mutator: p, omitCredentials: s }));
              });
        };
      }
    };
    var BA = () => {
      iy(), wA(), UA(), GA(), HA(), qA(), Fy(), FA(), _A();
    };
    var VA = [];
    var zA = [];
    var WA = async (e = !0) => {
        il(),
          h && wt(tc),
          _e && Sn(),
          !xo && e && (await Fo(Xt({ sync: ['events'], reset: !0 })));
      },
      $A = async (e) =>
        Kt(e)
          ? (await WA(), h && d.log(`${ft} caches have been cleared`), !0)
          : (ke && d.error(Co('clear')), !1),
      eu = async (e) => {
        let t = typeof e == 'boolean',
          { autoReload: o = !0, autoSync: r = !0 } = t
            ? y({ autoReload: e, autoSync: e })
            : e || y();
        return (
          await WA(!1),
          Zy(),
          await AA(!1),
          !xo && r && (await Fo(Xt({ reset: !0 }))),
          h && d.log(`${ft} data has been reset`),
          o && Qr(),
          !0
        );
      },
      KA = async (e, t) => (Kt(e) ? eu(t) : (ke && d.error(Co('reset')), !1));
    var {
        privacyPolicy: GS,
        firstParty: HS = '',
        xdiAllowed: qS = GS || '',
      } = q,
      { syncGroups: QA, xdiCommonEndpoint: fN = ka } = q,
      jA = M(ds(HS), (e) => ce(e, 'origin', 'hostname')),
      XA = QA ? new oa(it(QA)) : null,
      YA = M(ds(qS), (e) => ce(e, 'hostname').hostname);
    var js = Zi('Transcend XDI', mr);
    var JA = (e, t, o) => {
      var s, i;
      let r = !1;
      if (e) {
        let c = R.transcend,
          { readyQueue: a = [] } = t;
        if (typeof allowedHosts < 'u' && re(allowedHosts)) {
          let { hostname: p, port: l } = Ao;
          if (!$o(allowedHosts, p, l))
            throw new Le(`This build of Transcend XDI cannot run on ${Bo}`);
        }
        a && h && js.log('transcend.xdi.ready() queue = [', a, ']'),
          c ? (c.xdi = t) : (R.transcend = y(Re(b({}, c), { xdi: t }))),
          o && (t.host = (...p) => ((r = !0), H(o, t, p))),
          u(a, (p) => {
            try {
              p(t);
            } catch (l) {
              mo(l);
            }
          }),
          delete t.host,
          Ke(a);
      }
      o &&
        R !== oi &&
        (YA.length ||
          jA.length ||
          ((i = (s = XA) == null ? void 0 : s.hosts) == null
            ? void 0
            : i.length)) &&
        !r &&
        o(),
        je && io(je);
    };
    var ZA = !1,
      { xdiConnectTimeout: BS = 3e4 } = q,
      VS = 0,
      tu = (e, t = +BS) => {
        if (typeof e != 'string') throw new Le('XDI endpoint unspecified');
        let o = `${VS++}`,
          r = ze(e, 'href', 'origin', 'hash'),
          { origin: s, href: i } = r;
        return (
          h && js.log(`Connecting to endpoint: ${i}`),
          new ue((c, a) => {
            let p = 0,
              l = lo('iframe'),
              m =
                t &&
                n(
                  Ot,
                  R,
                  () => {
                    a(new Le(`XDI connection to ${i} timed out.`));
                  },
                  t
                ),
              g = ({ ports: [C], origin: A, data: E }) => {
                if (!E) return;
                let {
                  id: T,
                  ready: P,
                  'transcend-xdi': N,
                  commands: j = new U(),
                } = E;
                if (!(+N >= 1 && P) || o !== T || !C) return;
                if (A !== s) {
                  me && js.warn(`Connection attempt from ${A} refused`);
                  return;
                }
                n(Nt, R, 'message', g), m && n(_r, R, m);
                let W = new Q(),
                  $ = ({ data: Ue }) => {
                    if (!Ue) return;
                    let { id: at, error: Et, results: oe } = Ue;
                    if (le(W, at)) {
                      let [se, ie] = ne(W, at);
                      Et ? ie(new Le(Et)) : se(oe);
                    }
                  };
                n(ae, C, 'message', $), n(Im, C);
                let Fe = (Ue) =>
                  new ue((...at) => {
                    ee(W, Ue, at);
                  });
                c({
                  commands: j,
                  run: (Ue, at, Et) => {
                    let oe = p++,
                      se =
                        rr(Et) &&
                        n(
                          Ot,
                          R,
                          () => {
                            a(new Le(`Request sent to ${A} timed out.`));
                          },
                          Et
                        ),
                      ie = n(zr, Fe(oe), (Be) => (se && n(_r, R, se), Be));
                    return n(Rm, C, { id: oe, command: Ue, options: at }), ie;
                  },
                  close: () => {
                    n(Nt, C, 'message', $), n(Cm, C), io(l);
                  },
                });
              };
            n(ae, R, 'message', g),
              (l.style.display = 'none'),
              (l.width = l.height = '0');
            let f = new ut();
            'ancestorOrigins' in Ao ||
              n(zt, f, 'xdi-client-origin', s, n(wr, R, Bo)),
              n(zt, f, 'xdi-channel-id', o),
              Sp(r, f),
              n(Zd.set, l, r.href);
            let S = n(Xe, J);
            n(Zn, S, l);
          })
        );
      },
      eE,
      tE;
    if (ZA) {
      let e = Re(
        b(
          { readyQueue: [] },
          (tE = (eE = R) == null ? void 0 : eE.transcend) == null
            ? void 0
            : tE.xdi
        ),
        {
          ready(t) {
            t(e);
          },
          connect: tu,
        }
      );
      JA(ZA, e);
    }
    var nE = [],
      zS = (e, ...t) =>
        new ue((o, r) => {
          let s = (i) => {
            r(i);
          };
          if (ic) {
            h && d.log(`Loading Transcend XDI from ${ic}`);
            let i = lo('script');
            Ki(q, i),
              (i.crossOrigin = 'anonymous'),
              (i.src = ic),
              n(ae, i, 'error', s, { once: !0 }),
              I(nE, (a) => {
                n(Nt, i, 'error', s), o(H(a[e], a, t));
              }),
              fa(i);
          } else
            r(new Le('Unable to determine Transcend XDI module location.'));
        }),
      WS = ti(zS, null, 'host'),
      oE,
      rE,
      ou = Re(
        b(
          {
            ready: (e) => {
              e(ou);
            },
            readyQueue: nE,
          },
          (rE = (oE = R) == null ? void 0 : oE.transcend) == null
            ? void 0
            : rE.xdi
        ),
        { connect: tu }
      ),
      sE = () => {
        R !== oi && (da.length || og || rg) && WS();
      };
    var { airgap: O, transcend: Cl } = R;
    if (
      (O == null ? void 0 : O.initialized) &&
      (O == null ? void 0 : O[or]) === ft
    )
      throw new Le('airgap.js is already initialized');
    var Ks = !1,
      Va = !1,
      Sr,
      Ts,
      Ds,
      iE = O == null ? void 0 : O.macroregions,
      $y = M(re(iE) ? iE : Gf, ([e, t]) => [e, xe(t, ' ')]),
      aE = O == null ? void 0 : O.regionRegimesMap,
      Ky = re(aE) ? aE : qf,
      cE = O == null ? void 0 : O.regimePurposeOptOuts,
      bA = re(cE) ? cE : Ff,
      pE = O == null ? void 0 : O.regimePurposeScopes,
      ja = q.regimePurposeScopes !== ye,
      Hn = re(pE) ? pE : Hf,
      $S = Il(Hn),
      MA = !mt($S),
      Wl = q.autoReload !== ye,
      Vs = q.syncXhr !== ye,
      Ya = O == null ? void 0 : O.purposes,
      { unknownRequestPolicy: nu, unknownCookiePolicy: su, autoExpire: KS } = q,
      nc = !gn && (!nu || nu === 'allow'),
      sc = !gn && (nc || nu === 'require-full-consent'),
      $l = !su || su === 'allow',
      xA = $l || su === 'require-full-consent',
      Kl = q.disableWhenConsented === qt,
      { search: EE, href: iu } = dn,
      gE,
      lE =
        (gE = q.ui === ye ? !1 : q.ui) != null ? gE : O == null ? void 0 : O.ui,
      QS = q.lazyLoadUi === qt,
      yE,
      uE = (yE = q.xdi) != null ? yE : O == null ? void 0 : O.xdi,
      ic = uE && ce(et(`${uE}${EE}`, iu), 'href').href,
      mE = O == null ? void 0 : O.metadata,
      Zl = mE && ce(et(mE, iu), 'href').href,
      nA = O == null ? void 0 : O.id,
      Ws = O == null ? void 0 : O.purposeMap,
      ql = O == null ? void 0 : O.csp,
      oy = O == null ? void 0 : O.cookies,
      $p = O == null ? void 0 : O.watchers,
      Pa = O == null ? void 0 : O.overrides,
      ha = O == null ? void 0 : O.cookieOverrides,
      AE,
      $n = $e((AE = q.replay) != null ? AE : ''),
      ac = ['requests', 'mutations', 'cookies'],
      cc =
        !$n || x(ua, $n) ? ac : $n === ye ? [] : ge(/\s|,/, $n) ? st($n) : [$n],
      yt = x(cc, ac[0]),
      Cr = x(cc, ac[1]),
      Ct = x(cc, ac[2]);
    Ke(cc);
    var $s = [],
      au = ({ matcher: e, purposes: t = [], regex: o = !1 }, r, s = $s) => {
        if (s && typeof e == 'string' && Pt(e, '?'))
          for (let [i, c] of n(nr, new ut(e))) {
            I(
              s,
              y({
                param: i,
                value: c === '' ? null : c,
                purposes: Te(t),
                source: e,
              })
            );
            break;
          }
        else
          I(
            r,
            y({
              matcher: o && typeof e == 'string' ? new no(e) : e,
              purposes: Te(t),
            })
          );
      },
      jS = O == null ? void 0 : O.regulatedPaths,
      zn = [];
    u(We(VA, jS || []), (e) => {
      au(e, zn);
    });
    var XS = O == null ? void 0 : O.regulatedScripts,
      oc = [];
    u(We(zA, We(XS || [])), (e) => {
      au(e, oc);
    });
    var dE = O == null ? void 0 : O.omitCredentials,
      Ql = [];
    re(dE) &&
      u(dE, (e) => {
        au(e, Ql, !1);
      });
    var {
        requests: Ll = [],
        cookies: Dl = [],
        errors: Nl = [],
        requestConditions: kl = [],
      } = (O == null ? void 0 : O.suppressTelemetry) || y(),
      sA = kl.length,
      iA = Ll.length,
      aA = Dl.length,
      cA = Nl.length,
      Xs = q.protect,
      hE = () => {
        if (!(uo && ge(/^(?:app|sync)\.transcend\.io$/, Ze))) {
          if (typeof allowedHosts < 'u' && re(allowedHosts)) {
            let { port: e } = Ao;
            if (!$o(allowedHosts, Ze, e))
              throw new Le(
                `Transcend Consent Manager Error: This build of Transcend Consent Manager cannot run on ${Bo}! If you are the website owner, try adding this domain to your domain list: https://app.transcend.io/consent-manager/developer-settings`
              );
          }
          if (
            (h &&
              d.tag('Transcend', () => {
                d.groupCollapsed('Initializing airgap.js core');
              }),
            Rt && me && d.warn('Report-only mode enabled'),
            me && ya && d.warn('Privileged API authorization checks disabled'),
            h)
          ) {
            let e = [];
            yt || I(e, 'requests'),
              Cr || I(e, 'mutations'),
              Ct || I(e, 'cookies'),
              d.log(
                `Smart Quarantine replay ${
                  e.length ? `disabled for ${Z(e, ', ')}` : 'enabled'
                }`
              ),
              Vs || d.log('Synchronous XHR disabled'),
              Wl || d.log('Auto-reload disabled');
          }
          sE(), jl(), jg();
        }
      },
      Ns = Re(
        b(
          {
            readyQueue: [],
            ready(e) {
              I(this.readyQueue, e);
            },
          },
          Cl
        ),
        { xdi: ou, [or]: 'Transcend' }
      );
    u(
      We(
        M(['autoShow', 'show', 'hide', 'toggle'], (e) => `${e}ConsentManager`),
        'doNotSell'
      ),
      (e) => {
        Ns[e] = (...t) =>
          new ue((o) => {
            var r, s;
            (s = (r = R) == null ? void 0 : r.transcend) == null ||
              s.ready(async (i) => {
                await H(i[e], i, t), o();
              }),
              SE();
          });
      }
    );
    var cu = !1,
      TE = () => {
        h && d.groupEnd(), d.tag('Consent Manager'), fy();
        let { prompt: e } = q;
        if (e && e !== ye && e !== '0') {
          let t = e === 'auto' ? 1 : +e;
          Ml(t, ve ? 1 / 0 : t) && Ns.autoShowConsentManager();
        } else ve && Ml();
        wf() && eu(), (cu = !0);
      },
      dl = () => {
        Va ||
          ((Va = !0),
          Ug(),
          Mg(),
          Ws
            ? sy()
            : n(zr, tl(), () => {
                cu || TE();
              }),
          BA(),
          !Xs || Xs === qt || Xs === 'document'
            ? Ba(document)
            : Xs === ye
            ? h && d.log('DOM protection disabled')
            : u(wi(document, Xs), (e) => {
                Ba(e);
              }),
          h && d.log.styled(fs, 'Request regulation active'));
      },
      ru,
      SE = () =>
        ru != null
          ? ru
          : (ru = new ue((e, t) => {
              if (!lE || uo) {
                e();
                return;
              }
              let o = ce(et(`${lE}${EE}`, iu), 'href').href;
              h && d.log(`Loading consent manager UI from ${o}`);
              let r = lo('script');
              Ki(q, r),
                (r.async = !0),
                (r.defer = !0),
                (r.crossOrigin = 'anonymous'),
                (r.src = o);
              let s = () => {
                  var c, a, p;
                  (p =
                    (a = (c = R) == null ? void 0 : c.transcend) == null
                      ? void 0
                      : a.ready) == null ||
                    p.call(a, () => {
                      e(), n(Nt, r, 'error', i);
                    });
                },
                i = () => {
                  t(), n(Nt, r, 'load', s);
                };
              n(ae, r, 'load', s, { once: !0 }), n(ae, r, 'error', i), fa(r);
            })),
      fE = !1,
      jl = () => {
        if (fE) return;
        if (
          ((fE = !0),
          CA(),
          h &&
            (d.log('Current tracking consent preferences', Yt().purposes),
            we && d.log(`Quarantined requests expire after ${KS} minutes.`)),
          ve)
        ) {
          let o = tA(ys, +eg, +Zf, +tg, sg, gs);
          (Sr = o.logRequestStats), (Ts = o.logCookieStats), (Ds = o.logError);
        }
        _e && Fg(),
          Kl && sc && Ae(Fn)
            ? ((Ks = !0),
              h &&
                d.log.styled(
                  [fs, ''],
                  'All tracking purposes are consented and unknown events are allowed. Event regulation disabled with %cdisable-when-fully-consented="on"%c option'
                ))
            : ((Ks = !1), cg && dl(), pg && Zg(), lg && kA()),
          (R.transcend = Ns);
        let { readyQueue: e = [] } = O || y(),
          t = hl;
        (t.ready = (o) => {
          o(t);
        }),
          (t.loadPurposeMap = vr),
          (t.getMetadata = LA),
          (t.getPurposes = (o, r = !0) => Vl(Er({ type: ft, url: o }, r))),
          (t.getRequestPurposes = (o, r = !0) => Vl(Al(o) ? o : Er(o, r), !1)),
          (t.getCookiePurposes = (o, r = !0) => ey(Jl(o) ? o : hs(o, r), !1)),
          (t.isAllowed = (o, r = !0) => Rr(Er({ type: ft, url: o }, r), !1)),
          (t.isCookieAllowed = (o, r = !0) => Oa(Jl(o) ? o : hs(o, r), !1)),
          (t.isRequestAllowed = (o, r = !0) => Rr(Al(o) ? o : Er(o, r), !1)),
          (t.getRegimePurposes = (o) => Il(Hn, o)),
          (t.getConsent = Yt),
          (t.setConsent = rc),
          (t.optIn = SA),
          (t.optOut = PA),
          (t.isOptedIn = EA),
          (t.isOptedOut = hA),
          (t.getPurposeTypes = yA),
          (t.getRegimes = () => Te(Yo())),
          (t.getPrivacySignals = () => Te(un())),
          (t.override = xg),
          (t.overrideCookies = yg),
          (t.watch = Gg),
          (t.watchCookies = hg),
          (t.activateCSP = tl),
          (t.protect = Ba),
          (t.reset = KA),
          (t.resolve = Og),
          (t.sync = Xt),
          (t.clear = $A),
          (t.regulateAllScripts = dg),
          (t.areAllScriptsRegulated = fn),
          (t.export = OA),
          (t.version = mn),
          (t.loadOptions = q),
          (t.addEventListener = ae),
          (t.initialized = !0),
          Mt(t),
          be(R, 'airgap', { value: t, configurable: !1, enumerable: !1 }),
          e &&
            (h && d.log('airgap.ready() queue = [', e, ']'),
            u(e, (o) => {
              try {
                o(t);
              } catch (r) {
                mo(r);
              }
            }),
            Ke(e)),
          QS || SE(),
          je && io(je),
          !cu && (!gn || Ws || Ks) && TE();
      };
    hE();
  })();
})();
