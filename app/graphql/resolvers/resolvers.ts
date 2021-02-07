/**
 * Write resolvers to respond to our queries and mutations
 *
 * Be sure to view the link below to see great examples of:
 *  - Creating custom resolvers (e.g. mutation to handle creating a User node and send an automated email)
 *  - Translate to override auto-generated resolvers by using the same name (e.g. createUsers with custom functionality)
 *  - Use of the @cypher directive for any query or mutation (including in type definitions for properties such as relatedPosts)
 *  - Use of the @auth directive for accepting JWTs in the request
 *  - Use of the @exclude directive to exclude automatically generating queries or resolvers for types
 *  - Use of the @autogenerate directive to automatically generate unique values for ID fields
 *
 *  https://www.notion.so/neo4j-graphql-v1-0-0-alpha-2-d47908030d4e4a0c86babbaef63887d0
 */

import jwt from "jsonwebtoken"
import { compare, hash } from "bcrypt"

export const resolvers = {
  Query: {},
  Mutation: {
    signup: async (_root, { username, password }, context) => {
      // Update our password argument to be a hashed representation of the originally supplied plain-text password
      password = await hash(password, 10)

      // Define our Cypher command(s) and parameter(s)
      // NOTE:  We have to explicitly set values that are marked with @autogenerate directives in our GraphQL schema.
      //        This is because we are not using automatically generated mutations to perform the node creation;
      //        we are explicitly creating a node at the database level here.
      const cypher = `
      WITH apoc.date.currentTimestamp() as currentTimestamp
      CREATE (u:User) SET
        u.id = randomUUID(),
        u.username = $username,
        u.password = $password,
        u.createdAt = datetime({epochMillis: currentTimestamp})
      RETURN u
      `
      const params = { username, password }

      // Attempt to create a new User
      const session = context.driver.session()
      const signupRes = await session.writeTransaction((tx) =>
        tx.run(cypher, params)
      )
      session.close()

      // Our response will contain an array of records. We just want the first one.
      const { id, username: user } = signupRes?.records[0]?.get(0)?.properties

      // Return a JWT token in the AuthToken object shape we have defined in our GraphQL schema
      return {
        token: jwt.sign({ id, user }, process.env.JWT_SECRET, {
          expiresIn: "2h",
        }),
      }
    },
    login: async (_root, { username, password }, context) => {
      // Define our Cypher command(s) and parameter(s)
      const cypher = `
      MATCH (u:User {username: $username})
      RETURN u LIMIT 1
      `
      const params = { username }

      // Attempt to find the User node with the specified username
      const session = context.driver.session()
      const loginRes = await session.writeTransaction((tx) =>
        tx.run(cypher, params)
      )
      session.close()

      // Our response will contain an array of records. We just want the first one.
      const { id, password: p } = loginRes?.records[0]?.get(0)?.properties

      // Check if our plain-text password matches the hashed password stored for our user node
      const isAuthenticated = await compare(password, p)

      if (!isAuthenticated) {
        throw new Error(
          "Authentication error: Please supply a valid username and password"
        )
      }

      // Return a JWT token in the AuthToken object shape we have defined in our GraphQL schema
      return {
        token: jwt.sign({ id, username }, process.env.JWT_SECRET, {
          expiresIn: "2h",
        }),
      }
    },
  },
}
