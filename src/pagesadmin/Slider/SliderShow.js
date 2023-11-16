
import { Link, useParams } from "react-router-dom";
import sliderservice from "../../service/SliderService";
import Moment from 'moment';
import { useEffect, useState } from "react";
import { urlImage } from "../../config";



function SliderShow() {
    const { id } = useParams("id");
    const [slider, setSliders] = useState([]);
    useEffect(
        function () {
            (async function () {
                await sliderservice.getById(id).then(function (result) {
                    setSliders(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(slider);
    return (
        <div className="container-fluid pb-5">
        <div className="col-lg-7 h-auto mb-30"></div>
        <div className="row px-xl-5">
            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>Tên: {slider.name}</h3>
                    <h3 className="font-weight-semi-bold mb-4">Link: {slider.link}</h3>
                    <p className="mb-4">{Moment(slider.created_at).format('DD-MM-yyyy hh:mm')}</p>
                    <div className="d-flex mb-3">
                        <strong className="text-dark mr-3">Kiểu:</strong>
                        <p className="mb-4">{slider.type}</p>
                    </div>
                    <div className="d-flex mb-4">
                        <strong className="text-dark mr-3">Status:</strong>
                        <p className="mb-4">{slider.status}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SliderShow;
