import React from "react";
import { useEffect, useState } from "react";
import productservice from "../../service/ProductSevice";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../config";
import brandservice from "../../service/BrandSevice";
function Lightnovel() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getProductByCategoryIdAndLimit(11,8,1)
        .then(function (result) {
          setProducts(result.data.products);
        }
        );
    })();
  }, []);
  return (
    <section className="padding-bottom">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">Light Novel</h4>
      </header>
      <div className="card card-home-category">
        <div className="row no-gutters">
          <div className="col-md-3">
            <div className="home-category-banner bg-light-orange">
              <h5 className="title">Light novel</h5>
              <p>
                Hay còn được gọi là tiểu thuyết ngắn, là một dòng tiểu thuyết có nguồn gốc từ Nhật Bản.
                "Light" trong "light novel" nghĩa là ngắn, nhẹ về số lượng từ ngữ.{" "}
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

                      </div>
                    </Link>
                  </li>
                )
              }
              )}

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Lightnovel;

