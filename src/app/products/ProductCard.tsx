"use client";

import Image from "next/image";
import Link from "next/link";


export default function ProductCard({
  title,
  image,
  description,
  productLink,
  price,
}: {
  title: string;
  image: string;
  productLink: string,
  description: string;
  price: string;
}) {
  return (
    <div className="w-full backdrop-blur-lg bg-[var(--white)]/5 rounded-xl p-4 sm:p-4 shadow-lg">
      <img src={image} alt={title} width={200} height={200} className="rounded-lg mx-auto" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-sm mt-2">{description}</p>
      <p className="text-lg text-green-500 font-semibold mt-3">{price}</p>
      <Link href={productLink} target="_blank" >
        <button className="mt-4 w-full font-bold bg-[var(--green)]/90 text-white hover:bg-[var(--green)] px-4 py-2 rounded">
          Comprar
        </button>
      </Link>
    </div>
  );
}
