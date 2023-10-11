<script lang="ts" setup>
import CheckBox from './CheckBox.vue';

type Props = {
  selected: boolean;
  popular: boolean;
  price: number | string;
  productName: string;
};

defineProps<Props>();
</script>

<template>
  <div :class="{ item: true, selected }">
    <div class="title">
      <CheckBox :value="selected" type="border" />
      <p class="text">{{ productName }}</p>
    </div>
    <div class="popular" v-if="popular">
      <p>most popular</p>
    </div>
    <div class="price">
      <p class="value">{{ `$${price}` }}</p>
      <p class="caption">per week</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  border-radius: 1.6rem;
  padding: 1.2rem;
  background-color: #edf0f2;
  display: flex;
  justify-content: space-between;
  position: relative;

  .title {
    display: flex;
    align-items: center;
    .text {
      font-size: 1.6rem;
      line-height: 2rem;
      margin: 0 0 0 1.2rem;
    }
  }

  .popular {
    padding: 0.4rem 1rem;
    border-radius: 1rem;
    background-color: #007aff;
    position: absolute;
    right: 6.6rem;
    top: -1.2rem;
    p {
      color: white;
      margin: 0;
      text-transform: uppercase;
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }

  .price {
    .value {
      font-size: 1.6rem;
      line-height: 2rem;
      margin: 0;
    }
    .caption {
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin: 0;
    }
  }
}
.selected {
  background-color: #007aff1a;
}
</style>
