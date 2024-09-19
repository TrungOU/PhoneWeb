import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-cyan-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="H.D.T Logo" width={40} height={40} className="rounded-full" />
        <h1 className="text-white text-2xl font-semibold ml-3">H.D.T Shop</h1>
        </Link>
        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="Nhập thứ cần tìm..."
            className="w-full p-2 pr-10 rounded"
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/cart" className="text-white hover:text-gray-200">
            <ShoppingCartIcon className="h-6 w-6" />
          </Link>
          <Link href="/login" className="text-white hover:text-gray-200">
            <UserIcon className="h-6 w-6" />
          </Link>
        </nav>
      </div>
    </header>
  )
}