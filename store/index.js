import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// let err
export const strict = false
export const state = () => ({
  token: null,
  usernumber: null,
  loading: false,
  user_name: null,
  articleContent: '',
  category: 0,
  post_payment: '',
  account_payment: '',
  stripeUrl: '',
  tag: null,
  isLogin: false,
  profile_picture: null,
  bio: null,
  position: null,
  useremail: null,
  uuid: null,
  otherUser: '',
  user_uuid: null,
  userid: null,
  verified: null,
  toured: null,
  users: [],
  Usettings: [],
  userData: null,
  whereAm: null,
  userIP: null,
  channels: [],
  feeds: [],
  ownerData: [],
  shouts: '',
  title: '',
  postDone: false,
  newPostUuid: '',
  city: 'Libreville',
  articleData: [''],
  articleThumbData: '',
  typeOfPost: 1,
  saved: [],
  userPosts: [],
  following: [''],
  followers: [''],
  userList: [''],
  channelPosts: [],
  userComments: [],
  userSaved: []
})

export const mutations = {
  MAKE_POST (state, data) {
    state.users = data
  },
  loading(state, value) {
    state.loading = value
  },
  PUT_TOKEN (state, token) {
    state.token = token
    state.isLogin = true
  },
  PUT_SHOUTS (state, data) {
    state.shouts += data
  },
  PUT_ISLOGIN (state, data) {
    state.isLogin = data
  },
  REMOVE_SHOUTS (state, data) {
    state.shouts -= data
  },
  DELETE_TOKEN (state) {
    state.token = null
    state.isLogin = false
    if (process.client) {
      let cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      // document.storage.clear();
      localStorage.removeItem('auth_token')
      localStorage.removeItem('profile_picture')
    }
  },
  Set_Position(state, position) {
    state.position = position
  },
  PUT_USERNUMBER (state, number) {
    state.usernumber = number
  },
  PUT_STRIPEURL (state, data) {
    state.stripeUrl = data
  },
  PUT_USERIP (state, data) {
    state.userIP = data
  },
  PUT_USERNAME (state, name) {
    state.user_name = name
  },
  PUT_USERCATEGORY (state, data) {
    state.category = data
  },
  PUT_USERTAG (state, data) {
    state.tag = data
  },
  PUT_USEREMAIL (state, email) {
    state.useremail = email
  },
  PUT_TYPEOFPOST (state, data) {
    state.typeOfPost = data
  },
  PUT_ARTICLEDATA (state, data) {
    state.articleData = data
  },
  PUT_SAVEDHOME (state, data) {
    state.saved = data
  },
  PUT_USERID (state, id) {
    state.userid = id
  },
  PUT_ARTICLELINKDATA(state, data){
    state.articleData = data
  },
  PUT_ARTICLETHUMBDATA(state, data){
    state.articleThumbData = data
  },
  PUT_USERSCACHEDATA(state, data){
    state.userList = data
  },
  REMOVE_ARTICLELINKDATA(state){
    state.articleData = []
  },
  PUT_USERUID (state, uuid) {
    state.uuid = uuid
  },
  PUT_USERVERIFIED (state, verification) {
    state.verified = verification
  },
  PUT_USERPROFILE (state, picture) {
    state.profile_picture = picture
  },
  PUT_USERDATA (state, data) {
    state.userData = data
  },
  PUT_USERCHANNELDATA (state, data) {
    state.channels = data
  },
  PUT_INITROUTE (state, data) {
    state.whereAm = data
  },
  PUT_FEEDDATA (state, data) {
    state.feeds = data
  },
  PUT_OTHERUSERDATA (state, data) {
    state.otherUser = data
  },
  PUT_USERPOSTDATA (state, data) {
    state.userPosts = data
  },
  PUT_USERARTICLETEXT (state, data) {
    state.articleContent = data
  },
  PUT_USERFOLLOWINGDATA (state, data) {
    state.following = data
  },
  PUT_USERPOSTSPAIEMENTDATA (state, data) {
    state.post_payment = data
  },
  PUT_USERARTICLEOWNERDATA (state, data) {
    state.ownerData = data
  },
  PUT_USERACCOUNTPAIEMENTDATA (state, data) {
    state.account_payment = data
  },
  PUT_USERFOLLOWERDATA (state, data) {
    state.followers = data
  },
  PUT_CHANNELPOSTS (state, data) {
    state.channelPosts = data
  },
  PUT_USER_UUID (state, data) {
    state.user_uuid = data
  },
  PUT_UserComments (state, data) {
    state.userComments = data
  },
  PUT_CITY (state, data) {
    state.city = data
  },
  PUT_BIO (state, data) {
    state.bio = data
  },
  PUT_SAVED (state, data) {
    state.userSaved = data
  },
  PUT_DONE (state, data) {
    state.postDone = data
  },
  PUT_NEWPOSTUUID (state, data) {
    state.newPostUuid = data
  },
  PUT_USERSETTINGS (state, data) {
    // if (data.theme === 'light') {
    //   data.theme = false
    // } else {
    //   data.theme = true
    // }
    if (data.country == '') {
      data.country = 'Afghanistan'
    }
    if (data.Lang == '') {
      data.Lang = 'en'
    }

    state.Usettings = data
  },
  REMOVECHANNEL (state, data) {
    const index = state.channels.map(item => item.id).indexOf(data)
    if (index > -1) {
      state.channels.splice(index, 1)
    }
  },
  REMOVEUSER (state, data) {
    const index = state.following.map(item => item.uuid).indexOf(data)
    if (index > -1) {
      state.following.splice(index, 1)
    }
  },
  ADDUSER (state, data) {},

}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    // console.log(this.$cookies.get('token'))
    if (this.$cookies.get('token')) {
      await dispatch('getUserSettings')
      // this.$cookies.set('adleehuezvuigvzef', res.data.user.picture, {
      //   sameSite: true,
      //   secure: true
      // })
    }
  },
  Deconnexion (context) {
    context.commit('DELETE_TOKEN')
    this.$cookies.removeAll()
    this.$cookies.remove('token')
    this.$router.push('/' + this.$i18n.locale + '/login')
  },
  Deconnex(context) {
    context.commit('DELETE_TOKEN')
    this.$cookies.removeAll()
    this.$cookies.remove('token')
  },
  retrieveToken (context, credData) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/auth/login', {
          username: credData.username,
          password: credData.password
        })
        .then((response) => {
          const token = response.data.token
          localStorage.setItem('auth_token', token)
          context.commit('PUT_TOKEN', token)
          resolve(response.data.res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getAuthSmsSignup (context, credData) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/auth/phone_signup', {
          phonenumber: credData.phone
        })
        .then((response) => {
          if (response.data.status === 1) {
            context.commit('PUT_USERNUMBER', response.data.phone)
            resolve(response.data.res)
          } else {
            reject(response.data.res)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getAuthLogin (context, credData) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/auth/login', {
          phone_login: credData.phone_login,
          phone: credData.phone,
          code: credData.code
        })
        .then((response) => {
          if (response.data.status === 1) {
            const token = response.data.token
            let tokenNew = token.substring(2)
            tokenNew = tokenNew.substring(0, tokenNew.length - 1)
            localStorage.setItem('auth_token', tokenNew)
            this.$cookies.set('token', tokenNew, {
              sameSite: 'lax',
              secure: true
            })
            context.commit('PUT_TOKEN', tokenNew)
            context.commit('PUT_ISLOGIN', true)
            resolve(response)
          } else {
            reject(response.data.res)
          }
        })
        .catch((error) => {
          // console.log(error)
          reject(error)
        })
    })
  },
  getEmailLogin (context, credData) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/auth/login', {
          email: credData.email,
          password: credData.password
        })
        .then((response) => {
          if (response.data.status === 1) {
            const token = response.data.token
            let tokenNew = token.substring(2)
            tokenNew = tokenNew.substring(0, tokenNew.length - 1)
            localStorage.setItem('auth_token', tokenNew)
            this.$cookies.set('token', tokenNew, {
              sameSite: 'lax',
              secure: true
            })
            context.commit('PUT_TOKEN', tokenNew)
            context.commit('PUT_ISLOGIN', true)
            // this.getUserData()
            // context.dispatch('getUserData')
            resolve(response)
          } else {
            reject(response.data.res)
          }
        })
        .catch((error) => {
          // console.log(error)
          reject(error)
        })
    })
  },
  getAuthLoginOne (context, credData) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/auth/login', {
          phone_login: credData.phone_login,
          phone: credData.phone,
          code: credData.code
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getAuthEmailSignup (context, credData) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/auth/email_signup', {
          email: credData.email
        })
        .then((response) => {
          if (response.data.status === 1) {
            context.commit('PUT_USEREMAIL', response.data.email)
            resolve(response.data.res)
          } else {
            reject(response.data.res)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getArticle(context, uuid){
    this.$axios
      .get('/article/' + uuid,
        {
          headers : {
            'API-KEY': this.$store.state.token
          }
        }
      )
      .then((res) => {
        // "`/${$i18n.locale}/article/` + item.uuid"
      })
      .catch((err) => {
        console.log(err)
      })
  },

  // FIXME : Store user data in the state
  getUserData (context) {
    const userData = {
      id: context.state.userid,
      username: context.state.user_name,
      usernumber: context.state.usernumber,
      useremail: context.state.useremail
    }
    this.$axios
      .get('/user', {
        headers: {
          'API-KEY': context.state.token
        }
      })
      .then((response) => {
        context.commit('PUT_USERID', response.data.results.id)
        context.commit('PUT_USERNUMBER', response.data.results.user_number)
        context.commit('PUT_USERNAME', response.data.results.username)
        context.commit('PUT_USEREMAIL', response.data.results.email)
        context.commit('PUT_USERUID', response.data.results.uuid)
        context.commit('PUT_USERVERIFIED', response.data.results.verified)
        context.commit('PUT_USERPROFILE', response.data.results.picture)
        this.$cookies.set('profile_image', response.data.results.picture, {
          sameSite: 'lax',
          secure: true
        })
        context.commit('PUT_BIO', response.data.results.bio)
        context.commit('PUT_USERDATA', userData)
      })
      .catch((_error) => {})
  },
  getChannelData (context) {
    this.$axios
      .get('/channel', {
        headers: {
          'API-KEY': context.state.token
        }
      })
      .then((response) => {
        context.commit('PUT_USERCHANNELDATA', response.data)
      })
      .catch((_error) => {})
  },
  getAllData (context) {
    this.$axios
      .get('/home?start=1&limit=5&count=5&lang=' + this.$i18n.locale , {
        headers: {
          'API-KEY': context.state.token
        }
      })
      .then((response) => {
        // console.log(response.data.results.feed)

        let Save = response.data.results.post_saved
        let Feed = response.data.results.feed
        // for (let item = 0; item < Feed.length; item++) {
        //   let iv = item.posts_[0].id
        //   if(Save.includes(iv))
        //   {
        //     item.is_saved = true
        //   }else{
        //     item.is_saved = false
        //   }

        context.commit('PUT_FEEDDATA', Feed)
      })
      .catch((_error) => {})
  },

  getDiscover (context) {
    this.$axios
      .get('/discover?start=1&limit=5&count=5&lang=' + this.$i18n.locale , {
        headers: {
          'API-KEY': context.state.token
        }
      })
      .then((response) => {
      })
      .catch((_error) => {})
  },
  getFollowingData (context, credData) {
    this.$axios
      .get('/user/following', {
        headers: {
          'API-KEY': context.state.token,
        },
        params: {
          fan_base: credData.fan_base
        }
      })
      .then((response) => {
        context.commit('PUT_USERFOLLOWINGDATA', response.data.results)
      })
      .catch((_error) => {})
  },
  getFollowerData (context, credData) {
    this.$axios
      .get('/user/following', {
        headers: {
          'API-KEY': context.state.token,
        },
        params: {
          fan_base: credData.fan_base
        }
      })
      .then((response) => {
        context.commit('PUT_USERFOLLOWERDATA', response.data.results)
      })
      .catch((_error) => {})
  },

  // FIXME: Get User Settings and Store It
  getUserSettings (context) {
    this.$axios
      .get('/user/prefs', {
        headers: {
          'API-KEY': context.state.token
        }
      })
      .then((response) => {
        if (localStorage.getItem('profile_picture')) {
          localStorage.removeItem('profile_picture')
          localStorage.setItem('profile_picture', response.data.user.picture)
        } else {
          localStorage.setItem('profile_picture', response.data.user.picture)
        }
        context.commit('PUT_USERSETTINGS', response.data.user)
        context.commit('PUT_USERACCOUNTPAIEMENTDATA', response.data.account_payment)
        context.commit('PUT_USERPOSTSPAIEMENTDATA', response.data.post_payment)
      })
      .catch((_error) => {})
  },
  // FIXME: Channel & article solve
  getChannelPost (context) {
    this.$axios
      .get('/post/users?start=1&limit=5&count=5', {
        headers: {
          'API-KEY': context.state.token
        }
      })
      .then((response) => {
        context.commit('PUT_CHANNELPOSTS', response.data.results)
      })
      .catch((_error) => {})
  },
  // FIXME: User Comments
  commentUser (context) {
    this.$axios
      .get('/comment/userComment?start=1&limit=5&count=5', {
        headers: {
          'API-KEY': context.state.token
        }
      })
      .then((response) => {
        context.commit('PUT_UserComments', response.data.results)
        // this.CommentNumber = this.commentUsers.length
      })
      .catch((_error) => {})
  },
  // FIXME: get user saved
  getUserSave (context) {
    this.$axios
      .get('/Save/', {
        headers: {
          'API-KEY': context.state.token
        },
        params: {
          start: 1,
          limit: 5,
          count: 5,
        }
      })
      .then((response) => {
        context.commit('PUT_SAVED', response.data.results)
      })
      .catch((_error) => {})
  },
  getUserPosts (context) {
    this.$axios
      .get('/user/posts?start=1&limit=5&count=5', {
        headers: {
          'API-KEY': context.state.token
        }
      })
      .then((response) => {
        context.commit('PUT_USERPOSTDATA', response.data.results)
      })
      .catch((_error) => {})
  },
  // FIXME: get user message user
  getUserDiscussion (context) {
    this.$axios
      .get('/post/Save?start=1&limit=5&count=5', {
        headers: {
          'API-KEY': context.state.token
        }
      })
      .then((response) => {
        context.commit('PUT_DISCUSSIONS', response.data.results)
      })
      .catch((_error) => {})
  },
  verifyCode (context, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/auth/phone_login?phone=' + data.phone + '&code=' + data.code)
        .then((response) => {
          if (response.data.status === 1) {
            context.commit('PUT_TOKEN', response.data.token)
            localStorage.setItem('auth_token', response.data.token)
            resolve(response)
          } else {
            reject(response.res)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  readytoured () {
    // localStorage.setItem('toured', true)
  }
}

export const getters = {
  loggedIn (state) {
    return state.token !== null
  },
  getCategorie(state) {
    return state.category
  },
  isLog(state) {
    return state.isLogin
  },
  getPic (state) {
    return state.profile_picture
  },
  phoneAuth (state) {
    return state.usernumber !== null
  },
  emailAuth (state) {
    return state.useremail !== null
  },
  Usettings (state) {
    return state.Usettings
  },
  usertoured (state) {
    return state.toured !== null
  },
  getUser (state) {
    return state.userData
  },
  isPostDone (state) {
    return state.postDone
  },
  getNewPostuuid (state) {
    return state.newPostUuid
  },
  getAllData (state) {
    return  state.feeds
  }
}
