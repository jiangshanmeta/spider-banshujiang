import { parse } from 'node-html-parser'

export function parseCategoryList(content: string) {
  const root = parse(content)

  const mainContainer = root.querySelector('.small-list')!
  const bookIds = mainContainer.querySelectorAll('a').map((aDOM) => {
    return +aDOM.getAttribute('href')!.split('/').pop()!
  })

  const total = root.querySelectorAll('.pagination a').pop()?.getAttribute('href')?.split('/')?.pop() ?? 0

  return {
    bookIds: [...new Set(bookIds)].sort((a, b) => b - a),
    total: +total,
  }
}
