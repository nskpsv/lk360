<script lang="ts" setup>
type Props = {
  value: boolean;
  type?: 'gray-checkmark' | 'gray' | 'border';
};

withDefaults(defineProps<Props>(), {
  value: false,
  type: 'gray-checkmark',
});

const emit = defineEmits<{
  (e: 'update:value', value: boolean): boolean;
}>();
</script>

<template>
  <div
    :class="{ container: true, checked: value, border: type === 'border' }"
    @click="$emit('update:value', !value)"
  >
    <svg v-show="value || type === 'gray-checkmark'" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0.5"
        y1="4.5"
        x2="4"
        y2="8"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="4"
        y1="8"
        x2="11.5"
        y2="1"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4F647A4D;
}
.border {
  border: 0.1rem solid #4F647A4D;
  background-color: transparent;
}
.checked {
  background-color: #007aff;
  border-color: #007aff;
}
</style>
