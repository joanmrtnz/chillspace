"use client";

import { useState } from "react";
import products from "../../lib/products/products";
import ProductCard from "@/app/products/ProductCard";

export default function ProductsPage() {
  const itemsPerPage = 9; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  return (
    <div className="md:min-h-screen min-h-[80vh] pt-[100px] flex flex-col items-start justify-center text-left px-6 md:px-20 m-auto bg-[var(--navy)] p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Productos Chill</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentProducts.map((product) => (
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
       <div className="flex justify-center gap-4 mt-10 mb-5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 text-[var(--green)] hover:bg-teal-700/10 bg-[var(--navy)]  border border-[var(--green)] rounded disabled:opacity-50"
        >
          Anterior
        </button>
       
        <span className="text-sm px-2 py-2 text-[var(--light-slate)]">{currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-[var(--green)] hover:bg-teal-700/10 bg-[var(--navy)]  border border-[var(--green)] rounded disabled:opacity-50"
        >
          Siguiente
        </button>
        </div>
    </div>
  );
}
