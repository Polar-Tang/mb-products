"use client"

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { CreditCard, Building2 } from 'lucide-react';
import { Product } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product[] }) {
    const PRODUCT_DETAIL = product[0]
    console.log("Producto", product)
    const { image, price, title } = PRODUCT_DETAIL

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-6xl mx-auto">
                <hgroup>
                    <h5 className='inline'>
                        <Link href='/'>
                            incio/

                        </Link>
                    </h5>
                    <h5 className='inline'>
                        <Link href='/productos'>
                            productos/
                        </Link>
                    </h5>
                </hgroup>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Image
                        src={image ? image : "/images/img-placeholder.png"}
                        width={600}
                        height={400}
                        alt={title ? title : "Imagen no cargada"}
                        className="w-full h-96 object-cover"
                    />

                    {/* Product Details */}
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="p-6 space-y-6">
                                {/* Price Section */}
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-green-600">
                                        {price ? `$${price.toLocaleString()}` : 'Negociable'}
                                    </div>

                                </div>

                                <Button
                                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 text-lg"
                                    size="lg"
                                >
                                    AGREGAR AL CARRITO
                                </Button>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Card className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4 text-center">
                                    <Building2 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                                    <div className="text-sm font-medium">Envío seguro</div>
                                    <div className="text-xs text-gray-600">A todo el país</div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4 text-center">
                                    <CreditCard className="w-8 h-8 mx-auto mb-2 text-green-600" />
                                    <div className="text-sm font-medium">Pago seguro</div>
                                    <div className="text-xs text-gray-600">Múltiples opciones</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                            <div
                                className='w-full text-black text-base leading-[1.5] pr-4' 
                                style={{ "fontFamily": "Verdana, Geneva, sans-serif" }}

                            >
                                <p>LÁMPARA: Lúz cálida o luz neutra. LED 47w</p>
                                <p>USO: Techo</p>
                                <p>MATERIAL:&nbsp;</p>
                                <p>MEDIDAS: 60 y 30cm</p>
                                <p>CONEXIÓN: Directa a 220v.</p>
                                <p>MODELO:&nbsp;</p>
                            </div>
                </div>
            </div>
        </div>
    );
}