import { resolvers } from "./resolvers"

describe("Our GraphQL resolvers should contain", () => {
  describe("A Query object", () => {
    const { Query } = resolvers

    it("that has been defined", () => {
      expect(Query).toBeDefined()
    })
  })
})
