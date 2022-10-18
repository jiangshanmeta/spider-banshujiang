import http from 'http'

export function getListPageRaw(page: number) {
  return new Promise<string>((resolve) => {
    http.get(`http://banshujiang.cn/e_books/page/${page}`, (res) => {
      res.setEncoding('utf8')
      let rawData = ''
      res.on('data', (chunk) => {
        rawData += chunk
      })
      res.on('end', () => {
        resolve(rawData)
      })
    }).on('error', (e) => {
      console.error(`出现错误: ${e.message}`)
      process.exit(1)
    })
  })
}

export function getDetailPageRaw(id: number) {
  return new Promise<string>((resolve) => {
    http.get(`http://banshujiang.cn/e_books/${id}`, (res) => {
      res.setEncoding('utf8')
      let rawData = ''
      res.on('data', (chunk) => {
        rawData += chunk
      })
      res.on('end', () => {
        resolve(rawData)
      })
    }).on('error', (e) => {
      console.error(`出现错误: ${e.message}`)
      process.exit(1)
    })
  })
}
