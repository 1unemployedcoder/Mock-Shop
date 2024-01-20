import React, {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import Footer from "./components/UI/footer/Footer";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

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
            isLoading
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
