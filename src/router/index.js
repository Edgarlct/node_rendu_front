import { createRouter, createWebHistory } from 'vue-router'
import message from '../view/message.vue'
import login from '../view/login.vue'
import register from '../view/register.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'message',
//     component: HelloWorld
//   },
// ]

const router = createRouter({
  history: createWebHistory('/'),
  routes : [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})

export default router
