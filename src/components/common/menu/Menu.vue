<template>
  <div :class="type" :animate="animate">
    <div class="oy-mask-black" v-show="MaskToggle" v-if="mask === 'black'" @click="toggle"></div>
    <div class="oy-mask-white" v-show="MaskToggle" v-if="mask === 'white'" @click="toggle"></div>
    <div class="oy-menu-group" :class="{'open': open}">
      <button class="oy-menu-btn btn-toggle pink" :class="{'oy-menu-btn-Circle': circle}" :style="{'background': BtnColor}" @click="toggle">
        <i class="icon-bars" v-if="btn"></i>
        <slot name="item_btn"></slot>
      </button>
      <div class="btn-list">
        <div class="oy-menu-item oy-menu-item_1" :class="AnimateClass" :style="{'background': Item1Color}" v-show="number > 1 && number < 5">
          <slot name="item_1"></slot>
        </div>
        <div class="oy-menu-item oy-menu-item_2" :class="AnimateClass" :style="{'background': Item2Color}" v-show="number > 1 && number < 5">
          <slot name="item_2"></slot>
        </div>
        <div class="oy-menu-item oy-menu-item_3" :class="AnimateClass" :style="{'background': Item3Color}" v-show="isShow">
          <slot name="item_3"></slot>
        </div>
        <div class="oy-menu-item oy-menu-item_4" :class="AnimateClass" :style="{'background': Item4Color}" v-show="number === 4">
          <slot name="item_4"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { isColors } from '../../../utils/colorRE.js'
  export default {
    name: 'Menu',
    props: {
      type: {
        type: String,
        required: true
      },
      number: {
        type: Number,
        required: true,
        validator: function (value) {
         return value > 1 && value < 5
        }
      },
      animate: String,
      mask: String,
      circle: Boolean,
      btn: Boolean,
      colors: Array
    },
    data () {
      return {
        open: false,
        toggleAnimate: false,
        MaskToggle: false,
        BtnColor: '',
        Item1Color: '',
        Item2Color: '',
        Item3Color: '',
        Item4Color: ''
      }
    },
    methods: {
      toggle () {
        this.open = !this.open
        this.toggleAnimate = !this.toggleAnimate
        this.MaskToggle =!this.MaskToggle
      }
    },
    computed: {
      AnimateClass () {
        return this.toggleAnimate ? this.animate : ''
      },
      isShow () {
        if (this.number === 3) {
          if (this.type === 'middle' || this.type === 'middle-around') {
            console.error('error')
          } else {
            return true
          }
        } else if (this.number === 4) {
          return true
        } else {
          return false
        }
      }
    },
    mounted () {
      if (this.colors) {
        if (this.colors.every(isColors) && this.colors.length === 5) {
          for(let i = 0, length = this.colors.length; i < length; i++){
            this.BtnColor = this.colors[0]
            this.Item1Color = this.colors[1]
            this.Item2Color = this.colors[2]
            this.Item3Color = this.colors[3]
            this.Item4Color = this.colors[4]
          }
        } else {
          console.error('error')
        }
      }
    }
  }
</script>
