import { defineStore } from 'pinia';
import { questions, initialQuestion } from './questions';

import type { Question, QuestionId, Questions } from './types';

export function getTotalQuestions() {
  // one initial question + other questions
  return 1 + questions[Object.keys(questions)[0] as keyof Questions].length;
}

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    currentQuestion: 0,
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
  }),

  actions: {
    getNextQuestion(): { question: Question; hasNext: boolean } {
      if (this.answers.who === 'initial') {
        return {
          question: this.initialQuestion,
          hasNext: true,
        };
      }

      const qID = this.answers.who.toLowerCase() as keyof Questions;
      const result = {
        question: questions[qID][this.currentQuestion],
        hasNext: !!questions[qID][this.currentQuestion + 1],
      };

      this.currentQuestion++;

      return result;
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
