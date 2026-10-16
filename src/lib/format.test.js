import { describe, expect, it } from 'vitest'

import { formatList, listSeparator, padIndex } from './format'

describe('formatList', () => {
  it.each([
    [[], ''],
    [['Go'], 'Go'],
    [['Go', 'AWS'], 'Go and AWS'],
    [['Go', 'React', 'AWS'], 'Go, React and AWS'],
  ])('%j → %s', (items, expected) => {
    expect(formatList(items)).toBe(expected)
  })
})

describe('listSeparator', () => {
  it('puts commas between items and "and" before the last one', () => {
    expect([0, 1, 2, 3].map(index => listSeparator(index, 4))).toEqual([', ', ', ', ' and ', ''])
  })
})

describe('padIndex', () => {
  it('numbers from 01', () => {
    expect(padIndex(0)).toBe('01')
    expect(padIndex(11)).toBe('12')
  })
})
