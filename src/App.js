import React from "react";
import Goods from "./pages/Goods";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import Footer from "./components/UI/footer/Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={'/goods'} element={<Goods/>} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
