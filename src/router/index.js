import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Home'
import Me from '@/views/Me/Me'

/*
Demo组件展示
*/
import Index from '@/views/Demo/Index'

import Common from '@/views/Demo/Common/Common'
import Scroll from '@/views/Demo/Common/Scroll'
import Menu from '@/views/Demo/Common/Menu'

import DataDisplay from '@/views/Demo/DataDisplay/DataDisplay'
import DataEntry from '@/views/Demo/DataEntry/DataEntry'

import Container from '@/views/Demo/Container/Container'
import Drawer from '@/views/Demo/Container/Drawer'

import Special from '@/views/Demo/Special/Special'
import StackView from '@/views/Demo/Special/StackView'

/*
引导页
*/
import Guide from '@/views/Demo/Guide/Guide'
import Guide1 from '@/views/Demo/Guide/Guide1'
import Guide2 from '@/views/Demo/Guide/Guide2'
import Guide3 from '@/views/Demo/Guide/Guide3'
import Guide4 from '@/views/Demo/Guide/Guide4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Index
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/Common',
      name: 'Common',
      component: Common,
      children: []
    },
    {
      path: '/Scroll',
      name: 'CommonScroll',
      component: Scroll
    },
    {
      path: '/Data-Display',
      name: 'DataDisplay',
      component: DataDisplay
    },
    {
      path: '/Data-Entry',
      name: 'DataEntry',
      component: DataEntry
    },
    {
      path: '/Container',
      name: 'Container',
      component: Container
    },
    {
      path: '/Special',
      name: 'Special',
      component: Special
    },
    {
      path: '/Drawer',
      name: 'CommonDrawer',
      component: Drawer
    },
    {
      path: '/Menu',
      name: 'CommonMenu',
      component: Menu
    },
    {
      path: '/Stack',
      name: 'Stack',
      component: StackView
    },
    {
      path: '/guide-page',
      name: 'GuidePage',
      component: Guide,
      children: [{
        name:'default',
        path: '',
        component: Guide1
      },{
        name:'page1',
        path: '1',
        component: Guide1
      }, {
        name:'page2',
        path: '2',
        component: Guide2
      }, {
        name:'page3',
        path: '3',
        component: Guide3
      }, {
        name:'page4',
        path: '4',
        component: Guide4
      }]
    }
  ]
})
