<template>
  <div class="rankingList">
    <van-swipe :loop="false" :width="300" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in creatives" :key="index">
        <div class="title">{{ item.uiElement.mainTitle.title }}</div>
        <div class="info" v-for="(item1, index) in item.resources" :key="item1.resourceId">
          <div class="icon">
            <img :src="item1.uiElement.image.imageUrl" alt="" @load="imageLoad" />
            <span class="iconfont icon-play"> </span>
          </div>
          <div class="info-item">
            <span class="num">{{ index++ + 1 }}</span>
            <span class="songName">{{ item1.uiElement.mainTitle.title }}</span>
            <span class="author">{{ ' - ' + item1.resourceExtInfo.artists[0].name }}</span>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'RankingListData',
  props: {
    creatives: {
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
.rankingList {
  background-color: #f3f3f3;

  .van-swipe {
    .van-swipe-item {
      width: 263px;
      height: 196px;
      padding-left: 10px;
      margin-right: 10px;
      background-color: #fff;

      .title {
        width: 100%;
        height: 30px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
      }

      .info {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;

        .icon {
          position: relative;
          width: 45px;
          height: 45px;
          border-radius: 8px;

          img {
            width: 45px;
            height: 45px;
            border-radius: 8px;
          }

          .icon-play {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
          }
        }

        .info-item {
          width: 200px;
          height: 21px;
          margin-left: 10px;
          font-size: 16px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          .num {
            font-weight: 600;
          }

          .songName {
            padding: 0 10px;
          }

          .author {
            font-size: 12px;
            color: #9a9a9a;
          }
        }
      }
    }
  }
}
</style>
