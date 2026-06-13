<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/resume/HeroSection.vue'
import ExperienceSection from '@/components/resume/ExperienceSection.vue'
import SkillsSection from '@/components/resume/SkillsSection.vue'
import EducationSection from '@/components/resume/EducationSection.vue'
import resumeData from '@resume-data'
import type { ResumeData } from '@/types/resume'

const data = resumeData as ResumeData
</script>

<template>
  <a
    href="#about"
    class="no-print sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
  >
    Skip to main content
  </a>

  <AppHeader />

  <main>
    <HeroSection
      :personal="data.personal_information"
      :summary="data.professional_summary"
    />
    <ExperienceSection :experiences="data.work_experience" />
    <SkillsSection :skills="data.skills" />
    <EducationSection :education="data.education_and_certifications" />
  </main>

  <AppFooter :personal="data.personal_information" />
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
