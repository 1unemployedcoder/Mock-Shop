import React from 'react';
import MyButton from "../UI/button/MyButton";

const GoodsItem = (props) => {
    return (
        <div className='good'>
            <img src={props.post.url} alt={props.post.title}/>
            <div>
                <strong>{props.post.title}</strong>
                <div>Цена: {props.post.price}</div>
            </div>
            <MyButton onClick={() => props.setGood(props.post)}>В корзину</MyButton>
        </div>
    );
};

export default GoodsItem;