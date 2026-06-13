export interface ResumeData {
  personal_information: PersonalInformation
  professional_summary: ProfessionalSummary
  work_experience: WorkExperience[]
  skills: Skills
  education_and_certifications: EducationAndCertifications
}

export interface PersonalInformation {
  full_name: string
  title: string
  location: { city: string; country: string }
  phone: string
  email: string
  github: { url: string; username: string }
  linkedin: { url: string; username: string }
  birth_year: number
}

export interface ProfessionalSummary {
  years_of_experience: number
  specializations: string[]
  summary: string
}

export interface WorkExperience {
  company: string
  position: string
  location: string
  employment_type: string
  work_mode?: string
  start_date: string
  end_date: string | null
  current: boolean
  tech_stack: string[]
  responsibilities: string[]
  achievements?: Achievement[]
  team_size?: number
}

export interface Achievement {
  metric: string
  value: number
}

export interface Skills {
  languages_and_styling: string[]
  frameworks_and_libraries: string[]
  state_management: string[]
  build_and_development_tools: string[]
  api_and_data: string[]
  ci_cd: string[]
  testing: string[]
  other: string[]
}

export interface EducationAndCertifications {
  coursera: { name: string }[]
  self_studied: string[]
}

export type SkillCategoryKey = keyof Skills

export interface SkillCategoryConfig {
  key: SkillCategoryKey
  title: string
}
