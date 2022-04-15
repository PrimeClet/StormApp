<template>
  <div>
    <div class="row mt-3 mx-auto" v-if="followData.length !== 0">
      <div class="col-md-5 d-flex flex-row justify-content-center mt-2" v-for="(follow, $index) in followData" :key="$index">
        <div class="article-Detail align-self-center">
          <div class="profile-imgo mt-2">
            <img
              :src="`https://odaaay.com/api/static/files/${follow.picture}`"
              alt=""
              class="w-100 h-100 rounded-circle"
              v-if="follow.picture"
            />
            <img
              src="~/assets/images/profile.png"
              alt=""
              class="w-100 h-100 rounded-circle"
              v-else
            />
          </div>
        </div>
        <div class="d-flex flex-column ml-2 mt-2">
          <div class="d-flex flex-row justify-content-between">
            <div class="float-left d-flex flex-column my-auto mr-5 mr-lg-2 mr-sm-2">
              <h5 class="p-0 m-0 bd-highlight font-weight-bolder">
                <a :href="`/${$i18n.locale}/profile?username=` + follow.username" v-on:click="getOtherUser(follow.uuid, follow.username)">
                  {{ follow.username }}
                </a>
              </h5>
              <div class="p-0 m-0 bd-highlight text-12">@{{ follow.username }}</div>
            </div>
            <div class="float-right my-auto ml-5 ml-lg-5 ml-sm-3">
              <button type="button" class="btn btn-sm btn-light rounded-pills" v-on:click="unFollowHim(follow.uuid, $index)" >{{ $t('pages.profile.remove')}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 bg-transparent p-2" v-else>
      <div class="row w-100 h-100">
        <div class="col-12 d-flex flex-row justify-content-center align-items-center">
          <img src="@/assets/images/empty_box.svg" alt="" class="w-100 h-100 rounded">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "following",

  props: ["following_data"],

  data() {
    return {
      fan_base: 'following',
      isEmpty: false,
      followData: ['']
    }
  },

  methods: {
    getFollowing(){
      this.$axios
        .get('/user/following', {
          headers: {
            'API-KEY': this.$store.state.token,
          },
          params: {
            fan_base: this.fan_base
          }
        })
        .then((response) => {
          this.$store.commit('PUT_USERFOLLOWINGDATA', response.data.results)
          this.followData = response.data.results
          // this.getDiscover()
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
          this.$store.commit('PUT_USERSCACHEDATA', this.discover)
        })
        .catch((_error) => {})
    },

    getOtherUser(uuid, name) {
      this.$nuxt.refresh()
      this.$store.commit('PUT_OTHERUSERDATA', uuid)
      this.$router.push('/' + this.$i18n.locale + '/profile?username=' + name)
    },
    unFollowHim(uuid, index){
      this.$axios
        .delete('/user/following',
          {
            headers: {
              'API-KEY': this.$store.state.token
            },
            data: {
              uuid: uuid,
            },
          })
        .then((response) => {
          if(response.data.status === 1 ){
            this.getFollowing()
            this.$nuxt.refresh()
            this.followData.splice(index, 1)
            // this.vm.$forceUpdate();
            this.$notification.new("HeartBreak 💕", {
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
    }
  },
  watch: {
    '$store.state.following': function() {
      this.followData = this.$store.state.following
      this.getDiscover()
    }
  },
  mounted() {
    this.followData = this.following_data
    this.getFollowing()
  }

}
</script>

<style scoped>

.article-Detail .profile-img {
  height: 48px !important;
  width: 48px !important;
}

hr {
  height: 2px;
}

.badge-color {
  background-color: #292a2c !important;
}

.status-text {
  font-family: Arial;
  font-size: 14px;
}


</style>
