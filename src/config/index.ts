import * as dotenv from "dotenv";

dotenv.config();

const port: number = Number(process.env.PORT) || 3000;
const apiEndpoint: string = process.env.API_ENDPOINT || "/";
const graphQLEndpoint: string = process.env.GRAPHQL_ENDPOINT || "/";

export { port, apiEndpoint, graphQLEndpoint };
