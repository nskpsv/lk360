<script lang="ts" setup>
import CheckBox from './CheckBox.vue';

type Props = {
  /**
   * @description Defines checkbox display for multiple responses
   * @type {boolean}
   * @default false
   */
  selectable: boolean;
  /**
   * @description Contains status indication: selected / not selected
   * @type {boolean}
   * @default false
   */
  selected: boolean;
};

withDefaults(defineProps<Props>(), {
  selectable: false,
  selected: false,
});

const emit = defineEmits<{
  (e: 'update:selected', value: boolean): boolean;
}>();
</script>

<template>
  <div :class="{ answer: true, selected }" @click="emit('update:selected', !selected)">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
    <CheckBox v-show="selectable" :value="selected" />
  </div>
</template>

<style lang="scss" scoped>
.answer {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem;
  border-radius: 16px;
  background-color: #edf0f2;
  // height: 8.4rem;

  .text {
    text-align: start;
    font-size: 1.6rem;
    line-height: 2rem;
  }
}
.selected {
  background: rgba(0, 122, 255, 0.2);
}

@media screen and (min-width: 600px) {
  .answer {
    padding: 1.6rem;

    .icon {
      :deep(svg) {
        width: 6.5rem;
        height: 6.5rem;
      }
    }
    .text {
      font-size: 2rem;
      line-height: 2.4rem;
    }
  }
}
</style>
