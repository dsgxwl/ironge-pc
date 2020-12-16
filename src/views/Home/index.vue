<template>
  <div class="home">
    <home-banner></home-banner>
    <home-course></home-course>
  </div>
</template>

<script>
import HomeBanner from './components/HomeBanner'
import HomeCourse from './components/HomeCourse'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeCourse,
  },
}
</script>
