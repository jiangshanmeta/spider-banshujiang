import { describe, expect, jest, test } from '@jest/globals'
import { getCategoryListRaw } from './getCategoryListRaw'
import * as GetRawHTMLModule from './getRawHTML'

describe('getCategoryListRaw', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('getCategoryListRaw', async () => {
    const spy = jest.spyOn(GetRawHTMLModule, 'getRawHTML').mockImplementationOnce(async () => {
      return 'raw HTML'
    })

    await getCategoryListRaw('/category/programming_language/Haskell', 2)

    expect(spy).toBeCalledTimes(1)
    expect(spy.mock.calls[0][0]).toBe('http://www.banshujiang.cn/category/programming_language/Haskell/page/2')
  })

  test('default page should be 1', async () => {
    const spy = jest.spyOn(GetRawHTMLModule, 'getRawHTML').mockImplementationOnce(async () => {
      return 'raw HTML'
    })

    await getCategoryListRaw('/category/programming_language/Haskell')

    expect(spy).toBeCalledTimes(1)
    expect(spy.mock.calls[0][0]).toBe('http://www.banshujiang.cn/category/programming_language/Haskell/page/1')
  })
})
