<template>
  <div class="floor">
    <div class="icon">
      <span class="iconfont icon-shangla"></span>
    </div>
    <div class="floor-content">
      <span>到底了，上拉换一批新内容</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Floor',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.floor {
  height: 200px;
  text-align: center;
  font-size: 14px;
  color: #919191;

  .icon {
    margin: 40px 0 20px;
  }
}
</style>
