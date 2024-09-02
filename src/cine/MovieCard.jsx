/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine_utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false); //showModal State
  const [selectedMovie, setSelectedMovie] = useState(null); //selected movie state
  // destructured movie properties
  const { cover, title, genre, price, rating } = movie;
  // usedMovie Context
  const { cartData, setCartData } = useContext(MovieContext);
  // handle close
  function handleOnClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }
  // handle modal
  function handleShowModal(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }
  // handle cart data
  function handleCartData(event, movie) {
    event.stopPropagation();
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error(`${movie.title} movie already has been added`);
    }
  }
  return (
    <>
      {/* show the modal if only true */}
      {showModal && (
        <MovieDetailsModal
          onAddCart={handleCartData}
          movie={selectedMovie}
          onClose={handleOnClose}
        />
      )}
      <a
        className="flex flex-wrap  gap-2"
        onClick={() => handleShowModal(movie)}
        href="#"
      >
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <img
            className="w-full  object-cover flex flex-grow"
            src={getImgUrl(cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleCartData(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${price} | Add to Cart</span>
            </button>
          </figcaption>
        </figure>
      </a>
    </>
  );
}
