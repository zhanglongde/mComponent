<template>
  <div id="app">
    <Container></Container>
  </div>
</template>
<style lang="scss">
  @import "assets/scss/index.scss";
</style>
<script>
import Container from '@/containers/Container'
export default {
  name: 'app',
  components: {
    Container
  }

}
</script>
