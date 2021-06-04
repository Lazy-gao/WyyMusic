<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;

  .left {
    width: 30px;
  }

  .content {
    flex: 1;
    margin: 0 10px;
  }

  .right {
    width: 30px;
  }
}
</style>
