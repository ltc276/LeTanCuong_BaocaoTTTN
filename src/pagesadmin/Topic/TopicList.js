import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import topicservice from "../../service/TopicSevice";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";

function TopicList() {
    const [topics, setTopics] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getAll()
                .then(function (result) {
                    setTopics(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function topicDelete($id) {
        topicservice.remove($id)
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
                        <strong className="text-primary">Topic</strong>

                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>
                    <div className="col-1 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/topic/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead style={{ backgroundColor: "#FF66CC", fontWeight: "bold" }}>
                                <tr>
                                    <th style={{ padding: 10, textAlign: "left" }}>Tên thương hiệu</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Slug</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày tạo</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chức năng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topics.map(function (topic, index) {
                                    return (
                                        <tr key={index}>

                                            <td>{topic.name}</td>
                                            <td>
                                                {topic.slug}
                                            </td>
                                            <td>
                                                {Moment(topic.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/topic/show/' + topic.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/topic/update/' + topic.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => topicDelete(topic.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>
                                                {topic.id}
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

export default TopicList;