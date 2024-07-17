"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  active: any;
}

const HeartIconFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={"#ef4444"} viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const HeartIconOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default function ListMovie({ active }: Readonly<Props>) {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (id: number) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4 mt-4">
        {active?.results?.map((item: any, index: number) => (
          <div key={index} className="bg-white px-5 py-2 rounded-md shadow-md p-4 text-black relative">
            <Link href={`/movies/${item.id}`}>
              <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} width={400} height={700} className="w-full h-80 object-cover rounded mb-4" priority />
              <h1 className="text-sm font-bold mt-2">{item.title}</h1>
            </Link>
            <button onClick={() => toggleFavorite(item.id)} className={`absolute top-2 right-2 p-2 rounded-full bg-gray-300 text-black`}>
              {favorites.includes(item.id) ? <HeartIconFilled /> : <HeartIconOutline />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
