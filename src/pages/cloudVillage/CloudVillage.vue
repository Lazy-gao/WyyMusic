<template>
  <div id="cloudVillage">
    <!--  页面导航  -->
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <span class="iconfont icon-daohang"></span>
      </template>
      <template v-slot:content>
        <div class="cloudVillage-title">
          <span :class="{ active: currentIndex === index ? 'active' : '' }"
                v-for="(item, index) in title"
                :key="index"
                @click="handleTitle(index)">{{
            item
          }}</span>
        </div>
      </template>
      <template v-slot:right>
        <span class="iconfont icon-tianjia"></span>
      </template>
    </nav-bar>
    <!--  列表导航  -->
    <horizontal-nav-bar class="horizontal"
                        :horizontal-data="navBarList"
                        @videoGroup="videoGroupId" />
    <scroll class="content"
            ref="scroll"
            :pull-down-refresh="true"
            :pull-up-load="true"
            @pullingDown="pullingDown"
            @pullingUp="pullingUp">
      <!--  搜索框  -->
      <lazy-input />
      <!--   视频   -->
      <video-list :video-list="videoGroupListData"
                  :is-mv="isMv" />
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/NavBar'
import HorizontalNavBar from 'components/common/HorizontalNavBar'
import LazyInput from 'components/common/LazyInput'
import VideoList from 'components/content/video/VideoList'

import { getNavBarList, getVideoListData, getVideoDetail, getVideoPlayAddress, getVideoDetailInfo, getMvDetail, getMvAddress, getMvDetailInfo } from 'network/cloudVillage/cloudVillage'
import { GETVIDEODETAIL, GETVIDEOUrl, GETVIDEODETAILINFO, GETMVDETAIL, GETMVADDRESS, GETMVDETAILINFO, ISMV } from 'store/types'
import { Toast } from 'vant'

export default {
  name: 'CloudVillage',
  components: {
    Scroll,
    NavBar,
    HorizontalNavBar,
    LazyInput,
    VideoList
  },
  data () {
    return {
      title: ['关注', '推荐'],
      currentIndex: 1,
      navBarList: [], // 分类列表数据
      videoGroup: '', // 视频分类id
      videoGroupListData: [], // 视频数据
      page: 0, // 页码
      type: 1, // 标识内容是视频还是MV， 1 是视频，2 是MV
      vid: '', // 点击要播放视频的id
      isMv: false // 是否是mv分类
    }
  },
  created () {
    this.getNavBarList()
    this.$bus.$on('toPlayVid', vid => {
      this.vid = vid
      if (this.isMv) {
        this.getMvDetail(this.vid)
        this.getMvAddress(this.vid)
        this.getMvDetailInfo(this.vid)
      } else {
        this.getVideoDetail(this.vid)
        this.getVideoPlayAddress(this.vid)
        this.getVideoDetailInfo(this.vid)
      }
    })
  },
  mounted () {
    this.$bus.$on('imageLoad', () => {
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    // 点击切换导航
    handleTitle (index) {
      this.currentIndex = index
    },
    // 获取视频分类列表数据
    async getNavBarList () {
      const res = await getNavBarList()
      this.navBarList = res.data
      this.videoGroup = res.data[0].id
      // 获取视频数据
      await this.getVideoListData(this.videoGroup, this.page)
    },
    // 获取标签列表对应的视频
    async getVideoListData (id, offset) {
      const res = await getVideoListData(id, offset)
      Toast.clear() // 关闭提示框
      let videoGroupListData = [...this.videoGroupListData, ...res.datas]
      this.page += 1
      this.videoGroupListData = videoGroupListData
      this.$refs.scroll.finishPullUp()
    },

    // 监听子组件传递过来的标签列表的id,也就是点击切换标签
    videoGroupId (id) {
      if (id === 1000) {
        this.isMv = true
        this.videoGroup = id
        // 开启加载提示框
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
          loadingType: 'spinner'
        })
        this.videoGroupListData = []
        this.page = 0
        // 通过对应的id来请求对应的视频数据
        this.getVideoListData(this.videoGroup)
        this.$store.commit(ISMV, this.isMv)
      } else {
        this.isMv = false
        this.videoGroup = id
        // 开启加载提示框
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
          loadingType: 'spinner'
        })
        this.videoGroupListData = []
        this.page = 0
        // 通过对应的id来请求对应的视频数据
        this.getVideoListData(this.videoGroup)
        this.$store.commit(ISMV, this.isMv)
      }
    },
    pullingDown () {
      this.getVideoListData(this.videoGroup)
      this.$refs.scroll.finishPullDown()
    },
    pullingUp () {
      // 开启加载提示框
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner'
      })
      this.getVideoListData(this.videoGroup, this.page)
    },
    // 获取视频的详情信息
    async getVideoDetail (id) {
      const res = await getVideoDetail(id)
      this.$store.commit(GETVIDEODETAIL, res.data)
    },
    // 获取视频的播放地址
    async getVideoPlayAddress (id) {
      const res = await getVideoPlayAddress(id)
      this.$store.commit(GETVIDEOUrl, res.urls)
    },
    // 获取视频评论数量等信息
    async getVideoDetailInfo (id) {
      const res = await getVideoDetailInfo(id)
      this.$store.commit(GETVIDEODETAILINFO, res)
    },
    // 获取点击的mv的详细信息
    async getMvDetail (id) {
      const res = await getMvDetail(id)
      this.$store.commit(GETMVDETAIL, res.data)
    },
    // 获取mv播放地址
    async getMvAddress (id) {
      const res = await getMvAddress(id)
      this.$store.commit(GETMVADDRESS, res.data)
    },
    // 获取mv评论数量等信息
    async getMvDetailInfo (id) {
      const res = await getMvDetailInfo(id)
      this.$store.commit(GETMVDETAILINFO, res)
    }
  }
}
</script>

<style scoped lang="less">
#cloudVillage {
  height: 100vh;
  padding: 0 10px;
  background-color: #fff;

  .nav-bar {
    position: relative;
    z-index: 1;
    background-color: #fff;

    .cloudVillage-title {
      span {
        display: inline-block;
        width: 50px;
        margin-right: 20px;
        font-size: 18px;
        color: #919191;
        height: 40px;
      }

      .active {
        color: #000;
        font-weight: 600;
        border-bottom: 4px solid #fe8787;
      }
    }

    .icon-tianjia {
      color: #fe8787;
    }

    .iconfont {
      font-size: 22px;
    }
  }

  .horizontal {
    position: relative;
    z-index: 1;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 140px);
    overflow: hidden;
  }
}
</style>
