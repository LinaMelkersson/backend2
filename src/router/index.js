import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UnikProduct from '../views/UnikProduct.vue'
import NewProduct from '../views/NewProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/UnikProduct/:id',
    name: 'UnikProduct',
    component: UnikProduct,
    props: true
  },
  {
    path: '/NewProduct',
    name: 'NewProduct',
    component: NewProduct,
    props: true
  },
  // {
  //   path: '/NewProduct',
  //   name: 'NewProduct',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
