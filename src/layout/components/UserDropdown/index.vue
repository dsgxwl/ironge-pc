<template>
  <div class="user-drop-down">
    <div class="info" v-if="token">{{ userInfo.nickName }}</div>
    <template v-else>
      <router-link to="/login">登录</router-link> |
      <router-link to="/register">注册</router-link>
    </template>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')
export default {
  computed: {
    ...mapState(['userInfo', 'token']),
  },
}
</script>
<style lang="scss" scoped>
.user-drop-down {
  font-size: 18px;
  color: #3e3e3e;
}
</style>
