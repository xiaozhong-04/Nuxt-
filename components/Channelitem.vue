<template>
  <div class="channelitem">
    <h3>
      {{title}}
      <span>{{stitle}}</span>
    </h3>
    <img :src="limg" alt />
    <img :src="rimg" alt />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    stitle: {
      type: String,
      required: true
    },
    limg: {
      type: String,
      required: true
    },
    rimg: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.channelitem {
  background-color: #fff;
  padding-bottom: 14px;
  h3 {
    color: #000;
    font-size: 24px;
    margin: 0 10px 0 30px;
    padding: 17px 0 13px;
    span {
      font-size: 13px;
      color: #aaaaaa;
      font-weight: normal;
    }
  }
  img {
    width: 100px;
    height: 100px;
    margin: 0 20px;
  }
}
</style>