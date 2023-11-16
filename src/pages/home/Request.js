import React from "react";
import background from "../../assets/images/banners/banner9.jpg";
import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import contactservice from "../../service/ContactSevice";
function Request() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [user_id, setUsertId] = useState(0);
  const [replay_id, setReplayId] = useState(0);
  const [status, setStatus] = useState(1);
  async function contactStore(event) {
    event.preventDefault();
    var contact = new FormData();
    contact.append("name", name);
    contact.append("email", email);
    contact.append("title", title);
    contact.append("content", content);
    contact.append("phone", phone);
    contact.append("user_id", user_id);
    contact.append("replay_id", replay_id);
    contact.append("status", status);
    await contactservice.create(contact).then(function (res) {
      alert(res.data.message);
      navigate("../../", { replace: true });
    });
  }
  return (
    <section className="padding-bottom">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">Request for Quotation</h4>
      </header>
      <div className="row">
        <div className="col-md-8">
          <div
            className="card-banner banner-quote overlay-gradient"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <div className="card-img-overlay white">
              <h3 className="card-title">
                Hỗ trợ khách hàng
              </h3>
              <p className="card-text" style={{ maxWidth: 400 }}>
                Các nhân viên hỗ trợ khách hàng nên có kiến thức
                chuyên sâu về những sản phẩm và dịch vụ do công ty của họ cung cấp.
                Vai trò của họ cũng có thể bao gồm việc tạo các bài viết trong trung
                tâm hỗ trợ khách hàng.
              </p>
              <a href="" className="btn btn-primary rounded-pill">
                Xem Ngay
              </a>
            </div>
          </div>
        </div>{" "}
        {/* col // */}
        <div className="col-md-4">
          <div className="card card-body">
            <h4 className="title py-3">Nơi tiếp nhận các phản hồi của bạn</h4>
            <form onSubmit={contactStore} method="post">
              <div className="form-group">
                <input
                  className="form-control"
                  name=""
                  placeholder="Bạn tên là gì ?"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name=""
                  placeholder="Hộp thư điện tử của bạn là gì ?"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name=""
                  placeholder="Số điện thoại của bạn là gì ?"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

              </div>
              <div className="form-group">
                <select name="status" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}>

                  <option value="Trả sách">Trả sách</option>
                  <option value="Phục vụ">Phục vụ</option>
                  <option value="Chất lượng sách">Chất lượng sách</option>

                </select>

              </div>
              <div className="form-group">
                <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} className="form-control" placeholder="Phản hồi của bạn là gì ?"></textarea>

              </div>
              <div className="form-group">
                <button className="btn btn-warning">Gửi phản hồi</button>
              </div>
            </form>
          </div>
        </div>{" "}
        {/* col // */}
      </div>{" "}
      {/* row // */}
    </section>
  )
}
export default Request;
