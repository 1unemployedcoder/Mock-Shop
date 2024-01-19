import React from 'react';
import MyButton from "../UI/button/MyButton";

const CartItem = ({good, remove}) => {
    return (
        <div className='post__cart'>
            <img src={good.url} alt={good.title}/>
            <div>
                <div style={{fontWeight: 'bold'}}>{good.title}</div>
                <div>Количество: {good.quantity}</div>
                <div>Цена: {good.price}</div>
            </div>
            <MyButton onClick={() => remove(good)}>X</MyButton>
        </div>
    );
};

export default CartItem;