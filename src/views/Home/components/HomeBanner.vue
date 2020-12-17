<template>
  <div class="home-banner">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in carouselList" :key="item.id">
        <img :src="item.img" :alt="item.title" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'HomeBanner',
  data() {
    return {
      carouselList: [
        {
          id: 1,
          img:
            'https://edu-image.nosdn.127.net/d6df99ea71dc44e69b469eef0943704b.png?imageView&quality=100',
          title: '广告1',
        },
        {
          id: 2,
          img:
            'https://edu-image.nosdn.127.net/b5380e2eaf9345db9dceec29dce2b7b6.jpg?imageView&quality=100',
          title: '广告2',
        },
        {
          id: 3,
          img:
            'https://edu-image.nosdn.127.net/883dc26339d04fe68bd4c80241773f03.png?imageView&quality=100',
          title: '广告3',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.home-banner {
  @extend %container;
  padding: 15px 0 10px;
  img {
    @extend %width-height;
  }
}
</style>
