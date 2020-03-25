<template>
  <card title="领券中心">
    <div class="lingjuan">
      <div class="lingjuan-item" v-for="(item, index) in 3" :key="index">
        <img
          src="https://img12.360buyimg.com/common/s50x50_jfs/t1/86797/34/15007/133042/5e6b1cadEa1c9d655/0e0a25d2285baca3.jpg!cc_50x50.webp"
          alt
        />
        <div class="price">
          ¥
          <strong>20</strong>
        </div>
        <div class="info">满199元可用</div>
        <p>仅可购买部分商品xx</p>
      </div>
    </div>
  </card>
</template>

<script>
import Card from "~/components/Card";
export default {
  components: {
    Card
  }
};
</script>

<style lang="scss">
.lingjuan {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/img/ab4b10750f3da259165a76e30074f504.png");
  height: 276px;
  padding-left: 30px;
  padding-top: 10px;
  img {
    float: left;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }
  &-item {
    overflow: hidden;
    margin-bottom: 10px;
  }
  .price {
      color: red;
      strong{
          font-size: 24px;
          font-family: impact,sans-serif;
      }
  }
}
</style>