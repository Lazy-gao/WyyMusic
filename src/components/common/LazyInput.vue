<template>
  <div class="input">
    <div class="input-item">
      <span>请输入搜索内容</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LazyInput',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.input {
  margin-top: 10px;

  .input-item {
    position: relative;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #f4f4f4;
    border-radius: 15px;
    color: #c3c3c3;
    font-size: 16px;

    &:before {
      content: '\e61d';
      font-family: iconfont;
      position: absolute;
      top: 50%;
      left: 28%;
      transform: translateY(-50%);
      font-size: 18px;
      color: #c3c3c3;
    }
  }
}
</style>
