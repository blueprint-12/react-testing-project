import axios from "axios";
import * as gval from "./global_variables";

export const api = axios.create({
  baseURL: gval.BASE_URL,
});
