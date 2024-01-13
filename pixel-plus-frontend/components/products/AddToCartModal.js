import React, { useState } from 'react';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

const AddToCartModal = ({ name, image, price, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <CloseIcon />
        </button>
        <div className="flex space-x-6">
          <div className="flex-none w-48 h-48 relative">
            <Image src={image} alt={name} layout="fill" objectFit="contain" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-xl text-green-500">{price}</p>
              <div className="flex items-center mt-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="mx-2">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;