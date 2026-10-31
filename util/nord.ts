import type { MantineColorsTuple } from '@mantine/core'
// Mantine needs literal colours for its shade maths; this tuple mirrors the Nord Frost
// tokens in styles/tokens.css (index 4 = nord8 accent). Keep in sync with tokens.css.
export const nordFrost: MantineColorsTuple = [
  '#ECEFF4', '#D8DEE9', '#B7D8E2', '#9FCBD9', '#88C0D0', '#81A1C1', '#6F92B6', '#5E81AC', '#4C566A', '#3B4252',
]
// Read a design token at runtime (for canvas-based charts that can't use var()).
export const token = (name: string, fallback = 'currentColor') =>
  typeof window === 'undefined' ? fallback : getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback
