import { Link, useNavigate, useParams } from "react-router-dom";
import contactservice from "../../service/ContactSevice";
import { useEffect, useState } from "react";

function ContactUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [user_id, setUsertId] = useState(0);
    const [replay_id, setReplayId] = useState(0);
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [contact, setContact] = useState([]);
    useEffect(
        function () {
            (async function () {
                await contactservice.getById(id).then(function (result) {
                    setContact(result.data.data);
                });
            })();
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setTitle(contact.title);
            setContent(contact.content);
            setStatus(contact.status);
            setUsertId(contact.user_id);
            setReplayId(contact.replay_id);
            setStatus(contact.status);
        },
        [
            contact.email,
            contact.phone,
            contact.name,
            contact.title,
            contact.content,
            contact.replay_id,
            contact.user_id,
            contact.status,
            id,
        ]
    );
    async function contactStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("user_id", user_id);
        contact.append("replay_id", replay_id);
        contact.append("title", title);
        contact.append("content", content);

        contact.append("status", status);
        await contactservice.update(contact, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/contact", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="container">
                    <form method="post" onSubmit={contactStore}>
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong className="title1">THÊM DANH MỤC</strong>
                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <div className="button">
                                            <Link to="/admin/category" className="backward">
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
                                            <label htmlFor="name">Tên thương hiệu (Name)</label>
                                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="phone">Số điện thoại(Phone)</label>
                                            <textarea name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="email">Email</label>
                                            <textarea name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="title">Title</label>
                                            <textarea name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="content">Content</label>
                                            <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} className="form-control"></textarea>

                                        </div>

                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="user_id">User_id</label>
                                            <textarea name="user_id" value={user_id} onChange={(e) => setUsertId(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="replay_id">Replay_id</label>
                                            <textarea name="replay_id" value={replay_id} onChange={(e) => setReplayId(e.target.value)} className="form-control"></textarea>

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

export default ContactUpdate;