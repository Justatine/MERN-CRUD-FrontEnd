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
    return { 
        message: result.message,
        status: result.status,
        accesToken: result.accessToken,
        userRole: result.userRole
    }
} catch (error) {
    console.log('Error signing in: ', error);
    throw error;
  }
}