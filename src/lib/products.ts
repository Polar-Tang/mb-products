// lib/products.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function getProducts(): Promise<Product[]> {
  // Fake API data
  return [
    {
      id: 1,
      title: "Product 1",
      price: 109.95,
      description: "Description for product 1",
      category: "category1",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 2,
      title: "Product 2",
      price: 22.3,
      description: "Description for product 2",
      category: "category2",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    // Add more products as needed
  ];
}

export async function getProductById(id: number): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find(product => product.id === id);
}