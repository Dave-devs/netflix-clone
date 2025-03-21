import { useQuery } from "@tanstack/react-query"
import { getMovies } from "./api"

export function useMovies(category: string) {
  return useQuery({
    queryKey: ["movies", category],
    queryFn: () => getMovies(category),
  });
}