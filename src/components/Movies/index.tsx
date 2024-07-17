"use client";
import { apiMovie } from "@/utils/network/axios";
import React, { useEffect, useState } from "react";
import ListMovie from "./listMovie";

const fetcher = (url: string) => apiMovie.get(url).then((res) => res.data);

const categories = [
  { key: "nowPlaying", label: "Now Playing", url: "/now_playing" },
  { key: "popular", label: "Popular", url: "/popular" },
  { key: "upcoming", label: "UpComing", url: "/upcoming" },
];

const MovieComponent = () => {
  const [active, setActive] = useState("nowPlaying");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setIsError(null);
      try {
        const category = categories.find((cat) => cat.key === active);
        if (category) {
          const data = await fetcher(category.url);
          setData(data);
        }
      } catch (error: any) {
        setIsError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [active]);

  return (
    <div className="min-h-screen">
      <div className="justify-center items-center flex">
        <h1 className="text-4xl font-bold">Movies Gallery</h1>
      </div>
      <div className="mt-4 mb-5 justify-center items-center flex">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`hover:bg-blue-500 px-4 py-2 ${key === "nowPlaying" ? "rounded-l-xl" : ""} ${key === "upcoming" ? "rounded-r-xl" : ""} ${active === key ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
          >
            {label}
          </button>
        ))}
      </div>
      {loading ? (
        <p className="text-center">
          <span className="loading loading-dots loading-lg"></span>
        </p>
      ) : isError ? (
        <p>Error: {isError?.message}</p>
      ) : (
        <ListMovie active={data} />
      )}
    </div>
  );
};

export default MovieComponent;
