<template>
    <div>
        <h1>循环遍历指令v-for</h1>
        <!-- 循环遍历指令：v-for：用于把数组、对象遍历出来 -->
        <!-- 要点
            1.遍历数组的语法格式：v-for='(item,index) in arrName' :key='index' 
                其中，item是数组项，index是下标索引，arrName是待遍历的数组
            2.遍历对象的语法格式: v-for='(value,key,index) in obj' :key='index'
                其中，value是对象的属性值，key是属性名，index是索引，obj是具体的对象
            -->
        <h2>遍历数组</h2>
        <ul>
            <li v-for="(item,index) in list" :key='index'>{{item}}</li>
        
        <h2>遍历对象</h2>
            <li v-for ='(v,k,i) in obj' :key='i'>{{i}}-{{k}}-{{v}}</li>
        
        <h2>遍历对象数组</h2>
            <li v-for = '(item,i) in objlist' :key='i'>{{item.id}}-{{item.name}}-{{item.age}}</li>

        </ul>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            list:['中国','泰国','韩国','美国','英国'],
            obj:{name:'张三',age:28},
            objlist:[
                {id:1,name:'张三',age:22},
                {id:2,name:'张四',age:23},
                {id:3,name:'张五',age:24},
                {id:4,name:'张六',age:25},
                {id:5,name:'张七',age:26},
                {id:6,name:'张八',age:27},         
            ]
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>