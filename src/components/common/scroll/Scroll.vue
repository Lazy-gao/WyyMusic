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
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: {},
    }
  },
  created() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType,
      })
    })
  },
}
</script>

<style scoped></style>
