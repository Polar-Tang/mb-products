import sql from "@/app/lib/sql";

export async function GET({ params }: {params:  Promise<{slug: string}>}) {
  try {
    const { slug } = await params
    console.log("RThew slug ", slug)
    const products = await sql`
      select * from products where id = ${slug}
    `;
    return Response.json(products);
  } catch (error) {
    console.log(error)
    return Response.json({ error: error }, { status:500 });
  }
}