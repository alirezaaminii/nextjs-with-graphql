import Link from 'next/link'
import { initializeGraphQL } from '../lib/graphql-client'
import graphQLRequest from '../lib/graphql-request'
import {useRouter} from 'next/router'
import CountryList, {
    ALL_COUNTRIES_QUERY,
    allCountriesOptions,
} from '../components/country-list'

import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

const Index = () => {
    const router = useRouter()
    const {t} = useTranslation('common')

    return (
        <main>
            <h1>{t('title')}</h1>
            <div>
                <Link
                    href='/'
                    locale={router.locale === 'en' ? 'fa' : 'en'}>
                    <button>
                        {t('change-locale')}
                    </button>
                </Link>
            </div>
            <CountryList/>
        </main>
    )
}

export const getStaticProps = async ({ locale }: {locale: string}) => {
    const translation = await serverSideTranslations(locale, ['common']);
    const client = initializeGraphQL()
    await graphQLRequest(client, ALL_COUNTRIES_QUERY, allCountriesOptions())

    return {
        props: {
            initialGraphQLState: client.cache.getInitialState(),
            ...translation,
        },
    }
}

export default Index
