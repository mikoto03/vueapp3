import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import customers from '../views/customers.vue'
import About from '../views/About.vue'
import products from '../views/products.vue'
import reports from '../views/reports.vue'

Vue.use(VueRouter)
  const routes = [
    {
      path: '/customers',
      name: 'customers',
      component: customers
    },{
      path: '/products',
      name: 'products',
      component: products
    },{
      path: '/reports',
      name: 'reports',
      component: reports
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router