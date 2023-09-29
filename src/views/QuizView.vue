<script lang="ts" setup>
import AnswerItem from '@/components/AnswerItem.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import { useQuizStore } from '@/stores/quiz';
import { onBeforeUnmount, ref } from 'vue';

const state = useQuizStore();
const progress = state.getProgress();
const question = ref(state.getInitialQuestion());

function checkIsSelected(value: string) {
  const answer = state.answers[question.value.id as keyof typeof state.answers];

  if (typeof answer === 'object') {
    return answer.includes(value);
  } else {
    return answer === value;
  }
}

function onAnswer(answer: string) {
  if (question.value.multiple) {
    state.setAnswer(question.value.id, answer);
  } else {
    state.setAnswer(question.value.id, answer);
    onContinue();
  }
}

function onContinue() {
  setTimeout(() => (question.value = state.getNextQuestion()), 100);
}

function onSkip() {
  state.setAnswer(question.value.id, 'Other');
}

onBeforeUnmount(() => {
  state.$reset();
});
</script>

<template>
  <div class="quiz-wrapper">
    <header class="header">
      <div class="progress">
        <ProgressBar :max-value="progress.total" :current-value="progress.current + 1" />
        <button class="skip-button" @click="onSkip">Skip</button>
      </div>
      <p class="question">
        {{ question.text }}
      </p>
    </header>
    <main>
      <div class="answers">
        <AnswerItem
          v-for="(answer, i) in question.answers"
          :key="i"
          :selectable="question.multiple"
          :selected="checkIsSelected(answer.text)"
          @click="onAnswer(answer.text)"
        >
          <template v-slot:icon>
            <component :is="answer.icon" />
          </template>
          <template v-slot:text>
            <p>{{ answer.text }}</p>
          </template>
        </AnswerItem>
      </div>
    </main>
    <footer v-show="question.multiple" class="footer">
      <button
        class="continue-button"
        @click="onContinue"
        :disabled="!state.answers[question.id].length"
      >
        Continue
      </button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.quiz-wrapper {
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100svh;

  .header {
    padding: 2rem 0;
    background-color: #fff;
    position: sticky;
    top: 0;
    left: 0rem;
    right: 0rem;
    bottom: 0;

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
      margin: 1.2rem 0 0;
    }
  }

  main {
    overflow-y: auto;
  }
  .answers {
    display: grid;
    gap: 0.8rem;
  }
  .footer {
    padding: 1.2rem;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }
}

// Fix scroll in old Safari, when height: 100vh
// https://qna.habr.com/q/953445
@supports (-webkit-touch-callout: none) {
  .quiz-wrapper {
    height: -webkit-fill-available;
  }
}
</style>
