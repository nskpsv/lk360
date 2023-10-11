<script lang="ts" setup>
import { ref, watch } from 'vue';

type Props = {
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
  started: boolean;
};

const props = defineProps<Props>();

let hh = ref(Number(props.hours));
let mm = ref(Number(props.minutes));
let ss = ref(Number(props.seconds));
let timer: number;

function startTimer() {
  timer = setInterval(() => {
    if (ss.value === 0) {
      if (mm.value === 0) {
        if (hh.value === 0) {
          clearInterval(timer);
          return;
        } else {
          hh.value = hh.value - 1;
          ss.value = 60;
          mm.value = 60;
        }
      } else {
        mm.value = mm.value - 1;
        ss.value = 60;
      }
    }

    ss.value = ss.value - 1;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

watch(
  () => props.started,
  (newValue) => {
    if (newValue) {
      startTimer();
    } else {
      stopTimer();
    }
  },
);
</script>

<template>
  <div class="timer">
    <p class="title">Limited offer ends in:</p>

    <div class="counter">
      <div class="hours">
        <p class="value">{{ hh.toString().length < 2 ? `0${hh}` : hh }}</p>
        <p class="caption">hrs</p>
      </div>

      <p class="colon">:</p>

      <div class="minutes">
        <p class="value">{{ mm.toString().length < 2 ? `0${mm}` : mm }}</p>
        <p class="caption">min</p>
      </div>

      <p class="colon">:</p>

      <div class="seconds">
        <p class="value">{{ ss.toString().length < 2 ? `0${ss}` : ss }}</p>
        <p class="caption">sec</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timer {
  .title {
    font-size: 1.4rem;
    line-height: normal;
    color: #4f647a;
    margin: 0;
  }

  .counter {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 1.2rem;
    .value {
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 600;
      color: #007aff;
      margin: 0;
    }
    .colon {
      font-size: 1.6rem;
      line-height: 2rem;
      color: #007aff;
      padding: 0 1.2rem;
      margin: 0;
    }
    .caption {
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin: 0;
    }
  }
}
</style>
