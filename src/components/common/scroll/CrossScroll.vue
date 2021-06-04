<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: 'CrossScroll',
  data() {
    return {
      scroll: {},
    }
  },
  // props: {
  //   probeType: {
  //     type: Number,
  //     default: 0,
  //   },
  //   scrollX: {
  //     type: Boolean,
  //     default: true,
  //   },
  // },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        probeType: 3, // listening scroll event
      })
      console.log(this.scroll)
      this.scroll.on('scrollStart', () => {
        console.log('scrollStart-')
      })
      this.scroll.on('scroll', ({ y }) => {
        console.log('scrolling-')
        console.log(y)
      })
      this.scroll.on('scrollEnd', () => {
        console.log('scrollingEnd')
      })
    },
  },
  beforeDestroy() {
    this.scroll.destroy()
  },
}
</script>

<style scoped lang="less">
.wrapper {
  white-space: nowrap;

  .content {
    display: inline-block;
  }
}
</style>
