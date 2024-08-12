import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import TestView from '../views/TestView.vue'
import TestJoinView from '../views/TestJoinView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/:no',
    name: 'DataBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DataBinding
  },
  {
    path: '/test',
    name: 'TestView',
    component: TestView
  },
  {
    path: '/testJoin',
    name: 'TestJoinView',
    component: TestJoinView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
