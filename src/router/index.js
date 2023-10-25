import { createRouter, createWebHistory } from 'vue-router'



//หน้าแรก
import homepage from '../views/homepage.vue'
//หน้ารายละเอียดสินค้า
import product_detail from '../views/product_detail.vue'




const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  }, 
  {
    path: '/product_detail/:name',
    name: 'product_detail',
    component: product_detail
  } 
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router