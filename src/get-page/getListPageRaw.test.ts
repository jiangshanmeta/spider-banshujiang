import { describe, expect, jest, test } from '@jest/globals'
import { getListPageRaw } from './getListPageRaw'
import * as GetRawHTMLModule from './getRawHTML'

describe('getListPageRaw', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('getListPageRaw', async () => {
    const spy = jest.spyOn(GetRawHTMLModule, 'getRawHTML').mockImplementationOnce(async () => {
      return 'raw HTML'
    })

    await getListPageRaw(999999)

    expect(spy).toBeCalledTimes(1)
    expect(spy.mock.calls[0][0]).toBe('http://banshujiang.cn/e_books/page/999999')
  })
})
