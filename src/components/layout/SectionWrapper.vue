<script setup lang="ts">
defineProps<{
  id: string
  title?: string
}>()
</script>

<template>
  <section :id="id" class="py-16 md:py-24">
    <div class="mx-auto max-w-content px-6">
      <h2 v-if="title" class="section-heading fade-in">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>
