<template>
  <div class="pt-4">
    <div class="row m-0 p-0">
      <div class="col-md-12 px-lg-5 px-md-3 px-4 ">
        <writeArticle></writeArticle>
      </div>
    </div>
  </div>
</template>

<script>

import writeArticle from "../components/writeArticle";

export default {
  layout: "writeArticleLayout",

  middleware: 'authentication',

  components: {
    writeArticle,
  },
  data() {
    return {
      discover_posts: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2500);
    });
  },
};
</script>

<style>
</style>
