import { parse } from 'node-html-parser'

export function parseListPage(content: string) {
  const root = parse(content)
  const first = root.querySelector('.row.shadow-panel')!
  const aTag = first.querySelector('a')!
  const href = aTag.getAttribute('href')!

  return +href.split('/').pop()!
}
