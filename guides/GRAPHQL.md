# GraphQL

This guide will demonstrate the following GraphQL examples:

- Queries
  - Search the iTunes Podcast Directory
  - Display details for the currently authenticated user
- Mutations
  - Create a new user account
  - Log in with a user account
  - Subscribe to a podcast

## Queries

### Search the iTunes Podcast Directory

```gql
# Example query in GraphIQL
query searchiTunesPodcasts($searchTerm: String!) {
  podcastSearch(searchTerm: $searchTerm) {
    title
    releaseDate
    feedURL
    iTunesId
    categories
  }
}
```

Query Variables (located underneath the query window in GraphIQL)

```json
{
  "searchTerm": "Graph database"
}
```

![../app/__screenshots__/graphiql-example-query-search-itunes-podcasts-01.png](../app/__screenshots__/graphiql-example-query-search-itunes-podcasts-01.png)

This should result in a response like:

```json
{
  "data": {
    "podcastSearch": [
      {
        "title": "Graphistania: Podcast for Neo4j Graph Database community",
        "releaseDate": "2021-01-11T00:00:00.000Z",
        "feedURL": "http://feeds.soundcloud.com/users/soundcloud:users:141739624/sounds.rss",
        "iTunesId": 975377379,
        "categories": ["Technology", "Podcasts"]
      }
    ]
  }
}
```

![../app/__screenshots__/graphiql-example-query-search-itunes-podcasts-02.png](../app/__screenshots__/graphiql-example-query-search-itunes-podcasts-02.png)

### Display details for the currently authenticated user

This query uses the JWT from the currently authenticated user to retrieve user details.

```gql
query currentUser() {
  me {
    id
    username
    password
  }
}
```

HTTP Headers (located underneath the query window in GraphIQL)

```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
```

This should result in a response like:

```json
{
  "data": {
    "me": {
      "id": "4ed433aa-7572-4afa-afb7-52d704a10913",
      "username": "rob",
      "password": "$2b$10$X8ndq9WIZrN38ZxMhb/E5OPBllNgFdNfuSef1FSXbqNdOezaxSmCS"
    }
  }
}
```

## Mutations

### Create a new user account

```gql
mutation {
  signup(username: "rob", password: "test") {
    token
  }
}
```

![../app/__screenshots__/graphiql-example-mutation-signup.png](../app/__screenshots__/graphiql-example-mutation-signup.png)

This should result in a response like:

```json
{
  "data": {
    "signup": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRlZDQzM2FhLTc1NzItNGFmYS1hZmI3LTUyZDcwNGExMDkxMyIsInVzZXIiOiJyb2IiLCJpYXQiOjE2MTI2ODgxNjAsImV4cCI6MTYxMjY5NTM2MH0.9AigzKr-xO4ppvwcn77S4IsAQpX7t_o4BvsIfLEGnAI"
    }
  }
}
```

### Log in with a user account

```gql
mutation {
  login(username: "rob", password: "test") {
    token
  }
}
```

This should result in a response like:

```json
{
  "data": {
    "login": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRlZDQzM2FhLTc1NzItNGFmYS1hZmI3LTUyZDcwNGExMDkxMyIsInVzZXJuYW1lIjoicm9iIiwiaWF0IjoxNjEyNjkwMzQ2LCJleHAiOjE2MTI2OTc1NDZ9.5kdh8mdDizb8a0no-b7wVO0XQhCiRypy3CCVj6RdzRs"
    }
  }
}
```

### Subscribe to a podcast

This mutation uses the JWT from the currently authenticated user to subscribe to a podcast in our database.

````gql
mutation {
  subscribeToPodcast(iTunesId:"975377379"){
    iTunesId
  }
}```

HTTP Headers (located underneath the query window in GraphIQL)

```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
````

This should result in a response like:

```json
{
  "data": {
    "subscribeToPodcast": {
      "iTunesId": "975377379"
    }
  }
}
```
