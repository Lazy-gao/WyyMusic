<template>
  <div>
    <div class="broadcast" v-if="currentIndex === 0">
      <cross-scroll ref="crossScroll" class="crossScroll">
        <template v-if="Object.keys(broadcastingData).length !== 0">
          <div class="broadcast-item" v-for="item in broadcastingData[0].resources" :key="item.resourceId">
            <div class="top">
              <span class="mask"></span>
              <img :src="item.uiElement.image.imageUrl" alt="" @load="imageLoad" />
              <span class="iconfont icon-play"></span>
            </div>
            <div class="bottom">
              <span>{{ item.uiElement.mainTitle.title }}</span>
            </div>
          </div>
        </template>
      </cross-scroll>
    </div>
    <div class="broadcast" v-if="currentIndex === 1">
      <cross-scroll ref="crossScroll" class="crossScroll">
        <template>
          <div class="broadcast-item" v-for="item1 in broadcastingData[1].resources" :key="item1.resourceId">
            <div class="top">
              <span class="mask"></span>
              <img :src="item1.uiElement.image.imageUrl" alt="" @load="imageLoad" />
              <span class="iconfont icon-play"></span>
            </div>
            <div class="bottom">
              <span>{{ item1.uiElement.mainTitle.title }}</span>
            </div>
          </div>
        </template>
      </cross-scroll>
    </div>
  </div>
</template>

<script>
import CrossScroll from 'components/common/scroll/CrossScroll'

export default {
  name: 'Broadcast',
  props: {
    broadcastingData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CrossScroll
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  created() {
    this.$bus.$on('handleTitle', index => {
      this.currentIndex = index
    })
  },
  methods: {
    imageLoad() {
      this.$refs.crossScroll.refresh()
      this.$bus.$emit('imageLoad')
    }
  }
}
</script>

<style scoped lang="less">
.broadcast {
  display: flex;

  .crossScroll {
    width: 100%;

    .broadcast-item {
      display: inline-block;
      margin-right: 20px;

      .top {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #f00;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        .mask {
          display: inline-block;
          position: absolute;
          top: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0.9;
        }

        .icon-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 22px;
        }
      }

      .bottom {
        margin-top: 10px;
        text-align: center;
        font-size: 14px;
        font-weight: 600;

        span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
