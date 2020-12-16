<template>
  <ul class="nav">
    <page-link class="nav-item" v-for="item in navList" :key="item.path" :to="item.path">
      <li>{{ item.name }}</li>
    </page-link>
  </ul>
</template>
<script>
import PageLink from './Link'
export default {
  components: {
    PageLink,
  },
  data() {
    return {
      navList: [
        {
          name: '首页',
          path: '/',
        },
        {
          name: '班级',
          path: '/class',
        },
        {
          name: '课程商城',
          path: '/shop',
        },
        {
          name: '师资力量',
          path: '/teacher',
        },
        {
          name: '学习中心',
          path: '/study',
        },
        {
          name: '学院管理',
          path: '/school',
        },
      ],
    }
  },
}
</script>
