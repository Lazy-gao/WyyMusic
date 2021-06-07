<template>
  <find-content>
    <cross-scroll ref="crossScroll" class="crossScroll">
      <find-content-item v-for="item in creatives" :key="item.anchorId">
        <div class="top">
          <slot name="top"></slot>
        </div>
        <template v-slot:top>
          <img :src="item.bgUrl" @load="imageLoad" />
          <!--          <span class="iconfont icon-bofang count">{{ item.label }}</span>-->
          <div class="mask">
            <span class="iconfont icon-bofang count">{{ item.label }}</span>
            <span class="ktvTitle">{{ item.title }}</span>
            <div class="user">
              <img :src="item1.avatarUrl" alt="" v-for="item1 in item.onlineUserList" :key="item1.userId" />
            </div>
          </div>
        </template>
      </find-content-item>
    </cross-scroll>
  </find-content>
</template>

<script>
import FindContent from 'components/common/findContent/FindContent'
import findContentItem from 'components/common/findContent/findContentItem'
import CrossScroll from 'components/common/scroll/CrossScroll'
import { bigNumberTransform } from 'common/utils'

export default {
  name: 'Ktv',
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
