import { useState, useEffect } from 'react';

export const useAlert = (result) => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    useEffect(() => {
        if (result?.status === 'success') {
            setIsAlertVisible(true);
            const hideAlertTimer = setTimeout(() => {
                setIsAlertVisible(false);
            }, 3000);

            return () => clearTimeout(hideAlertTimer);
        }
    }, [result]);

    return isAlertVisible;
};
