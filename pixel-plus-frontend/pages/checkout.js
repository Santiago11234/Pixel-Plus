import React, { useEffect, useState, useRef } from "react";
import products from "../data/productsData";
import NavBar from "../components/navbar/BarNav";

import CheckoutModal from "../components/checkout/CheckoutModal";

export default function Checkout() {
  const [items, setItems] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const modalRef = useRef();

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    for (let i = 0; i < cartItems.length; i++) {
      const product = products.find(
        (product) => product.name === cartItems[i].name
      );
      cartItems[i].description = product.description;
      cartItems[i].image = product.image;
      cartItems[i].totalPrice = cartItems[i].quantity * cartItems[i].price;
    }
    setItems(cartItems);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowConfirmModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRemoveClick = (itemName) => {
    setShowConfirmModal(true);
    setItemToRemove(itemName);
  };

  const removeItem = () => {
    const updatedItems = items.filter((item) => item.name !== itemToRemove);
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setShowConfirmModal(false);
  };

  const handleCheckoutClick = () => {
    setShowCheckoutModal(true);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start bg-gray-900 px-4 sm:px-6 lg:px-8 mt-10">
      <NavBar />
      <h1 className="text-white font-bold text-4xl my-10">Checkout Page</h1>
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-3">
          <ul className="w-full max-w-2xl">
            {items.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center mb-4 bg-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md"
                  />
                  <div>
                    <h2 className="text-white font-bold">{item.name}</h2>
                    <p className="text-gray-400">{item.description}</p>
                    <p className="text-white font-bold">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-white font-bold">
                    Quantity: {item.quantity}
                  </span>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleRemoveClick(item.name)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 ">
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-white font-medium text-lg mb-2">
              Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)}):
              ${" "}
              {items
                .reduce(
                  (acc, item) => acc + parsePrice(item.price) * item.quantity,
                  0
                )
                .toFixed(2)}
            </h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-gray-800 p-4 rounded shadow-lg text-white"
          >
            <p>Are you sure you want to remove this item?</p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={removeItem}
              >
                Yes
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowConfirmModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <CheckoutModal
        open={showCheckoutModal}
        handleClose={() => setShowCheckoutModal(false)}
      />
    </main>
  );
}
