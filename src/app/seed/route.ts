// import { prdoctToSeed } from '../lib/products';
// import sql from '../lib/sql';



// async function seedProducts() {
//     await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     await sql`
//         CREATE TABLE IF NOT EXISTS products (
//             id SERIAL PRIMARY KEY,
//             title VARCHAR(255) NOT NULL,
//             price NUMERIC,
//             description TEXT NOT NULL,
//             category VARCHAR(255) NOT NULL,
//             image TEXT NOT NULL,
//             images TEXT[], -- Array of image URLs
//             rating_rate NUMERIC,
//             rating_count INT,
//             tags TEXT[],
//             stock INT,
//             weight NUMERIC,
//             dimensions_length NUMERIC,
//             dimensions_width NUMERIC,
//             dimensions_height NUMERIC,
//             dimensions_dos_personas INT,
//             dimensions_cuatro_personas INT,
//             dimensions_seis_personas INT,
//             brand VARCHAR(255),
//             created_at TIMESTAMP,
//             updated_at TIMESTAMP,
//             is_active BOOLEAN NOT NULL DEFAULT true
//         );
//     `;

//     const insertedProducts = await Promise.all(
//         prdoctToSeed.map((product) => sql`
//                 INSERT INTO products (
//                     id, title, price, description, category, image, images,
//                     rating_rate, rating_count, tags, stock, weight,
//                     dimensions_length, dimensions_width, dimensions_height,
//                     dimensions_dos_personas, dimensions_cuatro_personas, dimensions_seis_personas,
//                     brand, created_at, updated_at, is_active
//                 ) VALUES (
//                     ${product.id ?? null}, ${product.title ?? null}, ${product.price ?? null}, ${product.description ?? null}, ${product.category ?? null}, ${product.image ?? null}, ${product.images ?? null},
//                     ${product.rating?.rate ?? null}, ${product.rating?.count ?? null}, ${product.tags ?? null}, ${product.stock ?? null}, ${product.weight ?? null},
//                     ${product.dimensions?.length ?? null}, ${product.dimensions?.width ?? null}, ${product.dimensions?.height ?? null},
//                     ${product.dimensions?.dosPersonas ?? null}, ${product.dimensions?.cuatroPersonas ?? null}, ${product.dimensions?.seisPersonas ?? null},
//                     ${product.brand ?? null}, ${product.createdAt ?? null}, ${product.updatedAt ?? null}, ${product.isActive ?? null}
//                 )
//                 ON CONFLICT (id) DO NOTHING;
//                 `
//         )
//     );

//     return insertedProducts;
// }

// export async function GET() {
//     try {
//         const result = await sql.begin((sql) => [
//             seedProducts(),
//         ]);
//         console.log("The result is: ",result)
//         return Response.json({ message: 'Database seeded successfully' });
//     } catch (error) {
//         return Response.json({ error }, { status: 500 });
//     }
// }