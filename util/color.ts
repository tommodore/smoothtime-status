function getColor(percent: number | string, darker: boolean): string {
  percent = Number(percent)
  if (percent >= 99.9) {
    return '#2dd4bf'
  } else if (percent >= 99) {
    return darker ? '#5eead4' : '#99f6e4'
  } else if (percent >= 95) {
    return '#f29030'
  } else if (Number.isNaN(percent)) {
    return 'gray'
  } else {
    return '#df484a'
  }
}

export { getColor }
