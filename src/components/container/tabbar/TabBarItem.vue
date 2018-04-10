<template>
  <a href="javascript:;" class="tab-bar__item" :class="{'tab-bar__item--on': isActive, 'tab-bar--simple': simple}" @click="onItemClick(true)">
    <div v-if="!simple" class="tab-bar__icon" :class="[iconClass || $parent.iconClass, {'reddot': showDot}]">
      <slot v-if="!simple && !(hasActiveIcon && isActive)" name="icon"></slot>
      <slot v-if="!simple && hasActiveIcon && isActive" name="icon-active"></slot>
      <sup v-if="badge"><badge>{{badge}}</badge></sup>
    </div>
    <p class="tab-bar__label">
      <slot v-if="isLabelName" name="label"></slot>
      <slot v-else></slot>
    </p>
  </a>
</template>

<script>
  import { childMixin } from '../../../mixins/multi-items'
  import Badge from '../../data-display/badge'
  export default {
    name: 'TabBarItem',
    mixins: [childMixin],
    data () {
      return {
        simple: false,
        hasActiveIcon: false,
        isLabelName: true
      }
    },
    props: {
      showDot: {
        type: Boolean,
        default: false
      },
      badge: String,
      link: [String, Object],
      iconClass: String
    },
    computed: {
      isActive () {
        return this.$parent.index === this.currentIndex
      }
    },
    components: {
      Badge
    },
    mounted () {
      if (!this.$slots.icon) {
        this.simple = true
      }
      if (!this.$slots.label) {
        this.isLabelName = false
      }
      if (this.$slots['icon-active']) {
        this.hasActiveIcon = true
      }
    }
  }
</script>
