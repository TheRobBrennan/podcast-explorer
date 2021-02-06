# GraphQL

This guide will demonstrate the following GraphQL examples:

- Queries
  - EXAMPLE: Search the iTunes Podcast Directory

## Queries

### EXAMPLE: Search the iTunes Podcast Directory

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

```gql
# Query Variables (located underneath the query window in GraphIQL)
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
