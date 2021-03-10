import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import { Token } from "./lib";
import database from "./database";
import resolvers from "./resolvers";

// App configuration
const app = express();
app.set("port", process.env.PORT || 7777);
app.use(cors());
app.use(bodyParser.json());

// Apollo server graphql configuration
const context = ({ req }: ExpressContext) => {
  return {
    ...req,
    database,
    user: req.headers.authorization ? Token.getCurrentUser(req) : null,
  };
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  context,
});

server.applyMiddleware({ app, path: "/graphql" });

export { app, server };
