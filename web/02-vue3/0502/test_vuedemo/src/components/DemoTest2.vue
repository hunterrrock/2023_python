<template>
    <div>
        <h1>插值表达式</h1>
        {{count}}
        <p>{{1+2}}</p>
        <p>{{1===1}}</p>
        <p>{{count > 0 ?'是':'否'}}</p>   
        <!-- 三目运算:count是否大于0 如果true输出是,false输出否 -->

        <!-- 布尔值和取反 -->
        <p>{{isShow}}</p>   
        <p>{{!isShow}}</p>   
        <!-- 数组和数组的长度和数组里的元素 -->
        <p>{{arr}}</p>   
        <p>{{arr.length}}</p>   
        <p>{{arr[2]}}</p>  
         <!--对象 和 对象的某个值  -->
        <p>{{obj1}}</p>   
        <p>{{obj1['age']}}</p>   
        <p>{{obj1.name}}</p>   
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            isShow: true,
            arr:[10,20,30],
            obj1:{age:30,name:'张三'}
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>