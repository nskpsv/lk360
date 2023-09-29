import { defineStore } from 'pinia';
import { questions, initialQuestion, questionsList } from './questions';

import type { QuestionId } from './types';

function getClearState() {
  
  return {
    progress: {
      total: 1 + questionsList.length,
      current: -1,
    },
    initialQuestion,
    questions,
    answers: {
      who: 'initial',
      notifiedLocations: new Array<string>(),
      reason: '',
      checkFrequency: '',
      updateFrequency: '',
      inappropriateLocations: new Array<string>(),
      trackingPeoples: '',
      features: new Array<string>(),
    },
  };
}

export const useQuizStore = defineStore('quiz', {
  state: () => getClearState(),

  actions: {
    getInitialQuestion() {
      return this.initialQuestion;
    },

    getNextQuestion() {
      this.progress.current++;

      return questions[this.answers.who.toLowerCase() as keyof typeof questions][
        this.progress.current
      ];
    },

    getProgress() {
      return this.progress;
    },

    setAnswer(id: QuestionId, value: string) {
      if (Array.isArray(this.answers[id])) {
        (this.answers[id] as string[]) = this.answers[id].includes(value)
          ? (this.answers[id] as string[]).filter((item) => item !== value)
          : [...this.answers[id], value];
      } else {
        (this.answers[id] as string) = this.answers[id] === value ? '' : value;
      }
    },
  },
});
