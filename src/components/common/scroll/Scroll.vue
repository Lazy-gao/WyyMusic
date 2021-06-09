<template>
  <div class="wrapper"
       ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
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
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on('pullingDown', this.pullingDownHandler)
      this.scroll.on('pullingUp', this.pullingUpHandler)
    },
    refresh () {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    pullingDownHandler () {
      this.$emit('pullingDown')
    },
    pullingUpHandler () {
      this.$emit('pullingUp')
    },
    finishPullDown () {
      this.scroll && this.scroll.finishPullDown && this.scroll.finishPullDown()
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped></style>
