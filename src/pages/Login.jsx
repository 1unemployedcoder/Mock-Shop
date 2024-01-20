import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logIn = () => {
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <form className='login'>
            <h1>Авторизация</h1>
            <MyInput
                placeholder='Логин'
            />
            <MyInput
                placeholder='Пароль'
            />
            <MyButton onClick={logIn}>Войти</MyButton>
        </form>
    );
};

export default Login;