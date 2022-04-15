export default (context) => {
  if (!context.app.$cookies.get('token')) {
    return context.redirect('/' + context.i18n.locale + '/login')
  }
  // if (!context.store.getters.isLog) {
  //   console.log(context.store.getters.isLog)
  //   context.store.commit('PUT_ISLOGIN', true)
  //   console.log(context.store.getters.isLog)
  //   return context.redirect('/' + context.i18n.locale + '/login')
  // } else {
  //   context.store.commit('PUT_ISLOGIN', true)
  // }
}
