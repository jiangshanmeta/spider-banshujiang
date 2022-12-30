import { parse } from 'node-html-parser'

export interface CategoryItem {
  label: string
  tags: {
    label: string
    url: string
  }[]
}

export function parseCategories(content: string): CategoryItem[] {
  const root = parse(content)
  const container = root.querySelector('.region-body')!
  const labelDOMs = container.querySelectorAll('.span1')
  const labels = labelDOMs.map(item => item.textContent)

  const categoryULs = container.querySelectorAll('.category')
  const categories = categoryULs.map((ulDOM) => {
    const aDOMS = ulDOM.querySelectorAll('a')

    return aDOMS.map((aDOM) => {
      return {
        label: aDOM.textContent,
        url: aDOM.getAttribute('href')!,
      }
    })
  })

  return labels.map((label, index) => {
    return {
      label,
      tags: categories[index],
    }
  })
}
