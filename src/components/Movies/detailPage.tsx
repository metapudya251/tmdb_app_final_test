"use client";
import { IMovie } from "@/lib/movie";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  data: IMovie;
}

const DetailPage = ({ data }: Props) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <div className="p-1 mb-5 mt-3">
        <button type="button" onClick={handleBack} className="text-blue-500 bg-white hover:bg-slate-300 flex items-center mb-4 rounded-md py-2 px-4">
          <p className="text-[#22356F] font-bold">Back</p>
        </button>
      </div>
      <div className="flex flex-row bg-slate-400 justify-center items-center shadow-md">
        <div className="ms-12">
          <Image className="bg-white px-2 py-2 rounded-md shadow-md p-2" src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt="" width={500} height={500} />
        </div>
        <div className="ms-12 text-black me-5 px-5 py-5">
          <h1 className="text-3xl font-bold">{data?.title}</h1>

          <div className="mt-5">
            <p className="text-justify">
              <b className="text-md">Popularity </b>
              {data?.popularity}
            </p>
            <p className="text-justify">
              <b className="text-md">Overview </b>
              {data?.overview}
            </p>
            <br />
            <p className="text-justify">
              <b className="text-md">Release Date </b>
              {data?.release_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
