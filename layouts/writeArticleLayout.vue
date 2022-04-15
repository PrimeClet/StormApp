<template>
  <div
    class="
      container-fluid
      m-0
      p-0
      full-height2
      bg-secondary-50
      write-article-layout
    "
  >
    <div class="position-relative">
      <div
        class="
          position-absolute
          top-50
          end-0
          translate-middle
          text-dark
          z-index-1
          article-sibar-btn
          d-none
        "
        @click="isSetting = !isSetting"
      >
        <div class="bg-white rounded-circle shadow">
          <i
            class="fas fa-cogs p-3 text-10"
            style="height: 45px; width: 45px"
          ></i>
        </div>
      </div>
      <div class="d-flex p-0 m-0">
        <div
          class="bg-primary border-end p-3 border-primary"
          style="height: 100vh; overflow-y: auto"
          v-bind:class="[isSetting ? 'setting-active' : 'setting-inActive']"
        >
          <div class="pt-2">
            <nuxt-link :to="`/${$i18n.locale}/`">
              <i class="fa fa-times text-base fs-5"></i>
            </nuxt-link>
          </div>
          <div class="px-3 position-relative mt-3">
            <div
              class="text-center position-absolute start-100"
              style="margin: -15px -21px"
            >
              <button
                class="btn bg-transparent ms-auto d-block p-0 me-n4"
                v-b-popover.hover.bottomleft="`${$t('pages.home.thumbN')}`"
              >
                <i class="fas fa-exclamation-circle text-light-500" style="color: #a7c4c5 !important;"></i>
              </button>
            </div>
            <div class="upload-btn-wrapper d-block text-center bg-primary-500" v-if="!thumbUrl && this.$store.state.typeOfPost === 1">
              <i class="fa fa-upload d-block fs-2"></i>
              <button class="btn text-secondary">{{ $t('pages.home.thumbnail') }}</button>
              <input type="file" name="myfile" @change="fileUpload" accept=".png, .jpg, .jpeg"/>
            </div>
            <div class="upload-btn-wrapper d-block text-center bg-primary-500" v-if="!thumbUrl && this.$store.state.typeOfPost === 2 && !articlePicture">
              <i class="fas fa-exclamation-circle d-block fs-2"></i>
              <button class="btn text-secondary text-10">{{ $t('pages.home.thumbnail') }}</button>
              <input type="file" name="myfile" @change="fileUpload" accept=".png, .jpg, .jpeg"/>
            </div>
            <div class="upload-btn-wrapper d-block text-center bg-primary-500" v-if="thumbUrl && this.$store.state.typeOfPost === 1">
              <img :src="image" alt="Pic" style="object-fit: contain;width: 60%;height: 100%;">
              <input type="file" name="myfile" @change="fileUpload" accept=".png, .jpg, .jpeg"/>
            </div>
            <div class="upload-btn-wrapper d-block text-center bg-primary-500" v-if="(thumbUrl && this.$store.state.typeOfPost === 2) || this.articleData.thumb ">
              <img :src="image" alt="Pic" style="object-fit: contain;width: 60%;height: 100%" v-if="articlePicture && image">
              <img :src="articlePicture" alt="Pic" style="object-fit: contain;width: 60%;height: 100%" v-if="articlePicture">
              <button class="btn text-secondary text-10">{{ $t('pages.home.thumbN') }}</button>
              <input type="file" name="myfile" @change="fileUpload" accept=".png, .jpg, .jpeg"/>
            </div>
          </div>
          <div class="px-3 pt-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="Adult"
                v-model="nsfw"
                checked
              />
              <label
                class="form-check-label d-flex align-items-center ps-2"
                for="Adult"
              >
                {{ $t('pages.home.adult') }}
                <div class="text-center" style="margin-top: -11px; margin-left: -11px;">
                  <button
                    class="btn bg-transparent d-block p-0"
                    v-b-popover.hover.bottomleft= "`${$t('pages.home.Explicit')}`"
                  >
                    <i
                      class="fas fa-exclamation-circle text-dark ms-3 text-10" style="color: #a7c4c5 !important;"
                    ></i>
                  </button>
                </div>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                v-model="subscriber"
                id="subscribers"
                @change="subChoice"
                :disabled="showSub"
              />
              <label
                class="form-check-label d-flex align-items-center ps-2"
                for="subscribers"
              >
                {{ $t('pages.home.sbs') }}
                <div class="text-center" style="margin-top: -11px; margin-left: -11px;">
                  <button
                    class="btn bg-transparent d-block p-0"
                    v-b-popover.hover.bottomleft="`${$t('pages.home.Subcribers')}`"
                  >
                    <i
                      class="fas fa-exclamation-circle text-dark ms-3 text-10" style="color: #a7c4c5 !important;"
                    ></i>
                  </button>
                </div>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                v-model="translate"
                id="translate"
              />
              <label
                class="form-check-label d-flex align-items-center ps-2"
                for="translate"
              >
                {{ $t('pages.home.translate') }}
                <div class="text-center" style="margin-top: -11px; margin-left: -11px;">
                  <button
                    class="btn bg-transparent d-block p-0"
                    v-b-popover.hover.bottomleft="`${$t('pages.home.translates')}`"
                  >
                    <i
                      class="fas fa-exclamation-circle text-dark ms-3 text-10" style="color: #a7c4c5 !important;"
                    ></i>
                  </button>
                </div>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="summarize"
                v-model="summarize"
              />
              <label
                class="form-check-label d-flex align-items-center ps-2"
                for="summarize"
              >
                {{ $t('pages.home.summarize') }}
                <div class="text-center" style="margin-top: -11px; margin-left: -11px;">
                  <button
                    class="btn bg-transparent d-block p-0"
                    v-b-popover.hover.bottomleft="`${$t('pages.home.Summarize')}`"
                  >
                    <i
                      class="
                        fas
                        fa-exclamation-circle
                        text-dark
                        ms-3
                        text-10
                        position-relative
                      "
                      style="color: #a7c4c5 !important;"
                    ></i>
                  </button>
                </div>
              </label>
            </div>
          </div>
          <div class="px-3">
            <div class="tag-input bg-primary-500 rounded-2 mt-3">
              <div
                v-for="(tag, index) in tags"
                :key="tag"
                class="tag-input__tag"
              >
                {{ tag }}
                <span @click="removeTag(index)">x</span>
              </div>
              <input
                type="text"
                :placeholder="`${$t('pages.home.tag')}`"
                class="tag-input__text"
                @keydown.enter="addTag"
                @keydown.188="addTag"
              />
            </div>
          </div>
          <div class="px-3 m-0">
            <hr class="h-25" />
          </div>
          <div id="phoneHelp" class="form-text mt-0 mb-0 px-3">
            {{ $t('pages.home.hitEnter') }}
          </div>
          <div class="px-3 mt-3">
            <label class="typo__label">{{ $t('pages.home.categorie') }}</label>
            <div class="bg-primary-500 rounded-2 w-100 px-0">
              <vselect label="name" :options="options" v-model="valueSelect" :reduce="name => name.id"></vselect>
            </div>
          </div>

          <!--          TODO : Disable Paiement Properly-->
<!--          <div class="px-3 pt-3">-->
<!--            <div class="form-check">-->
<!--              <input-->
<!--                class="form-check-input"-->
<!--                type="checkbox"-->
<!--                value=""-->
<!--                v-model="donations"-->
<!--                id="donation"-->
<!--                @change="donateChoice"-->
<!--                :disabled="showDonate"-->
<!--              />-->
<!--              <label-->
<!--                class="form-check-label d-flex align-items-center ps-2"-->
<!--                for="donation"-->
<!--              >-->
<!--                Donation-->
<!--                <button-->
<!--                  class="btn bg-transparent d-block p-0"-->
<!--                  v-if="!showDonate"-->
<!--                  v-b-popover.hover.bottomleft="-->
<!--                    'Hello this is me shanzay tariq i am a expert frontend developer'-->
<!--                  "-->
<!--                >-->
<!--                  <i-->
<!--                    class="-->
<!--                      fas-->
<!--                      fa-exclamation-circle-->
<!--                      text-dark-->
<!--                      ms-3-->
<!--                      text-10-->
<!--                      position-relative-->
<!--                    "-->
<!--                  ></i>-->
<!--                </button>-->
<!--                <button-->
<!--                  class="btn bg-transparent d-block p-0"-->
<!--                  v-else-->
<!--                  v-b-popover.hover.bottomleft="-->
<!--                    'Monetise Your Account First To Access to This Functionality'-->
<!--                  "-->
<!--                >-->
<!--                  <i-->
<!--                    class="-->
<!--                      far-->
<!--                      fa-eye-->
<!--                      text-dark-->
<!--                      ms-3-->
<!--                      mt-2-->
<!--                      text-10-->
<!--                      position-relative-->
<!--                    "-->
<!--                  ></i>-->
<!--                </button>-->
<!--              </label>-->
<!--            </div>-->
<!--&lt;!&ndash;            <rangeSlider v-if="!showDonate"/>&ndash;&gt;-->

<!--&lt;!&ndash;            <div class="form-check mb-n1">&ndash;&gt;-->
<!--&lt;!&ndash;              <input&ndash;&gt;-->
<!--&lt;!&ndash;                class="form-check-input"&ndash;&gt;-->
<!--&lt;!&ndash;                type="checkbox"&ndash;&gt;-->
<!--&lt;!&ndash;                value=""&ndash;&gt;-->
<!--&lt;!&ndash;                id="payment"&ndash;&gt;-->
<!--&lt;!&ndash;                v-model="payments"&ndash;&gt;-->
<!--&lt;!&ndash;                @change="paiementChoice"&ndash;&gt;-->
<!--&lt;!&ndash;                :disabled="showPay"&ndash;&gt;-->
<!--&lt;!&ndash;              />&ndash;&gt;-->
<!--&lt;!&ndash;              <label&ndash;&gt;-->
<!--&lt;!&ndash;                class="form-check-label d-flex align-items-center ps-2"&ndash;&gt;-->
<!--&lt;!&ndash;                for="payment"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                Payment&ndash;&gt;-->
<!--&lt;!&ndash;                <button&ndash;&gt;-->
<!--&lt;!&ndash;                  class="btn bg-transparent d-block p-0"&ndash;&gt;-->
<!--&lt;!&ndash;                  v-if="!showPay"&ndash;&gt;-->
<!--&lt;!&ndash;                  v-b-popover.hover.bottomleft="&ndash;&gt;-->
<!--&lt;!&ndash;                    'Hello this is me shanzay tariq i am a expert frontend developer'&ndash;&gt;-->
<!--&lt;!&ndash;                  "&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <i&ndash;&gt;-->
<!--&lt;!&ndash;                    class="&ndash;&gt;-->
<!--&lt;!&ndash;                      fas&ndash;&gt;-->
<!--&lt;!&ndash;                      fa-exclamation-circle&ndash;&gt;-->
<!--&lt;!&ndash;                      text-dark&ndash;&gt;-->
<!--&lt;!&ndash;                      ms-3&ndash;&gt;-->
<!--&lt;!&ndash;                      text-10&ndash;&gt;-->
<!--&lt;!&ndash;                      position-relative&ndash;&gt;-->
<!--&lt;!&ndash;                    "&ndash;&gt;-->
<!--&lt;!&ndash;                  ></i>&ndash;&gt;-->
<!--&lt;!&ndash;                </button>&ndash;&gt;-->
<!--&lt;!&ndash;                <button&ndash;&gt;-->
<!--&lt;!&ndash;                  class="btn bg-transparent d-block p-0"&ndash;&gt;-->
<!--&lt;!&ndash;                  v-else&ndash;&gt;-->
<!--&lt;!&ndash;                  v-b-popover.hover.bottomleft="&ndash;&gt;-->
<!--&lt;!&ndash;                    'Monetise Your Account First To Access to This Functionality'&ndash;&gt;-->
<!--&lt;!&ndash;                  "&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <i&ndash;&gt;-->
<!--&lt;!&ndash;                    class="&ndash;&gt;-->
<!--&lt;!&ndash;                      far&ndash;&gt;-->
<!--&lt;!&ndash;                      fa-eye&ndash;&gt;-->
<!--&lt;!&ndash;                      text-dark&ndash;&gt;-->
<!--&lt;!&ndash;                      ms-3&ndash;&gt;-->
<!--&lt;!&ndash;                      mt-2&ndash;&gt;-->
<!--&lt;!&ndash;                      text-10&ndash;&gt;-->
<!--&lt;!&ndash;                      position-relative&ndash;&gt;-->
<!--&lt;!&ndash;                    "&ndash;&gt;-->
<!--&lt;!&ndash;                  ></i>&ndash;&gt;-->
<!--&lt;!&ndash;                </button>&ndash;&gt;-->
<!--&lt;!&ndash;              </label>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--&lt;!&ndash;            <div class="" v-show="!showPay">&ndash;&gt;-->
<!--&lt;!&ndash;              <input type="range" value="80" min="10" max="100" step="1" :disabled="showPay" />&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="d-flex w-100 mt-n2" v-if="!showPay">&ndash;&gt;-->
<!--&lt;!&ndash;              <div>1</div>&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="ms-auto">&ndash;&gt;-->
<!--&lt;!&ndash;                <input&ndash;&gt;-->
<!--&lt;!&ndash;                  type="text"&ndash;&gt;-->
<!--&lt;!&ndash;                  value="80"&ndash;&gt;-->
<!--&lt;!&ndash;                  class="w-100 text-end p-0 bg-transparent text-secondary"&ndash;&gt;-->
<!--&lt;!&ndash;                  id="rangeSliderValue"&ndash;&gt;-->
<!--&lt;!&ndash;                />&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--          </div>-->
          <div class="d-flex justify-content-between mt-md-5 px-3">
<!--            <button class="btn btn-primary btn-sm">-->
<!--              <i class="fas fa-sync text-white me-1"></i> Save-->
<!--            </button>-->
            <button class="btn btn-primary btn-sm btn-block mx-1 mx-lg-1 mt-2" @click="makeArticlePost">
              <i class="fas fa-cloud-upload-alt text-white me-1"></i>{{ $t('pages.home.publish') }}
            </button>
          </div>
        </div>
        <div class="w-100 bg-light-500" style="height: 100vh; overflow-y: auto">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rangeSlider from '../components/rangeSlider.vue'
import {mapGetters, mapState} from "vuex";
import 'vue-select/dist/vue-select.css';

// import articalDetail from "../components/articalDetail";

export default {
  components:{
    rangeSlider
  },
  data() {
    return {
      tags: [],
      isSetting: true,
      linkArticle: '',
      articlePicture: '',
      image: '',
      isActive: (this.account_payment === 0 && this.post_payment === 0),
      linkTitle: '',
      summarize: true,
      translate: true,
      contentHolder: '',
      showProgression: false,
      postUrl: null,
      headlinetitle: '',
      value: 45,
      max: 100,
      maxs: 0,
      mins: 0,
      typePost: 2,
      percentage: 0,
      post0rLink: true,
      thumbUrl: '',
      prices: 0,
      nsfw: false,
      showDonate: false,
      showSub: true,
      showPay: false,
      valueSelect: 6,
      options: [
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
      payments: false,
      donations: false,
      subscriber: false,
      languagePost: this.$i18n.locale
    };
  },
  computed: {
    ...mapState(['post_payment', 'account_payment', 'articleData']),
    ...mapGetters({
      LogIn: 'loggedIn'
    }),
  },
  watch: {
    '$store.state.articleData': function() {
      this.articlePicture = this.$store.state.articleData.thumb
    }
  },
  methods: {
    subChoice(){
      if (this.subscriber){
        this.showPay = true
      } else {
        this.showPay = false
      }
    },
    donateChoice(){
      if (this.donations){
        this.showPay = true
      } else {
        this.showPay = false
      }
    },
    paiementChoice(){
      if (this.payments){
        this.showDonate = true
        this.showSub = true
      } else {
        this.showDonate = false
        this.showSub = false
      }
    },
    addTags (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    addTag(event) {
      event.preventDefault();
      let val = event.target.value.trim();
      if (val.length > 0) {
        this.tags.push(val);
        event.target.value = "";
      }
    },
    fileUpload(event) {
      this.thumbUrl = event.target.files[0]
      let formData = new FormData()
      formData.append('file', this.thumbUrl)
      formData.append('name', this.thumbUrl.name)

      this.$axios
        .post(
          '/upload', formData,
          {
            headers: {
              'API-KEY': this.$store.state.token,
              "Content-Type": "multipart/form-data"
            },
            // params: {
            //   file: this.thumbUrl,
            //   name: this.thumbUrl.name,
            // }
          }
        )
        .then((response) => {
          if(response.data.status === 1 ){
            this.thumbUrl = response.data.thumb_url
            this.$notification.new(this.$t('pages.home.thO')+" 😉", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
        })
        .catch((error) => {
          console.log(error)
        })
      this.createImage(this.thumbUrl)
    },
    donate(){
      if(!this.donations){
        this.showDonate = false
        this.payments = false
        this.showPay = true
      } else {
        this.showPay = false
        this.showDonate = true
      }

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
          this.options = response.data.results
        })
        .catch((_error) => {})
    },
    paymentO(){
      if(!this.payments){
        this.showDonate = true
        this.donations = false
        this.showPay = false
      } else {
        this.showPay = true
        this.showDonate = false
      }
    },
    makeArticlePost(){
      let that = this;
      event.preventDefault();
      (function ($) {
        "use strict";
        that.contentHolder = $("#editor").prop('outerHTML')
        that.headlinetitle = $("#posTitle").val()
        that.linkTitle = $("#articleLink").val()
        if (that.donations) {
          that.mins = $("#slider-range-value1").text().substring(1)
          that.maxs = $("#slider-range-value2").text().substring(1)
        }
        if (that.payments) {
          that.prices = $("#rangeSliderValue").val()
        }
        if ($($(".tablinks")[0]).hasClass('active')){
          that.post0rLink = true
        }
        if ($($(".tablinks")[1]).hasClass('active')){
          that.post0rLink = false
        }

      })(jQuery);


      //articlePost
      if (this.post0rLink) {
        if (this.valueSelect === 0) {
          this.$notification.new(this.$t('pages.homes.categorieChoice'), {
            timer: 15,
            position: 'bottomRight',
            type: 'success',
            showLeftIcn: true,
            showCloseIcn: true
          });
        } else {
          let category = this.valueSelect

          if(this.payments && (this.thumbUrl === '')) {
            this.$notification.new(this.$t('pages.home.postDones')+" 😉", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          } else {
            this.$axios
              .post('/post', {
                  title: this.headlinetitle,
                  type: 1,
                  post_url: '',
                  thumb: this.thumbUrl,
                  content: this.contentHolder,
                  lang: this.languagePost,
                  translate: this.translate,
                  summarize: this.summarize,
                  category: category,
                  donation: this.donations,
                  min: parseInt(this.mins),
                  max: parseInt(this.maxs),
                  Tags: this.tags,
                  payment: this.payments,
                  price: parseInt(this.prices),
                  subscribers: this.subscriber,
                  nsfw: this.nsfw,
                },
                {
                  headers: {
                    'API-KEY': this.$store.state.token,
                    // "Content-Type": "multipart/form-data"
                  }
                }
              )
              .then((response) => {
                // this.$nuxt.refresh()
                if(response.data.status === 1 ){
                  this.$store.commit('PUT_DONE', true)
                  this.$store.commit('PUT_NEWPOSTUUID', response.data.post_uuid)
                  this.$router.push('/' + this.$i18n.locale)
                  this.$cookies.remove('articlePost')
                  this.$notification.new(this.$t('pages.home.postDones')+" 😉", {
                    timer: 15,
                    position: 'bottomRight',
                    type: 'success',
                    showLeftIcn: true,
                    showCloseIcn: true
                  });
                }
                if(response.data.status === 0 ){
                  this.$notification.new(this.$t('pages.home.postExi'), {
                    timer: 15,
                    position: 'bottomRight',
                    type: 'success',
                    showLeftIcn: true,
                    showCloseIcn: true
                  });
                }
              })
              .catch((error) => {
                console.log(error)
              })
          }
        }
      }

      //ArticleLinkPost
      if (!this.post0rLink) {
        console.log()
        const titleArticle = document.getElementById('articleTitle').value
        if (this.valueSelect === 0) {
          this.$notification.new(this.$t('pages.homes.categorieChoice'), {
            timer: 15,
            position: 'bottomRight',
            type: 'success',
            showLeftIcn: true,
            showCloseIcn: true
          });
        } else {
          let category = this.valueSelect

          if (!this.thumbUrl){
            this.thumbUrl = this.$store.state.articleData.thumb
          }
          if(this.payments && (this.thumbUrl === '')) {
            this.$notification.new(this.$t('pages.home.postDones')+" 😉", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          } else {
              this.$axios
                .post('/post', {
                    title: titleArticle,
                    type: this.typePost,
                    post_url: this.$store.state.articleData.res,
                    thumb: this.thumbUrl,
                    content: this.$store.state.articleData.content,
                    lang: this.languagePost,
                    translate: this.translate,
                    summarize: this.summarize,
                    category: category,
                    donation: this.donations,
                    min: parseInt(this.mins),
                    max: parseInt(this.maxs),
                    Tags: this.tags,
                    payment: this.payments,
                    price: parseInt(this.prices) ,
                    subscribers: this.subscriber,
                    nsfw: this.nsfw,
                  },
                  {
                    headers: {
                      'API-KEY': this.$store.state.token,
                      // "Content-Type": "multipart/form-data"
                    }
                  }
                )
                .then((response) => {
                  if(response.data.status === 1 ){
                    this.$store.commit('PUT_DONE', true)
                    this.$store.commit('PUT_NEWPOSTUUID', response.data.post_uuid)
                    this.$store.commit('PUT_ARTICLEDATA', [''])
                    this.$router.push('/' + this.$i18n.locale)
                    this.$notification.new(this.$t('pages.home.postDones')+" 😉", {
                      timer: 15,
                      position: 'bottomRight',
                      type: 'success',
                      showLeftIcn: true,
                      showCloseIcn: true
                    });
                  }
                  if(response.data.status === 0 ){
                    this.$notification.new(this.$t('pages.home.postExi'), {
                      timer: 15,
                      position: 'bottomRight',
                      type: 'success',
                      showLeftIcn: true,
                      showCloseIcn: true
                    });
                  }
                })
                .catch((error) => {
                  console.log(error)
                })
          }
        }
      }
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
  },
  created(){
    // this.getAllCategories()
  },
  mounted() {
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      this.$cookies.remove('articlePost')
    }
     if (this.articleData.thumb) {
       this.thumbUrl = ''
     } else {
       this.thumbUrl = this.articleData.thumb
     }

    if (this.isActive) {
      this.showSub = true
      this.showPay = true
      this.showDonate = true
    } else {
      this.showSub = false
      this.showPay = false
      this.showDonate = false
    }

    function isOlderEdgeOrIE() {
      return (
        window.navigator.userAgent.indexOf("MSIE ") > -1 ||
        !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
        window.navigator.userAgent.indexOf("Edge") > -1
      );
    }

    function valueTotalRatio(value, min, max) {
      return ((value - min) / (max - min)).toFixed(2);
    }

    function getLinearGradientCSS(ratio, leftColor, rightColor) {
      return [
        "-webkit-gradient(",
        "linear, ",
        "left top, ",
        "right top, ",
        "color-stop(" + ratio + ", " + leftColor + "), ",
        "color-stop(" + ratio + ", " + rightColor + ")",
        ")",
      ].join("");
    }

    function updateRangeEl(rangeEl) {
      var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);

      rangeEl.style.backgroundImage = getLinearGradientCSS(
        ratio,
        "#258383",
        "#c5c5c5"
      );
    }

    // function initRangeEl() {
    //   var rangeEl = document.querySelector("input[type=range]");
    //   var textEl = document.querySelector("#rangeSliderValue ");
    //
    //   /**
    //    * IE/Older Edge FIX
    //    * On IE/Older Edge the height of the <input type="range" />
    //    * is the whole element as oposed to Chrome/Moz
    //    * where the height is applied to the track.
    //    *
    //    */
    //   if (isOlderEdgeOrIE()) {
    //     rangeEl.style.height = "20px";
    //     // IE 11/10 fires change instead of input
    //     // https://stackoverflow.com/a/50887531/3528132
    //     rangeEl.addEventListener("change", function (e) {
    //       textEl.value = e.target.value;
    //     });
    //     rangeEl.addEventListener("input", function (e) {
    //       textEl.value = e.target.value;
    //     });
    //   } else {
    //     updateRangeEl(rangeEl);
    //     rangeEl.addEventListener("input", function (e) {
    //       updateRangeEl(e.target);
    //       textEl.value = e.target.value;
    //     });
    //   }
    // }
    //
    // initRangeEl();
  },
};
</script>


<style>

.dark-mode .tag-input__text{
  color: white;
  font-weight: bolder;
  font-size: small;
}
.dark-mode .vs__selected{
  color: white;
  font-weight: bolder;
  font-size: small;
}
.dark-mode .vs__dropdown-menu{
  background-color: var(--bg) !important;;
}

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}

.vs__fade-enter-active,
.vs__fade-leave-active {
  transition: none;
}


.output {
  font-family: Courier, Courier New, Lucida Console, Monaco, Consolas;
  background: #000000;
  color: #ffffff;
  padding: 20px;
  margin-bottom: 50px;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  font-size: 13px;
}
.tag-input {
  width: 100%;
  font-size: 12px;
  height: auto;
  box-sizing: border-box;
  padding: 0 4px;
}

.tag-input__tag {
  float: left;
  margin-right: 5px;
  background-color: #eee;
  margin-top: 10px;
  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid #066f70;
  color: #066f70;
  display: flex;
  align-items: center;
  width: auto;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
  margin-left: 2px;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 0.9em;
  line-height: 40px;
  background: none;
}
.min-max-slider {
  position: relative;
  width: 100%;
  text-align: center;
  margin: auto;
}
.min-max-slider > label {
  display: none;
}
span.value {
  height: 1.7em;
  font-weight: bold;
  display: inline-block;
}
span.value.lower::before {
  content: "€";
  display: inline-block;
}
span.value.upper::before {
  content: "- €";
  display: inline-block;
  margin-left: 0.4em;
}
.min-max-slider > .legend {
  display: flex;
  justify-content: space-between;
  margin-top: 10px !important;
}
.min-max-slider > .legend > * {
  font-size: small;
  opacity: 0.25;
}
.min-max-slider > input {
  cursor: pointer;
  position: absolute;
}

/* webkit specific styling */
.min-max-slider > input {
  -webkit-appearance: none;
  outline: none !important;
  background: transparent;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    #067171 30%,
    #067171 60%,
    transparent 60%,
    transparent 100%
  );
}
.min-max-slider > input::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 14px; /* Set a specific slider handle width */
  height: 14px; /* Slider handle height */
  background: white; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border: 1px solid white;
  border-radius: 100%;
  box-shadow: 0px 0px 2px 2px lightgray;
}
.min-max-slider > input::-webkit-slider-runnable-track {
  cursor: pointer;
}
input[type="range"]::-ms-fill-lower {
  background: #919e4b !important;
  border-radius: 2px;
}

/*IE & Edge right side*/

input[type="range"]::-ms-fill-upper {
  background: #c5c5c5 !important;
  border-radius: 2px;
}

/* Functional styling;
 * These styles are required for noUiSlider to function.
 * You don't need to change these rules to apply your design.
 */
.noUi-target,
.noUi-target * {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-touch-action: none;
  touch-action: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.noUi-target {
  position: relative;
  direction: ltr;
}

.disable {
  color: darkgrey !important;
}

.noUi-base {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  /* Fix 401 */
}

.noUi-origin {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
}

.noUi-handle {
  position: relative;
  z-index: 1;
}

.noUi-stacking .noUi-handle {
  /* This class is applied to the lower origin when
   its values is > 50%. */
  z-index: 10;
}

.noUi-state-tap .noUi-origin {
  -webkit-transition: left 0.3s, top 0.3s;
  transition: left 0.3s, top 0.3s;
}

.noUi-state-drag * {
  cursor: inherit !important;
}

/* Painting and performance;
 * Browsers can paint handles in their own layer.
 */
.noUi-base,
.noUi-handle {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/* Slider size and handle placement;
 */
.noUi-horizontal {
  height: 5px;
}

.noUi-horizontal .noUi-handle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  left: -7px;
  top: -7px;
  background-color: #258383;
  border: 1px solid #258383;
  box-shadow: 0px 1px 3px lightgray;
}

/* Styling;
 */
.noUi-background {
  background: #d6d7d9;
}

.noUi-connect {
  background: #258383;
  -webkit-transition: background 450ms;
  transition: background 450ms;
}

.noUi-origin {
  border-radius: 2px;
}

.noUi-target {
  border-radius: 2px;
}

/* Handles and cursors;
 */
.noUi-draggable {
  cursor: w-resize;
}

.noUi-vertical .noUi-draggable {
  cursor: n-resize;
}

.noUi-handle {
  cursor: default;
  -webkit-box-sizing: content-box !important;
  -moz-box-sizing: content-box !important;
  box-sizing: content-box !important;
}



/* Disabled state;
 */
[disabled].noUi-connect,
[disabled] .noUi-connect {
  background: #b8b8b8;
}

[disabled].noUi-origin,
[disabled] .noUi-handle {
  cursor: not-allowed;
}

input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: 5px;
  padding: 0;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}

/*Chrome thumb*/

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-border-radius: 5px;
  /*16x16px adjusted to be same as 14x14px on moz*/
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #258383;
  border: 1px solid #258383;
}

/*Mozilla thumb*/

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  -moz-border-radius: 5px;
  height: 14px;
  width: 14px;
  border-radius: 5px;
  background: #e7e7e7;
  border: 1px solid #c5c5c5;
}

/*IE & Edge input*/

input[type="range"]::-ms-track {
  width: 300px;
  height: 6px;
  /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
  background: transparent;
  /*leave room for the larger thumb to overflow with a transparent border */
  border-color: transparent;
  border-width: 2px 0;
  /*remove default tick marks*/
  color: transparent;
}

/*IE & Edge thumb*/

input[type="range"]::-ms-thumb {
  height: 14px;
  width: 14px;
  border-radius: 5px;
  background: #e7e7e7;
  border: 1px solid #c5c5c5;
}

/*IE & Edge left side*/

input[type="range"]::-ms-fill-lower {
  background: #258383;
  border-radius: 2px;
}

/*IE & Edge right side*/

input[type="range"]::-ms-fill-upper {
  background: #c5c5c5;
  border-radius: 2px;
}

.typo__label{
  color: var(--color-primary);
  font-weight: bolder;
}

/*IE disable tooltip*/

input[type="range"]::-ms-tooltip {
  display: none;
}

input[type="text"] {
  border: none;
}
</style>

