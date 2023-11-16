import React from "react";
import categoryservice from "../../service/CategorySevice";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";
import { Link } from "react-router-dom";

function CategoryHome() {

  const [categorys, setCategorys] = useState([]);
  useEffect(function () {
      (async function () {
          await categoryservice.getCategoryHome(8)
              .then(function (result) {
                  setCategorys(result.data.categorys);
              }
              );
      })();
  }, []);

  return (
    <section className="padding-bottom">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">Tất cả các loại sách</h4>
      </header>
      <div className="card card-home-category">
        <div className="row no-gutters">
          <div className="col-md-3">
            <div className="home-category-banner bg-light-orange">
              <h5 className="title">Hot trending</h5>
              <p>
              Sách (chữ Hán: 冊) là một loạt các tờ giấy có chữ hoặc hình ảnh được viết tay hoặc in ấn, được buộc hoặc dán với nhau về cùng một phía. Mỗi mặt của một tờ trong các tờ này được gọi là một trang sách. 
              Nếu sách chỉ bao gồm thông tin ở dạng điện tử được xem trên một thiết bị có màn hình thì được gọi là sách điện tử hoặc e-book.{" "}
              </p>
              <a href="/tat-ca-loai" className="btn btn-outline-primary rounded-pill">
                Xem tất cả
              </a>
              {/*<img
              src={require("../../assets/images/items/1.jpg")}
              className="img-bg"
            />*/}
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-md-9">
            <ul className="row no-gutters bordered-cols">
              {categorys.map(function (category, index) {
                return (
                  <li className="col-6 col-lg-3 col-md-4">
                    <Link to={"/tat-ca-loai/" + category.id} className="item" target="_blank">
                      <div className="card-body">
                        <h6 className="title">
                        {category.name}
                        </h6>
                        <img
                          className="img-sm float-right"
                          src={urlImage + 'category/' + category.image}
                        />
                        <p className="text-muted">
                          <i className="fa fa-map-marker-alt" /> {category.metadesc}
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
  );
}
export default CategoryHome;
