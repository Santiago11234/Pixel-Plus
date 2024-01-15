import React from 'react';
import Image from 'next/image';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CommentCard = ({ image, name, location, rating, description }) => {
 return (
 <div className="grid grid-cols-3 gap-4 items-start bg-blue-100 p-4 rounded shadow-lg ">
  <div className="col-span-1 flex flex-col items-center justify-center mt-4">
    <Image src={image} alt={name} width={50} height={50} className="rounded-full " />
  </div>
  <div className="col-span-2 flex flex-col">
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-sm text-gray-500">{location}</p>
    <div className="flex items-center">
      <p className="mr-2">{rating}/5</p>
      <FontAwesomeIcon icon={faStar} style={{color: 'rgb(239 68 68)'}} />
    </div>
  </div>
  <p className="col-span-3 mt-2">{description}</p>
 </div>
 );
};

export default CommentCard;