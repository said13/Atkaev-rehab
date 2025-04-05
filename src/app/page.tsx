"use client";

import PageLayout from "@/components/layout/page-layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function Home() {
  return (
    <PageLayout>
      <div className="boomzi-bg py-16">
        <div className="boomzi-container">
          <div className="hidden md:flex justify-center mb-12 space-x-6 text-sm">
            <button className="hover:opacity-75 transition-opacity">Все</button>
            <button className="hover:opacity-75 transition-opacity">
              Футболки
            </button>
            <button className="hover:opacity-75 transition-opacity">
              Свитеры
            </button>
            <button className="hover:opacity-75 transition-opacity">
              Лонгсливы
            </button>
            <button className="hover:opacity-75 transition-opacity">
              Худи
            </button>
            <button className="hover:opacity-75 transition-opacity">
              Постеры
            </button>
            <button className="hover:opacity-75 transition-opacity">
              Брелки
            </button>
            <button className="hover:opacity-75 transition-opacity">
              Ковры
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <Link href={`/product/${product.id}`}>
                  <div className="aspect-square bg-white overflow-hidden mb-2">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-sm font-normal">{product.name}</h3>
                    <p className="text-sm mt-1">{product.price} ₽</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="boomzi-button rounded-none">
              Загрузить еще
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
