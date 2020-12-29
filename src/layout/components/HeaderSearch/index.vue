<template>
  <div class="header-search">
    <el-input v-model="searchValue" placeholder="请输入关键词">
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
