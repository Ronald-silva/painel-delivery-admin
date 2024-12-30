// src/services/api.js
// Configuração do Axios para fazer requisições ao backend
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://seu-backend.com/api'
});