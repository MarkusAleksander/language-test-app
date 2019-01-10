import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/MainPages/Landing.vue'
import Home from '@/views/MainPages/Home.vue'
import TestComplete from '@/views/TestComplete.vue'
import UserBoard from '@/views/Boards/UserBoard'
import LanguageBoard from '@/views/Boards/LanguageBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'board',
          component: UserBoard
        },
        {
          path: ':language',
          component: LanguageBoard
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Test.vue')
    },
    {
      path: '/test-complete',
      name: 'test-complete',
      component: TestComplete
    }
  ]
})
