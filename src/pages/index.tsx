import Link from 'next/link'
import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { initializeApollo } from '../apollo/client'

import CountryList from '../components/country-list'
import ThemeChanger from '../components/theme-changer'


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
                <ThemeChanger/>
            </div>
            <CountryList/>
        </main>
    )
}

export const getStaticProps = async ({ locale }: {locale: string}) => {
    const translation = await serverSideTranslations(locale, ['common']);
    const apolloClient = initializeApollo()

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
            ...translation,
        },
    }
}

export default Index
