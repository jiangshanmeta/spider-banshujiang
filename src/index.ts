import fs from 'fs'
import path from 'path'

import books from '../data/books/index.json'
import { getDetailPageRaw, getListPageRaw } from './get-page'
import { parseDetailPage, parseListPage } from './parse-page'

async function getItem(id: number) {
  const raw = await getDetailPageRaw(id)
  const data = await parseDetailPage(raw, id)
  books.push(data)

  fs.writeFileSync(path.join(__dirname, '../data/books/index.json'), JSON.stringify(books, null, 4), 'utf8')
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
  return next()
}

async function writeItem(data: Awaited<ReturnType<typeof parseDetailPage>>) {
  const id = data.id
  const filePath = path.join(__dirname, `../data/books/${id}.json`)
  if (fs.existsSync(filePath))
    return

  fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8')
}

main().then(() => {
  return books.map((data) => {
    return writeItem(data)
  })
})
