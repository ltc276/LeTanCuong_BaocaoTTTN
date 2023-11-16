import httpAxios from '../httpAxios'
function getProductAll(limit,page=1) {
    return httpAxios.get(`product_all/${limit}/${page}`);
}
function getProductBySlug(slug) {
    return httpAxios.get(`product_detail/${slug}`);
}
function getProductBySlugPlus(slug,category_id) {
    return httpAxios.get(`product_detail_plus/${slug}/${category_id}`);
}
function getProductByCategoryId(category_id) {
    return httpAxios.get(`product_category_id/${category_id}`);
}
function getProductByCategoryIdAndLimit(category_id,limit,page=1) {
    return httpAxios.get(`product_category/${category_id}/${limit}/${page}`);
}
function getAll() {
    return httpAxios.get('product/index');
}
function getById(id) {
    return httpAxios.get(`product/show/${id}`);
}
function create(product) {
    return httpAxios.post('product/store', product);
}
function update(product, id) {
    return httpAxios.post(`product/update/${id}`, product);
}
function remove(id) {
    return httpAxios.delete(`product/destroy/${id}`);
}
const productservice ={
    getProductAll:getProductAll,
    getProductBySlug:getProductBySlug,
    getProductByCategoryId:getProductByCategoryId,
    getProductBySlugPlus:getProductBySlugPlus,
    getProductByCategoryIdAndLimit:getProductByCategoryIdAndLimit,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default productservice;


