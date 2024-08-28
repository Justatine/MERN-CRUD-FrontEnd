import api from "../helpers/axios";
const API_URL = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('accessToken');
console.log('token: ',token)

export const loginUser = async (data) => {
  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data)    
    })
    
    if (!res.ok) {
        throw new Error('Failed to fetch user profile');
    }

    const result = await res.json()
    localStorage.setItem('accessToken', result.accessToken); 

    return { 
        message: result.message,
        status: result.status,
        accessToken: result.accessToken,
        userRole: result.userRole
    }
} catch (error) {
    console.log('Error signing in: ', error);
    throw error;
  }
}

// const getTokenFromLocalStorage = () => {
//   return localStorage.getItem('accessToken');
// };

// const addTokenToLocalStorage = (token) => {
//   localStorage.setItem('accessToken', token);
// };

export const fetchWithAuth = async (url, options = {}) => {
  try {
    let accessToken = localStorage.getItem('accessToken');

    if (!accessToken) throw new Error('No access token found');

    // Set the Authorization header for the request
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${accessToken}`,
    };

    let res = await fetch(url, options);

    // Check if the response indicates the access token is expired
    if (res.status === 403) {
      console.log('Access token expired, attempting to refresh...');

      // Attempt to refresh the token
      accessToken = await refreshToken();

      if (accessToken) {
        options.headers['Authorization'] = `Bearer ${accessToken}`;
        res = await fetch(url, options);
      } else {
        throw new Error('Failed to refresh token');
      }
    }

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Request failed with status ${res.status}: ${errorMessage}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching with auth:', error);
    throw error;
  }
};

// Function to refresh the access token (using cookies for the refresh token)
const refreshToken = async () => {
  try {
    const response = await api.post('/refresh', {}, { withCredentials: true });
    const { accessToken } = response.data;

    // Update the local storage with the new access token
    localStorage.setItem('accessToken', accessToken);

    return accessToken;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    // Optionally, handle token refresh errors (e.g., redirect to login page)
    return null;
  }
};

// const refreshToken = async () => {
//   // Add a response interceptor
//   api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;
  
//       // If the error status is 401 and there is no originalRequest._retry flag,
//       // it means the token has expired and we need to refresh it
//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
  
//         try {
//           const refreshToken = localStorage.getItem('accessToken');
//           const response = await axios.post('http://localhost:5000/api/refresh', { refreshToken });
//           const { token } = response.accessToken;
  
//           localStorage.setItem('accessToken', token);
  
//           // Retry the original request with the new token
//           originalRequest.headers.Authorization = `Bearer ${token}`;
//           return axios(originalRequest);
//         } catch (error) {
//           // Handle refresh token error or redirect to login
//         }
//       }
  
//       return Promise.reject(error);
//     }
//   );
//   // try {
//   //   const resp = await api.get("/refresh");
//   //   console.log("refresh token", resp.data);
//   //   return resp.data;
//   // } catch (e) {
//   //   console.log("Error",e);   
//   // }
// };

// export const fetchWithAuth = async (url, options = {}) => {
//   try {
//     let accessToken = localStorage.getItem('accessToken');

//     if (!accessToken) throw new Error('No access token found');

//     options.headers = {
//       ...options.headers,
//       'Authorization': `Bearer ${accessToken}`,
//     };

//     let res = await fetch(url, options);

//     if (res.status === 403) {
//       console.log('Access token expired, attempting to refresh...');
//       // accessToken = await fetchNewAccessToken();
//       accessToken = await refreshToken();
      
//       if (accessToken) {
//         options.headers['Authorization'] = `Bearer ${accessToken}`;
//         res = await fetch(url, options);
//       } else {
//         throw new Error('Failed to refresh token');
//       }
//     }

//     if (!res.ok) {
//       const errorMessage = await res.text();
//       throw new Error(`Request failed with status ${res.status}: ${errorMessage}`);
//     }

//     return await res.json();
//   } catch (error) {
//     console.error('Error fetching with auth:', error);
//     throw error;
//   }
// };

// const fetchNewAccessToken = async () => {
//   try {
//     const response = await fetch(`${API_URL}/api/refresh`, {
//       method: 'GET',
//       credentials: 'include',
//     });

//     if (response.ok) {
//       console.log('status ok')
//       // const data = await response.json();
//       // console.log('New access token:', data.accessToken);

//       // localStorage.setItem('accessToken', data.accessToken);

//       // return data.accessToken;
//     } else {
//       console.log('status not ok')
//       if (response.status === 401) {
//         console.log('status 401')
        
//       }
//       throw new Error('Failed to fetch new access token');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     // Handle error appropriately, possibly by redirecting to login
//     throw error;
//   }
// };

