import { describe, expect, jest, test } from '@jest/globals'
import { getDetailPageRaw } from './getDetailPageRaw'
import * as GetRawHTMLModule from './getRawHTML'

describe('getDetailPageRaw', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('getDetailPageRaw', async () => {
    const spy = jest.spyOn(GetRawHTMLModule, 'getRawHTML').mockImplementationOnce(async () => {
      return 'raw HTML'
    })

    await getDetailPageRaw(999999)

    expect(spy).toBeCalledTimes(1)
    expect(spy.mock.calls[0][0]).toBe('http://banshujiang.cn/e_books/999999')
  })
})
