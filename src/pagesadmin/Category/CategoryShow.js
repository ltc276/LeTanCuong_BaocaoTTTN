
import { Link, useParams } from "react-router-dom";
import categoryservice from "../../service/CategorySevice";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";
import Moment from 'moment';



function CategoryShow() {
    const { id } = useParams("id");
    const [category, setCategorys] = useState([]);
    useEffect(
        function () {
            (async function () {
                await categoryservice.getById(id).then(function (result) {
                    setCategorys(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(category);
    return (
        <>
            <section className="section-content bg-white padding-y">
                <div className="container">
                    {/* ============================ ITEM DETAIL ======================== */}
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap">
                                        <div>
                                            {" "}
                                            <a href="#">
                                                <img src={urlImage + 'category/' + category.image} alt="hinh.png" />
                                            </a>
                                        </div>
                                    </div>{" "}
                                    {/* slider-product.// */}
                                    <div className="thumbs-wrap">
                                        <a href="#" className="item-thumb">
                                            {" "}
                                            <img src={urlImage + 'category/' + category.image} alt="hinh.png" />
                                        </a>
                                        <a href="#" className="item-thumb">
                                            {" "}
                                            <img src={urlImage + 'category/' + category.image} alt="hinh.png" />
                                        </a>
                                        <a href="#" className="item-thumb">
                                            {" "}
                                            <img src={urlImage + 'category/' + category.image} alt="hinh.png" />
                                        </a>
                                        <a href="#" className="item-thumb">
                                            {" "}
                                            <img src={urlImage + 'category/' + category.image} alt="hinh.png" />
                                        </a>
                                    </div>{" "}
                                    {/* slider-nav.// */}
                                </article>{" "}
                                {/* gallery-wrap .end// */}
                            </div>{" "}
                            {/* card.// */}
                        </aside>
                        <main className="col-md-6">
                            <article className="product-info-aside">
                                <h2 className="title mt-3">{category.name}</h2>
                                <div className="rating-wrap my-3">
                                    <ul className="rating-stars">
                                        <li style={{ width: "80%" }} className="stars-active">
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </li>
                                    </ul>
                                    <small className="label-rating text-muted">132 reviews</small>
                                    <small className="label-rating text-success">
                                        {" "}
                                        <i className="fa fa-clipboard-check" /> 154 orders{" "}
                                    </small>
                                </div>{" "}
                                {/* rating-wrap.// */}
                                {/* <div className="mb-3">
                                    <var className="price h4">239.000 VNĐ</var>
                                    <span className="text-muted">279.000 VNĐ incl. VAT</span>
                                </div>{" "}*/}  
                                {/* price-detail-wrap .// */}
                                <p>
                                {category.metakey}{" "}
                                </p>
                                <dl className="row">
                                    <dt className="col-sm-3">Nhà sản xuất:</dt>
                                    <dd className="col-sm-9">
                                        <a href="#">{category.metadesc}</a>
                                    </dd>
                                    <dt className="col-sm-3">Mã ID:</dt>
                                    <dd className="col-sm-9">{category.id}</dd>
                                    <dt className="col-sm-3">Bảo hành</dt>
                                    <dd className="col-sm-9">1 năm</dd>
                                    <dt className="col-sm-3">Thời gian tạo:</dt>
                                    <dd className="col-sm-9">{Moment(category.created_at).format('DD-MM-yyyy hh:mm')}</dd>
                                    <dt className="col-sm-3">Thời gian cập nhật:</dt>
                                    <dd className="col-sm-9">{Moment(category.updated_at).format('DD-MM-yyyy hh:mm')}</dd>
                                    
                                </dl>
                                <div className="form-row  mt-4">
                                    <div className="form-group col-md flex-grow-0">
                                        <div className="input-group mb-3 input-spinner">
                                            <div className="input-group-prepend">
                                                <button
                                                    className="btn btn-light"
                                                    type="button"
                                                    id="button-plus"
                                                >
                                                    {" "}
                                                    +{" "}
                                                </button>
                                            </div>
                                           <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={1}
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn btn-light"
                                                    type="button"
                                                    id="button-minus"
                                                >
                                                    {" "}
                                                    −{" "}
                                                </button>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* col.// */}
                                    <div className="form-group col-md">
                                        <Link to={category.link} className="btn  btn-primary" target="_blank">
                                            <i className="fas fa-home" />{" "}
                                            <span className="text">Trang Chủ</span>
                                        </Link>
                                        <a href="#" className="btn btn-light">
                                            <i className="fas fa-envelope" />{" "}
                                            <span className="text">Hỗ trợ</span>
                                        </a>
                                    </div>{" "}
                                    {/* col.// */}
                                </div>{" "}
                                {/* row.// */}
                            </article>{" "}
                            {/* product-info-aside .// */}
                        </main>{" "}
                        {/* col.// */}
                    </div>{" "}
                    {/* row.// */}
                    {/* ================ ITEM DETAIL END .// ================= */}
                </div>{" "}
                {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}
            {/* ========================= SECTION  ========================= */}
            <section className="section-name padding-y bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="title-description">Description</h5>
                            <p>
                                Lava stone grill, suitable for natural gas, with cast-iron cooking
                                grid, piezo ignition, stainless steel burners, water tank, and
                                thermocouple. Thermostatic adjustable per zone. Comes complete
                                with lava rocks. Adjustable legs. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <ul className="list-check">
                                <li>Material: Stainless steel</li>
                                <li>Weight: 82kg</li>
                                <li>built-in drip tray</li>
                                <li>Open base for pots and pans</li>
                                <li>On request available in propane execution</li>
                            </ul>
                            <h5 className="title-description">Specifications</h5>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        {" "}
                                        <th colSpan={2}>Basic specs</th>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Type of energy</td>
                                        <td>Lava stone</td>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Number of zones</td>
                                        <td>2</td>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Automatic connection </td>{" "}
                                        <td>
                                            {" "}
                                            <i className="fa fa-check text-success" /> Yes{" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        {" "}
                                        <th colSpan={2}>Dimensions</th>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Width</td>
                                        <td>500mm</td>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Depth</td>
                                        <td>400mm</td>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Height </td>
                                        <td>700mm</td>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <th colSpan={2}>Materials</th>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Exterior</td>
                                        <td>Stainless steel</td>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Interior</td>
                                        <td>Iron</td>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <th colSpan={2}>Connections</th>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Heating Type</td>
                                        <td>Gas</td>{" "}
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>Connected load gas</td>
                                        <td>15 Kw</td>{" "}
                                    </tr>
                                </tbody>
                            </table>
                        </div>{" "}
                        {/* col.// */}
                        <aside className="col-md-4">
                            <div className="box">
                                <h5 className="title-description">Files</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <h5 className="title-description">Videos</h5>
                                <article className="media mb-3">
                                    <a href="#">
                                        <img
                                            className="img-sm mr-3"
                                            src={require("../../assets/images/posts/3.jpg")}
                                        />
                                    </a>
                                    <div className="media-body">
                                        <h6 className="mt-0">
                                            <a href="#">How to use this item</a>
                                        </h6>
                                        <p className="mb-2">
                                            {" "}
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque ante sollicitudin{" "}
                                        </p>
                                    </div>
                                </article>
                                <article className="media mb-3">
                                    <a href="#">
                                        <img
                                            className="img-sm mr-3"
                                            src={require("../../assets/images/posts/2.jpg")}
                                        />
                                    </a>
                                    <div className="media-body">
                                        <h6 className="mt-0">
                                            <a href="#">New tips and tricks</a>
                                        </h6>
                                        <p className="mb-2">
                                            {" "}
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque ante sollicitudin{" "}
                                        </p>
                                    </div>
                                </article>
                                <article className="media mb-3">
                                    <a href="#">
                                        <img
                                            className="img-sm mr-3"
                                            src={require("../../assets/images/posts/1.jpg")}
                                        />
                                    </a>
                                    <div className="media-body">
                                        <h6 className="mt-0">
                                            <a href="#">New tips and tricks</a>
                                        </h6>
                                        <p className="mb-2">
                                            {" "}
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque ante sollicitudin{" "}
                                        </p>
                                    </div>
                                </article>
                            </div>{" "}
                            {/* box.// */}
                        </aside>{" "}
                        {/* col.// */}
                    </div>{" "}
                    {/* row.// */}
                </div>{" "}
                {/* container .//  */}
            </section>
        </>
    );
}

export default CategoryShow;
