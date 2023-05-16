import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './components/TestDemo01-2.vue'
import router from './router'

import './assets/main.css'
// 实例化vue对象
const app = createApp(App)
// 使用第三方插件-库
app.use(createPinia())
app.use(router)
// 把创建的vue实例，和根组件，挂载到index.html
app.mount('#app')
