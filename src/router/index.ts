import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useProgressStore } from '@/stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quiz',
      name: 'quiz',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuizView.vue'),
    },
    {
      path: '/perks',
      name: 'perks',
      component: () => import('../views/PerksView.vue'),
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('../views/PriceView.vue'),
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('../views/PayView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'home' && !from.name) next({ name: 'home' });
  else next();
});

export default router;
