<template>
  <find-content>
    <cross-scroll ref="crossScroll" class="crossScroll">
      <find-content-item v-for="item in creatives" :key="item.creativeId">
        <template v-slot:top v-if="creatives">
          <img :src="item.uiElement.image.imageUrl" @load="imageLoad" />
          <span class="iconfont icon-bofang count" v-if="item.resources">{{ item.resources[0].resourceExtInfo.playCount | sellCountFilter }}</span>
          <span class="iconfont icon-bofang count" v-else>{{ item.creativeExtInfoVO.playCount | sellCountFilter }}</span>
        </template>
        <template v-slot:bottom>
          <span class="title">{{ item.uiElement.mainTitle.title }}</span>
        </template>
      </find-content-item>
    </cross-scroll>
  </find-content>
</template>

<script>
import FindContent from './findContent/FindContent'
import findContentItem from './findContent/findContentItem'
import CrossScroll from './scroll/CrossScroll'
import { bigNumberTransform } from 'common/utils'

export default {
  name: 'MainContent',
  props: {
    creatives: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    FindContent,
    findContentItem,
    CrossScroll
  },
  data() {
    return {}
  },
  methods: {
    // 图片懒加载事件
    imageLoad() {
      this.$refs.crossScroll.refresh()
      this.$bus.$emit('imageLoad')
    }
  },
  filters: {
    // 格式化数字
    sellCountFilter(value) {
      return bigNumberTransform(value)
    }
  }
}
</script>

<style scoped lang="less">
.crossScroll {
  width: 100%;
}
</style>
