import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const NavBar = () => {
  const {
    openCart,
    cartQuantity,
  } = useShoppingCart();


  return (
    <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold flex space-x-4 items-center">
          <NavLink to="/" className="hover:text-gray-700">
            Shopping Cart
          </NavLink>
          <div className="space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-600 hover:text-black ${isActive ? "text-black font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/store"
              className={({ isActive }) =>
                `text-gray-600 hover:text-black ${isActive ? "text-black font-semibold" : ""}`
              }
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-600 hover:text-black ${isActive ? "text-black font-semibold" : ""}`
              }
            >
              About
            </NavLink>
          </div>
        </div>
        <button className="relative border-1 border-indigo-600 transition-colors hover:text-white hover:bg-indigo-600 bg-white text-black px-4 py-2 rounded-full hover:cursor-pointer" aria-label="Shopping cart"
          onClick={openCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <circle cx="9" cy="19" r="1.5" />
            <circle cx="17" cy="19" r="1.5" />
            <path d="M3 4h2l2.2 9.2a1 1 0 0 0 1 .8h9.9a1 1 0 0 0 1-.8L20 7H7" />
          </svg>
          <span className="absolute top-0 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
            {cartQuantity}
          </span>
        </button>
      </div>
    </nav>
  );
};
