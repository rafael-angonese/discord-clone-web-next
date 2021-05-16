import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from '../utils/axios';

interface AuthContextData {
    token: string;
    user: object | null;
    is_loading: boolean;
    setAuthToken(token: string): Promise<void>;
    logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [token, setToken] = useState<string>('');
    const [is_loading, setIs_loading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            const storagedToken = await Cookies.get('token');

            if (storagedToken) {
                axios.defaults.headers.Authorization = `Bearer ${storagedToken}`;
                setToken(storagedToken);
            }
            setIs_loading(false);
        }

        loadStoragedData();
    }, []);

    async function setAuthToken(token: string) {
        await Cookies.set('token', token);
        setToken(token);
    }

    async function logout() {
        await Cookies.remove('token');
        setToken('');
    }

    return (
        <AuthContext.Provider
            value={{ token, user: {}, is_loading, setAuthToken, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
