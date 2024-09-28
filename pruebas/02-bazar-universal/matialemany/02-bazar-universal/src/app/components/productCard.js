"use client";

import { useRouter } from "next/navigation";
import ProductDetailCard from "./productDetailCard";

export function ProductCard({ product }) {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <div>
      <ProductDetailCard product={product} />
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
