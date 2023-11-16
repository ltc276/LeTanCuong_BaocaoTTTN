
import { Link, useParams } from "react-router-dom";
import userservice from "../../service/UserSevice";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";
import Moment from 'moment';



function UserShow() {
    const { id } = useParams("id");
    const [user, setUsers] = useState([]);
    useEffect(
        function () {
            (async function () {
                await userservice.getById(id).then(function (result) {
                    setUsers(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(user);
    return (
        <div className="container-fluid pb-5">
            <div className="col-lg-7 h-auto mb-30"></div>
            <div className="row px-xl-5">
                <div className="col-lg-5 mb-30">
                </div>
                <div className="col-lg-7 h-auto mb-30">
                    <div className="h-100 bg-light p-30">
                        <h3>Tên: {user.name}</h3>
                        <h3 className="font-weight-semi-bold mb-4">Tài khoản: {user.username}</h3>
                        <p className="mb-4">{Moment(user.created_at).format('DD-MM-yyyy hh:mm')}</p>
                        <div className="d-flex mb-3">
                            <strong className="text-dark mr-3">Metakey:</strong>
                            <p className="mb-4">{user.password}</p>
                        </div>
                        <div className="d-flex mb-4">
                            <strong className="text-dark mr-3">Metadesc:</strong>
                            <p className="mb-4">{user.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserShow;
