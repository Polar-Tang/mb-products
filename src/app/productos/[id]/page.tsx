"use client"
import Layout from "@/components/layout";
import ProductCard from "./ProductCard";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import HeroBanner from "@/components/hero-banner";
import ProductSkeleton from "./product-skeleton";
// app/store/[id]/page.tsx

export default function ProductDetailPage() {
  const [productsState, setproductsState] = useState<null>(null)
  const params = useParams();
  const getProduct = async () => {
    const slug = params.id;
    const response = await fetch(`/api/products/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const product = await response.json();
    setproductsState(product)
  }
  useEffect(() => {

    getProduct()
  }, [])

  return (
    <Layout heroBanner={<HeroBanner title="OBJETOS" imgPath="/images/bg-banner3.png" />} >
      {productsState ? <ProductCard product={productsState} /> : <ProductSkeleton /> }
  
    </Layout>
  );
}