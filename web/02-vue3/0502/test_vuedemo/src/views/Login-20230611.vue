<template>
  <div>
    <!-- 表单验证：1.form标签中，需要添加：ref、model、rules
    2.form-item：form-item标签中，需要添加：prop属性
    3.定义rules规则
     -->
    <el-form :model="loginForm" :rules="rules" label-width="120px">
      <el-form-item label="" prop="username">
        <el-input v-model="username" placeholder="请输入用户名">
          <template #prepend>图1</template>
        </el-input>
      </el-form-item>

      <el-form-item label="" prop="password">
        <el-input
          ref="ruleFormRef"
          v-model="password"
          type="password"
          placeholder="请输入密码"
          show-password
        >
          <template #prepend>图2</template>
        </el-input>
      </el-form-item>

      <el-form-item label="">
        <el-input v-model="captcha" placeholder="请输入验证码">
          <template #prepend>图3</template>
        </el-input>
      </el-form-item>

      <el-form-item label="">
        <el-checkbox v-model="remember" label="记住密码" size="large" />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'

export default {
  setup() {
    // 1.定义登录时候提交用的form对象
    const loginForm = reactive({
      username: 'admin',
      password: 'admin',
      captcha: '9999',
      captchkey: ''
    })

    // 2.记住密码
    const remember = ref(false)

    // 3.验证码图片：url
    const imageBase = ref('')

    // 4.定义rules校验规则
    const rules =
      {
        username: [
          // required:是否必填  trigger：触发时机，blur：离开输入框的时候
          { required: true, message: '请输入用户名！', trigger: 'blur' },
          { min: 3, max: 15, message: '请输入3-15个字符', trigger: 'blur' }
        ],
        password: [
          // required:是否必填  trigger：触发时机，blur：离开输入框的时候
          { required: true, message: '请输入密码！', trigger: 'blur' },
          { min: 3, max: 10, message: '请输入3-10个字符', trigger: 'blur' }
        ]
      }

    //5.模板引用（表单引用） 
    const ruleFormRef = ref(null)

    // 6.登录
    const onSubmit = ()=>{
      console.log(loginForm.username)
    }
    
    return {
      rules,
      remember,
      imageBase,
      onSubmit,
      // loginForm
      ...toRefs(loginForm)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>