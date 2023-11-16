import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import sliderservice from "../../service/SliderService";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";
function SliderList() {

    const [sliders, setSliders] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await sliderservice.getAll()
                .then(function (result) {
                    setSliders(result.data);
                }
                );
        })();
    }, [status_delete]);
    function sliderDelete($id) {
        sliderservice.remove($id)
            .then(function (res) {
                console.log(res.data);
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <p><strong className="text-primary">Slider</strong> </p>
                        <p><small> Nên chỉnh ảnh thành 820x390 pixels</small> </p>


                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>
                    <div className="col-1 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/slider/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead style={{ backgroundColor: "#FF66CC", fontWeight: "bold" }}>
                                <tr>
                                    <th style={{ padding: 10, textAlign: "left" }}>Tên</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Đường dẫn</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Hình</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Kiểu</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày tạo</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chức năng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sliders.map(function (slider, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{slider.name}</td>
                                            <td>
                                                {slider.link}
                                            </td>
                                            <td>
                                                <img src={urlImage + 'slider/' + slider.image} alt="hinh.png" className="img-fluid" width="50px" height="50px" />
                                            </td>
                                            <td>
                                                {slider.type}
                                            </td>
                                            <td>
                                                {Moment(slider.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/slider/show/' + slider.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/slider/update/' + slider.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => sliderDelete(slider.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>{slider.id}</td>
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




export default SliderList;