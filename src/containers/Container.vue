<template>
  <div style="height:100%;">
    <view-box :paddingTop="46" :paddingBottom="55">
      <zHeader slot="header"></zHeader>
      <transition name="page-pop-in">
        <router-view/>
      </transition>
      <tab-bar slot="footer">
        <tab-bar-item :link="{path: '/Home'}">Home</tab-bar-item>
        <tab-bar-item selected :link="{path: '/Demo'}">Demo</tab-bar-item>
        <tab-bar-item :link="{path: '/Me'}">我</tab-bar-item>
      </tab-bar>
    </view-box>
  </div>
</template>
<script>
  export default {
    name: 'PageContainer',
    computed: {
      isHeader () {
        console.log(this.$router.history.current.fullPath.indexOf('guide'))
        return this.$router.history.current.fullPath.indexOf('guide') < 0
      }
    }
  }
</script>
