import http from 'http'
import https from 'https'
import fs from 'fs'
import path from 'path'

export function downloadImage(src: string) {
  const protocal = src.startsWith('https') ? https : http
  return new Promise<string>((resolve) => {
    protocal.get(src, {
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'http://banshujiang.cn/',
        'Upgrade-Insecure-Requests': 1,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      },
    }, (res) => {
      res.setEncoding('binary')
      let rawData = ''
      res.on('data', (chunk) => {
        rawData += chunk
      })
      res.on('end', () => {
        const index = src.indexOf('?')
        const end = index > -1 ? index : src.length
        const name = src.slice(0, end).split('/').pop()!
        fs.writeFileSync(path.join(__dirname, '../data/images', name), rawData, 'binary')
        resolve(name)
      })
    }).on('error', (e) => {
      console.error(`出现错误: ${e.message}`)
      process.exit(1)
    })
  })
}
