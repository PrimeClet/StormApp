<template >
  <div class="bg-transparent shadow discover rounded-3">
    <div class="card mb-3 bg-transparent p-lg-3 p-2 scroller">
      <h5 class="fw-bold">
        <span ><i class="fab fa-gripfire text-danger fs-4"></i> </span>
        {{ $t('pages.home.trending') }}
      </h5>
      <ol class="ps-4 px-2 fw-bold d-flex flex-column justify-content-start">
        <li v-for="discover in component_data" :key="discover.number" class="list-style-type-number d-flex flex-row px-0">
          <span class="mr-2">{{discover.number}}.</span>
          <span v-for="items in discover.posts" :key="items.id">
            <a :href="`/${$i18n.locale}/article/${items.uuid}`" target="_blank" >
              <div class="row px-2 mb-2">
                <div class="col-12 ps-2 pe-0">
                  <div class="card-body p-1">
                    <h6 class="card-title mb-0 text-base text-15">{{ discover.title }}</h6>
                  </div>
                </div>
              </div>
            </a>
          </span>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  props: ["component_data"],
  data() {
    return {
      discovers: []
    }
  },
};
</script>

<style lang="css">
.list-style-type-number::marker{
    list-style-type: none!important
}
</style>
