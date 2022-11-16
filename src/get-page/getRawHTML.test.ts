import { describe, expect, jest, test } from '@jest/globals'
import { getRawHTML } from './getRawHTML'
jest.mock('http')

describe('getRawHTML', () => {
  test('getRawHTML', async () => {
    const rst = await getRawHTML('fake url')
    expect(rst).toBe('666777')
  })
})
