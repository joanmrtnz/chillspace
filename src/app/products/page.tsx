"use client";

import { useEffect, useState } from "react";
import products from "../../lib/products/products";
import ProductCard from "@/app/products/ProductCard";
import BackButton from "@/components/BackButton";

export default function ProductsPage() {
  const itemsPerPage = 9; 
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  return (
    <div className="bg-black/1 md:min-h-screen min-h-[80vh] pt-[100px] flex flex-col items-center justify-center text-left m-auto p-4 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-[150px]">
      <BackButton href="/" positionClass="absolute top-21 left-4" />  
      <h1 className="text-3xl font-bold mb-6 text-center">Productos</h1>
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
          className="px-4 py-2 text-[var(--color-slate-500)] hover:text-[var(--color-slate-700)]/80 bg-opacity-40 bg-[var(--color-gray-100)]/30 
          hover:bg-[var(--color-slate-200)]/20  border hover:border-[var(--color-text-primary_20)] border-[var(--color-text-primary_80)] 
          rounded disabled:opacity-50 disabled:hover:border-[var(--color-text-primary_80)] disabled:hover:bg-[var(--color-gray-100)]/30 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
       
        <span className="text-sm px-2 py-2 text-[var(--color-slate-500)]">{currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-[var(--color-slate-500)] hover:text-[var(--color-slate-700)]/80 bg-opacity-40 bg-[var(--color-gray-100)]/30 
          hover:bg-[var(--color-slate-200)]/20  border hover:border-[var(--color-text-primary_20)] border-[var(--color-text-primary_80)] 
          rounded disabled:opacity-50 disabled:hover:border-[var(--color-text-primary_80)] disabled:hover:bg-[var(--color-gray-100)]/30 disabled:cursor-not-allowed"
        >
          Siguiente
        </button>
        </div>
    </div>
  );
}
