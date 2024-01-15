import React, { useEffect, useRef } from "react";
import Image from "next/image";

const CheckoutModal = ({ open, handleClose }) => {
  const modalRef = useRef();

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

  if (!open) return null;

  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto bg-gray-800 bg-opacity-80"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        >
          
        </div>

        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2">
                  <form className="space-y-6">
                    <div className="sm:flex sm:justify-between">


                      <div className="sm:w-1/2">

                      <Image
            src="/phone.png"
            alt="phone"
            width={1920}
            height={1080}
            className="w-full"
          />

                      </div>

                      <div className="sm:w-1/2 ">
                        <h3
                          className="text-lg leading-6 font-medium text-white"
                          id="modal-title"
                        >
                          Checkout
                        </h3>
                        <h5 className="text-s leading-6 font-small text-white">
                          Please enter your shipping address and credit card
                          information below.(Please don't actually. I am not
                          saving any information in this website. It is purely
                          visual)
                        </h5>

                        <div className="">
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
                        <div>
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
                        <div>
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
                        <div>
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
                        </div>
                        {/* Rest of the form fields go here */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleClose}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
