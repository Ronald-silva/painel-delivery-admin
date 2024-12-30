// src/components/shared/Button.jsx

import React from 'react';

export const Button = ({ 
 children, 
 variant = 'primary', 
 onClick, 
 disabled = false 
}) => {
 const variants = {
   primary: 'bg-red-600 hover:bg-red-700 text-white',
   secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
   outline: 'border-2 border-red-600 text-red-600 hover:bg-red-50'
 };

 return (
   <button
     onClick={onClick}
     disabled={disabled}
     className={`
       px-4 py-2 rounded-lg transition-colors
       disabled:opacity-50 disabled:cursor-not-allowed
       ${variants[variant]}
     `}
   >
     {children}
   </button>
 );
};