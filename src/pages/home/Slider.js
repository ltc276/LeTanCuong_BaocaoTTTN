import React from "react";
import { useEffect, useState } from "react";
import sliderservice from "../../service/SliderService";
import { urlImage } from "../../config";
function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(function () {
    (async function () {
      await sliderservice.getAll()
        .then(function (result) {
          setSlider(result.data);
        }
        );
    })();
  }, []);
  return (
    <section className="section-main padding-y">
      <main className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
              <div
                id="carousel1_indicator"
                className="slider-home-banner carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="/product-detail/1carousel1_indicator"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="/product-detail/1carousel1_indicator" data-slide-to={1} />
                  <li data-target="/product-detail/1carousel1_indicator" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={require("../../assets/images/banners/slide1.jpg")}
                      alt="First slide"
                    />
                  </div>
                  {slider.map(function (item, index) {
                    return (

                      <div className="carousel-item">

                        <img
                          src={urlImage + 'slider/' + item.image}
                          alt="Second slide"
                        />

                      </div>
                    )
                  })}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carousel1_indicator"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel1_indicator"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
            </div>
            {/* col.// */}
            <div className="col-md d-none d-lg-block flex-grow-1">
              {/*<aside className="special-home-right">
              <h6 className="bg-blue text-center text-white mb-0 p-2">
                Popular category
              </h6>
              <div className="card-banner border-bottom">
                <div className="py-3" style={{ width: "80%" }}>
                  <h6 className="card-title">Men clothing</h6>
                  <a href="/product-detail/1" className="btn btn-secondary btn-sm">
                    Source now
                  </a>
                </div>
                <img
                  src={require("../../assets/images/items/1.jpg")}
                  height={80}
                  className="img-bg"
                  alt=""
                />
              </div>
              <div className="card-banner border-bottom">
                <div className="py-3" style={{ width: "80%" }}>
                  <h6 className="card-title">Winter clothing </h6>
                  <a href="/product-detail/1" className="btn btn-secondary btn-sm">
                    Source now
                  </a>
                </div>
                <img
                  src={require("../../assets/images/items/2.jpg")}
                  height={80}
                  className="img-bg"
                  alt=""
                />
              </div>
              <div className="card-banner border-bottom">
                <div className="py-3" style={{ width: "80%" }}>
                  <h6 className="card-title">Home inventory</h6>
                  <a href="/product-detail/1" className="btn btn-secondary btn-sm">
                    Source now
                  </a>
                </div>
                <img
                  src={require("../../assets/images/items/6.jpg")}
                  height={80}
                  className="img-bg"
                  alt=""
                />
              </div>
            </aside>*/}
            </div>
            {/* col.// */}
          </div>
          {/* row.// */}
        </div>
        {/* card-body.// */}
      </main>
      {/* card.// */}
    </section>
  );
}
export default Slider;
