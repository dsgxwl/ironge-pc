<template>
  <div class="header">
    <div class="header_in">
      <router-link class="logo" to="/"></router-link>
      <m-nav></m-nav>
      <header-search></header-search>
      <user-dropdown></user-dropdown>
    </div>
  </div>
</template>
<script>
import MNav from '../Nav'
import HeaderSearch from '../HeaderSearch'
import UserDropdown from '../UserDropdown'
export default {
  components: {
    MNav,
    HeaderSearch,
    UserDropdown,
  },
}
</script>
