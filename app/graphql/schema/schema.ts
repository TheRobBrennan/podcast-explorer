import { Neo4jGraphQL } from "@neo4j/graphql"
import { typeDefs } from "../type-definitions"
import { resolvers } from "../resolvers"

export const augmentedSchema = new Neo4jGraphQL({
  typeDefs,
  resolvers,
  debug: true,
})
