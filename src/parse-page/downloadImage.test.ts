import http from 'http'
import https from 'https'
import fs from 'fs'
import EventEmitter from 'node:events'
import { describe, expect, jest } from '@jest/globals'

import { downloadImage } from './downloadImage'

let spyWriteFileSync: jest.SpiedFunction<typeof fs.writeFileSync>

beforeEach(() => {
  spyWriteFileSync = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {})
})

afterEach(() => {
  spyWriteFileSync.mockRestore()
})

describe('should call protocol based on the url', () => {
  it('should call http get when src is based on http', () => {
    const spyHttp = jest.spyOn(http, 'get').mockImplementationOnce((_, __, cb: any) => {
      const e: any = new EventEmitter()
      e.setEncoding = jest.fn()

      cb(e)

      e.emit('data', '666')
      e.emit('data', '770')
      e.emit('end')

      return e as any
    })

    downloadImage('http://github.com')

    expect(spyHttp).toBeCalledTimes(1)
    expect(spyHttp.mock.calls[0][0]).toBe('http://github.com')
  })

  it('should call https get when src is based on http', () => {
    const spyHttp = jest.spyOn(https, 'get').mockImplementationOnce((_, __, cb: any) => {
      const e: any = new EventEmitter()
      e.setEncoding = jest.fn()

      cb(e)

      e.emit('data', '666')
      e.emit('data', '770')
      e.emit('end')

      return e as any
    })

    downloadImage('https://github.com')

    expect(spyHttp).toBeCalledTimes(1)
    expect(spyHttp.mock.calls[0][0]).toBe('https://github.com')
  })
})

it('should handle Error', async () => {
  jest.spyOn(https, 'get').mockImplementationOnce((_, __, cb: any) => {
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
    await downloadImage('https://github.com')
  }
  catch (e) {
    expect((e as Error).message).toBe('fake error msg')
  }
})

describe('writeFileSync file name', () => {
  it('should handle url with query', () => {
    jest.spyOn(https, 'get').mockImplementationOnce((_, __, cb: any) => {
      const e: any = new EventEmitter()
      e.setEncoding = jest.fn()

      cb(e)

      e.emit('data', '666')
      e.emit('data', '770')
      e.emit('end')

      return e as any
    })

    downloadImage('https://github.com/dcd/1234.png?user=abc')

    expect(spyWriteFileSync).toBeCalledTimes(1)
    expect(spyWriteFileSync.mock.calls[0][0]).toMatch(/1234\.png$/)
  })

  it('should handle url without query', () => {
    jest.spyOn(https, 'get').mockImplementationOnce((_, __, cb: any) => {
      const e: any = new EventEmitter()
      e.setEncoding = jest.fn()

      cb(e)

      e.emit('data', '666')
      e.emit('data', '770')
      e.emit('end')

      return e as any
    })

    downloadImage('https://github.com/dcd/1234.png')

    expect(spyWriteFileSync).toBeCalledTimes(1)
    expect(spyWriteFileSync.mock.calls[0][0]).toMatch(/1234\.png$/)
  })
})
