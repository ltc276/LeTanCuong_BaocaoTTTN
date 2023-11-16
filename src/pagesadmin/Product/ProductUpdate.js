import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from "../../service/ProductSevice";
import { useEffect, useState } from "react";
import categoryservice from "../../service/CategorySevice"
import brandservice from "../../service/BrandSevice";

function CategoryUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [description, setDescription] = useState('');
    const [category_id, setCategory_id] = useState(0);
    const [price, setPrice] = useState(0);
    const [categorys, setCategorys] = useState([]);
    const [brands, setBrands] = useState([]);
    const [price_sale, setPrice_sale] = useState(0);
    const [detail, setDetail] = useState("");
    const [qty, setQty] = useState(0);
    const [brand_id, setBrand_id] = useState(0);
    const [status, setStatus] = useState(1);
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getAll().then(function (result) {
                setProducts(result.data.data);
            });
        })();
    }, []);
    const [product, setProduct] = useState([]);
    useEffect(
        function () {
            (async function () {
                await productservice.getById(id).then(function (result) {
                    setProduct(result.data.data);
                });
            })();
            setName(product.name);
            setMetakey(product.metakey);
            setMetadesc(product.metadesc);
            setCategory_id(product.category_id);
            setDescription(product.description);
            setPrice(product.price);
            setPrice_sale(product.price_sale);
            setDetail(product.detail);
            setQty(product.qty);
            setBrand_id(product.brand_id);
            setStatus(product.status);
        },
        [
            product.metadesc,
            product.metakey,
            product.name,
            product.category_id,
            product.price,
            product.description,
            product.price_sale,
            product.detail,
            product.qty,
            product.brand_id,
            product.status,
            id,
        ]
    );
    async function productStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("name", name);
        product.append("metakey", metakey);
        product.append("metadesc", metadesc);
        product.append("category_id", category_id);
        product.append("description", description);
        product.append("price", price);
        product.append("price_sale", price_sale);
        product.append("detail", detail);
        product.append("qty", qty);
        product.append("brand_id", brand_id);
        product.append("status", status);
        if (image.files.length === 0) {
            product.append("image", "");
        } else {
            product.append("image", image.files[0]);
        }

        await productservice.update(product, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/product", { replace: true });
        });
    }
    useEffect(
        function () {
            (async function () {
                await categoryservice.getAll().then(function (result) {
                    setCategorys(result.data.data);
                });
            })();
        },
        []
    );
    useEffect(
        function () {
            (async function () {
                await brandservice.getAll().then(function (result) {
                    setBrands(result.data.data);
                });
            })();
        },
        []
    );
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="container">
                    <form method="post" onSubmit={productStore}>
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong className="title1">THÊM DANH MỤC</strong>
                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <div className="button">
                                            <Link to="/admin/product" className="backward">
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
                                            <label htmlFor="price">Giá (Price)</label>
                                            <textarea name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="price_sale">Giá đã giảm (Price Sale)</label>
                                            <textarea name="price_sale" value={price_sale} onChange={(e) => setPrice_sale(e.target.value)} className="form-control"></textarea>

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
                                            <label htmlFor="image">Ảnh (Image)</label>
                                            <input type="file" id="image" name="image" className="form-control" />

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="description">Description(Miêu tả)</label>
                                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>
                                        </div>

                                        <div className="mb-3 ">
                                            <label htmlFor="parent_id">Nhà xuất bản</label>
                                            <select
                                                name="parent_id"
                                                className="form-control"
                                                value={brand_id}
                                                onChange={(e) => setBrand_id(e.target.value)}
                                            >
                                                {brands.map((item, index) => {
                                                    return <option key={index} value={item.id}>{item.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="mb-3 ">
                                            <label htmlFor="parent_id">Danh mục</label>
                                            <select
                                                name="parent_id"
                                                className="form-control"
                                                value={category_id}
                                                onChange={(e) => setCategory_id(e.target.value)}
                                            >
                                                {categorys.map((item, index) => {
                                                    return <option key={index} value={item.id}>{item.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="detail">Chi tiết (Detail)</label>
                                            <textarea name="detail" value={detail} onChange={(e) => setDetail(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="qty">Số lượng (Qty)</label>
                                            <textarea name="qty" value={qty} onChange={(e) => setQty(e.target.value)} className="form-control"></textarea>

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

export default CategoryUpdate;