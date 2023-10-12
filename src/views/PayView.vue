<script lang="ts" setup>
import { stripeAPI } from '@/api/stripe';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { useProgressStore, useStripeStore, useUserStore } from '@/stores';
import type { Appearance, StripeElements, StripePaymentElementOptions } from '@stripe/stripe-js';
import { onMounted, ref } from 'vue';
import arrowLeft from '@/assets/images/arrow-left.svg';

const isFetching = ref(true);
const { selectedPriceId, stripe } = useStripeStore();
const { email } = useUserStore();
const progress = useProgressStore();

let elements: StripeElements;

// Show a spinner on payment submission
function setLoading(isLoading: boolean) {
  if (isLoading) {
    // Disable the button and show a spinner
    (document.querySelector('#submit') as HTMLButtonElement).disabled = true;
    document.querySelector('#spinner')!.classList.remove('hidden');
    document.querySelector('#button-text')!.classList.add('hidden');
  } else {
    (document.querySelector('#submit') as HTMLButtonElement).disabled = false;
    document.querySelector('#spinner')!.classList.add('hidden');
    document.querySelector('#button-text')!.classList.remove('hidden');
  }
}

function showMessage(messageText: string) {
  alert(messageText);
  // const messageContainer = document.querySelector('#payment-message') as HTMLDivElement;

  // messageContainer.classList.remove('hidden');
  // messageContainer.textContent = messageText;

  // setTimeout(function () {
  //   messageContainer.classList.add('hidden');
  //   messageContainer.textContent = '';
  // }, 4000);
}

async function handleSubmit() {
  setLoading(true);

  const resp = await stripe!.confirmPayment({
    elements,
    redirect: 'if_required',
    confirmParams: {
      // Make sure to change this to your payment completion page
      //return_url: "http://localhost:4242/checkout.html",
      receipt_email: email,
    },
  });
  const { error } = resp;
  console.log('payment response: \n', resp);

  // This point will only be reached if there is an immediate error when
  // confirming the payment. Otherwise, your customer will be redirected to
  // your `return_url`. For some payment methods like iDEAL, your customer will
  // be redirected to an intermediate site first to authorize the payment, then
  // redirected to the `return_url`.
  if (error && (error.type === 'card_error' || error.type === 'validation_error')) {
    showMessage(error.message as string);
  } else {
    showMessage('Success!');
  }

  setLoading(false);
}

onMounted(async () => {
  stripeAPI.createSubscription(selectedPriceId).then((response) => {
    if (response && stripe) {
      const appearance: Appearance = { theme: 'stripe' };

      elements = stripe.elements({
        appearance,
        clientSecret: response.clientSecret,
      });

      const paymentElementOptions: StripePaymentElementOptions = {
        layout: 'tabs',
      };

      const paymentElement = elements.create('payment', paymentElementOptions);
      paymentElement.mount('#payment-element');
      paymentElement.on('ready', () => {
        isFetching.value = false;
      });
    }
  });
});
</script>

<template>
  <div class="view-wrapper">
    <LoadingSpinner v-show="isFetching" full-screen />
    <div class="content">
      <header class="header">
        <button
          class="back"
          @click="() => $router.push({ name: progress.previousStep(), replace: true })"
        >
          <img :src="arrowLeft" alt="back" />
        </button>
        <p class="title">Checkout</p>
      </header>
      <form id="payment-form" @submit.prevent="handleSubmit">
        <div id="payment-element">
          <!--Stripe.js injects the Payment Element-->
        </div>
        <div class="submit-section">
          <button id="submit" class="continue-button">
            <LoadingSpinner class="hidden" id="spinner" :full-screen="false" />
            <span id="button-text">Continue</span>
          </button>
          <p class="money-back">🔒 <span class="text">Money back guarantee</span></p>
        </div>
        <div id="payment-message" class="hidden"></div>
      </form>
    </div>
    <footer class="footer">
      <a href="#" class="link">Privacy Policy</a>
      <a href="#" class="link">Terms of Use</a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.view-wrapper {
  padding: 0 3rem;
  position: relative;
  .header {
    position: relative;
    .back {
      position: absolute;
      left: 0;
      border: none;
      background-color: transparent;
    }
    .title {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: normal;
      margin: 0;
    }
  }
  .submit-section {
    margin-top: 1rem;
    #submit {
      position: relative;
      overflow: visible;
    }
    .money-back {
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin: 1.2rem 0 0;
      .text {
        opacity: 0.5;
      }
    }
  }
  .footer {
    position: static;
    display: flex;
    justify-content: space-around;
    .link {
      font-size: 1.2rem;
      line-height: 2.2rem;
      font-weight: 500;
      color: var(--color-text-blue);
    }
  }
}
.hidden {
  display: none;
}
#submit {
  position: relative;
  height: 5.4rem;
}
#spinner {
  position: absolute;
  line-height: 0;
  top: -0.8rem;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  :deep(svg) {
    width: 7rem;
    height: 7rem;
  }
  :deep(.working) {
    display: none;
  }
}
</style>
