<template>
  <div class="bg-primary articles px-2 carous">
    <div class="card mb-3 bg-transparent p-0 position-relative">
      <div class="position-sticky top-85 end-0 mt-1 mt-md-4 ms-auto add-article-btn cursor-pointer" @click.prevent="goWritePage">
        <span
          class="shadow rounded-circle bg-white p-4"
        >
          <i class="fas fa-edit text-18"></i>
        </span>
      </div>
      <carousel
        :perPageCustom="[[100, 6], [700, 6], [1000, 10], [1300, 11]]"
        :mouse-drag="false"
        :autoplay="false"
        :navigationEnabled="false"
        :centerMode="true"
        :paginationEnabled="true"
        :loop="true"
        :controlsVisible="true"
        navigationPrevLabel="&#9664;&#xFE0E;"
        navigationNextLabel="&#9654;&#xFE0E;"
      >
        <slide v-for="(item, $index) in tagsList" :key="$index">
          <button class="btn btn-light btn-sm rounded-pill" @click="selectCategory(item.tags)">
            {{ item.tags }}
          </button>
        </slide>
      </carousel>

      <div class="" id="newPost" v-if="article">
<!--        <div class="row px-0 mt-2" v-for="(item, $index) in article" :key="item.id">-->
          <div class="p-0" v-for="items in article.uploader_data" :key="items.id">
            <div class="row px-0 mt-1 px-lg-2 new-data" v-if="!article.thumb_url">
              <div class="col-md-12 h-100">
                <div class="card-body p-1 position-relative">
                  <nuxt-link :to="`/${$i18n.locale}/article/` + article.uuid" target="_blank">
                    <h6 class="card-title pb-1 mb-0 text-base text-18">
                      {{article.title}}
                    </h6>
                  </nuxt-link>
                  <p class="lh-sm text-justify pb-2 mb-0 content-text">
                    <v-clamp autoresize :max-lines="3" style="font-size: 13px;line-height: 20px;">
                      {{article.text_content}}
                    </v-clamp>
                  </p>
                  <div class="d-flex w-100 align-items-center">
                    <button class="btn btn-light btn-sm py-1 py-md-0" :id="article.uuid" @click="clapper(article.uuid, $event)">
                      <i class="fas fa-thumbs-up me-1" @click="likee(article.uuid)"></i><span @click="likee(article.uuid)">{{ shout }}</span>
                    </button>

                    <ul
                      class="list-group list-group-horizontal float-end ms-auto"
                    >
                      <li class="list-group-item border-0" v-on:click="colorNotChange(article.id, $event)" v-if="isItSave(article.id)">
                        <!--                          <button class="bg-transparent border-0">-->
                        <!--                            <i class="fas fa-heart"></i>-->
                        <vue-clap-button :max-click="1" colorNormal="#F05654FF" color-active="#008080" icon="love" :size="30" class="" />
                        <!--                            <i slot="icon" class="fas fa-heart addColor1"></i>-->
                        <!--                          </button>-->
                      </li>
                      <li class="list-group-item border-0" v-on:click="colorChange(article.uuid, $event, article.id)" v-else>
                        <!--                          <button class="bg-transparent border-0">-->
                        <vue-clap-button :max-click="1" colorNormal="#008080" color-active="#F05654FF" icon="love" :size="30" class="" />
                        <!--                          <vue-star animate="animated bounceIn" color="#F05654">-->
                        <!--                            <i slot="icon" class="fas fa-heart"></i>-->
                        <!--                          </vue-star>-->
                        <!--                          </button>-->
                      </li>
                      <li class="list-group-item border-0">
                        <button class="bg-transparent border-0">

                          <b-button :id="`popover-target-${items.id}`" class="border-0 bg-transparent m-0 p-0 mb-1">
                            <i class="fas fa-share-alt share-design" style="font-size: small; padding-top: 1px;" ></i>
                          </b-button>

                          <b-popover :target="`popover-target-${items.id}`" triggers="hover focus" placement="top">
                            <ShareNetwork
                              network="facebook"
                              :url="`https://odaaay.com/${$i18n.locale}/article/` + article.uuid"
                              :title="article.title"
                            >
                              <i class="fab fa-facebook"></i>
                            </ShareNetwork>
                            <ShareNetwork
                              network="email"
                              :url="`https://odaaay.com/${$i18n.locale}/article/` + article.uuid"
                              :title="article.title"
                            >
                              <i class="fab fa-google"></i>
                            </ShareNetwork>
                            <ShareNetwork
                              network="twitter"
                              :url="`https://odaaay.com/${$i18n.locale}/article/` + article.uuid"
                              :title="article.title"
                            >
                              <i class="fab fa-twitter"></i>
                            </ShareNetwork>
                            <ShareNetwork
                              network="whatsapp"
                              :url="`https://odaaay.com/${$i18n.locale}/article/` + article.uuid"
                              :title="article.title"
                            >
                              <i class="fab fa-whatsapp"></i>
                            </ShareNetwork>
                          </b-popover>
                          <!--                            <i class="fas fa-upload"></i>-->
                        </button>
                      </li>
                      <li class="list-group-item border-0">
                        <button
                          type="button"
                          class="bg-transparent border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#notInterestedNew"
                        >
                          <i class="fas fa-info-circle"  data-bs-toggle="tooltip" data-bs-placement="top" :title="$t('pages.home.reportPost')"></i>
                        </button>
                      </li>

                      <li class="list-group-item border-0">
                        <button class="bg-transparent border-0" v-on:click="notInterested(items.id, article.uuid)">
                          <i class="fas fa-times" style="font-size: large;padding-top: 5px;"></i>
                        </button>
                      </li>
                    </ul>
                    <!-- Modal -->
                    <div class="modal fade" id="notInterestedNew" tabindex="-1" aria-labelledby="notInterestedNew" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="title">{{ $t('pages.home.reportArticle') }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="flushValue"></button>
                          </div>
                          <div class="modal-body">
                            <div class="row">
                              <div class="col-6">
                                <div class="form-check mt-3">
                                  <input class="form-check-input" type="checkbox" v-model="FN" value="1" id="FakeN" v-on:click="addValue(1)">
                                  <label class="form-check-label font-weight-bold " for="Fake">
                                    {{ $t('pages.home.fn') }}
                                  </label>
                                </div>
                                <div class="form-check mt-3">
                                  <input class="form-check-input" type="checkbox" v-model="BT" value="2" id="TranslationNew" v-on:click="addValue(2)">
                                  <label class="form-check-label font-weight-bold" for="Translation">
                                    {{ $t('pages.home.bt') }}
                                  </label>
                                </div>
                                <div class="form-check mt-3">
                                  <input class="form-check-input" type="checkbox" value="5" v-model="O" v-on:click="addValue(5)" id="OthersNew" @change="otherShow = !otherShow">
                                  <label class="form-check-label font-weight-bold" for="Others">
                                    {{ $t('pages.home.other') }}
                                  </label>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="form-check mt-3">
                                  <input class="form-check-input" v-model="VL" type="checkbox" value="3" id="LanguageNew" v-on:click="addValue(3)">
                                  <label class="form-check-label font-weight-bold" for="Language">
                                    {{ $t('pages.home.vl') }}
                                  </label>
                                </div>
                                <div class="form-check mt-3">
                                  <input class="form-check-input" v-model="Cop" type="checkbox" value="4" id="CopyrightNew" v-on:click="addValue(4)">
                                  <label class="form-check-label font-weight-bold" for="Copyright">
                                    {{ $t('pages.home.copyright') }}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="form-floating mt-3" v-if="otherShow">
                              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaa" v-model="reason"></textarea>
                              <label for="floatingTextareaa">{{ $t('pages.home.tell') }}...</label>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal" v-on:click="flushValue">{{ $t('pages.home.close') }} <i class="fas fa-times-circle"></i></button>
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal" v-on:click="reportPost(items.uuid)">{{ $t('pages.home.send') }} <i class="fas fa-paper-plane"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="px-lg-1 new-data" v-else>
              <div class="row mt-2 px-0 px-md-3" >
                <div class="col-md-3 col-lg-2 col-2 px-0 pl-1 pl-md-0">
                  <div class="">
                    <nuxt-link :to="`/${$i18n.locale}/article/` + article.uuid" target="_blank">
                      <img
                        :src="checkUrl(article.thumb_url)"
                        alt="..."
                        class="article-thumbnail rounded-3 obj-cover"
                        style="object-fit: cover"
                      />
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-9 col-lg-10 pl-lg-3 ps-md-0 px-0 pl-1 pl-md-0 text-justify col-10">
                  <div class="px-2 position-relative h-100 d-flex flex-column">
                    <div>
                      <nuxt-link :to="`/${$i18n.locale}/article/` + article.uuid" target="_blank" class="pt-1">
                        <h6 class="card-title pb-1 mb-0 text-base text-16">
                          {{article.title}}
                        </h6>
                      </nuxt-link>
                      <p class="lh-sm text-justify mb-2 m-0 content-text" >
                        <v-clamp autoresize :max-lines="2">
                          {{article.text_content}}
                        </v-clamp>
                      </p>
                    </div>

                    <div class="d-flex w-100 align-items-center">
                      <button class="btn btn-light btn-sm py-1 py-md-0" :id="article.uuid" @click="clapper(article.uuid, $event)">
                        <i class="fas fa-thumbs-up me-1" @click="likee(article.uuid)"></i><span @click="likee(article.uuid)">{{ article.clap.length}}</span>
                      </button>

                      <ul
                        class="list-group list-group-horizontal float-end ms-auto"
                      >
                        <li class="list-group-item border-0" v-on:click="colorNotChange(article.id, $event)" v-if="isItSave(article.id)">
                          <!--                          <button class="bg-transparent border-0">-->
                          <!--                            <i class="fas fa-heart"></i>-->
                          <vue-clap-button :max-click="1" colorNormal="#F05654FF" color-active="#008080" icon="love" :size="30" class="" />
                          <!--                            <i slot="icon" class="fas fa-heart addColor1"></i>-->
                          <!--                          </button>-->
                        </li>
                        <li class="list-group-item border-0" v-on:click="colorChange(article.uuid, $event, article.id)" v-else>
                          <!--                          <button class="bg-transparent border-0">-->
                          <vue-clap-button :max-click="1" colorNormal="#008080" color-active="#F05654FF" icon="love" :size="30" class="" />
                          <!--                          <vue-star animate="animated bounceIn" color="#F05654">-->
                          <!--                            <i slot="icon" class="fas fa-heart"></i>-->
                          <!--                          </vue-star>-->
                          <!--                          </button>-->
                        </li>
                        <li class="list-group-item border-0">
                          <button class="bg-transparent border-0">

                            <b-button :id="`popover-target-${items.id}`" class="border-0 bg-transparent m-0 p-0 mb-1">
                              <i class="fas fa-share-alt share-design" style="font-size: small; padding-top: 1px;" ></i>
                            </b-button>

                            <b-popover :target="`popover-target-${items.id}`" triggers="hover focus" placement="top">
                              <ShareNetwork
                                network="facebook"
                                :url="`https://odaaay.com/${$i18n.locale}/article/` + article.uuid"
                                :title="article.title"
                              >
                                <i class="fab fa-facebook"></i>
                              </ShareNetwork>
                              <ShareNetwork
                                network="email"
                                :url="`https://odaaay.com/${$i18n.locale}/article/` + article.uuid"
                                :title="article.title"
                              >
                                <i class="fab fa-google"></i>
                              </ShareNetwork>
                              <ShareNetwork
                                network="twitter"
                                :url="`https://odaaay.com/${$i18n.locale}/article/` + article.uuid"
                                :title="article.title"
                              >
                                <i class="fab fa-twitter"></i>
                              </ShareNetwork>
                              <ShareNetwork
                                network="whatsapp"
                                :url="`https://odaaay.com/${$i18n.locale}/article/` + article.uuid"
                                :title="article.title"
                              >
                                <i class="fab fa-whatsapp"></i>
                              </ShareNetwork>
                            </b-popover>
                            <!--                            <i class="fas fa-upload"></i>-->
                          </button>
                        </li>
                        <li class="list-group-item border-0">
                          <button
                            type="button"
                            class="bg-transparent border-0"
                            data-bs-toggle="modal"
                            data-bs-target="#notInterestedO"
                          >
                            <i class="fas fa-info-circle"  data-bs-toggle="tooltip" data-bs-placement="top" :title="$t('pages.home.reportPost')"></i>
                          </button>
                        </li>

                        <li class="list-group-item border-0">
                          <button class="bg-transparent border-0" v-on:click="notInterested(items.id, article.uuid)">
                            <i class="fas fa-times" style="font-size: large;padding-top: 5px;"></i>
                          </button>
                        </li>
                      </ul>
                      <!-- Modal -->
                      <div class="modal fade" id="notInterestedO" tabindex="-1" aria-labelledby="notInterestedO" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="hea">{{ $t('pages.home.reportArticle') }}</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="flushValue"></button>
                            </div>
                            <div class="modal-body">
                              <div class="row">
                                <div class="col-6">
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" v-model="FN" value="1" id="FakeO" v-on:click="addValue(1)">
                                    <label class="form-check-label font-weight-bold " for="FakeO">
                                      {{ $t('pages.home.fn') }}
                                    </label>
                                  </div>
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" v-model="BT" value="2" id="TranslationO" v-on:click="addValue(2)">
                                    <label class="form-check-label font-weight-bold" for="TranslationO">
                                      {{ $t('pages.home.bt') }}
                                    </label>
                                  </div>
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="5" v-model="O" v-on:click="addValue(5)" id="OthersO" @change="otherShow = !otherShow">
                                    <label class="form-check-label font-weight-bold" for="OthersO">
                                      {{ $t('pages.home.other') }}
                                    </label>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" v-model="VL" type="checkbox" value="3" id="LanguageO" v-on:click="addValue(3)">
                                    <label class="form-check-label font-weight-bold" for="LanguageO">
                                      {{ $t('pages.home.vl') }}
                                    </label>
                                  </div>
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" v-model="Cop" type="checkbox" value="4" id="CopyrightO" v-on:click="addValue(4)">
                                    <label class="form-check-label font-weight-bold" for="CopyrightO">
                                      {{ $t('pages.home.copyright') }}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="form-floating mt-3" v-if="otherShow">
                                <label for="floatingTextareaOnea">{{ $t('pages.home.tell') }}...</label>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaOnea" v-model="reason"></textarea>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal" v-on:click="flushValue">{{ $t('pages.home.close') }} <i class="fas fa-times-circle"></i></button>
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal" v-on:click="reportPost(article.uuid)">{{ $t('pages.home.send') }} <i class="fas fa-paper-plane"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<!--        </div>-->
      </div>
      <div class="row px-0 mt-2 mx-md-0 mx-lg-0 mt-md-4" v-for="(item, $index) in list" :key="item.id" >
        <div class="p-0" v-for="items in item.posts" :key="items.id">
            <div class="row px-0 mt-1 px-lg-1" v-if="!items.thumb_url">
              <div class="col-md-12 h-100">
                <div class="card-body p-1 position-relative">
                  <nuxt-link :to="`/${$i18n.locale}/article/` + items.uuid" target="_blank">
                    <h6 class="card-title pb-1 mb-0 text-base text-18">
                      {{item.title}}
                    </h6>
                  </nuxt-link>
                  <p class="lh-sm text-justify pb-2 mb-0 content-text">
                    <v-clamp autoresize :max-lines="3" style="font-size: 13px;line-height: 20px;">
                      {{item.content}}
                    </v-clamp>
                  </p>
                  <div class="d-flex w-100 align-items-center">
                    <button class="btn btn-light btn-sm py-1 py-md-0" :id="items.uuid" @click="clapper(items.uuid, $event)">
                      <i class="fas fa-thumbs-up me-1" @click="likee(items.uuid)"></i><span @click="likee(items.uuid)">{{ items.clap.length}}</span>
                    </button>

                    <ul
                      class="list-group list-group-horizontal float-end ms-auto"
                    >
                      <li class="list-group-item border-0" v-on:click="colorNotChange(items.id, $event)" v-if="isItSave(items.id)">
                        <!--                          <button class="bg-transparent border-0">-->
                        <!--                            <i class="fas fa-heart"></i>-->
                        <vue-clap-button :max-click="1" colorNormal="#F05654FF" color-active="#008080" icon="love" :size="30" class="" />
                        <!--                            <i slot="icon" class="fas fa-heart addColor1"></i>-->
                        <!--                          </button>-->
                      </li>
                      <li class="list-group-item border-0" v-on:click="colorChange(items.uuid, $event, items.id)" v-else>
                        <!--                          <button class="bg-transparent border-0">-->
                        <vue-clap-button :max-click="1" colorNormal="#008080" color-active="#F05654FF" icon="love" :size="30" class="" />
                        <!--                          <vue-star animate="animated bounceIn" color="#F05654">-->
                        <!--                            <i slot="icon" class="fas fa-heart"></i>-->
                        <!--                          </vue-star>-->
                        <!--                          </button>-->
                      </li>
                      <li class="list-group-item border-0">
                        <button class="bg-transparent border-0">

                          <b-button :id="`popover-target-${$index}`" class="border-0 bg-transparent m-0 p-0 mb-1">
                            <i class="fas fa-share-alt share-design" style="font-size: small; padding-top: 1px;" ></i>
                          </b-button>

                          <b-popover :target="`popover-target-${$index}`" triggers="hover focus" placement="top">
                            <ShareNetwork
                              network="facebook"
                              :url="`https://odaaay.com/${$i18n.locale}/article/` + items.uuid"
                              :title="items.title"
                            >
                              <i class="fab fa-facebook"></i>
                            </ShareNetwork>
                            <ShareNetwork
                              network="email"
                              :url="`https://odaaay.com/${$i18n.locale}/article/` + items.uuid"
                              :title="items.title"
                            >
                              <i class="fab fa-google"></i>
                            </ShareNetwork>
                            <ShareNetwork
                              network="twitter"
                              :url="`https://odaaay.com/${$i18n.locale}/article/` + items.uuid"
                              :title="items.title"
                            >
                              <i class="fab fa-twitter"></i>
                            </ShareNetwork>
                            <ShareNetwork
                              network="whatsapp"
                              :url="`https://odaaay.com/${$i18n.locale}/article/` + items.uuid"
                              :title="items.title"
                            >
                              <i class="fab fa-whatsapp"></i>
                            </ShareNetwork>
                          </b-popover>
                          <!--                            <i class="fas fa-upload"></i>-->
                        </button>
                      </li>
                      <li class="list-group-item border-0">
                        <button
                          type="button"
                          class="bg-transparent border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#notInterested"
                        >
                          <i class="fas fa-info-circle"  data-bs-toggle="tooltip" data-bs-placement="top" :title="$t('pages.home.reportPost')"></i>
                        </button>
                      </li>

                      <li class="list-group-item border-0">
                        <button class="bg-transparent border-0" v-on:click="notInterested($index, items.uuid)">
                          <i class="fas fa-times" style="font-size: large;padding-top: 5px;"></i>
                        </button>
                      </li>
                    </ul>
                    <!-- Modal -->
                    <div class="modal fade" id="notInterested" tabindex="-1" aria-labelledby="notInterested" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{ $t('pages.home.reportArticle') }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="flushValue"></button>
                          </div>
                          <div class="modal-body">
                            <div class="row">
                              <div class="col-6">
                                <div class="form-check mt-3">
                                  <input class="form-check-input" type="checkbox" v-model="FN" value="1" id="Fake" v-on:click="addValue(1)">
                                  <label class="form-check-label font-weight-bold " for="Fake">
                                    {{ $t('pages.home.fn') }}
                                  </label>
                                </div>
                                <div class="form-check mt-3">
                                  <input class="form-check-input" type="checkbox" v-model="BT" value="2" id="Translation" v-on:click="addValue(2)">
                                  <label class="form-check-label font-weight-bold" for="Translation">
                                    {{ $t('pages.home.bt') }}
                                  </label>
                                </div>
                                <div class="form-check mt-3">
                                  <input class="form-check-input" type="checkbox" value="5" v-model="O" v-on:click="addValue(5)" id="Others" @change="otherShow = !otherShow">
                                  <label class="form-check-label font-weight-bold" for="Others">
                                    {{ $t('pages.home.other') }}
                                  </label>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="form-check mt-3">
                                  <input class="form-check-input" v-model="VL" type="checkbox" value="3" id="Language" v-on:click="addValue(3)">
                                  <label class="form-check-label font-weight-bold" for="Language">
                                    {{ $t('pages.home.vl') }}
                                  </label>
                                </div>
                                <div class="form-check mt-3">
                                  <input class="form-check-input" v-model="Cop" type="checkbox" value="4" id="Copyright" v-on:click="addValue(4)">
                                  <label class="form-check-label font-weight-bold" for="Copyright">
                                    {{ $t('pages.home.copyright') }}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="form-floating mt-3" v-if="otherShow">
                              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareae" v-model="reason"></textarea>
                              <label for="floatingTextareae">{{ $t('pages.home.tell') }}...</label>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal" v-on:click="flushValue">{{ $t('pages.home.close') }} <i class="fas fa-times-circle"></i></button>
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal" v-on:click="reportPost(items.uuid)">{{ $t('pages.home.send') }} <i class="fas fa-paper-plane"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="card bg-primary px-lg-4" v-else>
              <div class="row px-md-0 mt-4 px-1" >
                <div class="col-md-3 col-lg-2 col-2 px-0 pl-1 pl-md-0">
                  <div class="">
                    <nuxt-link :to="`/${$i18n.locale}/article/` + items.uuid" target="_blank">
                      <img
                        :src="checkUrl(items.thumb_url)"
                        alt="..."
                        class="article-thumbnail rounded-3 obj-cover"
                        style="object-fit: cover"
                      />
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-9 col-lg-10 pl-lg-3 ps-md-0 px-0 pl-1 pl-md-0 text-justify col-10">
                  <div class="px-2 position-relative h-100 d-flex flex-column">
                    <div>
                      <nuxt-link :to="`/${$i18n.locale}/article/` + items.uuid" target="_blank" class="pt-1">
                        <h6 class="card-title pb-1 mb-0 text-base text-16">
                          {{item.title}}
                        </h6>
                      </nuxt-link>
                      <p class="lh-sm content-text text-justify mb-2 m-0" >
                        <v-clamp autoresize :max-lines="2">
                          {{item.content}}
                        </v-clamp>
                      </p>
                    </div>

                    <div class="d-flex w-100 align-items-center">
                      <button class="btn btn-light btn-sm py-1 py-md-0" :id="items.uuid" @click="clapper(items.uuid, $event)">
                        <i class="fas fa-thumbs-up me-1" @click="likee(items.uuid)"></i><span @click="likee(items.uuid)">{{ items.clap.length}}</span>
                      </button>

                      <ul
                        class="list-group list-group-horizontal float-end ms-auto"
                      >
                        <li class="list-group-item border-0" v-on:click="colorNotChange(items.id, $event)" v-if="isItSave(items.id)">
<!--                          <button class="bg-transparent border-0">-->
<!--                            <i class="fas fa-heart"></i>-->
                          <vue-clap-button :max-click="1" colorNormal="#F05654FF" color-active="#008080" icon="love" :size="30" class="" />
<!--                            <i slot="icon" class="fas fa-heart addColor1"></i>-->
<!--                          </button>-->
                        </li>
                        <li class="list-group-item border-0" v-on:click="colorChange(items.uuid, $event, items.id)" v-else>
<!--                          <button class="bg-transparent border-0">-->
                            <vue-clap-button :max-click="1" colorNormal="#008080" color-active="#F05654FF" icon="love" :size="30" class="" />
<!--                          <vue-star animate="animated bounceIn" color="#F05654">-->
<!--                            <i slot="icon" class="fas fa-heart"></i>-->
<!--                          </vue-star>-->
<!--                          </button>-->
                        </li>
                        <li class="list-group-item border-0">
                          <button class="bg-transparent border-0">

                            <b-button :id="`popover-target-${$index}`" class="border-0 bg-transparent m-0 p-0 mb-1">
                              <i class="fas fa-share-alt share-design" style="font-size: small; padding-top: 1px;" ></i>
                            </b-button>

                            <b-popover :target="`popover-target-${$index}`" triggers="hover focus" placement="top">
                              <ShareNetwork
                                network="facebook"
                                :url="`https://odaaay.com/${$i18n.locale}/article/` + items.uuid"
                                :title="items.title"
                              >
                                <i class="fab fa-facebook"></i>
                              </ShareNetwork>
                              <ShareNetwork
                                network="email"
                                :url="`https://odaaay.com/${$i18n.locale}/article/` + items.uuid"
                                :title="items.title"
                              >
                                <i class="fab fa-google"></i>
                              </ShareNetwork>
                              <ShareNetwork
                                network="twitter"
                                :url="`https://odaaay.com/${$i18n.locale}/article/` + items.uuid"
                                :title="items.title"
                              >
                                <i class="fab fa-twitter"></i>
                              </ShareNetwork>
                              <ShareNetwork
                                network="whatsapp"
                                :url="`https://odaaay.com/${$i18n.locale}/article/` + items.uuid"
                                :title="items.title"
                              >
                                <i class="fab fa-whatsapp"></i>
                              </ShareNetwork>
                            </b-popover>
<!--                            <i class="fas fa-upload"></i>-->
                          </button>
                        </li>
                        <li class="list-group-item border-0">
                          <button
                            type="button"
                            class="bg-transparent border-0"
                            data-bs-toggle="modal"
                            data-bs-target="#notInterestedOne"
                          >
                            <i class="fas fa-info-circle"  data-bs-toggle="tooltip" data-bs-placement="top" :title="$t('pages.home.reportPost')"></i>
                          </button>
                        </li>

                        <li class="list-group-item border-0">
                          <button class="bg-transparent border-0" v-on:click="notInterested($index, items.uuid)">
                            <i class="fas fa-times" style="font-size: large;padding-top: 5px;"></i>
                          </button>
                        </li>
                      </ul>
                      <!-- Modal -->
                      <div class="modal fade" id="notInterestedOne" tabindex="-1" aria-labelledby="notInterestedOne" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabelOne">{{ $t('pages.home.reportArticle') }}</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="flushValue"></button>
                            </div>
                            <div class="modal-body">
                              <div class="row">
                                <div class="col-6">
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" v-model="FN" value="1" id="FakeOne" v-on:click="addValue(1)">
                                    <label class="form-check-label font-weight-bold " for="FakeOne">
                                      {{ $t('pages.home.fn') }}
                                    </label>
                                  </div>
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" v-model="BT" value="2" id="TranslationOne" v-on:click="addValue(2)">
                                    <label class="form-check-label font-weight-bold" for="TranslationOne">
                                      {{ $t('pages.home.bt') }}
                                    </label>
                                  </div>
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="5" v-model="O" v-on:click="addValue(5)" id="OthersOne" @change="otherShow = !otherShow">
                                    <label class="form-check-label font-weight-bold" for="OthersOne">
                                      {{ $t('pages.home.other') }}
                                    </label>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" v-model="VL" type="checkbox" value="3" id="LanguageOne" v-on:click="addValue(3)">
                                    <label class="form-check-label font-weight-bold" for="LanguageOne">
                                      {{ $t('pages.home.vl') }}
                                    </label>
                                  </div>
                                  <div class="form-check mt-3">
                                    <input class="form-check-input" v-model="Cop" type="checkbox" value="4" id="CopyrightOne" v-on:click="addValue(4)">
                                    <label class="form-check-label font-weight-bold" for="CopyrightOne">
                                      {{ $t('pages.home.copyright') }}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="form-floating mt-3" v-if="otherShow">
                                <label for="floatingTextareaOene">{{ $t('pages.home.tell') }}...</label>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaOene" v-model="reason"></textarea>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal" v-on:click="flushValue">{{ $t('pages.home.close') }} <i class="fas fa-times-circle"></i></button>
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal" v-on:click="reportPost(items.uuid)">{{ $t('pages.home.send') }} <i class="fas fa-paper-plane"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="card mb-3 bg-transparent p-2" v-if="emptyBox">
        <div class="row w-100 h-100">
          <div class="col-12 d-flex flex-row justify-content-center align-items-center">
            <img src="@/assets/images/undraw_No_data_re_kwbl.svg" alt="" class="w-75 h-50 rounded">
          </div>
          <h3 class="text-center font-weight-bolder">
            {{ $t('pages.profile.noPost') }}
          </h3>
        </div>
      </div>
      <client-only placeholder="loading...">
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </client-only>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import VClamp from 'vue-clamp';
import truncate from 'vue-truncate-collapsed';
import {mapGetters, mapState} from "vuex";

export default {
  props: ["category"],

  async fetch() {
    if (this.postDone && this.newPost){
      this.getArticleDirect(this.newPost)
    }
  },
  components: {
    InfiniteLoading,
    truncate,
    VClamp
  },

  watch: {
    $route () {
      this.$store.commit('PUT_DONE', false)
      this.$store.commit('PUT_NEWPOSTUUID', '')
    },
    '$store.state.category': function() {
      this.catego = this.$store.state.category
      this.loadNewGroupData(this.catego, this.tag)
      this.loadTagsData(this.catego)
    },
    '$store.state.tag': function() {
      this.tag = this.$store.state.tag
      this.loadNewGroupData(this.catego, this.tag)
      this.loadTagsData(this.catego, this.tag)
    }
  },

  data() {
    return {
      page: 1,
      list: [],
      shout: '',
      saveNow: [],
      saveNowIsThere: false,
      tag: null,
      discover_posts: [],
      ipAddress: null,
      appHead: null,
      listOne: [''],
      catego: null,
      clap: false,
      emptyBox: false,
      infini: true,
      showCatego: true,
      others: '',
      article: [''],
      reason: '',
      tagsList: [],
      listData: [],
      FN: false,
      BT: false,
      O: false,
      VL: false,
      Cop: false,
      choice: [],
      Saved: [''],
      otherShow: false,
    };
  },
  fetchOnServer: false,
  computed: {
    ...mapState([]),
    ...mapGetters({
      LogIn: 'loggedIn',
      postDone: 'isPostDone',
      newPost: 'getNewPostuuid'
    }),
  },
  mounted() {
    this.loadTagsData()
  },
  methods: {
    infiniteHandler($state, tag) {
      this.$axios
        .get('/home?limit=10&count=10&lang=' + this.$i18n.locale , {
          headers: {
            'API-KEY': this.$store.state.token
          },
          params: {
            start: this.page,
            category: this.category,
            tag: tag,
            paid: null
          }
        }).then((response) => {
          this.listData = response.data.results
          let Save = response.data.results.post_saved
          let Feed = response.data.results.feed
          this.$store.commit('PUT_SAVEDHOME', Save)
          // this.list = Feed
          if (Feed.length) {
            this.page += 1;
            this.list.push(...response.data.results.feed)
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
    loadNewGroupData(category, tag) {
      let recent = null

      if(tag === 'recent'){
        recent = recent
        tag = null
      }

      this.$axios
        .get('/home?limit=10&count=10&lang=' + this.$i18n.locale , {
          headers: {
            'API-KEY': this.$store.state.token
          },
          params: {
            start: this.page,
            category: category,
            tag: tag,
            recent: recent,
            paid: null
          }
        }).then((response) => {
          if (response.data.results.feed.length === 0) {
            this.list = []
            this.emptyBox = true
          } else {
            this.listData = response.data.results
            let Save = response.data.results.post_saved
            let Feed = response.data.results.feed
            this.list = Feed
            this.emptyBox = false
            this.$store.commit('PUT_SAVEDHOME', Save)
          }
        });
    },
    selectCategory(tag) {
      if (tag === 'Most Recent') {
        tag = 'recent'
      }
      this.$store.commit('PUT_USERTAG', tag)
    },
    loadTagsData(category) {
      if(category !== null) {
        this.$axios
          .get('/post/tags', {
            params: {
              start: this.page,
              limit: 10,
              count: 10,
              category: category,
              paid: null
            }
          }).then((response) => {
          if (response.data.results){
            this.tagsList = response.data.results
            if(this.tagsList.length !== 0){
              this.tagsList.unshift({'id': 0, 'tags': 'Most Recent'})
            }else{
              this.tagsList.unshift({'id': 0, 'tags': 'Most Recent'})
            }
          }
        })
      } else {
        this.$axios
          .get('/post/tags', {
            params: {
              start: this.page,
              limit: 10,
              count: 10,
              paid: null
            }
          }).then((response) => {
          if (response.data.results){
            this.tagsList = response.data.results
            this.tagsList.unshift({'id': 0, 'tags': 'Most Recent'})
          }
        })
      }

    },
    addValue(val){
      let arr = this.choice

      if(!arr.includes(val)){
        arr.push(val);
      }else{
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
    goWritePage(){
      if (this.LogIn) {
        this.$router.push('/' + this.$i18n.locale + '/writeArticle')
      } else {
        this.$notification.new(this.$t('pages.home.writeArtic'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
      }
    },
    flushValue(){
      this.reason = ''
      this.otherShow = !this.otherShow
      this.O = false
      this.VL = false
      this.FN = false
      this.Cop = false
      this.BT = false
      this.choice = []
    },

    colorChange(uuid, event, id){
      for (let i = 0; i < this.saveNow.length; i++) {
        if (id === this.saveNow[i]){
          this.saveNowIsThere = true
        }
      }
      this.saveNow.push(id)
      if (this.saveNowIsThere){
        this.colorNotChange(id, event)
      } else {
        if (this.$cookies.get('token')) {
          this.$axios
            .post('/Save/', {
                Post_id: uuid
              },
              {
                headers : {
                  'API-KEY': this.$store.state.token
                }
              }
            )
            .then((res) => {
              event.target.classList.toggle('addColor')
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
      }
    },
    checkUrl(url){
      // JavaScript/TypeScript
      if (url.substring(0, 8) !== 'https://') {
        url = 'https://odaaay.com/api/static/files/' + url;
        return url
      }else {
        return url
      }
    },
    reportPost(id){
      if (this.LogIn) {
        this.$axios
          .post('/reportpost/', {
              type: this.choice,
              post_id: id,
              reason: this.reason
            },
            {
              headers : {
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

    colorNotChange(uuid, event){
      if (this.LogIn) {
        this.$axios
          .delete('/post/Save', {
            data: {Post_id: parseInt(uuid)}, headers: {'API-KEY': this.$store.state.token}
            }
          )
          .then((res) => {
            // event.target.classList.toggle('addColor')
            this.saveNowIsThere = false
            this.$notification.new(this.$t('pages.home.postUnsaved'), {
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
        // this.$notification.new(this.$t('pages.home.saveSince'), {
        //   timer: 15,
        //   position: 'bottomRight',
        //   type: 'success',
        //   showLeftIcn: true,
        //   showCloseIcn: true
        // })
      }
    },
    getArticleDirect(uuid) {
      this.$axios
        .get('/homearticle/' + uuid,
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
          if (res.data.results) {
            if (res.data.results.status == 0 || res.data.results.status == 1 || res.data.results.status == 4) {
              this.statuses = 0
              this.shout = res.data.results.shouts
              this.article = res.data.results.translated_feed
              this.$store.commit('PUT_DONE', false)
              this.$store.commit('PUT_NEWPOSTUUID', '')
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    isItSave(id){
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
              headers : {
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
    sortFunction(command) {
      if (command === 'b') {
        this.$notification.new(this.$t('pages.home.sortNews'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
        return this.list.sort(function (a, b) {
          // const dateA = new Date(a.posts[0].uploader_date)
          // const dateB = new Date(b.posts[0].uploader_date)
          // return dateB - dateA
        })
      }
      if (command === 'c') {
        this.$notification.new(this.$t('pages.home.sortOld'), {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        });
        return this.list.sort(function (a, b) {
          // const dateA = new Date(a.posts[0].uploader_date)
          // const dateB = new Date(b.posts[0].uploader_date)
          // return dateA - dateB
        })
      }
    },
    clapper(id, event) {
      if (this.LogIn) {
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

    likee(id){
      event.stopPropagation()
      document.getElementById(id).click()
    },

    shoutOn(id, event){
      this.$axios
        .post('/post/Shout', {
          Post_id: id
        },{
          headers: {
            'API-KEY': this.$store.state.token
          }
        })
        .then((response) => {
          if(response.data.status === 1){
            if (event.target.nodeName == 'BUTTON'){
              console.log(event.target.lastElementChild.textContent)
              let shout = event.target.lastElementChild.textContent
              shout = parseInt(shout) + 1
              event.target.lastElementChild.textContent = shout
            }

            this.$notification.new(this.$t('pages.home.clapDone'), {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
          if(response.data.status === 0){
            this.unShout(id, event)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    unShout(id, event){
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
          if( response.data.status === 1){
            if (event.target.nodeName == 'BUTTON'){
              let shout = event.target.lastElementChild.textContent
                shout = parseInt(shout) - 1
                event.target.lastElementChild.textContent = shout
            }
            this.$notification.new(this.$t('pages.home.clapRemove'), {
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
  },
};
</script>
<style >
/* .card-left-img {
    height: 17vh !important;
    width: 12vw !important;
} */
.addColor {
  color: rgb(240, 86, 84)!important;
}
.addColor1 {
  color: rgb(240, 86, 84)!important;
  padding-top: 8px !important;
}

.VueStar__icon {
  top: 1px;
  right: 100px;
  position: absolute;
  z-index: 50 !important;
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
.card-body .card-title,
.card-body p {
  height: unset !important;
  max-height: 100% !important;
}
.articles .card-body {
  height: unset !important;
  max-height: 100% !important;
}
.vclapbtn-bin {
  line-height: 30px!important;
}

@keyframes changeBackgroundColor {
  0% {
    background-color: whitesmoke !important;
  }
  50% {
    background-color: #abdde5 !important;
  }
  100% {
    background-color: whitesmoke !important;

  }
}

.carous .VueCarousel-slide{
  flex-basis: fit-content;
  /*-moz-flex-basis: fit-content;*/
  /*-webkit-flex-basis: fit-content;*/
  /* flex-grow: 1; */
  flex-wrap: nowrap;
  white-space: nowrap;
  flex-shrink: 0;
  padding-right: 5px;
  user-select: none;
  backface-visibility: hidden;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}
.carous .VueCarousel-inner--center {
  justify-content: left;
}
.carous .VueCarousel {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px 10px 20px 10px !important;
}
.new-data {
  animation: 160s ease-out 0s 1 changeBackgroundColor  ;
}
</style>
