import { useQuery } from "@tanstack/react-query";
import { apiGetNowPlaying } from "../api/apiMovie";

export const useGetNowPlaying = () => {
  return useQuery({
    queryKey: ["get-now-playing"],
    queryFn: apiGetNowPlaying,
  });
};
