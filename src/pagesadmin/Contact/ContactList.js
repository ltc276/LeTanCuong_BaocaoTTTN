import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import contactservice from "../../service/ContactSevice";
import { useEffect, useState } from "react";
import Moment from 'moment';

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll()
                .then(function (result) {
                    setContacts(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function contactDelete($id) {
        contactservice.remove($id)
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
                        <strong className="text-primary">Liên hệ</strong>

                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>
                    <div className="col-1 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/contact/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead style={{ backgroundColor: "#FF66CC", fontWeight: "bold" }}>
                                <tr>
                                    <th style={{ padding: 10, textAlign: "left" }}>Tên khách hàng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Số điện thoại</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Email</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Tiêu đề</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Phản hồi</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày tạo</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chức năng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(function (contact, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{contact.name}</td>
                                            <td>
                                                {contact.phone}
                                            </td>
                                            <td>
                                                {contact.email}
                                            </td>
                                            <td>
                                                {contact.title}
                                            </td>
                                            <td>
                                                {contact.content}
                                            </td>
                                            <td>
                                                {Moment(contact.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/contact/show/' + contact.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/contact/update/' + contact.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => contactDelete(contact.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>
                                                {contact.id}
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

export default ContactList;