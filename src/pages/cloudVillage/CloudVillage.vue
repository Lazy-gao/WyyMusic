<template>
  <div id="cloudVillage">
    <!--  页面导航  -->
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <span class="iconfont icon-daohang"></span>
      </template>
      <template v-slot:content>
        <div class="cloudVillage-title">
          <span :class="{ active: currentIndex === index ? 'active' : '' }" v-for="(item, index) in title" :key="index" @click="handleTitle(index)">{{
            item
          }}</span>
        </div>
      </template>
      <template v-slot:right>
        <span class="iconfont icon-tianjia"></span>
      </template>
    </nav-bar>
    <!--  列表导航  -->
    <horizontal-nav-bar class="horizontal" :horizontal-data="navBarList" @videoGroup="videoGroupId" />
    <scroll class="content" ref="scroll" :pull-down-refresh="true" @pullingDown="pullingDown">
      <!--  搜索框  -->
      <lazy-input />
      <!--   视频   -->
      <video-list :video-list="videoGroupListData" />
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/NavBar'
import HorizontalNavBar from 'components/common/HorizontalNavBar'
import LazyInput from 'components/common/LazyInput'
import VideoList from 'components/content/video/VideoList'

import { getNavBarList, getVideoListData } from 'network/cloudVillage/cloudVillage'
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
  data() {
    return {
      title: ['关注', '推荐'],
      currentIndex: 1,
      navBarList: [], // 分类列表数据
      videoGroup: '', // 视频分类id
      videoGroupListData: [] // 视频数据
    }
  },
  created() {
    this.getNavBarList()
  },
  mounted() {
    this.$bus.$on('imageLoad', () => {
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    // 点击切换导航
    handleTitle(index) {
      this.currentIndex = index
    },
    // 获取视频分类列表数据
    async getNavBarList() {
      const res = await getNavBarList()
      this.navBarList = res.data
      this.videoGroup = res.data[0].id
      // 获取视频数据
      await this.getVideoListData(this.videoGroup)
    },
    // 获取标签列表对应的视频
    async getVideoListData(id) {
      const res = await getVideoListData(id)
      // 关闭提示框
      Toast.clear()
      console.log(res)
      this.videoGroupListData = res.datas
    },
    // 监听子组件传递过来的标签列表的id,也就是点击切换标签
    videoGroupId(id) {
      this.videoGroup = id
      // 开启加载提示框
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner'
      })
      this.videoGroupListData = []
      // 通过对应的id来请求对应的视频数据
      this.getVideoListData(this.videoGroup)
    },
    pullingDown() {
      this.getVideoListData(this.videoGroup)
      this.$refs.scroll.finishPullDown()
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
