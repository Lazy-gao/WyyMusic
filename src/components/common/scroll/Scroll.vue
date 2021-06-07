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
      default: 0
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
        probeType: this.probeType
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    }
  }
}
</script>

<style scoped></style>
