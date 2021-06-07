<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullDown)

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullDownRefresh: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullDownRefresh: this.pullDownRefresh
      })
      this.scroll.on('pullingDown', this.pullingDownHandler)
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    pullingDownHandler() {
      this.$emit('pullingDown')
    },
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown && this.scroll.finishPullDown()
    }
  }
}
</script>

<style scoped></style>
