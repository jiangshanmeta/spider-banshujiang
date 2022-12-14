import { EventEmitter } from 'node:events'

const http = jest.createMockFromModule<{
  get: any
}>('http')

http.get = jest.fn().mockImplementation((_, cb) => {
  const e: any = new EventEmitter()
  e.setEncoding = jest.fn()

  cb(e)

  e.emit('data', '666')
  e.emit('data', '777')
  e.emit('end')
})

export default http
