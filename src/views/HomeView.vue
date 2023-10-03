<script setup lang="ts">
import PersonPointer from '@/components/PersonPointer.vue';
import { useProgressStore, useQuizStore } from '@/stores';
import { onMounted } from 'vue';
import p1 from '../assets/images/main-person-1.jpeg';
import p2 from '../assets/images/main-person-2.jpeg';
import p3 from '../assets/images/main-person-3.jpeg';
import p4 from '../assets/images/main-person-4.jpeg';
import p5 from '../assets/images/main-person-5.jpeg';

const quizState = useQuizStore();
const progressState = useProgressStore();

onMounted(() => {
  quizState.$reset();
  progressState.$reset();
});
</script>

<template>
  <div class="home-view-wrapper">
    <header class="header">
      <!-- <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <p class="welcome">Welcome to</p>
      <h1 class="title">Locate 360</h1>
      <p class="caption">Find out where your loved ones are</p>
    </header>
    <main class="content">
      <PersonPointer
        class="person p1"
        color="#7140FA"
        :photo-src="p1"
        size="50"
      />
      <PersonPointer
        class="person p2"
        color="#007AFF"
        :photo-src="p2"
        size="50"
      />
      <PersonPointer
        class="person p3"
        color="#FF8633"
        :photo-src="p3"
        size="56"
      />
      <PersonPointer
        class="person p4"
        color="#17B774"
        :photo-src="p4"
        size="53"
      />
      <PersonPointer
        class="person p5"
        color="#FF511B"
        :photo-src="p5"
        size="53"
      />
    </main>
    <footer class="footer">
      <button class="continue-button" @click="$router.push({ path: '/quiz' })">Let’s Go</button>
    </footer>
  </div>
</template>

<style lang="scss">
.home-view-wrapper {
  display: flex;
  flex-direction: column;
  // if browser is not supported svh, height wil be 100vh
  height: 100vh;
  height: 100svh;

  .header {
    margin-top: 10.35%;
    .welcome,
    .title {
      margin: 0;
      font-size: 3.2rem;
      line-height: 4rem;
      font-weight: 600;
    }
    .title {
      font-weight: 700;
    }
    .caption {
      font-size: 1.4rem;
      line-height: normal;
      color: var(--color-text-blue);
      margin: 1.63% 0 0;
    }
  }
  .content {
    margin: 3% 1.6rem 0;
    flex-grow: 1;
    position: relative;
    background-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.1) 20%
      ),
      linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 20%),
      url('../assets/images/main-bg.svg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    .person {
      position: absolute;
    }
    .p1 {
      top: 10%;
      left: 10%;
    }
    .p2 {
      top: 17%;
      left: 80%;
    }
    .p3 {
      top: 35%;
      left: 35%;
    }
    .p4 {
      top: 55%;
      left: 15%;
    }
    .p5 {
      top: 70%;
      left: 63%;
    }
  }
  .footer {
    margin: 7.7% 0;
    padding-bottom: 1rem;
    align-self: center;
    width: 100%;
    max-width: 30rem;
  }
}

// Fix scroll in old Safari, when height: 100vh
// https://qna.habr.com/q/953445
@supports (-webkit-touch-callout: none) {
  .home-view-wrapper {
    height: -webkit-fill-available;
  }
}
</style>
