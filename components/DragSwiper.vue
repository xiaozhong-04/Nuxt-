<template>
  <div @mousemove="stop=true" @mouseout="stop=false" class="dragswiper">
    <!-- 轮播图 -->
    <common-swiper
      :dragValue="dragValue"
      :stop="stop"
      nobtns
      moving
      :width="198"
      :count="5"
      :data="data"
      @dratValue="dratValue"
    >
      <!-- 定义每个格子中的样式 -->
      <template v-slot:default="data">
        <div>
          <img :src="data.data.image" alt />
          <p>{{data.data.title}}</p>
        </div>
      </template>
    </common-swiper>
    <!-- 拖拽进度条 -->
    <drag-bar @value="onValue" />
  </div>
</template>

<script>
import DragBar from "~/components/DragBar";
import CommonSwiper from "~/components/CommonSwiper";
export default {
  components: {
    DragBar,
    CommonSwiper
  },
  props: {
    data: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      stop: false,
      dragValue: 0 //拖拽条的值
    };
  },
  methods: {
    onValue(value) {
      // 保存倒data 中
      this.dragValue = value;
    },
    dratValue(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss">
.dragswiper {
  padding: 30px 0;
  background-color: #fff;
  &:hover {
    .dragbar {
      opacity: 1;
      //   visibility: visible;
    }
  }
  .dragbar {
    transition: opacity 0.2s;
    margin-top: 40px;
    opacity: 0;
    // visibility: hidden; // 隐藏,位置保留
  }
}
</style>