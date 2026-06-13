<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'

defineProps<{
  title: string
  skills: string[]
}>()
</script>

<template>
  <div
    class="skill-category-card rounded-xl border border-border bg-surface p-5 shadow-sm"
  >
    <h3 class="mb-3 text-sm font-semibold text-text">{{ title }}</h3>
    <div class="flex flex-wrap gap-2">
      <Badge v-for="skill in skills" :key="skill" :label="skill" variant="accent" />
    </div>
  </div>
</template>
