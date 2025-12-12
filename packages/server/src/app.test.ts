import { describe, expect, test } from 'vitest'

import { CreateApp } from './app'

describe('CreateApp', () => {
  test('should create an express server', () => {
    const TEST_SERVER = CreateApp()

    expect(TEST_SERVER).toBeDefined()
    expect(typeof TEST_SERVER.listen).toBe('function')
  })
})
