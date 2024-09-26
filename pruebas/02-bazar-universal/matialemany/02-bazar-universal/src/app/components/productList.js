import { ProductCard } from "./productCard";

export default function ProductList({items, searchQuery}) {
    return (
        <div>
      <h1>Articulos Relacionados: {searchQuery}</h1>
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <li key={item.id}>
              <a href={`/items/${item.id}`}>
              <ProductCard product={item}/>
              </a>
            </li>
          ))}
      </ul>
    </div>
    )
}