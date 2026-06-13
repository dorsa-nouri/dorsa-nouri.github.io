<script setup lang="ts">
import SectionWrapper from '@/components/layout/SectionWrapper.vue'
import SkillCategory from '@/components/resume/SkillCategory.vue'
import type { Skills, SkillCategoryConfig } from '@/types/resume'

defineProps<{
  skills: Skills
}>()

const categories: SkillCategoryConfig[] = [
  { key: 'languages_and_styling', title: 'Languages & Styling' },
  { key: 'frameworks_and_libraries', title: 'Frameworks & Libraries' },
  { key: 'state_management', title: 'State Management' },
  { key: 'build_and_development_tools', title: 'Build & Development Tools' },
  { key: 'api_and_data', title: 'API & Data' },
  { key: 'ci_cd', title: 'CI/CD' },
  { key: 'testing', title: 'Testing' },
  { key: 'other', title: 'Other' },
]
</script>

<template>
  <SectionWrapper id="skills" title="Skills">
    <div class="fade-in grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <SkillCategory
        v-for="cat in categories"
        :key="cat.key"
        :title="cat.title"
        :skills="skills[cat.key]"
      />
    </div>
  </SectionWrapper>
</template>
