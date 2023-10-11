export type User = {
  app_id: string;
  customer_id: string;
  email: string;
  id: number | null;
  sub_expire_at: number | null;
};

export type Customer = {
  address: {
    city: string;
    country: string;
    line1: string;
    line2: string;
    postal_code: string;
    state: string;
  };
  balance: number;
  cash_balance: number | null;
  created: number;
  currency: string;
  default_currency: string;
  default_source: null; //? type
  deleted: boolean;
  delinquent: boolean;
  description: string;
  discount: null; //? type
  email: string;
  id: string;
  invoice_credit_balance: null; //? type
  invoice_prefix: string;
  invoice_settings: {
    custom_fields: null; //? type
    default_payment_method: null; //? type
    footer: string;
    rendering_options: null; //? type
  };
  livemode: boolean;
  metadata: {}; //? type
  name: string;
  next_invoice_sequence: number;
  object: string; //? or "customer" | "..."
  phone: string;
  preferred_locales: []; //? type
  shipping: null; //? type
  sources: null; //? type
  subscriptions: null; //? type
  tax: null; //? type
  tax_exempt: string; // or "none" | '...
  tax_ids: null; //? type
  test_clock: null; //? type
};

export type Product = {
  active: boolean;
  attributes: null; // what type?
  caption: string;
  created: number;
  deactivate_on: null; // what type?
  default_price: null; // what type?
  deleted: boolean;
  description: string;
  id: string;
  images: null; // what type?
  livemode: boolean;
  metadata: null; // what type?
  name: string;
  object: string;
  package_dimensions: null; // what type?
  shippable: boolean;
  statement_descriptor: string;
  tax_code: null; // what type?
  type: string;
  unit_label: string;
  updated: number;
  url: string;
};

export type Price = {
  active: boolean;
  billing_scheme: string; //or 'per_unit' | '...'
  created: number;
  currency: string; // or fixed 'usd' or 'usd' | '...'
  currency_options: null; // what type?
  custom_unit_amount: null; // what type?
  deleted: boolean;
  id: string;
  livemode: boolean;
  lookup_key: string; // or 'sample_basic' | '...'
  metadata: object;
  nickname: string;
  object: string; // or 'price' | '...'
  product: Product;
  recurring: {
    aggregate_usage: string;
    interval: string; // or 'month' | '...'
    interval_count: number;
    trial_period_days: number;
    usage_type: string; //or 'licensed' | '...'
  };
  tax_behavior: string; //or 'unspecified' | '...'
  tiers: null; // what type?
  tiers_mode: string;
  transform_quantity: null; // what type?
  type: string; // or 'recurring' | '...'
  unit_amount: number;
  unit_amount_decimal: string;
};

export type Config = {
  prices: Price[];
  publishableKey: string;
};

export type CreateCustomerResponse = {
  passwd: string;
  user: User;
  customer: Customer | null;
};

export type SignInResponse = {
  user: User;
  token: string;
};
