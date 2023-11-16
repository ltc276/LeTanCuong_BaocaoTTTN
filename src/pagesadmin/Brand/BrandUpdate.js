import { Link, useNavigate, useParams } from "react-router-dom";
import brandservice from "../../service/BrandSevice";
import Moment from 'moment';
import { useEffect, useState } from "react";

function BrandUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [description, setDescription] = useState("");
    const [sort_order, setSort_order] = useState(0);
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [brand, setCategory] = useState([]);
    useEffect(
        function () {
            (async function () {
                await brandservice.getById(id).then(function (result) {
                    setCategory(result.data.data);
                });
            })();
            setName(brand.name);
            setMetakey(brand.metakey);
            setDescription(brand.description);
            setMetadesc(brand.metadesc);
            setSort_order(brand.sort_order);
            setStatus(brand.status);
        },
        [
            brand.metadesc,
            brand.metakey,
            brand.name,
            brand.sort_order,
            brand.description,
            brand.status,
            id,
        ]
    );
    async function categoryStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name);
        brand.append("metakey", metakey);
        brand.append("description", description);
        brand.append("metadesc", metadesc);
        brand.append("sort_order", sort_order);
        brand.append("status", status);
        if (image.files.length === 0) {
            brand.append("image", "");
        } else {
            brand.append("image", image.files[0]);
        }

        await brandservice.update(brand, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/brand", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="container">
                    <form onSubmit={categoryStore} method="post">
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong className="title1">THÊM DANH MỤC</strong>
                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <div className="button">
                                            <Link to="/admin/brand" className="backward">
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
                                            <label htmlFor="description">Từ khoá (Metakey)</label>
                                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="metakey">Từ khoá (Metakey)</label>
                                            <textarea name="metakey" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="metadesc">Khoá tìm kiếm (Metadesc)</label>
                                            <textarea name="metadesc" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>

                                        </div>

                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="sort_order">Thứ tự sắp xếp</label>
                                            <select name="sort_order" className="form-control" value={sort_order} onChange={(e) => setSort_order(e.target.value)}>
                                                <option value="0">---Hãy chọn ---</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>

                                            </select>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="image">Ảnh (Image)</label>
                                            <input type="file" id="image" name="image" className="form-control" />

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

export default BrandUpdate;