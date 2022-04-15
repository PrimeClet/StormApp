import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ea077f2e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6b4465a4 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _979413be = () => interopDefault(import('..\\pages\\agreement.vue' /* webpackChunkName: "pages/agreement" */))
const _d5d54f2a = () => interopDefault(import('..\\pages\\conPolicy.vue' /* webpackChunkName: "pages/conPolicy" */))
const _7155aa80 = () => interopDefault(import('..\\pages\\creators.vue' /* webpackChunkName: "pages/creators" */))
const _49befe04 = () => interopDefault(import('..\\pages\\delete-account.vue' /* webpackChunkName: "pages/delete-account" */))
const _4b9d546d = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _a77e8d20 = () => interopDefault(import('..\\pages\\initi.vue' /* webpackChunkName: "pages/initi" */))
const _54a3e380 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3f4bc160 = () => interopDefault(import('..\\pages\\priPolicy.vue' /* webpackChunkName: "pages/priPolicy" */))
const _93344c00 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _2649f581 = () => interopDefault(import('..\\pages\\resetpassword.vue' /* webpackChunkName: "pages/resetpassword" */))
const _e79b0cde = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _4850c8b1 = () => interopDefault(import('..\\pages\\tou.vue' /* webpackChunkName: "pages/tou" */))
const _aec39c88 = () => interopDefault(import('..\\pages\\why-us.vue' /* webpackChunkName: "pages/why-us" */))
const _50600850 = () => interopDefault(import('..\\pages\\writeArticle.vue' /* webpackChunkName: "pages/writeArticle" */))
const _b70d9866 = () => interopDefault(import('..\\pages\\article\\_slug.vue' /* webpackChunkName: "pages/article/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _ea077f2e,
    name: "index___en"
  }, {
    path: "/fr",
    component: _ea077f2e,
    name: "index___fr"
  }, {
    path: "/ha",
    component: _ea077f2e,
    name: "index___ha"
  }, {
    path: "/pt",
    component: _ea077f2e,
    name: "index___pt"
  }, {
    path: "/en/about",
    component: _6b4465a4,
    name: "about___en"
  }, {
    path: "/en/agreement",
    component: _979413be,
    name: "agreement___en"
  }, {
    path: "/en/conPolicy",
    component: _d5d54f2a,
    name: "conPolicy___en"
  }, {
    path: "/en/creators",
    component: _7155aa80,
    name: "creators___en"
  }, {
    path: "/en/delete-account",
    component: _49befe04,
    name: "delete-account___en"
  }, {
    path: "/en/faq",
    component: _4b9d546d,
    name: "faq___en"
  }, {
    path: "/en/initi",
    component: _a77e8d20,
    name: "initi___en"
  }, {
    path: "/en/login",
    component: _54a3e380,
    name: "login___en"
  }, {
    path: "/en/priPolicy",
    component: _3f4bc160,
    name: "priPolicy___en"
  }, {
    path: "/en/profile",
    component: _93344c00,
    name: "profile___en"
  }, {
    path: "/en/resetpassword",
    component: _2649f581,
    name: "resetpassword___en"
  }, {
    path: "/en/signup",
    component: _e79b0cde,
    name: "signup___en"
  }, {
    path: "/en/tou",
    component: _4850c8b1,
    name: "tou___en"
  }, {
    path: "/en/why-us",
    component: _aec39c88,
    name: "why-us___en"
  }, {
    path: "/en/writeArticle",
    component: _50600850,
    name: "writeArticle___en"
  }, {
    path: "/fr/about",
    component: _6b4465a4,
    name: "about___fr"
  }, {
    path: "/fr/agreement",
    component: _979413be,
    name: "agreement___fr"
  }, {
    path: "/fr/conPolicy",
    component: _d5d54f2a,
    name: "conPolicy___fr"
  }, {
    path: "/fr/creators",
    component: _7155aa80,
    name: "creators___fr"
  }, {
    path: "/fr/delete-account",
    component: _49befe04,
    name: "delete-account___fr"
  }, {
    path: "/fr/faq",
    component: _4b9d546d,
    name: "faq___fr"
  }, {
    path: "/fr/initi",
    component: _a77e8d20,
    name: "initi___fr"
  }, {
    path: "/fr/login",
    component: _54a3e380,
    name: "login___fr"
  }, {
    path: "/fr/priPolicy",
    component: _3f4bc160,
    name: "priPolicy___fr"
  }, {
    path: "/fr/profile",
    component: _93344c00,
    name: "profile___fr"
  }, {
    path: "/fr/resetpassword",
    component: _2649f581,
    name: "resetpassword___fr"
  }, {
    path: "/fr/signup",
    component: _e79b0cde,
    name: "signup___fr"
  }, {
    path: "/fr/tou",
    component: _4850c8b1,
    name: "tou___fr"
  }, {
    path: "/fr/why-us",
    component: _aec39c88,
    name: "why-us___fr"
  }, {
    path: "/fr/writeArticle",
    component: _50600850,
    name: "writeArticle___fr"
  }, {
    path: "/ha/about",
    component: _6b4465a4,
    name: "about___ha"
  }, {
    path: "/ha/agreement",
    component: _979413be,
    name: "agreement___ha"
  }, {
    path: "/ha/conPolicy",
    component: _d5d54f2a,
    name: "conPolicy___ha"
  }, {
    path: "/ha/creators",
    component: _7155aa80,
    name: "creators___ha"
  }, {
    path: "/ha/delete-account",
    component: _49befe04,
    name: "delete-account___ha"
  }, {
    path: "/ha/faq",
    component: _4b9d546d,
    name: "faq___ha"
  }, {
    path: "/ha/initi",
    component: _a77e8d20,
    name: "initi___ha"
  }, {
    path: "/ha/login",
    component: _54a3e380,
    name: "login___ha"
  }, {
    path: "/ha/priPolicy",
    component: _3f4bc160,
    name: "priPolicy___ha"
  }, {
    path: "/ha/profile",
    component: _93344c00,
    name: "profile___ha"
  }, {
    path: "/ha/resetpassword",
    component: _2649f581,
    name: "resetpassword___ha"
  }, {
    path: "/ha/signup",
    component: _e79b0cde,
    name: "signup___ha"
  }, {
    path: "/ha/tou",
    component: _4850c8b1,
    name: "tou___ha"
  }, {
    path: "/ha/why-us",
    component: _aec39c88,
    name: "why-us___ha"
  }, {
    path: "/ha/writeArticle",
    component: _50600850,
    name: "writeArticle___ha"
  }, {
    path: "/pt/about",
    component: _6b4465a4,
    name: "about___pt"
  }, {
    path: "/pt/agreement",
    component: _979413be,
    name: "agreement___pt"
  }, {
    path: "/pt/conPolicy",
    component: _d5d54f2a,
    name: "conPolicy___pt"
  }, {
    path: "/pt/creators",
    component: _7155aa80,
    name: "creators___pt"
  }, {
    path: "/pt/delete-account",
    component: _49befe04,
    name: "delete-account___pt"
  }, {
    path: "/pt/faq",
    component: _4b9d546d,
    name: "faq___pt"
  }, {
    path: "/pt/initi",
    component: _a77e8d20,
    name: "initi___pt"
  }, {
    path: "/pt/login",
    component: _54a3e380,
    name: "login___pt"
  }, {
    path: "/pt/priPolicy",
    component: _3f4bc160,
    name: "priPolicy___pt"
  }, {
    path: "/pt/profile",
    component: _93344c00,
    name: "profile___pt"
  }, {
    path: "/pt/resetpassword",
    component: _2649f581,
    name: "resetpassword___pt"
  }, {
    path: "/pt/signup",
    component: _e79b0cde,
    name: "signup___pt"
  }, {
    path: "/pt/tou",
    component: _4850c8b1,
    name: "tou___pt"
  }, {
    path: "/pt/why-us",
    component: _aec39c88,
    name: "why-us___pt"
  }, {
    path: "/pt/writeArticle",
    component: _50600850,
    name: "writeArticle___pt"
  }, {
    path: "/en/article/:slug?",
    component: _b70d9866,
    name: "article-slug___en"
  }, {
    path: "/fr/article/:slug?",
    component: _b70d9866,
    name: "article-slug___fr"
  }, {
    path: "/ha/article/:slug?",
    component: _b70d9866,
    name: "article-slug___ha"
  }, {
    path: "/pt/article/:slug?",
    component: _b70d9866,
    name: "article-slug___pt"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
