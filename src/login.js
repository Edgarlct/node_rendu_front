import { createApp, onBeforeUnmount } from 'vue'
import App from './App.vue'
import login from './login.vue'

let loadedApp = createApp(App)

loadedApp.unmount('#app')

createApp(login).mount('#login')