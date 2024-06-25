import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetailView.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/UploadFile',
    name: 'UploadFile',
    component: () => import('../components/UploadFile.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    children:[
      {
        path: 'productDetail/:name',
        name: 'ProductDetail',
        component: ProductDetail,
      }
    ],
    
  }, {
    path: '/UpdateContent',
    name: 'UpdateContent',
    component: () => import('../views/UpdateContentView.vue')
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
