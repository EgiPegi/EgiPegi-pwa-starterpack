import api from "../api";

const getAll = () => {
  return api.get("/contoh");
};

const get = (id) => {
  return api.get(`/contoh/${id}`);
};

const create = (data) => {
  return api.post("/contoh", data);
};

const update = (id, data) => {
  return api.put(`/contoh/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/contoh/${id}`);
};

const removeAll = () => {
  return api.delete(`/contoh`);
};

const findByTitle = (judul) => {
  return api.get(`/contoh?judul=${judul}`);
};

const ContohService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default ContohService;
