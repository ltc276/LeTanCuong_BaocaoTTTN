import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import userservice from "../../service/UserSevice";
import { useEffect, useState } from "react";
import Moment from 'moment';

function UserList() {
    const [users, setUsers] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await userservice.getAll()
                .then(function (result) {
                    setUsers(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function userDelete($id) {
        userservice.remove($id)
            .then(function (res) {
                console.log(res.data.data);
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <strong className="text-primary">Thương hiệu</strong>

                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>
                    <div className="col-1 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/user/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                        <thead style={{ backgroundColor: "#FF66CC", fontWeight: "bold" }}>
                                <tr>
                                    <th style={{ padding: 10, textAlign: "left" }}>Tên</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>User</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Password</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Roles</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày tạo</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chức năng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(function (user, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>
                                                {user.username}
                                            </td>
                                            <td>
                                                {user.password}
                                            </td>
                                            <td>
                                                {user.roles}
                                            </td>
                                            <td>
                                                {Moment(user.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/user/show/' + user.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/user/update/' + user.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => userDelete(user.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>
                                                {user.id}
                                            </td>
                                        </tr>

                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default UserList;