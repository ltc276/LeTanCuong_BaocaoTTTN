import React from "react";
import { useEffect, useState } from "react";
import productservice from "../../service/ProductSevice";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../config";
function Mangak() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getProductByCategoryIdAndLimit(10,8,1)
        .then(function (result) {
          setProducts(result.data.products);
        }
        );
    })();
  }, []);
  return (
    <section className="padding-bottom">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">Mangak</h4>
      </header>
      <div className="card card-home-category">
        <div className="row no-gutters">
          <div className="col-md-3">
            <div className="home-category-banner bg-light-orange">
              <h5 className="title">Mangak</h5>
              <p>
              là một cụm từ trong tiếng Nhật để chỉ các loại truyện tranh và tranh biếm họa. 
              Manga được xem là từ đặc biệt để chỉ riêng truyện tranh xuất phát từ Nhật Bản.{" "}
              </p>
              <a href="/product-detail/1" className="btn btn-outline-primary rounded-pill">
                Xem Ngay
              </a>
              {/*<img
              src={require("../../assets/images/items/14.jpg")}
              className="img-bg"
            />*/}
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-md-9">
            <ul className="row no-gutters bordered-cols">
              {products.map(function (product, index) {
                return (

                  <li className="col-6 col-lg-3 col-md-4">
                    <Link to={"/chi-tiet-san-pham/" + product.slug+"/"+product.category_id} className="item">
                      <div className="card-body">

                        <h6 className="title">
                          {product.name}
                        </h6>
                        <img
                          className="img-sm float-right"
                          src={urlImage + 'product/' + product.image}
                        />
                        <p className="text-muted">

                          <i className="fa fa-map-marker-alt" >{product.metakey}</i>

                        </p>

                      </div>
                    </Link>
                  </li>
                )
              }
              )}

            </ul>
          </div>{" "}
          {/* col.// */}
        </div>{" "}
        {/* row.// */}
      </div>{" "}
      {/* card.// */}
    </section>
  )
}
export default Mangak;

