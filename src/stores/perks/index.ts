import { defineStore } from 'pinia';
import { perks } from './perks';

export function getTotalPerks() {
  return perks.length;
}

export const usePerksStore = defineStore('perks', {
  state() {
    return {
      perks,
      currentPerk: -1,
    };
  },

  actions: {
    getNextPerk() {
      this.currentPerk++;
      return {
        perk: perks[this.currentPerk],
        hasNext: !!perks[this.currentPerk + 1],
      };
    },
  },
});
