import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from "@/views/articles/ProductsView";
import ProductsShowView from "@/views/articles/ProductsShowView";
import ProductsEditView from "@/views/articles/ProductsEditView";
import ProductsNewView from "@/views/articles/ProductsNewView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/products/:id',
    name: 'products_show',
    component: ProductsShowView,
  },
  {
    path: '/products/:id/edit',
    name: 'products_edit',
    component: ProductsEditView,
  },
  {
    path: '/products/new',
    name: 'products_new',
    component: ProductsNewView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
