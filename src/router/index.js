import { createRouter, createWebHistory } from 'vue-router'

import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'
import Appopening from '@/views/Home.vue'
import Resume from '@/views/Resume.vue'
import Certificate from '@/views/Certificate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Appopening
  },
  {
    path: '/projects',
    name: 'project',
    component: Projects
  },
  {
    path: '/skills',
    name: 'skills',
    component:  Skills
  },
  {
    path: '/contact',
    name: 'contact',
    component:  Contact
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/certificates',
    name: 'certificate',
    component: Certificate
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
