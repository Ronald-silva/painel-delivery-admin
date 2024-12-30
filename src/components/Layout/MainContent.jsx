


// src/components/Layout/MainContent.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const MainContent = () => {
 return (
   <div className="min-h-screen flex flex-col bg-[url('/public/pizza-background.png')] bg-cover bg-center bg-fixed">
     <div className="min-h-screen bg-black/60 flex flex-col">
       <Header />
       
       <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
         <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6">
           <Outlet />
         </div>
       </main>

       <footer className="bg-black/80 text-white py-4">
         <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="text-sm">
             © {new Date().getFullYear()} Nilo Pizza - Desenvolvido por Ronald Silva
           </p>
         </div>
       </footer>
     </div>
   </div>
 );
};