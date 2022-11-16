import fs from 'fs'
import path from 'path'

import books from '../data/books.json'
import { getDetailPageRaw, getListPageRaw } from './get-page'
import { parseDetailPage, parseListPage } from './parse-page'

async function getItem(id: number) {
  const raw = await getDetailPageRaw(id)
  const data = await parseDetailPage(raw, id)
  books.push(data)

  fs.writeFileSync(path.join(__dirname, '../data/books.json'), JSON.stringify(books, null, 4), 'utf8')
}

async function main() {
  const listPageRaw = await getListPageRaw(1)
  const MAX_ID = parseListPage(listPageRaw)
  let startId = books.length ? books[books.length - 1].id : 0

  function next(): Promise<void> {
    startId++
    if (startId === MAX_ID + 1)
      return Promise.resolve()

    return getItem(startId).then(() => next())
  }
  next()
}

main()
