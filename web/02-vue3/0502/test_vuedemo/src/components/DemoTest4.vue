<template>
    <div>
        <h1>v-bind指令</h1>
        <!-- 规则:用于绑定元素的属性,缩写是:冒号(:) -->
        <!-- style写的样式,叫做行内样式,有时候也叫内联样式 -->

        <h3>1.传统样式的写法</h3>
            <div class='color-red f24'>A.字体红色,大小24PX</div>
            <div style='color:blue;font-size:28px'>B.字体蓝色,大小28PX</div>

            <!-- 2.采用样式绑定变量的方式 来绑定class属性-->
            <div v-bind:class='classStr'>A.字体红色,大小24PX -->字符串</div>
            <div v-bind:class='classArr'>A.字体红色,大小24PX -->数组</div>
            <div v-bind:class='classObj'>A.字体红色,大小24PX -->对象</div>
            <!-- 或者直接缩写成冒号,如下 -->
            <!-- <div :class='color-red f24'>A.字体红色,大小24PX</div> -->

            <!-- 3.采用样式绑定变量的方式 来绑定style属性-->
            <div :style='styleStr'>B.字体蓝色,大小28PX -->字符串</div>
            <div :style='styleArr'>B.字体蓝色,大小28PX -->数组</div>
            <div :style='styleObj'>B.字体蓝色,大小28PX -->对象</div>
   
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            classStr:'color-red f24',
            classArr:['color-red','f24'],
            // 相当于一个开关,true为生效,false为不生效,就不显示样式
            classObj:{'color-red':true,f24:true},

            styleStr:'color:blue;font-size:28px',
            styleArr:['color:blue','font-size:28px'],
            styleObj:{color:'blue','font-size':'28px'}
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
    .color-red{
        color: red;
    }
    .f24{
        font-size: 24px;
    }

</style>