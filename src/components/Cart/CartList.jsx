import React from 'react';
import CartItem from "./CartItem";
import MyButton from "../UI/button/MyButton";

const CartList = ({goodsCart, remove, totalPrice, totalQuant}) => {
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
                        <MyButton>Оформить заказ</MyButton>
                    </div>
                </div>
                : <div className='title'>Корзина пуста</div>
            }
        </div>
    );
};

export default CartList;