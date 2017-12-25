<template>
  <div id="app">
    <transition name="page-pop-in">
       <router-view/>
    </transition>
  </div>
</template>
<style lang="scss">
  @import "assets/scss/index.scss";
</style>
<script>
export default {
  name: 'app'
}
</script>
