import { getRawHTML } from './getRawHTML'

export function getListPageRaw(page: number) {
  return getRawHTML(`http://banshujiang.cn/e_books/page/${page}`)
}

export function getDetailPageRaw(id: number) {
  return getRawHTML(`http://banshujiang.cn/e_books/${id}`)
}

