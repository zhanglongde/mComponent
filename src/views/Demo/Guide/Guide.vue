<template>
  <div class="guide-container">
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
      <router-view></router-view>
    </v-touch>
    <ul class="circle-nav">
      <li :class="{'nav-current':$route.name==='page1'||$route.name==='default'}"></li>
      <li :class="{'nav-current':$route.name==='page2'}"></li>
      <li :class="{'nav-current':$route.name==='page3'}"></li>
      <li :class="{'nav-current':$route.name==='page4'}"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'GuidePage',
    methods: {
      onSwipeLeft(e) {
        switch (this.$route.name) {
          case 'default':
          case 'page1':
            this.$router.push({
              name: 'page2'
            })
            break
          case 'page2':
            this.$router.push({
              name: 'page3'
            })
            break
          case 'page3':
            this.$router.push({
              name: 'page4'
            })
            break
        }
      },
      onSwipeRight() {
        this.$router.back()
      }
    }
  }
</script>
<style>
  .guide-container,
  .guide-container>div,
  .guide-container>div>div
  {
    height:100%;
  }
  .guide-container>div>div{
    text-align:center;

    padding-top: 50px;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: inherit;
  }


  .circle-nav {
    position: fixed;
    /*bottom: 10px;*/
    bottom: 150px;
    width: 100%;
    max-width: inherit;
    text-align: center;
    padding: 0;
    opacity: 0.75;
  }

  .circle-nav li {
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 1px solid #f44336;
    border-radius: 50%;
    margin: 5px;
  }

  .nav-current {
    background-color: #f44336;
  }
</style>
