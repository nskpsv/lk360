<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

type Props = {
  maxValue: number
  currentValue: number
}

const props = withDefaults(defineProps<Props>(), {
  maxValue: 100,
  currentValue: 1
})

const bar = ref<HTMLDivElement>()
const progress = ref<HTMLDivElement>()
const progressWidth = ref('0')

watch(() => props.currentValue, () => {
    progressWidth.value =
      `${(bar.value?.clientWidth! / props.maxValue) * props.currentValue}px` ?? '0'
})

onMounted(
  () =>
    (progressWidth.value =
      `${(bar.value?.clientWidth! / props.maxValue) * props.currentValue}px` ?? '0')
)
</script>

<template>
  <div ref="bar" class="bar">
    <div class="background"></div>
    <div ref="progress" class="progress"></div>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 0.6rem;
  position: relative;
  border-radius: 0.6rem;
  overflow: hidden;
  .background {
    width: 100%;
    height: 100%;
    background-color: #007aff;
    opacity: 0.2;
  }
  .progress {
    position: absolute;
    top: 0;
    width: v-bind(progressWidth);
    height: 0.6rem;
    background-color: #007aff;
    border-radius: 0.6rem;
    transition: width 0.3s ease-out;
  }
}
</style>
