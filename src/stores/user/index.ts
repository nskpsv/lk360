import { defineStore } from 'pinia';
import type { User } from '@/api/stripe/types';

export const useUserStore = defineStore('user', {
  state: (): User & { isSignedIn: boolean } => ({
    app_id: '',
    customer_id: '',
    email: '',
    id: null,
    sub_expire_at: null,
    isSignedIn: false,
  }),
  actions: {
    setUser(user: User) {
      this.$state = { ...user, isSignedIn: false };
    },
    setUserEmail(email: string) {
      this.email = email;
    },
    signIn() {
      this.isSignedIn = true;
    },
    logout() {
      this.isSignedIn = false;
    },
  },
});
