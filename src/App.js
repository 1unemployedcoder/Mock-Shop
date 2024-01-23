import React, {useEffect, useState} from "react";
import {HashRouter as Router} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import Footer from "./components/UI/footer/Footer";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [totalQuant, setTotalQuant] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
            order,
            setOrder,
            totalQuant,
            setTotalQuant,
            totalPrice,
            setTotalPrice
        }}>
            <Router>
                <Navbar/>
                <AppRouter/>
                <hr className='addiction__footer'/>
                <Footer/>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
