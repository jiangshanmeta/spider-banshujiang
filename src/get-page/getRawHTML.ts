import http from 'http'

export function getRawHTML(url: string) {
  return new Promise<string>((resolve) => {
    http.get(url, (res) => {
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
