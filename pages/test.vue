<template>
  <div class="test">
    子组件:
    <t1 @change="onChange" :num="num" />
    <hr />
    父组件{{num}}
    <br />
    <button @click="num=Math.random()">修改num</button>
    <hr />
    <top-icon :value="1"/>
    <top-icon :value="2"/>
    <top-icon :value="3"/>
  </div>
</template>

<script>
import t1 from "~/components/tset/t1";
import TopIcon from "~/components/TopIcon";
export default {
  components: {
    t1,
    TopIcon
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