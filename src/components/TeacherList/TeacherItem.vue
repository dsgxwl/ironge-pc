<template>
  <div class="teacher-item">
    <div class="cover"></div>
    <div class="content">
      <div class="info">
        <span class="name">菜小鸟</span>
        <span>21门课 | 1221关注</span>
      </div>
      <div class="intro">
        管理学博士、教授、博士生导师。2014年财政部中国会计名家培养工程的入选者、国务院特殊津贴专家...
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
.teacher-item {
  cursor: pointer;
  width: 224px;
  height: 226px;
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
    height: 100px;
    padding: 10px;
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: #666666;
      line-height: 14px;
      margin-bottom: 14px;
      .name {
        font-size: 14px;
        font-weight: 500;
        color: #3e3e3e;
      }
    }
    .intro {
      font-size: 12px;
      color: #909399;
      line-height: 18px;
    }
  }
}
</style>
