import { fetchWithAuth } from "./authServices";

const API_URL = process.env.REACT_APP_API_URL;

export const getUsers = async () => {
  try {
    const result = await fetchWithAuth(`${API_URL}/api/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw new Error('Failed to fetch user profile');
  }
};

export const getUser = async (id) => {
    try {
      const result = await fetchWithAuth(`${API_URL}/api/users/${id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!result || !result.data) {
        throw new Error('User data is not available');
      }

      return result.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch user profile');    
    }
}

export const createUser = async (data) => {
    try {
      const result = await fetchWithAuth(`${API_URL}/api/users/create`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
  
      if (!result || !result.message || !result.status) {
        throw new Error('Invalid response from server');
      }

      return {
        message: result.message,
        status: result.status
      };
      
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error ('Failed to create new user');
    }
}  

export const editUser = async (id, data) => {
  try {
    const result = await fetchWithAuth(`${API_URL}/api/users/update/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })

    if (!result || !result.message || !result.status) {
      throw new Error('Invalid response from server');
    }

    return {
      status: result.status,
      message: result.message
    }
  } catch (error) {
    console.error('Error updating user: ', error)
    throw new Error('Failed to update user');
  }
}

export const deleteUser = async (id) => {
  try {
    const result = await fetchWithAuth(`${API_URL}/api/users/archive`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id })
    })

    if (!result || !result.message || !result.status) {
      throw new Error('Invalid response from server');
    }

    return{ 
      status: result.status,
      message: result.message
    }
  } catch (error) {
    console.error('Error deleting user: ',error)
    throw new Error('Failed to delete user');
  }
}