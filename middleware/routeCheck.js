export default (context) => {
  const pathName = '/' + context.i18n.locale
  const pathNameTwo = '/' + context.i18n.locale + '/'
  if (context.route.path === pathName || context.route.path === pathNameTwo) {
    context.store.commit('PUT_INITROUTE', true)
  } else {
    context.store.commit('PUT_INITROUTE', false)
  }
}
