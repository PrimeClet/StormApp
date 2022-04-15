<template>
  <div class="d-flex align-items-center flex-column h-100 w-100 px-md-4" v-if="error.statusCode === 404">
    <lottie :options="defaultOptions" class="h-75 w-50 picture-delete"/>
    <h1 class="font-weight-bolder text-center">
      Dude, Where’s My Article?
    </h1>
    <a :href="`/${$i18n.locale}`" class="mt-2">
      <button class="btn btn-primary btn-sm p-2">
        <i class="fas fa-house-user text-white"></i> Back To Home
      </button>
    </a>
  </div>
</template>

<script>
import animationData from '~/assets/anims/error.json'
import Lottie from 'vue-lottie/src/lottie.vue'

export default {
  props: ['error'],
  components: {
    lottie: Lottie,
  },
  layout: 'default', // you can set a custom layout for the error page
  name: "error",
  data() {
    return {
      defaultOptions: {animationData},
      animationSpeed: 1
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
