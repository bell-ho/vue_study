import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    /* 처음부터 load시킴 */
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    // 방문하는 순간에 load시킴
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "Basic" */ '../views/Basic.vue')
  },
  {
    // 방문하는 순간에 load시킴
    path: '/basic2',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "Basic" */ '../views/DataBinding.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
