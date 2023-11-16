import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../layouts/side/Home";
import ProductDetail from "../pages/product/ProductDetail";
import ProductDetail2 from "../pages/product/ProductDetail2";
import ProfileMain from "../pages/profile/ProfileMain";
import ProfileSetting from "../pages/profile/ProfileSetting";
import ProfileAddress from "../pages/profile/ProfileAddress";
import ProfileWishlist from "../pages/profile/ProfileWishlist";
import ProfileSeller from "../pages/profile/ProfileSeller";
import ProfileOrder from "../pages/profile/ProfileOrder";
import ShoppingCart from "../pages/Cart/Cart";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import Content from "../pages/Content/Content";
import ListingGrid from "../pages/category/Grid";
import ListingList from "../pages/category/Large";
import AllCategory from "../pages/category/Category";
import CategoryDetail from "../pages/category/CategoryDetail";
import CategoryDetail2 from "../pages/category/CategoryDetail2";
const RouterPublic=[
    {path: '/', component:Home},
    {path: '/ho-so-chinh', component:ProfileMain},
    {path: '/ho-so-dat-hang', component:ProfileOrder},
    {path: '/ho-so-cai-dat', component:ProfileSetting},
    {path: '/ho-so-dia-chi', component:ProfileAddress},
    {path: '/ho-so-danh-sach', component:ProfileWishlist},
    {path: '/ho-so-mua-ban', component:ProfileSeller},
    {path: '/gio-hang', component:ShoppingCart},
    {path: '/chi-tiet-san-pham/:slug', component:ProductDetail2},
    {path: '/chi-tiet-san-pham/:slug/:category_id', component:ProductDetail},
    {path: '/dang-nhap', component:Login},
    {path: '/dang-ky', component:Register},
    {path: '/content', component:Content},
    {path: '/listing-grid', component:ListingGrid},
    {path: '/tat-ca-loai', component:AllCategory},
    {path: '/tat-ca-loai/:id', component:CategoryDetail},
    {path: '/tat-ca-loai-2/:id', component:CategoryDetail2},
    {path: '/listing-large', component:ListingList},


];
export default RouterPublic;