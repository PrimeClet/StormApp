import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_65f41a18 from 'nuxt_plugin_plugin_65f41a18' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_71fc656a from 'nuxt_plugin_bootstrapvue_71fc656a' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_pluginutils_d2084cda from 'nuxt_plugin_pluginutils_d2084cda' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_f209d4b2 from 'nuxt_plugin_pluginseo_f209d4b2' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_7d6c4e1e from 'nuxt_plugin_pluginrouting_7d6c4e1e' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_13f68211 from 'nuxt_plugin_pluginmain_13f68211' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_pluginclient_430aaece from 'nuxt_plugin_pluginclient_430aaece' // Source: .\\content\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_ae77bf54 from 'nuxt_plugin_pluginserver_ae77bf54' // Source: .\\content\\plugin.server.js (mode: 'server')
import nuxt_plugin_cookieuniversalnuxt_22a8883a from 'nuxt_plugin_cookieuniversalnuxt_22a8883a' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_workbox_bb6676d2 from 'nuxt_plugin_workbox_bb6676d2' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_06dd9bd2 from 'nuxt_plugin_metaplugin_06dd9bd2' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_0138d78b from 'nuxt_plugin_iconplugin_0138d78b' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_e6a01b8a from 'nuxt_plugin_axios_e6a01b8a' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_pluginserver_292bf24e from 'nuxt_plugin_pluginserver_292bf24e' // Source: .\\color-mode\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_791afe74 from 'nuxt_plugin_pluginclient_791afe74' // Source: .\\color-mode\\plugin.client.js (mode: 'client')
import nuxt_plugin_slider_4064f2c0 from 'nuxt_plugin_slider_4064f2c0' // Source: ..\\plugins\\slider.js (mode: 'client')
import nuxt_plugin_vueclapbutton_7a1e9526 from 'nuxt_plugin_vueclapbutton_7a1e9526' // Source: ..\\plugins\\vue-clap-button.js (mode: 'client')
import nuxt_plugin_vueselect_af0f7784 from 'nuxt_plugin_vueselect_af0f7784' // Source: ..\\plugins\\vue-select.js (mode: 'client')
import nuxt_plugin_vuenotification_435fd7af from 'nuxt_plugin_vuenotification_435fd7af' // Source: ..\\plugins\\vue-notification.js (mode: 'client')
import nuxt_plugin_vuesocialsharing_216967be from 'nuxt_plugin_vuesocialsharing_216967be' // Source: ..\\plugins\\vue-social-sharing.js (mode: 'client')
import nuxt_plugin_vuecropper_3c748de7 from 'nuxt_plugin_vuecropper_3c748de7' // Source: ..\\plugins\\vue-cropper.js (mode: 'client')
import nuxt_plugin_localStorage_830ec59e from 'nuxt_plugin_localStorage_830ec59e' // Source: ..\\plugins\\localStorage.js (mode: 'client')
import nuxt_plugin_vue2scrollspy_6b40505a from 'nuxt_plugin_vue2scrollspy_6b40505a' // Source: ..\\plugins\\vue2-scrollspy.js (mode: 'client')
import nuxt_plugin_countrycodeinput_27729a20 from 'nuxt_plugin_countrycodeinput_27729a20' // Source: ..\\plugins\\country-code-input.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Odaaay","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"This is very useful for adding a default title and description tag for SEO purposes or for setting the viewport or adding the favicon."}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.13.0\u002Fcss\u002Fall.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fbootstrap@5.0.0-beta2\u002Fdist\u002Fcss\u002Fbootstrap.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Funpkg.com\u002Fvue-multiselect@2.1.0\u002Fdist\u002Fvue-multiselect.min.css"}],"script":[{"src":"https:\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fjquery\u002F1.11.3\u002Fjquery.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fjs.pusher.com\u002F7.0\u002Fpusher.min.js","type":"text\u002Fjavascript","ssr":false},{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@popperjs\u002Fcore@2.6.0\u002Fdist\u002Fumd\u002Fpopper.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fbootstrap@5.0.0-beta2\u002Fdist\u002Fjs\u002Fbootstrap.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fcdn.ckeditor.com\u002Fckeditor5\u002F30.0.0\u002Fballoon\u002Fckeditor.js","type":"text\u002Fjavascript"},"~\u002Fassets\u002Fjs\u002Fcollapse.js","~\u002Fassets\u002Fbootstrap\u002Fjs\u002Fbootstrap.bundle.min.js","~\u002Fassets\u002Fsidebar\u002Fjs\u002Fmain.js"],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_65f41a18 === 'function') {
    await nuxt_plugin_plugin_65f41a18(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_71fc656a === 'function') {
    await nuxt_plugin_bootstrapvue_71fc656a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_d2084cda === 'function') {
    await nuxt_plugin_pluginutils_d2084cda(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_f209d4b2 === 'function') {
    await nuxt_plugin_pluginseo_f209d4b2(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_7d6c4e1e === 'function') {
    await nuxt_plugin_pluginrouting_7d6c4e1e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_13f68211 === 'function') {
    await nuxt_plugin_pluginmain_13f68211(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_430aaece === 'function') {
    await nuxt_plugin_pluginclient_430aaece(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_ae77bf54 === 'function') {
    await nuxt_plugin_pluginserver_ae77bf54(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_22a8883a === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_22a8883a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_bb6676d2 === 'function') {
    await nuxt_plugin_workbox_bb6676d2(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_06dd9bd2 === 'function') {
    await nuxt_plugin_metaplugin_06dd9bd2(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_0138d78b === 'function') {
    await nuxt_plugin_iconplugin_0138d78b(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_e6a01b8a === 'function') {
    await nuxt_plugin_axios_e6a01b8a(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_292bf24e === 'function') {
    await nuxt_plugin_pluginserver_292bf24e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_791afe74 === 'function') {
    await nuxt_plugin_pluginclient_791afe74(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_slider_4064f2c0 === 'function') {
    await nuxt_plugin_slider_4064f2c0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueclapbutton_7a1e9526 === 'function') {
    await nuxt_plugin_vueclapbutton_7a1e9526(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueselect_af0f7784 === 'function') {
    await nuxt_plugin_vueselect_af0f7784(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuenotification_435fd7af === 'function') {
    await nuxt_plugin_vuenotification_435fd7af(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuesocialsharing_216967be === 'function') {
    await nuxt_plugin_vuesocialsharing_216967be(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuecropper_3c748de7 === 'function') {
    await nuxt_plugin_vuecropper_3c748de7(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_localStorage_830ec59e === 'function') {
    await nuxt_plugin_localStorage_830ec59e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vue2scrollspy_6b40505a === 'function') {
    await nuxt_plugin_vue2scrollspy_6b40505a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_countrycodeinput_27729a20 === 'function') {
    await nuxt_plugin_countrycodeinput_27729a20(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
