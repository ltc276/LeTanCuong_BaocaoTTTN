import httpAxios from '../httpAxios'
function getAll() {
    return httpAxios.get('user/index');
}
function getById(id) {
    return httpAxios.get(`user/show/${id}`);
}
function create(user) {
    return httpAxios.post('user/store', user);
}
function update(user, id) {
    return httpAxios.post(`user/update/${id}`, user);
}
function remove(id) {
    return httpAxios.delete(`user/destroy/${id}`);
}
function loginApi(user) {
    return httpAxios.post("user/login",user);
}
const userservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    loginApi:loginApi
}
export default userservice;


