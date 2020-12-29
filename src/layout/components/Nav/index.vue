<!--
 * @Description: 
 * @Author: xiawenlong
 * @Date: 2020-12-16 21:02:54
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-29 08:31:38
-->
<template>
  <ul class="nav">
    <page-link
      v-for="item in navList"
      :key="item.path"
      :class="['nav-item', { active: item.path === acctiveRoutePath }]"
      :to="item.path"
    >
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
          path: 'http://www.baidu.com',
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
  computed: {
    acctiveRoutePath() {
      const current = this.$route.path.split('/')[1]
      let path = '/'
      current !== 'index' && (path += current)
      return path
    },
  },
}
</script>
