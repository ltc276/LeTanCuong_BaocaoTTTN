import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservice from "../../service/ProductSevice";
import { urlImage } from "../../config";
function Items() {

  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState([12]);
  useEffect(function () {
    (async function () {
      await productservice.getProductAll(limit, 1)
        .then(function (result) {
          setProducts(result.data.products);
        }
        );
    })();
  }, [limit]);

  return (
    <section className="padding-bottom-sm">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">Sản phẩm</h4>
      </header>
      <div className="row row-sm">
        {products.map(function (product, index) {
          return (
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="card card-sm card-product-grid">
                <Link to={"/chi-tiet-san-pham/" + product.slug} className="img-wrap">
                  {" "}
                  <img src={urlImage + 'product/' + product.image} />{" "}
                </Link>
                <figcaption className="info-wrap">
                  <Link to={"/chi-tiet-san-pham/" + product.slug} className="title">
                    {product.name}
                  </Link>
                  <div className="price mt-1" style={{ display: 'inline-block' }}>Giá gốc: </div>
                  <div style={{ textDecoration: "line-through", display: 'inline-block' }} className="price mt-1" > {product.price}.000 VNĐ</div> {/* price-wrap.// */}
                  <div className="price mt-1">Giá: {product.price_sale}.000 VNĐ</div> {/* price-wrap.// */}
                </figcaption>
              </div>
            </div>
          )
        }
        )}

        {/* col.// */}
      </div>{" "}
      {/* row.// */}
      <div className="col-12">
        <nav>
          <ul className="pagination justify-content-center">
            <button className="btn btn-sm btn-danger" onClick={() => setLimit(limit + 8)}>Xem thêm</button>
          </ul>
        </nav>
      </div>
    </section>

  );
}
export default Items;
