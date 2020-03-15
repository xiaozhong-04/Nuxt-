<template>
  <div>
    <nuxt-link to="/">
      <img v-if="hori" class="logo" src="/logo2.png" alt="">
      <img v-else class="logo" src="/logo.png" alt="">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    // 是否横向
    hori: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .logo{
    width: 150px;
  }
</style>