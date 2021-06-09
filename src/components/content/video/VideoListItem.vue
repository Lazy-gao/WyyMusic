<template>
  <div>
    <template v-if="isMv===false">
      <div class="video"
           @click="toPlay(videoListItem.data.vid)">
        <div class="top">
          <img :src="videoListItem.data.coverUrl"
               alt=""
               @load="imageLoad" />
        </div>
        <div class="bottom">
          <div class="desc">
            <span>{{ videoListItem.data.title }}</span>
          </div>
          <div class="count">
            <div class="playCount">
              <span class="iconfont icon-bofangqi-bofang"></span>
              <span class="playTime">{{ videoListItem.data.playTime | sellCountFilter }}</span>
              <span class="iconfont icon-dianzan"></span>
              <span>{{ videoListItem.data.praisedCount | sellCountFilter }}</span>
            </div>
            <div class="lickCount">
              <span>{{ videoListItem.data.videoGroup[0].name }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="video"
           @click="toPlay(videoListItem.data.id)">
        <div class="top">
          <img :src="videoListItem.data.coverUrl"
               alt=""
               @load="imageLoad" />
        </div>
        <div class="bottom">
          <div class="desc">
            <span>{{ videoListItem.data.name }}</span>
          </div>
          <div class="count">
            <div class="playCount">
              <span class="iconfont icon-bofangqi-bofang"></span>
              <span class="playTime">{{ videoListItem.data.playCount | sellCountFilter }}</span>
              <span class="iconfont icon-dianzan"></span>
              <span>{{ videoListItem.data.likeCount | sellCountFilter }}</span>
            </div>
            <div class="lickCount">
              <span>{{ videoListItem.data.videoGroup[0].name }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { GETVID } from 'store/types'

export default {
  name: 'VideoListItem',
  props: {
    videoListItem: {
      type: Object,
      default () {
        return {}
      }
    },
    isMv: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  created () {

  },
  methods: {
    imageLoad () {
      this.$bus.$emit('imageLoad')
    },
    toPlay (vid) {
      this.$bus.$emit('toPlayVid', vid)
      this.$store.commit(GETVID, vid)
      this.$router.push('/play/' + vid)
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
.video {
  height: 208px;
  width: 164px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 10px;

  .top {
    width: 100%;
    height: 139px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    img {
      width: 100%;
      height: 139px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  .bottom {
    width: 100%;
    height: 69px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .desc {
      width: 148px;
      height: 35px;
      margin: auto;
      font-size: 12px;

      span {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-height: 20px;
      }
    }

    .count {
      display: flex;
      justify-content: space-between;
      width: 148px;
      height: 18px;
      line-height: 18px;
      margin: 8px auto;
      font-size: 12px;
      color: #9b9b9b;

      .iconfont {
        font-size: 12px;
      }

      .playTime {
        padding-right: 10px;
      }
    }
  }
}
</style>
