import { products } from "@/data/products";

export function generateStaticParams() {
  return [...products].map((product) => ({
    // Явное создание массива
    id: String(product.id), // Явное преобразование в строку
  }));
}
