import { getTotalQuestions } from '../quiz';
import { getTotalPerks } from '../perks';
import { defineStore } from 'pinia';
import { roadmap } from './roadmap';

export const useProgressStore = defineStore('progress', {
  state: () => ({
    total: getTotalPerks() + getTotalQuestions(),
    current: 0,
    step: roadmap[0],
  }),
  actions: {
    getProgress() {
      return {
        total: this.total,
        current: this.current,
      };
    },

    incrementPropgress() {
      if (this.current < this.total) {
        this.current++;
        return true;
      }
      return false;
    },

    nextStep() {
      this.step = roadmap[roadmap.findIndex((step) => this.step === step) + 1];
      return this.step;
    },
  },
});
