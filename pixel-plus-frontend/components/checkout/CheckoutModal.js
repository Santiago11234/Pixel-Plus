import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

let Lottie;

import animationData from "../../public/ani.json";

import CircularProgress from "@mui/material/CircularProgress";


const CheckoutModal = ({ open, handleClose }) => {
  const modalRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Lottie = require("lottie-react").default;
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);


  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      var keys = Object.keys(localStorage);
      for(var i = 0; i < keys.length; i++){
        localStorage.removeItem(keys[i]);
      }
      handleClose();
      window.location.reload();
      alert("Thank you for your purchase! Your order will be shipped to you shortly.");
    }, 4000);
   };
  
  if (!open) return null;

  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto bg-gray-800 bg-opacity-80 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className=" bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
        style={{ maxHeight: "80%", maxWidth: "80%" }}
      >
        <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="mt-2">
                <form className="space-y-6">
                  <div className="sm:flex sm:justify-between ">
                    <div className="sm:w-1/2 flex items-center justify-center flex flex-col">
                      <h1 className="text-3xl font-bold text-white">
                        Pixel Plus
                      </h1>
                      <Lottie animationData={animationData} />
                    </div>

                    <div className="sm:w-1/2 ">
                      <h3
                        className="text-lg leading-6 font-medium text-white"
                        id="modal-title"
                      >
                        Checkout
                      </h3>
                      <h5 className="text-s leading-6 font-small text-white mt-3">
                        Please enter your shipping address and credit card
                        information below.
                      </h5>

                      <h6 className="text-xs leading-6 font-small text-white pt-3 b-2">
                        (Please don't actually. I am not saving any information
                        in this website. It is purely visual)
                      </h6>

                      <div className="text-white mt-4">
                        <div className="mt-4">
                          <label
                            htmlFor="shippingAddress"
                            className="block text-sm font-medium text-white"
                          >
                            Shipping Address
                          </label>
                          <div className="mt-1">
                            <input
                              id="shippingAddress"
                              name="shippingAddress"
                              type="text"
                              required
                              className="appearance-none block w-full px-3 py-2 border border-gray-500 bg-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="cardNumber"
                            className="block text-sm font-medium text-white"
                          >
                            Card Number
                          </label>
                          <div className="mt-1">
                            <input
                              id="cardNumber"
                              name="cardNumber"
                              type="text"
                              required
                              className="appearance-none block w-full px-3 py-2 border border-gray-500 bg-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="expiryDate"
                            className="block text-sm font-medium text-white"
                          >
                            Expiry Date
                          </label>
                          <div className="mt-1">
                            <input
                              id="expiryDate"
                              name="expiryDate"
                              type="text"
                              required
                              className="appearance-none block w-full px-3 py-2 border border-gray-500 bg-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="cvv"
                            className="block text-sm font-medium text-white"
                          >
                            CVV
                          </label>
                          <div className="mt-1">
                            <input
                              id="cvv"
                              name="cvv"
                              type="text"
                              required
                              className="appearance-none block w-full px-3 py-2 border border-gray-500 bg-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="mt-5 flex justify-end">
     <button
       type="button"
       className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
       onClick={handleSubmit}
     >
       {submitting ? <CircularProgress size={24} /> : "Submit"}
     </button>
   </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
