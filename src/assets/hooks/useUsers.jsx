import { useState, useEffect, useCallback } from 'react';
import { createUser, deleteUser, editUser, getUser, getUsers } from '../services/adminService';


export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, error, refresh: fetchUsers, setUsers };
};

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
  }, [id]);
  return { user, loading, error }; 
}

export const useCreateUser = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNewUser = async (data) => {
    setLoading(true);
    try {
      const response = await createUser(data);
      setResult(response);
      // setError(null)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      // setResult(null);
    }
  };

  return { result, loading, error, createNewUser};
};

export const useUpdateuser = () => {
  const [result, setresult] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  const updateOldUser = async (id,data) => {
    try {
      const updateUser = await editUser(id,data);
      setresult(updateUser)
    } catch (error) {
      setUpdateError(error)
    } 
  }

  return { result, updateError, updateOldUser };
}

export const useDeletuser = () => {
  const [result, setResult] = useState(null);
  const [deleteError, setDeleteError] = useState(null);

  const deleteOldUser = async (id) => {
    try {
      const deleteUserResult  = await deleteUser(id);
      setResult(deleteUserResult)
    } catch (error) {
      setDeleteError(deleteError)
    }
  }
  return { result, deleteError, deleteOldUser };
}

