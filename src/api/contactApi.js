import http from "./axiosHttp";

const getAll = () => {
    return http.get("/contacts");
};

const get = id => {
    return http.get(`/contacts/${id}`);
};

const getProductsByCateId = id => {
    return http.get(`/contacts/${id}/products`);
};

const create = data => {
    return http.post("/contacts", data);
};

const update = (id, data) => {
    return http.put(`/contacts/${id}`, data);
};

const remove = id => {
    return http.delete(`/contacts/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    getProductsByCateId,
};