import PageLayout from "@/components/layout/page-layout";
import ProductDetail from "@/components/product/product-detail";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <PageLayout>
      <ProductDetail product={product} />
    </PageLayout>
  )
}
