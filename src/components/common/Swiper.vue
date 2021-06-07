<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.bannerId">
        <div class="tag" :style="{ backgroundColor: item.titleColor }">
          <span>{{ item.typeTitle }}</span>
        </div>
        <img :src="item.pic" @load="imageLoad" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('imageLoad')
    }
  }
}
</script>

<style scoped lang="less">
.swiper {
  .my-swipe {
    height: 135px;
    border-radius: 15px;

    .tag {
      position: absolute;
      bottom: 0;
      right: 0;
      content: '';
      display: block;
      min-width: 50px;
      padding: 0 5px;
      height: 20px;
      z-index: 1;
      border-top-left-radius: 10px;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #fff;
    }

    img {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
  }
}
</style>
