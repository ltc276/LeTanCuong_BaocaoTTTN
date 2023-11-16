import httpAxios from '../httpAxios'
function getAll() {
    return httpAxios.get('productsale/index');
}
function getById(id) {
    return httpAxios.get(`productsale/show/${id}`);
}
function create(productsale) {
    return httpAxios.post('productsale/store', productsale);
}
function getByProductId(product_id) {
    return httpAxios.get(`productsale_product_id/${product_id}`);
}
function update(productsale, id) {
    return httpAxios.post(`productsale/update/${id}`, productsale);
}
function remove(id) {
    return httpAxios.delete(`productsale/destroy/${id}`);
}
const productsaleservice = {
    getAll: getAll,
    getById: getById,
    getByProductId:getByProductId,
    create: create,
    update: update,
    remove: remove
}
export default productsaleservice;


