import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloDemo from '@/components/HelloDemo'
import zicomponent from '@/components/zicomponent'
import fucomponent from '@/components/fucomponent'
import MainPage from '@/components/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/hello',
      name:'HelloDemo',
      component:HelloDemo
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/zi',
      name: 'zicomponent',
      component: zicomponent
    },
    {
      path: '/fu',
      name: 'fucomponent',
      component: fucomponent
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
