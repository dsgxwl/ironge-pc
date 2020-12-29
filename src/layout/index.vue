<template>
  <div class="wrapper">
    <m-header></m-header>
    <page-main></page-main>
    <m-footer></m-footer>
  </div>
</template>
<script>
import MHeader from './components/Header'
import MFooter from './components/Footer'
import PageMain from './components/PageMain'
export default {
  components: {
    MHeader,
    MFooter,
    PageMain,
  },
}
</script>
