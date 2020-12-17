<template>
  <div class="footer">
    <div class="footer_in">
      <div class="tel">
        <div class="icon">
          <img src="../../../assets/common/telephone.png" alt="" />
        </div>
        <div class="text">
          <p>免费咨询热线</p>
          <p>{{ tel }}</p>
        </div>
      </div>
      <ul class="email">
        <li>
          <p>友情链接</p>
          <p>武汉中潮互联网教育有限公司</p>
        </li>
        <li>
          <p>Email</p>
          <p>zhongchao@chn-trend.com</p>
        </li>
      </ul>
      <ul class="qrcode">
        <li>
          <img src="../../../assets/common/fuwuhao.png" alt="" />
          <p>中潮教育服务号</p>
        </li>
        <li>
          <img src="../../../assets/common/gongzhonghao.png" alt="" />
          <p>言之有理公众号</p>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <p>{{ copyright }}</p>
      <p>Powered by 中潮互联网教育</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: '177-8642-4575',
      copyright:
        'Copyright ©2015-2019 版权所有武汉市中潮互联网教育有限公司 鄂ICP备15017598号-1（中潮教育融E学）',
    }
  },
}
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 340px;
  background-color: #333333;
  color: #666;
  box-sizing: border-box;
  padding-top: 50px;
  &_in {
    @extend %container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    .tel {
      box-sizing: border-box;
      width: 360px;
      height: 160px;
      display: flex;
      align-items: center;
      border-right: 1px solid #454545;
      .icon {
        margin-right: 20px;
      }
      .text {
        color: #fff;
        p {
          &:last-of-type {
            padding-top: 10px;
            font-size: 22px;
          }
        }
      }
    }
    .email {
      box-sizing: border-box;
      width: 457px;
      height: 160px;
      border-right: 1px solid #454545;
      padding-top: 20px;
      li {
        margin-bottom: 18px;
        p {
          &:first-of-type {
            font-size: 18px;
            color: #a9a9a9;
            margin-bottom: 8px;
          }
          &:last-of-type {
            font-size: 15px;
            color: #666;
          }
        }
      }
    }
    .qrcode {
      width: 300px;
      display: flex;
      padding-top: 10px;
      li {
        text-align: center;
        margin-right: 40px;
        color: #fff;
        img {
          margin-bottom: 8px;
        }
      }
    }
  }
  .copyright {
    text-align: center;
    p {
      margin-bottom: 6px;
    }
  }
}
</style>
