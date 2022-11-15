import { parse } from 'node-html-parser'
import { downloadImage } from './downloadImage'

export function parseDetailPage(content: string, id: number) {
  const root = parse(content)
  const container = root.querySelector('.row.shadow-panel')!

  const title = container.querySelector('.ebook-title')!.querySelector('a')!.innerText
  const img = container.querySelector('img')!.getAttribute('src')
  const trs = container.querySelectorAll('tr')
  const author = trs[0].querySelectorAll('td')[1].innerText
  const language = trs[1].querySelectorAll('td')[1].innerText
  const publishYear = +trs[2].querySelectorAll('td')[1].innerText
  const formats = trs[trs.length - 1].querySelectorAll('li').map((li) => {
    const aTag = li.querySelector('a')!

    return {
      fmt: li.querySelector('.format-tag')!.innerText,
      title: aTag.innerText,
      link: aTag.getAttribute('href'),
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

  return downloadImage(img!).then(() => {
    return result
  })
}
