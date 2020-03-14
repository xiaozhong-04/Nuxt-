<template>
  <div class="content">
    <h1>{{topic.title}}</h1>
    <p v-html="topic.content"></p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.topic.title
    }
  },
  async asyncData({ $axios, params, payload }) {
    if (payload) return { topic: payload };
    else {
      let res = await $axios.get(
        "https://cnodejs.org/api/v1/topic/" + params.id
      );
      return {
        topic: res.data.data
      };
    }
  }
};
</script>
<style>
.content {
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
}
</style>