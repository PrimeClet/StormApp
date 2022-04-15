<template>
  <div>
    <div class="tab">
      <button
        class="tablinks"
        @click="openCity($event, 'Headline', 1)"
        id="defaultOpen"
      >
        <i class="fas fa-edit me-1"></i>
        {{ $t('pages.home.writeArti') }}
      </button>
      <button class="tablinks" @click="openCity($event, 'Articles', 2)">
        <i class="fas fa-link me-1"></i>{{ $t('pages.home.linkArti') }}
      </button>
    </div>

    <div id="Headline" class="tabcontent px-0 h-100">
      <editor></editor>
    </div>

    <div id="Articles" class="tabcontent px-0 h-100">
      <div class="form-group mb-2">
        <label for="articleLink" class="fw-bold text-secondary">{{ $t('pages.home.articleLink') }}</label>
        <input
          id="articleLink"
          type="text"
          class="form-control bg-primary-500"
          placeholder="https://www.odaaay.co"
          v-model="linkArticle"
          v-on:blur="checkLink"
        />
      </div>
      <div class="pe-4 position-relative mb-2">
      <div class="progress bg-primary-500"  v-if="showProgression">
        <div
          v-if="showProgression"
          class="progress-bar"
          role="progressbar"
          :style="{ width: percentage + '%' }"
          :aria-valuenow="percentage"
          aria-valuemin="0"
          aria-valuemax="100"
        >
        </div>
      </div>
      <div class="position-absolute start-100" style="margin:-20px"  v-if="showProgression">
          <span class="text-10 text-secondary">{{ percentage }}%</span>
      </div>

      </div>
      <div class="form-group mt-2">
        <label for="articleTitle" class="fw-bold text-secondary">{{ $t('pages.home.articleTitle') }}</label>
        <input
          id="articleTitle"
          type="text"
          class="form-control bg-primary-500"
          :placeholder="`${$t('pages.home.place')}`"
          v-model="linkTitle"
        />
      </div>
      <div class="blog-title text-secondary">
<!--        <h2 class="lh-1 pt-3" v-if="!linkTitle">-->
<!--          {{ $t('pages.home.textWrite') }}-->
<!--        </h2>-->
        <h2 class="lh-1 pt-3 pb-3 text-center" v-if="linkTitle">
          {{ linkTitle }}
        </h2>
<!--        <span>-->
<!--          <i class="fa fa-clock text-10 text-secondary me-2 text-secondary"></i>2 hours-->
<!--          ago</span-->
<!--        >-->
      </div>
<!--      <div class="share my-2">-->
<!--        <i class="fa fa-share-alt p-2 bg-danger text-white "></i>-->
<!--      </div>-->
      <div class="article-content mt-2">
<!--        <div class="img" v-if="!thumbUrl">-->
<!--          <img src="../assets/images/profile.png" alt="" class="w-100" />-->
<!--        </div>-->
        <div class="img" v-if="thumbUrl">
          <img :src="thumbUrl" alt="" class="w-100" />
        </div>
        <div v-if="contentHolder">
          <p v-html="contentHolder" style="color: var(--color); text-align: justify;padding: 15px;line-height: 30px;"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import editor from "../components/editor";
export default {
  components: {
    editor,
  },

  data(){
    return {
      linkArticle: '',
      linkTitle: '',
      summarize: false,
      translate: false,
      contentHolder: '',
      showProgression: false,
      postUrl: '',
      value: 45,
      max: 100,
      typePost: 2,
      percentage: 0,
      thumbUrl: '',
      languagePost: this.$i18n.locale
    }
  },

  methods: {
    checkLink(){
      this.showProgression = false
      this.percentage = 0
      if(this.linkArticle === ''){
        this.showProgression = false
      }else {
        this.showProgression = true
      }
      this.$axios
        .post('/post/articlecheck', {
            Link: this.linkArticle,
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            },
            onDownloadProgress: (progressEvent) => {
              const currentProgress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              )
              if(this.percentage <= 100) {
                this.percentage += currentProgress
              }
              setTimeout(function(){
                this.showProgression = false
                this.percentage = 0
              }, 10000);
            }
          }
        )
        .then((response) => {
          if(response.data.status === 1 ){
            this.linkTitle = response.data.title
            this.thumbUrl = response.data.thumb
            this.contentHolder = response.data.content
            this.$store.commit('PUT_ARTICLELINKDATA', response.data)
            this.$notification.new(this.$t('pages.home.thO')+" 😉", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
            setTimeout(function(){
              this.showProgression = false
              this.percentage = 0
            }, 10000);
          }
        })
        .catch((error) => {
          console.log(error)
          this.showProgression = false
            this.$notification.new(this.$t('pages.home.thNot'), {
                  timer: 15,
                  position: 'bottomRight',
                  type: 'success',
                  showLeftIcn: true,
                  showCloseIcn: true
                });
        })
    },

    /**
     *
     * @param evt
     * @param cityName
     * @param type
     */
    openCity(evt, cityName, type) {

      this.$store.commit('PUT_TYPEOFPOST', type)
      if (type == 1) {
        this.$store.commit('REMOVE_ARTICLELINKDATA')
      }

      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2500);
    });

    document.getElementById("defaultOpen").click();
  },
};
</script>
<style lang="css">
</style>
