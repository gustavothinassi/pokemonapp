import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Favorito = () => import('../views/Favorito/index.vue')


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorito',
    name: 'Favorito',
    component: Favorito
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
 
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
