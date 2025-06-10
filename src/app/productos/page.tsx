"use client"
import Navigation from "@/components/navigation"
import HeroBanner from "@/components/hero-banner"
import Layout from "@/components/layout"
import Link from 'next/link';
import { getProducts, Product } from '@/lib/products';
import { useEffect, useState } from "react";

export default function Home() {
  const [productState, setProductState] = useState([] as Product[])
  const callProducts = async () => { 
    const productirijillos = await getProducts()
    setProductState(productirijillos)
  }

  useEffect(() => {
    callProducts()
  }, [])
  

  return (
    <Layout heroBanner={<HeroBanner title="OBJETOS" imgPath="/images/bg-banner3.png" />}>


      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(productState.length == 0 || !productState) 
          ? Array.from({length: 10}).map((product) => (
            <p>Skeleton</p>
          )) 
          : productState.map((product) => (
            <div key={product.id} className="p-4 grid-col grid-rows-2"
              style={{padding: "14px 8px;"}}
            >
              <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-xl text-cloud font-[Roboto] font-bold tracking-normal leading-[1.56] tracking-tight mb-6 text-center"
              style={{"fontFamily": "Roboto, sans-serif"}}
              >
              <Link
                href={`/productos/${product.id}`}
              >
                {product.title}
              </Link>
              </h2>
              <p className="text-sm text-[12pt] text-stormy leading-[1.56] mt-2 line-clamp-2 text-center">
              {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}