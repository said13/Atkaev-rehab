'use client'

import type { Product } from '@/data/products'
import { relatedProducts } from '@/data/products'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/cart-context'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('L')
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const { addItem } = useCart()

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1))
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
      image: product.images[0]
    })
  }

  return (
    <div>
      {/* Back button */}
      <Link href="/" className="inline-flex items-center text-sm mb-8 hover:opacity-75 transition-opacity">
        <ChevronLeft size={18} />
        <span>Вернуться в основной список</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <div className="aspect-square bg-white overflow-hidden">
            <img
              src={product.images[activeImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail images */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mt-2">
              {product.images.map((image, index) => (
                <div
                  key={`image-${product.id}-${index}`}
                  className={`aspect-square bg-white overflow-hidden cursor-pointer border-2 ${
                    activeImageIndex === index ? 'border-black' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} - вид ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product details */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
          <div className="mb-6">
            <p className="text-xl">{product.price} ₽</p>
          </div>

          {/* Size selector */}
          <div className="mb-6">
            <p className="text-sm mb-2">Размер</p>
            <div className="inline-block relative">
              <select
                className="appearance-none border border-gray-300 py-2 px-4 pr-8 w-full max-w-[200px]"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.533 0.481-1.141 0.446-1.574 0l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Quantity selector */}
          <div className="mb-6">
            <div className="flex items-center">
              <button
                className="border border-gray-300 p-2"
                onClick={decrementQuantity}
              >
                <Minus size={16} />
              </button>
              <span className="border-t border-b border-gray-300 px-4 py-2">{quantity}</span>
              <button
                className="border border-gray-300 p-2"
                onClick={incrementQuantity}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Buy button */}
          <div className="mb-8">
            <Button
              className="boomzi-button w-full max-w-[200px] rounded-none"
              onClick={handleAddToCart}
            >
              В корзину
            </Button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-sm">{product.description}</p>
          </div>

          {/* Details */}
          <div>
            <p className="text-sm whitespace-pre-line">{product.details}</p>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-16">
        <h2 className="text-xl mb-6">Вам может понравиться</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/product/${product.id}`}>
                <div className="aspect-square bg-white overflow-hidden mb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-normal">{product.name}</h3>
                  <p className="text-sm mt-1">
                    {product.oldPrice ? (
                      <>
                        <span>{product.price} ₽</span>
                        <span className="line-through ml-2 text-gray-400">{product.oldPrice} ₽</span>
                      </>
                    ) : (
                      <span>{product.price} ₽</span>
                    )}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
