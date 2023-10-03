<script lang="ts" setup>
import { computed, ref } from 'vue';

type Props = {
  maxValue: number;
  currentValue: number;
};

const props = withDefaults(defineProps<Props>(), {
  maxValue: 100,
  currentValue: 1,
});

const bar = ref<HTMLDivElement>();
const progress = ref<HTMLDivElement>();
const progressWidth = computed(
  () => `${(bar.value?.clientWidth! / props.maxValue) * props.currentValue}px` ?? '0',
);
</script>

<template>
  <div ref="bar" class="bar">
    <div class="background">
      <div ref="progress" class="progress"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  width: 100%;
  // height: 0.6rem;
  border-radius: 0.6rem;
  overflow: hidden;
  padding: 1.2rem 0;

  .background {
    position: relative;
    width: 100%;
    height: 0.6rem;
    background-color: #007bff33;
    border-radius: 0.6rem;
    // opacity: 0.2;

    .progress {
      position: absolute;
      top: 0;
      width: v-bind(progressWidth);
      height: 0.6rem;
      background-color: #007bff;
      border-radius: 0.6rem;
      transition: width 0.3s ease-out;
    }
  }
}
</style>
