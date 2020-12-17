<template>
  <div class="class-item">
    <div class="cover"></div>
    <div class="content">
      <div class="title">财务报表分析完整版</div>
      <div class="info">
        <span>12门课程</span>
        <span>班级124人</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style lang="scss" scoped>
.class-item {
  cursor: pointer;
  width: 224px;
  height: 204px;
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
  }
  .cover {
    height: 126px;
    background: #e2e2e2;
    img {
      @extend %width-height;
    }
  }
  .content {
    box-sizing: border-box;
    height: 78px;
    padding: 10px;
    .title {
      line-height: 15px;
      font-size: 14px;
      font-weight: 500;
      color: #3e3e3e;
      margin-bottom: 15px;
    }
    .info {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #909399;
    }
  }
}
</style>
