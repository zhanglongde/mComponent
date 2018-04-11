<template>
  <div class="by-container">
    <div class="by-content">
      <h1>通用组件</h1>
      <h2>Menu</h2>
    </div>
    <div class="by-content">
      <Menu type="bottom" :number="4" :colors="[ '#58a', 'rgb(255, 255, 102)', '#FFE26F', '#F3825F', '#F19584' ]">
        <template slot="item_btn"></template>
        <a slot="item_1" class="fa fa-twitter fa-lg" herf="#" ></a>
        <a slot="item_2" class="fa fa-weixin fa-lg" herf="#" ></a>
        <a slot="item_3" class="fa fa-weibo fa-lg" herf="#" ></a>
        <a slot="item_4" class="fa fa-github fa-lg" herf="#" ></a>
      </Menu>
    </div>
    <div class="by-content">
      <Menu type="left" :number="4" :colors="[ '#85a', 'rgb(255, 255, 102)', '#FFE26F', '#F3825F', '#F19584' ]">
        <template slot="item_btn"></template>
        <a slot="item_1" class="fa fa-twitter fa-lg" herf="#" ></a>
        <a slot="item_2" class="fa fa-weixin fa-lg" herf="#" ></a>
        <a slot="item_3" class="fa fa-weibo fa-lg" herf="#" ></a>
        <a slot="item_4" class="fa fa-github fa-lg" herf="#" ></a>
      </Menu>
    </div>
    <div class="by-content">
      <Menu type="middle" :number="4" :colors="[ '#fc3', 'rgb(255, 255, 102)', '#FFE26F', '#F3825F', '#F19584' ]">
        <template slot="item_btn"></template>
        <a slot="item_1" class="fa fa-twitter fa-lg" herf="#" ></a>
        <a slot="item_2" class="fa fa-weixin fa-lg" herf="#" ></a>
        <a slot="item_3" class="fa fa-weibo fa-lg" herf="#" ></a>
        <a slot="item_4" class="fa fa-github fa-lg" herf="#" ></a>
      </Menu>
    </div>
    <div class="by-content">
      <Menu type="middle-around" :number="4" :colors="[ '#9c3', 'rgb(255, 255, 102)', '#FFE26F', '#F3825F', '#F19584' ]">
        <template slot="item_btn"></template>
        <a slot="item_1" class="fa fa-twitter fa-lg" herf="#" ></a>
        <a slot="item_2" class="fa fa-weixin fa-lg" herf="#" ></a>
        <a slot="item_3" class="fa fa-weibo fa-lg" herf="#" ></a>
        <a slot="item_4" class="fa fa-github fa-lg" herf="#" ></a>
      </Menu>
    </div>
  </div>
</template>
<style scoped>
  .by-content{
    width:300px;
    margin-top:100px;
    height:50px;
  }
</style>
<script>
  export default {
    name: 'CommonMenu',
    data () {
      return {
      }
    }
  }
</script>
