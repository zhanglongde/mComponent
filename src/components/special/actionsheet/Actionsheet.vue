<template>
  <div class="actionsheet">
    <transition name="actionsheet__mask">
      <div class="mask mask--transparent" v-show="show" @click="onClickingMask"></div>
    </transition>
    <div class="actionsheet-content">
      <div class="actionsheet__menu">
        <div class="actionsheet__cell" v-if="hasHeaderSlot">
          <slot name="header"></slot>
        </div>
        <div class="actionsheet__cell" v-for="(text, key) in menus" v-html="text.label || text" @click="onMenuClick(text,key)"></div>
      </div>
      <div class="actionsheet__action" v-if="showCancel"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Actionsheet',
    data () {
      return {
        hasHeaderSlot: false,
        show: false
      }
    },
    props: {
      value: Boolean,
      showCancel: Boolean,
      cancelText: String,
      theme: {
        type: Strint,
        default: 'ios'
      },
      menus: {
        type: [Object, Array],
        default: () => ({})
      },
      closeOnClickingMask: {
        type: Boolean,
        default: true
      },
      closeOnClickingMenu: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      show (val) {
        this.$emit('input', val)
      },
      value: {
        handler (val) {
          this.show = val
        },
        immediate: true // 在侦听开始之后被立即调用
      }
    },
    methods: {
      onMenuClick (text, key) {
        if (typeof text === 'string') {
          this.emitEvent('on-click-menu', key, text)
        } else {
          if (text.type !== 'disabled' && text.type !== 'info') {
            if (text.value || text.value === 0) {
              this.emitEvent('on-click-menu', text.value, text)
            } else {
              this.emitEvent('on-click-menu', '', text)
              this.show = false
            }
          }
        }
      },
      onClickingMask () {
        this.$emit('on-click-mask')
        this.closeOnClickingMask && (this.show = false)
      },
      emitEvent (event, menu, item) {
        if (event === 'on-click-menu' && !/.noop/.test(menu)) {
          let _item = item
          if (typeof _item === 'object') {
            _item = JSON.parse(JSON.stringify(_item))
          }
          this.$emit(event, menu, _item)
          this.$emit(`${event}-${menu}`)
          this.closeOnClickingMenu && (this.show = false)
        }
      }
    },
    mounted () {
      this.hasHeaderSlot = !!this.$slots.header
    }
  }
</script>
