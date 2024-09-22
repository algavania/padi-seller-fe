import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://seller-dashboard-be-padiumkm.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
