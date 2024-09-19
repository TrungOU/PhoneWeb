import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className="bg-cyan-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Logo</Link>
        <nav className="flex space-x-4">
          <Link href="/" className={`hover:underline ${router.pathname === '/' ? 'font-bold' : ''}`}>Trang chủ</Link>
          <Link href="/products" className={`hover:underline ${router.pathname === '/products' ? 'font-bold' : ''}`}>Sản phẩm</Link>
          <Link href="/about" className={`hover:underline ${router.pathname === '/about' ? 'font-bold' : ''}`}>Về chúng tôi</Link>
          <Link href="/contact" className={`hover:underline ${router.pathname === '/contact' ? 'font-bold' : ''}`}>Liên hệ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="hover:underline">Giỏ hàng</Link>
          <Link href="/login" className="hover:underline">Đăng nhập</Link>
        </div>
      </div>
    </header>
  )
}