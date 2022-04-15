<template >
  <div class="bg-primary  articles scroller">
    <div class="card mb-3 bg-transparent p-2" v-if="component_data.length !== 0">
      <div class="dropdown">
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
      <div class="row px-2 mt-4 border-bottom" v-for="(item, $index) in component_data" :key="$index">
        <div class="p-0" v-for="(items, $it) in item.posts" :key="$it">
          <div class="row p-0">
            <div class="col-md-2 col-3" v-if="items.thumb_url">
              <div class="mt-1">
                <img :src="items.thumb_url" alt="..." class=" w-100 h-100 rounded-3" style="object-fit: cover" />
              </div>
            </div>
            <div class="col-md-10 col-9" v-if="items.thumb_url">
              <div class="card-body p-0">
                <!--  v-on="getArticle(items.uuid)"                <nuxt-link :underline="false" target="_blank" :to=""  >-->
                <h6 class="card-title mb-2 cursor-pointer">
                  <a :href="`/${$i18n.locale}/article/` + items.uuid" target="_blank">
                    {{item.title}}
                  </a>
                </h6>
                <!--                  </nuxt-link>-->
                <p class="lh-sm text-primary text-justify overflow-hidden">
                  <span v-html="item.content"></span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-12 col-12 p-0" v-if="!items.thumb_url">
            <div class="card-body p-0">
              <!--                  <nuxt-link :underline="false" :to="`/${$i18n.locale}/article/` + item.uuid" target="_blank">-->
              <h6 class="card-title mb-2 cursor-pointer">
                <a :href="`/${$i18n.locale}/article/` + items.uuid" target="_blank">
                  {{item.title}}
                </a>
              </h6>
              <!--                  </nuxt-link>-->
              <p class="lh-sm text-primary m-0 overflow-hidden text-justify">
                <span v-html="item.content"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
<!--      <infinite-loading @infinite="sortFunction"></infinite-loading>-->
    </div>
    <div class="card mb-3 bg-transparent p-2" v-if="component_data.length === 0">
      <div class="row w-100 h-100">
        <div class="col-12 d-flex flex-row justify-content-center align-items-center">
          <img src="@/assets/images/empty_box.svg" alt="" class="w-100 h-100 rounded">
        </div>
        <h3 class="text-center font-weight-bolder  mt-4">
          {{ $t('pages.profile.noPost') }} 😂
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name : 'otherPosts',

  data() {
    return {
      show : true
    };
  },

  mounted() {
    console.log(this.component_data)
  },

  methods: {

    sortFunction(command) {
      if (command === 'b') {
        this.$notification.new("Sorting Successfully By Newest", {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
        return this.component_data.sort(function (a, b) {
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
        return this.component_data.sort(function (a, b) {
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
        this.shuffleArray(this.component_data)
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
    },

    unFollowHim(uuid){
      console.log(uuid)
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
          this.show = true
          if( response.data.status === 1){
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
