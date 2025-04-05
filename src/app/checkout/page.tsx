"use client";

import PageLayout from "@/components/layout/page-layout";
import { useCart } from "@/context/cart-context";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChevronLeft, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const dynamic = "force-static";

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();

      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <PageLayout>
        <div className="py-12 boomzi-bg min-h-[70vh]">
          <div className="boomzi-container max-w-3xl mx-auto">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold mb-4">
                Заказ успешно оформлен!
              </h1>
              <p className="text-gray-600 mb-6">
                Спасибо за ваш заказ. Мы скоро свяжемся с вами для
                подтверждения.
              </p>
              <Link href="/">
                <Button className="boomzi-button rounded-none">
                  Вернуться на главную
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (items.length === 0) {
    return (
      <PageLayout>
        <div className="py-12 boomzi-bg min-h-[70vh]">
          <div className="boomzi-container max-w-3xl mx-auto">
            <div className="bg-white p-8 text-center">
              <h1 className="text-2xl font-semibold mb-4">Корзина пуста</h1>
              <p className="text-gray-600 mb-6">
                Добавьте товары в корзину, чтобы оформить заказ.
              </p>
              <Link href="/">
                <Button className="boomzi-button rounded-none">
                  Перейти к покупкам
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="py-12 boomzi-bg">
        <div className="boomzi-container">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center text-sm mb-8 hover:opacity-75 transition-opacity"
          >
            <ChevronLeft size={18} />
            <span>Продолжить покупки</span>
          </Link>

          <h1 className="text-2xl font-semibold mb-8">Оформление заказа</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side - Order summary */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 mb-6">
                <h2 className="text-lg font-medium mb-4">Ваш заказ</h2>
                <div className="divide-y">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="py-4 flex">
                      <div className="h-20 w-16 flex-shrink-0 bg-gray-100 mr-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-gray-400 hover:text-black"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500">
                          Размер: {item.size}
                        </p>
                        <div className="flex justify-between items-end mt-2">
                          <div className="flex items-center">
                            <span className="text-sm mr-2">
                              Кол-во: {item.quantity}
                            </span>
                            <select
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  Number.parseInt(e.target.value),
                                )
                              }
                              className="text-sm border p-1"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              ))}
                            </select>
                          </div>
                          <p className="text-sm font-medium">
                            {item.price * item.quantity} ₽
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-medium">
                    <span>Итого:</span>
                    <span>{totalPrice} ₽</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Customer info */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6">
                <h2 className="text-lg font-medium mb-4">
                  Информация для доставки
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1">
                        ФИО *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm mb-1">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm mb-1">
                        Адрес *
                      </label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm mb-1">
                          Город *
                        </label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="postalCode"
                          className="block text-sm mb-1"
                        >
                          Индекс *
                        </label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-sm mb-1">
                        Примечания
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full border border-gray-300 p-2 rounded-md"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="boomzi-button rounded-none w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Оформление..." : "Оформить заказ"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
