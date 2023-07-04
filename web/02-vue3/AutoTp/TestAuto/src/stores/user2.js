import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

// Setup方式定义Store
// defineStore()的第一个参数必须唯一，一个id，自己定义，不重复即可；第二个参数是一个函数
export const useUserStore =defineStore('user2',()=>{
    // 1.定义响应式变量
    const count =ref(0)
    const name = ref('张三')
    // 2.定义计算属性
    const doubleCount =computed(()=>count.value*2)
    // 3.定义方法
    const addOne = ()=>{count.value+=1}
    // 4.返回
    return {
        count,
        name,
        doubleCount,
        addOne
    }
})