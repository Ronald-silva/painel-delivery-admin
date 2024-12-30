// src/components/Dashboard/Timer.jsx

import React, { useEffect, useState } from 'react';

export const Timer = ({ createdAt }) => {
 const [timeElapsed, setTimeElapsed] = useState('');

 useEffect(() => {
   const calculateTime = () => {
     const start = new Date(createdAt);
     const now = new Date();
     const diff = Math.floor((now - start) / 1000); // diferença em segundos

     const minutes = Math.floor(diff / 60);
     const seconds = diff % 60;

     setTimeElapsed(`${minutes}:${seconds.toString().padStart(2, '0')}`);
   };

   calculateTime();
   const interval = setInterval(calculateTime, 1000);

   return () => clearInterval(interval);
 }, [createdAt]);

 return (
   <div className="text-sm text-gray-500">
     ⏱️ {timeElapsed}
   </div>
 );
};