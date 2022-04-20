export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: '~/components/splash.vue',
  ssr: false,
  target: 'static',
  generate:{
    fallback: true
  },

  head: {
    title: 'Odaaay',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is very useful for adding a default title and description tag for SEO purposes or for setting the viewport or adding the favicon.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css' },

    ],
    script: [

      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",
        type: "text/javascript"
      },
      {
        src: "https://js.pusher.com/7.0/pusher.min.js",
        type: "text/javascript",
        ssr: false
      },
      {
        src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js",
        type: "text/javascript"
      },
      // {
      //   src: "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css",
      //   type: "text/javascript"
      // },
      {
        src: "https://cdn.ckeditor.com/ckeditor5/30.0.0/balloon/ckeditor.js",
        type: "text/javascript"
      },

      '~/assets/js/collapse.js',
      '~/assets/bootstrap/js/bootstrap.bundle.min.js',
      '~/assets/sidebar/js/main.js',

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/bootstrap/css/bootstrap.min.css',
    '~/assets/sidebar/css/style.css',
    '~/assets/css/style.css',
    '~/assets/css/main.css',
    '~/assets/Roboto/stylesheet.css'


  ],
  script: [

    {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",
      type: "text/javascript"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js",
      type: "text/javascript"
    },
    {
      src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
      type: "text/javascript"
    },

    '~/assets/js/collapse.js',
    '~/assets/bootstrap/js/bootstrap.bundle.min.js'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/slider.js', ssr: false },
    {src: '~/plugins/vue-clap-button.js', ssr: false},
    {src: '~/plugins/vue-select.js', ssr: false},
    {src: '~/plugins/vue-notification.js', ssr: false},
    {src: '~/plugins/vue-social-sharing.js', ssr: false},
    {src: '~/plugins/vue-cropper.js', ssr: false},
    {src: '~/plugins/localStorage.js', ssr: false},
    {src: '~/plugins/vue2-scrollspy.js', ssr: false},
    {src: '~/plugins/country-code-input.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  // Axios Api URL config
  axios: {
    baseURL: 'http://localhost:8000/api/v1/',
    browserBaseURL: 'https://odaaay.com/api/v1/',
    retry: {
      retries: 5
    },
    https: true,
    progress: false
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Simple usage
    'cookie-universal-nuxt',
    // https://go.nuxtjs.dev/sitemap
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/robots
    '@nuxtjs/robots',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'English',
            code: 'en',
            file: 'en.js',
            iso: 'en', // Will be used as catchall locale by default
          },
          {
            name: 'Français',
            code: 'fr',
            file: 'fr.js',
            iso: 'fr',
          },
          {
            name: 'Hausa',
            code: 'ha',
            file: 'ha.js',
            iso: 'ha',
          },
          {
            name: 'Português',
            code: 'pt',
            file: 'pt.js',
            iso: 'pt',
          },
        ],
        strategy: 'prefix',
        defaultLocale: 'en',
        vueI18nLoader: true,
        seo: true,
        lazy: true,
        langDir: 'lang/',
        silentTranslationWarn: process.env.NODE_ENV === 'production',
        silentFallbackWarn: true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
        },
        vueI18n: {
          fallbackLocale: 'en',
        },
      },
    ],
  ],

  robots: [
    {
      UserAgent: '*',
      Disallow: '/profile',
    },
    {
      UserAgent: '*',
      Allow: '/about',
    },
    {
      UserAgent: '*',
      Allow: '/',
    },
    {
      UserAgent: '*',
      Allow: '/login',
    },
    {
      UserAgent: '*',
      Allow: '/signup',
    },
    {
      UserAgent: '*',
      Allow: '/agreement',
    },
    {
      UserAgent: '*',
      Allow: '/policy',
    },
    {
      UserAgent: '*',
      Allow: '/guide',
    },
    {
      UserAgent: '*',
      Sitemap: 'https://odaaay.com/sitemap.xml',
    },
  ],

  sitemap: {
    hostname: 'https://www.odaaay.com',
    i18n: {
      locales: ['en', 'pt', 'fr', 'ha', 'es'],
      routesNameSeparator: '___',
    },
    exclude: [
      '/profile',
    ],
    routes: [
      '/',
      '/about',
      '/agreement',
      '/policy',
      '/guide',
      '/login',
      '/signup',
      {
        url: '/article',
        changefreq: 'daily',
        priority: 1,
      },
    ],
  },

  pwa: {
    meta: {
      /* meta options */
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      favicon: true,
      name: 'Odaaay',
      author: 'Odaaay',
      description:
        'Odaaay is the easiest way to monetize your skills and stay in touch with your community. Create communities and let the magic happen.',
      theme_color: 'black',
      lang: 'en',
      ogType: 'website',
      ogSiteName: 'Odaaay',
      ogTitle: 'Odaaay',
      ogDescription:
        'Odaaay is the easiest way to monetize your skills and stay in touch with your community. Create communities and let the magic happen.',
      ogImage: '',
      ogUrl: '',
      twitterCard: '',
      twitterSite: '',
      twitterCreator: '',
      nativeUI: true,
    },
    manifest: {
      name: 'Odaaay',
      lang: 'en',
      description:
        'Odaaay is the easiest way to monetize your skills and stay in touch with your community. Create communities and let the magic happen.',
      display: 'standalone',
      start_url: '/',
      theme_color: 'black',
      short_name: 'Odaaay',
    },
    workbox: {
      /* workbox options */
      dev: false,
      autoRegister: 'enabled',
      offlineStrategy: 'StaleWhileRevalidate',
    },
  },

  buildModules: ['@nuxtjs/color-mode'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js')
    },
    babel: { compact: true }

  }
}
