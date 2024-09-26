import { NextResponse } from "next/server";

export async function GET(req) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/products.json`);
  const products = await res.json();
  const items = products.products;
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("q");

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.brand.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(filteredItems);
}
