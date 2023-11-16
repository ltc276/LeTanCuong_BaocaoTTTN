import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import categoryservice from "../../service/CategorySevice";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";

function CategoryList() {
    const [categorys, setCategorys] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll()
                .then(function (result) {
                    setCategorys(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function categoryDelete($id) {
        categoryservice.remove($id)
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
                        
                        <strong className="text-primary">Sản phẩm</strong>

                    </div>
                    <div className="col-8">
                        
                        <strong className="text-primary"><a href="/admin">Trang chủ</a></strong>

                    </div>
                    <div className="col-1 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/category/create"><MdAdd />Thêm</Link>

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
                            <tbody>
                                {categorys.map(function (category, index) {
                                    return (
                                        <tr key={index}>


                                            <td>{category.name}</td>
                                            <td>
                                                <img src={urlImage + 'category/' + category.image} alt="hinh.png" className="img-fluid" width="50px" height="50px" />
                                            </td>
                                            <td>
                                                {category.slug}
                                            </td>
                                            <td>
                                                {Moment(category.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/category/show/' + category.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/category/update/' + category.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => categoryDelete(category.id)}><FaTrashAlt /></button>
                                            </td>
                                            <td>
                                                {category.id}
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

export default CategoryList;