import { useMemo } from 'react'
import { GraphQLClient } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'

let graphQLClient

function createClient(initialState) {
  return new GraphQLClient({
    ssrMode: typeof window === 'undefined',
    url: 'https://countries.trevorblades.com',
    cache: memCache({ initialState }),
  })
}

export function initializeGraphQL(initialState = null) {
  const _graphQLClient = graphQLClient ?? createClient(initialState)

  if (initialState && graphQLClient) {
    graphQLClient.cache = memCache({
      initialState: Object.assign(
        graphQLClient.cache.getInitialState(),
        initialState
      ),
    })
  }
  if (typeof window === 'undefined') return _graphQLClient
  if (!graphQLClient) graphQLClient = _graphQLClient

  return _graphQLClient
}

export function useGraphQLClient(initialState) {
  const store = useMemo(() => initializeGraphQL(initialState), [initialState])
  return store
}
