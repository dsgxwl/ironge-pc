<template>
  <div class="teacher-list">
    <teacher-item v-for="teacher in teacherList" :key="teacher.id" :data="teacher"></teacher-item>
  </div>
</template>
<script>
import TeacherItem from './TeacherItem'
export default {
  props: {
    teacherList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TeacherItem,
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
