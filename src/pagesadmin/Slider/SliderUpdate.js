import { Link, useNavigate, useParams } from "react-router-dom";
import sliderservice from "../../service/SliderService";
import Moment from 'moment';
import { useEffect, useState } from "react";

function SliderUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");
    const [name, setName] = useState("");
    const [link, setLink] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [sort_order, setSortorder] = useState(0);
    const [status, setStatus] = useState(1);
    const [slider, setSlider] = useState([]);
    useEffect(
        function () {
            (async function () {
                await sliderservice.getById(id).then(function (result) {
                    setSlider(result.data.data);
                });
            })();
            setName(slider.name);
            setLink(slider.link);
            setPosition(slider.position);
            setDescription(slider.description);
            setSortorder(slider.sort_order);
            setStatus(slider.status);
        },
        [
            slider.name,
            slider.link,
            slider.position,
            slider.description,
            slider.sort_order,
            slider.status,
            id,
        ]
    );
    async function sliderStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name);
        slider.append("link", link);
        slider.append("position", position);
        slider.append("description", description);
        slider.append("sort_order", sort_order);
        slider.append("status", status);
        if (image.files.length === 0) {
            slider.append("image", "");
        } else {
            slider.append("image", image.files[0]);
        }
        await sliderservice.update(slider, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/slider", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="container">
                    <form method="post" onSubmit={sliderStore}>
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: "#FFCCFF", padding: 10 }}>
                                <div className="row" >
                                    <div className="col-md-10">
                                        <strong className="title1">THÊM DANH MỤC</strong>
                                    </div>
                                    <div className="col-md-2 text-end" style={{ fontWeight: "bold", padding: 10 }}>
                                        <div className="button">
                                            <Link to="/admin/slider" className="backward">
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
                                            <label htmlFor="link">Đường dẫn (link)</label>
                                            <textarea name="link" value={link} onChange={(e) => setLink(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="position">Chức vụ(position)</label>
                                            <textarea name="position" value={position} onChange={(e) => setPosition(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="description">Miêu tả(Description)</label>
                                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="image">Ảnh (Image)</label>
                                            <input type="file" id="image" name="image" className="form-control" />

                                        </div>

                                        <div className="mb-3" style={{ fontWeight: "bold" }}>
                                            <label htmlFor="sort_order">Sort_order</label>
                                            <textarea name="sort_order" value={sort_order} onChange={(e) => setSortorder(e.target.value)} className="form-control"></textarea>

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

export default SliderUpdate;