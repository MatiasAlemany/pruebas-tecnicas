"use client";
import { ProductCard } from "./productCard";
import { useRouter } from "next/navigation";
import ProductDetailCard from "./productDetailCard";

export default function ProductList({ items, searchQuery }) {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-center my-8 text-4xl font-bold text-gray-800">
        {items.length > 0
          ? `Articles related to ${searchQuery}`
          : `There are no articles related to ${searchQuery}`}
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <li key={item.id} className="transition-transform duration-200 hover:scale-105">
            <a href={`/items/${item.id}`}>
              <ProductDetailCard product={item} />
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-10">
        <button
          type="button"
          onClick={handleClick}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
}
