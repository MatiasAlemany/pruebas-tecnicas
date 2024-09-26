
export async function GET(req) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/products.json`); 
  const data = await res.json();
  const products = data.products;
  console.log("DATA", products);


  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  console.log("ID", id);

  const product = products.find((product) => product.id == id);
  console.log("PRODUCT", product);

  if (!products) {
    return new Response(null, { status: 404 });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
