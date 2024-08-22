import { useState, useEffect } from 'react';
import { getUser, getUsers } from '../services/adminService';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        if (isMounted) {
          setUsers(data)
          setloading(false)
        }
      } catch (error) {
        if (isMounted) {
          seterror(error.message)
          setloading(false)
        }
      }
    }
    
    fetchUsers();

    return () => {
      isMounted = false;
    }
  }, []);
  return { users, loading, error }; 
}

export const useUser = (id) => {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUserinfo = async () => {
      try {
        const data = await getUser(id);
        if (isMounted) {
          setuser(data)
          setloading(false)
        }
      } catch (error) {
        if (isMounted) {
          seterror(error.message)
          setloading(false)
        }
      }
    }
    
    fetchUserinfo();

    return () => {
      isMounted = false;
    }
  }, []);
  return { user, loading, error }; 
}