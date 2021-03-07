import fs from "fs";
import path from "path";
import app from "./app";
import { ApolloServer, gql } from "apollo-server-express";
import resolvers from "./resolvers";

// Graph ql apollo server configuration
const schemaPath = () => {
  return path.join(process.cwd(), "src", "schema.graphql");
};

const typeDefs = gql(fs.readFileSync(schemaPath(), { encoding: "utf8" }));
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: "/graphql" });
// End of graphql apollo server configuration

// Express server
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
