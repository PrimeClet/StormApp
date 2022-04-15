<template>
  <div class="pt-4">
    <div class="row m-0 p-0">
      <div class="col-md-9 px-xl-5 px-md-3 px-4 mb-5 pb-5 scroller">
        <articalDetail></articalDetail>
      </div>
      <div class="col-md-3 post-sidebar mb-5 pb-5 scroller">
        <newslater :component_data="ownerDatas"></newslater>
        <communities :component_data="discover_posts"></communities>
        <!--        <relaredPost :component_data="related_posts"></relaredPost>-->
        <!--        <communities></communities>-->

      </div>
    </div>
  </div>
</template>

<script>
import taggedCommunities from "@/components/taggedCommunities";
import relaredPost from "@/components/sliderData";
import communities from "@/components/communities";
import newslater from "@/components/newslater";
import articalDetail from "@/components/articalDetail";
import * as https from "https";
import {mapGetters, mapState} from "vuex";

export default {
  // loading: false,
  async asyncData({$axios, i18n, req, store, params}) {
    if (process.server) {
      const ip = req.headers['x-forwarded-for']
      store.commit('PUT_USERIP', ip)
      return { ipadd: ip }
    }


    //   const [dataDiscover, discoverTrending] = await Promise.all([
    //   $axios
    //     .get('/discover?start=1&limit=5&count=5&lang=' + i18n.locale , {
    //       headers: {
    //         'API-KEY': store.state.token
    //       }
    //     }),
    //   $axios
    //     .get('/discover?start=1&limit=5&count=5&lang=' + i18n.locale , {
    //       headers: {
    //         'API-KEY': store.state.token
    //       }
    //     }),
    // ])
    // if ()
    // let trending = discoverTrending.data.results.feed
    // for (let i = 0; i < trending.length; i++) {
    //   let a = i+1
    //   trending[i].number = a
    // }
  },

  // async asyncData({ $axios, route, store }) {
  //   const agent = new https.Agent({
  //     rejectUnauthorized: false
  //   });
  //   const datas = await $axios
  //     .get('/article/' + route.params.slug,
  //       {
  //         httpsAgent: agent,
  //         headers : {
  //           'API-KEY': store.state.token
  //         },
  //         params: {
  //           lang: 'en'
  //         }
  //       }
  //     )
  //
  //   const statuses = 1
  //
  //
  //   if (statuses == 0) {
  //     store.state.shouts = datas.data.results.shouts
  //     store.state.title = datas.data.results.translated_feed.title
  //     const article = datas.data.results.translated_feed
  //   }
  //
  //   // const articles = article.posts[0]
  //   //
  //   // return {
  //   //   'article' : article,
  //   //   'articles' : articles,
  //   //   'statuses' : statuses,
  //   // }
  //
  // },

  async fetch() {
    // this.$nuxt.$loading.start()
    // this.$store.commit('loading', true)

    await this.getDiscover()
    await this.getDiscoverTrending()
    await this.getArticleOwner(this.$route.params.slug)

    // this.$store.commit('loading', false)
    // this.$nuxt.$loading.finish()

  },

  components: {
    taggedCommunities,
    relaredPost,
    communities,
    newslater,
    articalDetail,
  },
  data() {
    return {
      clap: false,
      article: [''],
      ownerDatas: [''],
      no : '',
      user_uuid: '',
      shout : '',
      statuses: 0,
      shouts : 0,
      discover_posts: [],
      related_posts: [],
    };
  },

  computed: {
    ...mapState(['Usettings']),
    ...mapGetters({
      LogIn: 'loggedIn',
    }),
  },

  fetchOnServer: false,

  created() {
    // this.getUserSettings()
  },

  methods: {
    getDiscover() {
      this.$axios
        .get('/discover?start=1&limit=5&count=5&lang=' + this.$i18n.locale , {
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          this.related_posts = response.data.results.feed
          // let Save = response.data.results.post_saved
          // let Feed = response.data.results.feed
          // // for (let item = 0; item < Feed.length; item++) {
          // //   let iv = item.posts_[0].id
          // //   if(Save.includes(iv))
          // //   {
          // //     item.is_saved = true
          // //   }else{
          // //     item.is_saved = false
          // //   }
          //
          // context.commit('PUT_FEEDDATA', Feed)
        })
        .catch((_error) => {})
    },

    getDiscoverTrending() {
      this.$axios
        .get('/discover?start=1&limit=5&count=5&lang=' + this.$i18n.locale , {
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          let data = response.data.results.feed
          for (let i = 0; i < data.length; i++) {
            let a = i+1
            data[i].number = a
          }
          this.discover_posts = data

        })
        .catch((_error) => {})
    },
    getUserSettings(){
      if (this.LogIn) {
        this.$store
          .dispatch('getUserSettings')
          .then((response) => {
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    getArticleOwner(uuid){
      this.$axios
        .get('/article/' + uuid,
          {
            headers : {
              'API-KEY': this.$store.state.token
            },
            params: {
              lang: this.$i18n.locale
            }
          }
        )
        .then((res) => {
          if (res.data.status){
            if (res.data.status == 1){
              this.statuses = 1
              this.user_uuid = res.data.uuid
              this.ownerDatas = res.data.uploader_data
            }
          }
          if (res.data.status){
            if (res.data.status == 2){
              this.statuses = 2
              this.user_uuid = res.data.uuid
              this.ownerDatas = res.data.uploader_data
            }
          }
          if (res.data.results.status){
            if (res.data.results.status == 5){
              this.statuses = 5
              this.no = res.data.results.res
              this.shout = res.data.results.shouts
              this.article = res.data.results.translated_feed
              let posts = this.article.posts
              for (let i = 0; i < posts.length; i++) {
                this.ownerDatas = posts[i].uploader_data
              }
            }
          }
          if(res.data.results) {
            if (res.data.results.status == 0 || res.data.results.status == 4) {
              this.statuses = 0
              this.no = res.data.results.res
              this.shout = res.data.results.shouts
              this.$store.commit('PUT_SHOUTS', res.data.results.shouts)
              this.article = res.data.results.translated_feed
              let posts = this.article.posts
              for (let i = 0; i < posts.length; i++) {
                this.ownerDatas = posts[i].uploader_data
              }
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  },

  // head() {
  //   return {
  //     title: this.article.title + ' - Odaaay',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.article.content.substr(0, 150),
  //       },
  //       { hid: 'robots', name: 'robots', content: 'index follow' },
  //       {
  //         hid: 'keywords',
  //         name: 'keywords',
  //         content: 'description',
  //       },
  //       {
  //         hid: 'image',
  //         property: 'image',
  //         content: this.articles.thumb_url,
  //       },
  //       {
  //         hid: 'publisher',
  //         name: 'publisher',
  //         content: 'Odaaay',
  //       },
  //       { hid: 'robots', name: 'robots', content: 'index follow' },
  //       // Twitter
  //       {
  //         name: 'description',
  //         content: this.article.content.substr(0, 150),
  //       },
  //       // Google+ / Schema.org
  //       {
  //         hid: 'itemname',
  //         itemprop: 'name',
  //         content: this.article.title,
  //       },
  //       {
  //         hid: 'itemdescription',
  //         itemprop: 'description',
  //         content: this.article.content.substr(0, 150),
  //       },
  //       // ...
  //       // Facebook / Open Graph
  //       {
  //         hid: 'og:title',
  //         property: 'og:title',
  //         content: this.article.title,
  //       },
  //       {
  //         hid: 'og:image',
  //         property: 'og:image',
  //         content: this.articles.thumb_url,
  //       },
  //       {
  //         property: 'og:url',
  //         content: 'https://www.odaaay.co' + this.$route.fullPath
  //       },
  //       {
  //         property: 'og:site_name',
  //         content: 'Odaaay'
  //       },
  //       {
  //         hid: 'og:description',
  //         property: 'og:description',
  //         content: this.article.content.substr(0, 150),
  //       },
  //     ],
  //     link: [
  //       {
  //         rel: 'canonical',
  //         href: 'https://odaaay.com' + this.$route.fullPath,
  //       },
  //     ],
  //     script: [
  //       {
  //         type: 'text/javascript',
  //         src: 'cdn/to/script.js',
  //         async: true,
  //         body: true,
  //       },
  //       {
  //         type: 'application/ld+json',
  //         json: {
  //           '@context': 'https://schema.org/',
  //           '@type': 'NewsArticle',
  //           mainEntityOfPage: {
  //             '@type': 'WebPage',
  //             '@id': 'https://www.odaaay.co' + this.$route.fullPath,
  //           },
  //           headline: this.article.title,
  //           description: this.article,
  //           image: this.articles.thumb_url,
  //           author: {
  //             '@type': 'Organization',
  //             name: this.articles.user_name,
  //           },
  //           publisher: {
  //             '@type': 'Organization',
  //             name: 'Odaaay',
  //             logo: {
  //               '@type': 'ImageObject',
  //               url: 'https://odaaay.com/weather/logo.png',
  /*            },*/
  //           },
  //           datePublished: this.articles.created_on,
  //           dateModified: this.articles.created_on,
  //         },
  //       },
  //     ],
  //   }
  //  },

};
</script>

<style>
.vclapbtn-bin {
  background-color: transparent !important;
}

.scroller {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 93vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scroller::-webkit-scrollbar {
  display: none;
}
</style>
