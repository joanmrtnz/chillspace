"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // por si prefieres router.back()
import { FaArrowLeft } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type BackButtonProps = {
  href?: string;
  positionClass?: string;
};

export default function BackButton({
  href,
  positionClass = "absolute top-8 left-4", 
}: BackButtonProps) {
  const router = useRouter();

  const className =
    "p-3 text-[var(--color-black)] hover:bg-[var(--color-gray-200)] rounded-lg transition";


  if (href) {
    return (
      <Link href={href} aria-label="Go back">
        <button className={twMerge(positionClass, className)}>
          <FaArrowLeft />
        </button>
      </Link>
    );
  }

  return (
    <button
      aria-label="Go back"
      onClick={() => router.back()}
      className={twMerge(positionClass, className)}
    >
      <FaArrowLeft />
    </button>
  );
}
