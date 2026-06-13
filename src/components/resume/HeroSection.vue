<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'
import IconLink from '@/components/ui/IconLink.vue'
import SectionWrapper from '@/components/layout/SectionWrapper.vue'
import type { PersonalInformation, ProfessionalSummary } from '@/types/resume'

defineProps<{
  personal: PersonalInformation
  summary: ProfessionalSummary
}>()
</script>

<template>
  <SectionWrapper id="about">
    <div class="fade-in space-y-6 lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 lg:space-y-0">
      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-3">
          <Badge
            :label="`${summary.years_of_experience}+ years`"
            variant="accent"
          />
        </div>

        <h1 class="text-4xl font-bold tracking-tight text-text">
          {{ personal.full_name }}
        </h1>

        <p class="text-xl text-text-muted">{{ personal.title }}</p>

        <p class="flex items-center gap-1.5 text-sm text-text-muted">
          <MapPin class="h-4 w-4 shrink-0" aria-hidden="true" />
          {{ personal.location.city }}, {{ personal.location.country }}
        </p>

        <p class="text-lg leading-relaxed text-text">
          {{ summary.summary }}
        </p>

        <div class="flex flex-wrap gap-2">
          <Badge
            v-for="spec in summary.specializations"
            :key="spec"
            :label="spec"
            variant="accent"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-col">
        <IconLink
          :href="`mailto:${personal.email}`"
          type="email"
          :label="personal.email"
        />
        <IconLink
          :href="personal.github.url"
          type="github"
          :label="personal.github.username"
        />
        <IconLink
          :href="personal.linkedin.url"
          type="linkedin"
          :label="personal.linkedin.username"
        />
      </div>
    </div>
  </SectionWrapper>
</template>
