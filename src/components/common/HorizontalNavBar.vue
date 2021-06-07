<template>
  <cross-scroll class="crossScroll" ref="crossScroll">
    <div class="horizontal-nav-bar">
      <div class="horizontal-nav-bar-item" v-for="(item, index) in horizontalData" :key="item.id" @click="handleSelectTag(index, item.id)">
        <span :class="{ active: currentIndex === index ? 'active' : '' }">{{ item.name }}</span>
      </div>
    </div>
  </cross-scroll>
</template>

<script>
import CrossScroll from './scroll/CrossScroll'

export default {
  name: 'HorizontalNavBar',
  components: {
    CrossScroll
  },
  props: {
    horizontalData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
      videoGroupid: '' // 标签对应的id
    }
  },
  watch: {
    horizontalData() {
      this.load()
    }
  },
  methods: {
    load() {
      this.$nextTick(() => {
        this.$refs.crossScroll.refresh()
      })
    },
    handleSelectTag(index, id) {
      this.currentIndex = index
      this.videoGroupid = id
      this.$emit('videoGroup', id)
    }
  }
}
</script>

<style scoped lang="less">
.crossScroll {
  .horizontal-nav-bar {
    display: flex;
    height: 45px;

    .horizontal-nav-bar-item {
      height: 45px;
      line-height: 45px;

      span {
        font-size: 14px;
        padding: 4px 15px;
        border-radius: 20px;
        margin-right: 20px;
      }

      .active {
        background-color: #ffe1e1;
        color: #fe8787;
      }
    }
  }
}
</style>
