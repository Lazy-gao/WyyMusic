<template>
  <div class="roundNavBarItem">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoundNavBarItem',
  data() {
    return {}
  },
}
</script>

<style scoped lang="less">
.roundNavBarItem {
  display: inline-block;
  width: 58px;
  height: 58px;
  margin-right: 12px;
  background-color: #db392c;
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
  color: #919191;

  img {
    width: 58px;
    height: 58px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
}
</style>
