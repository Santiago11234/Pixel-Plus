import React, { useState, useEffect, useRef, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import { CartContext } from '../../contexts/CartContext';



const AddToCartModal = ({ name, image, price, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const timer = useRef();
  const { setCartCount } = useContext(CartContext);




  const handleAddToCart = () => {
   setLoading(true);
   timer.current = setTimeout(() => {
   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
   cartItems.push({ name, price, quantity });
   localStorage.setItem('cart', JSON.stringify(cartItems));
   setQuantity(1); 
   setLoading(false);
   onClose(); 
   setCartCount(cartItems.length);
   window.location.reload();
   }, 4000); 
  };
useEffect(() => {
  return () => {
    clearTimeout(timer.current);
  };
}, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-400 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
    <div className="flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 relative w-600 h-800">
        <button onClick={onClose} className="absolute top-2 right-2">
          <CloseIcon />
        </button>
        <div className="flex flex-row justify-between h-full">
          <div className="flex-none w-48 h-48 relative">
            <Image src={image} alt={name} layout="fill" objectFit="contain" />
          </div>
          <div className="flex flex-col justify-between flex-grow pl-6">
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-xl text-blue-500">{price}</p>
            </div>
            <div className="flex items-center mt-4">
              <button
                className="text-blue-500 border border-blue-500 px-2 py-1 rounded"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="text-blue-500 border border-blue-500 px-2 py-1 rounded"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4" onClick={handleAddToCart}>
 {loading ? <CircularProgress size={24} /> : 'Confirm'}
</button>
          </div>
        </div>
      </div>
    </div>
    </div>
   );
};

export default AddToCartModal;
