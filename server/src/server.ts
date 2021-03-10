import { app, server } from "./app";

app.listen(app.get("port"), () => {
  console.log(
    `🚀 Server ready at http://localhost:%d%s
    `,
    app.get("port"),
    server.graphqlPath
  );
});
