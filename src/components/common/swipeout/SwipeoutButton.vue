<template>
  <button class="swipeout-button"
  :class="{'swipeout-button-primary': type === 'primary', 'swipeout-button-warn': type === 'warn', 'vux-swipeout-button-default': type === 'default'}"
  @click="onButtonClick">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
  export default {
    name: 'SwipeoutButton',
    props: {
      text: String,
      backgroundColor: String,
      type: String,
      width: {
        type: Number,
        default: 80
      }
    },
    methods: {
      onButtonClick () {
        if (this.$parent.$options._componentTag === 'swipeout-item') {
          this.$parent.onItemClick(this.text)
        }
      }
    }
  }
</script>
