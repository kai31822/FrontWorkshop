import { useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 5000);
    }, [navigate]);
    return (
        <>
            404 Not Found
            <p>{error.error.message}</p>
        </>
    );
};

