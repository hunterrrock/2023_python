import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './components/D6/B/FatherComp.vue'
// import App from './APP.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
