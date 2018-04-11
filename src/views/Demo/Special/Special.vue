<template>
  <div class="by-container">
    <div class="by-content">
      <h1>定制组件</h1>
    </div>
    <div class="by-content">
      <h2>Stack</h2>
      <zButton @click="goStack">Enter Stack</zButton>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Special',
    data () {
      return {
      }
    },
    methods: {
      goStack () {
        this.$router.push({path: '/Stack'})
      }
    }
  }
</script>
