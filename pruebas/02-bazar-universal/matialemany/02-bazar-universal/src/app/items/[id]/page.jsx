import { ProductCard } from "@/app/components/productCard";


export default async function ItemDetailsPage({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/items/${params.id}`);
  const product = await res.json();
  console.log("PRODUCT", product);

  return (<>
    <div>
      <ProductCard product={product}/>
    </div>
    </>
  );
}
