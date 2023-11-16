import React from "react";
import { useEffect, useState } from "react";
import productservice from "../../service/ProductSevice";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../config";
{/*ProductDetail 2 sẽ không có sản phẩm liên quan đâu nha :) */}
function ProductDetail2() {
  const [product, setProduct] = useState([]);
  const {slug} = useParams();
  useEffect(function () {
      (async function () {
          await productservice.getProductBySlug(slug)
              .then(function (result) {
                  if(result.data.success===true)
                  {
                  setProduct(result.data.product);
              }
              }
              );
      })();
  }, [slug]);
  return (
    <>
      <section className="py-3 bg-light">
        <div className="container">
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
        </div>
      </section>
      {/* ========================= SECTION CONTENT ========================= */}
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
                        <img src={urlImage + 'product/' + product.image} />
                      </a>
                    </div>
                  </div>{" "}
                  {/* slider-product.// */}
                  <div className="thumbs-wrap">
                    <a href="#" className="item-thumb">
                      {" "}
                      <img src={require("../../assets/images/items/15.jpg")} />
                    </a>
                    <a href="#" className="item-thumb">
                      {" "}
                      <img src={require("../../assets/images/items/15-1.jpg")} />
                    </a>
                    <a href="#" className="item-thumb">
                      {" "}
                      <img src={require("../../assets/images/items/15-2.jpg")} />
                    </a>
                    <a href="#" className="item-thumb">
                      {" "}
                      <img src={require("../../assets/images/items/15-3.jpg")} />
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
                <h2 className="title mt-3">{product.name} </h2>
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
                <div className="mb-3">
                  <var className="price h4">{product.price_sale}.000 VNĐ</var>
                  <span style={{ textDecoration: "line-through" }} className="text-muted"> {product.price} .000 VNĐ</span>
                </div>{" "}
                {/* price-detail-wrap .// */}
                <p>
                {product.description}
                </p>
                <dl className="row">
                  <dt className="col-sm-3">Tác giả</dt>
                  <dd className="col-sm-9">
                    <a href="#">{product.metakey}</a>
                  </dd>
                  <dt className="col-sm-3">Mã vạch</dt>
                  <dd className="col-sm-9">{product.detail}</dd>
                  <dt className="col-sm-3">Bảo hành</dt>
                  <dd className="col-sm-9">1 năm</dd>
                  <dt className="col-sm-3">Giao hàng</dt>
                  <dd className="col-sm-9">24 giờ</dd>
                  <dt className="col-sm-3">Nhà xuất bản</dt>
                  <dd className="col-sm-9">{product.metadesc}</dd>
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
                    <a href="#" className="btn  btn-primary">
                      <i className="fas fa-shopping-cart" />{" "}
                      <span className="text">Thêm vào giỏ</span>
                    </a>
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
              {/*--------------------------------------------------------------------------------------------------------------*/}
              {/*--------------------------------------------------------------------------------------------------------------*/}
            </div>{" "}
            {/* col.// */}
            <aside className="col-md-4">
            <h5 className="title-description">Nhà xuất bản</h5>
              <div className="box">
                
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
export default ProductDetail2;