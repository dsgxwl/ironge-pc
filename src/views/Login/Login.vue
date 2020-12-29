<!--
 * @Description: 登录页
 * @Author: xiawenlong
 * @Date: 2020-12-17 10:49:01
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-29 08:44:14
-->
<template>
  <div class="login">
    <h3>登 录</h3>
    <el-form
      ref="loginForm"
      :model="loginForm"
      status-icon
      :rules="loginRules"
      label-width="100px"
      class="login-form"
    >
      <template v-if="loginType === 1">
        <el-form-item prop="account">
          <el-input v-model="loginForm.account" placeholder="手机号/邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </template>
      <template v-if="loginType === 2">
        <el-form-item prop="phone">
          <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="verifyCode">
          <el-input v-model="loginForm.verifyCode" placeholder="请输入验证码"></el-input>
          <el-button :disabled="isSend" @click="sendVerifyCode">{{
            isSend ? time + 's后重新获取' : '获取验证码'
          }}</el-button>
        </el-form-item>
      </template>
      <p class="resetpassword"><router-link to="/resetPassword">忘记密码</router-link></p>
      <el-form-item>
        <el-button type="primary" @click="submitLoginForm">登录</el-button>
        <el-button type="primary" @click="changeLoginType">短信验证码登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')
import * as type from '@/store/action-types'
import { getVerifyCode } from '@/api/login'
import timeout from '@/mixins/timeout'
import to from 'await-to'
export default {
  name: 'Login',
  mixins: [timeout],
  data() {
    return {
      loginType: 1, // 1账号登录 2短信登录
      loginForm: {
        account: '',
        password: '',
        phone: '',
        verifyCode: '',
      },
      loginRules: {
        account: [{ required: true, message: '请输入手机号/邮箱', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        phone: [{ required: false, message: '请输入手机号', trigger: 'blur' }],
        verifyCode: [{ required: false, message: '请输入验证码', trigger: 'blur' }],
      },
      isSend: false,
    }
  },
  methods: {
    // 登录请求
    ...mapActions([type.LOGIN, type.CODE_LOGIN]),
    // 提交登录表单
    submitLoginForm() {
      this.$refs['loginForm'].validate(async valid => {
        if (!valid) return false
        const { account, password, phone, verifyCode } = this.loginForm
        if (this.loginType === 1) await this[type.LOGIN]({ account, password })
        if (this.loginType === 2) await this[type.CODE_LOGIN]({ phone, verifyCode })
        this.$message.success('登录成功')
        setTimeout(() => {
          const redirect = this.$route.query.redirect
          this.$router.push(redirect ? redirect : '/')
        }, 1000)
      })
    },
    // 发送登录验证码
    async sendVerifyCode() {
      if (this.isSend) return
      if (!this.loginForm.phone) return this.$message.warning('请输入手机号')
      const { phone } = this.loginForm
      const [, err] = await to(getVerifyCode({ phone }))
      if (err) return this.$message.warning(err.msg)
      this.$message.success('获取验证码成功，请在手机上查看')
      this.isSend = true
      await this.timeout()
      this.isSend = false
    },
    // 切换登录方式
    changeLoginType() {
      this.loginType = this.loginType === 1 ? 2 : 1
      this.setLoginRules()
    },
    // 重置表单验证
    setLoginRules() {
      this.$refs['loginForm'].resetFields()
      const { account, password, phone, verifyCode } = this.loginRules
      account[0].required = password[0].required = this.loginType === 1
      phone[0].required = verifyCode[0].required = this.loginType === 2
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  padding-top: 150px;
  height: 650px;
  box-sizing: border-box;
  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
  ::v-deep .el-form {
    width: 400px;
    margin: 0 auto;
    &-item__content {
      margin: 0 !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-input {
        flex: 1;
      }
      .el-button {
        &--default {
          width: 128px;
          margin-left: 10px;
        }
        &--primary {
          width: 48%;
        }
      }
    }
    .resetpassword {
      margin-top: -10px;
      text-align: right;
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
}
</style>
