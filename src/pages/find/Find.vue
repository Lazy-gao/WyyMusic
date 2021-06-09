<template>
  <div id="find">
    <!--  导航栏  -->
    <nav-bar class="find-nav-bar">
      <template v-slot:left>
        <span class="iconfont icon-daohang"></span>
      </template>
      <template v-slot:content>
        <div class="input">
          <span>请输入内容</span>
        </div>
      </template>
      <template v-slot:right>
        <span class="iconfont icon-ziyuan"></span>
      </template>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :pull-down-refresh="false"
            :pull-up-load="false">
      <!--  轮播图  -->
      <swiper class="swiper"
              :banner="banner" />
      <!--  圆形导航  -->
      <main-round-nav-bar class="round"
                          :round-data="roundData" />
      <!--   推荐歌单   -->
      <div class="recommend-song-list">
        <header-title :title="recommendSongList.title"
                      :text="recommendSongList.text"
                      sign="icon-ic_arrow_r" />
        <main-content :creatives="recommendSongList.creatives" />
      </div>
      <!--   私人定制   -->
      <div class="find-cross-line">
        <header-title :title="customize.title"
                      :text="customize.text"
                      sign="icon-bofangqi-bofang" />
        <scroll-swiper-item :customize-data="customize.creatives" />
      </div>
      <!--   精选音乐视频   -->
      <div class="find-cross-line">
        <header-title :title="musicVideo.title"
                      :text="musicVideo.text"
                      sign="icon-ic_arrow_r" />
        <music-video :ext-info="musicVideo.extInfo" />
      </div>
      <!--   雷达歌单   -->
      <div class="find-cross-line">
        <header-title :title="radarPlaylist.title"
                      :text="radarPlaylist.text"
                      sign="icon-ic_arrow_r" />
        <main-content :creatives="radarPlaylist.creatives" />
      </div>
      <!--   LOOK直播   -->
      <div class="find-cross-line">
        <header-title :title="LookData.title"
                      :text="LookData.text"
                      sign="icon-ic_arrow_r" />
        <main-look-content :creatives="LookData.extInfo" />
      </div>
      <!--   专属场景歌单   -->
      <div class="find-cross-line">
        <header-title :title="scenePlaylistData.title"
                      :text="scenePlaylistData.text"
                      sign="icon-ic_arrow_r" />
        <main-content :creatives="scenePlaylistData.creatives" />
      </div>
      <!--   新歌、新碟、数字专辑   -->
      <div class="find-cross-line"
           v-if="Object.keys(newMusic[0].uiElement).length !== 0">
        <album-title :title="AlbumTitle"
                     :text="newMusic[0].uiElement.button.text"
                     sign="icon-ic_arrow_r" />
        <album-scroll-swiper-item :new-music="newMusic"
                                  :new-disc="newDisc"
                                  :album="album" />
      </div>
      <!--   排行榜   -->
      <div class="find-cross-line">
        <header-title :title="rankingList.title"
                      :text="rankingList.text"
                      sign="icon-ic_arrow_r" />
        <ranking-list-data :creatives="rankingList.creatives" />
      </div>
      <!--   音乐日历   -->
      <div class="find-cross-line">
        <music-calendar :music-calendar="musicCalendar"
                        sign="icon-ic_arrow_r" />
      </div>
      <!--   播客   -->
      <div class="find-cross-line">
        <header-title :title="podcastListData.title"
                      :text="podcastListData.text"
                      sign="icon-ic_arrow_r" />
        <main-content :creatives="podcastListData.creatives" />
      </div>
      <!--   云村KTV   -->
      <div class="find-cross-line">
        <header-title :title="ktvData.title"
                      :text="ktvData.text"
                      sign="icon-ic_arrow_r" />
        <ktv :creatives="ktvData.extInfo" />
      </div>
      <!--    广播电台    -->
      <div class="find-cross-line">
        <album-title :title="broadcastingTitle" />
        <broadcast :broadcasting-data="broadcastingData" />
      </div>
      <!--   视频合辑   -->
      <div class="find-cross-line">
        <header-title :title="videoCollectionData.title"
                      :text="videoCollectionData.text"
                      sign="icon-ic_arrow_r" />
        <main-content :creatives="videoCollectionData.creatives" />
      </div>
      <!--   底部   -->
      <div class="find-cross-line">
        <floor />
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
import Swiper from 'components/common/Swiper'
import MainRoundNavBar from 'components/common/MainRoundNavBar'
import Scroll from 'components/common/scroll/Scroll'
import HeaderTitle from 'components/common/HeaderTitle'
import MainContent from 'components/common/MainContent'
import ScrollSwiperItem from './findChildren/ScrollSwiperItem'
import MusicVideo from './findChildren/MusicVideo'
import MainLookContent from 'components/content/look/MainLookContent'
import AlbumScrollSwiperItem from './findChildren/AlbumScrollSwiperItem'
import AlbumTitle from 'components/common/AlbumTitle'
import RankingListData from './findChildren/RankingListData'
import MusicCalendar from './findChildren/MusicCalendar'
import Ktv from './findChildren/Ktv'
import Broadcast from './findChildren/Broadcast'
import Floor from './findChildren/Floor'

import {
  getFindData,
  roundNavBar,
  RecommendSongListData,
  Customize,
  MusicVideoData,
  RadarPlaylist,
  LookData,
  ScenePlaylist,
  MusicCalendars,
  RankingList,
  PodcastList,
  KtvData,
  VideoCollection
} from 'network/find/find'

export default {
  name: 'Find',
  components: {
    AlbumScrollSwiperItem,
    MusicVideo,
    NavBar,
    Swiper,
    MainRoundNavBar,
    Scroll,
    HeaderTitle,
    MainContent,
    ScrollSwiperItem,
    MainLookContent,
    AlbumTitle,
    RankingListData,
    MusicCalendar,
    Ktv,
    Broadcast,
    Floor
  },
  data () {
    return {
      cursor: {},
      banner: [], // 轮播图数据
      roundData: [], // 圆形导航数据
      recommendSongList: {}, // 推荐歌单
      customize: {}, // 私人定制数据
      musicVideo: {}, // 精选音乐视频数据
      radarPlaylist: {}, // 雷达歌单数据
      LookData: {}, // LOOK直播数据
      scenePlaylistData: {}, // 专属场景歌单数据
      newMusic: [], // 新歌
      newDisc: [], // 新碟
      album: [], // 数字专辑
      AlbumTitle: [], // 新歌，新碟，数字专辑的标题
      musicCalendar: {}, // 音乐日历
      rankingList: {}, // 排行榜
      podcastListData: {}, // 播客数据
      ktvData: {}, // 云村ktv
      broadcastingData: [], // 广播电台
      broadcastingTitle: [], // 广播电台标题
      videoCollectionData: {} // 视频合辑
    }
  },
  created () {
    this.getFindData(this.cursor)
    this.getRoundData()
  },
  mounted () {
    // 监听图片加载完成
    this.$bus.$on('imageLoad', () => {
      // 加载完成重新计算高度
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    // 获取轮播图、推荐歌单、私人定制、精选音乐视频数据
    async getFindData () {
      const res = await getFindData()
      console.log(res)
      this.cursor = res.data.cursor
      this.banner = res.data.blocks[0].extInfo.banners
      this.recommendSongList = new RecommendSongListData(res.data.blocks[1].creatives, res.data.blocks[1].uiElement)
      this.customize = new Customize(res.data.blocks[3].creatives, res.data.blocks[3].uiElement)
      this.musicVideo = new MusicVideoData(res.data.blocks[2].extInfo, res.data.blocks[2].uiElement)
      await this.getFindDatas(this.cursor)
    },
    // 获取雷达歌单、LOOK直播、专属场景歌单，新歌、新碟、数字专辑数据
    async getFindDatas (cursor) {
      const res = await getFindData(cursor)
      let cursors = res.data.cursor
      this.radarPlaylist = new RadarPlaylist(res.data.blocks[0].creatives, res.data.blocks[0].uiElement)
      this.musicCalendar = new MusicCalendars(res.data.blocks[1].creatives, res.data.blocks[1].uiElement)
      this.LookData = new LookData(res.data.blocks[2].extInfo, res.data.blocks[2].uiElement)
      this.scenePlaylistData = new ScenePlaylist(res.data.blocks[3].creatives, res.data.blocks[3].uiElement)
      this.newMusic = res.data.blocks[4].creatives.slice(0, 2)
      this.newDisc = res.data.blocks[4].creatives.slice(2, 4)
      this.album = res.data.blocks[4].creatives.slice(4, 8)
      this.AlbumTitle.push(
        res.data.blocks[4].creatives[0].uiElement.mainTitle.title,
        res.data.blocks[4].creatives[2].uiElement.mainTitle.title,
        res.data.blocks[4].creatives[4].uiElement.mainTitle.title
      )

      await this.getFindBottomData(cursors)
    },
    // 排行榜、播客、云村KTV、广播电台、视频合集
    async getFindBottomData (cursor) {
      const res = await getFindData(cursor)
      this.rankingList = new RankingList(res.data.blocks[0].creatives, res.data.blocks[0].uiElement)
      this.podcastListData = new PodcastList(res.data.blocks[1].creatives, res.data.blocks[1].uiElement)
      this.ktvData = new KtvData(res.data.blocks[2].extInfo.roomInfoList, res.data.blocks[2].uiElement)
      this.broadcastingTitle.push(
        res.data.blocks[3].creatives[0].uiElement.mainTitle.title,
        res.data.blocks[3].creatives[1].uiElement.mainTitle.title
      )
      this.broadcastingData.push(res.data.blocks[3].creatives[0], res.data.blocks[3].creatives[1])
      this.videoCollectionData = new VideoCollection(res.data.blocks[4].creatives, res.data.blocks[4].uiElement)
    },
    // 获取圆形导航数据
    async getRoundData () {
      const res = await roundNavBar()
      this.roundData = res.data
    }
  }
}
</script>

<style scoped lang="less">
#find {
  position: relative;
  height: 100vh;
  padding: 0 10px;
  background-color: #fff;

  .find-nav-bar {
    margin-top: 5px;

    .icon-daohang {
      font-size: 20px;
      color: #000;
    }

    .input {
      position: relative;
      width: 280px;
      height: 30px;
      line-height: 30px;
      border-radius: 30px;
      border: none;
      background-color: #f5f5f5;

      &:before {
        content: '\e61d';
        position: absolute;
        top: 3px;
        left: 60px;
        font-family: iconfont;
        font-size: 18px;
        color: #000;
      }

      span {
        font-size: 16px;
        color: #cdcdcd;
      }
    }

    .icon-ziyuan {
      font-size: 20px;
      color: #000;
    }
  }

  .content {
    position: absolute;
    top: 45px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
    padding: 0 10px;

    .swiper {
      margin-top: 20px;
    }

    .round {
      margin-top: 20px;
    }

    .cross-scroll {
      width: 100%;
    }

    .find-cross-line {
      width: 100vw;
      margin-top: 20px;
      border-top: 10px solid #e5e5e5;
    }

    .recommend-song-list {
      width: 100vw;
      margin-top: 20px;
      border-top: 1px solid #e5e5e5;
    }
  }
}
</style>
