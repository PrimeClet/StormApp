<template >
  <div class="row justify-content-center overflow-auto px-xl-5 px-1 mx-0 pb-5 pb-md-0">
    <div class="col-md-6 d-none d-lg-block d-xl-block-none d-lg-block d-xl-block">
      <lottie :options="defaultOptions" />
    </div>
    <div class="col-md-6">
      <div class="card bg-transparent px-xl-5 px-3">
        <div class="card-body px-xl-5 px-md-3 my-2 my-md-0 px-0">
          <div v-if="show_one">
            <h1 class="mb-3">Odaaay</h1>
            <div class="my-auto d-block d-md-block d-lg-none">
              <lottie :options="defaultOptions"/>
            </div>
            <h4>{{ $t('pages.signup.signup') }}</h4>
            <p>
              <nuxt-link :to="`/${$i18n.locale}/login`" class="text-primary"
              >{{ $t('pages.signup.oneAccount') }}
              </nuxt-link>
            </p>
          </div>
          <div class="mb-4 pt-3" v-show="show">
            <div class="mb-4">
              <input
                type="text"
                class="form-control"
                v-model="username"
                placeholder="helloOdaaay"
              />
            </div>
            <vue-tel-input v-model="phone" mode="international" id="phone"></vue-tel-input>
            <div id="phoneHelp" class="form-text mb-3">
              {{ $t('pages.login.secure') }}
            </div>
            <div class="mt-4 mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck2"
                v-model="termOfUse"
              />
              <label class="form-check-label" for="exampleCheck2"
              >{{ $t('pages.signup.terms') }}
                <nuxt-link :to="`/${$i18n.locale}/tou`" class="text-primary"
                >{{ $t('pages.signup.la') }}</nuxt-link
                >
              </label>
            </div>
            <button class="btn btn-light btn-block mb-3" @click="onSubmit">{{ $t('pages.login.next') }}</button>
            <div class="d-flex flex-column justify-content-between">
              <a href="https://odaaay.com/google" class="pb-md-0">
                <button class="btn btn-light btn-block mb-2 text-md-12">
                  <i class="fab fa-google"></i>
                  {{ $t('pages.home.googleSign') }}
                </button>
              </a>
              <button class="btn btn-light text-md-12" @click="showMail">
                <i class="fas fa-envelope mr-1"></i>
                {{ $t('pages.home.mailSign') }}
              </button>
            </div>
          </div>
          <div class="mb-3 pt-1 mt-2 mt-md-1 pb-5 overflow-auto" v-show="mailVo">
            <div class="">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': spaceCheck , 'is-valid': spaceCheck}"
                v-model="username"
                @change="checkSpace"
                placeholder="boogiedas"
              />
            </div>
            <div id="usernameControl" class="form-text mb-4">
              <span v-if="!spaceCheck">{{ $t('pages.home.spaceName') }}</span>
              <span v-else class="text-danger font-weight-bolder">{{ $t('pages.home.spaceTame') }}</span>
            </div>
            <div class="">
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="hello@odaaay.com"
              />
            </div>
            <div id="phoneHelpe" class="form-text mb-3">
              {{ $t('pages.login.secureMail') }}
            </div>
            <div class="d-flex">
              <input
                id="id_password"
                type="password"
                class="form-control"
                v-model="password"
                @blur="CheckPassword"
                placeholder="Password"
              />
              <i class="far fa-eye" id="togglePassword" style="margin-left: -30px !important; margin-top:12px !important;  color: #0b2e13; cursor: pointer;" @click="ShowPassWord"></i>
            </div>
            <div id="passwordCheck0" class="form-text mb-1" v-show="strongPass">
              <span class="text-danger font-weight-bolder">{{ $t('pages.home.weakPass') }}</span>
            </div>
            <div id="passwordCheck3" class="form-text mb-1" v-show="strongPass2">
              <span class="text-success font-weight-bolder">{{ $t('pages.home.strongPass') }}</span>
            </div>
            <div id="passwordCheck1" class="form-text mb-4" v-show="!samePass">
              <span :class="{'text-danger': strongPass}">{{ $t('pages.home.allowPass') }}</span>
            </div>

            <div class="mt-3">
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': samePass , 'is-valid': samePass2}"
                v-model="passwordTwo"
                @blur="verifPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div id="passwordCheck" class="mb-3" v-show="samePass">
              <span class="text-danger font-weight-bolder">{{ $t('pages.home.passwordNone') }}</span>
            </div>

            <div class="mt-3 mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheckd2"
                v-model="termOfUse"
              />
              <label class="form-check-label" for="exampleCheck2"
              >{{ $t('pages.signup.terms') }}
                <nuxt-link :to="`/${$i18n.locale}/tou`" class="text-primary"
                >{{ $t('pages.signup.la') }}</nuxt-link
                >
              </label>
            </div>
            <button class="btn btn-light btn-block mb-3" @click="emailSubmit">{{ $t('pages.signup.signup') }}</button>

            <div class="d-flex flex-column justify-content-between">
              <a href="https://odaaay.com/google" class="pb-md-0">
                <button class="btn btn-light btn-block mb-2 text-md-12">
                  <i class="fab fa-google"></i>
                   {{ $t('pages.home.googleSign') }}
                </button>
              </a>
              <button class="btn btn-light text-md-12" @click="showPhone">
                <i class="fas fa-phone-alt mr-1"></i>
                {{ $t('pages.home.nomberSign') }}
              </button>
            </div>

          </div>
          <div class="mb-3 pt-2 pt-md-5 mt-2 pb-5 " v-show="choice">
            <button class="btn btn-light btn-block mb-3" @click="showPhone">
              <i class="fas fa-phone-alt mr-1"></i>
              {{ $t('pages.home.nomberSign') }}
            </button>
            <button class="btn btn-light btn-block mb-3" @click="showMail">
              <i class="fas fa-envelope mr-1"></i>
              {{ $t('pages.home.mailSign') }}
            </button>
            <a href="https://odaaay.com/google" class="pb-md-0">
              <button class="btn btn-light btn-block">
                <i class="fab fa-google"></i>
                 {{ $t('pages.home.googleSign') }}
              </button>
            </a>
          </div>

          <div class="text-start pb-0 p-md-0 d-flex flex-column justify-content-center align-items-center h-100 w-100" v-if="emailSend">
            <div class="row d-flex flex-column justify-content-center align-items-center mt-2">
              <p class="text-center text-18">{{ $t('pages.home.verifMail') }} <br> {{ $t('pages.home.verifMailo') }}</p>
              <img src="@/assets/images/undraw_mail_sent_re_0ofv.svg" alt="" class="w-25 h-25 rounded">
            </div>
            <div class="text-start pb-0 p-md-0 h-100 d-flex flex-column w-100 mt-2">
              <p>{{ $t('pages.home.codeSend') }} </p>
              <input
                type="text"
                v-model="code_email"
                class="form-control text-center mb-3"
              />
              <br>
              <div class="mt-4 mb-3 d-flex flex-row align-items-center justify-content-center">
                <button class="btn btn-light btn-block" v-on:click="signupEmailTwo">{{ $t('pages.login.validate') }}</button>
              </div>
              <p class="mt-3 text-center text-primary text-16">
              <span class="">
                <a href="#" v-on:click="onSubmit">{{ $t('pages.login.resend') }}</a>
              </span>
              </p>
            </div>
          </div>

          <div class="text-start pb-0 p-md-0 h-100 d-flex flex-column w-100" v-if="showTwo">
            <input
              type="text"
              v-model="code"
              class="form-control text-center mb-3"
            />
            <br>
            <div class="mt-4 mb-3">
              <button class="btn btn-light btn-block" v-on:click="onSubmitTwo">{{ $t('pages.login.validate') }}</button>
            </div>
            <p class="mt-3 text-center text-primary text-16">
              <span class="">
                <a href="#" v-on:click="onSubmit">{{ $t('pages.login.resend') }}</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTelInput } from "vue-tel-input";
import animationData from '@/anims/signup.json'
import Lottie from 'vue-lottie/src/lottie.vue'

export default {
  asyncData({req, store}) {
    if (process.server) {
      const ip = req.headers['x-forwarded-for']
      store.commit('PUT_USERIP', ip)
      return { ipadd: ip }
    }
  },
  layout: "forms",
  components: {
    VueTelInput,
    value: "",
    lottie: Lottie
  },
  data() {
    return {
      email: '',
      phone: '',
      mailVo: false,
      emailSend: false,
      phoneVo: false,
      termOfUse: false,
      showTwo: false,
      username: '',
      code_email: 0,
      choice: true,
      tel: '',
      spaceCheck: false,
      show: false,
      show_one: true,
      hide_code: false,
      hide_password: false,
      hide_username: false,
      password: '',
      passwordTwo: '',
      strongPass: false,
      strongPass2: false,
      samePass: false,
      samePass2: false,
      code: '',
      status: 'not_accepted',
      items: [
        'Odaaay is the easiest way for individuals to monetise their audience',
        'Create public or private communities depending on your needs',
        'Create communities for free and interact with those you care about'
      ],
      colors: ['light', 'dark', 'sepia'],
      defaultOptions: { animationData },
      animationSpeed: 1
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2500);
    });
  },

  methods: {
    onSubmit () {
      if (this.termOfUse) {
        if (this.username || this.tel) {
          this.$notification.new(this.$t('pages.home.noService'), {
            timer: 15,
            position: 'bottomRight',
            type: 'success',
            showLeftIcn: true,
            showCloseIcn: true
          });
          // this.loading = true
          // this.signup()
        } else {
          this.$notification.new(this.$t('pages.home.emptyMail'), {
            timer: 15,
            position: 'bottomRight',
            type: 'error',
            showLeftIcn: true,
            showCloseIcn: true
          });
        }
      } else {
        this.$notification.new(this.$t('pages.home.Tof'), {
          timer: 15,
          position: 'bottomRight',
          type: 'error',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    },
    showMail(){
      if(!this.show){
        this.choice = false
        this.mailVo = true
      } else {
        this.show = false
        this.mailVo = true
      }
    },
    showPhone(){
      if(!this.mailVo){
        this.choice = false
        this.show = true
      } else {
        this.mailVo = false
        this.show = true
      }
    },
    emailSubmit(){
      if (this.termOfUse) {
        if (this.username && this.email) {
          this.loading = true
          if(this.spaceCheck){
            this.$notification.new(this.$t('pages.home.spaceTame'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          } else{
            if(this.password && this.passwordTwo ){
              if(this.samePass) {
                this.$notification.new(this.$t('pages.home.passwordNone'), {
                  timer: 15,
                  position: 'bottomRight',
                  type: 'error',
                  showLeftIcn: true,
                  showCloseIcn: true
                });
              } else{
                if (!this.strongPass){
                  this.$axios
                    .post('/auth/signup', {
                      user_name: this.username,
                      email: this.email,
                      lang: this.$i18n.locale,
                      password: this.password,
                      code: parseInt(this.code_email)
                    })
                    .then((response) => {
                      if (response.data.status === 3) {
                        this.emailSend = true
                        this.mailVo = false
                        this.$notification.new(this.$t('pages.home.verifMail'), {
                          timer: 15,
                          position: 'bottomRight',
                          type: 'error',
                          showLeftIcn: true,
                          showCloseIcn: true
                        });
                      }
                      if (response.data.status === 2) {
                        this.$notification.new(this.$t('pages.home.nameExist'), {
                          timer: 15,
                          position: 'bottomRight',
                          type: 'error',
                          showLeftIcn: true,
                          showCloseIcn: true
                        });
                      }
                      if (response.data.status === 1) {
                        this.$notification.new(this.$t('pages.home.emailExist'), {
                          timer: 15,
                          position: 'bottomRight',
                          type: 'error',
                          showLeftIcn: true,
                          showCloseIcn: true
                        });
                      }
                      // if (response.data.status === 4) {
                      //   this.$notification.new("Wrong Number, Check It!", {
                      //     timer: 15,
                      //     position: 'bottomRight',
                      //     type: 'error',
                      //     showLeftIcn: true,
                      //     showCloseIcn: true
                      //   });
                      // }
                    })
                    .catch((error) => {
                      console.log(error)
                    })
                }else{
                  this.$notification.new(this.$t('pages.home.weakPass'), {
                    timer: 15,
                    position: 'bottomRight',
                    type: 'error',
                    showLeftIcn: true,
                    showCloseIcn: true
                  });
                }
              }
            } else {
              this.$notification.new(this.$t('pages.home.empti'), {
                  timer: 15,
                  position: 'bottomRight',
                  type: 'error',
                  showLeftIcn: true,
                  showCloseIcn: true
                });
            }
          }
        } else {
          this.$notification.new(this.$t('pages.home.emptyMail'), {
            timer: 15,
            position: 'bottomRight',
            type: 'error',
            showLeftIcn: true,
            showCloseIcn: true
          });
        }
      } else {
        this.$notification.new(this.$t('pages.home.Tof'), {
          timer: 15,
          position: 'bottomRight',
          type: 'error',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    },
    onSubmitTwo () {
      this.loading = true
      this.signupTwo()
    },
    showPassword () {
      this.hide_username = true
      this.hide_password = true
      this.hideCode()
    },
    hidePassword () {
      this.hide_username = false
      this.hide_password = false
    },
    showCode () {
      this.hide_code = true
      this.hidePassword()
    },
    hideCode () {
      this.hide_code = false
    },
    verifPassword(){
      if (this.passwordTwo === this.password && this.password!== '' && this.passwordTwo!=='') {
        this.samePass = false
        this.samePass2 = true
      } else {
        this.samePass = true
      }
    },
    CheckPassword()
    {
      if (this.password!=='') {
        let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        if (this.password.match(passw)) {
          this.strongPass = false
          this.strongPass2 = true
        } else {
          this.strongPass = true
        }
      }
    },
    checkSpace(){
      this.spaceCheck = this.username.indexOf(' ') >= 0
    },
    googleRedirection(){
      this.$router.push('https://odaaay.com/google')
    },
    theming () {
      if (this.theme) {
        this.$colorMode.preference = this.colors[1]
        sessionStorage.setItem('dark', 'true')
      } else {
        this.$colorMode.preference = this.colors[0]
        sessionStorage.setItem('dark', 'false')
      }
    },

    resendCode(){

    },

    goToLogin(){
      this.$axios
        .post('/auth/email_verification', {
          email: this.email,
          code: this.code_email
        })
        .then((response) => {
          // if (response.data.status === 2) {
          //   this.nextTwoT()
          // }
          // if (response.data.status === 1) {
          //   this.showToast()
          this.$router.push(`/${this.$i18n.locale}/login`)
          // this.$store.commit('PUT_TOKEN', response.data.token)
          // } else {
          //   // TODO: TOAST MESSAGE
          // }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    signup () {
      this.$axios
        .post('/auth/signup', {
          user_name: this.username,
          code: this.code,
          phone_number: this.phone
        })
        .then((response) => {
          if (response.data.status === 1) {
            this.showTwo = true
            this.show = false
          }
          if (response.data.status === 2) {
            this.$notification.new(this.$t('pages.home.noExist'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if (response.data.status === 3) {
            this.$notification.new(this.$t('pages.home.nameExist'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if (response.data.status === 4) {
            this.$notification.new(this.$t('pages.home.nameExist'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    signupEmailTwo () {
      this.$axios
        .post('/auth/signup', {
          user_name: this.username,
          email: this.email,
          password: '',
          lang: this.$i18n.locale,
          code: parseInt(this.code_email)
        })
        .then((response) => {
          // if (response.data.status === 1) {
          //   const token = response.data.token
          //   let tokenNew = token.substring(2)
          //   tokenNew = tokenNew.substring(0, tokenNew.length - 1)
          //   this.$store.commit('PUT_TOKEN', tokenNew)
          //   this.$store.commit('PUT_ISLOGIN', true)
          //   localStorage.setItem('auth_token', tokenNew)
          //   window.$cookies.set('token', tokenNew, {
          //     sameSite: true,
          //     secure: true
          //   })
          //   this.$notification.new(this.$t('pages.home.welcome')+" 💕", {
          //     timer: 15,
          //     position: 'bottomRight',
          //     type: 'error',
          //     showLeftIcn: true,
          //     showCloseIcn: true
          //   });
          //   this.$store.commit('PUT_USER_UUID', response.data.uuid)
          //   this.$router.push(`/${this.$i18n.locale}`)
          // }
          if (response.data.status === 10) {
            this.$router.push(`/${this.$i18n.locale}/login`)
          }
        })
        .catch((error) => {
          console.log(error)
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

    signupTwo () {
      this.$axios
        .post('/auth/signup', {
          user_name: this.username,
          code: this.code,
          lang: this.$i18n.locale,
          phone_number: this.phone
        })
        .then((response) => {
          console.log(response.data)
          if (response.data.status === 1) {
            const token = response.data.token
            let tokenNew = token.substring(2)
            tokenNew = tokenNew.substring(0, tokenNew.length - 1)
            this.$store.commit('PUT_TOKEN', tokenNew)
            this.$store.commit('PUT_ISLOGIN', true)
            localStorage.setItem('auth_token', tokenNew)
            window.$cookies.set('token', tokenNew, {
              sameSite: true,
              secure: true
            })
            this.$notification.new(this.$t('pages.home.welcome')+" 💕", {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            });
            this.$store.commit('PUT_USER_UUID', response.data.uuid)
            this.$router.push(`/${this.$i18n.locale}`)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  head() {
    return {
      title: this.$t('pages.home.signSEO'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.home.signSeoContent'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.home.signSEO'),
        },
        {
          hid: 'publisher',
          name: 'publisher',
          content: 'Odaaay',
        },
        { hid: 'robots', name: 'robots', content: 'index follow' },
        // Google+ / Schema.org
        {
          itemprop: 'name',
          content: this.$t('pages.home.signSeoContent'),
        },
        {
          itemprop: 'description',
          content: this.$t('pages.home.signSeoContent'),
        },
        // ...
        // Facebook / Open Graph
        { property: 'og:title', content: 'Signup' },
        {
          property: 'og:image',
          content: 'https://odaaay.com/weather/logo.png',
        },
        {
          property: 'og:url',
          content: 'https://www.odaaay.co' + this.$route.fullPath
        },
        {
          property: 'og:site_name',
          content: 'Odaaay'
        },
        {
          property: 'og:description',
          content: this.$t('pages.home.signSeoContent'),
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://odaaay.com' + this.$route.fullPath,
        },
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
              'https://twitter.com/odaaay',
              'https://wikipedia.com/wikiaccount',
              'https://odaaay.com/',
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                email: 'admin@odaaay.co',
                contactType: 'customer service',
                availableLanguage: ['en', 'fr', 'pt', 'ha', 'es'],
              },
            ],
          },
        },
      ],
    }
  },
};
</script>
<style lang="css" scoped>
.tab {
  background-color: transparent !important;
}
.text-primary {
  color: #57caca !important;
}
</style>
