"use context"

import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../contexts/CartContext";

const StyledLink = ({ href, children, className }) => (
  <Link href={href}>
    <span className={`${className} hover:underline`}>{children}</span>
  </Link>
);

export default function NavBar() {
  const { cartCount } = useContext(CartContext);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setNumber(cartItems.length); 
  });

  return (
    <nav className="fixed top-0 w-full p-4 pl-16 pr-16 pb-12 flex justify-between items-center pb-4 bg-gray-900 z-[1000]">
      <StyledLink href="/" className="text-white font-bold text-xl ">
        Pixel Plus
      </StyledLink>
      <div className="space-x-4">
        <StyledLink href="/" className="text-white font-bold text-xl ">
          Home
        </StyledLink>
        <StyledLink href="/products" className="text-white font-bold text-xl">
          Products
        </StyledLink>
        <StyledLink href="/about" className="text-white font-bold text-xl">
          About
        </StyledLink>
        <StyledLink href="/contact" className="text-white font-bold text-xl">
          Contact
        </StyledLink>
      </div>
      <div className="relative">
        <ShoppingCartIcon className="text-white hover:font-bold" />
        {number > 0 && (
          <span className="absolute top-[-10px] right-[-10px] bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xxs ">
            {number}
          </span>
        )}
      </div>
    </nav>
  );
}
