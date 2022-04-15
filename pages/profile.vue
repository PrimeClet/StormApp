<template>
  <div class="m-0 p-0 px-lg-4">
   <div class="m-0 p-0 px-lg-4">
    <div class="pt-4 scroller" v-if="username === undefined">
      <div class="row p-0 m-0">
        <div class="col-md-8 article-Detail px-lg-4 px-md-3 px-2 mb-5 pb-5 scroller">
          <div class="">
            <div class="profile-banner-img w-100 position-relative">
              <img :src="`https://odaaay.com/api/static/files/${user_data.background}`" alt="" class="w-100 bg-display" v-if="user_data.background" style="object-fit: cover;"/>
              <img src="~/assets/images/banner.png" alt="" class="w-100 h-100" v-else/>
              <p class="profile-name">
                {{ user_data.username }}
              </p>
              <p class="profile-bio" v-if="user_data.bio">
                <truncate class="truncate-less" clamp="..." :length="99" less="Show Less" :text="user_data.bio"></truncate>
              </p>
              <p class="profile-bio" v-else>
                {{ $t('pages.home.bio') }}
              </p>
              <div class="profile-img position-absolute">
                <img
                  :src="`https://odaaay.com/api/static/files/${user_data.picture}`"
                  alt=""
                  class="w-100 h-100 rounded-circle"
                  v-if="user_data.picture"
                />
                <img
                  src="~/assets/images/profile.png"
                  alt=""
                  class="w-100 h-100 rounded-circle"
                  v-else
                />
              </div>
            </div>
          </div>
          <div class="row mt-md-5 mt-4 article-detail-tabs">
            <div class="col-12 mt-5 mb-md-2 mb-0 d-flex flex-row justify-content-between">
              <button
                class="btn btn-light tabLinks"
                @click="openCity($event, 'publish')"
                id="defaultOpen"
              >
                <i class="fas fa-edit mr-md-1 mr-0"></i><span>{{ $t('pages.profile.posts') }}</span>
              </button>
              <button
                class="btn bg-transparent border-0 text-primary tabLinks"
                @click="openCity($event, 'saved')"
              >
                <i class="fas fa-bookmark mr-md-1 mr-0"></i><span>{{ $t('pages.profile.saved') }}</span>
              </button>
              <button
                class="btn bg-transparent border-0 text-primary tabLinks"
                @click="openCity($event, 'followers')"
              >
                <i class="fas fa-user-plus mr-1"></i><span>{{ $t('pages.profile.followers') }}</span>
              </button>
              <button
                class="btn bg-transparent border-0 text-primary tabLinks"
                @click="openCity($event, 'following')"
              >
                <i class="fas fa-user mr-1"></i><span>{{ $t('pages.profile.following') }}</span>
              </button>
<!--              <button-->
<!--                class="btn bg-transparent border-0 text-primary tabLinks"-->
<!--                @click="openCity($event, 'invites')"-->
<!--              >-->
<!--                <i class="fas fa-poll-h mr-1"></i><span>{{ $t('pages.profile.invite') }}</span>-->
<!--              </button>-->
              <button
                class="btn bg-transparent border-0 text-primary tabLinks"
                @click="openCity($event, 'settings')"
                ref="setting"
              >
                <i class="fas fa-cog mr-1"></i><span>{{ $t('pages.home.setting') }}</span>
              </button>
            </div>
          </div>
          <div id="publish" class="tabContent px-0 h-100">
            <artical-profile-post></artical-profile-post>
          </div>
          <div id="saved" class="tabContent px-0 h-100">
            <artical-profile-save></artical-profile-save>
          </div>
          <div id="followers" class="tabContent px-0 h-100">
            <followers :followers_data="followers"></followers>
          </div>
          <div id="following" class="tabContent px-0 h-100">
            <following :following_data="following"></following>
          </div>
          <div id="invites" class="tabContent px-0 h-100">
            <invitation-send></invitation-send>
          </div>
          <div id="settings" class="tabContent px-0 h-100">
            <profile-setting></profile-setting>
          </div>
        </div>
        <div class="col-md-4 post-sidebar mb-5 pb-5 scroller">
          <discover :component_data="discover"></discover>
        </div>
      </div>
    </div>
    <div class="pt-4 scroller" v-else>
          <div class="row p-0 m-0">
            <div class="col-md-8 article-Detail px-lg-5 px-md-3 px-4 mb-5 pb-5 scroller">
              <div class="">
                <div class="profile-banner-img w-100 position-relative">
                  <img :src="`https://odaaay.com/api/static/files/${otherUserData.background}`" style="object-fit: cover;" alt="" class="w-100 bg-display" v-if="otherUserData.background"/>
                  <img src="~/assets/images/banner.png" alt="" class="w-100 h-100" v-else/>
                  <p class="profile-name">
                    {{ otherUserData.username }}
                    <button class="btn btn-light float-right border-0 btn-sm rounded-pills align-self-center ml-3 mt-1 cursor-pointer" type="button" v-if="!isFollow">
                      {{ $t('pages.profile.follow') }}
                    </button>
                    <button class="btn btn-light float-right border-0 btn-sm rounded-pills align-self-center ml-3 mt-1 cursor-pointer" type="button" v-else>
                      {{ $t('pages.profile.unfollow') }}
                    </button>
                  </p>
                  <p class="profile-bio" v-if="otherUserData.bio">
                    <truncate class="truncate-less" clamp="..." :length="99" less="Show Less" :text=" otherUserData.bio"></truncate>
                  </p>
                  <p class="profile-bio" v-else>
                    "Bio Goes Here"
                  </p>
                  <div class="profile-img position-absolute">
                    <img
                      :src="`https://odaaay.com/api/static/files/${otherUserData.picture}`"
                      alt=""
                      class="w-100 h-100 rounded-circle"
                      v-if="otherUserData.picture"
                    />
                    <img
                      src="~/assets/images/profile.png"
                      alt=""
                      class="w-100 h-100 rounded-circle"
                      v-else
                    />
                  </div>
                </div>
              </div>
              <div class="row mt-md-5 mt-4 article-detail-tabs" id="isOther">
                <div class="col-12 mt-5 mb-md-2 mb-0 d-flex flex-row justify-content-between">
                  <button
                    class="btn btn-light tabLinks"
                    @click="openCity($event, 'posts')"
                    id="defaultOpenOne"
                    style="background-color: var(--bg);"
                  >
                    <i class="fas fa-edit mr-md-1 mr-0"></i><span>{{ $t('pages.profile.posts') }}</span>
                  </button>
                </div>
              </div>
              <div id="posts" class="tabContent px-0 h-100">
                <other-posts :component_data="discover1"></other-posts>
              </div>
            </div>
            <div class="col-md-4 post-sidebar mb-5 pb-5 scroller">
              <discover :component_data="discover"></discover>
            </div>
          </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import VClamp from 'vue-clamp';
import truncate from 'vue-truncate-collapsed';


import discover from "../components/sliderDataUser"
import communities from "../components/communities"
import Following from "@/components/following"
import Followers from "@/components/followers"
import InvitationSend from "@/components/invitationSend"
import ArticalProfilePost from "@/components/articalProfilePost"
import ArticalProfileSave from "@/components/articalProfileSave"
import OtherPosts from "@/components/otherPosts"
import ProfileSetting from "@/components/profileSetting"

export default {
  middleware: 'authentication',

  asyncData({req, store}) {
    if (process.server) {
      const ip = req.headers['x-forwarded-for']
      store.commit('PUT_USERIP', ip)
      return { ipadd: ip }
    }
  },

  async fetch() {
    await this.getDiscover()
  },

  components: {
    ProfileSetting,
    truncate,
    OtherPosts,
    ArticalProfileSave,
    ArticalProfilePost,
    InvitationSend,
    Followers,
    VClamp,
    Following,
    communities,
    discover,
  },

  data() {
    return {
      fan_base: 'following',
      fan_base1: 'followers',
      isFollow: false,
      otherUserData: '',
      user_data: [''],
      following: [''],
      followers: [''],
      discover: [''],
      discover1: [''],
      username: this.$route.query.username
    };
  },

  methods: {
    openCity(evt, cityName) {
      let i, tabContent, tabLinks;
      tabContent = document.getElementsByClassName("tabContent");
      for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }
      tabLinks = document.getElementsByClassName("tabLinks");
      for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        tabLinks[i].className = tabLinks[i].className.replace(" btn-light", "");
      }
      document.getElementById(cityName).style.display = "block";
      // evt.currentTarget.remove("bg-transparent");
      evt.currentTarget.className = "btn tabLinks border-0 text-primary active btn-light";
    },

    getFollowing(){
      this.$store
        .dispatch('getFollowingData', {
          fan_base: this.fan_base
        })
        .then((response) => {
          this.following = this.$store.state.following
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getDiscover() {
      this.$axios
        .get('/user/Randomusers?start=1&limit=5&count=5', {
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          this.discover = response.data.results
        })
        .catch((_error) => {})
    },

    getOtherUser() {
      this.$axios
        .get('/profile?start=1&limit=5&count=5&lang=' + this.$i18n.locale + '&uuid=' + this.$store.state.otherUser, {
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          this.isFollow = response.data.follow
          this.otherUserData = response.data.user_data
          this.discover1 = response.data.results
        })
        .catch((_error) => {})
    },

    getUserDetails() {
      this.$axios
        .get('/profile?start=1&limit=5&count=5&lang=' + this.$i18n.locale + '&uuid=' + this.$store.state.user_uuid, {
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          this.user_data = response.data.user_data
        })
        .catch((_error) => {})
    },

    getFollowers(){
      this.$store
        .dispatch('getFollowerData', {
          fan_base: this.fan_base1
        })
        .then((response) => {
          this.followers = this.$store.state.followers
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getUserSettings(){
      if (this.LogIn) {
        this.$store
          .dispatch('getUserSettings')
          .then((response) => {
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    getUserPosts(){
      this.$store
        .dispatch('getUserPosts')
        .then((response) => {
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getUserSaved(){
      this.$store
        .dispatch('getUserSave')
        .then((response) => {
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },

  mounted() {
    setTimeout(() => {
      if (this.$route.hash === '#settings') {
        this.$refs.setting.click()
      }
    }, 1000);

    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2500);
    });

    if (this.$route.query.username === undefined) {
      document.getElementById("defaultOpen").click();
    }

    if (this.$route.query.username !== undefined) {
      document.getElementById("defaultOpenOne").click();
      this.getOtherUser()
      this.getDiscover()
    }

  },

  computed: {
    ...mapState(['Usettings']),
    ...mapGetters({
      LogIn: 'loggedIn'
    }),
  },

  fetchOnServer: false,

  // head() {
  //   return {
  //     title: 'Profile',
  //   }
  // },

  beforeMount() {
    this.getFollowing()
    this.getUserDetails()
    this.getFollowers()
    // this.getUserSettings()
  },
  watch: {
    // '$store.state.userList': function() {
    //   this.getDiscover()
    // }
  },

};
</script>

<style scoped>
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


@media (max-width: 576px) {

}

@media (max-width: 576px) {
  .article-Detail .profile-img{
    height: 90px;
    width: 90px;
    top: 80%;
    left: 3% !important;
  }

  .bg-display {
    height: 147px !important
  }

  .profile-name {
    position: absolute;
    margin-left: 24%;
    font-size: larger;
    font-weight: bolder;
    margin-top: -1px;
  }

  .profile-bio {
    position: absolute;
    margin-left: 24%;
    font-size: small;
    margin-top: 32px;
    text-align: justify;
    line-height: 18px;
    height: 40px;
    overflow: hidden;
  }
}

@media (min-width: 1024px) {
  .article-Detail .profile-img{
    height: 90px;
    width: 90px;
    top: 75%;
    left: 5% !important;
  }

  .profile-name {
    position: absolute;
    margin-left: 28%;
    font-size: larger;
    font-weight: bolder;
    margin-top: -1px;
  }

  .profile-bio {
    position: absolute;
    margin-left: 27%;
    font-size: small;
    margin-top: 34px;
    text-align: justify;
    line-height: 18px;
  }
}

@media (min-width: 700px) and (max-width: 991px) {

  .article-Detail .profile-img{
    height: 90px;
    width: 90px;
    top: 75%;
    left: 10% !important;
  }

  .bg-display {
    height: 230px !important
  }

  .profile-name {
    position: absolute;
    margin-left: 31%;
    font-size: larger;
    font-weight: bolder;
    margin-top: -1px;
  }

  .profile-bio {
    position: absolute;
    margin-left: 30%;
    font-size: small;
    margin-top: 34px;
    text-align: justify;
    line-height: 16px;
  }
}

@media (min-width: 1290px) {

  .article-Detail .profile-img{
    height: 90px;
    width: 90px;
    top: 80%;
    left: 10% !important;
  }

  .bg-display {
    height: 300px !important
  }

  .profile-name {
    position: absolute;
    margin-left: 23%;
    font-size: larger;
    font-weight: bolder;
    margin-top: 6px;
  }

  .profile-bio {
    position: absolute;
    margin-left: 23%;
    font-size: small;
    margin-top: 44px;
    text-align: justify;
    padding-right: 25%;
  }
}


@media (min-width: 992px) and (max-width: 1000px) {

  .article-Detail .profile-img{
    height: 90px;
    width: 90px;
    top: 80%;
    left: 10% !important;
  }

  .bg-display {
    height: 259px !important
  }

  .profile-name {
    position: absolute;
    margin-left: 27%;
    font-size: larger;
    font-weight: bolder;
    margin-top: -1px;
  }

  .profile-bio {
    position: absolute;
    margin-left: 27%;
    font-size: small;
    margin-top: 34px;
    text-align: justify;
    padding-right: 8%;
  }
}

</style>
