<template>
  <div class="sort-tool-bar">
    <div class="sort">
      <div class="label">排序:</div>
      <ul>
        <li>按人数排序</li>
        <li>按开班时间</li>
        <li>按班级名称</li>
      </ul>
    </div>
    <div class="search">
      <el-input
        placeholder="输入您想搜索的班级名称"
        suffix-icon="el-icon-search"
        v-model="sortSearchValue"
      >
      </el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sortSearchValue: '',
    }
  },
}
</script>
<style lang="scss" scoped>
.sort-tool-bar {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px 0 20px;
  .sort {
    display: flex;
    line-height: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #3e3e3e;
    .label {
      margin-right: 20px;
    }
    ul {
      display: flex;
      li {
        cursor: pointer;
        text-align: center;
        width: 104px;
        height: 40px;
        border-radius: 4px;
        transition: all 0.3s;
        &:hover {
          color: #fff;
          background: $active-color;
        }
      }
    }
  }
  .search {
    .el-input {
      width: 240px;
      height: 40px;
      ::v-deep .el-input__inner {
        background: #fdfdfd;
        border: 1px solid #d5d5d5;
        border-radius: 4px;
      }
    }
  }
}
</style>
