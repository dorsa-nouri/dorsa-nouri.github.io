<script setup lang="ts">
defineProps<{
  label: string
  variant?: 'default' | 'accent' | 'current'
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
    :class="{
      'bg-accent-soft text-accent': variant === 'accent' || variant === 'default',
      'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400':
        variant === 'current',
    }"
  >
    {{ label }}
  </span>
</template>
