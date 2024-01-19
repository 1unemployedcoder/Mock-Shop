import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const GoodCreate = ({create, setModal}) => {
    const [good, setGood] = useState({title: '', body: '', url: '', price: ''})
    const addNewGood = (e) => {
        e.preventDefault()
        const newGood = {...good, id: Date.now()}
        create(newGood)
        alert('создано')
        setGood({title: '', body: '', url: '', price: ''})
        setModal(false)
    }

    return (
        <form className='good__form'>
            <h1 className='title'>Создание товара</h1>
            <MyInput
                placeholder='Название'
                value={good.title}
                onChange={e => setGood({...good, title: e.target.value})}
            />
            <MyInput
                placeholder='Описание'
                value={good.body}
                onChange={e => setGood({...good, body: e.target.value})}
            />
            <MyInput
                placeholder='Цена'
                value={good.price}
                onChange={e => setGood({...good, price: Number(e.target.value)})}
            />
            <MyInput
                placeholder='Ссылка на картинку'
                value={good.url}
                onChange={e => setGood({...good, url: e.target.value})}
            />
            <MyButton onClick={addNewGood}>Создать</MyButton>
        </form>
    );
};

export default GoodCreate;