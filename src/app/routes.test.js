import { describe, expect, it } from 'vitest'

import { PATHS } from '../config/site'
import { findRoute } from './routes'

describe('findRoute', () => {
  it('matches exact paths and ignores a trailing slash', () => {
    expect(findRoute('/').path).toBe(PATHS.home)
    expect(findRoute('/projects').path).toBe(PATHS.projects)
    expect(findRoute('/projects/').path).toBe(PATHS.projects)
  })

  it('falls back to the 404 page', () => {
    expect(findRoute('/nope').path).toBe(PATHS.notFound)
  })
})
