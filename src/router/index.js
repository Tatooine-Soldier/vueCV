import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Hobbies from '../views/Hobbies.vue'
import Astronomy from '../views/Astronomy.vue'
import Portfolio from '../views/Portfolio.vue'
import PageNotFound from '../views/PageNotFound.vue'

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
    { 
      path: '/astronomy', 
      component: Astronomy
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pagenotfound',
      component: PageNotFound
    }
  ]
})

export default router