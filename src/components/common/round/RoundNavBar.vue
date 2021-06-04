<template>
  <div class="roundNavBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RoundNavBar',
  data() {
    return {}
  },
}
</script>

<style scoped lang="less">
.roundNavBar {
  display: flex;
  width: 100%;
  height: 78px;
}
</style>
