<template>
  <div>
    <div class="row mt-3 mx-auto" v-if="followData.length !== 0">
      <div class="col-md-5 d-flex flex-row justify-content-center mt-2" v-for="follow in followData" :key="follow.uuid">
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
            <div class="float-left d-flex flex-column my-auto mr-4 mr-sm-0 mr-md-0">
              <h5 class="p-0 m-0 bd-highlight font-weight-bolder">
                <a :href="`/${$i18n.locale}/profile?username=` + follow.username" v-on:click="getOtherUser(follow.uuid, follow.username)">
                  {{ follow.username }}
                </a>
                <span class="badge rounded-pill bg-light text-primary cursor-pointer d-block" style="color: var(--color-primary) !important" v-on:click="followHim(c_data.uuid, $event)">
                  {{ $t('pages.profile.follow') }}
                </span>
                <span class="badge rounded-pill bg-light text-primary cursor-pointer d-none" style="color: var(--color-primary) !important" v-on:click="unFollowHim(c_data.uuid, $event)">
                  {{ $t('pages.profile.unfollow') }}
                </span>
              </h5>
              <div class="p-0 m-0 bd-highlight text-12">@{{ follow.username }}</div>
            </div>
            <div class="float-right my-auto ml-5 ml-lg-5 ml-sm-4">
              <button type="button" class="btn btn-sm btn-light rounded-pills">{{ $t('pages.profile.block')}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 bg-transparent p-2" v-if="followData.length === 0">
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
  name: "followers",

  props: ["followers_data"],

  data() {
    return {
      fan_base1: 'followers',
      followData: ['']
    }
  },

  methods: {
    getFollowers(){
      this.$store
        .dispatch('getFollowerData', {
          fan_base: this.fan_base1
        })
        .then((response) => {
          this.followData = this.$store.state.followers
        })
        .catch((error) => {
          console.log(error)
        })
    },
    followHim(uuid, event){
      this.$axios
        .post('/user/following', {
          uuid: uuid
        },{
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          if(response.data.status === 1){
            // event.target.classList.remove('d-block')
            // event.target.classList.add('d-none')
            // event.target.nextElementSibling.classList.remove('d-none')
            // event.target.nextElementSibling.classList.add('d-block')
            this.getOtherUser()
            this.$notification.new("Another Friend In Odaaay 💕", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if(response.data.status === 0){
            this.$notification.new("It's a Paid Account 💕", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
            this.subscribeToPost('subs', response.data.uuid)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    subscribeToPost(tipe, uuids){
      this.$axios
        .post('/buy', {
          type: tipe,
          uuid: uuids,
          post_uuid: this.$route.params.slug,
          lang: this.$i18n.locale,
        },{
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          if (response.data.status === 1) {
            this.$notification.new("Your Account 💕 Is a paid Account", {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
            window.open(response.data.link, '_blank');
          }
          if (response.data.status === 2) {
            this.$notification.new("You are alreadY paid Account", {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getOtherUser(uuid, name) {
      this.$nuxt.refresh()
      this.$store.commit('PUT_OTHERUSERDATA', uuid)
      this.$router.push('/' + this.$i18n.locale + '/profile?username=' + name)
    },

    unFollowHim(uuid, event){
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
          // event.target.classList.remove('d-block')
          // event.target.classList.add('d-none')
          // event.target.previousElementSibling.classList.remove('d-none')
          // event.target.previousElementSibling.classList.add('d-block')
          if( response.data.status === 1 ){
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
    '$store.state.followers': function() {
      this.followData = this.$store.state.followers
    }
  },

  mounted() {
    this.followData = this.followers_data
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
