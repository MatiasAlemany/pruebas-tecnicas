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
    <div>
      <h1 className="text-center m-16 text-4xl font-bold text-gray-800">
        What you looking for?
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full"
      >
        <div className="w-full max-w-3/4 md:max-w-lg lg:max-w-2xl flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Looking for something?"
            className="w-full px-8 py-3 border border-gray-400 rounded-l-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-r-lg shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
