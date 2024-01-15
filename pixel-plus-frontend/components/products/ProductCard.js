
import React from 'react';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card transform transition duration-500 hover:scale-105 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[220px] w-[220px] relative">
        <Image
          src={product.image}
          alt={product.name}
          fill={true}
          style={{ objectFit: 'contain' }}
          className="rounded-t-xl absolute"
        />
      </div>
      <div className="p-4 flex justify-between">
        <div>
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-400">{product.description}</p>
        </div>
        <div className="text-green-300">
          <p className="text-lg">{product.price}</p>
          <button
            className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCartIcon className="mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;