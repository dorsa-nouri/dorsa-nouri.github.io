<script setup lang="ts">
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import { useScrollSpy } from '@/composables/useScrollSpy'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const { activeSection } = useScrollSpy(navLinks.map((l) => l.id))
</script>

<template>
  <header class="no-print sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
    <div class="mx-auto flex max-w-content items-center justify-between px-6 py-4">
      <a
        href="#about"
        class="font-display text-sm font-semibold text-text transition-colors hover:text-accent"
      >
        DN
      </a>

      <nav aria-label="Main navigation">
        <ul class="hidden items-center gap-1 md:flex">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="rounded-md px-3 py-1.5 text-sm transition-colors hover:text-accent"
              :class="
                activeSection === link.id
                  ? 'font-medium text-accent'
                  : 'text-text-muted'
              "
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <ThemeToggle />
    </div>
  </header>
</template>
