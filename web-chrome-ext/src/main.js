import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PopupApp from './extension/linkedin/popup/PopupApp.vue';


import App from './App.vue'
import router from './router'

if (location.pathname.includes('popup')) {
    createApp(PopupApp).use(store).mount('#app');
  }

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
