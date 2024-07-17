import React from "react";
import Image from "next/image";
import { apiMovie } from "@/utils/network/axios";

const getMovieData = async (param: string) => {
  let res;
  await apiMovie
    .get(param)
    .then((response) => {
      console.log("Response", response);
      res = response.data;
      // return response.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = (await getMovieData(params.id)) as any;
  return (
    <div className="min-h-screen justify-center">
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

export default MovieDetailPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { slug } = context.params!;
//   const res = await apiMovie.get(slug as string);
//   const data = res.data;

//   return {
//     props: {
//       data,
//     },
//   };
// };
