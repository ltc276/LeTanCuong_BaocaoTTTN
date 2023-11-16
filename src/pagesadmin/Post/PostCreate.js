import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import postservice from "../../service/PostService";
function PostCreate() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [topic_id, setTopicId] = useState(0);
    const [type, setType] = useState(0);
    const [status, setStatus] = useState(1);
    async function postStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("title", title);
        post.append("detail", detail);
        post.append("metakey", metakey);
        post.append("metadesc", metadesc);
        post.append("topic_id", topic_id);
        post.append("type", type);
        post.append("status", status);
        post.append("image", image.files[0]);
        await postservice.create(post).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/post", { replace: true });
        });
    }
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-12 col-md-4 ">
                    <form onSubmit={postStore} method="post">
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong>
                                            Thêm danh mục
                                        </strong>

                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <button className="btn btn-sm  btn-succress me-2 bg-light" type="submit">
                                            Lưu

                                        </button>
                                        <Link to="/admin/post" className="btn-btn-sm btn-succress btn-light">
                                            Về danh sách
                                        </Link>
                                    </div>

                                </div>

                            </div>
                            <div className="card-body">
                                <div className="row" >
                                    <div className="col-md-12" >
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="title">Tiêu đề</label>
                                            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="detail">Chi tiết (Detail)</label>
                                            <textarea name="detail" value={detail} onChange={(e) => setDetail(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="type">Kiểu (Type)</label>
                                            <select name="type" className="form-control" value={type} onChange={(e) => setType(e.target.value)}>

                                                <option value="0">--Hãy chọn--</option>
                                                <option value="1">Mua hàng</option>
                                                <option value="2">Trả hàng</option>
                                                <option value="3">Góp ý</option>
                                                <option value="4">Khác</option>

                                            </select>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="metakey">Từ khoá (Metakey)</label>
                                            <textarea name="metakey" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="metadesc">Khoá tìm kiếm (Metadesc)</label>
                                            <textarea name="metadesc" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="topic_id">Topic_id</label>
                                            <textarea name="topic_id" value={topic_id} onChange={(e) => setTopicId(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="image">Ảnh (Image)</label>
                                            <input type="file" id="image" name="image" className="form-control" />

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="status">Tình trạng (Status)</label>
                                            <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                                <option value="1">Xuất bản 1</option>
                                                <option value="2">Không xuất bản 2</option>

                                            </select>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default PostCreate;