<script lang="ts" setup></script>

<template>
  <div class="pay-view-wrapper">
    <div class="content"></div>
    <p>PAY VIEW</p>
  </div>
</template>

<style lang="scss" scoped>
.pay-view-wrapper {
  height: 100vh;
  height: 100svh;
  display: flex;
  flex-direction: column;
  .content {
    flex-grow: 1;
  }
}

// Fix scroll in old Safari, when height: 100vh
// https://qna.habr.com/q/953445
@supports (-webkit-touch-callout: none) {
  .price-view-wrapper {
    height: -webkit-fill-available;
  }
}
</style>
