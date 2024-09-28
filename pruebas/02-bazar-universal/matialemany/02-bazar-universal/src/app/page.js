'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/items?q=${query}`);
  }
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-center m-16 text-4xl font-bold text-gray-800">
      What are you looking for?
    </h1>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="w-full max-w-md flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Iphone, laptop, smartphone, samsung, apple..."
          className="w-full px-6 py-3 border border-gray-400 rounded-l-lg text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-r-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </form>
  </div>
  );
}
