import http from "./axiosHttp";

const getAll = () => {
    return http.get("/postCategories");
};

const get = id => {
    return http.get(`/postCategories/${id}`);
};

const getPostsByCateId = id => {
    return http.get(`/postCategories/${id}/posts`);
};

const create = data => {
    return http.post("/postCategories", data);
};

const update = (id, data) => {
    return http.put(`/postCategories/${id}`, data);
};

const remove = id => {
    return http.delete(`/postCategories/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    getPostsByCateId,
};