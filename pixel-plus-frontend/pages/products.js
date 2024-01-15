"use context";

import React, { useState } from "react";
import NavBar from "../components/navbar/BarNav";
import AddToCartModal from "../components/products/AddToCartModal";
import ProductCard from "../components/products/ProductCard"

import products from '../data/productsData';

import Image from "next/image";
import styles from "../styles/Products.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



  return (
    <main className="min-h-screen text-white">
      <header className=" text-white">
        <NavBar />
        <div className="container mx-auto px-6 py-8 mt-20 text-center ">
          <h1 className="text-4xl font-bold">Great Products.</h1>
          <p className="text-2xl mt-2">Even cheaper prices.</p>
          <div className="mt-4 relative w-3/4 sm:w-1/3 mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 w-full border rounded-lg text-gray-800 pl-10 pr-10 "
            />
            <SearchIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         {products.map((product) => (
           <ProductCard key={product.name} product={product} onAddToCart={openModal} />
         ))}
       </div>
     </div>

      <AddToCartModal
        name={selectedProduct?.name}
        image={selectedProduct?.image}
        price={selectedProduct?.price}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </main>
  );
}
