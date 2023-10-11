<script lang="ts" setup>
import AnswerItem from '@/components/AnswerItem.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import router from '@/router';
import { useQuizStore, useProgressStore } from '@/stores';
import { ref, toRef, toRefs } from 'vue';

const state = useQuizStore();
const progress = useProgressStore();
const content = ref<HTMLDivElement>();
const { question: currentQuestion, hasNext: hasNextQuestion } = toRefs(
  toRef(state.getNextQuestion()).value,
);

function checkIsSelected(value: string) {
  const answer = state.answers[currentQuestion.value.id as keyof typeof state.answers];

  if (typeof answer === 'object') {
    return answer.includes(value);
  } else {
    return answer === value;
  }
}

function onAnswer(answer: string) {
  if (currentQuestion.value.multiple) {
    state.setAnswer(currentQuestion.value.id, answer);
  } else {
    state.setAnswer(currentQuestion.value.id, answer);
    onContinue();
  }
}

function onContinue() {
  progress.incrementPropgress();

  content.value?.scrollTo(0, 0);

  if (hasNextQuestion.value) {
    const { hasNext, question } = state.getNextQuestion();

    setTimeout(() => (currentQuestion.value = question), 100);
    hasNextQuestion.value = hasNext;
  } else {
    console.log(state.answers);

    router.push({ name: progress.nextStep(), replace: true });
  }
}

function onSkip() {
  state.setAnswer(currentQuestion.value.id, 'Other');

  onContinue();
}
</script>

<template>
  <div class="view-wrapper">
    <header class="header">
      <div class="progress">
        <ProgressBar :max-value="progress.total" :current-value="progress.current" />
        <button class="skip-button caption-text" @click="onSkip">Skip</button>
      </div>
      <p class="question main-text">
        {{ currentQuestion.text }}
      </p>
    </header>
    <div ref="content" class="content">
      <AnswerItem
        v-for="(answer, i) in currentQuestion.answers"
        :key="i"
        :selectable="currentQuestion.multiple"
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
    <footer class="footer" v-show="currentQuestion.multiple">
      <button
        class="continue-button"
        @click="onContinue"
        :disabled="!state.answers[currentQuestion.id].length"
      >
        Continue
      </button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.view-wrapper {
  padding: 0 3rem;
  .header {
    background-color: #fff;
    position: sticky;
    top: 0;
    left: 0rem;
    right: 0rem;
    bottom: 0;

    .progress {
      display: flex;
      align-items: center;
    }

    .skip-button {
      margin-left: 2rem;
      background-color: transparent;
      border: none;
    }

    .question {
      margin: 1.2rem 0 0;
    }
  }
  .content {
    display: grid;
    grid-auto-rows: min-content;
    gap: 0.8rem;
  }
}
</style>
