import { getRawHTML } from './getRawHTML'

export function getDetailPageRaw(id: number) {
  return getRawHTML(`http://banshujiang.cn/e_books/${id}`)
}

