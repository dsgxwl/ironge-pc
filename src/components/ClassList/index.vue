<template>
  <div class="class-list">
    <class-item v-for="item in classList" :key="item.id" :data="item"></class-item>
  </div>
</template>
<script>
import ClassItem from './ClassItem'
export default {
  props: {
    classList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ClassItem,
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
