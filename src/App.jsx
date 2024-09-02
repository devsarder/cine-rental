import { useState } from "react";
import Page from "./Page";
import { MovieContext, MoviesContext, ThemeContext } from "./context";
import { getAllMovies } from "./data/movies";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [movies, setMovies] = useState(getAllMovies());
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <MoviesContext.Provider value={{ movies, setMovies }}>
            <Page />
          </MoviesContext.Provider>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
