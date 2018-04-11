<template>
  <header>
    <Icon type="fa fa-angle-left" @click="goBack" size="40" color="#58a"></Icon>
  </header>
</template>
<script>
  export default {
    name: 'PageHeader',
    data () {
      return {
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
