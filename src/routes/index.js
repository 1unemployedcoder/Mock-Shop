import Goods from "../pages/Goods";
import GoodPage from "../pages/GoodPage";
import About from "../pages/About";
import {Navigate} from "react-router-dom";
import React from "react";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/goods', element: <Goods/>, caseSensitive: true},
    {path: '/goods/:id', element: <GoodPage/>, caseSensitive: true},
    {path: '/about', element: <About/>, caseSensitive: true},
    {path: '/*', element: <Navigate to={'/goods'}/>, caseSensitive: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, caseSensitive: true},
    {path: '/about', element: <About/>, caseSensitive: true},
    {path: '/*', element: <Navigate to={'/login'}/>, caseSensitive: true},
]