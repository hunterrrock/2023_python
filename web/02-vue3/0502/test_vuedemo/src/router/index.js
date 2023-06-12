// 1.从vue-router中，导入createRouter和createWebHistory方法
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// 2.导入HomeView组件
import HomeView from '../views/HomeView.vue'

// 3.使用createRouter方法，创建一个路由对象
const router = createRouter(
  // 接收一个对象作为参数,对象中有两个属性: 
  {
    // 属性1.表示路由模式,调用了createwebhistory方法来
    // history模式,参数:导入了一个环境变量中的基础路径BASE_URL
    history: createWebHistory(import.meta.env.BASE_URL),
    // hash模式,项目中hash模式和history模式都可以用
    // history: createWebHashHistory(),

    // routes可以存放多条路由
    routes: [
      // 每一个路由，都是一个对象。每一个路由都包含三个属性：path,name（可以省略）,component（对应的组件，必须的，需要导入；除非这里是一个跳转路由）;也可以添加自定义属性
      //  redirect：跳转的
      {
        path: '/',    //根路由，路由路径
        name: 'home',    //路由的名称
        component: HomeView,   //路由对应的组件
        // redirect: '/about'   //重定向
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting    路由级代码拆分
        // this generates a separate chunk (About.[hash].js) for this route   这将为此路由生成一个单独的模块（about.【一串哈希值hash】.js)
        // which is lazy-loaded when the route is visited.    当访问路由时，是懒加载的，只有当有人访问的时候才会加载，不会事先加载
        // 总结：路由懒加载方式，项目打包时，一个组件打包成一个js文件；多少个组件就打包成多少个js文件，访问时才加载组件。
        component: () => import('../views/AboutView.vue')
      }
    ]
  })

// 4.导出路由器，后面的组件里要用到 所以要导出
export default router
