import React from "react";
import productsaleservice from "../../service/ProductsaleSevice";
import { useEffect, useState } from "react";
function Deal() {
  const [productsales, setProductsales] = useState([]);
  useEffect(function () {
    (async function () {
      await productsaleservice.getAll()
        .then(function (result) {
          setProductsales(result.data.data);
        }
        );
    })();
  }, []);
  return (
    <section className="padding-bottom">
      <div className="card card-deal">
        <div className="col-heading content-body">
          <header className="section-heading">
            <h3 className="section-title">Deals and offers</h3>
            <p>Hygiene equipments</p>
          </header>
          {/* sect-heading */}
          <div className="timer">
            <div>
              {" "}
              <span className="num">04</span> <small>Days</small>
            </div>
            <div>
              {" "}
              <span className="num">12</span> <small>Hours</small>
            </div>
            <div>
              {" "}
              <span className="num">58</span> <small>Min</small>
            </div>
            <div>
              {" "}
              <span className="num">02</span> <small>Sec</small>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        {productsales.map(function (item, index) {
          return (
            <div className="row no-gutters items-wrap">

              <div className="col-md col-6">
              {/*

                <figure className="card-product-grid card-sm">
                  <a href="/product-detail/1" className="img-wrap">
                    <img src={require("../../assets/images/items/7.jpg")} />
                  </a>
                  <div className="text-wrap p-3">
                    <a href="/product-detail/1" className="title text-truncate">
                    {item.product_id}
                    </a>
                    <span className="badge badge-danger"> -10% </span>
                  </div>
                </figure>
                */}

              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
export default Deal;
