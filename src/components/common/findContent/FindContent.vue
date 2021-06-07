<template>
  <div class="find-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FindContent',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.find-content {
  display: flex;
}
</style>
