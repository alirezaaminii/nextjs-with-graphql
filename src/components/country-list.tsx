import { useQuery } from 'graphql-hooks'
import ErrorMessage from './error-message'

export const ALL_COUNTRIES_QUERY = `
  query countriesList() {
    countries() {
      name
    }
  }
`;

interface Country {
  name: string
}

export const allCountriesOptions = (variables?: unknown) => ({
  variables: {  },
})

export default function CountryList() {
  const { error, data } = useQuery(
    ALL_COUNTRIES_QUERY,
    allCountriesOptions()
  )

  if (error) return <ErrorMessage message="Error loading countries." />
  if (!data) return <div>Loading</div>

  const { allCountries } = data

  return (
    <>
      <section>
        <ul>
          {allCountries.map((country: Country, index: number) => (
            <li key={index}>
              <div>
                <span>{index + 1}. </span>
                <p>{country.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
