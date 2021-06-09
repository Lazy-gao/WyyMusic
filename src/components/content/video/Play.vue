<template>
  <div class="play">
    <template v-if="$store.state.isMv===false">
      <div v-if="Object.keys($store.state.videoUrl).length !== 0">
        <van-nav-bar @click-left="onClickLeft">
          <template #left>
            <van-icon name="arrow-left"
                      size="30"
                      color="#fff" />
          </template>
        </van-nav-bar>
        <div class="barrage"></div>
        <video class="video-player"
               :src="$store.state.videoUrl[0].url"
               autoplay
               controls></video>

        <div class="playInfo">
          <div class="left">
            <div class="title">
              <img :src="$store.state.videoDetail.creator.avatarUrl"
                   alt="" />
              <span>{{ $store.state.videoDetail.creator.nickname }}</span>
              <span class="iconfont icon-jia"></span>
            </div>
            <div class="musicInfo">
              <span>{{ $store.state.videoDetail.description ? $store.state.videoDetail.description : $store.state.videoDetail.title}}</span>
            </div>
          </div>
          <div class="right">
            <div class="dianzan">
              <span class="iconfont icon-dianzan"></span>
              <span>{{ $store.state.videoDetailInfo.likedCount | sellCountFilter }}</span>
            </div>
            <div class="dianzan">
              <span class="iconfont icon-pinglun"></span>
              <span>{{ $store.state.videoDetailInfo.commentCount | sellCountFilter }}</span>
            </div>
            <div class="dianzan flex">
              <span class="iconfont icon-hanhan-01-01"></span>
              <span>{{ $store.state.videoDetailInfo.shareCount | sellCountFilter }}</span>
            </div>
            <div class="dianzan flex">
              <span class="iconfont icon-shoucang"></span>
              <span>收藏</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="$store.state.isMv===true">
      <div v-if="Object.keys($store.state.mvAddress).length !== 0">
        <van-nav-bar @click-left="onClickLeft">
          <template #left>
            <van-icon name="arrow-left"
                      size="30"
                      color="#fff" />
          </template>
        </van-nav-bar>
        <div class="barrage"></div>
        <video class="video-player"
               :src="$store.state.mvAddress.url"
               autoplay
               controls></video>

        <div class="playInfo">
          <div class="left">
            <div class="title">
              <img :src="$store.state.mvDetail.artists[0].img1v1Url"
                   alt="" />
              <span>{{ $store.state.mvDetail.artists[0].name }}</span>
              <span class="iconfont icon-jia"></span>
            </div>
            <div class="musicInfo">
              <span>{{ $store.state.mvDetail.desc?$store.state.mvDetail.desc:$store.state.mvDetail.name }}</span>
            </div>
          </div>
          <div class="right">
            <div class="dianzan">
              <span class="iconfont icon-dianzan"></span>
              <span>{{ $store.state.mvDetailInfo.likedCount | sellCountFilter }}</span>
            </div>
            <div class="dianzan">
              <span class="iconfont icon-pinglun"></span>
              <span>{{ $store.state.mvDetailInfo.commentCount | sellCountFilter }}</span>
            </div>
            <div class="dianzan flex">
              <span class="iconfont icon-hanhan-01-01"></span>
              <span>{{ $store.state.mvDetailInfo.shareCount | sellCountFilter }}</span>
            </div>
            <div class="dianzan flex">
              <span class="iconfont icon-shoucang"></span>
              <span>收藏</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Play',
  data () {
    return {}
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  },
  filters: {
    sellCountFilter (value) {
      if (value < 10000) return value
      return (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped lang="less">
.play {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 100%;
  height: 100vh;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
  background-color: #000;

  &:hover {
    display: block;
  }

  .van-nav-bar {
    position: absolute;
    z-index: 1;
  }

  .barrage {
    position: absolute;
    top: 43px;
    width: 100%;
    height: 100px;
  }

  .video-player {
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
  }

  .playInfo {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px;

    .left {
      position: relative;
      flex: 1;

      .title {
        position: absolute;
        left: 20px;
        bottom: 100px;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: #fff;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 6px;
        }

        .icon-jia {
          color: #fff;
          padding: 1px 4px;
          border-radius: 8px;
          background-color: #f00;
          margin-left: 6px;
        }
      }

      .musicInfo {
        position: absolute;
        left: 20px;
        bottom: 0px;
        width: 300px;
        height: 90px;
        line-height: 50px;
        font-size: 14px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .right {
      width: 50px;
      height: 100%;
      color: #fff;

      .dianzan {
        width: 100%;
        height: 22%;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;

        span {
          width: 100%;
          height: 50%;
          line-height: 33px;
          text-align: center;
          font-size: 12px;
        }

        .iconfont {
          font-size: 22px;
          color: #fff;
        }
      }
    }
  }
}
</style>
