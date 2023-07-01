<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><SideBar></SideBar></el-aside>
      <el-container>
        <el-header><NavBar></NavBar></el-header>
        <el-main><MutiTabs></MutiTabs></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import NavBar from './NavBar.vue'
import SideBar from './SideBar.vue'
import MutiTabs from './MutiTabs.vue'

export default {
  components: { NavBar, SideBar, MutiTabs },
  setup() {
    const state = reactive({
      count: 0
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.common-layout .el-aside {
  background-color: var(--el-color-primary-light-8);
  color: var(--el-text-color-primary);
  text-align: center;
}

.common-layout .el-header {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  text-align: center;
}
// .common-layout .el-header,
// .common-layout .el-main,
// .common-layout .el-aside {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

.common-layout .el-main {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-primary);
  text-align: center;
  height: 150px;
}
</style>