import { extendTheme } from '@chakra-ui/react';

const defaultTheme = extendTheme({
    config: {
        initialColorMode: 'dark'
    },
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: 'Menlo, monospace'
    },
    colors: {
        purple: {
            500: '#8257e5'
        },
        gray: {
            300: '#e1e1e6',
            600: '#29292e',
            700: '#202024',
            800: '#121214'
        }
    }
});

export default defaultTheme;
