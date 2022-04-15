<template>
  <div class="scroller" v-if="!loading">
    <div class="row m-0 p-0 pt-3 pt-lg-5">
      <div class="col-lg-9 col-md-8 px-xl-4 px-md-3 px-3 mb-5 pb-5 scroller">
        <relaredPost :component_data="listPaid"></relaredPost>
        <articalPreview :category="catego"></articalPreview>
      </div>
      <div class="col-lg-3 col-md-4 post-sidebar mb-5 pb-5 pe-md-2 scroller" id="trend">
        <communities :component_data="discover_posts"></communities>
      </div>
    </div>
  </div>
</template>

<script>
import relaredPost from "../components/sliderData"
import communities from "../components/communities"
import articalPreview from "../components/articalPreview"
import {mapGetters, mapState} from "vuex"

export default {
  asyncData({req, store}) {
    if (process.server) {
      const ip = req.headers['x-forwarded-for']
      store.commit('PUT_USERIP', ip)
      return { ipadd: ip }
    }
  },
  async fetch() {
    await this.getDiscover()
    await this.getUserSettings()
    await this.getAllDataPaid(this.catego)
  },
  components: {
    relaredPost,
    communities,
    articalPreview
  },
  data() {
    return {
      page: 1,
      tag: null,
      loading: true,
      related_posts: [],
      affiche: true,
      listPaid: [],
      catego: null,
      listDataPaid: [],
      discover_posts: []
    }
  },
  fetchOnServer: false,
  computed: {
    ...mapState(['Usettings', "category"]),
    ...mapGetters({
      LogIn: 'loggedIn'
    }),
  },
  watch: {
    '$fetchState.pending': function() {
      if(this.$fetchState.pending){
        this.$nuxt.$loading.start()
      } else{
        setTimeout(() => {
          this.$nuxt.$loading.finish()
          this.loading = false
        }, 5000)
      }
    },
    '$store.state.category': function() {
      this.catego = this.$store.state.category
      this.getAllDataPaid(this.catego)
    },
    '$store.state.tag': function() {
      this.tag = this.$store.state.tag
      this.getAllDataPaid(this.catego, this.tag)
    }
  },
  methods: {
    getDiscover() {
      this.$axios
        .get('/discover?start=1&limit=5&count=5&lang=' + this.$i18n.locale, {
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

    getAllDataPaid(catego, tag){
      let recent = null

      if(tag === 'recent'){
        recent = recent
        tag = null
      }

      this.$axios
        .get('/home?limit=10&count=10&lang=' + this.$i18n.locale, {
          headers: {
            'API-KEY': this.$store.state.token
          },
          params: {
            start: this.page,
            category: catego,
            recent: recent,
            tag: tag,
            paid: "paid"
          }
        })
        .then((response) => {
          if (response.data.results.feed.length === 0){
            this.listPaid = []
          } else {
            this.listDataPaid = response.data.results
            let SavePaid = response.data.results.post_saved
            let FeedPaid = response.data.results.feed
            this.$store.commit('PUT_SAVEDHOME', SavePaid)
            // this.list = Feed
            if (FeedPaid.length) {
              // this.page += 1;
              this.listPaid = response.data.results.feed
            } else {
            }
          }

        })
        .catch((_error) => {})
    },
  },

  beforeMount() {
  },

  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => {
    //     this.$nuxt.$loading.finish()
    //     // this.loading = true
    //   }, 5000)
    // });
  },

  created(){
    if(this.$route.query.categorie){
      this.getAllDataPaid(this.$route.query.categorie)
    } else {
      this.getAllDataPaid()
    }
  },

  head() {
    return {
      title: this.$t('pages.home.seoTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.home.seoContent')
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.home.seoDescription')
        },
        {
          hid: 'image',
          name: 'image',
          content: 'https://odaaay.com/weather/logo.png',
        },
        {
          hid: 'publisher',
          name: 'publisher',
          content: 'Odaaay',
        },
        { hid: 'robots', name: 'robots', content: 'index follow' },
        // Google+ / Schema.org
        { hid: 'itemname', itemprop: 'name', content: 'Odaaay' },
        {
          hid: 'itemimage',
          itemprop: 'image',
          content: 'https://odaaay.com/weather/logo.png',
        },
        {
          hid: 'itemdescription',
          itemprop: 'description',
          content: this.$t('pages.home.seoContent')
        },
        // ...
        // Facebook / Open Graph
        { hid: 'og:title', property: 'og:title', content: 'Odaaay' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.odaaay.com',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:this.$t('pages.home.seoContent')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://odaaay.com/weather/logo.png',
        },
        {
          property: 'og:site_name',
          content: 'Odaaay'
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://odaaay.com' + this.$route.fullPath,
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'NewsMediaOrganization',
            name: 'Odaaay',
            alternateName: 'Odaaay',
            url: 'https://www.odaaay.com',
            logo: 'https://odaaay.com/weather/logo.png',
            sameAs: [
              'https://twitter.com/odaaay',
              'https://wikipedia.com/wikiaccount',
              'https://odaaay.com/',
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                email: 'admin@odaaay.co',
                contactType: 'customer service',
                availableLanguage: ['en', 'fr', 'pt', 'ha', 'es'],
              },
            ],
          },
        },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'NewsMediaOrganization',
            name: 'Odaaay',
            legalName: 'Odaaay',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'CM',
              addressLocality: 'Yaounde',
              addressRegion: 'Centre',
              streetAddress: 'Marie Göcker',
            },
            logo: 'https://odaaay.com/weather/logo.png',
            email: 'mailto:admin@odaaay.co',
            url: 'https://odaaay.com',
            foundingDate: ' 2019-10-10',
          },
        },
      ],
    }
  },

};
</script>

<style>
.scroller {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 93vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media only screen and (max-width: 600px) {
  .scroller {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

.vclapbtn-bin {
  background-color: transparent !important;
}

.scroller::-webkit-scrollbar {
  display: none;
}
.notificationCenter.bottomRight {
  bottom: 0;
  right: 0;
  top: auto;
  left: auto;
}
.notificationCenter {
  font-family: Avenir,Helvetica,Arial,sans-serif;
  position: fixed;
  width: 300px;
  max-width: 90vw;
  top: 0;
  right: 0;
  bottom: 30px !important;
  z-index: 5555;
  margin: 0 8px;
}
</style>
