import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
if (import.meta.env.MODE === 'development') console.log(123)
createApp(App).use(store).mount('#app')
