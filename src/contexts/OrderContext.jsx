// src/contexts/OrderContext.jsx

import { createContext, useState, useContext } from 'react';
import { api } from '../services/api';

export const OrderContext = createContext({});

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const updateOrders = async () => {
    const response = await api.get('/orders');
    setOrders(response.data);
  };

  const updateOrderStatus = async (orderId, status) => {
    await api.patch(`/orders/${orderId}`, { status });
    updateOrders();
  };

  return (
    <OrderContext.Provider value={{ orders, updateOrders, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
}