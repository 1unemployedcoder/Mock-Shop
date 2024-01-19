import React, {useState} from 'react';
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import GoodCreate from "./Goods/GoodCreate";
import MyInput from "./UI/input/MyInput";
import {useTotalPrice, useTotalQuant} from "../hooks/useTotalCalc";
import {useCartGoods} from "../hooks/useCartGoods";
import Cart from "./Cart/Cart";

const GoodBar = (props) => {
    const [modalCart, setModalCart] = useState(false)
    const [modalGood, setModalGood] = useState(false)
    const [goodsWithQuant, setGoodsWithQuant] = useState([]);

    const totalPrice = useTotalPrice(props.goodsCart)
    const totalQuant = useTotalQuant(props.goodsCart)

    useCartGoods(props.goodsCart, setGoodsWithQuant)

    return (
        <div className='cartCreateSearchBar'>
            <div className='items'>
                <Cart
                    modalCart={modalCart}
                    setModalCart={setModalCart}
                    totalPrice={totalPrice}
                    totalQuant={totalQuant}
                    remove={props.remove}
                    goodsCartID={props.goodsCart.id}
                    goodsWithQuant={goodsWithQuant}
                />
                <div style={{marginLeft: '10px'}}>
                    <MyButton onClick={() => setModalGood(true)}>Создать товар</MyButton>
                </div>
                <div className='search'>
                    <MyInput
                        placeholder='Поиск...'
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </div>
                {modalCart
                    ? <div></div>
                    : <strong>Итоговая цена: {totalPrice}</strong>
                }
                <MyModal
                    setVisible={setModalGood}
                    visible={modalGood}
                >
                    <GoodCreate setModal={setModalGood} create={props.create}/>
                </MyModal>
            </div>
        </div>
    );
};

export default GoodBar;