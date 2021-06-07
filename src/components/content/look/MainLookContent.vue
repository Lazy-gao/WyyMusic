<template>
  <look-content>
    <cross-scroll ref="crossScroll" class="crossScroll">
      <look-content-item v-for="item in creatives" :key="item.anchorId">
        <template v-slot:top>
          <img :src="item.verticalCover" @load="imageLoad" />
          <span class="iconfont icon-bofang count">{{ item.popularity | sellCountFilter }}{{ ' . ' + item.privateTag.substr(0, 2) }}</span>
        </template>
        <template v-slot:bottom>
          <span class="title">{{ item.title }}</span>
        </template>
      </look-content-item>
    </cross-scroll>
  </look-content>
</template>

<script>
import LookContent from './LookContent'
import LookContentItem from './LookContentItem'
import CrossScroll from '../../common/scroll/CrossScroll'
import { bigNumberTransform } from 'common/utils'

export default {
  name: 'MainLookContent',
  props: {
    creatives: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    LookContent,
    LookContentItem,
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
