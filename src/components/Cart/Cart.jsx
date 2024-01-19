import React from 'react';
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/modal/MyModal";
import CartList from "./CartList";

const Cart = ({setModalCart, totalQuant, modalCart, goodsCartID, goodsWithQuant, totalPrice, remove}) => {
    return (
        <div>
            <MyButton onClick={() => setModalCart(true)}>Корзина {totalQuant > 0 ?
                <span style={{color: 'gray'}}>{totalQuant}</span> : <p></p>}</MyButton>
            <MyModal
                setVisible={setModalCart}
                visible={modalCart}
            >
                <CartList
                    key={goodsCartID}
                    goodsCart={goodsWithQuant}
                    totalPrice={totalPrice}
                    totalQuant={totalQuant}
                    remove={remove}
                />
            </MyModal>
        </div>
    );
};

export default Cart;