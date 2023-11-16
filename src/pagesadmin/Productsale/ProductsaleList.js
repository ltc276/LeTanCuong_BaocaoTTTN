import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import productsaleservice from "../../service/ProductsaleSevice";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";

function ProductsaleList() {
    const [productsales, setProductsales] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await productsaleservice.getAll()
                .then(function (result) {
                    setProductsales(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function productsaleDelete($id) {
        productsaleservice.remove($id)
            .then(function (res) {
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
                        <strong className="text-primary">Kho hàng giảm giá</strong>
                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>
                    <div className="col-1 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/productsale/create"><MdAdd />Thêm</Link>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bproductsaleed table-hover">
                            <thead style={{ backgroundColor: "#FF66CC", fontWeight: "bold" }}>
                                <tr>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID sản phẩm</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Giá giảm</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Số lượng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày bắt đầu giảm</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày kết thúc giảm</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chức năng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsales.map(function (productsale, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{productsale.product_id}</td>
                                            <td>{productsale.price_sale}</td>
                                            <td>{productsale.qty}</td>
                                            <td>{Moment(productsale.data_begin).format('DD-MM-yyyy hh:mm')}</td>
                                            <td>{Moment(productsale.data_end).format('DD-MM-yyyy hh:mm')}</td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/productsale/show/' + productsale.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/productsale/update/' + productsale.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => productsaleDelete(productsale.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>
                                                {productsale.id}
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

export default ProductsaleList;