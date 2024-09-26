export function ProductCard({product}) {
    return (
        <div className="border-solid border-2 border-red-400 p-4 m-4">
      <h1>Title: {product.title}</h1>	
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Image: {product.images}</p>  
    </div>
    )
}