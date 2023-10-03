import { defineStore } from 'pinia';

export const useEmailInputStore = defineStore('email', {
  state() {
    return {
      value: '',
      error: false,
    };
  },

  actions: {
    upadateEmail(value: string) {
      this.error = false;
      this.value = value;
    },

    validate() {
      this.error = /\b\w+@\w+\.[A-z]{2,}\b/gi.test(this.value);
    },
  },
});
