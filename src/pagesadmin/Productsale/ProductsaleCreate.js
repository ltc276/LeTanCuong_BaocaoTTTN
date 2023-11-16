import { Link, useNavigate } from "react-router-dom";


import { useState, useEffect } from "react";
import productsaleservice from "../../service/ProductsaleSevice";
import productservice from "../../service/ProductSevice"
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
function ProductsaleCreate() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [product_id, setProductid] = useState(0);
    const [price_sale, setPricesale] = useState(0);
    const [qty, setQty] = useState(0);
    const [data_begin, setDatabegin] = useState("");
    const [data_end, setDataend] = useState("");
    console.log(data_begin);
    console.log(data_end);

    async function productsaleStore(event) {
        event.preventDefault();
        var productsale = new FormData();
        productsale.append("product_id", product_id);
        productsale.append("price_sale", price_sale);
        productsale.append("qty", qty);
        productsale.append("data_begin", data_begin);
        productsale.append("data_end", data_end);
        await productsaleservice.create(productsale).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/productsale", { replace: true });
        });
    }
    useEffect(
        function () {
            (async function () {
                await productservice.getAll().then(function (result) {
                    setProducts(result.data.data);
                });
            })();
        },
        []
    );
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-12 col-md-4 ">
                    <form onSubmit={productsaleStore} method="post">
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong>
                                            Thêm danh mục
                                        </strong>

                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <button className="btn btn-sm  btn-succress me-2 bg-light" type="submit">
                                            Lưu

                                        </button>
                                        <Link to="/admin/productsaleaddress" className="btn-btn-sm btn-succress btn-light">
                                            Về danh sách
                                        </Link>
                                    </div>

                                </div>

                            </div>
                            <div className="card-body">
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="mb-3 " style={{ fontWeight: "bold" }}>
                                            <label htmlFor="product_id">Product ID</label>
                                            <select
                                                name="product_id"
                                                className="form-control"
                                                value={product_id}
                                                onChange={(e) => setProductid(e.target.value)}
                                            >
                                                {products.map((item, index) => {
                                                    return <option key={index} value={item.id}>{item.name}, Giá hiện tại :{item.price}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="price_sale">Giá đã giảm (Price_sale)</label>
                                            <textarea name="price_sale" value={price_sale} onChange={(e) => setPricesale(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="qty">Số lượng (qty)</label>
                                            <textarea name="qty" value={qty} onChange={(e) => setQty(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="data_begin">Ngày bắt đầu giảm (data_begin)</label>
                                            <textarea name="data_begin" value={data_begin} onChange={(e) => setDatabegin(e.target.value)} className="form-control"></textarea>
                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="data_end">Ngày kết thúc giảm (data_begin)</label>
                                            <textarea name="data_end" value={data_end} onChange={(e) => setDataend(e.target.value)} className="form-control"></textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductsaleCreate;