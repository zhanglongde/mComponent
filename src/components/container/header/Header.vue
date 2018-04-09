<template>
  <div class="z-header">
    <div class="z-header-left">
      <slot name="overwrite-left"></slot>
      <slot name="left"></slot>
    </div>
    <h1 class="z-header-title">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="z-header-right">
      <a v-if="rightOptions.showMore" class="z-header-more"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zHeader',
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
    methods: {
    }
  }
</script>
