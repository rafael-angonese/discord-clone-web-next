import React from 'react';
import { AppProps } from 'next/app';
import ThemeContainer from '../contexts/theme/ThemeContainer';
import { AuthProvider } from '../contexts/auth';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeContainer>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeContainer>
    );
};

export default MyApp;
