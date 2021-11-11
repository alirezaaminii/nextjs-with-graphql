import type {AppProps as NextAppProps} from "next/app";
import {appWithTranslation} from 'next-i18next'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'

type AppProps<P = any> = {
    pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

const MyApp = ({Component, pageProps}: AppProps) => {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default appWithTranslation(MyApp)
