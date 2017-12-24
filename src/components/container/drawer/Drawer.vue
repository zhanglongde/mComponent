<!--this component is forked from: https://github.com/bajian/vue-drawer-->
<template>
<div class="drawer-container" :class="{'active': isShow}">
  <div class="drawer-body" :style="{transform: `translate3d(${translateX}px, 0, 0)`}">
    <slot></slot>
    <div class="drawer-mask" @click="hideMask"></div>
  </div>
  <div ref="drawer"  class="drawer" :class="[placement !== 'left' ? 'right' : 'left']" :style="drawerStyle">
    <slot name="drawer"></slot>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Drawer',
    data () {
      return {
        drawerWidth: 0, // 不带方向
        translateX: 0 // 带有方向性
      }
    },
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      placement: {
        type: String,
        default: 'left' // [left,right]
      },
      showMode: {
        type: String,
        default: 'overlay' // [overlay, push],overlay:主体部分不移动，push:主体被drawer推进
      },
      drawerStyle: Object // 便于外部定制样式
    },
    watch: {
      isShow: function (newValue) {
        if (this.isShow) {
          this.$emit('onShow')
        } else {
          this.$emit('onHide')
        }
//        overlay:主体部分不移动
        if (this.showMode === 'overlay') {
          return
        }
        if (this.isShow) {
          this.translateX = this.placement === 'left' ? this.drawerWidth : -this.drawerWidth
        } else {
          this.translateX = 0
        }
      }
    },
    methods: {
      hideMask () {
//        可以改成v-model实现
        this.$emit('changeShow', false)
      }
    },
    mounted () {
//      此处可用transition组件封装
      this.$nextTick(() => {
        //      this.drawerWidth = this.$refs.drawer.clientWidth
        this.drawerWidth = this.$refs.drawer.offsetWidth // 应该包括边框和滚动条
      })
    }
  }
</script>
