<script setup lang="ts">
import SectionWrapper from '@/components/layout/SectionWrapper.vue'
import ExperienceCard from '@/components/resume/ExperienceCard.vue'
import { sortExperience } from '@/utils/formatDate'
import type { WorkExperience } from '@/types/resume'
import { computed } from 'vue'

const props = defineProps<{
  experiences: WorkExperience[]
}>()

const sorted = computed(() => sortExperience(props.experiences))
</script>

<template>
  <SectionWrapper id="experience" title="Work Experience">
    <div class="fade-in space-y-6">
      <ExperienceCard
        v-for="(exp, index) in sorted"
        :key="`${exp.company}-${exp.start_date}`"
        :experience="exp"
        :is-last="index === sorted.length - 1"
      />
    </div>
  </SectionWrapper>
</template>
