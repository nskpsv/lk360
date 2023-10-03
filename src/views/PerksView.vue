<script lang="ts" setup>
import ProgressBar from '@/components/ProgressBar.vue';
import router from '@/router';
import { useProgressStore } from '@/stores';
import { usePerksStore } from '@/stores/perks';
import { onUpdated, ref, toRefs } from 'vue';
import { useDebounce } from '../hooks/use-debounce';

const progress = useProgressStore();
const perks = usePerksStore();
const { hasNext: hasNextPerk, perk: currentPerk } = toRefs(ref(perks.getNextPerk()).value);
const email = ref('');
const input = ref<HTMLInputElement>();
const container = ref<HTMLDivElement>();
const error = ref<boolean>(false);
let focused = false;

window.visualViewport!.addEventListener('resize', useDebounce(onResize, 50));

function onResize(e: Event) {
  const vvp = e.target as VisualViewport;
  container.value!.style.setProperty('height', focused ? `${vvp.height}px` : '100svh');
}

function onContinue() {
  if (email.value) {
    onEmailSubmit();
    return;
  }

  progress.incrementPropgress();

  if (hasNextPerk.value) {
    const { hasNext, perk } = perks.getNextPerk();

    currentPerk.value = perk;
    hasNextPerk.value = hasNext;
  } else {
    router.push({ name: progress.nextStep(), replace: true });
  }
}

function onEmailInput(e: Event) {
  const input = e.target as HTMLInputElement;

  error.value = false;
  email.value = input.value;
}

function onEmailSubmit() {
  error.value = !/\b\w+@\w+\.[A-z]{2,}\b/gi.test(email.value);
  
  // go to the next step logic
}

onUpdated(() => {
  input.value?.focus();
});
</script>

<template>
  <div class="perks-view-wrapper" ref="container">
    <header class="header">
      <ProgressBar :max-value="progress.total" :current-value="progress.current" />
      <p class="title main-text">{{ currentPerk.title }}</p>
      <p class="caption caption-text">{{ currentPerk.caption }}</p>
    </header>
    <main class="content" :style="{ backgroundImage: `url(${currentPerk.content}` }">
      <input
        v-if="!currentPerk.content"
        ref="input"
        :class="{ 'email-input': true, error }"
        type="email"
        :value="email"
        @focus="() => (focused = true)"
        @blur="() => (focused = false)"
        @input="onEmailInput"
        placeholder="Email"
      />
    </main>
    <footer class="footer">
      <button
        class="continue-button"
        @click="onContinue"
        :disabled="(!currentPerk.content && !email) || error"
        autofocus
      >
        Continue
      </button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.perks-view-wrapper {
  // if browser is not supported svh, height wil be 100vh
  height: 100vh;
  height: 100svh;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  .header {
    .title {
      margin: 0;
    }
    .caption {
      margin: 1.2rem 0 0;
    }
  }

  .content {
    flex-grow: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    .email-input {
      width: 100%;
      border: none;
      font-size: 1.4rem;
      margin-top: 3.8%;
      line-height: normal;
      border-radius: 1.6rem;
      padding: 1.5rem 1.6rem;
      background-color: #f2f2f2;
      outline: none;
    }

    .error {
      background-color: #f8cdcd;
      border: 1px solid #f64e05;
    }
  }
}

// Fix scroll in old Safari, when height: 100vh
// https://qna.habr.com/q/953445
@supports (-webkit-touch-callout: none) {
  .perks-view-wrapper {
    height: -webkit-fill-available;
  }
}
</style>
