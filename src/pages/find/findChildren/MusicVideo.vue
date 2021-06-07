<template>
  <el-carousel :interval="4000" type="card" height="200px" indicator-position="none">
    <el-carousel-item v-for="item in extInfo" :key="item.id">
      <img :src="item.resource.mlogBaseData.coverUrl" alt="" @load="imageLoad" />
      <span class="title">{{ item.resource.mlogBaseData.text }}</span>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'MusicVideo',
  props: {
    extInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('imageLoad')
    }
  }
}
</script>

<style scoped lang="less">
.el-carousel__item {
  //position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  .title {
    position: relative;
    bottom: 40px;
    right: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #fff;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
