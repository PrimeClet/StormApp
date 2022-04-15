<template>
  <div>
<!--    <div class="parallax">-->
<!--    </div>-->
    <div class="row mt-3">
      <div class="col-12 mt-3">
        <div class="container-lo">
          <b-container fluid>
            <b-row>
              <b-col cols="12" md="10" offset-md="1" class="pl-5 text-justify">
                <div id="listgroup-ex" style="position:relative; overflow-y:auto;">
                    <h2 class="text-center">Content Policy</h2>
                    <p>
                        Odaaay is doing its best to empower creators. Through the channels we provide creators they can post, comment, discuss and connect with their subscribers who share your interests. With Odaaay your content is your content, and we try to facilitate the process you can get remunerated for your content but also by providing exposure. 
                        Below you will find the platform-wide rules governing each channel and its content. If we determine that any content is in breach of these guidelines, we may remove it, hide it from public view, or impose other restrictions. This is an evolving document: we reserve the right to update these Content Guidelines at our discretion and provide notice of such changes seven (7) days in advance. 
                    </p>  
                  <h4 id="list-item-1">Minors </h4>
                  <p>
                    Do not post or encourage the posting of sexual or suggestive content involving minors.
                  </p>
                  <h4 id="list-item-2">Impersonation</h4>
                  <p>
                      You don’t have to use your real name to use Odaaay, but don’t impersonate an individual or an entity in a misleading or deceptive manner. This applies to Odaaay itself: 
                      don’t use Odaaay’s name, logo, or trademark in any way that misrepresents the company or misleads others.
                  </p>
                  
                  <h4 id="list-item-3">Privacy</h4>
                  <p>
                      Respect the privacy of others. Instigating harassment, for example by revealing someone’s personal or confidential information, is not allowed. 
                      Never post or threaten to post intimate or sexually-explicit media of someone without their consent.
                  </p>
                  <h4 id="list-item-4">Explicit Content</h4>
                  <p>
                      Ensure people have predictable experiences on Odaaay by properly labeling content and channels, particularly content that is graphic, sexually-explicit, or offensive.
                  </p>
                  
                  <h4 id="list-item-5">Plagiarism</h4>
                  <p>
                      Do not publish any material that was written or created by someone else and claim it as your own.
                  </p>
                  
                  <h4 id="list-item-6">Harmful and illegal activities</h4>
                  <p>
                    We don’t allow content that promotes harmful or illegal activities, including material that advocates, threatens, or shows you causing harm to yourself, other people, or animals.
                    <br>
                    Bullying & Hate
                    Odaaay is a place for creating community and where everyone should feel accepted and confortable, not for attacking marginalized or vulnerable groups of people. Everyone has a right to use Odaaay free of harassment, bullying, and threats of violence. Communities and users that incite violence or that promote hate based on identity or vulnerability will be banned.
                  </p>
                  <h4 id="list-item-7">Explicit Content</h4>
                  <p>
                      Ensure people have predictable experiences on Odaaay by properly labeling content and channels, particularly content that is graphic, sexually-explicit, or offensive.
                  </p>
                  <h4 id="list-item-8">Enforcement </h4>
                  <p>
                      We have a variety of ways of enforcing our rules, including, but not limited to
                        <ul>
                            <li>Asking you nicely to knock it off</li>
                            <li>Asking you less nicely</li>
                            <li>Temporary or permanent suspension of accounts</li>
                            <li>Removal of privileges from, or adding restrictions to, accounts</li>
                            <li>Adding restrictions to Odaaay communities, such as adding NSFW tags</li>
                            <li>Removal of content</li>
                            <li>Banning of Channel</li>
                        </ul>	
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "conPolicy",
  data() {
    return {
      offset: {top: 10, bottom: 20}
    }
  },
  methods: {
    onActivate(target) {
      console.log('Receved Event: scrollspy::activate for target ', target);
    },
    scrollInView($event) {
      let href = $event.target.getAttribute('href')
      if (href) {
        let el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  },
  created() {
    this.$root.$on('scrollspy::activate', this.onActivate);
  }
}
</script>

<style scoped>

.parallax {
  /* The image used */
  background-color: #ffc107;
  background-image: url('https://www.redditinc.com/assets/images/site/planet-06.svg'), url("https://www.redditinc.com/assets/images/site/wave-05.png");
  transform: translate3d(0px, 0px, 0px);
  /* Full height */
  height: 136px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: right bottom, center;
  background-repeat: no-repeat;
  background-size: contain;
}
.container-lo {
  padding-left: 15px;
  padding-right: 15px;
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

#two-columns {
  padding-bottom: 86px;
}
#two-columns {
  padding-bottom: 64px;
  padding-top: 18px;
}

.list-group-item.list-group-item-action.active::after {
  font-family: "Font Awesome 5 Free";
  content: "\f0d9";
  display: inline-block;
  padding-bottom: 2px;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  padding-left: 10px;
}
.list-group-item.list-group-item-action.active {
  font-weight: bolder !important;
}

list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: none;
  font-size: large !important;
}


</style>
