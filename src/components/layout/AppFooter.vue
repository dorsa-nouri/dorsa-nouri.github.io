<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'
import type { PersonalInformation } from '@/types/resume'

defineProps<{
  personal: PersonalInformation
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="border-t border-border py-12">
    <div class="mx-auto max-w-content px-6 text-center">
      <div class="mb-6 flex items-center justify-center gap-4">
        <a
          :href="personal.github.url"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          class="text-text-muted transition-colors hover:text-accent"
        >
          <Github class="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          :href="personal.linkedin.url"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          class="text-text-muted transition-colors hover:text-accent"
        >
          <Linkedin class="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
      <p class="text-sm text-text-muted">
        &copy; {{ year }} {{ personal.full_name }}
      </p>
      <p class="mt-2 text-xs text-text-muted no-print">
        Built with Vue &amp; deployed on GitHub Pages
      </p>
    </div>
  </footer>
</template>
