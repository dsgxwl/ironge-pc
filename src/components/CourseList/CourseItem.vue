<template>
  <div class="course-item">
    <div class="cover"></div>
    <div class="content">
      <div class="title">财务报表分析完整版</div>
      <div class="info">
        <span>135个视频</span> | <span>总长453分钟</span> |
        <span>融E学</span>
      </div>
      <div class="price">
        <div class="money">199元</div>
        <div class="sale">1362人购买</div>
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
.course-item {
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
  }
  .content {
    box-sizing: border-box;
    height: 226px;
    padding: 10px;
    .title {
      font-size: 14px;
      font-weight: 500;
      color: #3e3e3e;
      line-height: 15px;
      margin-bottom: 8px;
    }
    .info {
      font-size: 12px;
      color: #666666;
      line-height: 15px;
      margin-bottom: 18px;
    }
    .price {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      line-height: 24px;
      .money {
        font-size: 24px;
        color: #fc8622;
      }
      .sale {
        font-size: 12px;
        color: #909399;
      }
    }
  }
}
</style>
