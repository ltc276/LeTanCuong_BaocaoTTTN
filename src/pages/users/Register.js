import React from "react";
import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import userservice from "../../service/UserSevice"
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  async function userStore(event) {
    event.preventDefault();
    var user = new FormData();
    user.append("name", name);
    user.append("email", email);
    user.append("phone", phone);
    user.append("username", username);
    user.append("password", password);
    user.append("address", address);
    user.append("roles", 2);
    user.append("status", 1);
    await userservice.create(user).then(function (res) {
      alert(res.data.message);
      navigate("/", { replace: true });

    });

  }
  return (
    <section className="section-content padding-y">
      {/* ============================ COMPONENT REGISTER   ================================= */}
      <div className="card mx-auto" style={{ maxWidth: 520, marginTop: 40 }}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Đăng ký tài khoản</h4>
          </header>
          <form onSubmit={userStore} method="post">
            <div className="form-row">
              <div className="col form-group">
                <label htmlFor="name">Full name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Họ và tên" />
              </div>{" "}
              {/* form-group end.// */}
              <div className="col form-group">
                <label htmlFor="email">Email</label>
                <textarea name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email"></textarea>
              </div>{" "}
              {/* form-group end.// */}
            </div>{" "}
            {/* form-row end.// */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <textarea name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Tên đăng nhập"></textarea>
            </div>{" "}
            {/* form-group end.// */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <textarea name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Mật khẩu"></textarea>
            </div>{" "}
            {/* form-group end.// */}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="phone">Phone</label>
                <textarea name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Số điện thoại"></textarea>
              </div>{" "}
              {/* form-group end.// */}
              <div className="form-group col-md-6">
                <label htmlFor="address">Address</label>
                <textarea name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Địa chỉ"></textarea>
              </div>{" "}


              {/* form-group end.// */}
            </div>{" "}
            {/* form-row.// */}
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                {" "}
                Đăng ký
              </button>
            </div>{" "}
            {/* form-group// */}
            <div className="form-group">
              <label className="custom-control custom-checkbox">
                {" "}
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked=""
                />{" "}
                <div className="custom-control-label">
                  {" "}
                  I am agree with <a href="#">terms and contitions</a>
                </div>{" "}
              </label>
            </div>{" "}
            {/* form-group end.// */}
          </form>
        </article>
        {/* card-body.// */}
      </div>{" "}
      {/* card .// */}
      <p className="text-center mt-4">
        Bạn đã có tài khoản?     <a href="/dang-nhap" style={{ color: 'red', fontStyle: 'italic' }}>Đăng nhập</a>
      </p>
      <br />
      <br />
      {/* ============================ COMPONENT REGISTER  END.// ================================= */}
    </section>
  );
}

export default Register;
