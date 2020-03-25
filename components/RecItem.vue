<template>
  <div class="recitem">
    <div class="image">
      <img :src="image" alt />
    </div>
    <div class="title">{{title}}</div>
    <div class="price">
      ¥
      <strong>{{price}}</strong>
    </div>
    <!-- x -->
    <div class="recitem-x"></div>
    <!-- 找相似 -->
    <div class="recitem-alike">
      <span>找相似</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss">
.recitem {
  position: relative;
  cursor: pointer;
  background-color: #fff;
  padding: 30px 20px;
  .image {
    text-align: center;
  }
  img {
    width: 80%;
  }
  .title {
    font-size: 14px;
    height: 3em;
    overflow: hidden;
  }
  .price {
    padding-top: 5px;
    color: red;
    strong {
      font-size: 18px;
    }
    
  }
  &:hover {
      .recitem-x,
      .recitem-alike {
        visibility: visible;
      }
    }
  &-x {
    position: absolute;
    right: 15px;
    top: 10px;
    visibility: hidden;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAANJJREFUOMvtkU0KwjAQhafVZcFVVXoMD+EBWnsDb6WCBRdNfyDdxa16gRzFG/hGJhKllW4FH3wQpn0vMxmiv14yxpBSiuq6XoE1CMHzW1VVzBLkqEWu/qamadhMYr6CDARijsEOHPDfrDeAJQGBmG8ghWnOZpxPMCd80Vd5ISm4gDMoRpmdvJkNuCNga62lUQEfMxdslk4y6azf2HUdlWXJ5gXYu5nbtiXvTTaohb0hWmsXkMtrJ95m+GZe4RHEg12IIeJV+fPyGUwBjzYZDPhNPQCZAMge0sk3nAAAAABJRU5ErkJggg==");
    &:hover {
      color: #fff;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAZpJREFUOMulk7tOAkEUhqfTXmVBK9hdoxC0EFFqEztLWg1SeWksfQZ9ha3UBDAa38DEwr3ANhZk2WgtSKEgnSHHcyazZGdBGyb5k83s/505lxnGxLITOrMW9Vlb0XatmGqgPNRAiL4N/o886B2t19gGM+Mqs+O6YinaJRrbKPhDbfLY8WXFVFKstbSNJys6wXErptXQMPwHDoQerUoMscxJqDOWol4EsLmQAnM+OQ7K+0NiiGWi5vfA9LKzB83ivgwj6Ga2wC+fQj2Z5T5iiGWiYSNjs3gAPasO/uExGnFvLgmNlRx0rqvQualBXV0PApAMJjosnUhw325Aq3QEbjoPnasKdG8fwF0rhGGSx8SYIvWqHO49O/D1+ATd6j242QLPMOIdTA6AabvpTfhE+Kf/DW9n55PgUQAv2jBeM6VdueNwz3TAL4meyAE8uYlYn5vJ84bxmrPbPCDB1BOaAs4/HMCQxkhzJhN1W6oZT/bLJ/CBGTVWc/IYoxfJwTlHRsVFJ1NpIoPwRYpcZQIjcLjEsas89WOa9jn/Ai8058i39DJCAAAAAElFTkSuQmCC");
    }
  }
  &-alike {
    visibility: hidden;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    opacity: 0.8;
    width: 100%;
    left: 0;
    line-height: 80px;
    text-align: center;
    height: 80px;
    span {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAQlJREFUOMvN0ssuA2EUwPHG1EI3WGHt/gzS2CEkghC3NUXISLyFS1IsxQY7IXF5AJ5s/E/y7+SrdNFlJ/kl813O6ek5U6n05FMURejDgOK9q6Awil1c4UGX2MFI616n4CrW8IUX5FhV7t6n62qZxOAMDfxiCzVM4AynGHdv2zsHxpQJlvCDuusZfOAW975PeTbv3YVWgiG84TDpw4XBmeVGkvPk/BivGIzFMN4tK03QNEG4+5fgKE0Qli1rzvWsDWtaSfyFac/q3l1MexC/cuLBhrOftPu5DY29TZvYKJuYTKLf4G882f0VxTSeHfF62xg7fEhj2McNHnWNPc8q3X6VmbOvtZXbc88fVwgKM0eNW+sAAAAASUVORK5CYII=");
      background-size: 16px 16px;
      background-position: 30px 50%;
      background-repeat: no-repeat;
      background-color: #333;
      color: #fff;
      padding: 5px 50px;
      border-radius: 15px;
      &:hover {
        background-color: red;
      }
    }
  }
}
</style>