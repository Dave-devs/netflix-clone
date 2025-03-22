import { useQuery } from "@tanstack/react-query"
import { getMovieDetails, getMovies } from "./api"

export function useMovies(category: string) {
  return useQuery({
    queryKey: ["movies", category],
    queryFn: () => getMovies(category),
  });
}

export function useMovieDetails(id: string) {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id
  })
}
