<template>
  <div class="wrapper d-flex align-items-stretch m-0 p-0 full-height product">
    <nav
      id="sidebar"
      class="bg-primary shadow"
      v-bind:class="[isHidden ? 'd-none' : 'd-block']"
    >
      <ul
        class="
          list-unstyled
          components
          full-screen-h
          pt-lg-5 pt-0
          h-100
          position-relative
        "
      >
        <li>
          <div class="logo">
            <nuxt-link
              :underline="false"
              :to="`/${$i18n.locale}/`"
            >
              <img
                src="@/assets/images/logo.png"
                width="80"
                height="100"
                alt="odaaay logo"
                title="odaaay logo"
                style="margin-bottom: 1%"
              />
            </nuxt-link>
            <img
              v-if="isLoad"
              :src="`/weather/${icon}.svg`"
              :alt="`${Math.round(temp)}°C  - ${weather.description} - ${city} `"
              :title="`${Math.round(temp)}°C  - ${weather.description} - ${city} `"
              width="70"
              height="70"
              style="position: absolute; top: 5%; left: 30%"
            />
          </div>
        </li>
        <!-- light and dark mode switch -->
        <li class="mt-lg-auto">
          <div>
            <button
              class="initial btn bg-transparent"
              :class="{ oneTwo: color_switch}"
              @click="($colorMode.preference = 'light'); change('1');"
            >
              <div><i class="fa fa-moon"></i></div>
            </button>
            <button
              class="initial btn bg-transparent"
              :class="{ oneTwo: !color_switch}"
              @click="($colorMode.preference = 'dark'); change('2');"
            >
              <div><i class="fa fa-sun"></i></div>
            </button>
          </div>
        </li>

        <li class="mobile-menu">
          <ul class="list-group list-group-flush w-100">
            <h6 class="text-left mb-0 text-secondary mb-1">Languages</h6>
            <span v-for="locale in availableLocales" :key="locale.code" class="d-flex align-items-center">
              <nuxt-link
                :underline="false"
                type="primary"
                style="margin-left: 5%"
                :to="switchLocalePath(locale.code)"
              >
                <li class="list-group-item border-0" v-if="$i18n.locale === locale.code" style="font-weight: bolder">
                  {{ locale.name }}
                </li>
                <li class="list-group-item border-0" v-else>
                  {{ locale.name }}
                </li>
              </nuxt-link>
            </span>
            <h6 class="text-left mb-0 mt-3 text-secondary mb-1">{{ $t('pages.home.page') }}</h6>
            <nuxt-link :to="`/${$i18n.locale}/`"
            >
              <li class="list-group-item border-0">{{ $t('pages.home.home') }}</li>
            </nuxt-link
            >
            <li class="list-group-item border-0" style="color: var(--color-primary) !important"  @click="searchTrigger">
              {{ $t('pages.home.search') }}
            </li>
            <nuxt-link :to="`/${$i18n.locale}/about`"
            >
              <li class="list-group-item border-0">
                {{ $t('pages.home.about') }}
              </li>
            </nuxt-link
            >
            <nuxt-link :to="`/${$i18n.locale}/agreement`"
            >
              <li class="list-group-item border-0">{{ $t('pages.home.agreement') }}</li>
            </nuxt-link
            >
            <nuxt-link :to="`/${$i18n.locale}/conPolicy`"
            >
              <li class="list-group-item border-0">
                {{ $t('pages.home.contentPoli') }}
              </li>
            </nuxt-link
            >
            <nuxt-link :to="`/${$i18n.locale}/priPolicy`"
            >
              <li class="list-group-item border-0">
                {{ $t('pages.home.privaPoli') }}
              </li>
            </nuxt-link
            >
            <nuxt-link :to="`/${$i18n.locale}/tou`"
            >
              <li class="list-group-item border-0">
                {{ $t('pages.home.TOE') }}
              </li>
            </nuxt-link
            >
            <nuxt-link :to="`/${$i18n.locale}/why-us`"
            >
              <li class="list-group-item border-0">
                {{ $t('pages.home.guide') }}
              </li>
            </nuxt-link
            >
            <nuxt-link :to="`/${$i18n.locale}/why-us`"
            >
              <li class="list-group-item border-0">
                {{ $t('pages.home.creators') }}
              </li>
            </nuxt-link
            >
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content" class="bg-primary position-relative mb-5 pb-5 mb-5">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary shadow-none">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo00">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <span v-for="locale in availableLocales" :key="locale.code" class="d-flex align-items-center">
                <nuxt-link
                  :underline="false"
                  type="primary"
                  style="margin-left: 5%"
                  :to="switchLocalePath(locale.code)"
                >
                  <li class="list-group-item border-0" v-if="$i18n.locale === locale.code" style="font-weight: bolder">
                    {{ locale.name }}
                  </li>
                  <li class="list-group-item border-0" v-else>
                    {{ locale.name }}
                  </li>
                </nuxt-link>
              </span>
            </ul>
            <div class="d-flex">
              <ul
                class="
                  list-group list-group-horizontal
                  vertical-align-middle
                  align-items-center
                  justify-content-center
                "
              >
                <li class="list-group-item border-0">
                  <a class="" :href="`/${$i18n.locale}/`">
                    <i
                      class="fas fa-house-user position-relative text-secondary"
                    ></i>
                  </a>
                </li>

                <li class="list-group-item border-0 px-0" :class="{ oneTwo: !$cookies.get('token')}">
                  <div class="dropdown">
                    <button
                      class="btn bg-transparent border-0 position-relative px-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i
                        class="
                          fas
                          fa-square-full
                          position-relative
                          text-secondary
                        "
                      ></i>
                      <span class="badge">a</span>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-end w-100 notification p-1 shadow"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <div class="d-flex flex-column border-bottom-2">
                        <div class="mb-3">
                          <span class="float-left font-weight-bolder">{{ $t('pages.home.notification') }}</span>
                          <span class="float-right text-14">
                            <nuxt-link to="#">Unread(3)</nuxt-link>
                        </span>
                        </div>
                      </div>
                      <div class="d-flex flex-column border-black-fade border-bottom-2 scroller"
                           style="height: 83%;overflow: auto;">
                        <a class="m-0 p-0" href="#" target="_blank" v-for="(notifi, $index) in notifications"
                           :key="$index" @click.prevent.stop="changeStatus(notifi.id, notifi.user, notifi.post_id)">
                          <div class="d-flex flex-row align-items-center border-bottom-2 mb-3">
                            <img
                              src="~/assets/images/avatar1.png"
                              alt=""
                              class="rounded-circle notif-picture"
                              style="width: 17%;height: 52%;"
                              v-if="!notifi.profilepic"
                            />
                            <img
                              :src="checkUrl(notifi.profilepic)"
                              alt=""
                              class="rounded-circle notif-picture"
                              style="width: 28%;height: 52%;"
                              v-else
                            />
                            <div class="d-flex flex-column ml-3 text-left">
                              <p class="m-0 p-0 font-weight-bolder text-14">
                                {{ notifi.user }}
                                <span class="text-danger text-20" v-show="!notifi.seen">*</span>
                              </p>
                              <p class="text-10 m-0 p-0 text-base">
                                <v-clamp autoresize :max-lines="2">
                                  {{ notifi.title }}
                                </v-clamp>
                              </p>
                              <p class="text-10 m-0 p-0">
                                <span class="m-0 p-0">
                                  <i class="fas fa-clock me-1"></i>
                                </span>
                                {{ timeAgo(notifi.time) }} ago
                              </p>
                            </div>
                          </div>
                        </a>
                        <div class="m-0 p-0 w-100 h-100" v-for="(notifie, $indexe) in notificationList" :key="$indexe">
                          <div class="m-0 p-0 w-100 h-100" v-for="(notif, $indexes) in notifie.post_data"
                               :key="$indexes">
                            <a class="m-0 p-0" href="#" target="_blank" v-for="(noti, $in) in notif.uploader_data"
                               :key="$in" @click.prevent.stop="changeStatus(notifie.id, noti.username, notif.uuid)">
                              <div class="d-flex flex-row align-items-center border-bottom-2 mb-3">
                                <img
                                  src="~/assets/images/avatar1.png"
                                  alt=""
                                  class="rounded-circle notif-picture"
                                  style="width: 17%;height: 52%;"
                                  v-if="!noti.picture"
                                />
                                <img
                                  :src="checkUrl(noti.profilepic)"
                                  alt=""
                                  class="rounded-circle notif-picture"
                                  style="width: 21%;height: 52%;"
                                  v-else
                                />
                                <div class="d-flex flex-column ml-3 text-left">
                                  <p class="m-0 p-0 font-weight-bolder text-14">
                                    {{ noti.username }}
                                    <span class="text-danger text-20" v-show="!notifie.seen">*</span>
                                  </p>
                                  <p class="text-10 m-0 p-0 text-base">
                                    <truncate class="truncate-less" clamp="..." :length="50" less="Show Less"
                                              :text="notif.title"></truncate>
                                  </p>
                                  <p class="text-10 m-0 p-0">
                                    <span class="m-0 p-0">
                                      <i class="fas fa-clock me-1"></i>
                                    </span>
                                    {{ timeAgo(notifie.created_on) }} ago
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column mt-1 border-bottom-2">
                        <p class="text-center text-12">
                          <i class="fas fa-arrow-circle-right"></i>
                          <span class="font-weight-bolder">{{ $t('pages.home.av') }}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item border-0">
                  <i
                    id="searchBtn"
                    class="fas fa-search text-base text-secondary"
                    @click="isHidden = !isHidden"
                  ></i>
                </li>
                <li class="list-group-item border-0 px-0" :class="{ oneTwo: !$cookies.get('token')}">
                  <div class="dropdown">
                    <button
                      class="
                        btn
                        bg-transparent
                        border-0
                        user-img
                        position-relative
                        px-2
                      "
                      type="button"
                      id="dropdownMenuButton22"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="~/assets/images/avatar1.png"
                        alt=""
                        class="w-100 rounded-circle"
                        :class="{ oneTwo: pic}"
                      />
                      <img
                        :src="checkUrl(pic)"
                        alt=""
                        class="w-100 rounded-circle"
                        :class="{ oneTwo: !pic}"

                      />
                    </button>

                    <ul
                      class="dropdown-menu dropdown-menu-end w-50"
                      aria-labelledby="dropdownMenuButton22"
                    >
                      <li>
                        <a class="dropdown-item" :href="`/${$i18n.locale}/profile`">
                          <i class="fas fa-user-circle mr-1"></i>{{ $t('pages.home.account') }}
                        </a>
                      </li>
                      <li :class="{ oneTwo: $cookies.get('token')}">
                        <a class="dropdown-item" :href="`/${$i18n.locale}/login`">
                          <i class="fas fa-sign-in-alt mr-1"></i>{{ $t('pages.home.signIn') }}
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" :href="`/${$i18n.locale}/profile#settings`">
                          <i class="fas fa-cog mr-1"></i>{{ $t('pages.home.setting') }}
                        </a>
                      </li>
                      <li :class="{ oneTwo: !$cookies.get('token')}">
                        <a class="dropdown-item" v-on:click="logOut">
                          <i class="fas fa-sign-out-alt mr-1"></i>{{ $t('pages.home.logOut') }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="list-group-item border-0" :class="{ oneTwo: $cookies.get('token')}">
                  <a :href="`/${$i18n.locale}/login`">
                    <button class="btn btn-primary btn-sm">
                      {{ $t('pages.home.login') }}
                    </button>
                  </a>
                </li>
                <li class="list-group-item border-0" :class="{ oneTwo: $cookies.get('token')}">
                  <a :href="`/${$i18n.locale}/signup`">
                    <button class="btn btn-light btn-sm">
                      {{ $t('pages.home.signup') }}
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- mobile nav -->
          <div class="d-flex mobile-navbar ms-auto">
            <ul
              class="
                list-group list-group-horizontal
                vertical-align-middle
                align-items-center
                justify-content-center
              "
            >
              <li class="list-group-item border-0" @click="showTrend" v-show="whereAm">
                <a class="">
                  <i
                    class="fab fa-gripfire text-danger fs-4 position-relative"
                  ></i>
                </a>
              </li>
              <li class="list-group-item border-0">
                <a class="" :href="`/${$i18n.locale}/`">
                  <i
                    class="fas fa-house-user position-relative text-secondary"
                  ></i>
                </a>
              </li>
              <li class="list-group-item border-0">
                <form class="search-form">
                  <div class="position-relative">
                    <i
                      id="searchBtnTwo"
                      class="fas fa-search text-primary"
                      @click="isHidden = !isHidden"
                    ></i>
                  </div>
                </form>
              </li>
              <li class="list-group-item border-0" :class="{ oneTwo: !LogIn}">
                <i
                  class="fas fa-bell position-relative me-1 text-secondary"
                ></i>
              </li>
              <li class="list-group-item border-0 px-0" :class="{ oneTwo: !$cookies.get('token')}">
                <div class="dropdown">
                  <button
                    class="
                        btn
                        bg-transparent
                        border-0
                        user-img
                        position-relative
                        px-2
                      "
                    type="button"
                    id="dropdownMenuButton32"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="~/assets/images/avatar1.png"
                      alt=""
                      class="w-100 rounded-circle"
                      :class="{ oneTwo: pic}"
                    />
                    <img
                      :src="pic"
                      alt=""
                      class="w-100 rounded-circle"
                      :class="{ oneTwo: !pic}"

                    />
                  </button>

                  <ul
                    class="dropdown-menu dropdown-menu-end w-50"
                    aria-labelledby="dropdownMenuButton42"
                  >
                    <li>
                      <a class="dropdown-item" :href="`/${$i18n.locale}/profile`">
                        <i class="fas fa-user-circle mr-1"></i>{{ $t('pages.home.account') }}
                      </a>
                    </li>
                    <li :class="{ oneTwo: LogIn}">
                      <a class="dropdown-item" :href="`/${$i18n.locale}/login`">
                        <i class="fas fa-sign-in-alt mr-1"></i>{{ $t('pages.home.signIn') }}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" :href="`/${$i18n.locale}/profile#settings`">
                        <i class="fas fa-cog mr-1"></i>{{ $t('pages.home.setting') }}
                      </a>
                    </li>
                    <li :class="{ oneTwo: !LogIn}">
                      <a class="dropdown-item" v-on:click="logOut">
                        <i class="fas fa-sign-out-alt mr-1"></i>{{ $t('pages.home.logOut') }}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="list-group-item border-0 px-1" :class="{ oneTwo: $cookies.get('token')}">
                <a :href="`/${$i18n.locale}/login`">
                  <button class="btn btn-primary btn-sm">
                    {{ $t('pages.home.login') }}
                  </button>
                </a>
              </li>
              <li class="list-group-item border-0 px-1" :class="{ oneTwo: $cookies.get('token')}">
                <a :href="`/${$i18n.locale}/signup`">
                  <button class="btn btn-light btn-sm">
                    {{ $t('pages.home.signup') }}
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <button
            class="btn bg-transparent border-0 navbar-toggler"
            type="button"
            id="sidebarCollapse2"
          >
            <i class="fas fa-bars fs-6 text-secondary"></i>
          </button>
        </div>
      </nav>
      <div class="px-lg-4 px-md-3 px-1 full-screen-h position-relative">
        <div
          class="
            position-absolute
            top-0
            bottom-0
            bg-primary
            start-0
            end-0
            search-overlay
            overflow-hidden
          "
          v-if="isHidden"
          style="z-index: 2"
        >
          <div
            class="
              d-flex
              w-100
              h-100
              align-items-center
              flex-column
              justify-content-start
              mt-lg-5
              bg-primary
            "
          >
            <div class="logo">
              <nuxt-link
                :underline="false"
                :to="`/${$i18n.locale}/`"
                rel="index nofollow"
              >
                <img
                  src="@/assets/images/logo.png"
                  width="80"
                  height="100"
                  alt="odaaay logo"
                  title="odaaay logo"
                  style="margin-bottom: 1%"
                />
              </nuxt-link>
              <img
                v-if="isLoad"
                :src="`/weather/${icon}.svg`"
                :alt="`${Math.round(temp)}°C  - ${weather.description} - ${city} `"
                :title="`${Math.round(temp)}°C  - ${weather.description} - ${city} `"
                width="70"
                height="70"
                style="position: absolute; top: 5%; left: 30%"
              />
            </div>

            <div class="mt-3 w-50">
              <div class="input-group input-group-lg shadow bg-primary">

                <div id="myDropdownn" class="dropdown-content form-control bg-primary">
                  <input
                    type="text"
                    placeholder="Search.."
                    id="myInput"
                    v-model="searchKeyWord"
                    @keyup="searchResult($event)"
                    class="bg-primary text-base"
                  />
                  <div class="search-dropdown-list bg-primary">
                    <a :href="`/${$i18n.locale}/article/${item.link}`" v-for="item in resultHtml" :key="item.id">
                      <img :src="item.pic" :alt="item.title" class="w-25 h-56 mr-2"
                           style="width: 44px !important;border-radius: 4px;">
                      <span v-html="item.title"/>
                    </a>
                  </div>
                  <div id="new-value"></div>
                </div>
                <button
                  class="btn btn-primary px-md-4 px-3 rounded-4"
                  type="button"
                >
                  <i class="fas fa-search text-white"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
        <nuxt/>
      </div>
      <nav
        class="
          navbar navbar-expand-lg navbar-light
          bg-primary
          shadow-lg
          fixed-bottom
          d-none
          d-lg-block
          d-xl-block
          p-0
        "
      >
        <div class="container-fluid" style="height: 35px">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <nuxt-link :to="`/${$i18n.locale}/`"
              >
                <li class="list-group-item border-0">{{ $t('pages.home.home') }}</li>
              </nuxt-link
              >
              <li class="list-group-item border-0" style="color: var(--color-primary) !important; cursor: pointer" @click="searchTriggerPhone">
                {{ $t('pages.home.search') }}
              </li>
              <nuxt-link :to="`/${$i18n.locale}/about`"
              >
                <li class="list-group-item border-0">
                  {{ $t('pages.home.about') }}
                </li>
              </nuxt-link
              >
              <nuxt-link :to="`/${$i18n.locale}/agreement`"
              >
                <li class="list-group-item border-0">{{ $t('pages.home.agreement') }}</li>
              </nuxt-link
              >
              <nuxt-link :to="`/${$i18n.locale}/conPolicy`"
              >
                <li class="list-group-item border-0">
                  {{ $t('pages.home.contentPoli') }}
                </li>
              </nuxt-link
              >
              <nuxt-link :to="`/${$i18n.locale}/priPolicy`"
              >
                <li class="list-group-item border-0">
                  {{ $t('pages.home.privaPoli') }}
                </li>
              </nuxt-link
              >
              <nuxt-link :to="`/${$i18n.locale}/tou`"
              >
                <li class="list-group-item border-0">
                  {{ $t('pages.home.TOE') }}
                </li>
              </nuxt-link
              >
              <nuxt-link :to="`/${$i18n.locale}/why-us`"
              >
                <li class="list-group-item border-0">
                  {{ $t('pages.home.guide') }}
                </li>
              </nuxt-link
              >
              <nuxt-link :to="`/${$i18n.locale}/why-us`"
              >
                <li class="list-group-item border-0">
                  {{ $t('pages.home.creators') }}
                </li>
              </nuxt-link
              >
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!--    <nuxt/>-->
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import truncate from 'vue-truncate-collapsed';
import VClamp from 'vue-clamp';


export default {
  // async fetch() {
  //   await this.getUserSettings()
  // },
  components: {
    truncate,
    VClamp
  },
  middleware: 'routeCheck',
  data() {
    return {
      city: '',
      temp: '',
      icon: '',
      isLoad: false,
      appid: 'd6835efa100519564437fa94966db26e',
      load: false,
      is_there: false,
      following: [],
      weather: '',
      appId: 'f61000a3c2a3bbc1022721c7e93bc207',
      language: this.$i18n.locale,
      currentRoute: '',
      randomArray: [
        {
          id: 1,
          name: "Rehan"
        },
        {
          id: 2,
          name: "Usama"
        },
        {
          id: 3,
          name: "Rehman"
        }
      ],
      searchKeyWord: '',
      resultHtml: [],
      fan_base: 'following',
      pic: '',
      logIN: '',
      // loading: true,
      pictureLoad: false,
      notifications: [],
      notificationList: [],
      chanel: [],
      imageProfile: '',
      isHidden: false,
      mediascreen: "",
      color_switch: true,
      currentroute: "",
      searchedItems: [], //Ex: [{value:'something', text: 'Some Text..'}]
      searchText: "",
      searching: false //When it's true "Loader" icon will show on search box.
    };
  },
  fetchOnServer: false,
  computed: {
    loading() {
      // console.log(this.$store.state.loading)
      return this.$store.state.loading
    },
    ...mapState(['Usettings', 'whereAm', 'profile_picture']),
    ...mapGetters({
      LogIn: 'loggedIn',
      imageProfil: 'getPic'
    }),
    availableLocales() {
      return this.$i18n.locales
    },
  },
  methods: {
    searchResult(event) {
      if (this.searchKeyWord === '') {
        this.resultHtml = [];
        return;
      } else {
        this.$axios
          .get(`/search?keyword=${this.searchKeyWord}`)
          .then((res) => {
            let htmlStringArray = []
            let items = res.data.results
            items.forEach((item, index) => {
              let boldString = this.boldString(item.title.toLowerCase(), this.searchKeyWord.toLowerCase());
              let datas = item.posts
              let pic = ''
              let linkId = ''
              datas.forEach((data, indexes) => {
                pic = data.thumb_url
                linkId = data.uuid
              })
              htmlStringArray.push({id: item.id, title: boldString, pic: pic, link: linkId});
            });
            this.resultHtml = htmlStringArray;
          })
          .catch((err) => {
            console.log(err)
          })
      }
      // const items = this.randomArray.filter(item => item.name.toUpperCase().indexOf(this.searchKeyWord.toUpperCase()) !== -1);
    },
    getWeatherCity(ip) {
      this.$axios
        .post('/user/ip_addressdata', {
          address: ip
        })
        .then((res) => {
          this.getWeather(res.data.res.city)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    changeStatus(id, user, uuid, index) {
      this.$axios
        .post('/post/receive/notification', {
            id: id,
            user: user
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            }
          }
        )
        .then((res) => {
          if (res.data.status === 1) {
            this.loadNotifications()
            this.$router.push('/' + this.$i18n.locale + '/article/' + uuid)
            // this.notifications.splice(index, 1)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    loadNotifications() {
      this.$axios
        .get('/post/receive/notification',
          {
            headers: {
              'API-KEY': this.$store.state.token
            },
            params: {
              start: 1,
              limit: 10,
              count: 10
            }
          }
        )
        .then((res) => {
          this.notificationList = res.data.results
        })
        .catch((err) => {
          console.log(err)
        })
    },
    timeAgo(date) {
      if (typeof date !== 'object') {
        date = new Date(date);
      }

      let seconds = Math.floor((new Date() - date) / 1000);
      let intervalType;

      let interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        intervalType = 'year';
      } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
          intervalType = 'month';
        } else {
          interval = Math.floor(seconds / 86400);
          if (interval >= 1) {
            intervalType = 'day';
          } else {
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
              intervalType = "hour";
            } else {
              interval = Math.floor(seconds / 60);
              if (interval >= 1) {
                intervalType = "minute";
              } else {
                interval = seconds;
                intervalType = "second";
              }
            }
          }
        }
      }

      if (interval > 1 || interval === 0) {
        intervalType += 's';
      }

      return interval + ' ' + intervalType;
    },
    getUserSettings() {
      if (this.$cookies.get('token')) {
        this.$axios
          .get('/user/prefs', {
            headers: {
              'API-KEY': this.$store.state.token
            }
          })
          .then((response) => {
            this.$store.commit('PUT_USERSETTINGS', response.data.user)
          })
          .catch((_error) => {
          })
      }
    },
    getWeather(location) {
      this.$axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.appId}`
        )
        .then((res) => {
          this.isLoad = true
          this.city = res.data.name
          this.temp = res.data.main.temp - 273.15
          this.icon = res.data.weather[0].icon
          this.weather = res.data.weather[0]
        })
        .catch((err) => {
          console.log(err)
        })
    },
    searchTrigger(e){
      // console.log("dedans")
      // e.preventDefault()
      document.getElementById('searchBtn').click()
    },
    searchTriggerPhone(e){
      // e.preventDefault()
      document.getElementById('searchBtnTwo').click()
    },
    getFollowings() {
      this.$store
        .dispatch('getFollowingData', {
          fan_base: this.fan_base
        })
        .then((response) => {
          this.following = this.$store.state.following
          for (let i = 0; i < this.following.length; i++) {
            this.chanel.push(this.following[i].username)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    boldString(str, find) {
      let re = new RegExp(find, "g");
      return str.replace(re, "<b>" + find + "</b>");
    },
    change(v) {
      if (v == "1") {
        this.color_switch = true;
      }
      if (v == "2") {
        this.color_switch = false;
      }
    },
    onEnter() {
      //Function will run on enter key press.
      this.getData();
    },
    onTyping() {
      //Function will quickly run when user stop typing on search box.
      this.getData();
    },
    logOut() {
      this.$store
        .dispatch('Deconnexion')
        .then((response) => {
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selected: function (value, text) {
      //Selected item "Value and Text" will receive in this function via params.
      console.log(value, text);
    },
    checkUrl(url) {
      // JavaScript/TypeScript
      if (url) {
        if (url.substring(0, 8) !== 'https://') {
          url = 'https://odaaay.com/api/static/files/' + url;
          return url
        } else {
          return url
        }
      }
    },
    getData() {
      //Getting data from API and filling items in "searchedItems"
      let self = this;
      self.searching = true;
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        this.searchText
      )
        .then(response => response.json())
        .then(json => {
          self.searchedItems = [];
          let data = json.drinks;
          if (data != null) {
            data.forEach(function (obj) {
              self.searchedItems.push({
                value: obj.idDrink,
                text: obj.strDrink + " " + obj.strCategory
              });
            });
          }
          self.searching = false;
        });
    },
    showTrend() {
      let trend = document.getElementById("trend")
      trend.classList.toggle('trend-phone')
    },
    setLocale(locale) {
      this.$i18n.setLocale(locale)
      this.$router.push({params: {lang: locale}})
      this.$router.go(this.$router.currentRoute)
    },
    getUserData() {
      this.$axios
        .get('/user', {
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          console.log(this.checkUrl(response.data.results.picture))
        })
        .catch((_error) => {
        })
    },

  },
  mounted() {
    (function ($) {
      "use strict";

      let fullHeight = function () {
        $(".js-fullheight").css("height", $(window).height());
        $(window).resize(function () {
          $(".js-fullheight").css("height", $(window).height());
        });
      };
      fullHeight();

      $("#sidebarCollapse2").on("click", function () {
        $("#sidebar").toggleClass("active");
      });

      $(document).click(function (e) {
        if ($(e.target).is('#sidebar *')) {
          return
        }
        ;
        if ($("#sidebar").hasClass("active")) {
          $("#sidebar").removeClass("active");
        }
        if ($(e.target).is('#sidebarCollapse2 *')) {
          $("#sidebar").toggleClass("active");
        }
        ;
      });
    })(jQuery);

    // Pusher
    let that = this
    if (process.client && that.$cookies.get('token')) {
      // Enable pusher logging - don't include this in production
      let doodo = []
      // let storeData = that.$store.state.following
      let logUser = that.$store.state.Usettings.username

      // for (let i = 0; i < storeData.length; i++) {
      //   doodo.push(storeData[i].username)
      // }

      Pusher.logToConsole = false;
      var pusher = new Pusher('4cc3ddc1b022abe535ce', {
        cluster: 'eu'
      })
      // for (let i = 0; i < doodo.length; i++) {
      //   doodo[i];
      //   let eventPusher = pusher.subscribe(doodo[i])
      //   eventPusher.bind('usernotification', function(data) {
      //     that.notifications.push(data.message)
      //   })
      // }
      // that.chanel.map(channelName => pusher.subscribe(channelName))
      // let that = this
      let eventPusher = pusher.subscribe(logUser)
      eventPusher.bind('usernotification', function (data) {
        that.notifications.push(data.message)
      })
    }

    console.log('profile_pic :', this.$cookies.get('profile_image'))
    console.log('profile_pic :', document.cookie)

    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      if (this.$cookies.get('articlePost')) {
        this.$cookies.remove('articlePost')
      }
    }

    if (this.$colorMode.preference = 'light') {
      this.color_switch = true
    } else if (this.$colorMode.preference = 'dark') {
      this.color_switch = false
    }


    // console.log(this.checkUrl(this.profile_picture))
    // console.log(this.checkUrl(localStorage.getItem('profile_image')))
    // if (process.client) {
    //this.pic = localStorage.getItem('profile_picture')
    // }

    this.getWeatherCity(this.$store.state.userIP)
    this.mediascreen = window.matchMedia("(max-width: 700px)");
  },
  watch: {
    $route() {
      if (this.mediascreen.matches) {
        $("#sidebar").removeClass("active");
        $("#navbarNav").removeClass("show");
      }
    },

    '$store.state.profile_picture': function () {
      // alert(this.checkUrl(this.$store.state.profile_picture))
      // if (this.$store.state.profile_picture) {
      //   this.pic = this.checkUrl(this.$store.state.profile_picture)
      // } else {
      //   this.pic= this.checkUrl(this.$store.state.profile_picture)
      // }
    },

    pic: function () {
      this.pic = localStorage.getItem('profile_picture')
    }
  },
  beforeMount() {
    if (localStorage.getItem('profile_picture')) {
      this.pic = localStorage.getItem('profile_picture')
    }
  },
  created() {
    console.log('profile_pic :', this.$cookies.get('profile_image'))

    if (this.$store.state.isLogin) {
      this.getFollowings()
      this.loadNotifications()
    }

    // this.currentroute = this.$router.currentRoute.path;
    // let para = this.$router.currentRoute.params.slug
    // let routes = "/" + this.$i18n.locale + "/article/" + para
    // this.is_there = this.currentRoute === routes
  },
  beforeCreate() {
    // console.log(this.Usettings.picture)
  }
};
</script>
<style lang="css" scoped>
.dropbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem !important;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.scroller {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 93vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroller::-webkit-scrollbar {
  display: none;
}

#sidebar.active {
  margin-left: 0 !important;
  min-width: 163px !important;
  z-index: 9999;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: #3e8e41;
}

#myInput {
  box-sizing: border-box;
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  border: none;
  width: 100%;
}

#myInput:focus {
  outline: transparent;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.oneTwo {
  visibility: hidden;
  height: 0px !important;
  display: none;
}

.search-dropdown-list {
  width: 100%;
  position: absolute;
  background-color: white;
  left: 0px;
  top: 46px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid lightgrey;
}

.dropdown-content a {
  text-decoration: none;
  display: block;
  padding: 12px 15px;
  border-bottom: 1px solid;
}

.dropdown a:hover {
  background-color: #ddd;
}

#sidebar ul li > ul {
  margin-top: 30px;
  margin-left: 18px !important;
}

.notif-picture:before {
  content: "😊" !important;
  margin-right: 10px !important;
  font-size: 10px !important;
}

.show {
  display: block;
}
</style>
