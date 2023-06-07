import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from "@/views/Auth/SignUpView.vue";
import AddProductView from "@/views/Auth/AddProductView.vue";
import AddProductPhotoView from "@/views/Auth/AddProductPhotoView.vue";
import DashboardView from "@/views/Dashboard/DashboardView.vue";
import ProductIndexView from "@/views/Dashboard/Products/ProductindexView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProductView
    },
    {
      path: '/add-product-photo',
      name: 'add-product-photo',
      component: AddProductPhotoView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
      // children: [
      //   {
      //     path: '/product-index',
      //     name: 'product-index',
      //     component: ProductIndexView
      //   }
      // ]
    },
    {
      path: '/product-index',
      name: 'product-index',
      component: ProductIndexView
    }
  ]
})

export default router
