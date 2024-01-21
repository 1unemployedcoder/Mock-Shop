import React, {useContext} from 'react';
import {AuthContext} from "../context";
import MyButton from "../components/UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const Order = () => {
    const {order, totalQuant, totalPrice} = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <div className='goods__page'>
            <div className='back__Btn'>
                <MyButton onClick={() => navigate('/goods/')}>Назад</MyButton>
            </div>
            <div className='good__pageContainer'>
                <h1 className='title'>Ваш заказ:</h1>
                {order.map(product =>
                    <div className='order__list' key={product.id}>
                        <strong>Название: {product.title}</strong>
                        <div>Описание: {product.body}</div>
                        <img src={product.url} alt={product.title}/>
                        <div>Цена: {product.price}</div>
                        <div>Количество: {product.quantity}</div>
                    </div>
                )}
                <div style={{fontWeight: 'bold'}}>Итоговое количество: {totalQuant}</div>
                <div style={{fontWeight: 'bold'}}>Итоговая цена: {totalPrice}</div>
            </div>
        </div>
    );
};

export default Order;