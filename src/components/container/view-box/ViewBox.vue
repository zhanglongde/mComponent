<template>
  <div class="view-box">
    <slot name="header"></slot>
    <div class="view-box-content" ref="viewBoxBody" :style="{paddingTop: paddingTop + 'px', paddingBottom: paddingBottom + 'px'}">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name: 'ViewBox',
    data () {
      return {}
    },
    props: {
     paddingTop: {
        type: [Number, String],
        default: 0
     },
     paddingBottom: {
       type: [Number, String],
       default: 0
     }
    },
    methods: {
      scrollTo (top) {},
      getScrollTop () {},
      getScrollBody () {}
    }
  }
</script>
