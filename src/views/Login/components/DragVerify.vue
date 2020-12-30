<!--
 * @Description: 滑块验证
 * @Author: xiawenlong
 * @Date: 2020-12-30 14:57:40
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-30 14:59:46
-->
<template>
  <drag-verify
    text="滑动验证"
    :height="40"
    :width="400"
    text-size="14px"
    success-text="验证成功"
    handler-icon="el-icon-d-arrow-right"
    success-icon="el-icon-check"
    progress-bar-bg="#e6a23c"
    completed-bg="#67c23a"
    @passcallback="passcallback"
  ></drag-verify>
</template>
<script>
import dragVerify from 'vue-drag-verify'
export default {
  name: 'DragVerify',
  components: { dragVerify },
  methods: {
    passcallback() {
      this.$emit('passcallback')
    },
  },
}
</script>
