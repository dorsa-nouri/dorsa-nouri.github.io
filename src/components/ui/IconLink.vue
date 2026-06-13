<script setup lang="ts">
import { computed } from 'vue'
import { Github, Linkedin, Mail, Phone } from 'lucide-vue-next'

const props = defineProps<{
  href: string
  type: 'github' | 'linkedin' | 'email' | 'phone'
  label: string
}>()

const icon = computed(() => {
  const icons = { github: Github, linkedin: Linkedin, email: Mail, phone: Phone }
  return icons[props.type]
})

const isExternal = computed(() => props.type === 'github' || props.type === 'linkedin')
</script>

<template>
  <a
    :href="href"
    :aria-label="label"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-none"
  >
    <component :is="icon" class="h-4 w-4 shrink-0" aria-hidden="true" />
    <span class="hidden sm:inline">{{ label }}</span>
  </a>
</template>
