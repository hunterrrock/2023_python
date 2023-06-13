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
                <!-- 这里是一个svg开头svg结尾，的一个svg源码的图标 -->
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="currentColor"
                    d="M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
                  ></path>
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
                        <template #prepend
                          ><el-icon><User /></el-icon
                        ></template>
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
                        <template #prepend><Edit style="width: 1em; height: 1em; margin-right: 8px" /></template>
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
// 导入想要的图标
// <el-icon><User /></el-icon>
// <el-icon><Platform /></el-icon>
// <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path></svg>
import { User,Edit } from '@element-plus/icons-vue'

export default {
  components: { User,Edit },
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