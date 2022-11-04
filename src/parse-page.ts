import http from 'http'
import https from 'https'
import fs from 'fs'
import path from 'path'

import { parse } from 'node-html-parser'

export function parseListPage(content: string) {
  const root = parse(content)
  const first = root.querySelector('.row.shadow-panel')
  if (!first) {
    console.error('no data')
    process.exit(1)
  }

  const aTag = first.querySelector('a')

  if (!aTag) {
    console.error('no a tag')
    process.exit(1)
  }
  const href = aTag.getAttribute('href')
  if (!href) {
    console.error('no href')
    process.exit(1)
  }

  return +href.split('/').pop()!
}

function downloadImage(src: string) {
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

export function parseDetailPage(content: string, id: number) {
  const root = parse(content)
  const container = root.querySelector('.row.shadow-panel')
  if (!container) {
    return Promise.resolve({
      id,
    })
  }

  const title = container.querySelector('.ebook-title')?.querySelector('a')?.innerText
  const img = container.querySelector('img')?.getAttribute('src') || null
  const trs = container.querySelectorAll('tr')
  const author = trs[0].querySelectorAll('td')[1].innerText
  const language = trs[1].querySelectorAll('td')[1].innerText
  const publishYear = +trs[2].querySelectorAll('td')[1].innerText
  const formats = trs[trs.length - 1].querySelectorAll('li').map((li) => {
    const aTag = li.querySelector('a')

    return {
      fmt: li.querySelector('.format-tag')?.innerText,
      title: aTag?.innerText,
      link: aTag?.getAttribute('href'),
    }
  })

  const result = {
    id,
    title,
    img,
    author,
    language,
    publishYear,
    formats,
  }

  if (!img)
    return Promise.resolve(result)

  return downloadImage(img!).then(() => {
    return result
  })
}
