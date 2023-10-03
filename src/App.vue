<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useProgressStore } from './stores';
import router from './router';

// redirection if the application is not launched from the home view
onMounted(() => {
  const progress = useProgressStore();

  if (progress.current === 0) {
    router.push({ path: '/', replace: true });
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
