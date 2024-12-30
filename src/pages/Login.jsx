// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
 const navigate = useNavigate();
 const [credentials, setCredentials] = useState({
   email: '',
   password: ''
 });

 const handleLogin = (e) => {
   e.preventDefault();
   // TODO: Implementar autenticação
   navigate('/dashboard');
 };

 return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
       <h1 className="text-2xl font-bold mb-6 text-center">Login Admin</h1>
       
       <form onSubmit={handleLogin} className="space-y-4">
         <div>
           <label className="block text-sm font-medium mb-1">Email</label>
           <input
             type="email"
             value={credentials.email}
             onChange={(e) => setCredentials({...credentials, email: e.target.value})}
             className="w-full p-2 border rounded-lg"
             required
           />
         </div>

         <div>
           <label className="block text-sm font-medium mb-1">Senha</label>
           <input
             type="password"
             value={credentials.password}
             onChange={(e) => setCredentials({...credentials, password: e.target.value})}
             className="w-full p-2 border rounded-lg"
             required
           />
         </div>

         <button 
           type="submit"
           className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
         >
           Entrar
         </button>
       </form>
     </div>
   </div>
 );
}