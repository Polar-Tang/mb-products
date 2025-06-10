"use client"
import HeroBanner from "@/components/hero-banner"
import Layout from "@/components/layout"
import Link from 'next/link';
import { Product } from '@/lib/products';
import { useEffect, useState } from "react";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from "next/image";
import ProductCardSkeleton from "./product-card-skeleton";

export default function Home() {
  // fetch /api 
  const [productState, setProductState] = useState([] as Product[])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProductState(data)
    }
    getProducts()
  }, [])


  return (
    <Layout heroBanner={<HeroBanner title="OBJETOS" imgPath="/images/bg-banner3.png" />}>


      <div className="max-w-7xl mx-auto p-6 xl:w-[1170px]">

        <h1 className="font-medium leading-tight text-inherit font-inherit mb-8 text-2xl font-medium leading-[1.1] text-inherit"
        style={{ "fontFamily": "inherit"}}
        >Productos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {
          (productState && productState.length > 0) ? 
          productState.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image ? product.image : '/images/img-placeholder.png'}
                      alt={product.title ? product.title : 'Imagen no cargada'}
                      width={300}
                      height={300}
                      className="object-cover w-full h-64 transition-transform duration-300"
                    />
                    {product.id === 4 && (
                      <div className="absolute bottom-3 left-3 flex space-x-1">
                        <div className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-inhetsm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                      {product.title}
                    </h3>

                    <div className="mb-4">
                      <span className="text-lg font-bold text-sm text-green-600"
                        style={{ "fontFamily": "Verdana, Geneva, sans-serif" }}
                      >
                        {product.price ? `$${product.price?.toLocaleString('es-AR', { minimumFractionDigits: 2 })}` : 'Negociable'}
                      </span>
                    </div>

                    <div
                      className="w-full bg-black hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center"
                    >
                      <Link href={`/productos/${product.id}`}>
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
            : Array.from({length: 8}).map((_, i) => <ProductCardSkeleton key={i}/>)
          }
        </div>
      </div>
    </Layout>
  )
}