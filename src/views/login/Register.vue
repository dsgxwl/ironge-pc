<!--
 * @Description: 注册页
 * @Author: xiawenlong
 * @Date: 2020-12-17 16:21:53
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-29 08:34:55
-->
<template>
  <div class="register">
    <h3>注 册</h3>
    <el-form
      ref="registerForm"
      :model="registerForm"
      status-icon
      :rules="registerRules"
      label-width="100px"
      class="register-form"
    >
      <el-form-item prop="phone">
        <el-input v-model="registerForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="phoneVerifyCode">
        <el-input v-model="registerForm.phoneVerifyCode" placeholder="请输入验证码"></el-input>
        <el-button :disabled="isSend" @click="sendVerifyCode">{{
          isSend ? time + 's后重新获取' : '获取验证码'
        }}</el-button>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="registerForm.password"
          type="password"
          placeholder="请输入密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input
          v-model="registerForm.confirmPassword"
          type="password"
          placeholder="请确认密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <p class="toLogin"><router-link to="/login">使用已有账号登录</router-link></p>
      <el-form-item>
        <el-button type="primary" @click="submitRegisterForm">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { register, getVerifyCode } from '@/api/login'
import timeout from '@/mixins/timeout'
import to from 'await-to'
export default {
  name: 'Register',
  mixins: [timeout],
  data() {
    return {
      registerForm: {
        phone: '',
        phoneVerifyCode: '',
        password: '',
        confirmPassword: '',
      },
      registerRules: {
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        phoneVerifyCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmPassword: [{ required: true, message: '请确认密码', trigger: 'blur' }],
      },
      isSend: false,
    }
  },
  methods: {
    // 提交登录表单
    submitRegisterForm() {
      this.$refs['registerForm'].validate(async valid => {
        if (!valid) return false
        const { phone, phoneVerifyCode, password, confirmPassword } = this.registerForm
        const [, err] = await to(register({ phone, phoneVerifyCode, password, confirmPassword }))
        if (err) return this.$message.warning(err.msg)
        this.$message.success('注册成功请登录')
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
      })
    },
    // 发送登录验证码
    async sendVerifyCode() {
      if (this.isSend) return
      if (!this.registerForm.phone) {
        return this.$message.warning('请输入手机号')
      }
      const { phone } = this.registerForm
      const [, err] = await to(getVerifyCode({ phone }))
      if (err) return this.$message.warning(err.msg)
      this.$message.success('获取验证码成功，请在手机上查看')
      this.isSend = true
      await this.timeout()
      this.isSend = false
    },
  },
}
</script>
<style lang="scss" scoped>
.register {
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
          width: 100%;
        }
      }
    }
    .toLogin {
      margin-top: -10px;
      text-align: right;
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
}
</style>
