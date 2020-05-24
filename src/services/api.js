import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.17.15:3232',
});

export default api;
