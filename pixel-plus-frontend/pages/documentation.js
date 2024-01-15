"use client";
import Link from "next/link";
import NavBar from "../components/navbar/BarNav";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Ripple from "../components/home/Ripple";
import StatCard from "../components/home/StatCard";
import CommentCard from "../components/home/CommentCard";

import Head from 'next/head';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faHeadphonesAlt,
  faMouse,
  faClock,
  faTabletAlt,
  faTv,
  faDesktop,
  faEye,
  faHeadphones,
  faPlusSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {


  return (
    <div>
      <main className="relative flex min-h-[300px] flex-row items-stretch bg-gray-900">
        <NavBar />
     
      </main>

     
      <NavBar />
      <main className="mx-auto max-w-7xl p-4">
        <h1 className="text-4xl font-bold mb-6 text-white">Documentation - Pixel Plus</h1>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">About This Website</h2>
          <p className="mb-4">This website was built using a variety of technologies including Next.js, Vercel, and Tailwind CSS.</p>
          {/* ... rest of your content */}
          <ul className="list-disc list-inside space-y-2 text-lg">

            <li>Next.js is a React framework that allows you to build static and server-side rendered websites.</li>
            <li>Vercel is a platform that allows you to host websites and applications.</li>
            <li>Tailwind CSS is a utility-first CSS framework that allows you to build responsive websites with ease.</li>
            <li>Lottie Files is an open-source 2d-animation library that can easily be integrated with front-end development</li>
            <li>Material UI is a React component library that allows you to build responsive websites with ease.</li>
            <li>React is a JavaScript library that allows you to build user interfaces.</li>
            <li>Font Awesome is a library of icons that can be used in web development.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-4">Despite using libraries, all code was created by me. </h2>
          <a href="/" download>
 <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Download Documentation</button>
</a>
         
        </div>
      </main>
   
     
    </div>
  );
}
