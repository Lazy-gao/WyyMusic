<template>
  <div class="headerTitle">
    <div class="header-left">
      <span>{{ title }}</span>
    </div>
    <div class="header-right">
      <div class="desc">
        <span>{{ text }}</span>
        <span class="iconfont" :class="sign"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    sign: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.headerTitle {
  display: flex;
  justify-content: space-between;
  height: 45px;
  line-height: 45px;

  .header-left {
    font-size: 18px;
    font-weight: 600;
  }

  .header-right {
    position: relative;
    padding-right: 10px;
    font-size: 12px;

    .desc {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 61px;
      height: 18px;
      line-height: 18px;
      border-radius: 25px;
      text-align: center;
      border: 1px solid #e4e4e4;
      font-size: 14px;
      color: #919191;
    }
  }
}
</style>
