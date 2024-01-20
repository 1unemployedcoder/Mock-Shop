import React from 'react';
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const GoodsItem = (props) => {
    const navigate = useNavigate()

    return (
        <div className='good'>
            <img src={props.post.url} alt={props.post.title}/>
            <strong>{props.post.title}</strong>
            <div>Цена: {props.post.price}</div>
            <MyButton onClick={() => navigate(`/goods/${props.post.id}`)}>Подробнее</MyButton>
            <MyButton onClick={() => props.setGood(props.post)}>В корзину</MyButton>
        </div>
    );
};

export default GoodsItem;