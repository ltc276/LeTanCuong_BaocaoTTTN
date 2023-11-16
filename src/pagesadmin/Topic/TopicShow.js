
import { Link, useParams } from "react-router-dom";
import topicservice from "../../service/TopicSevice";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Moment from 'moment';



function TopicShow() {
    const { id } = useParams("id");
    const [topic, setTopics] = useState([]);
    useEffect(
        function () {
            (async function () {
                await topicservice.getById(id).then(function (result) {
                    setTopics(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(topic);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-12">
                        <strong className="text-primary">Đề tài</strong>
                        <p><small> Bạn đang ở trang show á</small> </p>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Tên đề tài</th>
                                    <th>Slug</th>
                                    <th>Ngày tạo</th>
                                    <th>Chức năng</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>{topic.name}</td>
                                    <td>
                                        {topic.slug}
                                    </td>
                                    <td>
                                        {Moment(topic.created_at).format('DD-MM-yyyy hh:mm')}
                                    </td>

                                    <td>
                                        <Link className="btn btn-sm btn-info me-2" to="/admin/topic/show/1"><FaRegEye /></Link>
                                        <Link className="btn btn-sm btn-info me-2" to="/admin/topic/update/1"><FaEdit /></Link>
                                        <Link className="btn btn-sm btn-danger"><FaTrashAlt /></Link>
                                    </td>
                                    <td>
                                        {topic.id}
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default TopicShow;
