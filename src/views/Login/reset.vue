<!--
 * @Description: 忘记密码
 * @Author: xiawenlong
 * @Date: 2020-12-17 16:21:39
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-21 11:45:39
-->
<template>
  <div class="reset">
    <h3>忘记密码</h3>
    <el-form
      ref="resetForm"
      :model="resetForm"
      status-icon
      :rules="resetRules"
      label-width="100px"
      class="reset-form"
    >
      <el-form-item prop="phone">
        <el-input v-model="resetForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="verifyCode">
        <el-input v-model="resetForm.verifyCode" placeholder="请输入验证码"></el-input>
        <el-button :disabled="isSend" @click="sendVerifyCode">{{
          isSend ? time + 's后重新获取' : '获取验证码'
        }}</el-button>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="resetForm.password"
          type="password"
          placeholder="请输入密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input
          v-model="resetForm.confirmPassword"
          type="password"
          placeholder="请确认密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitResetForm">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { resetpassword, getVerifyCodeForResetPas } from '@/api/login'
import timeout from '@/mixins/timeout'
export default {
  name: 'Reset',
  mixins: [timeout],
  data() {
    return {
      resetForm: {
        phone: '',
        verifyCode: '',
        password: '',
        confirmPassword: '',
      },
      resetRules: {
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        verifyCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmPassword: [{ required: true, message: '请确认密码', trigger: 'blur' }],
      },
      isSend: false,
    }
  },
  methods: {
    // 提交登录表单
    submitResetForm() {
      this.$refs['resetForm'].validate(async valid => {
        if (!valid) return false
        const { phone, verifyCode, password, confirmPassword } = this.resetForm
        try {
          await resetpassword({ phone, verifyCode, password, confirmPassword })
          this.$message.success('找回密码成功，请登录')
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
        } catch (error) {
          this.$message.warning(error.msg)
        }
      })
    },
    // 发送登录验证码
    async sendVerifyCode() {
      if (this.isSend) return
      if (!this.resetForm.phone) {
        return this.$message.warning('请输入手机号')
      }
      const { phone } = this.resetForm
      try {
        await getVerifyCodeForResetPas({ phone })
        this.$message.success('获取验证码成功，请在手机上查看')
        this.isSend = true
        await this.timeout()
        this.isSend = false
      } catch (error) {
        this.$message.warning(error.msg)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.reset {
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
  }
}
</style>
