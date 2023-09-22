import api from "./axios";

export default {
  test: () => api.get(`/test`).then((res) => res.data),
  fetchFiles: (params) => api.get(`/files`, { params }).then((res) => res.data),
};
