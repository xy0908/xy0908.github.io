import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'virtual:uno.css'
import "./assets/css/main.css"

const pinia = createPinia()
const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .mount('#app')
