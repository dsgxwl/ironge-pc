<!--
 * @Description: 课程列表组件
 * @Author: xiawenlong
 * @Date: 2020-12-16 23:01:35
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-21 11:46:58
-->
<template>
  <div class="course-list">
    <course-item v-for="course in courseList" :key="course.id" :data="course"></course-item>
  </div>
</template>
<script>
import CourseItem from './CourseItem'
export default {
  components: {
    CourseItem,
  },
  props: {
    courseList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="scss" scoped>
.course-list {
  padding: 10px 0 30px;
  @extend %container;
  display: flex;
  flex-wrap: wrap;
  .course-item {
    margin: 0 20px 20px 0;
    &:nth-of-type(5n) {
      margin: 0;
    }
  }
}
</style>
