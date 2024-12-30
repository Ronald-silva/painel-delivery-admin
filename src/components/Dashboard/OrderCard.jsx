// src/components/Dashboard/OrderCard.jsx
import React from 'react';
import { useOrders } from '../../hooks/useOrders';
import { Clock, MapPin } from 'lucide-react';

export const OrderCard = ({ order }) => {
  const { updateOrderStatus } = useOrders();

  const getActionButton = () => {
    const isDelivery = order.delivery_type === 'delivery';

    switch (order.status) {
      case 'pending':
        return (
          <button
            onClick={() => updateOrderStatus(order.id, 'preparing')}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Iniciar Preparo
          </button>
        );

      case 'preparing':
        return (
          <button
            onClick={() => updateOrderStatus(order.id, 'ready')}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            {isDelivery ? 'Pronto para Entrega' : 'Pronto para Retirada'}
          </button>
        );

      case 'ready':
        return (
          <button
            onClick={() => updateOrderStatus(order.id, 'on_route')}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
          >
            {isDelivery ? 'Saiu para Entrega' : 'Aguardando Cliente'}
          </button>
        );

      case 'on_route':
        return (
          <button
            onClick={() => updateOrderStatus(order.id, 'delivered')}
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
          >
            {isDelivery ? 'Confirmar Entrega ao Cliente' : 'Confirmar Retirada pelo Cliente'}
          </button>
        );

      default:
        return null;
    }
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-600">
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded">
            #{order.id.slice(0, 4)}
          </span>
          <div className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {formatTime(order.created_at)}
          </div>
        </div>
        <span className="font-bold">
          R$ {Number(order.total).toFixed(2)}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.quantity}x {item.name}</span>
            <span className="text-gray-600">
              R$ {(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        {order.delivery_type === 'delivery' ? (
          <>
            <MapPin className="w-4 h-4" />
            <span>Entrega: {order.address}</span>
          </>
        ) : (
          <>
            <Clock className="w-4 h-4" />
            <span>Retirada na Loja</span>
          </>
        )}
      </div>

      {getActionButton()}
    </div>
  );
};