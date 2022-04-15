<template>
  <div class="bg-primary artical-detail">
    <div v-if="statuses == 0 || statuses == 4 || statuses == 5">
      <div
        class="card mb-3 bg-transparent p-md-3 p-0"
        v-for="arti in article.posts"
        :key="arti.id"
      >
        <div v-for="datas in arti.uploader_data" :key="datas.id">
          <div class="card-body p-1 text-start text-base">
            <h2 class="text-secondary text-center mt-2 mt-lg-4 lh-md">{{ article.title }}</h2>

            <div>
              <img :src="checkUrl(arti.thumb_url)" :alt="article.title" class="rounded w-100" v-if="arti.thumb_url">
            </div>

            <!--        <div class="claps d-block d-sm-none" @click="clapper(arti.id)">-->
            <!--          <vue-clap-button :max-click="1" color-active="#008080" icon="good" />-->
            <!--&lt;!&ndash;          <p style="text-align: center; margin-top: 10%; font-size: 6px">&ndash;&gt;-->
            <!--&lt;!&ndash;            {{ shouts | numeral('0.0a') }}&ndash;&gt;-->
            <!--&lt;!&ndash;          </p>&ndash;&gt;-->
            <!--        </div>-->

            <div class="my-4">
              <!--            <a :href="`/${$i18n.locale}/profile?username=` + arti.user_name" v-if="arti.user_name"><button class="btn btn-primary mx-auto py-1 cursor-pointer" v-if="arti.user_name" >{{ arti.user_name }}</button></a>-->
              <nuxt-link :to="`/${$i18n.locale}/profile?username=` + datas.username" v-if="datas.username" v-on:click="getOtherUser(arti.uuid, datas.username)">
                <button class="btn btn-primary mx-auto py-1 cursor-pointer" v-if="datas.username">
                  {{datas.username}}
                </button>
              </nuxt-link>
              <button class="btn btn-light btn-sm" :id="arti.uuid" @click="clapper(arti.uuid, $event)">
                <i class="fas fa-thumbs-up me-1" @click="likee(arti.uuid)"></i><span @click="likee(arti.uuid)">{{
                  shout
                }}</span>
              </button>
              <button class="btn btn-light btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#donate"
                      v-if="isDonate || statuses === 5">
                <i class="fas fa-hand-holding-usd"></i>
              </button>
              <div class="ms-auto p-1 d-none d-md-inline-block d-lg-inline-block" style="display: inline;">
                <i class="fas fa-clock me-1"></i>
                <span class="font-weight-bold">
                  {{ formatDate(arti.created_on) }}
                </span>
              </div>
              <button class="btn bg-transparent d-inline-block d-md-none d-lg-none p-0" v-b-popover.hover.bottomleft="formatDate(arti.created_on)">
                <i class="fas fa-clock pl-1 text-18"></i>
              </button>
              <ul
                class="list-group list-group-horizontal float-end ms-auto"
              >
                <li class="list-group-item border-0" v-on:click="colorNotChange(arti.uuid, $event)" v-if="isItSave(arti.id)">
                  <!--                          <button class="bg-transparent border-0">-->
                  <!--                            <i class="fas fa-heart"></i>-->
                  <vue-clap-button :max-click="1" colorNormal="#F05654FF" color-active="#008080" icon="love" :size="30" class="loup" />
                  <!--                            <i slot="icon" class="fas fa-heart addColor1"></i>-->
                  <!--                          </button>-->
                </li>
                <li class="list-group-item border-0" v-on:click="colorChange(arti.uuid, $event)" v-else>
                  <!--                          <button class="bg-transparent border-0">-->
                  <vue-clap-button :max-click="1" colorNormal="#008080" color-active="#F05654FF" icon="love" :size="30" class="loup" />
                  <!--                          <vue-star animate="animated bounceIn" color="#F05654">-->
                  <!--                            <i slot="icon" class="fas fa-heart"></i>-->
                  <!--                          </vue-star>-->
                  <!--                          </button>-->
                </li>
                <li class="list-group-item border-0">
                  <button class="bg-transparent border-0">

                    <b-button :id="`popover-target-${arti.id}`" class="border-0 bg-transparent m-0 p-0 mb-1">
                      <i class="fas fa-share-alt text-16 share-design" style=""></i>
                    </b-button>

                    <b-popover :target="`popover-target-${arti.id}`" triggers="hover focus" placement="top">
                      <ShareNetwork
                        network="facebook"
                        :url="`https://odaaay.com/${$i18n.locale}/article/` + arti.uuid"
                        :title="arti.title"
                      >
                        <i class="fab fa-facebook"></i>
                      </ShareNetwork>
                      <ShareNetwork
                        network="email"
                        :url="`https://odaaay.com/${$i18n.locale}/article/` + arti.uuid"
                        :title="arti.title"
                      >
                        <i class="fab fa-google"></i>
                      </ShareNetwork>
                      <ShareNetwork
                        network="twitter"
                        :url="`https://odaaay.com/${$i18n.locale}/article/` + arti.uuid"
                        :title="arti.title"
                      >
                        <i class="fab fa-twitter"></i>
                      </ShareNetwork>
                      <ShareNetwork
                        network="whatsapp"
                        :url="`https://odaaay.com/${$i18n.locale}/article/` + arti.uuid"
                        :title="arti.title"
                      >
                        <i class="fab fa-whatsapp"></i>
                      </ShareNetwork>
                    </b-popover>
                  </button>
                </li>
                <li class="list-group-item border-0">
                  <button
                    type="button"
                    class="bg-transparent border-0"
                    data-bs-toggle="modal"
                    data-bs-target="#notInterestedOne"
                  >
                    <i class="fas fa-info-circle" data-bs-toggle="tooltip" data-bs-placement="top"
                       :title="$t('pages.home.reportPost')"></i>
                  </button>
                </li>
              </ul>
              <!-- Modal -->
              <div class="modal fade" id="notInterestedOne" tabindex="-1" aria-labelledby="notInterested"
                   aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabelOne">{{ $t('pages.home.reportArticle') }}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                              @click="flushValue"></button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-6">
                          <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" v-model="FN" value="1" id="FakeOne"
                                   v-on:click="addValue(1)">
                            <label class="form-check-label font-weight-bold " for="FakeOne">
                              {{ $t('pages.home.fn') }}
                            </label>
                          </div>
                          <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" v-model="BT" value="2" id="TranslationOne"
                                   v-on:click="addValue(2)">
                            <label class="form-check-label font-weight-bold" for="TranslationOne">
                              {{ $t('pages.home.bt') }}
                            </label>
                          </div>
                          <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="5" v-model="O"
                                   v-on:click="addValue(5)" id="OthersOne" @change="otherShow = !otherShow">
                            <label class="form-check-label font-weight-bold" for="OthersOne">
                              {{ $t('pages.home.other') }}
                            </label>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="form-check mt-3">
                            <input class="form-check-input" v-model="VL" type="checkbox" value="3" id="LanguageOne"
                                   v-on:click="addValue(3)">
                            <label class="form-check-label font-weight-bold" for="LanguageOne">
                              {{ $t('pages.home.vl') }}
                            </label>
                          </div>
                          <div class="form-check mt-3">
                            <input class="form-check-input" v-model="Cop" type="checkbox" value="4" id="CopyrightOne"
                                   v-on:click="addValue(4)">
                            <label class="form-check-label font-weight-bold" for="CopyrightOne">
                              {{ $t('pages.home.copyright') }}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-floating mt-3" v-if="otherShow">
                        <label for="floatingTextareaOne">{{ $t('pages.home.tell') }}...</label>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaOne"
                                  v-model="reason"></textarea>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-light" data-bs-dismiss="modal" v-on:click="flushValue">
                        {{ $t('pages.home.close') }} <i class="fas fa-times-circle"></i></button>
                      <button type="button" class="btn btn-light" data-bs-dismiss="modal"
                              v-on:click="reportPost(arti.uuid)">{{ $t('pages.home.send') }} <i
                        class="fas fa-paper-plane"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal Donate -->
              <div class="modal fade" id="donate" tabindex="-1" aria-labelledby="donate" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="donateOne">{{ $t('pages.home.donateS') }}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-12">
                          <h5 class="text-center mb-3">{{ $t('pages.home.donateText') }}</h5>
                          <div class="form-check d-flex flex-row mt-3">
                            <span class="mr-2"> {{ arti.mini }} </span>
                            <b-form-input id="range-1" v-model="amountDonation" type="range" :min="arti.mini"
                                          :max="arti.maxi"></b-form-input>
                            <span class="ml-2"> {{ arti.maxi }} </span>
                          </div>
                          <h2 class="text-center font-weight-bolder">
                            {{ amountDonation }}$
                          </h2>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-light btn-block mx-2" data-bs-dismiss="modal"
                                v-on:click="subscribeToPost('dona', datas.uuid)">{{ $t('pages.home.donate') }}<i
                          class="fas fa-hand-holding-usd"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--          <div class="col-12 m-0 p-0">-->
              <!--            <b-alert show dismissible fade>-->
              <!--              {{ $t('pages.article.copyright') }}-->
              <!--            </b-alert>-->
              <!--          </div>-->
            </div>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {{ $t('pages.article.summary') }}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body summary text-justify">
                    {{ article.content }}
                    <br>
                    <strong class="text-base">{{ article.title }}</strong> {{ $t('pages.article.published') }}
                    <strong class="text-base" v-if="datas.username">
                      <a :href="`/${$i18n.locale}/profile?username=` + datas.username" v-on:click="getOtherUser(arti.uuid, datas.username)">
                        {{datas.username}}
                      </a>
                    </strong>
                    <!--                on <strong class="text-base">{{artical_detail.publish_date}}</strong>-->
                  </div>
                </div>
              </div>
              <div class="accordion-item mt-3">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    {{ $t('pages.article.article') }}
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body text-justify">
                    <span v-html="article.fullcontent"></span>
                    <br>
                    <strong class="text-base">{{ article.title }}</strong> {{ $t('pages.article.published') }}
                    <strong class="text-base" v-if="datas.username">
                      <a :href="`/${$i18n.locale}/profile?username=` + datas.username" v-on:click="getOtherUser(arti.uuid, datas.username)">
                        {{datas.username}}
                      </a>
                    </strong>
                    <!--                on <strong class="text-base">{{artical_detail.publish_date}}</strong>-->
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="d-flex flex-row-reverse mt-3 pl-2" v-if="arti.tags">
          <span class="badge rounded-pill btn-primary mr-2" v-for="(items, index) in (arti.tags.split(','))"
                :key="index">{{ items.slice(1,-1).replace("'", "") }}</span>
        </div>
        <div class="row" v-if="arti.post_url">
          <div class="col-12 border-left-2 border-secondary mt-4 ml-2" style="border-left: #f00c 5px solid;">
            <h6 class="text-danger font-weight-bold">{{ $t('pages.home.origine') }}</h6>
            <a :href="arti.post_url" class="font-weight-bold" target="_blank"
            >
              {{ article.title }}
            </a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 p-0 align-items-center d-flex" v-else-if="statuses == 1">
      <div
        class="col-lg-12 px-xl-5 col-md-12 px-md-3 px-4 mb-5 pb-5 d-flex w-100 flex-column pt-5 mt-4 justify-content-center align-items-center">
        <div class="card bg-transparent text-center text-base">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLTZlQqZRBRCmubcSAsfp9mwZzI9ur9Yi6Q&usqp=CAU"
               alt="" width="250" class="d-block mx-auto">
          <div class="m-0 p-0" v-if="$store.state.isLogin">
            <h4 class="text-base mt-4 text-36">{{$t('pages.home.paidContent')}}<span class="ms-1"><i
              class="fas fa-shopping-basket text-success"></i></span></h4>
            <p class="text-15">{{$t('pages.home.paidText')}}</p>
            <button class="btn btn-primary  mx-auto px-5" @click="subscribeToPost('post', user_uuid)">{{$t('pages.gome.paid')}}</button>
          </div>
          <div class="m-0 p-0" v-else>
            <h4 class="text-base mt-4 text-36">{{$t('pages.home.paidContent')}} <span class="ms-1"><i
              class="fas fa-shopping-basket text-success"></i></span></h4>
            <p class="text-15">{{$t('pages.home.textPaid')}}</p>
            <nuxt-link
              :underline="false"
              :to="`/${$i18n.locale}/login`"
            >
              <button class="btn btn-primary  mx-auto px-5">{{$t('pages.home.login')}}</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 p-0 align-items-center" v-else-if="statuses == 2">
      <div
        class="col-lg-12 px-xl-5 col-md-12 px-md-3 px-4 pt-5 mt-4 d-flex w-100 justify-content-center align-items-center">
        <div class="card bg-transparent text-center text-base">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLTZlQqZRBRCmubcSAsfp9mwZzI9ur9Yi6Q&usqp=CAU"
               alt="" width="250" class="d-block mx-auto">
          <div class="m-0 p-0" v-if="$store.state.isLogin">
            <h4 class="text-base mt-4 text-36">{{ $t('pages.home.sobs') }} <span class="ms-1"><i
              class="fas fa-shopping-basket text-success"></i></span></h4>
            <p class="text-15">{{ $t('pages.home.paidTexte') }} </p>
            <button class="btn btn-primary  mx-auto px-5" @click="subscribeContent()">{{ $t('pages.home.paidAcco') }}</button>
          </div>
          <div class="m-0 p-0" v-else>
            <h4 class="text-base mt-4 text-36">{{$t('pages.home.paidContent')}} <span class="ms-1"><i
              class="fas fa-shopping-basket text-success"></i></span></h4>
            <p class="text-15">{{$t('pages.home.textPaid')}}</p>
            <nuxt-link
              :underline="false"
              :to="`/${$i18n.locale}/login`"
            >
              <button class="btn btn-primary  mx-auto px-5">{{$t('pages.home.login')}}</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {mapGetters, mapState} from "vuex";

export default {



  data() {
    return {
      article: [''],
      no: '',
      clap: false,
      user_uuid: '',
      others: '',
      isDonate: false,
      reason: '',
      FN: false,
      BT: false,
      O: false,
      VL: false,
      Cop: false,
      choice: [],
      amountDonation: '',
      Saved: [''],
      otherShow: false,
      shout: '',
      statuses: 0,
      bgColor: '#778899',
      position: 'bottom-right',
      fabActions: [
        {
          name: 'cache',
          icon: 'cached'
        },
        {
          name: 'alertMe',
          icon: 'add_alert'
        }
      ]
    };
  },
  computed: {
    ...mapState(['Usettings']),
    ...mapGetters({
      LogIn: 'loggedIn',
    }),
  },

  created() {
    this.getArticle(this.$route.params.slug)
  },

  methods: {
    formatDate(i) {
      const date = new Date(i)
      return date.toLocaleString()
    },
    getOtherUser(uuid, name) {
      event.preventDefault()
      this.$nuxt.refresh()
      this.$store.commit('PUT_OTHERUSERDATA', uuid)
      this.$router.push('/' + this.$i18n.locale + '/profile?username=' + name)
    },
    addValue(val) {
      let arr = this.choice

      if (!arr.includes(val)) {
        arr.push(val);
      } else {
        switch (val) {
          case 1:
            this.FN = false
            break
          case 2:
            this.BT = false
            break
          case 3:
            this.O = false
            this.reason = ''
            break
          case 4:
            this.VL = false
            break
          case 5:
            this.Cop = false
            break
          default:
            console.log(`Sorry, we are out.`);
        }
        arr.splice(arr.indexOf(val), 1);  //deleting
      }
    },
    goToProfile(name) {
      this.$router.push('/' + this.$i18n.locale + '/profile?username=' + name)
    },
    flushValue() {
      this.reason = ''
      this.otherShow = !this.otherShow
      this.O = false
      this.VL = false
      this.FN = false
      this.Cop = false
      this.BT = false
      this.choice = []
    },

    colorChange(uuid, event) {
      if (this.LogIn) {
        this.$axios
          .post('/Save/', {
              Post_id: uuid
            },
            {
              headers: {
                'API-KEY': this.$store.state.token
              }
            }
          )
          .then((res) => {
            this.$notification.new(this.$t('pages.home.postSave'), {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            })
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        if(event.target.nodeName === 'DIV') {
          event.target.childNodes[0].childNodes[0].setAttribute('fill', '#008080')
        } else if (event.target.nodeName === 'svg') {
          event.target.childNodes[0].setAttribute('fill', '#008080')
        } else {
          event.target.parentNode.setAttribute('fill', '#008080')
        }
        this.$notification.new(this.$t('pages.home.postNoSave'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    },
    reportPost(id) {
      if (this.LogIn) {
        this.$axios
          .post('/reportpost/', {
              type: this.choice,
              post_id: id,
              reason: this.reason
            },
            {
              headers: {
                'API-KEY': this.$store.state.token
              }
            }
          )
          .then((res) => {
            if (res.data.status === 1) {
              this.flushValue()
              this.$notification.new(this.$t('pages.home.reportDone'), {
                timer: 15,
                position: 'bottomRight',
                type: 'success',
                showLeftIcn: true,
                showCloseIcn: true
              })
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.$notification.new(this.$t('pages.home.noReport'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    },

    colorNotChange(uuid) {
      if (this.LogIn) {
        this.$notification.new(this.$t('pages.home.saveSince'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        })

      }
    },

    isItSave(id) {
      let Saved = this.$store.state.saved
      if (Saved) {
        for (let i = 0; i < Saved.length; i++) {
          if (Saved[i] === id) {
            return true
          }
        }
      }
    },
    notInterested(index, id) {
      if (this.LogIn) {
        this.$axios
          .post('/post/notinterested', {
              uuid: id,
            },
            {
              headers: {
                'API-KEY': this.$store.state.token
              }
            }
          )
          .then((res) => {
            if (res.data.status === 1) {
              this.isActive = index
              // FIXME(Leslie): Change 1 to 0 so as to splice just one element
              this.list.splice(index, 1)
              this.$notification.new(this.$t('pages.home.postRemoved'), {
                timer: 15,
                position: 'bottomRight',
                type: 'success',
                showLeftIcn: true,
                showCloseIcn: true
              });
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.$notification.new(this.$t('pages.home.noRemoved'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    },
    checkUrl(url) {
      // JavaScript/TypeScript
      if(url){
        if (url.substring(0, 8) !== 'https://') {
          url = 'https://odaaay.com/api/static/files/' + url;
          return url
        } else {
          return url
        }
      }
    },
    subscribeContent() {
      this.$axios
        .post('/user/following', {
          uuid: this.user_uuid
        }, {
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          if (response.data.status === 1) {
            //   this.$store.commit('PUT_SHOUTS', 1)
            this.$notification.new(this.$t('pages.home.paidFirst')+" 😉", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if (response.data.status === 0) {
            this.$notification.new(this.$t('pages.home.paidFirst')+" 😉", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
            this.subscribeToPost('subs', response.data.uuid)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    subscribeToPost(tipe, uuids) {
      if (this.LogIn) {
        this.$axios
          .post('/buy', {
            type: tipe,
            uuid: uuids,
            price: parseInt(this.amountDonation),
            post_uuid: this.$route.params.slug,
            lang: this.$i18n.locale,
          }, {
            headers: {
              'API-KEY': this.$store.state.token
            }
          })
          .then((response) => {
            if (response.data.status === 1) {
              this.$notification.new(this.$t('pages.home.paidAccont'), {
                timer: 15,
                position: 'bottomRight',
                type: 'danger',
                showLeftIcn: true,
                showCloseIcn: true
              })
              window.open(response.data.link, '_blank');
            }
            if (response.data.status === 2) {
              this.$notification.new(this.$t('pages.home.alreadPaid'), {
                timer: 15,
                position: 'bottomRight',
                type: 'danger',
                showLeftIcn: true,
                showCloseIcn: true
              })
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    clapper(id, event) {
      if (this.LogIn){
        if (this.clap) {
          this.unShout(id, event)
          return (this.clap = false)
        } else {
          this.shoutOn(id, event)
          return (this.clap = true)
        }
      } else {
        this.$notification.new(this.$t('pages.home.noShot'), {
          timer: 15,
          position: 'bottomRight',
          type: 'error',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    },

    likee(id) {
      event.stopPropagation()
      document.getElementById(id).click()
    },

    shoutOn(id, event) {
      this.$axios
        .post('/post/Shout', {
          Post_id: id
        }, {
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          if (response.data.status === 1) {
            if (event.target.nodeName == 'BUTTON') {
              let shout = event.target.lastElementChild.textContent
              shout = parseInt(shout) + 1
              event.target.lastElementChild.textContent = shout
            }

            this.$notification.new(this.$t('pages.home.clapDone') + " 😉", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if (response.data.status === 0) {
            this.unShout(id, event)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    goToLogin() {
      event.preventDefault()

    },

    unShout(id, event) {
      this.$axios
        .delete('/post/Shout',
          {
            headers: {
              'API-KEY': this.$store.state.token
            },
            data: {
              Post_id: id,
            },
          })
        .then((response) => {
          if (response.data.status === 1) {
            if (event.target.nodeName == 'BUTTON') {
              let shout = event.target.lastElementChild.textContent
              shout = parseInt(shout) - 1
              event.target.lastElementChild.textContent = shout
            }
            this.$notification.new(this.$t('pages.home.clapRemove') + " 💕", {
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
    },

    saveArticle() {
      // alert('dedans');
    },

    /**
     * 0 : Successful
     * 1 : Paiement Post
     * 2 : Subscribe (UUID users)
     * @param uuid
     */

    getArticle(uuid) {
      this.$axios
        .get('/article/' + uuid,
          {
            headers: {
              'API-KEY': this.$store.state.token
            },
            params: {
              lang: this.$i18n.locale
            }
          }
        )
        .then((res) => {
          if (res.data.status) {
            if (res.data.status == 1) {
              this.statuses = 1
              this.user_uuid = res.data.uuid
            }
          }
          if (res.data.status) {
            if (res.data.status == 2) {
              this.statuses = 2
              this.user_uuid = res.data.uuid
            }
          }
          if (res.data.results.status) {
            if (res.data.results.status == 5) {
              this.statuses = 5
              this.no = res.data.results.res
              this.isDonate = res.data.results.donated
              this.user_uuid = res.data.results.uuid
              this.shout = res.data.results.shouts
              this.article = res.data.results.translated_feed
              let posts = this.article.posts
              for (let i = 0; i < posts.length; i++) {
                this.amountDonation = Math.floor(Math.random() * (posts[i].maxi - posts[i].mini + 1) + posts[i].mini)
              }
            }
          }
          if (res.data.results) {
            if (res.data.results.status == 0 || res.data.results.status == 4) {
              this.statuses = 0
              this.no = res.data.results.res
              this.shout = res.data.results.shouts
              this.$store.commit('PUT_SHOUTS', res.data.results.shouts)
              this.article = res.data.results.translated_feed
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  }
};
</script>

<style scoped>

.card a {
  color: var(--color-primary) !important;
}

/*.vclapbtn-bin animated infinite {*/
/*  cursor: pointer;*/
/*  border-radius: 50%;*/
/*  text-align: center;*/
/*  background-color: transparent !important;*/
/*}*/

@media (max-width: 576px) {
  .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 5%;
    left: 80%;
    z-index: 99;
  }

  .dark-mode .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 5%;
    left: 80%;
    z-index: 99;
  }
}

@media (min-width: 576px) {
  .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 5%;
    left: 80%;
    z-index: 99;
  }

  .dark-mode .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 5%;
    left: 80%;
    z-index: 99;
  }
}

@media (min-width: 768px) {
  .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 45%;
    left: 55%;
    z-index: 99;
  }

  .dark-mode .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 45%;
    left: 55%;
    z-index: 99;
  }
}

@media (min-width: 992px) {
  .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 45%;
    left: 55%;
    z-index: 99;
  }

  .dark-mode .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 5%;
    left: 80%;
    z-index: 99;
  }
}


@media (min-width: 1200px) {
  .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20%;
    left: 62%;
    z-index: 99;
  }

  .dark-mode .claps {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 5%;
    left: 80%;
    z-index: 99;
  }
}

</style>
