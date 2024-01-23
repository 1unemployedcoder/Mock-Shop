import Goods from "../pages/Goods";
import GoodPage from "../pages/GoodPage";
import About from "../pages/About";
import {Navigate} from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
import Order from "../pages/Order";

export const privateRoutes = [
    {path: '/Mock-Shop/goods', element: <Goods/>, caseSensitive: true},
    {path: '/Mock-Shop/goods/:id', element: <GoodPage/>, caseSensitive: true},
    {path: '/Mock-Shop/about', element: <About/>, caseSensitive: true},
    {path: '/Mock-Shop/order', element: <Order/>, caseSensitive: true},
    {path: '/Mock-Shop/*', element: <Navigate to={'/Mock-Shop/goods'}/>, caseSensitive: true},
]

export const publicRoutes = [
    {path: '/Mock-Shop/login', element: <Login/>, caseSensitive: true},
    {path: '/Mock-Shop/about', element: <About/>, caseSensitive: true},
    {path: '/Mock-Shop/*', element: <Navigate to={'/Mock-Shop/login'}/>, caseSensitive: true},
]