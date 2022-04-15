<template>

  <div>
    <div class="bg-editor mt-2 h-100 page mx-auto">
      <div class="card bg-transparent h-100 text-secondary">
        <div class="card-body subpage">
          <div class="form-group mb-4">
            <label for="posTitle" class="fw-bold text-secondary">{{ $t('pages.home.headTitle') }}</label>
            <input
              id="posTitle"
              type="text"
              class="form-control bg-primary-500"
              :placeholder="`${$t('pages.home.place')}`"
            />
          </div>
          <div id="editor" class="lh-1">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
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
    makeArticlePost(){
      this.$axios
        .post('/post', {
            title: this.linkTitle,
            type: this.typePost,
            post_url: this.linkArticle,
            thumb: this.thumbUrl,
            content: this.contentHolder,
            lang: this.languagePost,
            translate: this.translate,
            summarize: this.summarize,
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            }
          }
        )
        .then((response) => {
          this.linkTitle = ''
          this.linkArticle = ''
          this.showProgression = false
          this.$nuxt.refresh()
          // console.log(response)
          if(response.data.status === 1 ){
            this.$notification.new(this.$t('pages.home.postDones')+" 😉", {
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
    },

    saveText(event){
      this.$store.commit('PUT_USERARTICLETEXT', event.target.value)
    },

    openCity(evt, cityName) {
      var i, tabContent, tabLinks;
      tabContent = document.getElementsByClassName("tabContent");
      for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }
      tabLinks = document.getElementsByClassName("tabLinks");
      for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    },
  },
  mounted() {
    BalloonEditor
        .create( document.querySelector( '#editor' ) , {
           ckfinder: {
            uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

        },
        placeholder: this.$t('pages.home.initWriting')
        })
        .catch( error => {
            console.error( error );
        } );
  },
};
</script>
<style lang="css">
.ck.ck-toolbar {
  background-color: transparent !important;
  border: none !important;
}
.ck.ck-button.ck-button_with-text,
a.ck.ck-button.ck-button_with-text {
  padding: 0px !important;
  font-weight: 600 !important;
}
.ck.ck-editor__editable_inline {
  padding: 0px !important;
}

.feature {
  position: relative;
  width: 150px;
  height: 35px;
  float: left;
  border: 1px solid #067171;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 600 !important;
  font-size: 14px !important;
}

.feature div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  transition: 0.5s ease;
}

.feature input {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 35px;
  opacity: 0;
  cursor: pointer;
}

input[type="checkbox"]:checked ~ div {
  background-color: #067171;
  color: white;
}
.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{
  border: none !important;
  box-shadow: unset !important;
}
.page {
  width: 21cm;
  min-height: 29.7cm;
  /*padding: 1cm;*/
  margin: 1cm auto;
  border-radius: 10px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

/* .subpage {
  padding: 1cm;
  border: 5px red solid;
  height: 256mm;
  outline: 2cm #FFEAEA solid;
} */

@page {
  size: A4;
  margin: 0;
}

@media print {
  .page {
    margin: 0;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
}
</style>
