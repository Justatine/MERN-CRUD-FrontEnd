import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAlert = (result) => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (result?.status === 'success') {
            setIsAlertVisible(true);
            const hideAlertTimer = setTimeout(() => {
                setIsAlertVisible(false);
            }, 3000);

            return () => clearTimeout(hideAlertTimer);
        } else if (result?.status === 'failed') {
            setIsAlertVisible(true);
            const hideAlertTimer = setTimeout(() => {
                setIsAlertVisible(false);
            }, 3000);
            return () => clearTimeout(hideAlertTimer);
        }
    }, [result, navigate]);

    return isAlertVisible;
};

export const useLoginAlert = (result) => { 
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (result?.status === 'success') {
            setIsAlertVisible(true);
            const hideAlertTimer = setTimeout(() => {
                setIsAlertVisible(false);

                if (result?.userRole === 'Admin') {
                    navigate('/admin');
                } else if (result?.userRole === 'Student') {
                    navigate('/student'); 
                } else {
                    navigate('/');
                }

            }, 3000);

            return () => clearTimeout(hideAlertTimer);
        } else if (result?.status === 'failed') {
            setIsAlertVisible(true);
            const hideAlertTimer = setTimeout(() => {
                setIsAlertVisible(false);
            }, 3000);
            return () => clearTimeout(hideAlertTimer);
        }
    }, [result, navigate]);

    return isAlertVisible;
};
