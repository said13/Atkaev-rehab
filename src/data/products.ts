export interface Product {
  id: string
  name: string
  price: number
  images: string[]
  description: string
  details: string
}

export interface RelatedProduct {
  id: string
  name: string
  price: number
  oldPrice?: number
  image: string
}

// Product data based on what we saw on boomzi.store
export const products: Product[] = [
  {
    id: '1',
    name: 'Футболка "Тайп NAVY BLUE"',
    price: 4500,
    images: [
      'https://ext.same-assets.com/615341754/333363867.jpeg',
      'https://ext.same-assets.com/615341754/1793383301.jpeg',
      'https://ext.same-assets.com/615341754/2280773218.jpeg',
      'https://ext.same-assets.com/615341754/3984744309.jpeg'
    ],
    description: '"Тайп" теперь и на наших футболках с нового производства в Турции. Мы улучшили футболку используя более качественную и плотную ткань в цвете Navy Blue',
    details: 'Оверсайз\n100% хлопок'
  },
  {
    id: '2',
    name: 'Футболка "Топография NAVY BLUE"',
    price: 4500,
    images: [
      'https://ext.same-assets.com/615341754/3835176787.jpeg'
    ],
    description: 'Новая футболка из коллекции "Топография" в цвете Navy Blue',
    details: 'Оверсайз\n100% хлопок'
  },
  {
    id: '3',
    name: 'Футболка "Синтем Орнамент"',
    price: 4500,
    images: [
      'https://ext.same-assets.com/615341754/3211665750.jpeg'
    ],
    description: 'Футболка с орнаментом из коллекции "Синтем"',
    details: 'Оверсайз\n100% хлопок'
  },
  {
    id: '4',
    name: 'Футболка "Grozny Map 1.0 NAVY BLUE"',
    price: 4500,
    images: [
      'https://ext.same-assets.com/615341754/1365574751.jpeg'
    ],
    description: 'Футболка с картой города Грозный',
    details: 'Оверсайз\n100% хлопок'
  }
]

// Related products
export const relatedProducts: RelatedProduct[] = [
  {
    id: '101',
    name: 'Чехол "She De Mere" (mini)',
    price: 1500,
    image: 'https://ext.same-assets.com/615341754/3188720138.jpeg'
  },
  {
    id: '102',
    name: 'Шарф "Dagger"',
    price: 900,
    oldPrice: 1500,
    image: 'https://ext.same-assets.com/615341754/4120106734.jpeg'
  },
  {
    id: '2',
    name: 'Футболка "Топография NAVY BLUE"',
    price: 4500,
    image: 'https://ext.same-assets.com/615341754/3835176787.jpeg'
  },
  {
    id: '103',
    name: 'Наклейка Гелевая "Синтем"',
    price: 150,
    image: 'https://ext.same-assets.com/615341754/3211665750.jpeg'
  }
]
