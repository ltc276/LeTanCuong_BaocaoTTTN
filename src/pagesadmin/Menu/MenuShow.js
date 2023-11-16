
import { Link, useParams } from "react-router-dom";
import menuservice from "../../service/MenuSevice";
import Moment from 'moment';
import { useEffect, useState } from "react";
import { urlImage } from "../../config";



function MenuShow() {
    const { id } = useParams("id");
    const [menu, setMenus] = useState([]);
    useEffect(
        function () {
            (async function () {
                await menuservice.getById(id).then(function (result) {
                    setMenus(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(menu);
    return (
        <div className="container-fluid pb-5">
        <div className="col-lg-7 h-auto mb-30"></div>
        <div className="row px-xl-5">
            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>Tên: {menu.name}</h3>
                    <h3 className="font-weight-semi-bold mb-4">Link: {menu.link}</h3>
                    <p className="mb-4">{Moment(menu.created_at).format('DD-MM-yyyy hh:mm')}</p>
                    <div className="d-flex mb-3">
                        <strong className="text-dark mr-3">Kiểu:</strong>
                        <p className="mb-4">{menu.type}</p>
                    </div>
                    <div className="d-flex mb-4">
                        <strong className="text-dark mr-3">Status:</strong>
                        <p className="mb-4">{menu.status}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MenuShow;
