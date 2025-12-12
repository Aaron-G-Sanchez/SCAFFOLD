import { CreateApp } from './app'

describe('CreateApp', () => {
  test('should create an express server', () => {
    const TEST_SERVER = CreateApp()

    expect(TEST_SERVER).toBeDefined()
  })
})
