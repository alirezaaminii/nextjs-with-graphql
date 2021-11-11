import type {AppProps as NextAppProps} from "next/app";
import { ClientContext } from 'graphql-hooks'
import {appWithTranslation} from 'next-i18next'
import { useGraphQLClient } from '../lib/graphql-client'

type AppProps<P = any> = {
    pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

const MyApp = ({Component, pageProps}: AppProps) => {
    const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState)

    return (
        <ClientContext.Provider value={graphQLClient}>
            <Component {...pageProps} />
        </ClientContext.Provider>
    )
}

export default appWithTranslation(MyApp)
