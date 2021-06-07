<template>
  <div class="headerTitle">
    <div class="header-left">
      <div class="title" v-for="(item, index) in title" :key="index" @click="handleTitle(index)">
        <span :class="{ active: currentIndex === index ? '' : 'active' }">{{ item }}</span>
      </div>
    </div>
    <div class="header-right">
      <div class="desc" v-if="text">
        <span>{{ text }}</span>
        <span class="iconfont" :class="sign"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumTitle',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    },
    text: {
      type: String,
      default: ''
    },
    sign: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    handleTitle(index) {
      this.$bus.$emit('handleTitle', index)
      this.currentIndex = index
    }
  }
}
</script>

<style scoped lang="less">
.headerTitle {
  display: flex;
  justify-content: space-between;
  height: 45px;
  line-height: 45px;

  .header-left {
    font-size: 18px;

    .title {
      display: inline-block;

      span {
        padding: 0 10px;
        border-right: 2px solid #e6e6e6;
        font-weight: 600;
      }

      &:last-child span {
        border-right: none;
      }

      .active {
        color: #9a9a9a;
      }
    }
  }

  .header-right {
    position: relative;
    padding-right: 10px;
    font-size: 12px;

    .desc {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 61px;
      height: 18px;
      line-height: 18px;
      border-radius: 25px;
      text-align: center;
      border: 1px solid #e4e4e4;
      font-size: 14px;
      color: #919191;
    }
  }
}
</style>
