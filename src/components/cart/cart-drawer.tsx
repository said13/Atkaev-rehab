"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    toggleCart,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isCartOpen &&
        !target.closest(".cart-drawer") &&
        !target.closest(".cart-toggle")
      ) {
        toggleCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <>
      <button
        className="cart-toggle relative p-2 text-black"
        onClick={toggleCart}
        aria-label="Open cart"
      >
        <ShoppingBag size={20} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs bg-black text-white rounded-full">
            {totalItems}
          </span>
        )}
      </button>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="cart-drawer fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-lg flex flex-col transform transition-transform">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Корзина</h2>
              <button
                onClick={toggleCart}
                className="p-2 text-gray-500 hover:text-black"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <p className="text-lg font-medium mb-2">Корзина пуста</p>
                <p className="text-gray-500 mb-6">Добавьте товары в корзину</p>
                <Button
                  onClick={toggleCart}
                  className="boomzi-button rounded-none"
                >
                  Продолжить покупки
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-grow overflow-y-auto p-4">
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li
                        key={`${item.id}-${item.size}`}
                        className="flex space-x-4 pb-4 border-b"
                      >
                        <div className="h-20 w-16 flex-shrink-0 bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500 mb-1">
                            Размер: {item.size}
                          </p>
                          <p className="text-sm mb-2">{item.price} ₽</p>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.quantity - 1,
                                )
                              }
                              className="p-1 border border-gray-300 hover:bg-gray-100"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.quantity + 1,
                                )
                              }
                              className="p-1 border border-gray-300 hover:bg-gray-100"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="p-1 text-gray-400 hover:text-black"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border-t">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Итого:</span>
                    <span className="font-semibold">{totalPrice} ₽</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={toggleCart}
                      variant="outline"
                      className="rounded-none"
                    >
                      Продолжить покупки
                    </Button>
                    <Link href="/checkout">
                      <Button
                        className="boomzi-button rounded-none w-full"
                        onClick={toggleCart}
                      >
                        Оформить заказ
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
