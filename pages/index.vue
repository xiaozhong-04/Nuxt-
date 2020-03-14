<template>
  <div class="index">
    <mylogo />
    <ul>
      <li v-for="(item, index) in topics" :key="index"><nuxt-link :to="'/content/'+item.id
      ">{{item.title}}</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
export default {
 async asyncData({ $axios }) {
    let res = await $axios.get("https://cnodejs.org/api/v1/topics")
    return {
      topics: res.data.data
    }
  },
  components: {
    "mylogo": Logo
  }
}
</script>

<style>
  .index {
    background-color: #fff;
    width: 1000px;
    margin: 0 auto;
  }
</style>