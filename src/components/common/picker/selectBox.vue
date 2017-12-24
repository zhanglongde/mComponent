<template>
  <div class="picker-wrapper">
    <div class="mask" @click="hidePicker"></div>
    <div class="pd-select-box">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  /**
   * Created by k186 on 2017/5/3.
   * gitHub: https://github.com/k186/iosSelect
   */
  /**
   *  selectItemBox components
   * */
  export default{
    name: 'pdSelectBox',
    methods: {
      hidePicker () {
        this.$emit('close')
      }
    }
  }
</script>
<style scoped lang="scss">
  .picker-wrapper{
    position:fixed;
    top:0; left:0;right:0;bottom:0;
    z-index:9999999999;
  }
  .pd-select-box {
    position: absolute;bottom: 0; width:100%;

    display: flex;
    background-color: #fff;
  }
  .picker-wrapper>.mask{
      position:absolute;
      top:0; left:0;right:0;bottom:0;
      background-color: rgba(0,0,0,0.3);
    }
</style>
