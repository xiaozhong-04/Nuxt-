<template>
  <div style="margin-top: 10px;" class="container">
    <div class="row gutter">
      <div class="col-2">
        <cat-menu />
      </div>
      <div class="col-6">
        <swiper />
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
  components: {
    catMenu,
    swiper,
    Hswiper,
    tright
  }
};
</script>