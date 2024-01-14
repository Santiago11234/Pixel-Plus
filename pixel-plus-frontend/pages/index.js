"use client";
import React from "react";

import NavBar from "../components/navbar/BarNav";
import Image from 'next/image'


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <NavBar />

      <Image src="/phone.png" alt="phone" width={1920} height={1080} />
        <div className="flex flex-col items-start mt-16 z-10">
        <h2 className="text-white font-bold">Your Slogan Here</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy
          </button>
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
