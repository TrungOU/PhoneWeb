import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={image} alt={name} width={300} height={300} className="w-full" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-red-500 font-bold">{price.toLocaleString('vi-VN')} ₫</p>
        <div className="mt-4 flex justify-between">
          <Link href={`/product/${id}`} className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
            Xem chi tiết
          </Link>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  )
}