<script lang="ts" setup>
import { useUserStore, useStripeStore, useProgressStore } from '@/stores';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { onMounted, ref } from 'vue';
import { stripeAPI } from '@/api/stripe';
import OfferTimerVue from '@/components/OfferTimer.vue';
import PriceItem from '@/components/PriceItem.vue';
import Locate360Icon from '@/components/icons/Locate360Icon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import GeoPointerIcon from '@/components/icons/GeoPointerIcon.vue';
import ChatBotIcon from '@/components/icons/ChatBotIcon.vue';
import RingIcon from '@/components/icons/RingIcon.vue';
import FlagIcon from '@/components/icons/FlagIcon.vue';
import ReviewCard from '@/components/ReviewCard.vue';

import authorPhoto from '@/assets/images/review-author.webp';

const PASSWORD = 'yXaFpHUUCWKPKkBM';

const user = useUserStore();
const stripe = useStripeStore();
const progress = useProgressStore();
const isFetching = ref(true);

const reviews = [
  'Great app for keeping up with teens that are always on the move between sports, school and friends. After using an app for 3 weeks, it has worked flawlessly.',
  'Perfect for android to iphone. I have dementia the early stages:(This will help in the future for my family.',
  'Useful for parents to keep tabs on minors and elderly family members... Displaying physical addresses at each tracking location along a route is impressive..',
];

onMounted(async () => {
  console.log('your e-mail: \n', user.email);
  // STEP -1- Creating customer
  console.log('Creating customer...');

  const response = await stripeAPI.createCustomer(user.email);

  if (response) {
    console.log('Customer created: \n', response);
    user.setUser(response.user);

    if (response.customer) {
      stripe.setCustomer(response.customer);
    }
  } else {
    isFetching.value = false;
    return;
  }

  //STEP -2- Sign in
  console.log('Sign in...');

  const signInResult = await stripeAPI.signIn(user.email, PASSWORD);

  //STEP -3- Get Stripe config
  if (signInResult) {
    console.log('we are signed in, now gettin config...');

    const response = await stripeAPI.getStripeConfig();

    if (response) {
      console.log('we have config:\n', response);
      stripe.setConfig(response);
      stripe.selectPrice(response.prices[0].id);
    }
  } else {
    isFetching.value = false;
    return;
  }

  isFetching.value = false;
});

console.log('stripe store: \n', stripe.$state);
</script>

<template>
  <div class="price-view-wrapper">
    <div class="content">
      <div class="loader" v-show="isFetching">
        <LoadingSpinner />
        <p class="working">Working...</p>
      </div>

      <div class="header">
        <Locate360Icon />
        <p class="title">
          Based on your answers, <br />
          this is the best plan for you.
        </p>
      </div>

      <OfferTimerVue hours="0" minutes="10" seconds="0" :started="!isFetching" />

      <div class="price-list">
        <PriceItem
          v-for="(item, i) in stripe.config?.prices"
          :key="item.id"
          :popular="i === 0"
          :price="item.unit_amount / 100"
          :product-name="`${item.product.name}`"
          :selected="item.id === stripe.selectedPriceId"
          @click="() => stripe.selectPrice(item.id)"
        />
      </div>

      <div class="what-you-get">
        <p class="title">What you get</p>
        <ul class="perks-list">
          <li class="perk">
            <SearchIcon />
            <span>Fast request by number</span>
          </li>
          <li class="perk">
            <GeoPointerIcon />
            <span>Accurate real-time location</span>
          </li>
          <li class="perk">
            <ChatBotIcon />
            <span>AI Chat Bot</span>
          </li>
          <li class="perk">
            <RingIcon />
            <span>Unlimited notifications</span>
          </li>
          <li class="perk">
            <FlagIcon />
            <span>Build a route between friends</span>
          </li>
        </ul>
      </div>

      <div class="reviews">
        <p class="title">Customer reviews</p>
        <ul class="reviews-list">
          <li v-for="(text, i) in reviews" :key="i">
            <ReviewCard :photo-url="authorPhoto" name="Kris Iverson" :text="text" />
          </li>
        </ul>
      </div>
    </div>
    <footer class="footer">
      <button
        class="continue-button"
        @click="() => $router.push({ name: progress.nextStep(), replace: true })"
      >
        Continue
      </button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.price-view-wrapper {
  height: 100vh;
  height: 100svh;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 600;
  }
  .content {
    flex-grow: 1;
    display: grid;
    gap: 2.8rem;
    align-items: center;
    padding: 0 3rem;
    overflow-y: auto;
    .loader {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;
    }
    .working {
      font-size: 1.6rem;
      font-weight: 600;
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 0;
    }
    .title {
      margin: 2rem 0 0;
    }
    .price-list {
      width: 100%;
      display: grid;
      gap: 1rem;
    }
    .what-you-get {
      .title {
        margin: 0;
      }
    }
    .perks-list {
      list-style: none;
      margin: 2rem auto 0;
      width: fit-content;
      padding: 0;
      text-align: left;
      display: grid;
      gap: 1.2rem;
    }
    .perk {
      display: flex;
      align-items: center;
      font-size: 1.4rem;

      span {
        margin-left: 0.8rem;
      }
    }
    .reviews {
      .title {
        margin: 0;
      }
    }
    .reviews-list {
      list-style: none;
      margin: 1.9rem 0 0;
      padding: 0;
      display: grid;
      gap: 1.2rem;
    }
  }
}

// Fix scroll in old Safari, when height: 100vh
// https://qna.habr.com/q/953445
@supports (-webkit-touch-callout: none) {
  .price-view-wrapper {
    height: -webkit-fill-available;
  }
}
</style>
