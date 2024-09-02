import { useContext } from "react";
import { MoviesContext } from "../context";

export function useMovies() {
  const { movies, setMovies } = useContext(MoviesContext);
  return {
    movies,
    setMovies,
  };
}
