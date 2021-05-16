import http from "../http-common";

const getAll = () => {
  return http.get("/listing/");
};

const get = id => {
  return http.get(`/pet/${id}`);
};

const create = data => {
  return http.post("/pet", data);
};

const update = (id, data) => {
  return http.put(`/pet/${id}`, data);
};

const remove = id => {
  return http.delete(`/pet/${id}`);
};

const removeAll = () => {
  return http.delete(`/pet`);
};

const findByName = name => {
  return http.get(`/pet?name=${name}`);
};

const AdogtService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default AdogtService;