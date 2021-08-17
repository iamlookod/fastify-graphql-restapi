const path = require("path");
const migrations =
  process.env.NODE_ENV === "development"
    ? ["src/migrations/*.ts"]
    : ["dist/migrations/*.js"];

const entities =
  process.env.NODE_ENV === "development"
    ? ["src/modules/**/entity.ts"]
    : ["dist/modules/**/entity.js"];

console.log(process.env.NODE_ENV);

module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
  logging: ["query", "error"],
  entities,
  migrations,
  migrationsTableName: "migratiosns",
  cli: {
    migrationsDir: "src/migrations",
  },
};
