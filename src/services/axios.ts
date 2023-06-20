import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://localhost:4444', // Api url. Ex: www.azure.dev
  // Headers with authorizations will come here. Ex: Bearer + Token
});