import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import productservice from "../../service/ProductSevice";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";
function ProductList() {

    const [products, setProducts] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getAll()
                .then(function (result) {
                    setProducts(result.data.data);
                }
                );
        })

            ();

    }, [status_delete]);
    function productDelete($id) {

        productservice.remove($id).then(function (res) {
            console.log(res.data.data);
            setStatus_delete(res.data.data.id);
            alert(res.data.message);
        });


    }
    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <strong className="text-primary">Sản phẩm</strong>

                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>
                    <div className="col-1 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/product/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead style={{ backgroundColor: "#FF66CC", fontWeight: "bold" }}>
                                <tr>
                                    <th style={{ padding: 10, textAlign: "left" }}>Tên sản phẩm</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Hình</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Giá</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Giá sale</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chi tiết</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày tạo</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chức năng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(function (product, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>
                                                <img src={urlImage + 'product/' + product.image} alt="hinh.png" className="img-fluid" width="50px" height="50px" />
                                            </td>

                                            <td>
                                                {product.price}
                                            </td>
                                            <td>
                                                {product.price_sale}
                                            </td>
                                            <td style={{ width: 200 }}>
                                                {product.detail}
                                            </td>
                                            <td>
                                                {Moment(product.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/product/show/' + product.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/product/update/' + product.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => productDelete(product.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>
                                                {product.id}
                                            </td>
                                        </tr>

                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}




export default ProductList;