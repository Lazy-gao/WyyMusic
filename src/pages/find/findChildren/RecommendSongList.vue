<template>
  <div class="recommend-song-list">
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <span class="iconfont icon-arrow-left" @click="goBack"></span>
      </template>
      <template v-slot:content>
        <span>每日推荐</span>
      </template>
      <template v-slot:right>
        <span class="iconfont icon-wenhao-"></span>
      </template>
    </nav-bar>
    <!--  图片  -->
    <div class="header">
      <img src="~assets/img/recommend/recommendSong.jpg" alt="" />
      <div class="date">
        <span class="day">{{ day }} / </span>
        <span>{{ month }}</span>
      </div>
    </div>
    <!--  歌曲标题  -->
    <div class="recommend-header">
      <div class="left">
        <span class="iconfont icon-bofang1"></span>
        <span class="bofang">全部播放</span>
        <span class="length">({{ dailySongs.length }})</span>
      </div>
      <div class="right">
        <span class="iconfont icon-xuanze"></span>
      </div>
    </div>
    <!--  歌曲内容  -->
    <scroll class="content" ref="scroll" :pull-down-refresh="false" :pull-up-load="false">
      <div class="recommend-content" v-for="item in dailySongs" :key="item.id">
        <img :src="item.al.picUrl" alt="" @load="imageLoad" />
        <div class="songInfo">
          <div class="song-name">
            <span>{{ item.name }}</span>
          </div>
          <div class="author">
            <span v-for="item1 in item.ar" :key="item1.id">{{ item1.name }}</span>
            <span>{{ ' - ' + item.al.name }}</span>
          </div>
        </div>
        <div class="mv-bofang">
          <span class="iconfont icon-bofangshu" v-if="item.mv" @click="toPlay(item.mv)"></span>
        </div>
        <div class="gengduo">
          <span class="iconfont icon-dashujukeshihuaico-"></span>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import NavBar from 'components/common/NavBar'
import { getRecommendList } from 'network/find/recommend/recommend'
import Scroll from 'components/common/scroll/Scroll'
import { getMvDetail, getMvAddress, getMvDetailInfo } from 'network/cloudVillage/cloudVillage'
import { GETMVDETAIL, GETMVADDRESS, GETMVDETAILINFO, GETVID, ISMV } from 'store/types'

export default {
  name: 'RecommendSongList',
  components: {
    NavBar,
    Scroll
  },
  data() {
    return {
      day: '',
      month: '',
      dailySongs: [], // 推荐歌曲列表
      recommendReasons: [] // 歌曲的标签
    }
  },
  created() {
    let day = new Date().getDate()
    day = day > 10 ? day : '0' + day
    let month = new Date().getMonth() + 1
    month = month > 10 ? month : '0' + month
    this.day = day
    this.month = month

    this.getRecommendList()
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    async getRecommendList() {
      const res = await getRecommendList()
      console.log(res)
      this.dailySongs = res.data.dailySongs
      this.recommendReasons = res.data.recommendReasons
    },
    imageLoad() {
      this.$refs.scroll.refresh()
    },
    toPlay(vid) {
      this.getMvDetail(vid)
      this.getMvAddress(vid)
      this.getMvDetailInfo(vid)
      this.$store.commit(GETVID, vid)
      this.$store.commit(ISMV, true)
      this.$router.push('/play/' + vid)
    },
    // 获取点击的mv的详细信息
    async getMvDetail(id) {
      const res = await getMvDetail(id)
      this.$store.commit(GETMVDETAIL, res.data)
    },
    // 获取mv播放地址
    async getMvAddress(id) {
      const res = await getMvAddress(id)
      this.$store.commit(GETMVADDRESS, res.data)
    },
    // 获取mv评论数量等信息
    async getMvDetailInfo(id) {
      const res = await getMvDetailInfo(id)
      this.$store.commit(GETMVDETAILINFO, res)
    }
  }
}
</script>
<style scoped lang="less">
.recommend-song-list {
  position: relative;
  height: 100vh;
  z-index: 1;
  background-color: #fff;

  .nav-bar {
    position: absolute;
    z-index: 1;
    color: #fff;

    .iconfont {
      font-size: 22px;
    }
  }

  .header {
    position: relative;
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }

    .date {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 14px;

      .day {
        font-size: 30px;
      }
    }
  }

  .recommend-header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    line-height: 80px;
    padding: 0 10px;
    font-size: 20px;

    .left {
      .icon-bofang1 {
        color: #f00;
      }

      .bofang {
        font-weight: 600;
        padding: 0 10px;
      }

      .length {
        font-size: 12px;
        color: #919191;
      }
    }

    .right {
      width: 80px;
      height: 80px;
      text-align: right;
    }

    .iconfont {
      font-size: 20px;
    }
  }

  .content {
    height: calc(100% - 330px);
    overflow: hidden;

    .recommend-content {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      margin-bottom: 20px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 4px;
      }

      .songInfo {
        flex: 1;
        height: 40px;
        padding-left: 10px;

        .song-name {
          height: 20px;
          width: 80%;
          line-height: 20px;
          font-size: 18px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .author {
          height: 20px;
          width: 80%;
          line-height: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          span {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          span {
            font-size: 12px;
          }
        }
      }

      .mv-bofang {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: right;

        .icon-bofangshu {
          font-size: 25px;
          color: #919191;
        }
      }

      .gengduo {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: right;

        .icon-dashujukeshihuaico- {
          font-size: 26px;
          color: #919191;
        }
      }
    }
  }
}
</style>
