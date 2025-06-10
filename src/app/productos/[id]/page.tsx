// app/store/[id]/page.tsx
import { getProductById, getProducts } from '@/lib/products';

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductById(Number(params.id));

  if (!product) {
    return <p>{product}</p>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full max-h-96 object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              ${product.price}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                {'★'.repeat(Math.round(product.rating.rate))}
                {'☆'.repeat(5 - Math.round(product.rating.rate))}
              </span>
              <span className="text-gray-500 ml-2">
                ({product.rating.count} reviews)
              </span>
            </div>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}