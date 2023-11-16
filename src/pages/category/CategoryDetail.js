import React from "react";
import { useEffect, useState } from "react";
import productservice from "../../service/ProductSevice";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../config";
function CategoryDetail() {
    const [product, setProduct] = useState([]);
    const { id } = useParams("id");
    useEffect(function () {
        (async function () {
            await productservice.getProductByCategoryId(id)
                .then(function (result) {
                    setProduct(result.data.product);
                }
                );
        })();
    }, []);

    return (
        <>
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    {/* ============================  FILTER TOP  ================================= */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2"> Your are here: </div> {/* col.// */}
                                <nav className="col-md-8">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Category name</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Sub category</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Items
                                        </li>
                                    </ol>
                                </nav>{" "}
                                {/* col.// */}
                            </div>{" "}
                            {/* row.// */}
                            <hr />
                            <div className="row">
                                <div className="col-md-2">Filter by</div> {/* col.// */}
                                <div className="col-md-10">
                                    <ul className="list-inline">
                                        <li className="list-inline-item mr-3 dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                {" "}
                                                Supplier type{" "}
                                            </a>
                                            <div className="dropdown-menu p-3" style={{ maxWidth: 400 }}>
                                                <label className="form-check">
                                                    <input
                                                        type="radio"
                                                        name="myfilter"
                                                        className="form-check-input"
                                                    />{" "}
                                                    Good supplier
                                                </label>
                                                <label className="form-check">
                                                    <input
                                                        type="radio"
                                                        name="myfilter"
                                                        className="form-check-input"
                                                    />{" "}
                                                    Best supplier
                                                </label>
                                                <label className="form-check">
                                                    <input
                                                        type="radio"
                                                        name="myfilter"
                                                        className="form-check-input"
                                                    />{" "}
                                                    New supplier
                                                </label>
                                            </div>{" "}
                                            {/* dropdown-menu.// */}
                                        </li>
                                        <li className="list-inline-item mr-3 dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                {" "}
                                                Country{" "}
                                            </a>
                                            <div className="dropdown-menu p-3">
                                                <label className="form-check">
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                    />{" "}
                                                    China{" "}
                                                </label>
                                                <label className="form-check">
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                    />{" "}
                                                    Japan{" "}
                                                </label>
                                                <label className="form-check">
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                    />{" "}
                                                    Uzbekistan
                                                </label>
                                                <label className="form-check">
                                                    {" "}
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                    />{" "}
                                                    Russia{" "}
                                                </label>
                                            </div>{" "}
                                            {/* dropdown-menu.// */}
                                        </li>
                                        <li className="list-inline-item mr-3 dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                Feature
                                            </a>
                                            <div className="dropdown-menu">
                                                <a href="" className="dropdown-item">
                                                    Anti backterial
                                                </a>
                                                <a href="" className="dropdown-item">
                                                    With buttons
                                                </a>
                                                <a href="" className="dropdown-item">
                                                    Extra safety
                                                </a>
                                            </div>
                                        </li>
                                        <li className="list-inline-item mr-3">
                                            <a href="#">Color</a>
                                        </li>
                                        <li className="list-inline-item mr-3">
                                            <a href="#">Size</a>
                                        </li>
                                        <li className="list-inline-item mr-3">
                                            <div className="form-inline">
                                                <label className="mr-2">Price</label>
                                                <input
                                                    className="form-control form-control-sm"
                                                    placeholder="Min"
                                                    type="number"
                                                />
                                                <span className="px-2"> - </span>
                                                <input
                                                    className="form-control form-control-sm"
                                                    placeholder="Max"
                                                    type="number"
                                                />
                                                <button type="submit" className="btn btn-sm btn-light ml-2">
                                                    Ok
                                                </button>
                                            </div>
                                        </li>
                                        <li className="list-inline-item mr-3">
                                            <label className="custom-control mt-1 custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" />
                                                <div className="custom-control-label">Ready to ship</div>
                                            </label>
                                        </li>
                                    </ul>
                                </div>{" "}
                                {/* col.// */}
                            </div>{" "}
                            {/* row.// */}
                        </div>{" "}
                        {/* card-body .// */}
                    </div>{" "}
                    {/* card.// */}
                    {/* ============================ FILTER TOP END.// ================================= */}
                    <header className="mb-3">
                        <div className="form-inline">
                            <strong className="mr-md-auto">32 Items found </strong>
                            <select className="mr-2 form-control">
                                <option>Latest items</option>
                                <option>Trending</option>
                                <option>Most Popular</option>
                                <option>Cheapest</option>
                            </select>
                            <div className="btn-group">
                                {product.slice(0, 1).map((item, index) => {

                                    return (
                                        <>
                                            <Link
                                                to={"/tat-ca-loai/" + item.category_id}
                                                className="btn btn-light"
                                                data-toggle="tooltip"
                                                title="List view"
                                            >
                                                <i className="fa fa-bars" />
                                            </Link>
                                            <Link
                                                to={"/tat-ca-loai-2/" + item.category_id}
                                                className="btn btn-light"
                                                data-toggle="tooltip"
                                                title="Grid view"
                                            >
                                                <i className="fa fa-th" />
                                            </Link>
                                            <Link
                                                to={"/tat-ca-loai"}
                                                className="btn btn-light"
                                                data-toggle="tooltip"
                                                title="Home"
                                            >
                                                <i className="fa fa-home" />
                                            </Link>
                                        </>
                                    );
                                })}

                            </div>
                        </div>
                    </header>
                    {/* sect-heading */}
                    <div className="row">
                        {product.map((item, index) => {

                            return (
                                <div className="col-md-3">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <span className="badge badge-danger"> NEW </span>
                                            <img
                                                src={urlImage + 'product/' + item.image}
                                            />
                                        </div>{" "}
                                        {/* img-wrap.// */}
                                        <figcaption className="info-wrap">
                                            <Link to={"/chi-tiet-san-pham/" + item.slug + "/" + item.category_id} className="title mb-2">
                                                {item.name}
                                            </Link>
                                            <div className="price-wrap">
                                                <span className="price">{item.price}.000 Đồng</span>
                                                <small className="text-muted">/1 sản phẩm</small>
                                            </div>{" "}
                                            {/* price-wrap.// */}
                                            <p className="mb-2">
                                                {" "}
                                                2 Pieces <small className="text-muted">(Min Order)</small>
                                            </p>
                                            <p className="text-muted ">Guangzhou Yichuang Electronic Co</p>
                                            <hr />
                                            <p className="mb-3">
                                                <span className="tag">
                                                    {" "}
                                                    <i className="fa fa-check" /> Verified
                                                </span>
                                                <span className="tag"> 2 Years </span>
                                                <span className="tag"> 23 reviews </span>
                                                <span className="tag"> Japan </span>
                                            </p>
                                            <label className="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" />
                                                <div className="custom-control-label">Add to compare</div>
                                            </label>
                                            <a href="#" className="btn btn-outline-primary">
                                                {" "}
                                                <i className="fa fa-envelope" /> Contact supplier{" "}
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>);
                        })}
                    </div>{" "}
                    {/* row end.// */}
                    <nav className="mb-4" aria-label="Page navigation sample">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#">
                                    Previous
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="box text-center">
                        <p>Did you find what you were looking for？</p>
                        <a href="" className="btn btn-light">
                            Yes
                        </a>
                        <a href="" className="btn btn-light">
                            No
                        </a>
                    </div>
                </div>{" "}
                {/* container .//  */}
            </section>
        </>
    );
}

export default CategoryDetail;