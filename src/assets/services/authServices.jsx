import api from "../helpers/axios";
const API_URL = process.env.REACT_APP_API_URL;

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

export const fetchWithAuth = async (url, options = {}) => {
  try {
    let accessToken = localStorage.getItem('accessToken');

    if (!accessToken) throw new Error('No access token found');

    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${accessToken}`,
    };

    let res = await fetch(url, options);

    if (res.status === 403) {
      console.log('Access token expired, attempting to refresh...');

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
    window.location.href = "/";
    // throw error;
  }
};

const refreshToken = async () => {
  try {
    const response = await api.post('/refresh', {}, { withCredentials: true });
    const { accessToken } = response.data;

    localStorage.setItem('accessToken', accessToken);

    return accessToken;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    await api.post('/logout', {}, { withCredentials: true });
  } catch (error) {
    console.error('Failed to logout', error);
  }
}
