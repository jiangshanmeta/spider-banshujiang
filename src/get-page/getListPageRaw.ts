import { getRawHTML } from './getRawHTML'

export function getListPageRaw(page: number) {
  const param = `http://banshujiang.cn/e_books/page/${page}`
  return getRawHTML(param)
}
