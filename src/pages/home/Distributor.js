import React from "react";
import brandservice from "../../service/BrandSevice";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";
function Distributor() {
  const [brands, setBrands] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.Limit(4)
        .then(function (result) {
          setBrands(result.data.brands);
        }
        );
    })();
  }, []);
  return (
    <section className="padding-bottom">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">Nhà phân phối</h4>
      </header>
      <div className="row">
        {brands.map(function (item, index) {
          return (
            <div className="col-md-3 col-sm-6">
              <article className="card card-post">
                <img
                  src={urlImage + 'brand/' + item.image}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h6 className="title">{item.name}</h6>
                  <p className="small text-uppercase text-muted">{item.description}</p>
                </div>

              </article>

            </div>
          )
        })}
      </div>
    </section>
  );
}
export default Distributor;
