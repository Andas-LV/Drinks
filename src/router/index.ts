import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Margarita from '@/pages/Margarita.vue'
import Mojito from '@/pages/Mojito.vue'
import A1 from '@/pages/A1.vue'
import Kir from '@/pages/Kir.vue'
import Fail from "@/pages/Fail.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/margarita',
      component: Margarita
    },
    {
      path: '/mojito',
      component: Mojito
    },
    {
      path: '/a1',
      component: A1
    },
    {
      path: '/kir',
      component: Kir
    },
    {
      path: '/:catchAll(.*)',
      component: Fail,
    },
  ]
})

export default router
