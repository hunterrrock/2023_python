<template>
  <!-- 这个class已经在assets的common.scss里已经定义好了 -->
  <div class="sq-layout-header-left">
    <span class="sq-header-switch" @click="swiechSide">
      <el-icon v-if="isCollapse"><Fold /></el-icon>
      <el-icon v-else><Expand /></el-icon>
    </span>
    这里今后放面包屑
  </div>
  <div class="sq-layout-header-right">
    <span class="sq-layout-header-action__item" @click="fullScreen">
      <span class="sq-icon">
        <el-tooltip class="box-item" effect="dark" content="全屏" placement="bottom">
          <el-icon><FullScreen /></el-icon>
        </el-tooltip>
      </span>
    </span>
    <span class="sq-menu">
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :size="30" :src="circleUrl" />
            {{ userName }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-icon>
                  <setting />
                </el-icon>
                账户设置</el-dropdown-item>
              <el-dropdown-item @click="loginOut">
                <el-icon>
                  <switch-button />
                </el-icon>    
                退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </span>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import screenfull from 'screenfull'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'


export default {
  
  setup() {
      // 0.创建路由器对象
    const router = useRouter()  

    const state = reactive({
      userName: localStorage.getItem('userName'),
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    })

    // 1.是否折叠
    const isCollapse = ref(false)
    // 2.折叠事件
    const swiechSide = () => {
      isCollapse.value = !isCollapse.value
    }
    // 3.全屏事件
    const fullScreen = () => {
      //screenfull.isEnabled  此方法返回布尔值，判断当前能不能进入全屏
      if (!screenfull.isEnabled) {
        ElMessage.error('您的浏览器不支持全屏')
      } else {
        screenfull.toggle()
      }
    }
    // 4.退出登录事件
    const loginOut=()=>{
        // 1.提示退出成功
        // 2.跳转到登录页面
        // 3.清空本地存储
        ElMessage.success('退出成功！')
        router.push('/login')
        localStorage.clear()

    } 



    return {
      loginOut,
      fullScreen,
      swiechSide,
      isCollapse,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>