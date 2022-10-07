import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from '@Components';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SnackbarProvider
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
            <Component {...pageProps} />
        </SnackbarProvider>
    );
}

export default MyApp;
