import plugin from "fastify-plugin";
import { createConnection, getConnectionOptions } from "typeorm";

export default plugin(async () => {
  try {
    const connectionOptions = await getConnectionOptions();
    Object.assign(connectionOptions, {
      options: { encrypt: true },
    });

    console.log(`connecting to database: ${connectionOptions.type}...`);
    const connection = await createConnection(connectionOptions);

    if (connection) {
      await connection.runMigrations();
      console.log("database connected");
    }
  } catch (error) {
    console.log(error);
    console.log("make sure you have set .env variables");
  }
});
