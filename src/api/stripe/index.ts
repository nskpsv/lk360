import axios from 'axios';
import type { SignInResponse, CreateCustomerResponse, Config } from './types';

const BUNDLE_ID = 'some.shit.rtk';

const instance = axios.create({
  baseURL: 'https://stripes.dkotrack.com/api/',
});

function handleError(errID: string, err: any) {
  let message = '';
  if (axios.isAxiosError(err)) {
    message = err.message;
  } else if (err.response.data) {
    message = err.response.data;
  } else {
    message = err;
  }
  console.error(`${errID} \n`, message);
}

export const stripeAPI = {
  createCustomer: async (email: string) => {
    try {
      const { data } = await instance.post<CreateCustomerResponse>('stripe/create-customer', {
        bundle_id: BUNDLE_ID,
        email,
      });

      return data;
    } catch (error: any) {
      handleError('Create customer error:', error);

      return false;
    }
  },

  signIn: async (email: string, password: string) => {
    try {
      const { data } = await instance.post<SignInResponse>('user/sign_in', {
        email,
        password,
      });

      instance.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${data.token}}`;
        return config;
      });

      return true;
    } catch (error) {
      handleError('Sign in error: \n', error);

      return false;
    }
  },

  getStripeConfig: async () => {
    try {
      const { data } = await instance.get<Config>('stripe/config');

      return data;
    } catch (error) {
      handleError('Getting config error: \n',error);

      return false;
    }
  },
};
