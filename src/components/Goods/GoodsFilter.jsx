import React from 'react';
import MySelect from "../UI/select/MySelect";

const GoodsFilter = ({selectedSort, sortGoods, limit, setLimit}) => {
    return (
        <div style={{margin: '20px'}}>
            <div className='app__filter'>
                <MySelect
                    value={selectedSort}
                    onChange={sortGoods}
                    defaultValue='Сортировка'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'price', name: 'По цене'},
                    ]}
                />
            </div>
            <div className='app__filter'>
                <MySelect
                    value={limit}
                    onChange={limit => setLimit(limit)}
                    defaultValue='Кол-во товаров'
                    options={[
                        {value: 9, name: '9 товаров'},
                        {value: 18, name: '18 товаров'},
                        {value: -1, name: 'Все'},
                    ]}
                />
            </div>
        </div>
    );
};

export default GoodsFilter;