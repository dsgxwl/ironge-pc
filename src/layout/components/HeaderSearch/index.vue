<template>
  <div class="header-search">
    <el-input placeholder="请输入关键词" v-model="searchValue">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: '',
    }
  },
}
</script>
