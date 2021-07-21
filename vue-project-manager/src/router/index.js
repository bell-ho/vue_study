import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import Example from '../views/Example.vue'
import Rendering from '../views/Rendering.vue'

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
  {path: '/databindinghtml', name: 'DataBindingHtml', component: DataBindingHtml},
  {path: '/example', name: 'Example', component: Example},
  {path: '/rendering', name: 'Rendering', component: Rendering}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
