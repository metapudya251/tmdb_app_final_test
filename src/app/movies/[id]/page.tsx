import React from "react";

import { apiMovie } from "@/utils/network/axios";
import DetailPage from "@/components/Movies/detailPage";

const getMovieData = async (param: string) => {
  let res;
  await apiMovie
    .get(param)
    .then((response) => {
      res = response.data;
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
      <DetailPage data={data} />
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
