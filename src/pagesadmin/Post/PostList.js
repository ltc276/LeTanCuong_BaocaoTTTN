import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import postservice from "../../service/PostService";
import { useEffect,useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getAll()
                .then(function (result) {
                    setPosts(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function postDelete($id) {
        postservice.remove($id)
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
                        <strong className="text-primary">Post</strong>

                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>
                    <div className="col-1 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/post/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                        <thead style={{ backgroundColor: "#FF66CC", fontWeight: "bold" }}>
                                <tr>
                                    <th style={{ padding: 10, textAlign: "left" }}>Tên chủ đề</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Hình</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Kiểu</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày tạo</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chức năng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(function (post, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{post.title}</td>
                                            <td>
                                                <img src={urlImage+'post/'+post.image} alt="hinh.png" className="img-fluid" width="50px" height="50px"/>
                                            </td>
                                            <td>
                                            {post.type}
                                            </td>
                                            <td>
                                            {Moment(post.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/post/show/'+post.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/post/update/'+post.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => postDelete(post.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>
                                            {post.id}
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

export default PostList;