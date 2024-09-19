import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
  id: string
  name: string
  price: number
  image: string
  brand: string
}

const products: Product[] = [
  { id: '1', name: 'iPhone 12', price: 27990000, image: '/images/iphone-12.jpg', brand: 'Apple' },
  { id: '2', name: 'Samsung Galaxy S21', price: 19990000, image: '/images/samsung-s21.jpg', brand: 'Samsung' },
  { id: '3', name: 'Oppo Reno5', price: 8690000, image: '/images/oppo-reno5.jpg', brand: 'Oppo' },
  { id: '4', name: 'Xiaomi Redmi Note 10', price: 5090000, image: '/images/xiaomi-redmi-note-10.jpg', brand: 'Xiaomi' },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products)
}