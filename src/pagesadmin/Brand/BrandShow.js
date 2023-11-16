
import { Link, useParams } from "react-router-dom";
import brandservice from "../../service/BrandSevice";
import Moment from 'moment';
import { useEffect, useState } from "react";
import { urlImage } from "../../config";



function BrandShow() {
    const { id } = useParams("id");
    const [brand, setBrands] = useState([]);
    useEffect(
        function () {
            (async function () {
                await brandservice.getById(id).then(function (result) {
                    setBrands(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(brand);
    return (
        <div className="container-fluid pb-5">
        <div className="col-lg-7 h-auto mb-30"></div>
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide">
                    <div className="carousel-inner bg-light">
                        <div className="carousel-item active">
                            <img className="w-100 h-100" src={urlImage + 'brand/' + brand.image} alt="hinh.png" width="50px" height="50px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>Tên: {brand.name}</h3>
                    <h3 className="font-weight-semi-bold mb-4">Status: {brand.status}</h3>
                    <p className="mb-4">{Moment(brand.created_at).format('DD-MM-yyyy hh:mm')}</p>
                    <div className="d-flex mb-3">
                        <strong className="text-dark mr-3">Metakey:</strong>
                        <p className="mb-4">{brand.metakey}</p>
                    </div>
                    <div className="d-flex mb-4">
                        <strong className="text-dark mr-3">Metadesc:</strong>
                        <p className="mb-4">{brand.metadesc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BrandShow;
