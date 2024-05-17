import { createRouter, createWebHistory } from 'vue-router'
import DataBinding from '../views/DataBinding.vue'

const test = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/:userNo',
    name: 'DataBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DataBinding,
    meta: { requiresAuth: true }
  }
]

var isCheck = true; // eslint-disable-line no-unused-vars
var test1; // eslint-disable-line no-unused-vars
if(isCheck)
{
  test1 = test
}

const routes = test1

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
