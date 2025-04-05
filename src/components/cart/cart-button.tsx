'use client'

import { useCart } from '@/context/cart-context'
import { ShoppingBag } from 'lucide-react'

export default function CartButton() {
  const { toggleCart, totalItems } = useCart()

  return (
    <button
      className="relative p-2"
      onClick={toggleCart}
      aria-label="Open cart"
    >
      <ShoppingBag size={20} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  )
}
