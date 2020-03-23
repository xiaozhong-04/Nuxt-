<template>
  <div class="test">
    子组件:
    <t1 @change="onChange" :num="num" />
    <hr />
    父组件{{num}}
    <br />
    <button @click="num=Math.random()">修改num</button>
  </div>
</template>

<script>
import t1 from "~/components/tset/t1";
export default {
  components: {
    t1
  },
  data() {
    return {
      num: 10
    };
  },
  methods: {
    onChange(value) {
      this.num = value;
    }
  }
};
</script>