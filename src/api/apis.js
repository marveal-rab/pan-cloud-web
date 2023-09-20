import api from "./axios";

export const test = () => api.get(`/test`).then((res) => res.data);
