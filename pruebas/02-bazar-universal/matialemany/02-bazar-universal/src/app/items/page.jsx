'use client'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductList from "../components/productList";

export default function ItemsPage() {
  const searchParams = useSearchParams('');
  const searchQuery = searchParams.get("q");
  console.log("MY QUERY",searchQuery);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch(`/api/items?q=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [searchQuery]);
  
  
  return (
    <ProductList items={items} searchQuery={searchQuery} />
  );
}
