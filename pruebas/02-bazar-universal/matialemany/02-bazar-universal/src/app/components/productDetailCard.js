import { ProductCard } from "./productCard";
import Image from "next/image";

export default function ProductDetailCard({ product }) {
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 m-4 bg-white">
        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
        <p className="mt-2 text-gray-600">Description: {product.description}</p>
        <p className="mt-2 text-gray-800 font-semibold">Price: ${product.price}</p>
        <p className="mt-2 text-gray-600">Category: {product.category}</p>
        {/* URL FOR IMAGES NOT WORKING. CODE IT IS WORKING. */}
        {/* Si decides habilitar las imágenes, descomenta el siguiente código */}
         {/* {product.images.length > 0 &&
          product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${product.title} image ${index + 1}`}
              width={200}
              height={200}
              priority={index === 0}
              unoptimized={true}
              className="mt-4 rounded-lg shadow-md" // Estilo para la imagen
            />
          ))} */} 
      </div>
    )
}