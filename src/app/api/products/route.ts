import sql from "@/app/lib/sql";


export async function GET() {
  
  try {
    const products = await sql`
    select * from products
  `
    return Response.json(products);

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}