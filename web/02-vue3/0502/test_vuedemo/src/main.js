import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


// import App from './components/D6/定义和转换响应式变量/DemoTest14.vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.scss'

// 全局配置icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// 实例化vue对象
const app = createApp(App)


// 做一个for循环，遍历出来所有的图标，再用vue实例.component，都给绑定到vue实例
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 使用第三方插件库
app.use(createPinia())
app.use(router)

// 我们还可以对ElementPlus组件库，进行一个简单的设置,可以做全局的设置，
// 比如size（选项：large[大]、default[中等]、small[小]）
// local 语言
// zIndex:层级（提示框显示的层级，数字越大越靠前）
const elementConfig = { size: 'large', locale: zhCn, zIndex: 3000 }
app.use(ElementPlus, elementConfig)


app.mount('#app')
