// Create example Ping node(s)
WITH apoc.date.currentTimestamp() as currentTimestamp
CREATE (:Ping { id: randomUUID(), createdAt: datetime({epochMillis: currentTimestamp}), createdBy: '** Neo4j database seed **' });

// Create a sample Google OAuth user
WITH apoc.date.currentTimestamp() as currentTimestamp
MERGE (n:User {name: "Justa User"})
ON CREATE SET
  n.userId = randomUUID(),
  n.name = "Justa User",
  n.sub = "google-oauth2|116058668302290861810",
  n.createdAt = datetime({epochMillis: currentTimestamp}),
  n.createdBy = "** Neo4j database seed **"
ON MATCH SET
  n.updatedAt = datetime({epochMillis: currentTimestamp}),
  n.updatedBy = "** Neo4j database seed **";
