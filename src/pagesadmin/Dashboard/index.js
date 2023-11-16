import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import { useState , useEffect , useParams } from "react";
const Dashboard = () => {
    return (
        <div className="container">
            <div className="Dashboard">
                <div className="Sidebar">
                    <h1 style={{ color: 'red', fontStyle: 'italic' }}>ADMIN</h1>
                    <ul className="Menu">
                        <li><a href="/admin">Home</a></li>
                        <li><a href="/admin/brand">Thương hiệu</a></li>
                        <li><a href="/admin/category">Danh mục</a></li>
                        <li><a href="/admin/contact">Liên hệ</a></li>
                        <li><a href="/admin/menu">Danh sách</a></li>
                        <li><a href="/admin/order">Đặt hàng</a></li>
                        <li><a href="/admin/post">Bài đăng</a></li>
                        <li><a href="/admin/product">Sản phẩm</a></li>
                        <li><a href="/admin/productsale">Sản phẩm giảm giá</a></li>
                        <li><a href="/admin/slider">Trang bìa</a></li>
                        <li><a href="/admin/topic">Đề tài</a></li>
                        <li><a href="/admin/user">Tài khoản</a></li>
                    </ul>
                </div>
                <div className="Content">
                    <header className="Header">
                        <h2>Welcome to the Dashboard!</h2>
                        <button className="Logout-button">Logout</button>
                    </header>
                    <div className="Main-content">
                        <div className="Card">
                            <h3>Total Users</h3>
                            <span className="Count">500</span>
                        </div>
                        <div className="Card">
                            <h3>Revenue</h3>
                            <span className="Count">$10,000</span>
                        </div>
                        <div className="Card">
                            <h3>Orders</h3>
                            <span className="Count">100</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;