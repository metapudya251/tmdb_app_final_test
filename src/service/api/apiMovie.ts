"use server";

import { IMovie } from "@/lib/movie";
import { apiMovie } from "@/utils/network/axios";

// export const apiGetNowPlaying = () => apiMovie.get("");

// Define the API call
export const apiGetNowPlaying = async () => {
  const response = await apiMovie.get("/now_playing"); // Replace with your API URL
  return response.data;
};
