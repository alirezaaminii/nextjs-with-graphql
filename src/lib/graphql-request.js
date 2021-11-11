const defaultOpts = { useCache: true }

export default async function graphQLRequest(client, query, options) {
  const opts = { ...defaultOpts, ...options }
  const operation = {
    query,
    variables: opts.variables,
    operationName: opts.operationName,
    persisted: opts.persisted,
  }

  if (opts.persisted || (client.useGETForQueries && !opts.isMutation)) {
    opts.fetchOptionsOverrides = {
      ...opts.fetchOptionsOverrides,
      method: 'GET',
    }
  }

  const cacheKey = client.getCacheKey(operation, opts)
  const cacheValue = await client.request(operation, opts)

  client.saveCache(cacheKey, cacheValue)
  return cacheValue
}
