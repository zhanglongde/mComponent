<template>
  <div class="swipeout-item"
  @touchstart="start"
  @mousedown="start"
  @touchmove="move"
  @mousemove="move"
  @touchend="end"
  @mouseup="end"
  @touchcancel="end">
    <div class="swipeout-button-box swipeout-button-box-left" :style="leftButtonBoxStyle" v-show="distX >= 0">
      <slot name="left-menu"></slot>
    </div>
    <div class="swipeout-button-box swipeout-button-box-right" :style="rightButtonBoxStyle" v-show="distX <= 0">
      <slot name="right-menu"></slot>
    </div>
    <div class="swipeout-content" :style="styles" @mousedown="onContentClick" @touchstart="onContentClick" ref="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SwipeoutItem',
    data () {
      return {}
    },
    props: {
      sensitivity: {
        type: Number,
        default: 0
      },
      autoCloseOnButtonClick: {
        type: Boolean,
        default: true
      },
      disabled: Boolean,
      threshold: {
        type: Number,
        default: 0.3
      },
      underlayColor: String,
      transitionMode: {
        type: String,
        default: 'reveal'
      }
    },
    computed: {
      menuWidth () {},
      buttonBoxStyle () {},
      leftButtonBoxStyle () {},
      rightButtonBoxStyle () {}
    },
    watch: {
      disabled (newVal, oldVal) {
        if (newVal === true && !oldVal) {
          this.setOffset(0, true, true)
        }
      }
    },
    methods: {
      setOffset () {},
      render () {},
      onContentClick () {},
      onItemClick () {},
      start () {},
      move () {},
      end () {},
      _setClose () {},
      open () {},
      close () {}
    },
    mounted () {
      this.$nextTick(() => {
        this.render()
      })
    }
  }
</script>
