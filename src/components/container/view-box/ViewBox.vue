<template>
  <div class="view-box">
    <slot name="header"></slot>
    <div class="view-box-content" ref="viewBoxBody" :style="{paddingTop: paddingTop, paddingBottom: paddingBottom}">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name: 'ViewBox',
    props: {
     'paddingTop': {
        type: [Number, String],
        default: 0
     },
     'paddingBottom': {
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
