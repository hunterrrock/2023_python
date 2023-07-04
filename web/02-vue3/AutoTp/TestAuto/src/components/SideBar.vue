<template>
  <div>
    <span class="sq-header-switch" @click="swiechSide">
      <el-icon v-if="isCollapse"><Fold /></el-icon>
      <el-icon v-else><Expand /></el-icon>
    </span>
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :router='true'

    >
      <el-sub-menu index="1">
        <template #title>
          <!-- title插槽，一级菜单的名称 -->
          <i class="el-icon-location"></i>
          <span>接口自动化</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Cases">测试用例</el-menu-item>
          <el-menu-item index="/Requests">web接口</el-menu-item>
          <el-menu-item index="/Plans">测试计划</el-menu-item>
          <el-menu-item index="/Reports">测试报告</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>个人中心</template>
      </el-menu-item>

      
      <el-menu-item index="" @click="switchSide">
        <el-icon v-if="isCollapse"><Fold /></el-icon>
        <el-icon v-else><Expand /></el-icon>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
import { reactive, toRefs,ref } from 'vue'

export default {
  setup() {
    const state = reactive({
      count:0
    })

    const isCollapse = ref(true)
    // 2.折叠事件
    const switchSide = () => {
      isCollapse.value = !isCollapse.value
    }

    return {
      isCollapse,
      switchSide,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>