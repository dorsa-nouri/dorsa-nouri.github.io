<script setup lang="ts">
import { Award } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'
import SectionWrapper from '@/components/layout/SectionWrapper.vue'
import type { EducationAndCertifications } from '@/types/resume'

defineProps<{
  education: EducationAndCertifications
}>()
</script>

<template>
  <SectionWrapper id="education" title="Education & Certifications">
    <div class="fade-in space-y-10">
      <div>
        <h3 class="mb-4 text-lg font-semibold text-text">Coursera</h3>
        <ul class="space-y-3">
          <li
            v-for="cert in education.coursera"
            :key="cert.name"
            class="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3"
          >
            <Award class="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <span class="text-text">{{ cert.name }}</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-lg font-semibold text-text">Self-Studied</h3>
        <div class="flex flex-wrap gap-2">
          <Badge
            v-for="topic in education.self_studied"
            :key="topic"
            :label="topic"
            variant="accent"
          />
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
