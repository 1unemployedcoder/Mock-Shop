import React, {useContext} from 'react';
import CartItem from "./CartItem";
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context";

const CartList = ({goodsCart, remove, totalPrice, totalQuant}) => {
    const navigate = useNavigate()
    const {setOrder, setTotalQuant, setTotalPrice} = useContext(AuthContext)

    const orderCart = () => {
        navigate('/order/')
        setOrder(goodsCart)
        setTotalQuant(totalQuant)
        setTotalPrice(totalPrice)
    }

    return (
        <div>
            {goodsCart.length
                ? <div className='CartList'>
                    {goodsCart.map((good, index) =>
                        <CartItem key={index} good={good} remove={remove}/>
                    )}
                    <div className='CartList__items'>
                        <strong>Итоговая цена: {totalPrice}</strong>
                        <strong>Всего товаров: {totalQuant}</strong>
                        <MyButton onClick={orderCart}>Оформить заказ</MyButton>
                    </div>
                </div>
                : <div className='title'>Корзина пуста</div>
            }
        </div>
    );
};

export default CartList;