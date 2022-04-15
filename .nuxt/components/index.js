export { default as ArticalDetail } from '../..\\components\\articalDetail.vue'
export { default as ArticalPreview } from '../..\\components\\articalPreview.vue'
export { default as ArticalProfilePost } from '../..\\components\\articalProfilePost.vue'
export { default as ArticalProfileSave } from '../..\\components\\articalProfileSave.vue'
export { default as Communities } from '../..\\components\\communities.vue'
export { default as Editor } from '../..\\components\\editor.vue'
export { default as Followers } from '../..\\components\\followers.vue'
export { default as Following } from '../..\\components\\following.vue'
export { default as InvitationSend } from '../..\\components\\invitationSend.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Newslater } from '../..\\components\\newslater.vue'
export { default as OtherPosts } from '../..\\components\\otherPosts.vue'
export { default as ProfileSetting } from '../..\\components\\profileSetting.vue'
export { default as RangeSlider } from '../..\\components\\rangeSlider.vue'
export { default as ScrollSpyContainer } from '../..\\components\\ScrollSpyContainer.vue'
export { default as ScrollSpyIndicator } from '../..\\components\\ScrollSpyIndicator.vue'
export { default as SliderData } from '../..\\components\\sliderData.vue'
export { default as SliderDataUser } from '../..\\components\\sliderDataUser.vue'
export { default as Splash } from '../..\\components\\splash.vue'
export { default as TaggedCommunities } from '../..\\components\\taggedCommunities.vue'
export { default as WriteArticle } from '../..\\components\\writeArticle.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
