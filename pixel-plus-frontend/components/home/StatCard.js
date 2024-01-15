import React from 'react';

const StatCard = ({ stat, description }) => {
 return (
 <div className="bg-blue-100 p-12 rounded shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-none hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50">
  <h3 className="text-2xl font-bold mb-2">{stat}</h3>
  <p className="text-xl">{description}</p>
 </div>
 );
};

export default StatCard;