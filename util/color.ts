function getColor(percent: number | string, darker: boolean): string {
  percent = Number(percent)
  if (percent >= 99.9) {
    return 'var(--color-success)'
  } else if (percent >= 99) {
    return darker ? 'var(--color-accent)' : 'var(--color-accent-hover)'
  } else if (percent >= 95) {
    return 'var(--color-warning)'
  } else if (Number.isNaN(percent)) {
    return 'var(--color-text-faint)'
  } else {
    return 'var(--color-danger)'
  }
}

export { getColor }
