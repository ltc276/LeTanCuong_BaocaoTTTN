import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import brandservice from "../../service/BrandSevice";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";
function BrandList() {

    const [brands, setBrands] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll()
                .then(function (result) {
                    setBrands(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function brandDelete($id) {
        brandservice.remove($id)
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
                        <strong className="text-primary">Thương hiệu</strong>

                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>

                    <div className="col-1 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/brand/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead style={{ backgroundColor: "#FF66CC", fontWeight: "bold" }}>
                                <tr>
                                    <th style={{ padding: 10, textAlign: "left" }}>Tên thương hiệu</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Hình</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Slug</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Ngày tạo</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>Chức năng</th>
                                    <th style={{ padding: 10, textAlign: "left" }}>ID</th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: "#FFFFFF" }}>
                                {brands.map(function (brand, index) {
                                    return (
                                        <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>


                                            <td style={{ padding: 8 }}>{brand.name}</td>
                                            <td style={{ padding: 8 }}>
                                                <img src={urlImage + 'brand/' + brand.image} alt="hinh.png" className="img-fluid" width="50px" height="50px" />
                                            </td>
                                            <td style={{ padding: 8 }}>
                                                {brand.slug}
                                            </td>
                                            <td style={{ padding: 8 }}>
                                                {Moment(brand.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td style={{ padding: 8 }}>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/brand/show/' + brand.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/brand/update/' + brand.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => brandDelete(brand.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td style={{ padding: 8 }}>
                                                {brand.id}
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




export default BrandList;