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
