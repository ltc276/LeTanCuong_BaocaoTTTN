import { Link, useNavigate, useParams } from "react-router-dom";
import productsaleservice from "../../service/ProductsaleSevice";
import productservice from "../../service/ProductSevice"
import { useEffect, useState } from "react";

function ProductsaleUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");
    const [products, setProducts] = useState([]);
    const [product_id, setProductid] = useState(0);
    const [price_sale, setPricesale] = useState(0);
    const [qty, setQty] = useState(0);
    const [data_begin, setDatabegin] = useState("");
    const [data_end, setDataend] = useState("");
    useEffect(function () {
        (async function () {
            await productservice.getAll().then(function (result) {
                setProducts(result.data.data);
            });
        })();
    }, []);
    const [productsale, setProductsale] = useState([]);
    useEffect(
        function () {
            (async function () {
                await productsaleservice.getById(id).then(function (result) {
                    setProductsale(result.data.data);
                });
            })();
            setProductid(productsale.product_id);
            setPricesale(productsale.price_sale);
            setQty(productsale.qty);
            setDatabegin(productsale.data_begin);
            setDataend(productsale.data_end);
        },
        [
            productsale.product_id,
            productsale.price_sale,
            productsale.qty,
            productsale.data_begin,
            productsale.data_end,
            id,
        ]
    );
    async function productsaleStore(event) {
        event.preventDefault();
        var productsale = new FormData();
        productsale.append("product_id", product_id);
        productsale.append("price_sale", price_sale);
        productsale.append("qty", qty);
        productsale.append("data_begin", data_begin);
        productsale.append("data_end", data_end);
        await productsaleservice.update(productsale, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/productsale", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="container">
                    <form method="post" onSubmit={productsaleStore}>
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong className="title1">THÊM DANH MỤC</strong>
                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <div className="button">
                                            <Link to="/admin/productsale" className="backward">
                                                Go back
                                            </Link>
                                            <button type="submit" className="save">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row" >
                                    <div className="col-md-12" >
                                        <div className="mb-3 " style={{ fontWeight: "bold" }}>
                                            <label htmlFor="product_id">Product ID</label>
                                            <select disabled
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
        </section>
    );
}

export default ProductsaleUpdate;