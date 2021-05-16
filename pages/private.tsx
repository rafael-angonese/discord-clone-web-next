import React, { useContext } from 'react';
import { Heading } from '@chakra-ui/react';
import withAuth from '../utils/withAuth';
import AuthContext from '../contexts/AuthContext';

const Private: React.FC = () => {
    const { logout } = useContext(AuthContext);

    return (
        <>
            <h1>Private Page</h1>

            <Heading size="sm">
                I'm a private page with cookie authentication
            </Heading>

            <br />

            <button onClick={logout}>Logout</button>
        </>
    );
};

export default withAuth(Private);
