import React, { useContext } from 'react';
import { Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import AuthContext from '../contexts/auth';

const PrivateSsr: React.FC = () => {
    const { logout } = useContext(AuthContext);

    return (
        <>
            <h1>Private Ssr Page</h1>

            <Heading size="sm">
                I'm a private Ssr page with cookie authentication
            </Heading>

            <br />

            <button onClick={logout}>Logout</button>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { token } = req.cookies

    if(!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {

        }
    }
}

export default PrivateSsr;
