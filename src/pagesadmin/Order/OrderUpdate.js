import { Link, useNavigate, useParams } from "react-router-dom";
import orderservice from "../../service/OrderSevice";
import { useEffect, useState } from "react";

function OrderUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [address, setAddress] = useState("");
    const [user_id, setUserId] = useState(0);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(1);
    const [orders, setOrders] = useState([]);
    useEffect(function () {
        (async function () {
            await orderservice.getAll().then(function (result) {
                setOrders(result.data.data);
            });
        })();
    }, []);
    const [order, setOrder] = useState([]);
    useEffect(
        function () {
            (async function () {
                await orderservice.getById(id).then(function (result) {
                    setOrder(result.data.data);
                });
            })();
            setName(order.name);
            setNote(order.note);
            setAddress(order.address);
            setPhone(order.phone);
            setEmail(order.email);
            setUserId(order.user_id);
            setStatus(order.status);
        },
        [
            order.address,
            order.note,
            order.name,
            order.phone,
            order.email,
            order.user_id,
            order.status,
            id,
        ]
    );
    async function orderStore(event) {
        event.preventDefault();
        var order = new FormData();
        order.append("name", name);
        order.append("note", note);
        order.append("phone", phone);
        order.append("email", email);
        order.append("address", address);
        order.append("user_id", user_id);
        order.append("status", status);
        await orderservice.update(order, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/order", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="container">
                    <form method="post" onSubmit={orderStore}>
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong className="title1">THÊM DANH MỤC</strong>
                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <div className="button">
                                            <Link to="/admin/order" className="backward">
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
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="name">Tên thương hiệu (Name)</label>
                                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="phone">Điện thoại (Phone)</label>
                                            <textarea name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="email">Hộp thư thoại (Email)</label>
                                            <textarea name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></textarea>

                                        </div>

                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="address">Đường (Address)</label>
                                            <textarea name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="user_id">User_id</label>
                                            <select name="user_id" className="form-control" value={user_id} onChange={(e) => setUserId(e.target.value)}>

                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>

                                            </select>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="status">Tình trạng (Status)</label>
                                            <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                                <option value="1">Xuất bản 1</option>
                                                <option value="2">Không xuất bản 2</option>

                                            </select>

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

export default OrderUpdate;