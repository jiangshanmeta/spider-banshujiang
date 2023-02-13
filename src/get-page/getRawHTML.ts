import http from 'http'

export function getRawHTML(url: string) {
  return new Promise<string>((resolve, reject) => {
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
      reject(e)
    })
  })
}
