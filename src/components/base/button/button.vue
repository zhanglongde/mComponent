<template>
  <button class="btn-x btn-x-default btn-x-type1" @click="handleClick">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
  export default {
    name: 'zButton',
    data () {
      return {
      }
    },
    props: {
      text: String
    },
    methods: {
      handleClick () {
        this.$emit('click')
      }
    }
  }
</script>
