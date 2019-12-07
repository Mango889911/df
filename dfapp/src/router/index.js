import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD

=======
import about from '../views/about'
import service from '../views/services'
import page from '../views/page'
import login from '../views/login'
import regist from '../views/regist'
>>>>>>> update df
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
<<<<<<< HEAD
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

=======
  path: '/home',
  name: 'home',
  component: Home
  },
  {
    path: '/about',
    name: 'about',
    component:about
  },
  // {
  //   path: '/service',
  //   name: 'service',
  //   component:service
  // },
  {
    path: '/page/:fid',
    name: 'page',
    component:page
  },
  {
    path: '/login',
    name: 'login',
    component:login
  },
  {
    path: '/regist',
    name: 'regist',
    component:regist
  }
]
 
>>>>>>> update df
const router = new VueRouter({
  routes
})

export default router
