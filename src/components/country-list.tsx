import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import ErrorMessage from './error-message'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

interface Country {
    name: string
    code: string
}

export default function CountryList() {
    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

    if (loading || error) {
        return <p>{error ? <ErrorMessage message={error.message}/> : 'Loading...'}</p>;
    }

    return (
        <>
            <section>
                <ul>
                    {data.countries.map((country: Country) => (
                        <li key={country.code}>
                            <div>
                                <span>{country.code}. </span>
                                <p>{country.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
