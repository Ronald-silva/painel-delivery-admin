// src/pages/Dashboard.jsx
import React from 'react';
import { useOrders } from '../hooks/useOrders';
import { OrderCard } from '../components/Dashboard/OrderCard';
import { Bell } from 'lucide-react';

export const Dashboard = () => {
 const { orders, loading } = useOrders();

 const filterOrders = (status) => orders.filter(order => order.status === status);

 const pendingOrders = filterOrders('pending');
 const preparingOrders = filterOrders('preparing');
 const readyOrders = filterOrders('ready');

 return (
   <div>
     <div className="flex justify-between items-center mb-8">
       <h1 className="text-2xl font-bold">Painel de Pedidos</h1>
       {pendingOrders.length > 0 && (
         <div className="flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full">
           <Bell className="w-4 h-4" />
           <span>{pendingOrders.length} pedidos pendentes</span>
         </div>
       )}
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {/* Coluna: Pedidos Pendentes */}
       <div>
         <h2 className="font-bold mb-4 text-yellow-600 flex items-center gap-2">
           Pendentes ({pendingOrders.length})
         </h2>
         <div className="space-y-4">
           {pendingOrders.map(order => (
             <OrderCard key={order.id} order={order} />
           ))}
         </div>
       </div>

       {/* Coluna: Em Preparo */}
       <div>
         <h2 className="font-bold mb-4 text-blue-600 flex items-center gap-2">
           Em Preparo ({preparingOrders.length})
         </h2>
         <div className="space-y-4">
           {preparingOrders.map(order => (
             <OrderCard key={order.id} order={order} />
           ))}
         </div>
       </div>

       {/* Coluna: Prontos para Entrega */}
       <div>
         <h2 className="font-bold mb-4 text-green-600 flex items-center gap-2">
           Prontos ({readyOrders.length})
         </h2>
         <div className="space-y-4">
           {readyOrders.map(order => (
             <OrderCard key={order.id} order={order} />
           ))}
         </div>
       </div>
     </div>

     {loading && (
       <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
         <div className="bg-white p-4 rounded-lg">Carregando pedidos...</div>
       </div>
     )}
   </div>
 );
};