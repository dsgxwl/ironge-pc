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
// import { getLocal } from '@/utils/local'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapMutations } = createNamespacedHelpers('user')
// import * as type from '@/store/action-types'
export default {
  components: {
    MHeader,
    MFooter,
    PageMain,
  },
  // created() {
  //   if (!this.userInfo) {
  //     const userInfo = getLocal('userInfo', true)
  //     userInfo && this[type.SET_USER_INFO](userInfo)
  //   }
  // },
  // methods: {
  //   ...mapMutations([type.SET_USER_INFO]),
  // },
  // computed: {
  //   ...mapState(['userInfo']),
  // },
}
</script>
