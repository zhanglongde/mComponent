<template>
  <div style="height:100%;">
    <view-box :paddingTop="46" :paddingBottom="55">
      <zHeader slot="header"></zHeader>
      <transition name="page-pop-in">
        <router-view/>
      </transition>
      <tab-bar slot="footer">
        <tab-bar-item :link="{path: '/Home'}">Home</tab-bar-item>
        <tab-bar-item :link="{path: '/Demo'}">Demo</tab-bar-item>
        <tab-bar-item :link="{path: '/Me'}">我</tab-bar-item>
      </tab-bar>
    </view-box>
    <!--<transition name="page-pop-in">-->
      <!--<router-view/>-->
    <!--</transition>-->
  </div>
</template>
<style>
  html,body, div#app{
    height: 100%;
    /*width: 100%;*/
    /*overflow-y:hidden;*/
    overflow-x:hidden;
  }
  .view-box .z-header{
    position:absolute;
    left:0;right:0;
  }
</style>
<script>
  export default {
    name: 'PageContainer'
  }
</script>
