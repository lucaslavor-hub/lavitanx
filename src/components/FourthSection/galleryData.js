import { images } from '../../assets/horizontalGallery'

const gallery = [...images, ...images];

// row, RowSize, col, colSize
const gridValues = [
  [9, 2, 12, 2],
  [18, 2, 7, 1],
  [29, 5, 12, 3],
  [16, 10, 13, 3],
  [30, 14, 5, 2]
]

export { gallery, gridValues }