<template>
  <round-nav-bar>
    <cross-scroll class="crossScroll" ref="crossScroll">
      <round-nav-bar-item v-for="item in roundData" :key="item.name">
        <template v-slot:top>
          <img :src="item.iconUrl" @load="imageLoad" />
        </template>
        <template v-slot:bottom>
          <span>{{ item.name }}</span>
        </template>
      </round-nav-bar-item>
    </cross-scroll>
  </round-nav-bar>
</template>

<script>
import RoundNavBar from './round/RoundNavBar'
import RoundNavBarItem from './round/RoundNavBarItem'
import CrossScroll from './scroll/CrossScroll'

export default {
  name: 'MainRoundNavBar',
  components: {
    RoundNavBar,
    RoundNavBarItem,
    CrossScroll
  },
  props: {
    roundData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    imageLoad() {
      this.$refs.crossScroll.refresh()
      this.$bus.$emit('imageLoad')
    }
  }
}
</script>

<style scoped lang="less">
.crossScroll {
  width: 100%;
}
</style>
