<template>
  <Drawer :isShow="isDrawerShow" :placement="placement" :showMode="showMode" @changeShow="changeShow" @onShow="onShow" @onHide="onHide">
    <div class="drawer-content" slot="drawer">
      <ul class="nav-container">
        <li v-for="item in navItems"><a :href="item.href">{{item.name}}</a></li>
      </ul>
    </div>
    <div class="drawer-body-wrapper">
      <h1>容器组件</h1>
      <h2>Drawer</h2>
      <div>
        <div>placement: {{placement}}</div>
        <div>showMode: {{showMode}}</div>
      </div>
      <zButton @click="toggleDrawer">toggleDrawer</zButton>
      <zButton @click="toggleShowMode">toggleShowMode</zButton>
      <zButton @click="togglePlacement">togglePlacement</zButton>
    </div>
  </Drawer>
</template>
<style lang="scss">
  html,body,#app{
    height:100%;
  }
  .drawer-body-wrapper{
    padding-left: 320px;
  }
  .drawer-content{
    width:300px;
    padding: 20px 16px;
  }
  .nav-container{
    &>li{
      height:40px;
      line-height: 40px;
    }
  }
</style>
<script>
  export default {
    name: 'ContainerDrawer',
    data () {
      return {
        placement: 'left',
        showMode: 'overlay',
        isDrawerShow: false,
        navItems: [{name: 'home', href: '/'}, {name: '通用组件', href: '/'}, {name: '数据输入组件', href: '/'}, {name: '数据展示组件', href: '/'}, {name: '容器组件', href: '/'}]
      }
    },
    methods: {
      onShow () {
        console.log('show...')
      },
      onHide () {
        console.log('hide...')
      },
      changeShow (state) {
        this.isDrawerShow = state
      },
      toggleDrawer () {
        this.isDrawerShow = !this.isDrawerShow
      },
      toggleShowMode () {
        this.showMode = this.showMode === 'overlay' ? 'push' : 'overlay'
        setTimeout(() => {
          this.isDrawerShow = true
        }, 0)
//        this.isDrawerShow = true
      },
      togglePlacement () {
        this.placement = this.placement === 'left' ? 'right' : 'left'
        setTimeout(() => {
          this.isDrawerShow = true
        }, 500)
//        this.isDrawerShow = true
      }
    }
  }
</script>
