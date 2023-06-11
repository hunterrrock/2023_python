<template>
  <div class="charm-app">
    <div class="charm-root">
      <div class="charm-body">
        <!--1.登录页左侧-->
        <div class="charm-body-info">
          <div class="info-logo">
            <a href="#">
              <img alt="" src="..\assets\logo_AutoTp.png" />
            </a>
          </div>
          <div class="info-image">
            <img src="..\assets\ad-01.png" />
          </div>
          <div class="info-message">
            <p class="message-item">
              <thy-icon class="icon thy-icon-phone thy-icon">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="1em"
                  width="1em"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <g id="punormal/phone" stroke-width="1" fill-rule="evenodd">
                    <path
                      d="M2.948.755l-.428.274C.515 2.268 1.313 6.648 3.997 10.577c2.606 3.815 6.326 6.24 8.322 5.21l.648-.379c.807-.482 1.233-.88 1.477-1.466.36-.865.093-1.788-.712-2.73-1.228-1.436-2.316-1.865-3.55-1.304l-.112.053a5.415 5.415 0 0 0-.375.208l-.231.143-.068-.05a3.333 3.333 0 0 1-.28-.25c-.404-.395-.909-1.024-1.445-1.809-.527-.771-.923-1.459-1.142-1.966l-.051-.125-.054-.147-.027-.084.185-.114c1.496-.94 1.688-2.128.665-4.048C6.775.832 6.18.275 5.447.089L5.275.053c-.75-.128-1.367.082-2.327.702zm2.127.48c.395.069.764.392 1.113 1.048.716 1.344.675 1.85-.136 2.397l-.303.192-.233.143c-.772.475-.261 1.74 1.019 3.65l.145.215c1.38 2.018 2.437 3.056 3.226 2.57l.413-.256.196-.112c.058-.031.112-.058.163-.081.665-.303 1.225-.081 2.143.992.538.63.676 1.104.516 1.487-.112.268-.33.488-.814.794l-.702.417c-1.199.74-4.494-1.365-6.833-4.79-2.34-3.426-3.014-7.124-1.83-7.855l.442-.284c.73-.471 1.086-.592 1.475-.526z"
                      id="pu路径"
                    ></path>
                  </g>
                </svg>
              </thy-icon>
              <span>400-000-0000请替换为elementplus-icon图标</span>
            </p>
            <p class="message-item">
              <thy-icon class="icon thy-icon-email thy-icon">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="1em"
                  width="1em"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <g id="ienormal/email" stroke-width="1" fill-rule="evenodd">
                    <path
                      d="M14 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12zM1.199 6.352L1.2 12a.8.8 0 0 0 .7.794l.1.006h12a.8.8 0 0 0 .794-.7l.006-.1V6.38L7.999 9.014l-6.8-2.662zM14 3.2H2a.8.8 0 0 0-.794.7L1.2 4l-.001 1.11.016-.04L8 7.726l6.8-2.633V4a.8.8 0 0 0-.7-.794L14 3.2z"
                      id="ie形状结合"
                    ></path>
                  </g>
                </svg>
              </thy-icon>
              <span>autotp@songqin.com</span>
            </p>
          </div>
        </div>

        <!--2.登录页右侧-->
        <div class="charm-body-content">
          <div>
            <div class="charm-body-content-main">
              <div class="charm-form-container">
                <!-- 2.1 登录标题 -->
                <div class="form-container-header">
                  <div class="form-container-header-title">
                    <span>登录</span>
                  </div>
                  <div class="form-container-header-description">
                    通过帐号密码登录，切换为 <a href="javascript:;">手机验证码登录</a>
                  </div>
                </div>
                <!-- 2.2 登录表单 -->
                <div class="form-container-body">
                  <el-form :model="loginForm" :rules="rules" label-width="0px">
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
              </div>
            </div>
          </div>
        </div>
        <!-- 3.copy-->
        <div class="charm-body-footer">&copy; AutoTp</div>
      </div>
    </div>
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
    const rules = {
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
    const onSubmit = () => {
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