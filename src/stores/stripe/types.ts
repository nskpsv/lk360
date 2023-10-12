import type { Config, Customer } from '@/api/stripe/types';
import type { Stripe } from '@stripe/stripe-js';

export type StripeStore = {
  config: Config | null;
  customer: Customer | null;
  selectedPriceId: string;
  stripe: Stripe | null;
};
