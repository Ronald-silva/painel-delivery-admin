// src/components/Layout/Header.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-red-600">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/public/logo-nilo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold text-white">Nilo Pizza Admin</h1>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="text-white hover:text-red-200 font-medium"
        >
          Sair
        </button>
      </div>
    </header>
  );
};