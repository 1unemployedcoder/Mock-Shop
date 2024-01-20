import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logOut = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <div className='navbar__items'>
                <div>
                    <Link to={'/goods'}>Товары</Link>
                </div>
                <div>
                    <Link to={'/about'}>О проекте</Link>
                </div>
                <div>
                    <MyButton onClick={logOut}>Выйти</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;