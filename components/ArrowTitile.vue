<template>
  <div class="arrowtitle">
    {{title}}
    <i></i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.arrowtitle {
  font-size: 24px;
  i {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url("https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/tit_arrow/sprite.png");
    background-repeat: no-repeat;
    background-position-x: -16px;
  }
  &:hover {
    i {
      background-position-x: 0px;
    }
  }
}
</style>