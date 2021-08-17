import fastify from "fastify";
import autoLoad from "fastify-autoload";
import { join } from "path";
import { port } from "./config";

const bootstrap = async () => {
  const app = fastify({
    logger: {
      level: "info",
    },
  });

  app.register(autoLoad, {
    dir: join(__dirname, "api"),
    dirNameRoutePrefix: false,
  });

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
