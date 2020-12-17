<template>
  <div class="class">
    <sort-tool-bar></sort-tool-bar>
    <class-list :classList="classList"></class-list>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="100"
      layout="prev, pager, next, total"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>
<script>
import SortToolBar from '@/components/SortToolBar'
import ClassList from '@/components/ClassList'
export default {
  components: {
    SortToolBar,
    ClassList,
  },
  data() {
    return {
      classList: [{}, {}, {}, {}, {}, {}],
    }
  },
}
</script>
<style lang="scss" scoped>
.class {
  @extend %container;
  padding: 15px 0;
  .sort-tool-bar {
    margin-bottom: 10px;
  }
  ::v-deep .el-pagination {
    text-align: center;
    margin-bottom: 60px;
    button,
    .number {
      width: 30px;
      height: 30px;
      border: 1px solid #d5d5d5;
      border-radius: 3px;
      font-size: 14px;
      color: #666666;
      background-color: #f8f8f8;
      text-align: center;
      font-weight: 400;
      &.active {
        background-color: #00a5ff;
        border: 1px solid #00a5ff;
      }
    }
    .el-icon.more {
      background-color: #f8f8f8;
    }
  }
}
</style>
