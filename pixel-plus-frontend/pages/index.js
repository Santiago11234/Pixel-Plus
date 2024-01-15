"use client";
import Link from "next/link";
import NavBar from "../components/navbar/BarNav";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Ripple from "../components/home/Ripple";
import StatCard from "../components/home/StatCard";
import CommentCard from "../components/home/CommentCard";

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
  const [showMore, setShowMore] = useState(false);

  const productSections = [
    { name: "Pixel Phone", icon: faMobileAlt },
    { name: "Headphones", icon: faHeadphonesAlt },
    { name: "Pixel Mouse", icon: faMouse },
    { name: "Watch", icon: faClock },
    { name: "Pixel Pad", icon: faTabletAlt },
    { name: "Television", icon: faTv },
    { name: "Monitor", icon: faDesktop },
    { name: "Vision", icon: faEye },
    { name: "Pixel Pods", icon: faHeadphones },
    { name: "Coming Soon ", icon: faPlusSquare },
  ];

  const users = [
    {
     image: "/user1.jpg",
     name: "John Doe",
     location: "New York, USA",
     rating: 4,
     description: "I recently purchased the Pixel Phone and I'm absolutely loving it. The camera quality is top-notch and the battery life is impressive. I highly recommend this product to anyone looking for a high-quality smartphone."
    },
    {
     image: "/user2.jpg",
     name: "Jane Smith",
     location: "Los Angeles, USA",
     rating: 5,
     description: "The Pixel Mouse is a great addition to my workstation. It's comfortable to hold and the scroll wheel works smoothly. I've been using it for a few months now and I haven't encountered any issues."
    },
    {
     image: "/user3.jpg",
     name: "Robert Johnson",
     location: "Chicago, USA",
     rating: 4,
     description: "I bought the Pixel Pad for my kids and they love it. It's easy to navigate and the apps load quickly. Great for educational purposes."
    },
    {
     image: "/user4.jpg",
     name: "Patricia Brown",
     location: "San Francisco, USA",
     rating: 5,
     description: "The Pixel Watch is a game changer. It's sleek design and intuitive interface make it a pleasure to use. I'm always surprised by how much I can do with it."
    },
    {
     image: "/user5.jpg",
     name: "James Davis",
     location: "Seattle, USA",
     rating: 4,
     description: "The Pixel Monitor is a fantastic addition to my home office setup. The screen is sharp and the resolution is excellent. It's a great way to multitask without straining my eyes."
    },
    {
     image: "/user6.jpg",
     name: "Linda Miller",
     location: "Denver, USA",
     rating: 5,
     description: "I've been using the Pixel Vision headset for gaming and it's incredible. The graphics are crisp and the sound quality is top-notch. I would definitely recommend it to any gamer out there."
    },
    {
     image: "/user7.jpg",
     name: "Michael Wilson",
     location: "Atlanta, USA",
     rating: 4,
     description: "The Pixel Pods are a lifesaver. They deliver crystal clear audio and the battery life is impressive. I use them every day and I never have to worry about running out of power."
    },
    {
     image: "/user8.jpg",
     name: "Emily Taylor",
     location: "Houston, USA",
     rating: 5,
     description: "I'm really impressed with the Pixel Phone. The build quality is solid and the software is user-friendly. I've had no issues with it since I got it."
    }
   ];

  const initialSections = productSections.slice(0, 6);
  const remainingSections = productSections.slice(6);

  const sectionsToDisplay = showMore
    ? [...initialSections, ...remainingSections]
    : initialSections;

  return (
    <div>
      <main className="relative flex min-h-[300px] flex-row items-stretch bg-gray-900">
        <NavBar />
        <div className="flex flex-col items-center justify-center h-[600px] z-10 w-1/2">
          <div className="flex flex-col items-center">
            <h2
              className="text-2xl text-white font-bold text-right ml-auto mb-4"
              style={{ width: "66%" }}
            >
              Bringing the best tech at the best prices one pixel at a time{" "}
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/products">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </Link>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end w-full">
          <Image
            src="/phone.png"
            alt="phone"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
      </main>

      <div className="w-full bg-gray-800 pt-5 pb-5">
        <div className="flex flex-col items-center justify-center py-8">
          <h2 className="text-3xl text-white font-bold mb-4">What we do</h2>
          <div className="flex flex-col w-full md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <StatCard stat="500+" description="Pixel products sold" />
            <StatCard stat="3000+" description="Happy customers" />
            <StatCard stat="20+" description="Years of experience" />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-800 pt-5 pb-5 bg-gray-900">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="flex flex-row items-center justify-center gap-5 py-8">
            <h2 className="text-3xl text-white font-bold mb-4">
              Explore Our Sections
            </h2>
            <button
              onClick={() => setShowMore(!showMore)}
              className="underline text-sm text-gray-300"
            >
              Show More
            </button>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {sectionsToDisplay.map((section) => (
              <Link href="/products">
                <div
                  key={section.name}
                  className="flex flex-col items-center justify-center bg-blue-100 p-4 rounded shadow-lg hover:bg-blue-500 hover:text-white"
                >
                  <FontAwesomeIcon icon={section.icon} size="2x" />
                  <span className="mt-2">{section.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>


      <div className="w-full bg-gray-800 pt-5 pb-5 px-20 bg-gray-900">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="flex flex-row items-center justify-center gap-5 py-8">
          <h2 className="text-3xl text-white font-bold mb-4">
              Don't Trust Us?
            </h2>
            <h3 className="text-3xl text-white font-bold mb-4">
              Trust Our Reviews
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
        {/* ... */}

        {users.map((user) => (
          <CommentCard
            key={user.name}
            image={user.image}
            name={user.name}
            location={user.location}
            rating={user.rating}
            description={user.description}
          />
        )
        )}
       
      </div>
        </div>
      </div>

     
    </div>
  );
}
