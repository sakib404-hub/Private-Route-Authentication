import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = use(AuthContext);

    if (user) {
        return children;
    }
    return (
        <Navigate to={'/login'}>Login</Navigate>
    );
};

export default PrivateRoute;