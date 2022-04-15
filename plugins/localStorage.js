import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

const ls = new SecureLS({ isCompression: false })

export default ({ store }) => {
  createPersistedState({
    key: 'Odaaay',
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
    reducer(state) {
      if (state.token === null) {
        // val.user.token (your user token for example)
        return {}
      }
      return state
    },
  })(store)
}
