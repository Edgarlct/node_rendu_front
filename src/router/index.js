import { createRouter, createWebHistory } from 'vue-router'
import message from '../view/message.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'message',
//     component: HelloWorld
//   },
// ]

const router = createRouter({
  history: createWebHistory('/'),
  routes : [{
    path: '/',
    name: 'message',
    component: message
  }]
})

export default router
