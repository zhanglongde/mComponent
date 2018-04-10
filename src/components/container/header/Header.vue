<template>
  <div class="z-header">
    <div class="z-header-left">
      <slot name="overwrite-left">
        <transition :name="transition">
          <a class="z-header-back" v-show="_leftOptions.showBack" @click="onClickBack">
            {{typeof _leftOptions.backText === 'undefined' ? '返回' : _leftOptions.backText}}
          </a>
        </transition>
        <transition :name="transition">
          <div class="left-arrow" v-show="_leftOptions.showBack" @click="onClickBack"></div>
        </transition>
      </slot>
      <slot name="left"></slot>
    </div>
    <h1 class="z-header-title" v-if="!shouldOverWriteTitle" @click="$emit('on-click-title')">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="z-header-title-area" v-if="shouldOverWriteTitle">
      <slot name="overwrite-title"></slot>
    </div>
    <div class="z-header-right">
      <a v-if="rightOptions.showMore" class="z-header-more" @click="$emit('on-click-more')"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import assign from 'lodash/assign'
  export default {
    name: 'zHeader',
    data () {
      return {
        shouldOverWriteTitle: false
      }
    },
    props: {
      'leftOptions': {
        type: Object
      },
      'rightOptions': {
        type: Object,
        default () {
          return {
            showMore: false
          }
        }
      },
      title: String,
      transition: String
    },
    computed: {
      _leftOptions () {
        return assign({
          showBack: true,
          preventGoBack: false
        }, this.leftOptions || {})
      }
    },
    methods: {
      onClickBack() {
        if (this._leftOptions.preventGoBack) {
          this.$emit('on-click-back')
        } else {
          this.$router ? this.$router.back() : window.history.back()
        }
      }
    },
    beforeMount () {
      if (this.$slots['overwrite-title']) {
        this.shouldOverWriteTitle = true
      }
    }
  }
</script>
