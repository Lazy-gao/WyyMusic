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
      scroll: {}
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    scrollX: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: this.scrollX,
        scrollY: false,
        click: true,
        probeType: this.probeType // listening scroll event
      })
    },

    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    }
  },
  beforeDestroy() {
    this.scroll.destroy()
  }
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
