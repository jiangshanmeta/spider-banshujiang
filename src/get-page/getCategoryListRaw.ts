import { getRawHTML } from './getRawHTML'

export function getCategoryListRaw(uri: string, page = 1) {
  return getRawHTML(`http://www.banshujiang.cn${uri}/page/${page}`)
}
