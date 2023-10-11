import type { Customer, Config } from '@/api/stripe/types';
import { defineStore } from 'pinia';
import type { StripeStore } from './types';

export const useStripeStore = defineStore('stripe', {
  state: (): StripeStore => ({
    customer: null,
    config: null,
    selectedPriceId: '',
  }),
  actions: {
    setCustomer(customer: Customer) {
      this.customer = customer;
    },
    setConfig(config: Config) {
      this.config = config;
    },
    selectPrice(id: string) {
      this.selectedPriceId = id;
    },
  },
});
