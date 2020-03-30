<template>
  <div style="margin-top: 10px;" class="container">
    <div class="row gutter">
      <div class="col-2">
        <cat-menu :data="catTreeData" />
      </div>
      <div class="col-6">
        <swiper :data="indexSwiperData" />
      </div>
      <div class="col-2">
        <hswiper />
      </div>
      <div class="col-2">
        <tright />
      </div>
    </div>
  </div>
</template>

<script>
import catMenu from "../components/catMenu";
import swiper from "../components/swiper";
import Hswiper from "../components/Hswiper";
import tright from "../components/tright";
export default {
  props: {
    indexSwiperData: {
      type: Array,
      required: true
    },
    catTreeData: {
      type: Array,
      required: true
    }
  },
  components: {
    catMenu,
    swiper,
    Hswiper,
    tright
  }
};
</script>