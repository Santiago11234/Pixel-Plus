"use context"

import React, {useState} from "react";
import NavBar from "../components/navbar/NavBar";
import AddToCartModal from '../components/products/AddToCartModal'; 


import Image from "next/image";
import styles from "../styles/Products.module.css"; // Make sure to create this CSS module file
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the shopping cart icon


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
        <div className="container mx-auto px-6 py-8 mt-4 text-center">
          <h1 className="text-4xl font-bold">Great Products.</h1>
          <p className="text-2xl mt-2">Even cheaper prices.</p>
          <div className="mt-4 relative w-3/4 sm:w-1/3 mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 w-full border rounded-lg text-gray-800 pl-10 pr-10"
            />
            <SearchIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">


    
<div className="card transform transition duration-500 hover:scale-105 ${styles.cardHover} bg-gray-800 rounded-xl overflow-hidden shadow-lg ">
  <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[200px] w-[200px] relative">
    <Image
      src="/iphone.png"
      alt="Product 1"
      layout="fill"
      objectFit="contain"
      className="rounded-t-xl absolute"
    />
  </div>
  <div className="p-4 flex justify-between">
    <div>
      <h2 className="text-lg font-bold">Phone</h2>
      <p className="text-gray-400">Computer In Your Pocket</p>
    </div>
    <div className="text-green-300">
      <p className="text-lg">$799.99</p>
      <button
        className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        onClick={() => openModal({
          name: 'Phone',
          image: '/iphone.png',
          price: '$799.99' 
        })}
      >
        <ShoppingCartIcon className="mr-2" /> 
      </button>
    </div>
  </div>
</div>


<div className="card transform transition duration-500 hover:scale-105 ${styles.cardHover} bg-gray-800 rounded-xl overflow-hidden shadow-lg ">
  <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[200px] w-[200px] relative">
    <Image
      src="/beats.png"
      alt="Product 1"
      layout="fill"
      objectFit="contain"
      className="rounded-t-xl absolute"
    />
  </div>
  <div className="p-4 flex justify-between">
    <div>
      <h2 className="text-lg font-bold">Headphones</h2>
      <p className="text-gray-400">Zone Out The World And Listen To Your Favorites</p>
    </div>
    <div className="text-green-300">
      <p className="text-lg">$399.99</p>
      <button
        className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        onClick={() => openModal({
          name: 'Headphones',
          image: '/beats.png',
          price: '$399.99' 
        })}
      >
        <ShoppingCartIcon className="mr-2" /> 
      </button>
    </div>
  </div>
</div>




<div className="card transform transition duration-500 hover:scale-105 ${styles.cardHover} bg-gray-800 rounded-xl overflow-hidden shadow-lg ">
  <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[200px] w-[200px] relative">
    <Image
      src="/mouse.png"
      alt="Product 1"
      layout="fill"
      objectFit="contain"
      className="rounded-t-xl absolute"
    />
  </div>
  <div className="p-4 flex justify-between">
    <div>
      <h2 className="text-lg font-bold">Mouse</h2>
      <p className="text-gray-400">Short description here</p>
    </div>
    <div className="text-green-300">
      <p className="text-lg">$49.99</p>
      <button
        className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        onClick={() => openModal({
          name: 'Mouse',
          image: '/mouse.png',
          price: '$49.99' 
        })}
      >
        <ShoppingCartIcon className="mr-2" /> 
      </button>
    </div>
  </div>
</div>


<div className="card transform transition duration-500 hover:scale-105 ${styles.cardHover} bg-gray-800 rounded-xl overflow-hidden shadow-lg ">
  <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[200px] w-[200px] relative">
    <Image
      src="/watch.png"
      alt="Product 1"
      layout="fill"
      objectFit="contain"
      className="rounded-t-xl absolute"
    />
  </div>
  <div className="p-4 flex justify-between">
    <div>
      <h2 className="text-lg font-bold">Watch</h2>
      <p className="text-gray-400">Track Your Steps And Life</p>
    </div>
    <div className="text-green-300">
      <p className="text-lg">$499.99</p>
      <button
        className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        onClick={() => openModal({
          name: 'Watch',
          image: '/watch.png',
          price: '$499.99' 
        })}
      >
        <ShoppingCartIcon className="mr-2" /> 
      </button>
    </div>
  </div>
</div>


<div className="card transform transition duration-500 hover:scale-105 ${styles.cardHover} bg-gray-800 rounded-xl overflow-hidden shadow-lg ">
  <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[200px] w-[200px] relative">
    <Image
      src="/ipad.png"
      alt="Product 1"
      layout="fill"
      objectFit="contain"
      className="rounded-t-xl absolute"
    />
  </div>
  <div className="p-4 flex justify-between">
    <div>
      <h2 className="text-lg font-bold">iPad</h2>
      <p className="text-gray-400">Short description here</p>
    </div>
    <div className="text-green-300">
      <p className="text-lg">$99.99</p>
      <button
        className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        onClick={() => openModal({
          name: 'iPad',
          image: '/ipad.png',
          price: '$99.99' 
        })}
      >
        <ShoppingCartIcon className="mr-2" /> 
      </button>
    </div>
  </div>
</div>

<div className="card transform transition duration-500 hover:scale-105 ${styles.cardHover} bg-gray-800 rounded-xl overflow-hidden shadow-lg ">
  <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[200px] w-[200px] relative">
    <Image
      src="/tv.png"
      alt="Product 1"
      layout="fill"
      objectFit="contain"
      className="rounded-t-xl absolute"
    />
  </div>
  <div className="p-2 flex justify-between items-center">
    <div>
      <h2 className="text-lg font-bold">Television</h2>
      <p className="text-gray-400">Watch Your Favorite TV And Shows</p>
    </div>
    <div className="text-green-300">
      <p className="text-lg">$1399.99</p>
      <button
        className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        onClick={() => openModal({
          name: 'Television',
          image: '/tv.png',
          price: '$1399.99' 
        })}
      >
        <ShoppingCartIcon className="mr-2" /> 
      </button>
    </div>
  </div>
</div>


<div className="card transform transition duration-500 hover:scale-105 ${styles.cardHover} bg-gray-800 rounded-xl overflow-hidden shadow-lg ">
  <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[200px] w-[200px] relative">
    <Image
      src="/monitor.png"
      alt="Product 1"
      layout="fill"
      objectFit="contain"
      className="rounded-t-xl absolute"
    />
  </div>
  <div className="p-2 flex justify-between items-center">
    <div>
      <h2 className="text-lg font-bold">Monitor</h2>
      <p className="text-gray-400">Run Up Another Computer Besides Yours</p>
    </div>
    <div className="text-green-300">
      <p className="text-lg">$1299.99</p>
      <button
        className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        onClick={() => openModal({
          name: 'Monitor',
          image: '/monitor.png',
          price: '$1299.99' 
        })}
      >
        <ShoppingCartIcon className="mr-2" /> 
      </button>
    </div>
  </div>
</div>


<div className="card transform transition duration-500 hover:scale-105 ${styles.cardHover} bg-gray-800 rounded-xl overflow-hidden shadow-lg ">
  <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[200px] w-[200px] relative">
    <Image
      src="/vision.png"
      alt="Product 1"
      layout="fill"
      objectFit="contain"
      className="rounded-t-xl absolute"
    />
  </div>
  <div className="p-2 flex justify-between items-center">
    <div>
      <h2 className="text-lg font-bold">Vision</h2>
      <p className="text-gray-400">New VR Headset</p>
    </div>
    <div className="text-green-300">
      <p className="text-lg">$2099.99</p>
      <button
        className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        onClick={() => openModal({
          name: 'Vision',
          image: '/vision.png',
          price: '$2099.99' 
        })}
      >
        <ShoppingCartIcon className="mr-2" /> 
      </button>
    </div>
  </div>
</div>


<div className="card transform transition duration-500 hover:scale-105 ${styles.cardHover} bg-gray-800 rounded-xl overflow-hidden shadow-lg ">
  <div className="mx-auto my-4 flex items-center justify-center bg-slate-300 rounded h-[200px] w-[200px] relative">
    <Image
      src="/airpods.png"
      alt="Product 1"
      layout="fill"
      objectFit="contain"
      className="rounded-t-xl absolute"
    />
  </div>
  <div className="p-2 flex justify-between items-center">
    <div>
      <h2 className="text-lg font-bold">Pixel Pods</h2>
      <p className="text-gray-400">Listen Wirelessly On The Go</p>
    </div>
    <div className="text-green-300">
      <p className="text-lg">$299.99</p>
      <button
        className="mt-4 ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        onClick={() => openModal({
          name: 'Pixel Pods',
          image: '/airpods.png',
          price: '$299.99' 
        })}
      >
        <ShoppingCartIcon className="mr-2" /> 
      </button>
    </div>
  </div>
</div>

          {/* ... other product blocks */}
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
