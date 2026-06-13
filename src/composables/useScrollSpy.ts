import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0] ?? '')

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          activeSection.value = visible[0].target.id
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeSection }
}
