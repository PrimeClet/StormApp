<template >
  <div class="relared-post rounded px-lg-4">
    <div class="d-flex flex-row justify-content-between p-md-0 p-2 mx-2 mb-2">
      <select class="form-select form-select-sm select-design" v-model="selectChoice" @change="teste(selectChoice)" aria-label=".form-select-sm example">
        <option :value="$t('pages.home.all')" selected>{{ $t('pages.home.categorie') }}</option>
        <option v-for="(data, $index) in categories" :key="$index">
          {{ data.name }}
        </option>
      </select>
      <h4>{{ selectChoice }}</h4>
    </div>
<!--    <&#45;&#45; TODO:  Third Colm NavBar Beginning&ndash;&gt;-->
<!--    <nav class="navbar navbar-expand-lg navbar-light bg-light mx-0 px-0">-->
<!--      <div class="container-fluid px-1">-->
<!--        <div class="d-flex flex-row justify-content-evenly align-content-around px-2 w-100" id="navbarSupportedContent">-->
<!--          <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
<!--            <li class="nav-item dropdown">-->
<!--              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                Categories-->
<!--              </a>-->
<!--              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">-->
<!--                  <li><a class="dropdown-item" href="#">Action</a></li>-->
<!--                  <li><a class="dropdown-item" href="#">Another action</a></li>-->
<!--                  <li><hr class="dropdown-divider"></li>-->
<!--                  <li><a class="dropdown-item" href="#">Something else here</a></li>-->
<!--              </ul>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <div class="d-flex">-->
<!--            <h4>{{ selectChoice }}</h4>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </nav>-->
<!--    <&#45;&#45; TODO:  Third Colm NavBar Beginning&ndash;&gt;-->

    <div
      class="card bg-transparent p-md-0 p-2"
      v-if="component_data"
    >
      <carousel
        :perPageCustom="[[100, 2], [700, 4]]"
        :mouse-drag="false"
        :autoplay="true"
        :navigationEnabled="true"
        :centerMode="true"
        :paginationEnabled="true"
        :loop="true"
        :controlsVisible="true"
        navigationPrevLabel="&#9664;&#xFE0E;"
        navigationNextLabel="&#9654;&#xFE0E;"
      >
        <slide v-for="(item, $index) in component_data" :key="$index">
          <div v-for="(items, $indexe) in item.posts" :key="$indexe">
            <a :href="`/${$i18n.locale}/article/` + items.uuid" target="_blank">
              <div class="row px-2 ">
                <div class="col-12 position-relative" style="height: 146px;">
                  <div class="">
                    <img
                      :src="checkUrl(items.thumb_url)"
                      alt="..."
                      class="h-100 w-100 rounded-3 "
                      style="object-fit: cover; height: 146px !important;"
                    />
                  </div>
                  <div class="img-badge position-absolute top-0 left-0 p-2">
                    <button
                      type="button"
                      class="btn bg-transparent p-0 m-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="blog information"
                    >
                      <i class="fas fa-exclamation-circle text-white"></i>
                    </button>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card-body p-0 py-2">
                    <h6 class="card-title text-base text-16">
                      <v-clamp autoresize :max-lines="2">
                        {{item.title}}
                      </v-clamp>
                    </h6>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </slide>
      </carousel>
    </div>
    <h3 class="text-center text-18" v-if="component_data.length === 0">
      <i class="fas fa-folder-open"></i> {{ $t('pages.home.nopaid') }}<span style="color: var(--color-primary)">{{ selectChoice }}</span>
    </h3>
  </div>
</template>
<script>
import VClamp from "vue-clamp";

export default {
  data() {
    return {
      selectChoice: this.$t('pages.home.all'),
      categories: [
        {'id': 5, 'name': this.$t('pages.home.entertainment')},
        {'id': 6, 'name': this.$t('pages.home.ponews')},
        {'id': 10, 'name': this.$t('pages.home.films')},
        {'id': 2, 'name': this.$t('pages.home.beauty')},
        {'id': 15, 'name': this.$t('pages.home.dating')},
        {'id': 1, 'name': this.$t('pages.home.sports')},
        {'id': 12, 'name': this.$t('pages.home.finance')},
        {'id': 9, 'name': this.$t('pages.home.food')},
        {'id': 7, 'name': this.$t('pages.home.health')},
        {'id': 4, 'name': this.$t('pages.home.Howto')},
        {'id': 11, 'name': this.$t('pages.home.music')},
        {'id': 8, 'name': this.$t('pages.home.parenting')},
        {'id': 13, 'name': this.$t('pages.home.people')},
        {'id': 3, 'name': this.$t('pages.home.science')},
        {'id': 14, 'name': this.$t('pages.home.Religion')}
      ],
    };
  },
  components: {
    VClamp
  },
  created() {
  },
  methods: {
    teste(data){
      if(this.selectChoice === this.$t('pages.home.all')){
        this.$store.commit('PUT_USERCATEGORY', null)
      } else {
        let id = this.categories.find(o => o.name === this.selectChoice).id
        this.$store.commit('PUT_USERCATEGORY', id)
      }
    },
    makeChoice(id){
      this.$router.push('/' + this.$i18n.locale + '?categorie=' + id)
    },
    getAllCategories() {
      this.$axios
        .get('/category', {
          params: {
            start: 1,
            limit: 10,
            count: 10
          }
        })
        .then((response) => {
          this.categories =  response.data.results
        })
        .catch((_error) => {})
    },
    checkUrl(url){
      // JavaScript/TypeScript
      if (url) {
        if (url.substring(0, 8) !== 'https://') {
          let urls = 'https://odaaay.com/api/static/files/' + url;
          return urls
        }else {
          return url
        }
      }

    },
  },
  props: ["component_data"],
};
</script>
<style lang="css">
div.dropdown-multicol{
  width: 30em;
}
div.dropdown-row>a.dropdown-item{
  display:inline-block;
  width: 32%;
}

/* Columns */
div.dropdown-multicol2{
  width: 30em;
}
div.dropdown-multicol2>div.dropdown-col{
  display:inline-block;
  width: 32%;
}

 /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .select-design {
    width: 45%;
    height: 21%;
    border-radius: 9px;
    background-color: var(--bg);
    color: var(--color-primary);
    font-weight: bolder;
  }
  .scroller {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 93vh;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .select-design {
    width: 27%;
    height: 21%;
    border-radius: 9px;
    background-color: var(--bg);
    color: var(--color-primary);
    font-weight: bolder;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .select-design {
    width: 27%;
    height: 21%;
    border-radius: 9px;
    background-color: var(--bg);
    color: var(--color-primary);
    font-weight: bolder;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .select-design {
    width: 16%;
    height: 21%;
    border-radius: 9px;
    background-color: var(--bg);
    color: var(--color-primary);
    font-weight: bolder;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .select-design {
    width: 16%;
    height: 21%;
    border-radius: 9px;
    background-color: var(--bg);
    color: var(--color-primary);
    font-weight: bolder;
  }
}
.VueCarousel-dot-container {
  margin-top: 0px !important;
}
.VueCarousel-dot[data-v-438fd353] {
  border-radius: 0% !important;
}
.VueCarousel-pagination[data-v-438fd353] {
  display: none;
}
.VueCarousel-navigation-next[data-v-453ad8cd] {
    right: 45px !important;
    /* background-image:url('~/assets/images/movie.png') */
}

.VueCarousel-navigation-prev[data-v-453ad8cd] {
    left: 45px !important;
}

.VueCarousel-navigation-button[data-v-453ad8cd] {
    color: black !important;
    background-color: white !important;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    padding: 0px !important;
    top:37% !important;
}
</style>
