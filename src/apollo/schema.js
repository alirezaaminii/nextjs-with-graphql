import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './type-defs'

export const schema = makeExecutableSchema({
  typeDefs,
})
