<template>
  <div class="dottitle">{{title}}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: false
    }
  }
};
</script>

<style lang="scss">
.dottitle {
  text-align: center;
  padding: 20px;
  font-size: 28px;
  font-weight: 700;
  color: #000;
  &::after,
  &::before {
    margin: 0 20px;
    content: "";
    display: inline-block;
    width: 25px;
    height: 20px;
    background-size: 50px 20px;
    background-repeat: no-repeat;
    background-image: url("https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/floor_hd/sprite.png");
  }
  &::after {
    background-position-x: -25px;
  }
}
</style>