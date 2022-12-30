import fs from 'fs'
import path from 'path'
import bookCategory from '../data/bookCategory.json'
import { getCategoriesRaw, getCategoryListRaw } from './get-page'
import type { CategoryItem } from './parse-page'
import { parseCategories, parseCategoryList } from './parse-page'

const bookCategoryData: Record<string, number[]> = bookCategory

async function getAllCategories() {
  const categories = parseCategories(await getCategoriesRaw())
  fs.writeFileSync(path.join(__dirname, '../data/categories.json'), JSON.stringify(categories, null, 4), 'utf8')
  return categories
}

async function getCategoryByTag(url: string, tag: string) {
  if (!bookCategoryData[tag])
    bookCategoryData[tag] = []

  let maxPage = 1

  for (let i = 1; i <= maxPage; i++) {
    const {
      bookIds,
      total,
    } = parseCategoryList(await getCategoryListRaw(url, i))

    maxPage = total

    const someContains = bookIds.some(bookId => bookCategoryData[tag].includes(bookId))

    bookCategoryData[tag].push(...bookIds)

    if (someContains)
      break
  }

  bookCategoryData[tag] = [...new Set(bookCategoryData[tag])].sort((a, b) => b - a)

  fs.writeFileSync(path.join(__dirname, '../data/bookCategory.json'), JSON.stringify(bookCategory, null, 4), 'utf8')
}

getAllCategories().then(async (categoryItemItems) => {
  return Promise.all(categoryItemItems.filter(({ label }) => {
    return !['语言', '年份'].includes(label)
  }).reduce<CategoryItem['tags']>((acc, item) => {
    acc.push(...item.tags)

    return acc
  }, []).map(({ label, url }) => {
    return getCategoryByTag(url, label)
  }))
})
