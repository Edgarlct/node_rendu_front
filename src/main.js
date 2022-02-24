import { createApp } from 'vue'
import App from './App.vue'
import login from './login.vue'


let loadedApp = createApp(login)

loadedApp.unmount('#login')


createApp(App).mount('#app')





