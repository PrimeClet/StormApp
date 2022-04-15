import locale77427e78 from '../..\\lang\\en.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: true,
  locales: [{"name":"English","code":"en","file":"en.js","iso":"en"},{"name":"Français","code":"fr","file":"fr.js","iso":"fr"},{"name":"Hausa","code":"ha","file":"ha.js","iso":"ha"},{"name":"Português","code":"pt","file":"pt.js","iso":"pt"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix",
  lazy: true,
  langDir: "G:\\BOULOT\\ODAYYY\\Blog\\Blog\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: true,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  silentTranslationWarn: false,
  silentFallbackWarn: true,
  normalizedLocales: [{"name":"English","code":"en","file":"en.js","iso":"en"},{"name":"Français","code":"fr","file":"fr.js","iso":"fr"},{"name":"Hausa","code":"ha","file":"ha.js","iso":"ha"},{"name":"Português","code":"pt","file":"pt.js","iso":"pt"}],
  localeCodes: ["en","fr","ha","pt"],
}

export const localeMessages = {
  'en.js': () => Promise.resolve(locale77427e78),
  'fr.js': () => import('../..\\lang\\fr.js' /* webpackChunkName: "lang-fr.js" */),
  'ha.js': () => import('../..\\lang\\ha.js' /* webpackChunkName: "lang-ha.js" */),
  'pt.js': () => import('../..\\lang\\pt.js' /* webpackChunkName: "lang-pt.js" */),
}
