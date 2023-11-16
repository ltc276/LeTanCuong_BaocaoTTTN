import { Link, useNavigate, useParams } from "react-router-dom";
import userservice from "../../service/UserSevice";
import { useEffect, useState } from "react";

function UserUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [roles, setRoles] = useState("");
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await userservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [user, setUser] = useState([]);
    useEffect(
        function () {
            (async function () {
                await userservice.getById(id).then(function (result) {
                    setUser(result.data.data);
                });
            })();
            setName(user.name);
            setEmail(user.email);
            setPhone(user.phone);
            setUsername(user.username);
            setPassword(user.password);
            setAddress(user.address);
            setRoles(user.roles);
            setStatus(user.status);
        },
        [
            user.phone,
            user.address,
            user.roles,
            user.email,
            user.name,
            user.username,
            user.password,
            user.status,
            id,
        ]
    );
    async function userStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("phone", phone);
        user.append("username", username);
        user.append("password", password);
        user.append("address", address);
        user.append("roles", roles);
        user.append("status", status);
        await userservice.update(user, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/user", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="container">
                    <form method="post" onSubmit={userStore}>
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong className="title1">THÊM DANH MỤC</strong>
                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <div className="button">
                                            <Link to="/admin/user" className="backward">
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
                                            <label htmlFor="username">Username</label>
                                            <textarea name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="password">Password</label>
                                            <textarea name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"></textarea>

                                        </div>

                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="address">Address</label>
                                            <textarea name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="roles">Roles</label>
                                            <textarea name="roles" value={roles} onChange={(e) => setRoles(e.target.value)} className="form-control"></textarea>

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

export default UserUpdate;