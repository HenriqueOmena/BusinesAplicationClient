import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/componnets/Homne'
import Login from '@/componnets/Homne'
import About from '@/componnets/about'

Vue.use(Router)

export default new Router({
  routes: [
   /*  {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      redirect: '/',
      component: HelloWorld
    }
  ]
})
