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
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <img src={image} alt={title} width={200} height={200} className="rounded-lg mx-auto" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-sm mt-2">{description}</p>
      <p className="text-lg text-green-500 font-semibold mt-3">{price}</p>
      <Link href={productLink} target="_blank" className="text-red-500 hover:text-red-400 ">
        <button className="mt-4 w-full font-bold bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">
          Comprar
        </button>
      </Link>
    </div>
  );
}
