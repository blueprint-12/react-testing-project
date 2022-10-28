import axios from "axios";
import * as gvar from "./global_variables";

export const api = axios.create({
  baseURL: gvar.BASE_URL,
});
