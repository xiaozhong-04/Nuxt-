<template>
  <div class="sangou">
    <card title="品牌闪购">
      <template>
        <div class="sangou-content">
          <div class="row">
            <div class="col-6 sangou-left">
              <img
                class="sangou-logo"
                src="https://img11.360buyimg.com/deepvisual/s70x35_jfs/t1/108224/40/8503/12587/5e6727faEdae20241/46d67b699a0501ea.png!cc_70x35.webp"
                alt
              />
              <div class="title">存储大牌闪购</div>
              <div class="stitle">全场最高直降550元</div>
              <img
                class="sangou-glogo"
                src="https://img14.360buyimg.com/deepvisual/s390x390_jfs/t1/6545/21/1977/61362/5bcef612E5c7dd4b7/9dd7d327dc87fa9f.jpg!cc_130x130.webp"
                alt
              />
            </div>
            <div class="col-6 sangou-right">
              <ul>
                <li v-for="(item, index) in 6" :key="index">
                  <img
                    src="https://img14.360buyimg.com/deepvisual/s300x150_jfs/t1/90153/40/14704/2406/5e686577Ea84c0ce9/e5e410236cb79ae5.png!cc_300x150.webp"
                    alt
                  />
                  <p>拍拍大牌闪购专场</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </card>
  </div>
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
.sangou {
  &-content {
    padding: 0 15px 10px 15px;
  }
  &-left {
    padding: 20px 0;
    background-color: #f9f8f7;
    text-align: center;
    .title {
      font-size: 16px;
      margin: 6px 0;
    }
    .sangou-logo {
      width: 100px;
    }
    .sangou-glogo {
      width: 42%;
    }
  }
  &-right {
    margin-top: -20px;
    li {
      text-align: center;
      float: left;
      width: 50%;
      margin-top: 20px;
      position: relative;
      img {
        width: 60%;
        margin-bottom: 10px;
      }
      &:nth-child(odd)::after {
        content: "";
        position: absolute;
        right: 0;
        top: 10px;
        display: inline-block;
        height: 50px;
        width: 1px;
        background-image: radial-gradient(#eee, #fff);
      }
    }
  }
}
</style>