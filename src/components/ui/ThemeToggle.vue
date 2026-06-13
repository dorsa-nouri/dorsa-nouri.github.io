<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="no-print inline-flex items-center justify-center rounded-lg border border-border bg-surface p-2 text-text-muted transition-colors hover:border-accent hover:text-accent"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <Sun v-if="theme === 'dark'" class="h-5 w-5" aria-hidden="true" />
    <Moon v-else class="h-5 w-5" aria-hidden="true" />
  </button>
</template>
