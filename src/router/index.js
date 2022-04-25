import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Questoes from '../views/Questoes.vue'
import Vagas from '../views/Vagas.vue'
import Cadastro from '../views/Cadastro.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import Ebook from '../views/Ebook.vue'
import axios from 'axios'

function AdminAuth(to, from, next){
  if(localStorage.getItem('token') != undefined){

    var req = {
      headers:{
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }

    axios.post("http://localhost:8686/validate", {}, req).then(res => {
      console.log(res);
      next();
    }).catch(err => {
      console.log(err.response);
      next("/login");
    });
  }else{
    next("/login");
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questoes',
    name: 'Questoes',
    component: Questoes
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
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ebook',
    name: 'Ebook',
    component: Ebook
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Users,
    beforeEnter: AdminAuth  
  },
 
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
