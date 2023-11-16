import { Link, useNavigate, useParams } from "react-router-dom";
import postservice from "../../service/PostService";
import { useEffect, useState } from "react";

function PostUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [title, setTitle] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [topic_id, setTopic_id] = useState(0);
    const [detail, setDetail] = useState("");
    const [type, setType] = useState(0);
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [post, setPost] = useState([]);
    useEffect(
        function () {
            (async function () {
                await postservice.getById(id).then(function (result) {
                    setPost(result.data.data);
                });
            })();
            setTitle(post.title);
            setMetakey(post.metakey);
            setMetadesc(post.metadesc);
            setTopic_id(post.topic_id);
            setDetail(post.detail);
            setType(post.type);
            setStatus(post.status);
        },
        [
            post.metadesc,
            post.metakey,
            post.title,
            post.topic_id,
            post.detail,
            post.type,
            post.status,
            id,
        ]
    );
    async function postStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("title", title);
        post.append("metakey", metakey);
        post.append("metadesc", metadesc);
        post.append("topic_id", topic_id);
        post.append("detail", detail);
        post.append("type", type);
        post.append("status", status);
        if (image.files.length === 0) {
            post.append("image", "");
        } else {
            post.append("image", image.files[0]);
        }

        await postservice.update(post, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/post", { replace: true });
        });
    }
    return (
        <section className="mainList">
        <div className="wrapper">
            <div className="container">
                <form method="post" onSubmit={postStore}>
                    <div className="card">
                        <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                            <div className="row" >
                                <div className="col-md-10">
                                    <strong className="title1">THÊM DANH MỤC</strong>
                                </div>
                                <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                    <div className="button">
                                        <Link to="/admin/post" className="backward">
                                            Go back
                                        </Link>
                                        <button type="submit" className="save">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row" >
                                <div className="col-md-12" >
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="title">Tên chủ đề (title)</label>
                                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />

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
                                        <label htmlFor="image">Ảnh (Image)</label>
                                        <input type="file" id="image" name="image" className="form-control" />

                                    </div>
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="topic_id">Topic_id</label>
                                        <select name="topic_id" className="form-control" value={topic_id} onChange={(e) => setTopic_id(e.target.value)}>

                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>

                                        </select>

                                    </div>
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="detail">Chi tiết (Detail)</label>
                                        <textarea name="detail" value={detail} onChange={(e) => setDetail(e.target.value)} className="form-control"></textarea>

                                    </div>
                                    <div className="mb-3" style={{ fontWeight: "bold" }}>
                                        <label htmlFor="type">Kiểu (Type)</label>
                                        <textarea name="type" value={type} onChange={(e) => setType(e.target.value)} className="form-control"></textarea>

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
    </section>
    );
}

export default PostUpdate;