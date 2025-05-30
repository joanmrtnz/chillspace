"use client";
import Link from "next/link";
import {useTranslations} from 'next-intl';


export default function ProductCard({
  id,
  image,
  productLink,
  price,
}: {
  id: number;
  image: string;
  productLink: string,
  price: string;
}) {

  const tPr = useTranslations('products');
  const tUi = useTranslations('ui');


  return (
    <div className="max-w-[350px] h-[550px] flex flex-col justify-between backdrop-blur-lg bg-white/10 rounded-xl p-4 shadow-lg group">
    <div>
      <Link href={productLink} target="_blank">
        <div className="overflow-hidden rounded-md mb-3">
          <img
            src={image}
            alt={tPr(`${id}.title`)}
            className="h-[250px] w-full object-cover transform transition-transform duration-300 group-hover:scale-103 opacity-90"
          />
        </div>
      </Link>
      <h2 className="text-lg font-bold line-clamp-2 min-h-[3rem]">{tPr(`${id}.title`)}</h2>
      <p className="text-sm mt-2 line-clamp-3 min-h-[4.5rem]">{tPr(`${id}.description`)}</p>
    </div>
  
    <div>
      <p className="text-lg text-green-500 font-semibold mt-3">{price}</p>
      <Link href={productLink} target="_blank">
        <button className="mt-3 w-full font-bold bg-[var(--color-text-primary)]/90 text-white hover:bg-[var(--color-text-primary)] px-4 py-2 rounded">
          {tUi('buy-btn')}
        </button>
      </Link>
    </div>
  </div>
  
  
  );
}
