import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import React from 'react'

const ProductCardSkeleton = () => {
    return (
        <Card className="group hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="p-0">
                <div className="relative">
                    <Image
                        src={'/images/img-placeholder.png'}
                        alt={'Imagen no cargada'}
                        width={300}
                        height={300}
                        className="object-cover w-full h-64 transition-transform duration-300"
                    />
                    
                </div>

                {/* Product Info */}
                <div className="p-4">
                    <Skeleton className="text-inhetsm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                    </Skeleton>

                    <div className="mb-4">
                        <Skeleton className="text-lg font-bold text-sm text-green-600"
                            style={{ "fontFamily": "Verdana, Geneva, sans-serif" }}
                        >
                        </Skeleton>
                    </div>

                    <Skeleton
                        className="w-full bg-black hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center"
                    >
                        
                    </Skeleton>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCardSkeleton