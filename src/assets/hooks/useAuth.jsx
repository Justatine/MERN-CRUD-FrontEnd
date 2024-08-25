import { useState } from 'react';
import { loginUser } from '../services/authServices';
import { useNavigate } from 'react-router-dom';

export const useLoginuser = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const signInUser = async (data) => {
      setLoading(true);
      try {
        const response = await loginUser(data);
        setResult(response);
        localStorage.setItem('accessToken', response.accesToken);
        
        if (response.userRole === 'Admin') {
            navigate('/admin/');
        } else if (response.userRole === 'Student') {
            navigate('/student/'); 
        } else {
            navigate('/');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return { result, loading, error, signInUser };
};