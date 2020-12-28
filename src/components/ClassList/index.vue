<!--
 * @Description: 班级列表组件
 * @Author: xiawenlong
 * @Date: 2020-12-17 10:08:36
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-21 11:46:50
-->
<template>
  <div class="class-list">
    <class-item v-for="item in classList" :key="item.id" :data="item"></class-item>
  </div>
</template>
<script>
import ClassItem from './ClassItem'
export default {
  components: {
    ClassItem,
  },
  props: {
    classList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="scss" scoped>
.class-list {
  padding: 10px 0 30px;
  @extend %container;
  display: flex;
  flex-wrap: wrap;
  .class-item {
    margin: 0 20px 20px 0;
    &:nth-of-type(5n) {
      margin: 0;
    }
  }
}
</style>
