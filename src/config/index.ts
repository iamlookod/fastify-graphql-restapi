import * as dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";

dotenv.config();

const port: number = Number(process.env.PORT) || 3000;

const database: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
};

export { port, database };
