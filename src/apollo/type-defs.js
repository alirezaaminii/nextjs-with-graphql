import { gql } from '@apollo/client'

export const typeDefs = gql`
  type Country {
    name: String!
    code: String!
  }

  type Query {
    viewer: Country
  }
`
