import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const UserLogin = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>Login Here {user.name}</h2>
        </div>
    );
};

export default UserLogin;
