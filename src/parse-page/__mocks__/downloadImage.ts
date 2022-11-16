import { jest } from '@jest/globals'
import type { DownloadImage } from '../downloadImage'

// 作为stub使用 但是返回值没啥用
const downloadImageModlue = jest.createMockFromModule<{
  downloadImage: DownloadImage
}>('../downloadImage')

downloadImageModlue.downloadImage = jest.fn<DownloadImage>().mockImplementation(async () => {
  return 'mock img'
})

module.exports = downloadImageModlue
