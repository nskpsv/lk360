<script lang="ts" setup>
import ProgressBar from '@/components/ProgressBar.vue'
import { useQuizStore } from '@/stores/quiz'

const state = useQuizStore()
</script>

<template>
  <div class="content">
    <header class="header">
      <ProgressBar :max-value="state.progress.total" :current-value="state.progress.current" />
      <h1>Quiz View</h1>
    </header>
    <main>

    </main>
  </div>
</template>

<style lang="scss" scoped>
.content {
    padding: 0 3rem;
    .header {
        margin-top: 8%;
    }
}
</style>
