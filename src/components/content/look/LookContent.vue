<template>
  <div class="look-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LookContent',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.look-content {
  display: flex;
}
</style>
