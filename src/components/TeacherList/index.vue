<!--
 * @Description: 教师列表组件
 * @Author: xiawenlong
 * @Date: 2020-12-17 08:30:54
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-21 11:47:24
-->
<template>
  <div class="teacher-list">
    <teacher-item v-for="teacher in teacherList" :key="teacher.id" :data="teacher"></teacher-item>
  </div>
</template>
<script>
import TeacherItem from './TeacherItem'
export default {
  components: {
    TeacherItem,
  },
  props: {
    teacherList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="scss" scoped>
.teacher-list {
  @extend %container;
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
  .teacher-item {
    margin: 0 20px 20px 0;
    &:nth-of-type(5n) {
      margin: 0;
    }
  }
}
</style>
