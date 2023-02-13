import http from 'http'
import { EventEmitter } from 'node:events'
import { describe, expect, jest, test } from '@jest/globals'
import { getRawHTML } from './getRawHTML'

describe('getRawHTML', () => {
  test('getRawHTML', async () => {
    const spy = jest.spyOn(http, 'get').mockImplementationOnce((_, cb: any) => {
      const e: any = new EventEmitter()
      e.setEncoding = jest.fn()

      cb(e)

      e.emit('data', '666')
      e.emit('data', '770')
      e.emit('end')

      return e as any
    })

    const rst = await getRawHTML('fake url')

    expect(spy).toBeCalledTimes(1)
    expect(spy.mock.calls[0][0]).toBe('fake url')

    expect(rst).toBe('666770')
  })

  test('handle getRawHTML error', async () => {
    jest.spyOn(http, 'get').mockImplementationOnce((_, cb: any) => {
      const res: any = {}
      res.setEncoding = jest.fn()
      res.on = (type: string, onCb: Function) => {
        if (type === 'error')
          onCb(new Error('fake error msg'))
      }
      cb(res)

      return res as any
    })

    try {
      await getRawHTML('fake url')
    }
    catch (e) {
      expect((e as Error).message).toBe('fake error msg')
    }
  })
})
