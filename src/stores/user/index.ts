import { defineStore } from 'pinia';
import type { User } from '@/api/stripe/types';

export const useUserStore = defineStore('user', {
  state: (): User => ({
      app_id: '',
      customer_id: '',
      email: '',
      id: null,
      sub_expire_at: null,
  }),
  actions: {
    setUser(user: User) {
      this.$state = user;
    },
    setUserEmail(email: string) {
      this.email = email;
    },
  },
});
