<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import { parentMixin } from '../../../mixins/multi-items'
  export default {
    name: 'TabBar',
    props: {
      iconClass: String
    },
    mixins: [parentMixin],
    mounted () {
      this.$nextTick(() => {
        const $el = this.$el
        const position = window.getComputedStyle($el).position
        if (position !== 'fixed') {
          console.log('need position:fixed...')
        }
      })
    }
  }
</script>
