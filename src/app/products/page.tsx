"use client";

import ProductCard from "@/app/products/ProductCard";
import products from "../../lib/products/products";

export default function Products() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Productos Chill</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            productLink={product.productLink}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
