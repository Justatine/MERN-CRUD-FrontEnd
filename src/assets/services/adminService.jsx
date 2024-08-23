const API_URL = process.env.REACT_APP_API_URL;

export const getUsers = async () => {
  try {
    const res = await fetch(`${API_URL}/api/users/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUser = async (id) => {
    try {
        const res = await fetch(`${API_URL}/api/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!res.ok) {
            throw new Error('Failed to fetch user profile');
        }
    
        const result = await res.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export const createUser = async (data) => {
    try {
      const res = await fetch(`${API_URL}/api/users/create`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
  
      const result = await res.json();
      return {
        message: result.message,
        status: result.status
      };
      
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
}  

export const editUser = async (id, data) => {
  try {
    const res = await fetch(`${API_URL}/api/users/update/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })

    if (!res.ok) {
      throw new Error('Failed to update user');
    }
    const result = await res.json()
    return {
      status: result.status,
      message: result.message
    }
  } catch (error) {
    console.error('Error updating user: ', error)
    throw error;
  }
}