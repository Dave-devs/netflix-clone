import { Movie, MovieResponse } from "@/types";
import { axiosInstance } from "./axiosInstance";

export const getMovies = async (category: string): Promise<Movie[]> => {
  const { data } = await axiosInstance.get<MovieResponse>(
    `/movie/${category ? category : "now_playing"}?language=en-US&page=1`
  );

  return data.results;
};