<template>
  <div class="scroll-swiper-info">
    <van-swipe :width="350" :loop="false" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in customizeData" :key="index">
        <div v-for="item1 in item.resources" :key="item1.resourceId" class="scroll-swiper-info-item">
          <img :src="item1.uiElement.image.imageUrl" alt="" @load="imageLoad" />
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
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'NumberAlbum',
  props: {
    customizeData: {
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
      this.$emit('imageLoad')
    }
  }
}
</script>

<style scoped lang="less">
.scroll-swiper-info {
  .van-swipe {
    .van-swipe-item {
      .scroll-swiper-info-item {
        //background-color: #f00;
        display: flex;
        margin-bottom: 20px;

        img {
          width: 50px;
          height: 50px;
          border-radius: 5px;
        }

        .info {
          width: 280px;
          margin-left: 10px;
          padding-bottom: 5px;
          border-bottom: 1px solid #eee;

          .info-item {
            margin-bottom: 8px;

            .songName {
              font-size: 18px;
              margin-right: 4px;
            }

            .author {
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
