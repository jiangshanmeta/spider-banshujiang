import { parse } from 'node-html-parser'
import { downloadImage } from './downloadImage'

export function parseDetailPage(content: string, id: number, skipImg = false) {
  const root = parse(content)
  const container = root.querySelector('.row.shadow-panel')!

  const title = container.querySelector('.ebook-title')!.querySelector('a')!.innerText
  const img = container.querySelector('img')!.getAttribute('src')!
  const trs = container.querySelectorAll('tr')
  const author = trs[0].querySelectorAll('td')[1].innerText
  const language = trs[1].querySelectorAll('td')[1].innerText
  const publishYear = +trs[2].querySelectorAll('td')[1].innerText
  const programLanguage = trs[3].querySelectorAll('td')[0].innerText === '编程语言：' ? trs[3].querySelectorAll('td')[1].innerText : ''
  const formats = trs[trs.length - 1].querySelectorAll('li').filter(li => li.querySelector('a')).map((li) => {
    const aTag = li.querySelector('a')!

    return {
      fmt: li.querySelector('.format-tag')!.innerText,
      title: aTag.innerText,
      link: aTag.getAttribute('href')!,
    }
  })

  const result = {
    id,
    title,
    img,
    author,
    language,
    publishYear,
    programLanguage,
    formats,
  }

  if (skipImg)
    return Promise.resolve(result)

  return downloadImage(img).then(() => {
    return result
  })
}
