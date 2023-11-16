import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import orderservice from "../../service/OrderSevice";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await orderservice.getAll()
                .then(function (result) {
                    setOrders(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function orderDelete($id) {
        orderservice.remove($id)
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
                        <strong className="text-primary">Order</strong>

                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>
                    <div className="col-1 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/order/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead style={{ backgroundColor: "#FF66CC", fontWeight: "bold" }}>
                                <tr>
                                    <th style={{ padding: 10, textAlign: "left" }}>Tên</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Đường</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Note</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày tạo</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chức năng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(function (order, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{order.name}</td>
                                            <td>{order.address}</td>


                                            <td>
                                                {order.note}
                                            </td>
                                            <td>
                                                {Moment(order.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/order/show/' + order.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/order/update/' + order.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => orderDelete(order.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>
                                                {order.id}
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

export default OrderList;