/** What goes after item `index` in a list of `length` items: "A, B and C" (no Oxford comma). */
export function listSeparator(index, length) {
  if (index < length - 2) return ', '
  if (index === length - 2) return ' and '
  return ''
}

export const formatList = items =>
  items.map((item, index) => item + listSeparator(index, items.length)).join('')

/** 0 → "01" */
export const padIndex = index => String(index + 1).padStart(2, '0')
