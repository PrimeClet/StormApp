<template>
  <div class="d-flex align-items-center flex-column h-100 w-100 px-md-4" v-if="show">
    <img src="~/assets/images/delete.svg" class="h-50 w-25 picture-delete"/>
    <p class="text-danger text-center font-weight-bolder text-18">
      {{ $t('pages.home.deleteRest') }}
    </p>
    <p class="font-weight-bolder">
      {{ $t('pages.home.deleteEmail') }}
    </p>
    <button class="btn btn-primary btn-sm p-2" @click="deleteAccount('deactivate')">
      {{ $t('pages.home.deleteA') }}
    </button>
  </div>
  <div class="d-flex align-items-center flex-column h-100 w-100 px-md-4" v-else>
    <img src="~/assets/images/sadfeeling.svg" class="h-50 w-25 picture-delete"/>
    <p class="text-danger text-center font-weight-bolder text-18">
      {{ $t('pages.home.deleteDone') }}
    </p>
    <p class="font-weight-bolder text-center">
      {{ $t('pages.home.participate') }} <br> {{ $t('pages.home.participateTwo') }} <br>
    </p>
    <a :href="`/${$i18n.locale}`">
      <button class="btn btn-primary btn-sm p-2">
        <i class="fas fa-house-user text-white"></i> Go To Home
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: "delete-account",
  data() {
    return{
      data: '',
      show: true
    }
  },
  methods: {
    deleteAccount(type_post){
      this.$axios
        .post('/user/prefs', {
            type: type_post,
            user_visibility: false
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            }
          }
        )
        .then((response) => {
          if(response.data.status === 1) {
            this.$store
              .dispatch('Deconnex')
              .then((response) => {
              })
              .catch((error) => {
              })
            this.$notification.new(this.$t('pages.home.deleteacc'), {
              timer: 15,
              position: 'bottomRight',
              type: 'error',
              showLeftIcn: true,
              showCloseIcn: true
            })
            this.$notification.new(this.$t('pages.home.deleteac'), {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
          }
        })
        .catch((error) => {
        })
    }
  },
  mounted() {
    if (this.$route.query.delete === 'false') {
      this.show = true
    } else {
      this.show = false
    }
  }
}
</script>

<style scoped>
@media(max-width:576px) {
  .picture-delete {
    width: 76% !important;
    height: 50% !important;
  }
}
</style>
