<template>
  <div class="topicon" :style="{backgroundImage: images[value - 1]}">
    <div class="topicon-top" :style="{color: colors[value - 1]}">TOP</div>
    <div class="topicon-num">0{{value}}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      images: [
        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAiCAMAAABySOkBAAAAaVBMVEVHcEzytDjztTj1uDz0uTr1uDn0tz350H7ztjf0uDbztTn4ujfytDn/sjPytDT1u0L50X761Yj5yGn61Inztjn60X760X30tjr71orysy/71YXysSzytDP704H4yWf1u0T2wFD6znT3xFzUfyWDAAAAFHRSTlMA+NdQMJwZ8vJxrSmMCue95vLm8RaVWo4AAAC4SURBVHjabdHpEoMgDATgeBfPHoiIUtu+/0NWxrFbIPv3m0k2E7pWXG53GpkooyaqGLBmu7CgPwsHSr/XlQFl7DZLAKJfi2RA6ecsAV5TFqwbxIEbBPCbMqCs2ZsCvJMlIGgKQNNxigBNAeEgAE5ePcBzMAiApgCcHACeEwCeEwCaRuCaMoCTI8AgD9A0gPM5SZHnRfIHx8mpKGlPKdITHm5BndEvWX3AKPu2IS9N20tJg+goSieGL1haOxWou0aaAAAAAElFTkSuQmCC)",
        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAiCAMAAABySOkBAAAAY1BMVEVHcEy/ubC/urHAvbS+uq6/urHHx7zV0cq+uq7CvLK/ua7Tz8bBv7TZ1c7EwLa9uK2/qqrBu7W6tqm/uq/W0sra1s+/uq68t6y+uK27tqrZ1c3X08vIw7nV0MjMx77DvrPRzcQ1PpfRAAAAE3RSTlMAcdVS9Z0X8vIwseaJ8r7kBmvygFfM5AAAAMBJREFUeNpt0esKgzAMBeB6m6t3F9vGZk7f/ynnCFpGcqC/PginHNPWWvrWLFri5k29yFDcXyq4z/rUwB2IGhBBAA3cewUN3BFQA1oAQQGK5yEG0RQ1iBsiKEC0ryCBm0rgpgrwlxUgPiQh8qEEaRwEBShy0wTpyyCBxxGQmkrgphL4yxJ4HAk8jgQeR8I1jvf8buBx0JeVtVXp8QZummcPc+aR5Rf0RwjYFOZO0Xj8AcHYWfMX242IZpgnIzLNwxdqBDiOHID/LwAAAABJRU5ErkJggg==)",
        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAiCAMAAABySOkBAAAAdVBMVEVHcEzbg0bgg0nhgkrggEbhhEngg0nwqoHggUfefEHoiU7egUjigknfgkjzsYvfgEXakUjmh0vyrofvqoHwqoDsnm/lhUznkFrggknwq4Lwq4HefULfgEbeez/zsYr0s43yr4fihk7olWPupHjrnm/ljlnxrYUIIWs0AAAAGHRSTlMAHXbV7zSf8vL/Tq8tifLlB2ry5vLmu7tMl0GPAAAAvklEQVR42m3R2wqDMBAE0Kio9a70tsbEqLX+/yfWsDS0zO7rYWGGUddcuFt7V6NwetZG5QIc8/sigtusBHp+TUYAvRxrQdLHvFkSQLu9MALoZVwnQvBJLUngdksIPqkxEhzLagmAK5MA2p2VEUJS/HA+KQBXBuBxJkLgygicFIHHEYDHQeBxEDgpQKiMwEkReBwEHkeAME6WptkvcOUkjtR5UZx8ofWVq1KFKyuGkbqmVn9XN50x6jn0Cq4fHh9pGEWRDn2aWAAAAABJRU5ErkJggg==)"
      ],
      colors: ['#e6ac36','#b3aea4','#d47b45']
    };
  }
};
</script>

<style lang="scss">
.topicon {
  width: 29px;
  height: 41px;
  text-align: center;
  background-size: cover;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  &-num {
    color: #fff;
    font-size: 16px;
    margin-top: -5px;
  }
}
</style>