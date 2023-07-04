import {defineStore} from 'pinia'

// Option方式定义Store
// defineStore()的第一个参数必须唯一，一个id，自己定义，不重复即可；第二个参数是对象,里面有三个固定属性
export const useUserStore = defineStore('user1',{
    // state属性，相当于我们的响应式对象;必须为一个函数，且返回一个对象
    // getters属性，相当于计算属性,只读的
    // actions属性，相当于方法

    // state简写：
    state:()=>({count:0,name:'张三'}),
    getters:{
       doubleCount:(state)=>state.count*2     
    },
    actions:{
        addOne(){
            // this代表state的
            this.count +=1
        }
    }



})