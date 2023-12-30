"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen grid place-content-center p-24 bg-[#F83813] relative">
      <div className="grid place-items-center gap-6">
        <Image
          src="/ic_queen.svg"
          alt="SCC Logo"
          priority
          className="w-16"
          width={150}
          height={150}
        />
        <h1 className="md:text-3xl text-xl whitespace-nowrap font-black text-center text-white">
          SCC Grand Prix Blitz
        </h1>
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <button
          className="bg-white text-[#F83813] text-base font-bold w-fit mx-auto px-6 py-4 rounded-full"
          onClick={() => router.push("/opening")}
        >
          Take a Look
        </button>
      </div>
    </main>
  );
}
