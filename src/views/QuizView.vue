<script lang="ts" setup>
import ProgressBar from '@/components/ProgressBar.vue';
import { useQuizStore } from '@/stores/quiz';

const { getNextQuestion, setAnswer, getProgress } = useQuizStore();
const progress = getProgress();
let question = getNextQuestion();
</script>

<template>
  <div class="content">
    <header class="header">
      <div class="progress">
        <ProgressBar :max-value="progress.total" :current-value="progress.current" />
        <button class="skip-button">Skip</button>
      </div>
      <p class="question">
        {{ question.question }}
      </p>
    </header>
    <main>
      <!-- <component :is="questions.initial[0].answers[0].icon" /> -->
      
    </main>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 0 3rem;

  .header {
    margin-top: 8%;

    .progress {
      display: flex;
      align-items: center;
      padding: 1.2rem 0;
    }

    .skip-button {
      margin-left: 2rem;
      background-color: transparent;
      border: none;
      font-size: 1.4rem;
      line-height: normal;
      color: #4f647a;
    }

    .question {
      font-size: 2.4rem;
      line-height: normal;
      font-weight: 600;
    }
  }
}
</style>
