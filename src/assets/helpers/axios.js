import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Request interceptor to add the access token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired access token (401 status code)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the access token
        const response = await axios.post('http://localhost:5000/api/refresh', {}, { withCredentials: true });
        const { accessToken } = response.data;

        // Store the new access token and retry the original request
        localStorage.setItem('accessToken', accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        // Handle the case where the refresh token is invalid or expired
        console.error('Failed to refresh token:', error);
        // Optionally, redirect to login page or perform other error handling
      }
    }

    return Promise.reject(error);
  }
);

export default api;
