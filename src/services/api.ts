import { Movie, MovieResponse, Video, VideoResponse } from "@/types";
import { axiosInstance } from "./axiosInstance";

export const getMovies = async (category: string): Promise<Movie[]> => {
  const { data } = await axiosInstance.get<MovieResponse>(
    `/movie/${category ? category : "now_playing"}?language=en-US&page=1`
  );

  return data.results;
};

export const getMovieDetails = async (id: string): Promise<Video[]> => {
  const { data } = await axiosInstance.get<VideoResponse>(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
  );

  return data.results;
}