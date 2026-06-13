const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

function formatMonthYear(dateStr: string): string {
  const [year, month] = dateStr.split('-')
  const monthIndex = parseInt(month, 10) - 1
  return `${MONTHS[monthIndex]} ${year}`
}

export function formatDateRange(start: string, end: string | null): string {
  const startFormatted = formatMonthYear(start)
  if (end) {
    return `${startFormatted} – ${formatMonthYear(end)}`
  }
  return `${startFormatted} – Present`
}

export function sortExperience<T extends { start_date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.start_date.localeCompare(a.start_date))
}
