<!--
 * @Description: 首页
 * @Author: xiawenlong
 * @Date: 2020-12-16 17:31:28
 * @LastEditors: xiawenlong
 * @LastEditTime: 2020-12-21 11:45:48
-->
<template>
  <div class="home">
    <home-banner></home-banner>
    <home-course></home-course>
    <home-teacher></home-teacher>
  </div>
</template>

<script>
import HomeBanner from './components/HomeBanner'
import HomeCourse from './components/HomeCourse'
import HomeTeacher from './components/HomeTeacher'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeCourse,
    HomeTeacher,
  },
}
</script>
