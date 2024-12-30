// src/components/Dashboard/OrdersList.jsx

import React from 'react';
import { useOrders } from '../../hooks/useOrders';
import { OrderCard } from './OrderCard';

export const OrdersList = () => {
 const { orders } = useOrders();

 const filterOrders = (status) => {
   return orders.filter(order => order.status === status);
 };

 return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     {/* Pedidos Pendentes */}
     <div>
       <h2 className="font-bold mb-4 text-yellow-600">Pendentes</h2>
       {filterOrders('pending').map(order => (
         <OrderCard key={order.id} order={order} />
       ))}
     </div>

     {/* Pedidos em Preparo */}
     <div>
       <h2 className="font-bold mb-4 text-blue-600">Em Preparo</h2>
       {filterOrders('preparing').map(order => (
         <OrderCard key={order.id} order={order} />
       ))}
     </div>

     {/* Pedidos Prontos */}
     <div>
       <h2 className="font-bold mb-4 text-green-600">Prontos</h2>
       {filterOrders('ready').map(order => (
         <OrderCard key={order.id} order={order} />
       ))}
     </div>
   </div>
 );
};