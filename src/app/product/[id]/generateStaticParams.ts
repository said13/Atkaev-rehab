import { products } from "@/data/products";

export function generateStaticParams() {
  return [...products].map((product) => ({
    id: String(product.id),
  }));
}
