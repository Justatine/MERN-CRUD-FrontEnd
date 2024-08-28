import { useState } from 'react';
import { loginUser } from '../services/authServices';

export const useLoginuser = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signInUser = async (data) => {
      setLoading(true);
      try {
        const response = await loginUser(data);
        setResult(response);
        // console.log('response: ',response);
        // localStorage.setItem('accessToken', response.accesToken);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return { result, loading, error, signInUser };
};