import fastify, { FastifyRequest } from "fastify";
import cors from "fastify-cors";
import autoLoad from "fastify-autoload";
import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { join } from "path";
import { port } from "./config";
import { schema } from "./graphql/schema";

const bootstrap = async () => {
  const server = new ApolloServer({
    schema,
    context: ({ request }: { request: FastifyRequest }) => ({
      data: request.body,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await server.start();

  const app = fastify({
    logger: {
      level: "error",
    },
  });

  app.register(cors);

  app.register(autoLoad, {
    dir: join(__dirname, "api"),
    dirNameRoutePrefix: false,
  });

  app.register(server.createHandler({ path: "/api/graphql" }));

  app.listen(port, "0.0.0.0", (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address} || http://localhost:${port}`);
  });

  return app;
};

export default bootstrap();
