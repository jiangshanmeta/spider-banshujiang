import fs from 'fs'
import path from 'path'

import books from '../data/books/index.json'
import bookCategory from '../data/bookCategory.json'

const bookMap = books.reduce<Record<number, (typeof books)[number]> >((acc, item) => {
  acc[item.id] = item
  return acc
}, {})
const typedBookCategory: Record<string, number[]> = bookCategory

const bookCategoryByBookId = Object.entries(typedBookCategory).reduce<Record<number, string[]>> ((acc, [tag, bookIds]) => {
  bookIds.forEach((bookId) => {
    if (!acc[bookId])
      acc[bookId] = []

    acc[bookId].push(tag)
  })

  return acc
}, {})

function intersection(tags1: string[], tags2: string[]) {
  const set = new Set(tags1)
  return tags2.reduce((acc, tag) => acc + (set.has(tag) ? 1 : 0), 0)
}

const bookRecommendations = books.map((book) => {
  const bookCategories = bookCategoryByBookId[book.id] || []

  const sameCategoryBookIds = [...new Set(bookCategories.reduce<number[]>((acc, category) => {
    acc.push(...typedBookCategory[category])
    return acc
  }, []))]

  const recommendations = sameCategoryBookIds.map((otherBookId) => {
    const otherCategories = bookCategoryByBookId[otherBookId] || []
    return {
      id: otherBookId,
      score: intersection(bookCategories, otherCategories),
    }
  }).filter(otherBook => otherBook.id !== book.id && otherBook.score > 0).sort((a, b) => {
    if (a.score !== b.score)
      return b.score - a.score

    return b.id - a.id
  }).map(item => item.id).slice(0, 16)

  return {
    id: book.id,
    recommendations,
  }
})

fs.writeFileSync(path.join(__dirname, '../data/recommendation.json'), JSON.stringify(bookRecommendations, null, 4), 'utf8')

bookRecommendations.forEach(({ id, recommendations }) => {
  const folderPath = path.join(__dirname, `../data/books/${id}`)
  if (!fs.existsSync(folderPath))
    fs.mkdirSync(folderPath)

  const data = recommendations.map(bookId => bookMap[bookId])
  fs.writeFileSync(`${folderPath}/recommendation.json`, JSON.stringify(data, null, 4), 'utf8')
})
