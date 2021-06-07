<template>
  <div class="look-content-item">
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
  name: 'LookContentItem',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.look-content-item {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 144px;
  margin-right: 20px;

  img {
    width: 105px;
    height: 105px;
    border-radius: 10px;
  }
  .count {
    position: absolute;
    top: 4px;
    right: 0;
    font-size: 12px;
    padding: 2px 10px;
    border-radius: 15px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 32px;
    font-size: 14px;
    white-space: normal;
  }
}
</style>
