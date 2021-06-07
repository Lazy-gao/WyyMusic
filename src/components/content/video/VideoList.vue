<template>
  <div class="videoList">
    <video-list-item v-for="(item, index) in videoList" :key="index" :video-list-item="item" />
  </div>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  props: {
    videoList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    VideoListItem
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.videoList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px;
  margin-top: 10px;
  background-color: #fbfbfb;
}
</style>
