const METRIC_LABELS: Record<string, (v: number) => string> = {
  paperwork_reduction_percent: (v) => `${v}% paperwork reduction`,
  workflow_speed_improvement_percent: (v) => `${v}% workflow speed improvement`,
}

export function formatAchievement(metric: string, value: number): string {
  const formatter = METRIC_LABELS[metric]
  if (formatter) {
    return formatter(value)
  }
  return `${value} ${metric.replace(/_/g, ' ')}`
}
