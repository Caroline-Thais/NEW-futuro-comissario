import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Vagas from '../views/Vagas.vue'
import Cadastro from '../views/Cadastro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/vagas',
    name: 'Vagas',
    component: Vagas
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
