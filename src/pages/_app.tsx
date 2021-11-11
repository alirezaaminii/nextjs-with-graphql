import type {AppProps as NextAppProps} from "next/app";
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'next-themes'
import { useApollo } from '../apollo/client';
import {appWithTranslation} from 'next-i18next'

//import styles
import '../css/main.css';

type AppProps<P = any> = {
    pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

const MyApp = ({Component, pageProps}: AppProps) => {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ThemeProvider>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </ThemeProvider>
    )
}

export default appWithTranslation(MyApp)
