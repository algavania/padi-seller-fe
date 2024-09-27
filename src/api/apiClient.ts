import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://seller-dashboard-be-padiumkm.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();  
      
    }

    return Promise.reject(error);
  }
);

export default apiClient;
