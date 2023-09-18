import { request as _request } from "request";

const BASE_URL = "http://localhost:6173/api";

export async function request(url, options) {
  return _request(BASE_URL + url, options);
}
