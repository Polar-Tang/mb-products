"use client"
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import React from 'react'

const ProductSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Image
                        src={'/images/img-placeholder.png'}
                        width={600}
                        height={400}
                        alt={"Imagen no cargada"}
                        className="w-full h-96 object-cover"
                    />

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            <div className="p-6 space-y-6">
                                {/* Price Section */}
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-green-600">

                                    </div>

                                </div>




                                {/* Quantity Selector */}
                                <div className="space-y-2">
                                    <Skeleton className="text-sm font-medium text-gray-700">
                                        Cantidad
                                    </Skeleton>
                                    <Skeleton
                                        id="quantity"

                                        className="w-20"
                                    />
                                </div>

                                <Skeleton
                                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 text-lg"
                                >
                                    AGREGAR AL CARRITO
                                </Skeleton>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="hover:shadow-md transition-shadow">
                                <div className="p-4 text-center">
                                    <Skeleton className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                                    <Skeleton className="text-sm font-medium"></Skeleton>
                                    <Skeleton className="text-xs text-gray-600"></Skeleton>
                                </div>
                            </div>

                            <div className="hover:shadow-md transition-shadow">
                                <div className="p-4 text-center">
                                    <Skeleton className="w-8 h-8 mx-auto mb-2 text-green-600" />
                                    <Skeleton className="text-sm font-medium">Pago seguro</Skeleton>
                                    <Skeleton className="text-xs text-gray-600">Múltiples opciones</Skeleton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSkeleton