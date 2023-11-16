import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import productservice from "../../service/ProductSevice"
import categoryservice from "../../service/CategorySevice"
import brandservice from "../../service/BrandSevice";
function ProductCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [detail, setDetail] = useState('');
    const [description, setDescription] = useState('');
    const [categorys, setCategorys] = useState([]);
    const [brands, setBrands] = useState([]);
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [price_sale, setPrice_sale] = useState(0);
    const [brand_id, setBrandtId] = useState(0);
    const [category_id, setCategorytId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    async function productStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("name", name);
        product.append("price", price);
        product.append("qty", qty);
        product.append("description", description);
        product.append("price_sale", price_sale);
        product.append("metakey", metakey);
        product.append("metadesc", metadesc);
        product.append("detail", detail);
        product.append("brand_id", brand_id);
        product.append("category_id", category_id);
        product.append("sort_order", sort_order);
        product.append("status", status);
        product.append("image", image.files[0]);
        await productservice.create(product).then(function (res) {
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
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-12 col-md-4 ">
                    <form onSubmit={productStore} method="post">
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
                                        <Link to="/admin/product" className="btn-btn-sm btn-succress btn-light">
                                            Về danh sách
                                        </Link>
                                    </div>

                                </div>

                            </div>
                            <div className="card-body">
                                <div className="row" >
                                    <div className="col-md-9">
                                        <div className="mb-3">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name">Price</label>
                                            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name">Price_sale</label>
                                            <input type="text" name="price_sale" value={price_sale} onChange={(e) => setPrice_sale(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name">Qty</label>
                                            <input type="text" name="qty" value={qty} onChange={(e) => setQty(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name">Detail</label>
                                            <input type="text" name="detail" value={detail} onChange={(e) => setDetail(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="metakey">Metakey</label>
                                            <textarea name="metakey" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="metadesc">Metadesc</label>
                                            <textarea name="metadesc" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description">Description</label>
                                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>

                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="col-md-12">
                                            <div className="mb-3 ">
                                                <label htmlFor="parent_id">Nhà xuất bản</label>
                                                <select
                                                    name="parent_id"
                                                    className="form-control"
                                                    value={brand_id}
                                                    onChange={(e) => setBrandtId(e.target.value)}
                                                    
                                                >
                                                    <option>-- Chọn nhà xuất bản --</option>
                                                    {brands.map((item, index) => {
                                                                return(
                                                        <option key={index} value={item.id}>{item.name}</option>) 
                                                    })}
                                                </select>
                                            </div>
                                            <div className="mb-3 ">
                                                <label htmlFor="parent_id">Danh mục</label>
                                                <select
                                                    name="parent_id"
                                                    className="form-control"
                                                    value={category_id}
                                                    onChange={(e) => setCategorytId(e.target.value)}
                                                >
                                                    <option>-- Chọn danh mục --</option>
                                                    {categorys.map((item, index) => {
                                                        return <option key={index} value={item.id}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="image">Image</label>
                                                <input type="file" id="image" name="image" className="form-control" />

                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="status">Status</label>
                                                <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                                    <option value="1">Xuất bản 1</option>
                                                    <option value="2">Không xuất bản 2</option>

                                                </select>

                                            </div>
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

export default ProductCreate;