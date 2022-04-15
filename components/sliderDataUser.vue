<template >
  <div class="bg-secondary rounded">
    <div class="row">
      <div class="col-md-10 offset-md-1 pl-3">
        <h5 class="">{{ $t('pages.home.discover') }}</h5>
        <div class="mb-3 bg-transparent">
          <carousel
            :perPageCustom="[[100, 1]]"
            :mouse-drag="false"
            :autoplay="true"
            :navigationEnabled="false"
            :centerMode="true"
            :paginationEnabled="true"
            :loop="true"
          >
            <slide>
              <b-list-group style="max-width: 300px;" v-for="(c_data, $index) in component_data" :key="$index">
                <b-list-group-item class="d-flex align-items-center" style="padding-top: 8px !important;/*! padding: ; */padding-bottom: 8px !important; border: none !important;">
                  <b-avatar variant="info" src="@/assets/images/profile.png" class="mr-3" v-if="!c_data.picture"></b-avatar>
                  <b-avatar variant="info" :src="`https://odaaay.com/api/static/files/${c_data.picture}`" class="mr-3" v-else></b-avatar>
                  <span class="mr-auto">
                    <a :href="`/${$i18n.locale}/profile?username=` + c_data.username" v-on:click="getOtherUser(c_data.uuid, c_data.username)">
                      <h5 class="m-0 p-0 font-weight-bold">{{ c_data.username }}</h5>
                    </a>
                  </span>
                  <button type="button" class="btn btn-sm btn-light rounded-pills d-block" v-on:click="followHim(c_data.uuid, $event, $index)">
                    {{ $t('pages.profile.follow') }}
                  </button>
<!--                  <button type="button" class="btn btn-sm btn-light rounded-pills d-none" v-on:click="unFollowHim(c_data.uuid, $event)">-->
<!--                    {{ $t('pages.profile.unfollow') }}-->
<!--                  </button>-->
                </b-list-group-item>
                <b-modal ref="validate" id="modal-center" hide-footer centered title="Accept Paiement">
                  <div class="d-flex flex-column align-content-center justify-content-between">
                    <h1 class="mb-4"><i class="fas fa-user-lock"></i></h1>
                    <h4 class="mb-4">The User Is a Paid Account</h4>
                    <button class="btn btn-light mt-3 mr-3 p-1 btn-sm btn-block" v-on:click="subscribeToPost"><b>Accept Paiement <i class="fas fa-coins"></i></b></button>
                  </div>
                </b-modal>
              </b-list-group>
            </slide>
            <!-- <slide>
             <nuxt-link
               to="/"
               v-for="data in c_data.data"
               :key="data.id"
             >
               <div class="row px-2 mb-2">
                 <div class="col-md-3 col-2">
                   <div class="card-left-img">
                     <img
                       :src="require(`../assets/images/${data.img}`)"
                       alt="..."
                       class="h-100 w-100"
                     />
                   </div>
                 </div>
                 <div class="col-md-9 col-10 ps-4">
                   <div class="card-body p-1">
                     <h6 class="card-title">{{ data.heading }}</h6>
                   </div>
                 </div>
               </div>
             </nuxt-link>
           </slide>
             <slide>
             <nuxt-link
               to="/"
               v-for="data in c_data.data"
               :key="data.id"
             >
               <div class="row px-2 mb-2">
                 <div class="col-md-3 col-2">
                   <div class="card-left-img">
                     <img
                       :src="require(`../assets/images/${data.img}`)"
                       alt="..."
                       class="h-100 w-100"
                     />
                   </div>
                 </div>
                 <div class="col-md-9 col-10 ps-4">
                   <div class="card-body p-1">
                     <h6 class="card-title">{{ data.heading }}</h6>
                   </div>
                 </div>
               </div>
             </nuxt-link>
           </slide>
             <slide>
             <nuxt-link
               to="/"
               v-for="data in c_data.data"
               :key="data.id"
             >
               <div class="row px-2 mb-2">
                 <div class="col-md-3 col-2">
                   <div class="card-left-img">
                     <img
                       :src="require(`../assets/images/${data.img}`)"
                       alt="..."
                       class="h-100 w-100"
                     />
                   </div>
                 </div>
                 <div class="col-md-9 col-10 ps-4">
                   <div class="card-body p-1">
                     <h6 class="card-title">{{ data.heading }}</h6>
                   </div>
                 </div>
               </div>
             </nuxt-link>
           </slide>
             <slide>
             <nuxt-link
               to="/"
               v-for="data in c_data.data"
               :key="data.id"
             >
               <div class="row px-2 mb-2">
                 <div class="col-md-3 col-2">
                   <div class="card-left-img">
                     <img
                       :src="require(`../assets/images/${data.img}`)"
                       alt="..."
                       class="h-100 w-100"
                     />
                   </div>
                 </div>
                 <div class="col-md-9 col-10 ps-4">
                   <div class="card-body p-1">
                     <h6 class="card-title">{{ data.heading }}</h6>
                   </div>
                 </div>
               </div>
             </nuxt-link>
           </slide> -->
          </carousel>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name : 'sliderDataUser',

  data() {
    return {
      show : true,
      showButton: true,
      showTwo : true,
      score: 4,
      fan_base : 'following',
    };
  },

  methods: {
    getFollowing(){
      this.$store
        .dispatch('getFollowingData', {
          fan_base: this.fan_base
        })
        .then((response) => {
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
          this.component_data = response.data.results
        })
        .catch((_error) => {})
    },
    followHim(uuid, event, index){
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
            this.component_data.splice(index, 1)
            this.getFollowing()
            this.getDiscover()
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
            this.$refs['validate'].show()
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
          if(response.data.status === 1){
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
    '$store.state.userList': function() {

    }
  },

  props:["component_data"]
};
</script>
<style lang="css">
.VueCarousel-dot-container{
  margin-top: 0px  !important;
}
.VueCarousel-dot[data-v-438fd353]{
    border-radius: 0% !important;
}
</style>
