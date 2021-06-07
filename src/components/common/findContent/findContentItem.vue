<template>
  <div class="find-content-item">
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
  name: 'findContentItem',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.find-content-item {
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

  .mask {
    position: absolute;
    top: 0;
    width: 105px;
    height: 105px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.9);
    opacity: 0.9;

    .ktvTitle {
      display: -webkit-box;
      position: absolute;
      top: 30%;
      left: 15%;
      width: 80px;
      height: 30px;
      font-size: 14px;
      color: #fff;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      white-space: normal;
      text-align: center;
    }
    .user {
      position: absolute;
      bottom: 10px;
      left: 10px;
      display: flex;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #f00;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
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
