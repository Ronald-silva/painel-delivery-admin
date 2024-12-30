// src/models/Order.js
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  items: [{
    id: String,
    name: String,
    price: Number,
    quantity: Number,
    isHalfPizza: Boolean,
    details: {
      firstHalf: {
        name: String,
        description: String
      },
      secondHalf: {
        name: String,
        description: String
      }
    }
  }],
  deliveryType: String,
  address: String,
  payment: {
    method: String,
    amount: Number,
    change: Number
  },
  subtotal: Number,
  deliveryFee: Number,
  total: Number,
  status: {
    type: String,
    enum: ['pending', 'preparing', 'ready', 'delivered', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Order', OrderSchema);