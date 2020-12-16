<template>
  <div class="course">
    <div class="course-list">
      <course-item v-for="course in courseList" :key="course.id" :data="course"></course-item>
    </div>
  </div>
</template>
<script>
import CourseItem from './CourseItem'
export default {
  props: {
    courseList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CourseItem,
  },
}
</script>
<style lang="scss" scoped>
.course {
  padding: 10px 0 30px;
  &-list {
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
}
</style>
