import { useContext } from "react";
import MovieList from "./cine/MovieList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./context";
import { useMovies } from "./hooks/useMovies";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  const { movies } = useMovies();
  console.log(movies);

  return (
    <div className={`h-full  ${darkMode ? "dark" : ""}`}>
      <Header></Header>
      <main>
        <div className="container max-w-[1024px] m-auto  grid sm:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
    </div>
  );
}
