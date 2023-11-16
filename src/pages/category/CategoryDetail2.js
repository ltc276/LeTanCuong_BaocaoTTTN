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
                            <ol className="breadcrumb float-left">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Category name</a>
                                </li>
                                <li className="breadcrumb-item active">Item details</li>
                            </ol>
                        </div>{" "}
                        {/* card-body .// */}
                    </div>{" "}
                    {/* card.// */}
                    {/* ============================ FILTER TOP END.// ================================= */}
                    <div className="row">
                        <aside className="col-md-2">
                            <article className="filter-group">
                                <h6 className="title">
                                    <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-toggle="collapse"
                                        data-target="#collapse_1"
                                    >
                                        {" "}
                                        Product type{" "}
                                    </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_1">
                                    <div className="inner">
                                        <ul className="list-menu">
                                            <li>
                                                <a href="#">Shorts</a>
                                            </li>
                                            <li>
                                                <a href="#">Trousers </a>
                                            </li>
                                            <li>
                                                <a href="#">Sweaters</a>
                                            </li>
                                            <li>
                                                <a href="#">Clothes</a>
                                            </li>
                                            <li>
                                                <a href="#">Home items </a>
                                            </li>
                                            <li>
                                                <a href="#">Jackats</a>
                                            </li>
                                            <li>
                                                <a href="#">Somethings </a>
                                            </li>
                                        </ul>
                                    </div>{" "}
                                    {/* inner.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group  .// */}
                            <article className="filter-group">
                                <h6 className="title">
                                    <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-toggle="collapse"
                                        data-target="#collapse_2"
                                    >
                                        {" "}
                                        Brands{" "}
                                    </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_2">
                                    <div className="inner">
                                        <label className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">
                                                Mangak
                                                <b className="badge badge-pill badge-light float-right">
                                                    120
                                                </b>
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">
                                                Lightnovel
                                                <b className="badge badge-pill badge-light float-right">
                                                    15
                                                </b>
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">
                                                Sách lịch sử
                                                <b className="badge badge-pill badge-light float-right">
                                                    35
                                                </b>{" "}
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">
                                                Sách văn học
                                                <b className="badge badge-pill badge-light float-right">
                                                    89
                                                </b>{" "}
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <div className="custom-control-label">
                                                Sách kinh dị
                                                <b className="badge badge-pill badge-light float-right">
                                                    30
                                                </b>
                                            </div>
                                        </label>
                                    </div>{" "}
                                    {/* inner.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group .// */}
                            <article className="filter-group">
                                <h6 className="title">
                                    <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-toggle="collapse"
                                        data-target="#collapse_3"
                                    >
                                        {" "}
                                        Price range{" "}
                                    </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_3">
                                    <div className="inner">
                                        <input
                                            type="range"
                                            className="custom-range"
                                            min={0}
                                            max={100}
                                            name=""
                                        />
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Min</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="$0"
                                                    type="number"
                                                />
                                            </div>
                                            <div className="form-group text-right col-md-6">
                                                <label>Max</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="$1,0000"
                                                    type="number"
                                                />
                                            </div>
                                        </div>{" "}
                                        {/* form-row.// */}
                                        <button className="btn btn-block btn-primary">Apply</button>
                                    </div>{" "}
                                    {/* inner.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group .// */}
                            <article className="filter-group">
                                <h6 className="title">
                                    <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-toggle="collapse"
                                        data-target="#collapse_4"
                                    >
                                        {" "}
                                        Kích thước{" "}
                                    </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_4">
                                    <div className="inner">
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> Chuẩn </span>
                                        </label>
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> Bìa cứng </span>
                                        </label>
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> Bìa mềm </span>
                                        </label>
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> Ngang,cao </span>
                                        </label>
                                    </div>{" "}
                                    {/* inner.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group .// */}
                            <article className="filter-group">
                                <h6 className="title">
                                    <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-toggle="collapse"
                                        data-target="#collapse_5"
                                    >
                                        {" "}
                                        Condition{" "}
                                    </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_5">
                                    <div className="inner">
                                        <label className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                name="myfilter_radio"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">Any condition</div>
                                        </label>
                                        <label className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                name="myfilter_radio"
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">Brand new </div>
                                        </label>
                                        <label className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                name="myfilter_radio"
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">Used items</div>
                                        </label>
                                        <label className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                name="myfilter_radio"
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">Very old</div>
                                        </label>
                                    </div>{" "}
                                    {/* inner.// */}
                                </div>
                            </article>{" "}
                            {/* filter-group .// */}
                        </aside>{" "}
                        {/* col.// */}
                        <main className="col-md-10">
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
                            {product.map((item, index) => {

                                return (

                                    <article className="card card-product-list">
                                        <div className="row no-gutters">
                                            <aside className="col-md-3">
                                                <Link to={"/chi-tiet-san-pham/" + item.slug + "/" + item.category_id} className="img-wrap">
                                                    <img
                                                        src={urlImage + 'product/' + item.image}
                                                    />
                                                </Link>
                                            </aside>{" "}
                                            {/* col.// */}
                                            <div className="col-md-6">
                                                <div className="info-main">
                                                    <Link to={"/chi-tiet-san-pham/" + item.slug + "/" + item.category_id} className="h5 title">
                                                        {" "}
                                                        {item.name}
                                                    </Link>
                                                    <div className="rating-wrap mb-2">
                                                        <ul className="rating-stars">
                                                            <li style={{ width: "80%" }} className="stars-active">
                                                                <i className="fa fa-star" />{" "}
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />{" "}
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-star" />{" "}
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />{" "}
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </li>
                                                        </ul>
                                                        <div className="label-rating">7/10</div>
                                                    </div>{" "}
                                                    {/* rating-wrap.// */}
                                                    <p className="mb-3">
                                                        <span className="tag">
                                                            {" "}
                                                            <i className="fa fa-check" /> Verified
                                                        </span>
                                                        <span className="tag"> 4 Years </span>
                                                        <span className="tag"> 60 reviews </span>
                                                        <span className="tag"> China </span>
                                                    </p>
                                                    <p>
                                                        {" "}
                                                        Take it as demo specs, ipsum dolor sit amet, consectetuer
                                                        adipiscing elit, Lorem ipsum dolor sit amet, consectetuer
                                                        adipiscing elit, Ut wisi enim ad minim sint occaecat
                                                        cupidatat non proident, sunt in culpa qui laborum....{" "}
                                                    </p>
                                                </div>{" "}
                                                {/* info-main.// */}
                                            </div>{" "}
                                            {/* col.// */}
                                            <aside className="col-sm-3">
                                                <div className="info-aside">
                                                    <div className="price-wrap">
                                                        <span className="h5 price">{item.price}.000 Đồng</span>
                                                        <small className="text-muted">/1 cuốn</small>
                                                    </div>{" "}
                                                    {/* price-wrap.// */}
                                                    <small className="text-success">Giao hàng miễn phí</small>
                                                    <p className="text-muted mt-3">{item.metakey}</p>
                                                    <p className="mt-3">
                                                        <a href="#" className="btn btn-outline-primary">
                                                            {" "}
                                                            <i className="fa fa-envelope" /> Liên hệ{" "}
                                                        </a>
                                                        <a href="#" className="btn btn-light">
                                                            <i className="fa fa-heart" /> Lưu{" "}
                                                        </a>
                                                    </p>
                                                    <label className="custom-control mt-3 custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <div className="custom-control-label">Add to compare</div>
                                                    </label>
                                                </div>{" "}
                                                {/* info-aside.// */}
                                            </aside>{" "}
                                            {/* col.// */}
                                        </div>{" "}
                                        {/* row.// */}
                                    </article>
                                );
                            })}
                            {/* card-product .// */}
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
                        </main>{" "}
                        {/* col.// */}
                    </div>
                </div>{" "}
                {/* container .//  */}
            </section>
        </>
    );
}

export default CategoryDetail;