import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Hobbies from '../views/Hobbies.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
        path: '/', 
        component: Home 
    }, 
    { 
        path: '/home', 
        component: Home 
    }, 
    { 
        path: '/CV', 
        component: CV
    }, 
    { 
        path: '/hobbies', 
        component: Hobbies
    }, 
  ]
})

export default router