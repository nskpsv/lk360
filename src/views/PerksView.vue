<script lang="ts" setup>
import ProgressBar from '@/components/ProgressBar.vue';
import router from '@/router';
import { useProgressStore, useStripeStore, usePerksStore, useUserStore } from '@/stores';
import { onUpdated, ref, toRefs, watch } from 'vue';
import { useDebounce } from '../hooks/use-debounce';
import { loadStripe } from '@stripe/stripe-js/pure';

const progress = useProgressStore();
const perks = usePerksStore();
const stripe = useStripeStore();
const state = useUserStore();
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

async function onEmailSubmit() {
  error.value = !/\b\w+@\w+\.[A-z]{2,}\b/gi.test(email.value);

  if (!error.value) {
    progress.incrementPropgress();
    state.setUserEmail(email.value);
    router.push({ name: progress.nextStep(), replace: true });
  }
}

onUpdated(() => {
  input.value?.focus();
});

/*
If hasNextPerk is false, then at this time user has to enter an email,
so now it's time to download Stripe.js =)
*/
watch(hasNextPerk, (value) => {
  if (!value) {
    loadStripe('pk_test_R5gyntAtwi0m2QVbydOCYa55002bDPQVLU').then((stripeEntity) => {
      if (stripeEntity) {
        stripe.setStripeEntity(stripeEntity);
        console.log('!!!\nWe have Stripe entity\n!!!');
      }
    });
  }
});
</script>

<template>
  <div class="view-wrapper" ref="container">
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
.view-wrapper {
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
</style>
