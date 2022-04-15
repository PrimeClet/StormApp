<template>
  <div>
        <div class="container-fluid">
        <div class="row py-3">
            <div class="col-ms-12 col-md-4 col-lg-3 align-self-end">
<!--                <AuthorInfo :data="widget3" />-->
            </div>
            <div class="col">
<!--                <TitleContentWithBackgroundImg :data="widget2"/>-->
            </div>
        </div>
    </div>
    <ScrollSpyContainer :data="widget1" />
<!--&lt;!&ndash;    <div class="row container py-3">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="col-ms-12 col-md-4 col-lg-3">&ndash;&gt;-->
<!--&lt;!&ndash;        <div id="list-example" class="list-group">&ndash;&gt;-->
<!--&lt;!&ndash;          <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>&ndash;&gt;-->
<!--&lt;!&ndash;          <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>&ndash;&gt;-->
<!--&lt;!&ndash;          <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>&ndash;&gt;-->
<!--&lt;!&ndash;          <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="col">&ndash;&gt;-->
<!--&lt;!&ndash;        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">&ndash;&gt;-->
<!--&lt;!&ndash;          <h4 id="list-item-1">Item 1</h4>&ndash;&gt;-->
<!--&lt;!&ndash;          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac porta risus. Nunc quam massa, cursus sed ornare sit amet, vestibulum et ante. Cras vitae erat nec felis malesuada vestibulum at in nunc. Pellentesque imperdiet gravida congue. Curabitur semper quis dolor eget dapibus. Proin eget felis sed leo mattis ornare. Maecenas tempor massa neque, et vulputate mi bibendum vel. Duis id porta lectus. Etiam mollis faucibus ipsum ut molestie.&ndash;&gt;-->

<!--&lt;!&ndash;            Duis augue nulla, tempus quis lacus at, pulvinar vehicula est. Integer consectetur erat ac sagittis pharetra. Fusce faucibus risus vitae justo eleifend fringilla. Suspendisse interdum bibendum eros, eu faucibus nunc tempor sed. Pellentesque lorem magna, efficitur condimentum lacinia in, bibendum at lectus. Cras ornare, velit vel tristique fermentum, nunc metus condimentum nisl, vel dictum orci elit ac risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam auctor porttitor nisi ac efficitur. Suspendisse eu pulvinar leo. Nullam tristique pretium diam, eu convallis risus. Suspendisse luctus interdum lacinia. Etiam vel lectus ornare, feugiat leo nec, interdum mauris. Sed venenatis hendrerit varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>&ndash;&gt;-->
<!--&lt;!&ndash;          <h4 id="list-item-2">Item 2</h4>&ndash;&gt;-->
<!--&lt;!&ndash;          <p>Aenean ut augue felis. Proin feugiat in ex nec sollicitudin. Quisque fringilla, nisi ut volutpat pulvinar, velit leo maximus leo, sit amet rhoncus eros est et tortor. Suspendisse interdum ante sed mi commodo auctor. Curabitur id volutpat justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non pellentesque lacus.&ndash;&gt;-->

<!--&lt;!&ndash;            Integer fermentum mattis elit, non maximus orci maximus non. Quisque eu tortor suscipit, finibus quam et, ullamcorper arcu. Sed luctus auctor ultrices. Aliquam eleifend, neque in pretium placerat, libero eros faucibus lectus, eu sodales enim leo eu tortor. In accumsan semper diam, ac maximus nulla volutpat eu. Sed egestas tellus ut augue porta commodo. Etiam sit amet diam ornare, luctus nibh in, hendrerit turpis. Vivamus a ex aliquet, semper turpis quis, semper velit. Maecenas aliquet auctor sodales. Morbi luctus, enim sed sodales tempus, tellus mi bibendum sapien, vel tincidunt ante sapien in libero. Mauris varius lectus molestie venenatis egestas. Donec ac diam enim. Nullam fringilla euismod ligula hendrerit hendrerit. Maecenas aliquam maximus ante et blandit.</p>&ndash;&gt;-->
<!--&lt;!&ndash;          <h4 id="list-item-3">Item 3</h4>&ndash;&gt;-->
<!--&lt;!&ndash;          <p>Nulla dignissim, orci ut vestibulum dictum, turpis lorem tempor justo, lobortis suscipit neque augue eu erat. Aliquam egestas luctus finibus. Quisque lectus eros, convallis vitae lectus non, tempor faucibus erat. Suspendisse posuere quis nunc finibus tristique. Praesent elementum id velit quis lacinia. Phasellus maximus, magna et dignissim consectetur, nibh ipsum volutpat massa, nec malesuada massa mauris vitae purus. Pellentesque volutpat quis lacus sit amet aliquam. Vestibulum sed urna ultricies, faucibus orci sed, placerat neque. Etiam volutpat nibh non sapien scelerisque tempor. Praesent a odio porta, posuere elit eget, egestas libero. Ut efficitur rutrum enim. In at posuere ligula, ut maximus turpis. Nulla congue ipsum lorem, a vehicula odio sagittis vel. Quisque dapibus augue vitae accumsan viverra. Pellentesque volutpat ligula ac quam consectetur, eu cursus ipsum rhoncus.</p>&ndash;&gt;-->
<!--&lt;!&ndash;          <h4 id="list-item-4">Item 4</h4>&ndash;&gt;-->
<!--&lt;!&ndash;          <p>...</p>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--    <div class="row container py-3">-->
<!--      <div class="col-ms-12 col-md-4 col-lg-3 position-absolute">-->
<!--        <ul v-scroll-spy-active v-scroll-spy-link>-->
<!--          <li>-->
<!--            <a>Menu 1</a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a>Menu 2</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        <div v-scroll-spy>-->
<!--          <div>-->
<!--            <h1>Header 1</h1>-->
<!--            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed erat eleifend, interdum lectus quis, aliquam nisi. Suspendisse tempor libero quam, sed gravida quam posuere quis. Pellentesque porttitor rhoncus pharetra. Phasellus in orci augue. Aliquam pretium magna posuere mauris pretium hendrerit. In hac habitasse platea dictumst. Nullam varius ornare quam non porta. Curabitur interdum tortor vitae libero sollicitudin congue vel accumsan lacus.-->

<!--              Sed bibendum tellus vel aliquet ornare. Vivamus sollicitudin finibus nisi ac suscipit. Aliquam a tellus interdum, placerat nisl non, faucibus massa. Curabitur nec quam quis metus malesuada volutpat. Nam eget ex et risus venenatis luctus quis eget felis. Duis vel malesuada dui, vel auctor augue. Pellentesque mattis dui sed bibendum luctus. Vestibulum at imperdiet lorem, a malesuada libero. Cras dapibus, orci et porttitor mollis, risus quam interdum arcu, at rutrum tellus sapien sit amet magna. Quisque sit amet quam rutrum, fermentum ligula in, aliquam nisl. Maecenas mattis libero id dolor lacinia, quis rutrum leo suscipit. Duis ipsum urna, mollis quis ultrices non, molestie dictum tellus. Etiam imperdiet finibus nibh, eu consequat lectus ultrices at. Cras mollis libero in diam volutpat, sit amet luctus tortor ornare. Phasellus at ante id orci facilisis luctus. </p>-->
<!--          </div>-->
<!--          <div>-->
<!--            <h1>Header 2</h1>-->
<!--            <p> Duis leo orci, commodo id enim sit amet, tempus eleifend diam. Curabitur ut nunc turpis. Suspendisse potenti. Etiam id sollicitudin arcu, quis fermentum nisl. Donec nisi orci, facilisis sit amet auctor rutrum, pellentesque vitae magna. Sed congue neque et quam sodales congue. Sed et sagittis nulla, nec euismod tortor. In ultricies, urna quis tristique pellentesque, sem nibh consectetur turpis, et fermentum lacus mi non magna. Vestibulum ultrices nibh in neque hendrerit, sed consectetur lectus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tellus justo, tincidunt eget ultrices ac, semper a enim. Duis maximus bibendum justo sed finibus. Aliquam magna leo, rutrum eu nibh quis, aliquet tempor lectus. In sodales ac nibh eu rhoncus. Vestibulum elementum nunc magna, in imperdiet nisl condimentum at.-->

<!--              Duis consequat nisi elit, ultrices tempor ipsum volutpat et. Mauris lacus metus, placerat non nulla id, tempus mollis dui. Integer faucibus diam eget massa dapibus efficitur. Sed sollicitudin mauris non sapien tempor, eget facilisis ligula consequat. Phasellus scelerisque ex eu bibendum eleifend. Morbi aliquet facilisis leo sit amet scelerisque. Donec suscipit vehicula libero quis dictum.-->

<!--              Morbi gravida vehicula mattis. Donec vulputate laoreet magna, at lobortis nisl rutrum non. Suspendisse auctor neque ut elit facilisis, ut mattis ligula venenatis. Fusce finibus sit amet nunc posuere semper. Pellentesque dignissim neque nec ipsum imperdiet, id vestibulum dui egestas. Donec consequat nisl quis dolor gravida fermentum non rutrum orci. Aliquam quis eros nulla.-->

<!--              Pellentesque ac porta sem, at accumsan urna. Suspendisse mattis, tortor non dignissim fermentum, leo massa vestibulum felis, rhoncus euismod nibh nunc vitae leo. Duis mattis, sapien ut finibus commodo, felis neque dapibus justo, et volutpat turpis eros sit amet est. In bibendum nec leo a vulputate. Suspendisse eget lacinia metus. Nulla facilisi. Phasellus non malesuada dolor. In varius maximus lacus sed facilisis. </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

</div>

</template>

<script>
import ScrollSpyContainer from "../components/ScrollSpyContainer.vue";
// import CardCircularImage from "./../widgets/CardCircularImage.vue";
// import TitleContentWithBackgroundImg from "./../widgets/TitleContentWithBackgroundImg.vue";
// import AuthorInfo from "./../widgets/AuthorInfo.vue";

export default {
  name: 'Home',
  components: {
      ScrollSpyContainer,
      // CardCircularImage,
      // TitleContentWithBackgroundImg,
      // AuthorInfo,
  },
  data () {
      return {
        widget0:{
            title: 'Author: Stephon Huels',
            imgSrc: process.env.MIX_BASE_URL+"/assets/img/profile/1.jpg",
            content: "International Assurance Assistant",
        },
        widget1: {
            treeNodes:[{
                id: 'item-1',
                text: 'Introduction',
                // nodes:[{
                //     id: 'item-1-1',
                //     text: 'Core concepts',
                // },{
                //     id: 'item-1-2',
                //     text: 'Basic example',
                //     nodes:[{
                //         id: 'item-1-2-1',
                //         text: 'How it works',
                //     }]
                // }]
            },{
                id: 'item-2',
                text: 'Guidelines',
            },{
                id: 'item-3',
                text: 'Related resources',
                // nodes:[{
                //     id: 'item-3-1',
                //     text: 'Advanced use of concepts',
                // },{
                //     id: 'item-3-2',
                //     text: 'Professional feedback',
                // }]
            }],
            content:[{
                id: 'item-1',
                title: 'Introduction',
                text: "We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
            },{
                id: 'item-2',
                title: 'Guide lines',
                text: "We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
            },{
                id: 'item-3',
                title: 'Related resources',
                text: "We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span class='highlight preview_website_name'>Xoleno Website</span>, you agreed to use cookies in agreement with the <span class='highlight preview_company_name'>Xoleno</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
            }]
        },
        widget2: {
          title: "Blog post title",
          content: "We take pride in providing highest-quality services for our clients allowing them to reach their goals. Our mission is to assist businesses in succeeding by providing the best digital solutions in a timely fashion for sustainable growth and increased revenues.",
          backgroundImgSrc:
            process.env.MIX_BASE_URL+"/assets/img/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg",
        },
        widget3: {
          name: "Author: M. Jhon Corl Balken",
          readTime: "Read time: 2 min",
          publicationDate: "Last modified: July 9, 2021",
          imgSrc: process.env.MIX_BASE_URL+"/assets/img/profile/1.jpg",
        }
      }
  },
  head: {
    bodyAttrs: {
      'data-bs-spy': "scroll",
      // 'data-bs-target': "#content",
      // 'data-bs-offset': "100"
      // 'data-bs-target': '#content'
    }
  }
}
</script>

<style scoped>
    .article-title-container{
        margin: 1em;
        border: solid 1px #d3d8e0;
    }
</style>
