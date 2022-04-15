<template>
  <div class="bg-primary articles scroller">
    <div class="card mb-3 bg-transparent p-0">
      <div class="dropdown px-xl-3">
        <button class="bg-transparent border-0 ms-auto d-block my-md-3  mt-3 mb-n4  text-primary" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
          {{ $t('pages.home.sort') }}<i class="fas fa-chevron-down ms-2"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end bg-secondary" aria-labelledby="dropdown">
          <li><a class="dropdown-item text-primary" @click="sortFunction('b')">{{ $t('pages.home.newest') }}</a></li>
          <li><a class="dropdown-item text-primary" @click="sortFunction('c')">{{ $t('pages.home.oldest') }}</a></li>
          <li><a class="dropdown-item text-primary" @click="sortFunction('d')">{{ $t('pages.home.muv') }}</a></li>
          <li><a class="dropdown-item text-primary" @click="sortFunction('e')">{{ $t('pages.home.random') }}</a></li>
        </ul>
      </div>
      <div class="row px-0 mt-4" v-for="(item, $index) in list" :key="$index">
        <div class="px-2" v-for="(items, $it) in item.posts" :key="$it">
          <div class="row px-2 px-xl-3">
            <div class="col-md-2 col-xl-2 col-3" v-if="items.thumb_url">
              <div class="mt-1">
                <img :src="items.thumb_url" alt="..." class=" w-100 h-100 rounded-3" style="object-fit: cover" />
              </div>
            </div>
            <div class="col-md-10 col-9" v-if="items.thumb_url">
              <div class="card-body p-0">
                <h6 class="card-title mb-2 cursor-pointer">
                  <a :href="`/${$i18n.locale}/article/` + items.uuid" target="_blank">
                    {{item.title}}
                  </a>
                </h6>
                <p class="lh-sm text-primary text-justify overflow-hidden">
                  <v-clamp autoresize :max-lines="2" style="font-size: 13px;line-height: 21px;">
                      {{item.content}}
                  </v-clamp>
                </p>
              </div>
            </div>
            <div class="col-md-12 col-12 px-2" v-else>
            <div class="card-body p-0">
              <h6 class="card-title mb-2 cursor-pointer">
                <a :href="`/${$i18n.locale}/article/` + items.uuid" target="_blank">
                  {{item.title}}
                </a>
              </h6>
              <p class="lh-sm text-primary m-0 overflow-hidden text-justify">
                <v-clamp autoresize :max-lines="3" style="font-size: 13px;line-height: 20px;">
                  {{item.content}}
                </v-clamp>
              </p>
            </div>
          </div>
          </div>
<!--          <div class="row px-2">-->
<!--            <div class="col-md-6 my-2 col-6">-->
<!--              <button class="btn btn-light btn-sm py-0">-->
<!--                <i class="fas fa-pen-nib me-1"></i><span>Edit</span>-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="col-md-6 my-2 col-6">-->
<!--              <ul class="list-group list-group-horizontal float-end">-->
<!--                <li class="list-group-item border-0">-->
<!--                  <b-button :id="`popover-target-${$index}`" class="border-0 bg-transparent m-0 p-0 mb-1">-->
<!--                    <i class="fas fa-share-alt"></i>-->
<!--                  </b-button>-->

<!--                  <b-popover :target="`popover-target-${$index}`" triggers="hover focus" placement="top">-->
<!--                    <ShareNetwork-->
<!--                      network="facebook"-->
<!--                      :url="`https://odaaay.co/${$i18n.locale}/article/` + items.uuid"-->
<!--                      :title="items.title"-->
<!--                    >-->
<!--                      <i class="fab fa-facebook"></i>-->
<!--                    </ShareNetwork>-->
<!--                    <ShareNetwork-->
<!--                      network="email"-->
<!--                      :url="`https://odaaay.co/${$i18n.locale}/article/` + items.uuid"-->
<!--                      :title="items.title"-->
<!--                    >-->
<!--                      <i class="fab fa-google"></i>-->
<!--                    </ShareNetwork>-->
<!--                    <ShareNetwork-->
<!--                      network="twitter"-->
<!--                      :url="`https://odaaay.co/${$i18n.locale}/article/` + items.uuid"-->
<!--                      :title="items.title"-->
<!--                    >-->
<!--                      <i class="fab fa-twitter"></i>-->
<!--                    </ShareNetwork>-->
<!--                    <ShareNetwork-->
<!--                      network="whatsapp"-->
<!--                      :url="`https://odaaay.co/${$i18n.locale}/article/` + items.uuid"-->
<!--                      :title="items.title"-->
<!--                    >-->
<!--                      <i class="fab fa-whatsapp"></i>-->
<!--                    </ShareNetwork>-->
<!--                  </b-popover>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
      <client-only>
        <infinite-loading @infinite="infiniteHandler" v-if="listOne.length !== 0"></infinite-loading>
      </client-only>
    </div>
    <div class="card mb-3 bg-transparent p-2" v-if="listOne.length === 0">
      <div class="row w-100 h-100">
        <div class="col-12 d-flex flex-row justify-content-center align-items-center">
          <img src="@/assets/images/empty_box.svg" alt="" class="w-100 h-100 rounded">
        </div>
        <h3 class="text-center font-weight-bolder  mt-4">
          {{ $t('pages.profile.noPost') }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import VClamp from 'vue-clamp';
import {mapGetters, mapState} from "vuex";

export default {
  name: "articalProfilePost",

  async fetch() {
    await this.getData()
  },

  components: {
    InfiniteLoading,
    VClamp
  },

  data() {
    return {
      page: 1,
      list: [''],
      listOne: [''],
    };
  },

  fetchOnServer: false,

  computed: {
    ...mapState([]),
    ...mapGetters({
      LogIn: 'loggedIn'
    }),
  },

  methods: {

    infiniteHandler($state){
      this.$axios
        .get('/user/posts?limit=5&count=5&type=posts&lang=' + this.$i18n.locale , {
          headers: {
            'API-KEY': this.$store.state.token
          },
          params: {
            start: this.page,
          }
        })
        .then((response) => {
          let Feed = response.data.results
          if (Feed.length) {
            this.page += 1
            this.list.push(...response.data.results)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
        .catch((_error) => {})
    },

    getData(){
      this.$axios
        .get('/user/posts?limit=5&count=5&type=posts&lang=' + this.$i18n.locale , {
          headers: {
            'API-KEY': this.$store.state.token
          },
          params: {
            start: this.page,
          }
        })
        .then((response) => {
          this.listOne = response.data.results
        })
        .catch((_error) => {})
    },

    sortFunction(command) {
      if (command === 'b') {
        this.$notification.new("Sorting Successfully By Newest", {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
        return this.list.sort(function (a, b) {
          if (a.posts) {
            const dateA = new Date(a.posts[0].created_on)
          }
          if (b.posts) {
            const dateB = new Date(b.posts[0].created_on)
          }
          return dateB - dateA
        })
      }
      if (command === 'c') {
        this.$notification.new("Sorting Successfully By Oldest", {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
        return this.list.sort(function (a, b) {
          if (a.posts) {
            const dateA = new Date(a.posts[0].created_on)
          }
          if (b.posts) {
            const dateB = new Date(b.posts[0].created_on)
          }
          return dateA - dateB
        })
      }
      if (command === 'e') {
        this.shuffleArray(this.list)
      }
    },

    shuffleArray(array) {
      let arra = array.sort(() => Math.random() - 0.5)
      if (arra) {
        this.$notification.new("Randomization Done Successfully", {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
      return arra
    }
  }
};
</script>

<style>
.addColor {
  color: rgb(240, 86, 84)!important;
}

.VueStar__icon {
  top: 1px;
  right: 100px;
  position: absolute;
}
.VueStar__decoration {
  width: 88px;
  height: 88px;
  position: absolute;
  left: -57px;
  top: -35px;
  bottom: 0;
  right: 0px;
  z-index: 1;
}

.popover .b-popover .popover-body{
  border: solid 3px #066f70 !important;
}

</style>
