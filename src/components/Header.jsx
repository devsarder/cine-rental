import { useContext, useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import CarDetails from "../cine/CartDetails";
import { MovieContext, ThemeContext } from "../context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  // import cartData
  const { cartData } = useContext(MovieContext);
  // import themContext
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <>
      {showCart && <CarDetails onClose={() => setShowCart(false)} />}
      <header>
        <nav className="container max-w-[1280px] m-auto  flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setShowCart(true)}
              >
                <img src={ShoppingCart} width="24" height="24" alt="" />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
