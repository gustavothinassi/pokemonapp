import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import 'animate.css';

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

