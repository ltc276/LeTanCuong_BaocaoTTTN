import { Link, useNavigate, useParams } from "react-router-dom";
import menuservice from "../../service/MenuSevice";
import Moment from 'moment';
import { useEffect, useState } from "react";

function MenuUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    const [table_id, setTableId] = useState(0);
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [menu, setCategory] = useState([]);
    useEffect(
        function () {
            (async function () {
                await menuservice.getById(id).then(function (result) {
                    setCategory(result.data.data);
                });
            })();
            setName(menu.name);
            setLink(menu.link);
            setType(menu.type);
            setTableId(menu.table_id);
            setStatus(menu.status);
        },
        [
            menu.link,
            menu.type,
            menu.name,
            menu.table_id,
            menu.status,
            id,
        ]
    );
    async function categoryStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("type", type);
        menu.append("table_id", table_id);
        menu.append("status", status);
        await menuservice.update(menu, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/menu", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="container">
                    <form method="post" onSubmit={categoryStore}>
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong className="title1">THÊM DANH MỤC</strong>
                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <div className="button">
                                            <Link to="/admin/category" className="backward">
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
                                            <label htmlFor="link">Đường dẫn (link)</label>
                                            <textarea name="link" value={link} onChange={(e) => setLink(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="type">Kiểu (type)</label>
                                            <textarea name="type" value={type} onChange={(e) => setType(e.target.value)} className="form-control"></textarea>

                                        </div>

                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="table_id">Table_id</label>
                                            <textarea name="table_id" value={table_id} onChange={(e) => setTableId(e.target.value)} className="form-control"></textarea>

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

export default MenuUpdate;