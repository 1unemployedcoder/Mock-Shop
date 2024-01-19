import React from 'react';
import GoodsItem from "./GoodsItem";

const GoodsList = ({goods, setGood}) => {

    if (!goods.length) {
        return <h1 className='not_goods'>Пусто</h1>
    }

    return (
        <div className='goods__container'>
            {goods.map(post =>
                <GoodsItem key={post.id} setGood={setGood} post={post}/>
            )}
        </div>
    );
};

export default GoodsList;