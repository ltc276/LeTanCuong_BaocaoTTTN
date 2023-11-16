import React from "react";
import loginApi from "../../service/UserSevice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import userservice from "../../service/UserSevice";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function login(e) {
    e.preventDefault();
    var user = new FormData();
    user.append('email',email);
    user.append('password',password);
    user.append('roles',2);
    userservice.loginApi(user).then(function (res){
      if(res.data.success === true){
        navigate('/');
      }else{
        alert('Tài khoản hoặc mật khẩu sai');
      }
    })
  }
  
  return(
  <section className="section-conten padding-y" style={{ minHeight: "84vh" }}>
    {/* ============================ COMPONENT LOGIN   ================================= */}
    <div className="card mx-auto" style={{ maxWidth: 380, marginTop: 100 }}>

      <div className="card-body">
        <h4 className="card-title mb-4">Sign in</h4>
        <form method="post" onSubmit={login}>
          <a href="#" className="btn btn-facebook btn-block mb-2">
            {" "}
            <i className="fab fa-facebook-f" /> &nbsp; Sign in with Facebook
          </a>
          <a href="#" className="btn btn-google btn-block mb-4">
            {" "}
            <i className="fab fa-google" /> &nbsp; Sign in with Google
          </a>
          <div className="form-group">
            <input
              name=""
              className="form-control"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>{" "}
          {/* form-group// */}
          <div className="form-group">
            <input
              name=""
              className="form-control"
              placeholder="Password"
              type="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>{" "}
          {/* form-group// */}
          <div className="form-group">
            <a href="#" className="float-right">
              Quên mật khẩu ?
            </a>
            <label className="float-left custom-control custom-checkbox">
              {" "}
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
              />{" "}
              <div className="custom-control-label"> Ghi nhớ </div>{" "}
            </label>
          </div>{" "}
          {/* form-group form-check .// */}
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
            
              Login
            </button>
          </div>
          {/* form-group// */}
        </form>
      </div>{" "}
      {/* card-body.// */}
    </div>{" "}
    {/* card .// */}
    <p className="text-center mt-4">
      Bạn chưa có tài khoản <a href="/dang-nhap" style={{ color: 'red', fontStyle: 'italic' }}>Đăng ký</a>
    </p>
    <br />
    <br />
    {/* ============================ COMPONENT LOGIN  END.// ================================= */}
  </section>
);
}
export default Login;
