import axios from "axios";
import { apiEndpoint, graphQLEndpoint } from "../config";

export const api = axios.create({ baseURL: apiEndpoint });
export const graphQL = axios.create({ baseURL: graphQLEndpoint });
