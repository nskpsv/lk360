<script lang="ts" setup>
import { computed } from 'vue'

type Props = {
  /**
   * @description Sets the color of the pointer frame around the photo
   * @type {string}
   * @default 'black'
   * @example <IconPersonPointer color="#29fa43">
   */
  color?: string
  /**
   * @description Sets the photo size in 1x1 ratio
   * @type {string | number}
   * @default 52
   * @example <IconPersonPointer size="62">
   */
  size?: number | string
  /**
   * @description Image URL
   * @type {string}
   * @requires
   */
  photoSrc: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'black',
  size: 52
})

const photoSize = computed(() => `${Number(props.size) / 10}rem`)
</script>

<template>
  <div class="photo-frame">
    <div class="photo">
      <img class="image" :src="photoSrc" :width="size" :height="size" alt="i" />
    </div>
    <!-- <div class="tail"> -->
      <svg class="tail" viewBox="0 0 20 4" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0 0, 20 0, 10 4" />
      </svg>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.photo-frame {
  display: inline-block;
  position: relative;
  line-height: 0;
  .photo {
    line-height: 0;
    width: v-bind(photoSize);
    height: v-bind(photoSize);
    overflow: hidden;
    border-radius: calc(v-bind(photoSize) * 0.315);
    border: calc(v-bind(photoSize) * 0.0526) solid v-bind(color);
    display: flex;
    justify-content: center;
    .image {
      object-fit: cover;
      object-position: top;
    }
  }
  .tail {
    width: calc(v-bind(photoSize) * 0.6);
    fill: v-bind(color);
    display: block;
    margin: calc(-1 * (v-bind(photoSize) / 50)) auto 0;
  }
}
</style>
