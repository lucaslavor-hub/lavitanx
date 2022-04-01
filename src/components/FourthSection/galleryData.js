import { images } from '../../assets/horizontalGallery'

const gallery = [...images, ...images];

// row, RowSize, col, colSize
const gridValues = [
  [1, 2, 12, 5],
  [18, 2, 7, 8],
  [29, 5, 12, 3],
  [16, 10, 13, 4],
  [30, 14, 5, 6]
]

export { gallery, gridValues }