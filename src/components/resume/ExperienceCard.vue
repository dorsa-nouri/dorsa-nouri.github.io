<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'
import { formatDateRange } from '@/utils/formatDate'
import { formatAchievement } from '@/utils/formatAchievement'
import type { WorkExperience } from '@/types/resume'

defineProps<{
  experience: WorkExperience
  isLast: boolean
}>()
</script>

<template>
  <article class="experience-card relative pl-8">
    <!-- Timeline dot -->
    <div
      class="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-bg"
      :class="experience.current ? 'bg-accent' : 'bg-border'"
      aria-hidden="true"
    />

    <!-- Timeline line -->
    <div
      v-if="!isLast"
      class="absolute left-0 top-4 h-[calc(100%+1.5rem)] w-px -translate-x-1/2 bg-border"
      aria-hidden="true"
    />

    <div
      class="rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 class="text-lg font-semibold text-text">{{ experience.company }}</h3>
          <p class="text-base text-text-muted">{{ experience.position }}</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <Badge v-if="experience.current" label="Current" variant="current" />
          <span class="text-sm text-text-muted">
            {{ formatDateRange(experience.start_date, experience.end_date) }}
          </span>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted">
        <span>{{ experience.location }}</span>
        <span>{{ experience.employment_type }}</span>
        <span v-if="experience.work_mode">{{ experience.work_mode }}</span>
        <span v-if="experience.team_size">Led team of {{ experience.team_size }}</span>
      </div>

      <div v-if="experience.tech_stack.length" class="mb-4 flex flex-wrap gap-2">
        <Badge
          v-for="tech in experience.tech_stack"
          :key="tech"
          :label="tech"
          variant="accent"
        />
      </div>

      <ul class="mb-4 list-disc space-y-2 pl-5 text-text">
        <li v-for="(item, i) in experience.responsibilities" :key="i">
          {{ item }}
        </li>
      </ul>

      <div v-if="experience.achievements?.length" class="space-y-2">
        <div
          v-for="(achievement, i) in experience.achievements"
          :key="i"
          class="border-l-4 border-accent pl-4 text-sm font-medium text-accent"
        >
          {{ formatAchievement(achievement.metric, achievement.value) }}
        </div>
      </div>
    </div>
  </article>
</template>
