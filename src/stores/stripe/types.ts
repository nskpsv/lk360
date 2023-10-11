import type { Config, Customer } from '@/api/stripe/types';

export type StripeStore = {
  config: Config | null;
  customer: Customer | null;
  selectedPriceId: string;
};
