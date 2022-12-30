import { describe, expect, jest, test } from '@jest/globals'
import { getCategoriesRaw } from './getCategoriesRaw'
import * as GetRawHTMLModule from './getRawHTML'

describe('getCategoriesRaw', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('getCategoriesRaw', async () => {
    const spy = jest.spyOn(GetRawHTMLModule, 'getRawHTML').mockImplementationOnce(async () => {
      return 'raw HTML'
    })

    await getCategoriesRaw()

    expect(spy).toBeCalledTimes(1)
    expect(spy.mock.calls[0][0]).toBe('http://www.banshujiang.cn/')
  })
})
