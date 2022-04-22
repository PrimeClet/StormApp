<template>
  <div class="pt-4 mb-5 pb-5">

    <div class="row card-row px-4 px-lg-3 d-flex justify-content-evenly ">
<!--      <div class="col-lg-4 position-relative px-0 text-primary align-self-center ml-5 mr-0">-->
<!--        <div class="card border-0 bg-dark text-primary">-->
<!--          <div class="card-body text-center">-->
<!--            <h5 class="text-primary fw-bold">Why Join Our Twitter And Other Social Accunts</h5>-->
<!--            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam. Ut enim ad minim veniam.</p>-->
<!--            <button href="#" class="btn btn-light text-primary">Get Started</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="col-lg-6 ">-->
<!--        <div class="img-bg overflow-hidden" style="height:400px;">-->
<!--          <lottie :options="defaultOptions"/>-->
<!--        </div>-->

<!--      </div>-->
      <div class="col-md-4 align-self-center">
        <div class="card-body text-center">
          <h5 class="text-primary fw-bold">Why Join Our Twitter And Other Social Accunts</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam. Ut enim ad
            minim veniam.</p>
          <button href="#" class="btn btn-light text-primary">Get Started</button>
        </div>
      </div>
      <div class="col-md-4 bordure p-2">
        <div class="card-body text-center">
          <h6 class="text-primary fw-bold mb-3">Estimate what you could make on Odaaay</h6>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="subscribers">
            <option value="50" selected>50 Subscribers</option>
            <option value="100">100 Subscribers</option>
            <option value="200">200 Subscribers</option>
            <option value="400">400 Subscribers</option>
            <option value="800">800 Subscribers</option>
            <option value="2000">2,000 Subscribers</option>
            <option value="5000">5,000 Subscribers</option>
            <option value="10000">10,000 Subscribers</option>
            <option value="50000">50,000 Subscribers</option>
          </select>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="dollars">
            <option value="5" selected>5$/month</option>
            <option value="7">7$/month</option>
            <option value="10">10$/month</option>
            <option value="15">15$/month</option>
            <option value="30">30$/month</option>
            <option value="75">75$/month</option>
          </select>
          <h2 class="text-primary fw-bold d-inline-block">$28,985</h2> <span>per month <i class="far fa-question-circle"></i></span>
          <button href="#" class="btn btn-light text-primary btn-block">Get Started</button>
          <div id="emailHelp" class="form-text">Writers keep 90% of their revenue minus credit card fees.</div>
        </div>
      </div>
    </div>
    <div class="row card-row px-0 px-lg-3 d-flex justify-content-evenly">
      <div class="col-lg-3 text-primary pt-3 p-0 mx-1">
        <div class="card border-0">
          <div class="card-body text-center">
            <div class="rounded-circle card-icon mb-3 mx-auto" >
              <span class="fa fa-lock  text-14"></span>
            </div>
            <h5 class="card-title text-primary fw-bold text-18 text-primary mb-0">Protection </h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam. Ut enim ad minim veniam.</p>
          </div>
        </div>

      </div>
      <div class="col-lg-3 text-primary pt-3 p-0 mx-1">
        <div class="card border-0">
          <div class="card-body text-center">
            <div class="rounded-circle card-icon mb-3 mx-auto" >
              <span class="fa fa-lock  text-14"></span>
            </div>
            <h5 class="card-title text-primary fw-bold text-18 text-primary mb-0">Protection</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam. Ut enim ad minim veniam.</p>
          </div>
        </div>

      </div>
      <div class="col-lg-3 text-primary pt-3 p-0 mx-1">
        <div class="card border-0">
          <div class="card-body text-center">
            <div class="rounded-circle card-icon mb-3 mx-auto" >
              <span class="fa fa-lock text-14"></span>
            </div>
            <h5 class="card-title text-primary fw-bold text-18 text-primary mb-0">Protection</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam. Ut enim ad minim veniam.</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import animationData from '@/anims/team.json'
import Lottie from 'vue-lottie/src/lottie.vue'

export default {
  name: "why-us",
  components: {
    lottie: Lottie,
  },
  data(){
   return{
     defaultOptions: {animationData},
     animationSpeed: 1,
     subscribers: '50',
     dollars: '5'
   }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2500)
    })
  }
}

</script>

<style >

.VueCarousel-navigation-next[data-v-453ad8cd] {
  right: 50px;
}
.VueCarousel-navigation-prev[data-v-453ad8cd] {
  left: 50px;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
  color: white;
  background-color: #ffffffb3;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 0px !important;
}

.card-row .card {
  background-color: transparent !important;
}

.bordure{
  border: solid #bbdefa 3px;
  border-radius: 5px;
}

</style>
