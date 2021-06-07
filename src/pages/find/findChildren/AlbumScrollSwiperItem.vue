<template>
  <div class="scroll-swiper-info">
    <van-swipe :width="350" :loop="false" :show-indicators="false">
      <template v-if="currentIndex === 0">
        <van-swipe-item v-for="(item, index) in newMusic" :key="index">
          <div v-for="item1 in item.resources" :key="item1.resourceId" class="scroll-swiper-info-item">
            <div class="icon">
              <img :src="item1.uiElement.image.imageUrl" alt="" @load="imageLoad" />
              <span class="iconfont icon-play"></span>
            </div>
            <div class="info">
              <div class="info-item">
                <span class="songName">{{ item1.uiElement.mainTitle.title }}</span>
                <span class="author" v-for="item2 in item1.resourceExtInfo.artists" :key="item2.id">{{ ' - ' + item2.name }}</span>
              </div>
              <div class="desc">
                <span v-if="item1.uiElement.subTitle">{{ item1.uiElement.subTitle.title }}</span>
              </div>
            </div>
          </div>
        </van-swipe-item>
      </template>
      <template v-if="currentIndex === 1">
        <van-swipe-item v-for="(item, index) in newDisc" :key="index">
          <div v-for="item1 in item.resources" :key="item1.resourceId" class="scroll-swiper-info-item">
            <div class="icon">
              <img :src="item1.uiElement.image.imageUrl" alt="" @load="imageLoad" />
              <span class="iconfont"></span>
            </div>
            <div class="info">
              <div class="info-item">
                <span class="songName">{{ item1.uiElement.mainTitle.title }}</span>
                <span class="author" v-for="item2 in item1.resourceExtInfo.artists" :key="item2.id">{{ ' - ' + item2.name }}</span>
              </div>
              <div class="desc">
                <span v-if="item1.uiElement.subTitle">{{ item1.uiElement.subTitle.title }}</span>
              </div>
            </div>
          </div>
        </van-swipe-item>
      </template>
      <template v-if="currentIndex === 2">
        <van-swipe-item v-for="(item, index) in album" :key="index">
          <div v-for="item1 in item.resources" :key="item1.resourceId" class="scroll-swiper-info-item">
            <div class="icon">
              <img :src="item1.uiElement.image.imageUrl" alt="" @load="imageLoad" />
              <span class="iconfont"></span>
            </div>
            <div class="info">
              <div class="info-item">
                <span class="songName">{{ item1.uiElement.mainTitle.title }}</span>
                <span class="author" v-for="item2 in item1.resourceExtInfo.artists" :key="item2.id">{{ ' - ' + item2.name }}</span>
              </div>
              <div class="desc">
                <span v-if="item1.uiElement.subTitle">{{ item1.uiElement.subTitle.title }}</span>
              </div>
            </div>
          </div>
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'AlbumScrollSwiperItem',
  props: {
    newMusic: {
      type: Array,
      default() {
        return []
      }
    },
    newDisc: {
      type: Array,
      default() {
        return []
      }
    },
    album: {
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
  created() {
    this.$bus.$on('handleTitle', index => {
      this.currentIndex = index
    })
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('imageLoad')
    }
  }
}
</script>

<style scoped lang="less">
.scroll-swiper-info {
  .van-swipe {
    .van-swipe-item {
      .scroll-swiper-info-item {
        display: flex;
        margin-bottom: 20px;

        .icon {
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 5px;

          img {
            width: 50px;
            height: 50px;
            border-radius: 5px;
          }

          .icon-play {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
          }
        }

        .info {
          width: 280px;
          margin-left: 10px;
          padding-bottom: 5px;
          border-bottom: 1px solid #eee;

          .info-item {
            margin-bottom: 8px;
            white-space: nowrap;

            .songName {
              display: inline-block;
              max-width: 280px;
              font-size: 18px;
              margin-right: 4px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .author {
              display: inline-block;
              font-size: 12px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #969696;
            }
          }

          .desc {
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #969696;
          }
        }
      }
    }
  }
}
</style>
