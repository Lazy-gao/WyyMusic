<template>
  <div class="tab-bar-item" @click="tabBarClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    link: {
      type: String
    },
    activeColor: {
      type: String,
      default: '#ff3d33'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    isActiveColor() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    tabBarClick() {
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped lang="less">
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 50px;
  font-size: 14px;
  color: #b1b1b1;

  img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
}
</style>
