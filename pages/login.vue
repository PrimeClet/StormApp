<template>
  <div class="row justify-content-center overflow-auto px-xl-5 px-1 mx-0 pb-5 pb-md-0 scroller">
    <div class="col-md-6 col-lg-5 my-auto order-last order-md-first">
      <div class="card bg-transparent px-lg-5 px-md-0 px-2 mx-auto">
        <div class="card-body px-lg-4y px-md-3 px-sm-2 px-0">
          <h1>
            Odaaay
          </h1>
          <br>
          <div class="my-auto d-block d-md-block d-lg-none">
            <lottie :options="defaultOptions"/>
          </div>
          <h4>{{ $t('pages.login.signIn') }}</h4>
          <p class="pb-1">
            {{ $t('pages.login.or') }}
            <nuxt-link :to="`/${$i18n.locale}/signup`" class="text-primary"
            >{{ $t('pages.login.noAccount') }}
            </nuxt-link>
          </p>
          <div class="pt-3 text-start pb-0 p-md-0 d-flex flex-column w-100 mt-2 mt-md-1" :class="{ oneTwo: !show}">

            <vue-tel-input v-model="form.tel" mode="international" id="example"></vue-tel-input>
            <div id="phoneHel" class="form-text mb-3">
              <span v-if="!desactived">{{ $t('pages.login.secure') }}</span>
              <span v-else class="text-danger font-weight-bolder">{{ $t('pages.login.secure') }}</span>
            </div>
<!--            <button class="btn btn-light btn-block" data-bs-toggle="modal" data-bs-target="#pasDispo">{{ $t('pages.login.next') }}</button>-->
            <button class="btn btn-light btn-block" @click="onSubmit">{{ $t('pages.login.next') }}</button>
            <a href="https://odaaay.com/google" class="mt-3 mb-2">
              <button class="btn btn-light btn-block">
                <i class="fab fa-google"></i>
                {{ $t('pages.home.googleSign') }}
              </button>
            </a>
            <button class="btn btn-light btn-block" @click="showMail">
              <i class="fas fa-envelope mr-1"></i>
              {{ $t('pages.home.mailSign') }}
            </button>
          </div>
          <div class="mb-4 pt-3 text-start pb-0 p-md-0 d-flex flex-column w-100 mt-2 mt-md-1" v-if="mailVo">
            <div class="">
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="hello@odaaay.com"
              />
            </div>
            <div id="phoneHelp" class="form-text mb-4">
              {{ $t('pages.login.secureMail') }}
            </div>
            <div class="mb-4 d-flex flex-row">
              <input
                id="id_password"
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Password"
              />
              <i class="far fa-eye" id="togglePassword" style="margin-left: -30px !important; margin-top:12px !important;  color: #0b2e13; cursor: pointer;" @click="ShowPassWord"></i>
            </div>
            <p class="pb-1">
              {{ $t('pages.login.resetPasswordText') }}
              <nuxt-link :to="`/${$i18n.locale}/resetpassword`" class="text-primary"
              >{{ $t('pages.login.resetPassword') }}
              </nuxt-link>
            </p>
            <button class="btn btn-light btn-block" @click="emaiLogin">{{ $t('pages.login.signIn') }}</button>
            <a href="https://odaaay.com/google" class="mt-3 mb-2">
              <button class="btn btn-light btn-block">
                <i class="fab fa-google"></i>
                {{ $t('pages.home.googleSign') }}
              </button>
            </a>
            <button class="btn btn-light btn-block" @click="showPhone">
              <i class="fas fa-phone-alt mr-1"></i>
              {{ $t('pages.home.nomberSign') }}
            </button>
          </div>

          <div class="text-start pb-0 p-md-0 h-100 d-flex flex-column w-100" :class="{ oneTwo: !showTwo}">
            <input
              type="text"
              v-model="code_phone"
              class="form-control text-center mb-1"
            />
            <div class="form-text mb-3">
              <span class="float-right">
                <span id="timer">2:00</span> {{ $t('pages.login.timer') }}
              </span>
            </div>
            <br>
            <div class="mt-4 mb-3">
              <button class="btn btn-light btn-block" v-on:click="onSubmitOne">{{ $t('pages.login.validate') }}</button>
            </div>
            <p class="mt-2 text-center text-primary text-16" v-show="showResend">
                 <span class="">
                   <a href="#" v-on:click="onSubmit">{{ $t('pages.login.resend') }}</a>
                 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="pasDispo" tabindex="-1" aria-labelledby="notInterestedO" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header ">
            <h5 class="modal-title">Login Method</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="@/assets/images/logo.png"
                  width="50"
                  height="60"
                  alt="odaaay logo"
                  title="odaaay logo"
                  style="margin-bottom: 1%"
                />
                <h3 class="modal-title text-center" id="hea">{{ $t('pages.home.service') }}<br>{{ $t('pages.home.indispo') }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-5 col-lg-6 justify-content-center d-none d-lg-block d-xl-block my-auto">
      <div class="row my-auto order-first order-md-last my-auto">
        <lottie :options="defaultOptions"/>
      </div>
    </div>
  </div>
</template>

<script>
import {VueTelInput} from "vue-tel-input"
import animationData from '~/assets/anims/jump.json'
import Lottie from 'vue-lottie/src/lottie.vue'


export default {
  asyncData({req, store}) {
    if (process.server) {
      const ip = req.headers['x-forwarded-for']
      store.commit('PUT_USERIP', ip)
      return { ipadd: ip }
    }
  },
  components: {
    lottie: Lottie,
    VueTelInput
  },
  layout: "forms",
  data() {
    return {
      form: {
        email: '',
        password: '',
        tel: '',
        verification: '',
        remember_me: false
      },
      email: '',
      mailVo: true,
      password: '',
      code_phone: '',
      queryData: '',
      timeOT: '',
      desactived: false,
      isActive: true,
      status: 'not_accepted',
      show: false,
      showTwo: false,
      showResend: false,
      diff2: 0,
      colors: ['light', 'dark', 'sepia'],
      defaultOptions: {animationData},
      animationSpeed: 1
    };
  },
  methods: {
    showMail(){
      this.show = false
      this.mailVo = true
    },
    showPhone(){
      this.mailVo = false
      this.show = true
    },
    onSubmit() {
      if(this.form.tel){
        this.$notification.new(this.$t('pages.home.noService'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
        // this.LoginStepOne()
      } else {
        this.$notification.new(this.$t('pages.home.incorrectNo'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    },
    emaiLogin(){
      if(this.email && this.password){
        this.$store
        .dispatch('getEmailLogin', {
          email: this.email,
          password: this.password
        })
        .then((response) => {
          if (response.data.status === 1) {
            this.$store.dispatch('getUserData')
            this.$notification.new(this.$t('pages.home.welcome'), {
              timer: 15,
              position: 'bottomRight',
              type: 'succes',
              showLeftIcn: true,
              showCloseIcn: true
            });
            this.$store.commit('PUT_USER_UUID', response.data.uuid)
            this.$router.push('/' + this.$i18n.locale + '/')
          }

          if (response.data.status === 3) {
            this.$notification.new(this.$t('pages.home.notVerif'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if (response.data.status === 7) {
            this.$notification.new(this.$t('pages.home.exist'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }

        })
        .catch((error) => {
          if (error) {
            this.$notification.new(this.$t('pages.home.reset'), {
              timer: 15,
              position: 'bottomRight',
              type: 'warning',
              showLeftIcn: true,
              showCloseIcn: true
            })
          }
        })
      } else{
        this.$notification.new(this.$t('pages.home.emptyMail'), {
          timer: 15,
          position: 'bottomRight',
          type: 'error',
          showLeftIcn: true,
          showCloseIcn: true
         });
      }
    },
    onSubmitOne() {
      this.LoginStepTwo()
    },
    googleRedirection(){
      this.$router.push('https://odaaay.com/google')
    },
    LoginStepOne() {
      this.show = false
      this.showTwo = true
      this.launchTimer()

      this.$store
        .dispatch('getAuthLoginOne', {
          phone_login: this.isActive,
          phone: this.form.tel,
          code: this.code_phone
        })
        .then((response) => {
          if (response.data.status === 1) {
            this.show = false
            this.showTwo = true
            this.launchTimer()

            this.$notification.new(this.$t('pages.home.verifMail'), {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if (response.data.status === 4) {
            this.$notification.new(this.$t('pages.home.bad'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if (response.data.status === 7) {
            this.$notification.new(this.$t('pages.home.exist'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if (response.data.status === 6) {
            this.desactived = true
            this.$notification.new(this.$t('pages.home.accDesac'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
        })
        .catch((error) => {
          if (error.response.data.res) {
            this.$notification.new(this.$t('pages.home.incorrectNo'), {
              timer: 15,
              position: 'bottomRight',
              type: 'warning',
              showLeftIcn: true,
              showCloseIcn: true
            })
          }
        })
    },

    launchTimer() {
      document.getElementById('timer').innerHTML = 2 + ":" + 0;
      this.startTimer();
    },

    LoginStepTwo() {
      this.$store
        .dispatch('getAuthLogin', {
          phone_login: this.isActive,
          phone: this.form.tel,
          code: this.code_phone
        })
        .then((response) => {

          if (response.data.status === 1) {
            this.$notification.new(this.$t('pages.home.welcome'), {
              timer: 15,
              position: 'bottomRight',
              type: 'succes',
              showLeftIcn: true,
              showCloseIcn: true
            });

            this.$store.commit('PUT_USER_UUID', response.data.uuid)
            clearTimeout(this.timeOT)
            this.$router.push('/' + this.$i18n.locale + '/')
          }

          if (response.data.status === 3) {
            this.$notification.new(this.$t('pages.home.notVerif'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if (response.data.status === 4) {
            this.$notification.new(this.$t('pages.home.exist'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }

        })
        .catch((error) => {
          if (error) {
            this.$notification.new(this.$t('pages.home.reset'), {
              timer: 15,
              position: 'bottomRight',
              type: 'warning',
              showLeftIcn: true,
              showCloseIcn: true
            })
          }
        })
    },

    ShowPassWord(){
      const togglePassword = document.querySelector('#togglePassword');
      const password = document.querySelector('#id_password');

      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      togglePassword.classList.toggle('fa-eye-slash');
    },

    startTimer() {
      let presentTime = document.getElementById('timer').innerHTML
      let timeArray = presentTime.split(/[:]+/)
      let m = timeArray[0]
      let s = this.checkSecond((timeArray[1] - 1))
      if (s == 59) {
        m = m - 1
      }
      if (m < 0) {
        this.showResend = true
        return
      }

      document.getElementById('timer').innerHTML =
        m + ":" + s;
      // console.log(m)
      this.timeOT =  setTimeout(this.startTimer, 1000);

    },

    checkSecond(sec) {
      if (sec < 10 && sec >= 0) {
        sec = "0" + sec
      } // add zero in front of numbers < 10
      if (sec < 0) {
        sec = "59"
      }
      return sec
    }
  },
  mounted() {
    this.$nextTick(() => {
      // this.$nuxt.$loading.start();
      // setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });

    if(this.queryData.token){
      const token = this.queryData.token
      let tokenNew = token.substring(2)
      tokenNew = tokenNew.substring(0, tokenNew.length - 1)
      localStorage.setItem('auth_token', tokenNew)
      this.$cookies.set('token', tokenNew, {
        sameSite: 'lax',
        secure: true
      })
      this.$store.commit('PUT_TOKEN', tokenNew)
      this.$store.commit('PUT_USER_UUID', this.queryData.uuid)
      this.$store.commit('PUT_ISLOGIN', true)
      this.$notification.new(this.$t('pages.home.welcome'), {
        timer: 15,
        position: 'bottomRight',
        type: 'warning',
        showLeftIcn: true,
        showCloseIcn: true
      })
      this.$router.push('/' + this.$i18n.locale + '/')

}
  },
  created(){
    this.queryData = this.$route.query
  },
  head() {
    return {
      title: this.$t('pages.home.loginSeo'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.home.welcome')
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.home.loginSeo')
        },
        {
          hid: 'publisher',
          name: 'publisher',
          content: 'Odaaay'
        },
        {hid: 'robots', name: 'robots', content: 'index follow'},
        // Google+ / Schema.org
        {itemprop: 'name', content: 'Welcome back'},
        {
          itemprop: 'description',
          content: this.$t('pages.home.welcome')
        },
        // ...
        // Facebook / Open Graph
        {property: 'og:title', content: 'Login'},
        {
          property: 'og:image',
          content: 'https://odaaay.com/weather/logo.png'
        },
        {
          property: 'og:site_name',
          content: this.$t('pages.home.welcome')
        },
        {
          property: 'og:url',
          content: 'https://www.odaaay.co' + this.$route.fullPath
        },
        {
          property: 'og:description',
          content: this.$t('pages.home.welcome')
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.odaaay.co' + this.$route.fullPath
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'NewsMediaOrganization',
            name: 'Odaaay',
            alternateName: 'Odaaay',
            url: 'https://www.odaaay.co',
            logo: 'https://odaaay.com/weather/logo.png',
            sameAs: [
              'https://twitterlink.com/twitteraccount',
              'https://wikipedia.com/wikiaccount',
              'https://odaaay.com/'
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                email: 'admin@odaaay.co',
                contactType: 'customer service',
                availableLanguage: ['en', 'fr', 'pt', 'ha', 'es']
              }
            ]
          }
        }
      ]
    }
  }
};
</script>
<style lang="css" scoped>

.oneTwo {
  visibility: hidden;
  height: 0px !important;
}

.tab {
  background-color: transparent !important;
}

.text-primary {
  color: #57caca !important;
}
</style>
